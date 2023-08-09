const http = require('http'); //코어 묘듈 http객체
const express = require('express');
const app = express();
const cors = require('cors'); //html에서 한글 깨지지 않게 가져오기
const ejs = require('ejs');

app.use(cors());
app.use(express.json()); //미들웨어 필요!!!!
app.set('view engine', 'ejs');
app.set('views', './views'); //화면에 보여지는 폴더 views로 지정
app.use(express.static(__dirname + '/public')); //정적 라우팅, css또는 이미지 위치 (현재 서버파일 위치의 /public 폴더에 존재)

app.get('/', (req, res) => {
    res.render('index'); //   ./views/index.ejs를 불러와서 출력
});

const db = require('./models/index');
const { exit } = require('process');
const { Client } = db;

// const { sequelize } = require('./models/index');

// sequelize.sync({ force: false })
//     .then(() => {
//         console.log('데이터베이스 연결 성공');
//     })
//     .catch((err) => {
//         console.error(err);
//     });

app.get('/clientDestory', async (request, response) => {
    await Client.destroy({ where: {} }); //전체삭제
    response.send(await Client.findAll());
    // const query = 'ALTER TABLE your_table AUTO_INCREMENT = 1;';
    // Client.query(query, (error, result) => {
    //     if (error) throw error;
    //     console.log('AUTO_INCREMENT 값 변경 완료');
    // })
});

app.get('/client', async (request, response) => {
    response.send(await Client.findAll());
});

app.post('/join', async (request, response) => {
    console.log(request.body);
    console.log("회원가입");
    const newClient = request.body;

    const exist = await Client.findOne({ where: { name: newClient.id } });
    console.log(exist);
    if (!(exist == undefined)) {
        console.log(newClient.id + "중복 아이디");
        response.send({
            success: false,
            message: "아이디가 이미 존재합니다.",
        });
    }
    else {
        const client = await Client.create({ //build , save시 id값이 자동으로 들어가지 않음
            name: newClient.id,
            email: "ccc@gmail.com",
            password: newClient.pw,
            birthday: "2000-10-10",
            phoneNumber: "010-0000-1234",
            profileImage: "good",
        });
        console.log(client);
        response.send({
            client: client,
            success: true,
            message: "회원가입 되었습니다."
        });
    }
});

app.post('/login', async (request, response) => {
    console.log(request.body);
    const user_id = request.body.id;
    const user_pw = request.body.pw;

    const exist = await Client.findOne({ where: { name: user_id } });
    if (!(exist == undefined)) {
        if (user_pw == exist.password) {
            console.log("로그인!");
            response.send({
                success: true,
                message: "로그인 되었습니다",
            });
        } else {
            console.log("실패");
            response.send({
                success: false,
                message: "비밀번호가 틀립니다.",
            });
        }
    } else {
        console.log("실패");
        response.send({
            success: false,
            message: "존재하지 않는 아이디입니다.",
        });
    }
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
