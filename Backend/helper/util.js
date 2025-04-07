const jsforce = require("jsforce");
const globals = require("./globals");

exports.jsConnection = ( accessToken, instanceUrl) => {
    let options = {
        oauth2: globals.oauth2 
    };
    if(accessToken) {
        options["accessToken"] = accessToken;
    }
    if(instanceUrl) {
        options["instanceUrl"] = instanceUrl;
    }
    return new jsforce.Connection(options);
};