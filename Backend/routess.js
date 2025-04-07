// const express = require("express");
// const router = express.Router();
// const jsforce = require("jsforce");
// const oauth2 = require("./helper/oAuth.helper");

// router.get("/api/sales", async (req, res) => {
//     const conn = new jsforce.Connection({
//         oauth2,
//         accessToken: accessToken, 
//         instanceUrl: instanceUrl, 
//     });

//     try {
//         const result = await conn.query("Select CALENDAR_MONTH(sale_date__c)  , SUM(Amount__c) from Sales__c where createdDate > Last_year  GROUP BY CALENDAR_MONTH(sale_date__c) ORDER BY CALENDAR_MONTH(sale_date__c)");
//         console.log("Sales Data:", result.records);
//         const formattedData = result.records.map(item => ({
//             x: item.expr0,
//             y: item.expr1
//           }));
//         console.log("formatted Data:", formattedData);
//         res.json(formattedData);
//     } catch (err) {
//         console.error("Sales Query Error:", err);
//     }
// });

// router.get("/api/interactions", async (req, res) => {
//     const conn = new jsforce.Connection({
//         oauth2,
//         accessToken: accessToken, 
//         instanceUrl: instanceUrl, 
//     });

//     try {
//         const result = await conn.query("Select Source__c, count(id) from Sales__c where createdDate > Last_year GROUP BY Source__c");
//         console.log("interactions Data:", result.records);
//         const formattedData = result.records.map(item => ({
//             source: item.Source__c,
//             count: item.expr0
//           }));
//         console.log("formatted Data:", formattedData);
//         res.json(formattedData);
//         res.json(result.records);
//     } catch (err) {
//         console.error("Interactions Query Error:", err);
//     }
// });









// let accessToken = null;
// let instanceUrl = null;

// router.get('/oauth/callback',  async (req, res) => {
//     if(!oauth2) {
//         return res.status(500).json({
//             message: "Credentials missing for oAuth2..."
//         });
//     }
//     const conn = new jsforce.Connection({ oauth2 });
//     const { code } = req.query; 
//     try {
//         await conn.authorize(code);
//         accessToken = conn.accessToken;
//         instanceUrl = conn.instanceUrl;
//         res.send("OAuth successful! Access token received.");
        
//     } catch (err) {
//         console.error("OAuth Error:", err);
//         res.status(500).send("OAuth Failed");
//     }

//     });


// module.exports = router;