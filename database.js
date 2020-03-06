const sql = require("mssql");

const dbConfig = {
	server: "MARNUSB\\SQLEXPRESS01",
	database: "StockTracker",
	driver: "msnodesqlv8",
	user: "admin",
	password: "Admin42"
};

//Function to connect to database and execute query
const executeQuery = function(res, query) {
	sql.connect(dbConfig, function(err) {
		if (err) {
			console.log("Error while connecting database :- " + err);
			res.send(err);
		} else {
			// create Request object
			const request = new sql.Request();
			// query to the database
			request.query(query, function(err, result) {
				if (err) {
					console.log("Error while querying database :- " + err);
					res.send(err);
				} else {
					res.send(result);
				}
			});
		}
	});
};

exports.executeQuery = executeQuery;
