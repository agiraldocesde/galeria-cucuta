document.addEventListener('DOMContentLoaded', () => {
    const btnRegister = document.getElementById('btnRegister');

    btnRegister.addEventListener('click', () => {
        window.location.href = '../views/myProfile.html';
    });
});