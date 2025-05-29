// Function to check if a character exists based on `cid`
async function characterExist(cid) {
    console.log
    // Return false if `cid` is not provided
    if (!cid) return false;
  
    try {
      // Use the MySQL library to query the database for the character id
      const [rows] = await MySQL.query(
        'SELECT id FROM characters WHERE id = ?',
        [cid]
      );
  
      // Return true if a character is found, otherwise return false
      return rows.length > 0;
    } catch (error) {
      console.error('Error checking character existence:', error);
      return false;
    }
  }
  
  // Function to get character info based on `cid` and `info`
// async function getCharacter(src) {
//     console.log("THIS IS TESTING",src)
//     let user = global.exports['qb-base'].getModule('Player').GetUser(Number(src))
//     console.log("CLID", user)
    // Return 0 if `cid` is not provided
    // if (!cid) return 0;
  
    // try {
    //   // Use the MySQL library to query the database for the specified info
    //   const [rows] = await MySQL.query(
    //     `SELECT ?? FROM characters WHERE id = ?`,
    //     [info, cid]
    //   );
  
    //   // Return the specified info if found, otherwise return 0
    //   return rows.length > 0 ? rows[0][info] : 0;
    // } catch (error) {
    //   console.error('Error getting character info:', error);
    //   return 0;
    // }
//   }
  

//   exports('getCharacter', getCharacter);