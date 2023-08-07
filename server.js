const http = require('http'); //코어 묘듈 http객체
const express = require('express');
const app = express();
const cors = require('cors'); //html에서 한글 깨지지 않게 가져오기

app.use(cors());
app.use(express.json()); //미들웨어 필요!!!!

const db = require('./models/index');
const { Member } = db;

// const { sequelize } = require('./models/index');

// sequelize.sync({ force: false })
//     .then(() => {
//         console.log('데이터베이스 연결 성공');
//     })
//     .catch((err) => {
//         console.error(err);
//     });

const users = {
    id: ["qwer"],
    pw: ["1234"],
};

app.post('/login', async (request, response) => {
    console.log(request.body);
    const user_id = request.body.id;
    const user_pw = request.body.pw;
    if (users.id.includes(user_id)) {
        if (user_pw == users.pw[users.id.indexOf(user_id)]) {
            console.log("로그인!");
            response.send({
                success: true,
                message: "로그인 되었습니다",
            });
        } else {
            console.log("실패");
            response.send({
                success: false,
                message: "로그인에 실패하셨습니다",
            });
        }
    }
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
