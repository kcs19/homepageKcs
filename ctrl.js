const db = require('./models/index');
const { Client } = db;

const allDelete = async (request, response) => {
    await Client.destroy({ where: {} }); //전체삭제
    response.send(await Client.findAll());
    // const query = 'ALTER TABLE your_table AUTO_INCREMENT = 1;';
    // Client.query(query, (error, result) => {
    //     if (error) throw error;
    //     console.log('AUTO_INCREMENT 값 변경 완료');
    // })
}

const showClient = async (request, response) => {
    response.send(await Client.findAll());
}

const joinClient = async (request, response) => {
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
}

const login = async (request, response) => {
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
}

module.exports = {
    allDelete: allDelete,
    showClient: showClient,
    joinClient: joinClient,
    login: login,
}