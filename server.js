// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");

const app = express();

var hedera = require("./hedera").myApp;

hedera.init();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/balance", async (request, response) => {
  // express helps us take JS objects and send them as JSON
    let resp = await hedera.hashSdk.triggerCheckBalance({accountID:request.query.account_id}, (err, res) => {
      console.log('SUCCESS ACCOUNT_INFO cb:::', res);
      console.log('ERROR ACCOUNT_INFO cb:::', err);
    });
    response.json([resp.balance]);
});

// listen for requests :)

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});