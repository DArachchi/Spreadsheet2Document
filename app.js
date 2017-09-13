var fs = require("fs");
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "spreadsheet_db"
});

var currentVariable;
var input;
var numberOfVariables = parseInt(process.argv[2]);
var position;
var wordArray;

function getText() {
    fs.readFile("text.txt", "utf-8", function(err,data) {
        console.log(data);
        wordArray = data.split(" ");
        swapVariables();
    });
};

function printParagraph() {
    var finalText = wordArray[0] + " ";
    for (j=1; j<wordArray.length; j++) {
      finalText = finalText + wordArray[j]+ " ";
    }
    console.log(finalText);
};

function swapVariables() {
    for (i=1; i<(numberOfVariables+1); i++) {
        var currentVariable = "variable"+i;
        var position = wordArray.indexOf(currentVariable);
        wordArray.splice(position, 1);
        wordArray.splice(position, 0, process.argv[i+2]);
    }
    printParagraph();
};


connection.connect(function(err) {
//	if (err) throw err;
    console.log("connected as id " + connection.threadId + "\r\n\r\n");
    getText();
});