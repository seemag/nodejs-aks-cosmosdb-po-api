let config = {}

// Configure the host and authkey before deploying this app!!
config.host = process.env.HOST || "https://nodeakscosmosdb.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "rE2NlwUHxiXSvYahegMjPxsMnk5lSvy573sci4c5sws77T3pgVifjo7mZjXr6rgtUqTOJCLvirqeHaSOtbyrRg==";
config.databaseId = "OrderDB";
config.collectionId = "PurchaseOrders";
	
module.exports = config;
