let config = {}

// Configure the host and authkey before deploying this app!!
config.host = process.env.HOST || "https://amdocscosmosdb.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "9OUSoYHk2KNS4L5er1BPUlm41jZAZuwVqn2lMHEaT8lNAv4SBbNBcNSDSw8DxP8JZFWLSuajD67mH90JzF1akQ==";
config.databaseId = "OrderDB";
config.collectionId = "PurchaseOrders";
	
module.exports = config;
