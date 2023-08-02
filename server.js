const http = require('http'); //코어 묘듈 http객체
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); //미들웨어 필요!!!!

const db = require('./models/index');
const { Member } = db;

const { sequelize } = require('./models/index');

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

app.post('/login', async (request, response) => {
    console.log(request.body);
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
