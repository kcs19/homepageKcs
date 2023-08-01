const login_inputs = document.querySelectorAll('.login_input');
for (const login_input of login_inputs) {
    login_input.addEventListener('mouseover', function (e) {
        login_input.setAttribute('class', 'login_mouseover');
    });
    login_input.addEventListener('mouseout', function (e) {
        login_input.setAttribute('class', 'login_input');
    });

}
