!(function () {
    'use strict'

    onNet('np-objects:requestObjects', async () => {
      let src = source
      try {
          let staticObjects = await SQL.execute('SELECT * FROM __objects', {})
          let allStaticObjects = []
  
          for (let i = 0; i < staticObjects.length; i++) {
              let object = staticObjects[i];
              let coordinates = JSON.parse(object.coordinates);
              let actualCoords = {
                  x: coordinates.x,
                  y: coordinates.y,
                  z: coordinates.z,
                  h: coordinates.h || 0
              }
  
              allStaticObjects.push({
                  id: object.id,
                  model: object.model,
                  coordinates: actualCoords,
                  metaData: JSON.parse(object.metaData)
              })
          }
  
          let inventoryDrops = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name LIKE @NamePattern', {
              '@NamePattern': 'ground::%'
          })
  
          let allInventoryDrops = []
          for (let i = 0; i < inventoryDrops.length; i++) {
              let drop = inventoryDrops[i]
              let coordsMatch = drop.name.match(/ground::(.+?)::/)
              if (coordsMatch) {
                  let [x, y, z] = coordsMatch[1].split(',').map(coord => parseFloat(coord.trim()))
                  allInventoryDrops.push({
                      id: drop.id,
                      model: drop.item_id,
                      coordinates: { x, y, z },
                      invDrop: true,
                      dropName: `ground::${x},${y},${z}::default`,
                      data: {
                          id: drop.id,
                          metadata: {
                              inventoryId: `ground::${x},${y},${z}::default`,
                              inventoryDrop: true,
                              attachedObjects: {
                                  [drop.item_id]: {
                                      coords: { x, y, z },
                                      itemId: drop.item_id,
                                      variant: 'default',
                                      rotation: undefined,
                                      heading: 0
                                  }
                              }
                          }
                      }
                  });
              }
          }
  
          const combinedObjects = [...allStaticObjects, ...allInventoryDrops]
          emitNet('np-objects:loadObjects', src, combinedObjects)
  
      } catch (error) {
          console.error('Error fetching objects or inventory drops:', error)
      }
  })
  

onNet('np-objects:inv:prepareObject', async (pModel, objX, objY, objZ, objHeading = 0, pMetaData = {}, objectId = null) => {
  const src = source;
  const objCoords = {
      x: objX,
      y: objY,
      z: objZ,
      h: objHeading,
  }

  if (objectId === null || !objectId) {
    console.error(`Critical error: Object ID is null or empty`)
    return false , onNet('DoLongHudText', src, 'Critical error: Object ID is null or empty', 2)
  }

  const formattedX = parseFloat(objX).toFixed(2);
  const formattedY = parseFloat(objY).toFixed(2);
  const formattedZ = parseFloat(objZ).toFixed(2);
  
  const dropName = `ground::${formattedX},${formattedY},${formattedZ}::default`;

  const genRandomId = Array.from({ length: 4 }, () => Math.floor(10 * Math.random()).toString()).join('')

  await SQL.execute('INSERT INTO __objects (model, coordinates, metaData, randomId, id) VALUES (@model, @coordinates, @metaData, @randomId, @id)', {
      model: pModel,
      coordinates: JSON.stringify(objCoords),
      metaData: JSON.stringify(pMetaData),
      randomId: genRandomId,
      id: objectId,
  })

  const result = await SQL.execute('SELECT * FROM __objects WHERE id = @id', { id: objectId })

  if (!result[0]) {
      console.error(`Failed to retrieve object with randomId ${genRandomId}`)
      return
  }

  const pObjectTableSv = {
      dropName: dropName,
      id: result[0].id,
      model: pModel,
      coordinates: objCoords,
      metaData: pMetaData,
      invDrop: true
  }

  emitNet('fmdev:objects:prepareNewObject', -1, pObjectTableSv)
  
  // console.log(`Created ground item: ${dropName} with ID: ${objectId}`)
})

