var connection = require("./connection.js");

var orm = {
    selectAll: function(burger_name,burgers_db) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [], function(err, result){
            if (err) throw err;
            console.log(result)
        });
    },
    allClients: function(clientName, tableName) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [clientName, tableName], function(err, result){
            if (err) throw err;
            console.log("\n------------CLIENT------------")
            console.log(result)
        })
    }, 
    findGrownUp: function(tableName, colToSearch, valOfCol){
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableName, colToSearch, valOfCol], function(err, result){
            if (err) throw err;
            console.log("\n-----------GROWN_UP---------")
            console.log(result)
        })
    }, 
    clientAndParty: function(selection, tableParty, tableClient, onTableOneCall, onTableTwoCall){
        var queryString = "SELECT ?? FROM ?? AS tOne LEFT JOIN ?? AS tTwo ON tOne.?? = tTwo.??";
        connection.query(queryString, [selection, tableParty, tableClient, onTableOneCall, onTableTwoCall], function(err, result){
            if (err) throw err;
            console.log("\n--------------JOIN----------------")
            console.log(result)
        })
    }

};

module.exports = orm;
