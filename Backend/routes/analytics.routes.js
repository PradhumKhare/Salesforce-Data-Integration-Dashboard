const express = require("express");
const router = express.Router();
const { sales, interactions } = require("../controller/analytics.controller");


router.get("/sales", sales);

router.get("/interactions", interactions);

module.exports = router;