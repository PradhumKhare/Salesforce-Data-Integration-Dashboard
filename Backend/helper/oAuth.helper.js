const jsforce = require("jsforce");
const {Chalk} = require("chalk")
require('dotenv').config();

const chalk = new Chalk();
let oauth2 = undefined;
const CLIENT_ID = process.env.SF_KEY;
const CLIENT_SECRET = process.env.SF_SECRET;
const REDIRECT_URI = 'http://localhost:3000/auth/oauth/callback'; 


if(REDIRECT_URI && CLIENT_SECRET && CLIENT_ID) {
    oauth2 = new jsforce.OAuth2({
        loginUrl: "https://login.salesforce.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        redirectUri: REDIRECT_URI,
    });
    if(oauth2) {
        console.log(chalk.bgGreen("oAuth2 connection established"));
    }
   
} else {
    console.log(chalk.bgRed("Credentials missing for oAuth2..."));
}


module.exports = oauth2;