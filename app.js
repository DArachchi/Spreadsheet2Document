var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3307,
	user: "root",
	password: "",
	database: "spreadsheet_db"
});


function printParagraph() {
    console.log("Here is the text.");
}


connection.connect(function(err) {
	if (err) throw err;
    console.log("connected as id " + connection.threadId + "\r\n\r\n");
    printParagraph();
});