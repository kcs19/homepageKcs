const myEmartBtn = document.querySelector('#main_login');
myEmartBtn.addEventListener('click', function () {
    let login = confirm("로그인이 필요합니다.\n로그인 팝업을 띄우시겠습니까?");
    if (login) {
        window.open('./login.html', 'ckdtjd', target = "_blank", width = 200, height = 400);
    }
});