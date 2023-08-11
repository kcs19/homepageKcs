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

const right_btn = document.querySelector('#right_button');
const left_btn = document.getElementById('left_button');

left_btn.addEventListener('click', changePreviousPic);
right_btn.addEventListener('click', changePic);
var interval = setInterval(changePic, 3000);

function changePic() {
    let select_point = document.querySelector('.select_point');
    let show = document.querySelector('.show');
    if (select_point.nextElementSibling) {
        select_point.nextElementSibling.classList.add('select_point');
        show.nextElementSibling.classList.add('show');
    } else {
        select_point.parentElement.firstElementChild.classList.add('select_point');
        show.parentElement.firstElementChild.classList.add('show');
    }
    show.classList.remove('show');
    select_point.classList.remove('select_point');
}
function changePreviousPic(e) {
    if (e.target.classList.contains('show')) {
        console.log("dfkasjsdf");
    }
    let select_point1 = document.querySelector('.select_point');
    let show1 = document.querySelector('.show');
    console.log("ddd");
    if (select_point1.previousElementSibling) {
        console.log("왼쪽");
        select_point1.previousElementSibling.classList.add('select_point');
        show1.previousElementSibling.classList.add('show');
    } else {
        console.log("더 왼쪽");
        select_point1.parentElement.lastElementChild.classList.add('select_point');
        show1.parentElement.lastElementChild.classList.add('show');
    }
    show1.classList.remove('show');
    select_point1.classList.remove('select_point');
}

const main_stop_btn = document.querySelector('#stop');
main_stop_btn.addEventListener('click', function (e) {
    if (interval) {
        main_stop_btn.style.backgroundPosition = "0 -57px";
        clearInterval(interval);
        interval = null;
    }
    else {
        main_stop_btn.style.backgroundPosition = "0 -28px";
        interval = setInterval(changePic, 3000);
    }
});

let decrease = 0;
const slide_bar = document.querySelector('#slide');
function slide() {
    decrease -= 10
    slide_bar.style.left = decrease + "px";

    // const firstChild = slide_bar.firstElementChild;
    // if (parseInt(slide_bar.style.left) == -500) {
    //     slide_bar.removeChild(firstChild);
    //     slide_bar.appendChild(firstChild);
    // }
}
setInterval(slide, 100);


const loadedName = sessionStorage.getItem("name");
console.log(JSON.parse(loadedName));