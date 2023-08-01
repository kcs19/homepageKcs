const myEmartBtn = document.querySelector('#myEmart');
myEmartBtn.addEventListener('click', function () {
    let login = confirm("로그인이 필요합니다.\n로그인 팝업을 띄우시겠습니까?");
    if (login) {
        alert("알겠습니다");
    }
});