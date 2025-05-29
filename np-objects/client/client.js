;
(function() {
    'use strict'
    var _0x46657b = {
            678: function(_0x2783f9, _0x4f4e18) {
                Object.defineProperty(_0x4f4e18, '__esModule', {
                    value: true
                })
                _0x4f4e18.Hud =
                    _0x4f4e18.Interface =
                    _0x4f4e18.Utils =
                    _0x4f4e18.Streaming =
                    _0x4f4e18.Zones =
                    _0x4f4e18.Procedures =
                    _0x4f4e18.Events =
                    void 0
                _0x4f4e18.Events = {
                    on: (_0x4f239c, _0x188b24) => {
                        return NPX.Events.on(_0x4f239c, _0x188b24)
                    },
                    onNet: (_0x1f2082, _0x561486) => {
                        return NPX.Events.onNet(_0x1f2082, _0x561486)
                    },
                    emit: (_0x3c6294, ..._0x4b36be) => {
                        return NPX.Events.emit(_0x3c6294, ..._0x4b36be)
                    },
                    emitNet: (_0x2a2b31, ..._0x222c54) => {
                        return NPX.Events.emitNet(_0x2a2b31, ..._0x222c54)
                    },
                    remove: (_0x50be3a, _0x52b798) => {
                        return NPX.Events.remove(_0x50be3a, _0x52b798)
                    },
                }
                _0x4f4e18.Procedures = {
                    register: (_0x5ded20, _0x28b3a3) => {
                        return NPX.Procedures.register(_0x5ded20, _0x28b3a3)
                    },
                    execute: (_0x41a21f, ..._0x2e3772) => {
                        return (
                            console.log('execute', _0x41a21f, _0x2e3772),
                            NPX.Procedures.execute(_0x41a21f, ..._0x2e3772)
                        )
                    },
                }
                _0x4f4e18.Zones = {
                    isActive: (_0x4a4a63, _0x34bec2) => {
                        return NPX.Zones.isActive(_0x4a4a63, _0x34bec2)
                    },
                    onEnter: (_0x494fad, _0x323903) => {
                        return NPX.Zones.onEnter(_0x494fad, _0x323903)
                    },
                    onExit: (_0x541aec, _0x2ec5e1) => {
                        return NPX.Zones.onExit(_0x541aec, _0x2ec5e1)
                    },
                    addBoxZone: (
                        _0xd67b49,
                        _0x5dc9a6,
                        _0x3bbcbc,
                        _0x263cde,
                        _0x121ac8,
                        _0x3d6ce7,
                        _0x1eae1d = {}
                    ) => {
                        return NPX.Zones.addBoxZone(
                            _0xd67b49,
                            _0x5dc9a6,
                            _0x3bbcbc,
                            _0x263cde,
                            _0x121ac8,
                            _0x3d6ce7,
                            _0x1eae1d
                        )
                    },
                    addBoxTarget: (
                        _0x3cbdd1,
                        _0x323eaf,
                        _0x575aee,
                        _0xd03814,
                        _0xb6ba1e,
                        _0x1a8e31,
                        _0x18a195 = {}
                    ) => {
                        return NPX.Zones.addBoxTarget(
                            _0x3cbdd1,
                            _0x323eaf,
                            _0x575aee,
                            _0xd03814,
                            _0xb6ba1e,
                            _0x1a8e31,
                            _0x18a195
                        )
                    },
                }
                _0x4f4e18.Streaming = {
                    loadModel: (_0x175d5f) => {
                        return NPX.Streaming.loadModel(_0x175d5f)
                    },
                    loadTexture: (_0x558b6d) => {
                        return NPX.Streaming.loadTexture(_0x558b6d)
                    },
                    loadAnim: (_0x4b3aed) => {
                        return NPX.Streaming.loadAnim(_0x4b3aed)
                    },
                    loadClipSet: (_0x3ab1c5) => {
                        return NPX.Streaming.loadClipSet(_0x3ab1c5)
                    },
                    loadWeaponAsset: (_0x4cf4c9, _0x279398, _0x59e8c0) => {
                        return NPX.Streaming.loadWeaponAsset(_0x4cf4c9)
                    },
                    loadNamedPtfxAsset: (_0x43533b) => {
                        return NPX.Streaming.loadNamedPtfxAsset(_0x43533b)
                    },
                }
                _0x4f4e18.Utils = {
                    cache: (_0x3897c1, _0x4da209) => {
                        return NPX.Utils.cache(_0x3897c1, _0x4da209)
                    },
                    cacheableMap: (_0x230c78, _0x18cc83) => {
                        return NPX.Utils.cacheableMap(_0x230c78, _0x18cc83)
                    },
                    waitForCondition: (_0x315e22, _0x28f3fe) => {
                        return NPX.Utils.waitForCondition(_0x315e22, _0x28f3fe)
                    },
                    getMapRange: (_0xff253a, _0x3979bc, _0x4c0284) => {
                        return NPX.Utils.getMapRange(_0xff253a, _0x3979bc, _0x4c0284)
                    },
                    getDistance: (
                        [_0x1e608f, _0x162771, _0x497e1a],
                        [_0x540f5e, _0x3cd531, _0x17b643]
                    ) => {
                        return NPX.Utils.getDistance(
                            [_0x1e608f, _0x162771, _0x497e1a],
                            [_0x540f5e, _0x3cd531, _0x17b643]
                        )
                    },
                    getRandomNumber: (_0x55841f, _0x44bb75) => {
                        return NPX.Utils.getRandomNumber(_0x55841f, _0x44bb75)
                    },
                }
                _0x4f4e18.Interface = {
                    addPeekEntryByModel: (_0x78e684, _0xc8ee38, _0x237162) => {
                        return NPX.Interface.addPeekEntryByModel(
                            _0x78e684,
                            _0xc8ee38,
                            _0x237162
                        )
                    },
                    addPeekEntryByTarget: (_0x2eea22, _0x5e960d, _0x4ea8a0) => {
                        return NPX.Interface.addPeekEntryByTarget(
                            _0x2eea22,
                            _0x5e960d,
                            _0x4ea8a0
                        )
                    },
                    addPeekEntryByFlag: (_0x28c072, _0x52b60d, _0x2274c2) => {
                        return NPX.Interface.addPeekEntryByFlag(
                            _0x28c072,
                            _0x52b60d,
                            _0x2274c2
                        )
                    },
                    taskbar: (
                        _0x25f34b,
                        _0x44fcc6,
                        _0x5a8f98 = false,
                        _0x3c3787 = null
                    ) => {
                        return NPX.Interface.taskbar(
                            _0x25f34b,
                            _0x44fcc6,
                            _0x5a8f98,
                            _0x3c3787
                        )
                    },
                    phoneConfirmation: (_0x318877, _0x108705, _0x43fe2c) => {
                        return NPX.Interface.phoneConfirmation(
                            _0x318877,
                            _0x108705,
                            _0x43fe2c
                        )
                    },
                    phoneNotification: (
                        _0x2ba57c,
                        _0x4f62da,
                        _0x2d2fa2,
                        _0x3976df = true
                    ) => {
                        return NPX.Interface.phoneNotification(
                            _0x2ba57c,
                            _0x4f62da,
                            _0x2d2fa2,
                            _0x3976df
                        )
                    },
                }
                _0x4f4e18.Hud = {
                    createBlip: (_0x4f96dd, ..._0x40abf5) => {
                        return NPX.Hud.createBlip(_0x4f96dd, ..._0x40abf5)
                    },
                    applyBlipSettings: (
                        _0x2cf4c7,
                        _0x3f71e5,
                        _0x68e810,
                        _0x5b3cc5,
                        _0x1128e1,
                        _0xfd6b65,
                        _0x526167,
                        _0x40463b
                    ) => {
                        return NPX.Hud.applyBlipSettings(
                            _0x2cf4c7,
                            _0x3f71e5,
                            _0x68e810,
                            _0x5b3cc5,
                            _0x1128e1,
                            _0xfd6b65,
                            _0x526167,
                            _0x40463b
                        )
                    },
                }
            },
            615: function(_0x293865, _0xd0e178) {
                Object.defineProperty(_0xd0e178, '__esModule', {
                    value: true
                })
                _0xd0e178.mathClass = _0xd0e178.loadAnimDict = _0xd0e178.Delay = void 0
                let _0x1d5a62 = (_0x31cc1f) =>
                    new Promise((_0x292590) => setTimeout(_0x292590, _0x31cc1f))
                _0xd0e178.Delay = _0x1d5a62
                async function _0x3cf421(_0x10a763) {
                    while (!HasAnimDictLoaded(_0x10a763)) {
                        RequestAnimDict(_0x10a763)
                        await (0, _0xd0e178.Delay)(5)
                    }
                }
                _0xd0e178.loadAnimDict = _0x3cf421
                class _0x2651c0 {
                    constructor(_0x2b87b9 = 0, _0x27f5f9 = 0, _0x5a3376 = 0) {
                            this.x = _0x2b87b9
                            this.y = _0x27f5f9
                            this.z = _0x5a3376
                        }
                        ['setFromArray'](_0x23b335) {
                            return (
                                (this.x = _0x23b335[0]),
                                (this.y = _0x23b335[1]),
                                (this.z = _0x23b335[2]),
                                this
                            )
                        }
                        ['getArray']() {
                            return [this.x, this.y, this.z]
                        }
                        ['add'](_0x5f40ff) {
                            return (
                                (this.x += _0x5f40ff.x),
                                (this.y += _0x5f40ff.y),
                                (this.z += _0x5f40ff.z),
                                this
                            )
                        }
                        ['addScalar'](_0x2e777e) {
                            return (
                                (this.x += _0x2e777e),
                                (this.y += _0x2e777e),
                                (this.z += _0x2e777e),
                                this
                            )
                        }
                        ['sub'](_0x4343e2) {
                            return (
                                (this.x -= _0x4343e2.x),
                                (this.y -= _0x4343e2.y),
                                (this.z -= _0x4343e2.z),
                                this
                            )
                        }
                        ['equals'](_0x36700a) {
                            return (
                                this.x === _0x36700a.x &&
                                this.y === _0x36700a.y &&
                                this.z === _0x36700a.z
                            )
                        }
                        ['subScalar'](_0x3b9604) {
                            return (
                                (this.x -= _0x3b9604),
                                (this.y -= _0x3b9604),
                                (this.z -= _0x3b9604),
                                this
                            )
                        }
                        ['multiply'](_0x16c4ed) {
                            return (
                                (this.x *= _0x16c4ed.x),
                                (this.y *= _0x16c4ed.y),
                                (this.z *= _0x16c4ed.z),
                                this
                            )
                        }
                        ['multiplyScalar'](_0x546a9d) {
                            return (
                                (this.x *= _0x546a9d),
                                (this.y *= _0x546a9d),
                                (this.z *= _0x546a9d),
                                this
                            )
                        }
                        ['round']() {
                            return (
                                (this.x = Math.round(this.x)),
                                (this.y = Math.round(this.y)),
                                (this.z = Math.round(this.z)),
                                this
                            )
                        }
                        ['floor']() {
                            return (
                                (this.x = Math.floor(this.x)),
                                (this.y = Math.floor(this.y)),
                                (this.z = Math.floor(this.z)),
                                this
                            )
                        }
                        ['ceil']() {
                            return (
                                (this.x = Math.ceil(this.x)),
                                (this.y = Math.ceil(this.y)),
                                (this.z = Math.ceil(this.z)),
                                this
                            )
                        }
                        ['magnitude']() {
                            return Math.sqrt(
                                this.x * this.x + this.y * this.y + this.z * this.z
                            )
                        }
                        ['normalize']() {
                            let _0x53346c = this.magnitude
                            if (isNaN(_0x53346c)) {
                                _0x53346c = 0
                            }
                            return this.multiplyScalar(1 / _0x53346c)
                        }
                        ['forward']() {
                            const _0x5e4c59 = _0x2651c0
                                .fromObject(this)
                                .multiplyScalar(Math.PI / 180)
                            return new _0x2651c0(
                                -Math.sin(_0x5e4c59.z) * Math.abs(Math.cos(_0x5e4c59.x)),
                                Math.cos(_0x5e4c59.z) * Math.abs(Math.cos(_0x5e4c59.x)),
                                Math.sin(_0x5e4c59.x)
                            )
                        }
                        ['getDistance'](_0x354a27) {
                            const [_0x319dc9, _0x327f35, _0x4db30c] = [
                                this.x - _0x354a27.x,
                                this.y - _0x354a27.y,
                                this.z - _0x354a27.z,
                            ]
                            return Math.sqrt(
                                _0x319dc9 * _0x319dc9 +
                                _0x327f35 * _0x327f35 +
                                _0x4db30c * _0x4db30c
                            )
                        }
                        ['getDistanceFromArray'](_0x12865d) {
                            const [_0x60b8, _0x29a21c, _0x39b7b7] = [
                                this.x - _0x12865d[0],
                                this.y - _0x12865d[1],
                                this.z - _0x12865d[2],
                            ]
                            return Math.sqrt(
                                _0x60b8 * _0x60b8 + _0x29a21c * _0x29a21c + _0x39b7b7 * _0x39b7b7
                            )
                        }
                    static['fromArray'](_0x5ad084) {
                        return new _0x2651c0(_0x5ad084[0], _0x5ad084[1], _0x5ad084[2])
                    }
                    static['fromObject'](_0x54700a) {
                        return new _0x2651c0(_0x54700a.x, _0x54700a.y, _0x54700a.z)
                    }
                }
                _0xd0e178.mathClass = _0x2651c0
            },
        },
        _0x995b3e = {}

    function GlobalExportz(_0x23e68c) {
        var _0x320f1e = _0x995b3e[_0x23e68c]
        if (_0x320f1e !== undefined) {
            return _0x320f1e.exports
        }
        var _0x50b858 = (_0x995b3e[_0x23e68c] = {
            exports: {}
        })
        return (
            _0x46657b[_0x23e68c](_0x50b858, _0x50b858.exports, GlobalExportz),
            _0x50b858.exports
        )
    }!(function() {
        GlobalExportz.g = (function() {
            if (typeof globalThis === 'object') {
                return globalThis
            }
            try {
                return this || new Function('return this')()
            } catch (_0x1fbfb4) {
                if (typeof window === 'object') {
                    return window
                }
            }
        })()
    })()
    var _0x38b2af = {}

        !(function() {
            const objectsModule = GlobalExportz(678);
            const utilityModule = GlobalExportz(615);
            let allObjects = [];
            let nearbyObjects = [];
            let isPlacingObject = false;

            setImmediate(async () => {
                await utilityModule.Delay(5000);
                if (allObjects.length === 0) {
                    emitNet('np-objects:requestObjects');
                }
            });

            onNet('np-objects:loadObjects', async (objectsData) => {
                Object.entries(objectsData).forEach(([, objectData]) => {
                    addObjectToZone(objectData);
                });
            });

            onNet('fmdev:objects:prepareNewObject', async (newObjectData) => {
                addObjectToZone(newObjectData);
            });

            on('np-polyzone:enter', async (zoneName, zoneData) => {
                if (zoneName !== 'object_zone') {
                    return;
                }
                const objectIndex = allObjects.findIndex(obj => obj.id.toString() === zoneData.id.toString());
                if (!allObjects[objectIndex]) {
                    return;
                }
                if (allObjects[objectIndex].obj) {
                    return;
                }

                const coordinates = allObjects[objectIndex].coordinates;
                allObjects[objectIndex].obj = await spawnObject(
                    allObjects[objectIndex].model,
                    coordinates.x,
                    coordinates.y,
                    coordinates.z,
                    coordinates.h
                );
                const nearbyIndex = nearbyObjects.findIndex(obj => obj.id.toString() === zoneData.id.toString());
                nearbyObjects[nearbyIndex] = {
                    ...coordinates
                };
            });

            on('np-polyzone:exit', (zoneName, zoneData) => {
                if (zoneName !== 'object_zone') {
                    return;
                }
                const objectIndex = allObjects.findIndex(obj => obj.id.toString() === zoneData.id.toString());
                if (!allObjects[objectIndex] || !allObjects[objectIndex].obj) {
                    return;
                }

                DeleteObject(allObjects[objectIndex].obj);
                allObjects[objectIndex].obj = null;
                nearbyObjects = nearbyObjects.filter(obj => obj.id.toString() !== zoneData.id.toString());
            });

            onNet('np-objects:clearObjects', (objectIds) => {
                objectIds.forEach(objectId => {
                    const nearbyIndex = nearbyObjects.findIndex(obj => obj.id.toString() === objectId.id.toString());
                    if (nearbyIndex !== -1) {
                        nearbyObjects = nearbyObjects.filter(obj => obj.id.toString() !== objectId.toString());
                    }
                    const allIndex = allObjects.findIndex(obj => obj.id.toString() === objectId.id.toString());
                    if (allIndex !== -1) {
                        if (allObjects[allIndex].obj) {
                            DeleteObject(allObjects[allIndex].obj);
                        }
                        allObjects = allObjects.filter(obj => obj.id.toString() !== objectId.id.toString());
                    }
                });
            });

            onNet('np-objects:updateObjects', (updatedObjects) => {
                Object.entries(updatedObjects).forEach(([, updatedObject]) => {
                    const nearbyIndex = nearbyObjects.findIndex(obj => obj.id.toString() === updatedObject.toString());
                    if (nearbyObjects[nearbyIndex]) {
                        nearbyObjects = nearbyObjects.filter(obj => obj.id.toString() !== updatedObject.toString());
                    }

                    const allIndex = allObjects.findIndex(obj => obj.id.toString() === updatedObject.toString());
                    if (allObjects[allIndex]) {
                        if (allObjects[allIndex].obj) {
                            DeleteObject(allObjects[allIndex].obj);
                        }
                        allObjects = allObjects.filter(obj => obj.id.toString() !== updatedObject.toString());
                    }
                });

                addObjectToZone(updatedObjects);
            });

            async function addObjectToZone(objectData) {
                const coordinates = {
                    x: objectData.coordinates.x,
                    y: objectData.coordinates.y,
                    z: objectData.coordinates.z,
                };

                PolyZone.addCircleZone('object_zone', coordinates, Math.max(75, 40), {
                    data: {
                        id: objectData.id
                    }
                });

                let spawnedObject;
                const playerCoordinates = GetEntityCoords(PlayerPedId(), false);

                const distanceToObject = GetDistanceBetweenCoords(
                    playerCoordinates[0], playerCoordinates[1], playerCoordinates[2],
                    coordinates.x, coordinates.y, coordinates.z, true
                );

                if (distanceToObject < 25) {
                    const heading = objectData.coordinates.h ?? 0;
                    spawnedObject = await spawnObject(objectData.model, coordinates.x, coordinates.y, coordinates.z, heading);
                    nearbyObjects.push({
                        id: objectData.id,
                        vector: coordinates
                    });
                }

                if (objectData.invDrop) {
                    const x = coordinates.x
                    const y = coordinates.y
                    const z = coordinates.z

                    const GhostMetadata = objectData["data"] && objectData["data"]["metadata"] ? objectData["data"]["metadata"] : {
                        inventoryDrop: objectData.invDrop || false,
                        attachedObjects: {
                            ['glock']: {
                                coords: {
                                    x,
                                    y,
                                    z
                                },
                                itemId: ['glock'],
                                variant: 'default',
                                rotation: undefined,
                                heading: 0
                            }
                        }
                    };
                    
                    const dropData = {
                        ns: 'inventory_drops',
                        id: objectData.id,
                        dropName: objectData.dropName,
                        inventoryId: objectData.id,
                        x: objectData.coordinates.x,
                        y: objectData.coordinates.y,
                        z: objectData.coordinates.z,
                        data: {
                            id: objectData.id,
                            metadata: GhostMetadata,
                        },
                        attachedEntities: {
                            itemStacks: [objectData.model],
                            handle: spawnedObject
                        }
                    };

                    emit('np-objects:objectCreated', dropData, spawnedObject);
                }


                allObjects.push({
                    id: objectData.id,
                    model: objectData.model,
                    coordinates: objectData.coordinates,
                    metaData: objectData.metaData,
                    obj: spawnedObject,
                });

                return allObjects;
            }


            function delay(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            async function loadModelFM(model) {
                if (IsModelValid(model)) {
                    RequestModel(model);
                    let timeout = false;
                    setTimeout(() => timeout = true, 3000);
                    while (!HasModelLoaded(model) && !timeout) {
                        await delay(10);
                    }
                    return !timeout;
                }
                return false;
            }


            async function spawnObject(model, x, y, z, heading) {
                await loadModelFM(model);
                const hashKey = GetHashKey(model);
                const object = CreateObjectNoOffset(hashKey, x, y, z, false, false, false);

                if (heading !== undefined) {
                    if (typeof heading === 'number') {
                        SetEntityHeading(object, heading);
                    } else if (heading.x !== undefined && heading.y !== undefined && heading.z !== undefined) {
                        SetEntityRotation(object, heading.x, heading.y, heading.z, 2, true);
                    }
                }

                FreezeEntityPosition(object, true);
                return object;
            }
            on('onResourceStop', (resourceName) => {
                if (resourceName !== 'np-objects') {
                    return;
                }
                allObjects.forEach(object => {
                    if (object.obj) {
                        DeleteObject(object.obj);
                    }
                });
            });

            function getObjectByEntity(entityId) {
                let foundObject = null;
                allObjects.forEach(object => {
                    if (Number(object.obj) === Number(entityId)) {
                        foundObject = object;
                    }
                });
                return foundObject;
            }

            GlobalExportz.g.exports('GetObjectByEntity', getObjectByEntity);

            function getObject(objectId) {
                const objectIndex = allObjects.findIndex(obj => obj.id.toString() === objectId.toString());
                return allObjects[objectIndex] || null;
            }

            GlobalExportz.g.exports('GetObject', getObject);

            function deleteObject(objectId) {
                return RPC.execute('np-objects:DeleteObject', objectId);
            }

            GlobalExportz.g.exports('DeleteObject', deleteObject);

            function updateObject(objectId, objectData) {
                RPC.execute('np-objects:UpdateObject', objectId, objectData);
            }

            GlobalExportz.g.exports('UpdateObject', updateObject);

            RegisterCommand('getObject', (source, args) => {
                const entityId = args[0];
                const object = getObjectByEntity(entityId);
                console.log('[np-objects] getObject return: ', object);
            }, false);

            RegisterCommand('objects:print', () => {
                console.log(allObjects);
            }, false);
        })();


    !(function() {

        // (function () {

        const mathClass = GlobalExportz(615);

        let isPlacingObject = false;

        const placeAndSaveObject = async (model, options = {}, params, condition = () => true, category = 'objects', callback) => {
            const [success, objectData] = await placeObject(model, params, condition);
            if (!success) {
                return null;
            }
            return await RPC.execute('np-objects:SaveObject', category, model, objectData.coords, objectData.rotation, options, callback);
        };

        GlobalExportz.g.exports('PlaceAndSaveObject', placeAndSaveObject);

        const placeObject = async (model, options = {}, condition = () => true) => {
            if (isPlacingObject) {
                return [false, null];
            }

            const modelName = typeof model === 'string' ? model.trim() : model;

            if (!IsModelValid(modelName)) {
                return [false, null];
            }

            isPlacingObject = true;
            await loadModel(modelName);

            const [minDim, maxDim] = GetModelDimensions(modelName);
            const dimensions = mathClass.fromArray(maxDim).sub(mathClass.fromArray(minDim));

            const playerPed = PlayerPedId();
            let {
                groundSnap,
                forceGroundSnap,
                zOffset = 0,
                useModelOffset,
                alignToSurface = false,
                surfaceOffset = 0,
                distance = 10,
                collision = true,
                colZOffset = 0,
                adjustZ
            } = options;
            let heading = GetEntityHeading(playerPed);
            let isZAdjusting = false;

            const object = CreateObjectNoOffset(modelName, 0, 0, 0, false, false, false);
            SetEntityAlpha(object, 200, false);
            SetEntityCollision(object, false, false);
            SetCanClimbOnEntity(object, false);
            SetEntityDrawOutlineColor(255, 0, 0, 128);

            const placementLoop = setTick(async () => {
                const [hit, , hitCoords, surfaceNormal] = await getCameraTarget(19, object, distance);
                if (hit) {
                    const position = mathClass.fromArray(hitCoords);
                    if (!groundSnap && useModelOffset) {
                        position.z += dimensions.z / 2;
                    }

                    if (alignToSurface) {
                        heading = -Math.atan2(surfaceNormal[0], surfaceNormal[1]) * (180 / Math.PI) + 180;
                        SetEntityHeading(object, heading);
                    } else {
                        SetEntityHeading(object, heading);
                    }

                    SetEntityCoords(object, position.x, position.y, position.z, false, false, false, false);
                    if (groundSnap) {
                        PlaceObjectOnGroundProperly_2(object);
                    }

                    if (zOffset !== 0) {
                        const currentPos = mathClass.fromArray(GetEntityCoords(object, false));
                        SetEntityCoords(object, currentPos.x, currentPos.y, currentPos.z + zOffset, false, false, false, false);
                    }

                    const objectPos = groundSnap ? mathClass.fromArray(GetEntityCoords(object, true)) : position;
                    const isValidPlacement = !collision || checkCollision(object, playerPed, dimensions, objectPos, colZOffset);

                    if (isValidPlacement && condition(objectPos, surfaceNormal, object, dimensions)) {
                        SetEntityDrawOutline(object, false);
                    } else {
                        SetEntityDrawOutline(object, true);
                    }
                }

                if (options.afterRender) {
                    options.afterRender(object, !!hit, isValidPlacement);
                }
            });

            const inputLoop = setTick(() => {
                handleInput(object, heading, zOffset, isZAdjusting, groundSnap, forceGroundSnap, useModelOffset, adjustZ, distance);
            });

            await waitUntilFalse(() => isPlacingObject);

            clearTick(placementLoop);
            clearTick(inputLoop);

            const finalCoords = mathClass.fromArray(GetEntityCoords(object, true));
            const finalRotation = mathClass.fromArray(GetEntityRotation(object, 2));
            const quaternion = GetEntityQuaternion(object);

            deleteObject(object);
            isPlacingObject = false;

            if (!isPlacingObject) {
                return [false, null];
            }

            return [true, {
                coords: finalCoords,
                rotation: finalRotation,
                quaternion
            }];
        };

        GlobalExportz.g.exports('PlaceObject', placeObject);

        function checkCollision(object, player, dimensions, position, colZOffset) {
            const rotation = mathClass.fromArray(GetEntityRotation(object, 2));
            const adjustedDimensions = mathClass.fromObject(dimensions).multiplyScalar(0.75);
            const shapeTest = StartShapeTestBox(position.x, position.y, position.z + colZOffset, adjustedDimensions.x, adjustedDimensions.y, adjustedDimensions.z, rotation.x, rotation.y, rotation.z, 2, 83, player, 4);
            const [, hit] = GetShapeTestResultIncludingMaterial(shapeTest);
            return hit;
        }

        function getCameraTarget(flags, entity, distance = 5) {
            const camCoords = GetGameplayCamCoord();
            const [pitch, , heading] = GetGameplayCamRot(0).map(deg => deg * (Math.PI / 180));
            const direction = [
                -Math.sin(heading) * Math.cos(pitch),
                Math.cos(heading) * Math.cos(pitch),
                Math.sin(pitch)
            ];

            const start = direction.map((v, i) => camCoords[i] + v);
            const end = direction.map((v, i) => camCoords[i] + v * (distance + mathClass.fromArray(GetEntityCoords(PlayerPedId(), false)).getDistanceFromArray(camCoords)));

            const shapeTest = StartShapeTestSweptSphere(start[0], start[1], start[2], end[0], end[1], end[2], 0.2, flags, entity, 7);
            return GetShapeTestResultIncludingMaterial(shapeTest);
        }

        function deleteObject(object) {
            if (DoesEntityExist(object)) {
                DeleteObject(object);
            }
        }

        async function loadModel(model) {
            if (IsModelValid(model)) {
                RequestModel(model);
                let timeout = false;
                setTimeout(() => timeout = true, 3000);
                while (!HasModelLoaded(model) && !timeout) {
                    await delay(10);
                }
                return !timeout;
            }
            return false;
        }

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function waitUntilFalse(condition) {
            return new Promise(resolve => {
                const interval = setInterval(() => {
                    if (!condition()) {
                        clearInterval(interval);
                        resolve();
                    }
                }, 1);
            });
        }

        function handleInput(object, heading, zOffset, isZAdjusting, groundSnap, forceGroundSnap, useModelOffset, adjustZ, distance) {
            DisableControlAction(0, 44, true);
            DisableControlAction(0, 46, true);
            DisableControlAction(0, 140, true);
            DisableControlAction(0, 20, true);
            DisableControlAction(0, 16, true);
            DisableControlAction(0, 17, true);
            DisableControlAction(0, 36, true);

            const isSlowMode = IsDisabledControlPressed(0, 36);

            if (IsDisabledControlPressed(2, 17)) {
                if (isZAdjusting) {
                    zOffset += isSlowMode ? 0.1 : 0.5;
                } else {
                    heading += isSlowMode ? 1 : 5;
                    if (!isSlowMode) {
                        heading = Math.round(heading);
                    }
                }
            } else if (IsDisabledControlPressed(2, 16)) {
                if (isZAdjusting) {
                    zOffset -= isSlowMode ? 0.1 : 0.5;
                } else {
                    heading -= isSlowMode ? 1 : 5;
                    if (!isSlowMode) {
                        heading = Math.round(heading);
                    }
                }
            }

            if (heading > 360) {
                heading -= 360;
            } else if (heading < 0) {
                heading += 360;
            }

            if (groundSnap && !forceGroundSnap && IsDisabledControlJustPressed(0, 44)) {
                groundSnap = !groundSnap;
            }

            if (useModelOffset && IsDisabledControlJustPressed(0, 140)) {
                useModelOffset = !useModelOffset;
            }

            if (adjustZ && IsDisabledControlJustPressed(0, 20)) {
                isZAdjusting = !isZAdjusting;
                SetEntityAlpha(object, isZAdjusting ? 255 : 200, false);
            }

            if (IsDisabledControlJustPressed(0, 200) || IsDisabledControlJustPressed(0, 177)) {
                isPlacingObject = false;
            }

            if (IsDisabledControlJustPressed(0, 46)) {
                isPlacingObject = false;
            }
        }

        on('onResourceStop', (resource) => {
            if (resource === 'np-objects') {
                isPlacingObject = false;
            }
        });
    })();

})()