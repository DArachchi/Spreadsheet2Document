var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3307,
	user: "root",
	password: "",
	database: "spreadsheet_db"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\r\n");
});