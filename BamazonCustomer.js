var mysql = require('mysql');
var inquirer = require('inquirer');
var colors = require('colors');
var Table = require('cli-table');

var keys = require('./keys.js');		//Contains the host, port, user, password, and database to be used for in the mySQL database

var connection = mysql.createConnection(keys.connection);

connection.connect(function(err) {
    if (err) throw err;
});

connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;

	var table = new Table({
		head: ["Product ID".cyan, "Product Name".cyan, "Department Name".cyan, "Price".cyan, "Quantity".cyan],
		colWidths: [13, 20, 20, 13, 13],
	});
	
	for(var i = 0; i < res.length; i++) {
		table.push(
		    [res[i].itemID, res[i].ProductName, res[i].DepartmentName, res[i].Price, res[i].StockQuantity]
		);
	}
	
	console.log(table.toString());
});





function exit() {
	connection.end();
	console.log("Good Bye!");
}