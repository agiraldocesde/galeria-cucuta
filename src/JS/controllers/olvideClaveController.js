document.addEventListener('DOMContentLoaded', () => { 

    const btn = document.getElementById('btnForgivePassword');
    const OCP1 = document.getElementById('OCP1');
    const OCP2 = document.getElementById('OCP2');

    const input1 = document.getElementById('emailForgivePassword1');
    const input2 = document.getElementById('emailForgivePassword2');

    btn.addEventListener('click', () => {
        input2.value = input1.value;
        OCP1.classList.add('hidden');
        OCP2.classList.remove('hidden');
    });

});