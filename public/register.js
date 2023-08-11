const join_form = document.querySelector('.register-form');
const join_btn = join_form.querySelector('button');
join_btn.addEventListener('click', function (e) {
    e.preventDefault(); //새로고침 안되게 하기
    const id_input = join_form.querySelector("input");
    const pw_input = document.querySelector("input:nth-child(2)");
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
        .then((result) => {
            console.log(result);
            if (result.client) {
                alert("회원가입 되었습니다.");
            } else {
                //alert(result.message);
            }
        });

});