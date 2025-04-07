const globals = require("../helper/globals");
const { jsConnection } = require("../helper/util");

exports.sales = async (req, res) => {
    const conn = jsConnection(globals.accessToken, globals.instanceUrl);
    try {
        const result = await conn.query(
            "Select CALENDAR_MONTH(sale_date__c)  , SUM(Amount__c) from Sales__c where createdDate > Last_year  GROUP BY CALENDAR_MONTH(sale_date__c) ORDER BY CALENDAR_MONTH(sale_date__c)"
        );
        console.log("Sales Data:", result.records);
        const formattedData = result.records.map((item) => ({
            x: item.expr0,
            y: item.expr1,
        }));
        console.log("formatted Data:", formattedData);
        res.json(formattedData);
    } catch (err) {
        console.error("Sales Query Error:", err);
    }
};


exports.interactions = async (req, res) => {
    const {dateRange} = req.query ;
    console.log("dateRange : ",dateRange);    

    const conn = jsConnection( globals.accessToken, globals.instanceUrl);
    try {
        const result = await conn.query("Select Source__c, count(id) from Sales__c where createdDate > Last_year GROUP BY Source__c");
        console.log("interactions Data:", result.records);
        const formattedData = result.records.map(item => ({
            source: item.Source__c,
            count: item.expr0
          }));
        console.log("formatted Data:", formattedData);
        res.json(formattedData);
        res.json(result.records);
    } catch (err) {
        console.error("Interactions Query Error:", err);
    }
}
