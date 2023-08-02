const login_inputs = document.querySelectorAll('.login_input');
for (const login_input of login_inputs) {
    login_input.addEventListener('mouseover', function (e) {
        login_input.setAttribute('class', 'login_mouseover');
    });
    login_input.addEventListener('mouseout', function (e) {
        login_input.setAttribute('class', 'login_input');
    });
}

const login_btn = document.querySelector('#login_btn');
login_btn.addEventListener('click', function (e) {
    alert("gkdl");
});

const join_btn = document.querySelector('#join_btn');
join_btn.addEventListener('click', function (e) {
    //DOM - html 데이터 처리 제어 도와줌 -> 공부
    const id_input = document.querySelector('#id_input');
    const pw_input = document.querySelector('#password');
    const req = {
        id: id_input.value,
        pw: pw_input.value,
    };
    console.log(req); //객체 형태
    console.log(JSON.stringify(req)); //일반 문자열 형태
    fetch(`http://localhost:3000/login`, {
        method: "POST", //http 메소드 (restAPI공부)
        headers: {
            "Content-Type": "application/json", //데이터 타입
        },
        body: JSON.stringify(req),
    })
});
