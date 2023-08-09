const myEmartBtn = document.querySelector('#main_login');

myEmartBtn.addEventListener('click', function () {
    let login = confirm("로그인이 필요합니다.\n로그인 팝업을 띄우시겠습니까?");
    if (login) {
        // window.open("open할 window", "자식창 이름", "팝업창 옵션");
        let login_form = window.open('./login.html', 'loginForm', target = "_blank", "width = 200, height = 400");
        login_form.onload = function () { //로드가 완료되면 실행
            const login_btn = login_form.document.getElementById("login_btn");
            login_btn.addEventListener('click', function () {
                const clientName = login_form.document.getElementById("id_input").value;
                const main_id = document.getElementById("main_login");
                main_id.innerText = clientName + "님 환영합니다!";
                let top_nav_right = document.querySelector('#top_nav_right')
                top_nav_right.removeChild(top_nav_right.lastElementChild);
            });
        }
    }
});

const login_inputs = document.querySelectorAll('#head > ul > li > a > span');

for (const login_input of login_inputs) {
    login_input.addEventListener('mouseover', function (e) {
        login_input.setAttribute('class', 'mouseover');
    });
    login_input.addEventListener('mouseout', function (e) {
        login_input.setAttribute('class', '');
    });
}// 아이디 밑줄