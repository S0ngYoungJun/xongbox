const express = require('express');
const app = express();
const port = 3000; // 원하는 포트 번호로 변경 가능
const path = require("path");

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});