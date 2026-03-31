document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btnLogin');

    btnLogin.addEventListener('click', () => {
        window.location.href = '../views/myProfile.html';
    });
});