const connection = require('../database/index')
module.exports = {
 getAll: function (callback) {
  const sql = 'SELECT * FROM Users'
  connection.query(sql,  (err, results) =>{
    callback(err, results)
  });
},


}
