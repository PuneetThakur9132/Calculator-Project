const express = require("express");
const app = express();

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
