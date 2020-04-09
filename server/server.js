const express = require('express');
const app = express();
// const path = require('path');

// app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static('/Users/tylerrhodes/React boiler /client/dist'));

app.listen(3000, () => {
  console.log('you\'re connected to port 3000')
});