onNet('np-objects:inv:DeleteObject', async (pObjId, invDrop) => {
  let result = await SQL.execute('SELECT * FROM __objects WHERE id = @id', { id: pObjId })

  if (!result[0]) {
    console.error(`Object not found in __objects table with ID: ${pObjId}`)
    return false
  }

  const deleteResult = await SQL.execute('DELETE FROM __objects WHERE id = @id', { id: pObjId })
  
  // console.log(`Deleted object from __objects table: ${pObjId}, success: ${!!deleteResult}`)
  
  if (invDrop) {
    const dropData = {
      ns: 'inventory_drops',
      id: pObjId,
      data: {
        metadata: {
          inventoryDrop: true
        }
      }
    }
    
    TriggerClientEvent("np-objects:objectDeleted", -1, dropData)
  }

  if (deleteResult) {
    const objectData = [
      {
        id: result[0].id,
        model: result[0].model,
        coordinates: JSON.parse(result[0].coordinates),
        metaData: JSON.parse(result[0].metaData),
        randomId: result[0].randomId,
      }
    ];
    
    emitNet('np-objects:clearObjects', -1, objectData)
    return true
  } else {
    return false;
  }
})

onNet('np-objects:prepareObject', async (pModel, objX, objY, objZ, objHeading = 0, pMetaData = {}) => {
  const objCoords = {
      x: objX,
      y: objY,
      z: objZ,
      h: objHeading,
  }

  const genRandomId = Array.from({ length: 4 }, () => Math.floor(10 * Math.random()).toString()).join('')

  await SQL.execute('INSERT INTO __objects (model, coordinates, metaData, randomId) VALUES (@model, @coordinates, @metaData, @randomId)', {
      model: pModel,
      coordinates: JSON.stringify(objCoords),
      metaData: JSON.stringify(pMetaData),
      randomId: genRandomId,
  })

  const result = await SQL.execute('SELECT * FROM __objects WHERE randomId = @randomId', { randomId: genRandomId })

  if (!result[0]) {
      console.error(`Failed to retrieve object with randomId ${genRandomId}`)
      return
  }

  const pObjectTableSv = {
      id: result[0].id,
      model: pModel,
      coordinates: objCoords,
      metaData: pMetaData,
      invDrop: true
  }

  emitNet('fmdev:objects:prepareNewObject', -1, pObjectTableSv);
})


RPC.register('np-objects:SaveObject',async (src,pParam,pObjectModel,objCoords,objHeading,objectMetaData) => {
    let objectCoordsTable = {
        x: objCoords.x,
        y: objCoords.y,
        z: objCoords.z,
        h: objHeading,
    }
    const genRandomId = Math.floor(10 * Math.random()).toString() + Math.floor(10 * Math.random()).toString() + Math.floor(10 * Math.random()).toString() + Math.floor(10 * Math.random()).toString()
    if (!(await SQL.execute('INSERT INTO __objects (model, coordinates, metaData, randomId) VALUES (@model, @coordinates, @metaData, @randomId)',{
          model: pObjectModel,
          coordinates: JSON.stringify(objectCoordsTable),
          metaData: JSON.stringify(objectMetaData),
          randomId: genRandomId,
        }
      ))
    ) {
      return false
    }
    let result = await SQL.execute('SELECT * FROM __objects WHERE randomId = @randomId',{ randomId: genRandomId })
    if (!result[0]) {
      return false
    }
    let objTable = {
      id: result[0].id,
      model: pObjectModel,
      coordinates: objectCoordsTable,
      metaData: objectMetaData,
    }
    return emitNet('fmdev:objects:prepareNewObject', -1, objTable), true
})

  RPC.register('np-objects:DeleteObject', async (src, pObjId) => {
    let result = await SQL.execute('SELECT * FROM __objects WHERE id = @id',{ id: pObjId })
    if (!result[0]) {
      return false
    }
    let _0x1edca6 = {
      id: result[0].id,
      model: result[0].model,
      coordinates: JSON.parse(result[0].coordinates),
      metaData: JSON.parse(result[0].metaData),
      randomId: result[0].randomId,
    }
    return (!!(await SQL.execute('DELETE FROM __objects WHERE id = @id', {
        id: pObjId,
      })) && (emitNet('np-objects:clearObjects', -1, _0x1edca6), true)
    )
  })

RPC.register('np-objects:UpdateObject',async (src, pObjId, pObjModel) => {
  if (!(await SQL.execute('UPDATE __objects SET model = @model WHERE id = @id',{
        model: pObjModel,
        id: pObjId,
      }
    ))
  ) {
    return false
  }
  let result = await SQL.execute('SELECT * FROM __objects WHERE id = @id',{ id: pObjId })
  if (!result[0]) {
    return false
  }
  let _0x201f32 = {
    id: result[0].id,
    model: result[0].model,
    coordinates: JSON.parse(result[0].coordinates),
    metaData: JSON.parse(result[0].metaData),
    randomId: result[0].randomId,
  }
  return emitNet('np-objects:updateObjects', -1, _0x201f32), true
})

})()
