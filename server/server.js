const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(3000, () => {
  console.log(`あのさ、you're connected to port 3000 haHA ~ `)
});
