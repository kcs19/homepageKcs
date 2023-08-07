const login_inputs = document.querySelectorAll('.login_input');
for (const login_input of login_inputs) {
    login_input.addEventListener('mouseover', function (e) {
        login_input.setAttribute('class', 'login_mouseover');
    });
    login_input.addEventListener('mouseout', function (e) {
        login_input.setAttribute('class', 'login_input');
    });
}// 아이디 밑줄

const join_btn = document.querySelector('#join_btn');
join_btn.addEventListener('click', function (e) {
    alert("gkdl");
    const id_input = document.querySelector("#id_input");
    const pw_input = document.querySelector("#password");
    const req = {
        id: id_input.value,
        pw: pw_input.value,
    };
    console.log(req);

    fetch('http://localhost:3000/join', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((response) => response.json())
        .then((result) => console.log(result));

});

const login_btn = document.querySelector('#login_btn');
login_btn.addEventListener('click', function (e) {

    const id_input = document.querySelector('#id_input');
    const pw_input = document.querySelector('#password');
    const req = {
        id: id_input.value,
        pw: pw_input.value,
    };
    //console.log(req); //객체 형태
    //console.log(JSON.stringify(req)); //일반 문자열 형태
    fetch(`http://localhost:3000/login`, {
        method: "POST", //http 메소드 (restAPI공부)
        headers: {
            "Content-Type": "application/json", //데이터 타입
        },
        body: JSON.stringify(req), //스크립트 객체를 string타입 json형식으로
    })
        .then((response) => response.json())
        .then((result) => {
            //console.log(result);
            //console.log(result.message);
            const login_false = document.querySelector('#login_false');
            if (result.success) {
                alert("로그인 되었습니다");
                login_false.style.visibility = "hidden";


            } else {
                login_false.style.visibility = "visible";
            }
        })
        .catch((error) => console.log(error));
});
