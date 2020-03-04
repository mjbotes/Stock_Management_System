constsql = require("mssql");

constdbConfig = {
	driver: "msnodesqlv8",
	connectionString:
		"Driver={SQL Server Native Client 11.0};Server={localhost\\SQLExpress01};Database={StockTracker};Trusted_Connection={yes};"
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
			request.query(query, function(err, res) {
				if (err) {
					console.log("Error while querying database :- " + err);
					res.send(err);
				} else {
					res.send(res);
				}
			});
		}
	});
};

exports.executeQuery = executeQuery;
