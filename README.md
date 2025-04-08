Salesforce Data Integration Dashboard

This project is a full-stack application for visualizing Salesforce sales data.

Frontend Setup (React)

Navigate to the frontend directory:

cd Frontend/sf-dashboard

Install dependencies:

npm install

Start the frontend server:

npm start

Backend Setup (Node.js + Express)

Navigate to the backend directory:

cd Backend

Install backend dependencies:

npm install

Create a .env file in the root of the Backend folder with the following:

SF_CLIENT_ID=your_salesforce_client_id
SF_CLIENT_SECRET=your_salesforce_client_secret
SF_REDIRECT_URI=http://localhost:3000/oauth/callback
SF_LOGIN_URL=https://login.salesforce.com
FRONTEND_BASE_URL

Start the backend server:

node server.js

Salesforce Access

To fetch data from Salesforce, you must have access to a Salesforce Org and a configured connected app with API and OAuth scopes enabled.


LOOM LINK : https://www.loom.com/share/c294ade6b7334d1d9fc4d197cb7f7570?sid=f1fccdbc-e084-40d6-bd0c-bb694c224919
