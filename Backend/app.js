const express = require('express');
const app = express(); 
const cors = require("cors");
const {Chalk} = require("chalk");

const chalk = new Chalk();
const port = process.env.PORT || 3000;


app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true,
}));


const globals = require('./helper/globals');
const oAuth2 = require("./helper/oAuth.helper");
globals.oauth2 = oAuth2;


// ROUTES
const authRoutes        = require("./routes/auth.routes");
const analyticsRoutes   = require("./routes/analytics.routes");


app.use("/auth", authRoutes);
app.use("/api", analyticsRoutes);

app.get('/', (req, res) => { // Define a route for the root path
    return res.status(200).json({
        message: "Hello world!!"
    });
});

app.get('/health', (req, res) => { // Define a route for the root path
    return res.status(200).json({
        message: "Everything is working fine!!"
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
