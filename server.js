//khai báo các module:
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

//===============================================

//Khai báo middleware
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//===============================================

//Tạo một route để hiển thị trang chủ
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//===============================================

//Tạo một route để xử lý khi client upload file
app.post('/upload', (req, res) => {
    const Data = req.body;
    console.log(Data);
});
  
  
//===============================================

//Chạy
const port = 3000;
app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});