// Import connect to MySQL
var connection = require("../config/connection.js");

var orm = {
  //GET all in ORM
  all: function(tableInput, cb) {
    //create a query string for showing entries in MySQL
    var queryString = "SELECT * FROM " + tableInput + ";";

    //show all burger entries from MySQL
    connection.query(queryString, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },

  //POST in ORM
  create: function(table, cols, vals, cb) {
    //create a query string for creating entries into MySQL 
    var queryString = "INSERT INTO " + table + " (" + cols.toString() +") ";
    queryString += "VALUES ('" + vals[0] + "', '" + vals[1] + "') ";

    //now insert data into MySQL
    connection.query(queryString, vals, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },

  // PUT in ORM
  update: function(table, objColVals, condition, cb) {
    //create a query string for updating entries into MySQL
    var queryString = "UPDATE " + table + " SET devoured=0 WHERE " + condition;

    //update devoured in table
    connection.query(queryString, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },

  //DELETE in ORM
  delete: function(table, condition, cb) {
    //create a query string for deleting entries into MySQL
    var queryString = "DELETE FROM " + table + " WHERE " + condition;

    //delete devoured in table
    connection.query(queryString, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
