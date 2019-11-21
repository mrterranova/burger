var connection = require("./connection.js");

var orm = {
    selectAll: function(burger_name,burgers_db) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [], function(err, result){
            if (err) throw err;
            console.log(result)
        });
    },
    insertOne : function() {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?,?)"; 
        connection.query(queryString, [], function(err, result){
            if(err) throw err;
            console.log(result)
        });
    }, 
    updateOne: function() {
        var queryString = "UPDATE ?? SET ?? = ?, ?? =? WHERE id = ?";
        connection.query(queryString, [], function(err, result){
            if(err) throw err; 
            console.log(result)
        });
    }
};

module.exports = orm;
