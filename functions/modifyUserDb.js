const mysql = require('mysql');

module.exports = {
    getList
  };

var queries = {
    users: 'SELECT * FROM users'
  };

const getList = (queryName, queryParams) => {
    return new Promise(function(resolve, reject){
        con.query(queries[queryName], queryParams, function(err, result, fields){
        if (!err) resolve(result); // Here it is the array of RowDataPackets
        else reject(err);
        });
    });
};