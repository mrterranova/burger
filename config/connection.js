var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "bmsyhziszmhf61g1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "z80oqju65ovyua5z",
  password: "s8du9viktu1rt4ey",
  database: "lybvyfhs4itkua2j"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
