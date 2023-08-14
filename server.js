const http = require('http'); //코어 묘듈 http객체
const express = require('express');
const app = express();
const cors = require('cors'); //html에서 한글 깨지지 않게 가져오기
const ejs = require('ejs');

app.use(cors());
app.use(express.json()); //미들웨어 필요!!!!

const home = require("./route/route.js");
app.use("/", home); //미들웨어 /경로로 오면 home으로 보내주기

app.set('view engine', 'ejs');
app.set('views', './views'); //화면에 보여지는 폴더 views로 지정
app.use(express.static(__dirname + '/public')); //정적 라우팅, css또는 이미지 위치 (현재 서버파일 위치의 /public 폴더에 존재)



// const { sequelize } = require('./models/index');

// sequelize.sync({ force: false })
//     .then(() => {
//         console.log('데이터베이스 연결 성공');
//     })
//     .catch((err) => {
//         console.error(err);
//     });


//const { exit } = require('process');
const ctrl = require('./ctrl.js');


app.get('/clientDestory', ctrl.allDelete);

app.get('/client', ctrl.showClient);

app.post('/join', ctrl.joinClient);

app.post('/login', ctrl.login);

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
