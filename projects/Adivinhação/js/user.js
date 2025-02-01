export const salvarUser = () => {
    const perfil = document.querySelector('#contUser');

    localStorage.setItem('imgUser', document.querySelector('#imgPerfil img').src);
    localStorage.setItem('nomeUser',  document.querySelector('#nickName').value);
    localStorage.setItem('colorUser', document.querySelector('#color').value);
    document.querySelector('#imgUser').src = localStorage.getItem('imgUser');
    document.querySelector('#name').innerHTML = localStorage.getItem('nomeUser');
    document.querySelector('#imgUser').style.background = localStorage.getItem('colorUser');
    document.querySelector('#imgPerfil img').src = localStorage.getItem('imgUser');
    document.querySelector('#nickName').value = localStorage.getItem('nomeUser');
    document.querySelector('#imgPerfil img').style.background = localStorage.getItem('colorUser');
    perfil.style.display = "none";
};