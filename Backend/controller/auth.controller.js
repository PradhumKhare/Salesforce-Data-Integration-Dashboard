const globals = require("../helper/globals");
const { jsConnection } = require("../helper/util");

let isAuthenticated = false ; 
exports.oauthSetup = function(req, res) {
    console.log(globals.oauth2);
    if (!globals.oauth2) {
        return res.status(500).json({
            message: "Credentials missing for oAuth2...",
        });
    }
    const callBackString = globals.oauth2.getAuthorizationUrl({
        scope: "full refresh_token",
    });
    console.log('callBackString' , callBackString);
    return res.json({callBackString}) ;
}

exports.callBack =  async (req, res) => {
    console.log("!234");
    
    if (!globals.oauth2) {
        return res.status(500).json({
            message: "Credentials missing for oAuth2...",
        });
    }
    const conn = jsConnection(undefined, undefined);
    const { code } = req.query;
    try {
        await conn.authorize(code);
        globals.accessToken = conn.accessToken;
        globals.instanceUrl = conn.instanceUrl;
        isAuthenticated = true ; 
        console.log("globals.accessToken : ",         globals.accessToken);
        console.log("globals.instanceUrl : ",         globals.instanceUrl);

        return res.status(200).redirect("http://localhost:3001");
    } catch (err) {
        isAuthenticated = false ; 
        console.error("OAuth Error:", err);
        res.status(500).send("OAuth Failed");
    }
}

exports.authCheck = (req, res) => {
    res.json({ isAuthenticated });
}