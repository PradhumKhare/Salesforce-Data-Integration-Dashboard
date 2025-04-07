const { default: chalk } = require("chalk");
const globals = require("../helper/globals");
const { jsConnection } = require("../helper/util");
const { oauthSetup, callBack, authCheck } = require("../controller/auth.controller");

const router = require("express").Router();
router.get("/",oauthSetup );
router.get("/oauth/callback", callBack);
router.get("/check-auth", authCheck );
module.exports = router;
