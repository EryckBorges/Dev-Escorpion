//Mondsthad

export const dilucAvatarCompra = () => {

    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('dilucAvatar') !== 'comprado') {
        localStorage.setItem('dilucAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starDiluc');
        imgElement.src = localStorage.getItem('iconDiluc');
        imgCaracter.src = localStorage.getItem('imgDiluc');
        nomeCaracter.innerHTML = localStorage.getItem('nomeDiluc');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        dilucAvatar.innerHTML = "Esgotado";
        dilucAvatar.style.background = "#dd1440";
        dilucAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('dilucAvatar') == 'comprado') {
        dilucAvatar.innerHTML = "Esgotado";
        dilucAvatar.style.background = "#dd1440";
        dilucAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('dilucAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        dilucAvatar.innerHTML = "Indisponivel";
        dilucAvatar.style.background = "#dd1440";
        dilucAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                dilucAvatar.innerHTML = "Comprar";
                dilucAvatar.style.background = "black";
                dilucAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
};

export const ventiAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('ventiAvatar') !== 'comprado') {
        localStorage.setItem('ventiAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starVenti');
        imgElement.src = localStorage.getItem('iconVenti');
        imgCaracter.src = localStorage.getItem('imgVenti');
        nomeCaracter.innerHTML = localStorage.getItem('nomeVenti');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        ventiAvatar.innerHTML = "Esgotado";
        ventiAvatar.style.background = "#dd1440";
        ventiAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('ventiAvatar') == 'comprado') {
        ventiAvatar.innerHTML = "Esgotado";
       ventiAvatar.style.background = "#dd1440";
        ventiAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('ventiAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        ventiAvatar.innerHTML = "Indisponivel";
        ventiAvatar.style.background = "#dd1440";
        ventiAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                ventiAvatar.innerHTML = "Comprar";
                ventiAvatar.style.background = "black";
                ventiAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
};

export const kleeAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('kleeAvatar') !== 'comprado') {
        localStorage.setItem('kleeAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starKlee');
        imgElement.src = localStorage.getItem('iconKlee');
        imgCaracter.src = localStorage.getItem('imgKlee');
        nomeCaracter.innerHTML = localStorage.getItem('nomeKlee');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        kleeAvatar.innerHTML = "Esgotado";
        kleeAvatar.style.background = "#dd1440";
        kleeAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('kleeAvatar') == 'comprado') {
        kleeAvatar.innerHTML = "Esgotado";
        kleeAvatar.style.background = "#dd1440";
        kleeAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('kleeAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        kleeAvatar.innerHTML = "Indisponivel";
        kleeAvatar.style.background = "#dd1440";
        kleeAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                kleeAvatar.innerHTML = "Comprar";
                kleeAvatar.style.background = "black";
                kleeAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
};

export const monaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('monaAvatar') !== 'comprado') {
        localStorage.setItem('monaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starMona');
        imgElement.src = localStorage.getItem('iconMona');
        imgCaracter.src = localStorage.getItem('imgMona');
        nomeCaracter.innerHTML = localStorage.getItem('nomeMona');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        monaAvatar.innerHTML = "Esgotado";
        monaAvatar.style.background = "#dd1440";
        monaAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('monaAvatar') == 'comprado') {
        monaAvatar.innerHTML = "Esgotado";
        monaAvatar.style.background = "#dd1440";
        monaAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('monaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        monaAvatar.innerHTML = "Indisponivel";
        monaAvatar.style.background = "#dd1440";
        monaAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                monaAvatar.innerHTML = "Comprar";
                monaAvatar.style.background = "black";
                monaAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
};

export const albedoAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('albedoAvatar') !== 'comprado') {
        localStorage.setItem('albedoAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starAlbedo');
        imgElement.src = localStorage.getItem('iconAlbedo');
        imgCaracter.src = localStorage.getItem('imgAlbedo');
        nomeCaracter.innerHTML = localStorage.getItem('nomeAlbedo');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        albedoAvatar.innerHTML = "Esgotado";
        albedoAvatar.style.background = "#dd1440";
        albedoAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('albedoAvatar') == 'comprado') {
        albedoAvatar.innerHTML = "Esgotado";
        albedoAvatar.style.background = "#dd1440";
        albedoAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('albedoAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        albedoAvatar.innerHTML = "Indisponivel";
        albedoAvatar.style.background = "#dd1440";
        albedoAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                albedoAvatar.innerHTML = "Comprar";
                albedoAvatar.style.background = "black";
                albedoAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
};

export const eulaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('eulaAvatar') !== 'comprado') {
        localStorage.setItem('eulaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starEula');
        imgElement.src = localStorage.getItem('iconEula');
        imgCaracter.src = localStorage.getItem('imgEula');
        nomeCaracter.innerHTML = localStorage.getItem('nomeEula');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        eulaAvatar.innerHTML = "Esgotado";
        eulaAvatar.style.background = "#dd1440";
        eulaAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('eulaAvatar') == 'comprado') {
        eulaAvatar.innerHTML = "Esgotado";
        eulaAvatar.style.background = "#dd1440";
        eulaAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('eulaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        eulaAvatar.innerHTML = "Indisponivel";
        eulaAvatar.style.background = "#dd1440";
        eulaAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                eulaAvatar.innerHTML = "Comprar";
                eulaAvatar.style.background = "black";
                eulaAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
};

export const jeanAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('jeanAvatar') !== 'comprado') {
        localStorage.setItem('jeanAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starJean');
        imgElement.src = localStorage.getItem('iconJean');
        imgCaracter.src = localStorage.getItem('imgJean');
        nomeCaracter.innerHTML = localStorage.getItem('nomeJean');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        jeanAvatar.innerHTML = "Esgotado";
        jeanAvatar.style.background = "#dd1440";
        jeanAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('jeanAvatar') == 'comprado') {
        jeanAvatar.innerHTML = "Esgotado";
        jeanAvatar.style.background = "#dd1440";
        jeanAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('jeanAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        jeanAvatar.innerHTML = "Indisponivel";
        jeanAvatar.style.background = "#dd1440";
        jeanAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                jeanAvatar.innerHTML = "Comprar";
                jeanAvatar.style.background = "black";
                jeanAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
};

export const barbaraAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('barbaraAvatar') !== 'comprado') {
        localStorage.setItem('barbaraAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starBarbara');
        imgElement.src = localStorage.getItem('iconBarbara');
        imgCaracter.src = localStorage.getItem('imgBarbara');
        nomeCaracter.innerHTML = localStorage.getItem('nomeBarbara');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        barbaraAvatar.innerHTML = "Esgotado";
        barbaraAvatar.style.background = "#dd1440";
        barbaraAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('barbaraAvatar') == 'comprado') {
        barbaraAvatar.innerHTML = "Esgotado";
        barbaraAvatar.style.background = "#dd1440";
        barbaraAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('barbaraAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        barbaraAvatar.innerHTML = "Indisponivel";
        barbaraAvatar.style.background = "#dd1440";
        barbaraAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            barbaraAvatar.innerHTML = "Comprar";
            barbaraAvatar.style.background = "black";
            barbaraAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

export const amberAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('amberAvatar') !== 'comprado') {
        localStorage.setItem('amberAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starAmber');
        imgElement.src = localStorage.getItem('iconAmber');
        imgCaracter.src = localStorage.getItem('imgAmber');
        nomeCaracter.innerHTML = localStorage.getItem('nomeAmber');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        amberAvatar.innerHTML = "Esgotado";
        amberAvatar.style.background = "#dd1440";
        amberAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('amberAvatar') == 'comprado') {
        amberAvatar.innerHTML = "Esgotado";
        amberAvatar.style.background = "#dd1440";
        amberAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('amberAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        amberAvatar.innerHTML = "Indisponivel";
        amberAvatar.style.background = "#dd1440";
        amberAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            amberAvatar.innerHTML = "Comprar";
            amberAvatar.style.background = "black";
            amberAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

export const razorAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('razorAvatar') !== 'comprado') {
        localStorage.setItem('razorAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starRazor');
        imgElement.src = localStorage.getItem('iconRazor');
        imgCaracter.src = localStorage.getItem('imgRazor');
        nomeCaracter.innerHTML = localStorage.getItem('nomeRazor');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        razorAvatar.innerHTML = "Esgotado";
        razorAvatar.style.background = "#dd1440";
        razorAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('razorAvatar') == 'comprado') {
        razorAvatar.innerHTML = "Esgotado";
        razorAvatar.style.background = "#dd1440";
        razorAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('razorAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        razorAvatar.innerHTML = "Indisponivel";
        razorAvatar.style.background = "#dd1440";
        razorAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            razorAvatar.innerHTML = "Comprar";
            razorAvatar.style.background = "black";
            razorAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Diona
export const dionaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('dionaAvatar') !== 'comprado') {
        localStorage.setItem('dionaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starDiona');
        imgElement.src = localStorage.getItem('iconDiona');
        imgCaracter.src = localStorage.getItem('imgDiona');
        nomeCaracter.innerHTML = localStorage.getItem('nomeDiona');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        dionaAvatar.innerHTML = "Esgotado";
        dionaAvatar.style.background = "#dd1440";
        dionaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('dionaAvatar') == 'comprado') {
        dionaAvatar.innerHTML = "Esgotado";
        dionaAvatar.style.background = "#dd1440";
        dionaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('dionaAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        dionaAvatar.innerHTML = "Indisponivel";
        dionaAvatar.style.background = "#dd1440";
        dionaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            dionaAvatar.innerHTML = "Comprar";
            dionaAvatar.style.background = "black";
            dionaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Lisa
export const lisaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('lisaAvatar') !== 'comprado') {
        localStorage.setItem('lisaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starLisa');
        imgElement.src = localStorage.getItem('iconLisa');
        imgCaracter.src = localStorage.getItem('imgLisa');
        nomeCaracter.innerHTML = localStorage.getItem('nomeLisa');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        lisaAvatar.innerHTML = "Esgotado";
        lisaAvatar.style.background = "#dd1440";
        lisaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('lisaAvatar') == 'comprado') {
        lisaAvatar.innerHTML = "Esgotado";
        lisaAvatar.style.background = "#dd1440";
        lisaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('lisaAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        lisaAvatar.innerHTML = "Indisponivel";
        lisaAvatar.style.background = "#dd1440";
        lisaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            lisaAvatar.innerHTML = "Comprar";
            lisaAvatar.style.background = "black";
            lisaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Sucrose
export const sucroseAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('sucroseAvatar') !== 'comprado') {
        localStorage.setItem('sucroseAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starSucrose');
        imgElement.src = localStorage.getItem('iconSucrose');
        imgCaracter.src = localStorage.getItem('imgSucrose');
        nomeCaracter.innerHTML = localStorage.getItem('nomeSucrose');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        sucroseAvatar.innerHTML = "Esgotado";
        sucroseAvatar.style.background = "#dd1440";
        sucroseAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('sucroseAvatar') == 'comprado') {
        sucroseAvatar.innerHTML = "Esgotado";
        sucroseAvatar.style.background = "#dd1440";
        sucroseAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('sucroseAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        sucroseAvatar.innerHTML = "Indisponivel";
        sucroseAvatar.style.background = "#dd1440";
        sucroseAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            sucroseAvatar.innerHTML = "Comprar";
            sucroseAvatar.style.background = "black";
            sucroseAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Rosaria
export const rosariaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('rosariaAvatar') !== 'comprado') {
        localStorage.setItem('rosariaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starRosaria');
        imgElement.src = localStorage.getItem('iconRosaria');
        imgCaracter.src = localStorage.getItem('imgRosaria');
        nomeCaracter.innerHTML = localStorage.getItem('nomeRosaria');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        rosariaAvatar.innerHTML = "Esgotado";
        rosariaAvatar.style.background = "#dd1440";
        rosariaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('rosariaAvatar') == 'comprado') {
        rosariaAvatar.innerHTML = "Esgotado";
        rosariaAvatar.style.background = "#dd1440";
        rosariaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('rosariaAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        rosariaAvatar.innerHTML = "Indisponivel";
        rosariaAvatar.style.background = "#dd1440";
        rosariaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            rosariaAvatar.innerHTML = "Comprar";
            rosariaAvatar.style.background = "black";
            rosariaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Noelle
export const noelleAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('noelleAvatar') !== 'comprado') {
        localStorage.setItem('noelleAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starNoelle');
        imgElement.src = localStorage.getItem('iconNoelle');
        imgCaracter.src = localStorage.getItem('imgNoelle');
        nomeCaracter.innerHTML = localStorage.getItem('nomeNoelle');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        noelleAvatar.innerHTML = "Esgotado";
        noelleAvatar.style.background = "#dd1440";
        noelleAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('noelleAvatar') == 'comprado') {
        noelleAvatar.innerHTML = "Esgotado";
        noelleAvatar.style.background = "#dd1440";
        noelleAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('noelleAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        noelleAvatar.innerHTML = "Indisponivel";
        noelleAvatar.style.background = "#dd1440";
        noelleAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            noelleAvatar.innerHTML = "Comprar";
            noelleAvatar.style.background = "black";
            noelleAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Kaeya
export const kaeyaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('kaeyaAvatar') !== 'comprado') {
        localStorage.setItem('kaeyaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starKaeya');
        imgElement.src = localStorage.getItem('iconKaeya');
        imgCaracter.src = localStorage.getItem('imgKaeya');
        nomeCaracter.innerHTML = localStorage.getItem('nomeKaeya');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        kaeyaAvatar.innerHTML = "Esgotado";
        kaeyaAvatar.style.background = "#dd1440";
        kaeyaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kaeyaAvatar') == 'comprado') {
        kaeyaAvatar.innerHTML = "Esgotado";
        kaeyaAvatar.style.background = "#dd1440";
        kaeyaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kaeyaAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        kaeyaAvatar.innerHTML = "Indisponivel";
        kaeyaAvatar.style.background = "#dd1440";
        kaeyaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            kaeyaAvatar.innerHTML = "Comprar";
            kaeyaAvatar.style.background = "black";
            kaeyaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Bennett
export const bennettAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('bennettAvatar') !== 'comprado') {
        localStorage.setItem('bennettAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starBennett');
        imgElement.src = localStorage.getItem('iconBennett');
        imgCaracter.src = localStorage.getItem('imgBennett');
        nomeCaracter.innerHTML = localStorage.getItem('nomeBennett');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        bennettAvatar.innerHTML = "Esgotado";
        bennettAvatar.style.background = "#dd1440";
        bennettAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('bennettAvatar') == 'comprado') {
        bennettAvatar.innerHTML = "Esgotado";
        bennettAvatar.style.background = "#dd1440";
        bennettAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('bennettAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        bennettAvatar.innerHTML = "Indisponivel";
        bennettAvatar.style.background = "#dd1440";
        bennettAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            bennettAvatar.innerHTML = "Comprar";
            bennettAvatar.style.background = "black";
            bennettAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Fischl
export const fischlAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('fischlAvatar') !== 'comprado') {
        localStorage.setItem('fischlAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starFischl');
        imgElement.src = localStorage.getItem('iconFischl');
        imgCaracter.src = localStorage.getItem('imgFischl');
        nomeCaracter.innerHTML = localStorage.getItem('nomeFischl');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        fischlAvatar.innerHTML = "Esgotado";
        fischlAvatar.style.background = "#dd1440";
        fischlAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('fischlAvatar') == 'comprado') {
        fischlAvatar.innerHTML = "Esgotado";
        fischlAvatar.style.background = "#dd1440";
        fischlAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('fischlAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        fischlAvatar.innerHTML = "Indisponivel";
        fischlAvatar.style.background = "#dd1440";
        fischlAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            fischlAvatar.innerHTML = "Comprar";
            fischlAvatar.style.background = "black";
            fischlAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Mika
export const mikaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('mikaAvatar') !== 'comprado') {
        localStorage.setItem('mikaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starMika');
        imgElement.src = localStorage.getItem('iconMika');
        imgCaracter.src = localStorage.getItem('imgMika');
        nomeCaracter.innerHTML = localStorage.getItem('nomeMika');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        mikaAvatar.innerHTML = "Esgotado";
        mikaAvatar.style.background = "#dd1440";
        mikaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('mikaAvatar') == 'comprado') {
        mikaAvatar.innerHTML = "Esgotado";
        mikaAvatar.style.background = "#dd1440";
        mikaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('mikaAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        mikaAvatar.innerHTML = "Indisponivel";
        mikaAvatar.style.background = "#dd1440";
        mikaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            mikaAvatar.innerHTML = "Comprar";
            mikaAvatar.style.background = "black";
            mikaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

//Liyue

// Hu Tao
export const hutaoAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('hutaoAvatar') !== 'comprado') {
        localStorage.setItem('hutaoAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starHutao');
        imgElement.src = localStorage.getItem('iconHutao');
        imgCaracter.src = localStorage.getItem('imgHutao');
        nomeCaracter.innerHTML = localStorage.getItem('nomeHutao');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        hutaoAvatar.innerHTML = "Esgotado";
        hutaoAvatar.style.background = "#dd1440";
        hutaoAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('hutaoAvatar') == 'comprado') {
        hutaoAvatar.innerHTML = "Esgotado";
        hutaoAvatar.style.background = "#dd1440";
        hutaoAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('hutaoAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        hutaoAvatar.innerHTML = "Indisponivel";
        hutaoAvatar.style.background = "#dd1440";
        hutaoAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            hutaoAvatar.innerHTML = "Comprar";
            hutaoAvatar.style.background = "black";
            hutaoAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Zhongli
export const zhongliAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('zhongliAvatar') !== 'comprado') {
        localStorage.setItem('zhongliAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starZhongli');
        imgElement.src = localStorage.getItem('iconZhongli');
        imgCaracter.src = localStorage.getItem('imgZhongli');
        nomeCaracter.innerHTML = localStorage.getItem('nomeZhongli');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        zhongliAvatar.innerHTML = "Esgotado";
        zhongliAvatar.style.background = "#dd1440";
        zhongliAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('zhongliAvatar') == 'comprado') {
        zhongliAvatar.innerHTML = "Esgotado";
        zhongliAvatar.style.background = "#dd1440";
        zhongliAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('zhongliAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        zhongliAvatar.innerHTML = "Indisponivel";
        zhongliAvatar.style.background = "#dd1440";
        zhongliAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            zhongliAvatar.innerHTML = "Comprar";
            zhongliAvatar.style.background = "black";
            zhongliAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Xiao
export const xiaoAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('xiaoAvatar') !== 'comprado') {
        localStorage.setItem('xiaoAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starXiao');
        imgElement.src = localStorage.getItem('iconXiao');
        imgCaracter.src = localStorage.getItem('imgXiao');
        nomeCaracter.innerHTML = localStorage.getItem('nomeXiao');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        xiaoAvatar.innerHTML = "Esgotado";
        xiaoAvatar.style.background = "#dd1440";
        xiaoAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('xiaoAvatar') == 'comprado') {
        xiaoAvatar.innerHTML = "Esgotado";
        xiaoAvatar.style.background = "#dd1440";
        xiaoAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('xiaoAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        xiaoAvatar.innerHTML = "Indisponivel";
        xiaoAvatar.style.background = "#dd1440";
        xiaoAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            xiaoAvatar.innerHTML = "Comprar";
            xiaoAvatar.style.background = "black";
            xiaoAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Ganyu
export const ganyuAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('ganyuAvatar') !== 'comprado') {
        localStorage.setItem('ganyuAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starGanyu');
        imgElement.src = localStorage.getItem('iconGanyu');
        imgCaracter.src = localStorage.getItem('imgGanyu');
        nomeCaracter.innerHTML = localStorage.getItem('nomeGanyu');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        ganyuAvatar.innerHTML = "Esgotado";
        ganyuAvatar.style.background = "#dd1440";
        ganyuAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('ganyuAvatar') == 'comprado') {
        ganyuAvatar.innerHTML = "Esgotado";
        ganyuAvatar.style.background = "#dd1440";
        ganyuAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('ganyuAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        ganyuAvatar.innerHTML = "Indisponivel";
        ganyuAvatar.style.background = "#dd1440";
        ganyuAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            ganyuAvatar.innerHTML = "Comprar";
            ganyuAvatar.style.background = "black";
            ganyuAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Yelan
export const yelanAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('yelanAvatar') !== 'comprado') {
        localStorage.setItem('yelanAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starYelan');
        imgElement.src = localStorage.getItem('iconYelan');
        imgCaracter.src = localStorage.getItem('imgYelan');
        nomeCaracter.innerHTML = localStorage.getItem('nomeYelan');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        yelanAvatar.innerHTML = "Esgotado";
        yelanAvatar.style.background = "#dd1440";
        yelanAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('yelanAvatar') == 'comprado') {
        yelanAvatar.innerHTML = "Esgotado";
        yelanAvatar.style.background = "#dd1440";
        yelanAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('yelanAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        yelanAvatar.innerHTML = "Indisponivel";
        yelanAvatar.style.background = "#dd1440";
        yelanAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            yelanAvatar.innerHTML = "Comprar";
            yelanAvatar.style.background = "black";
            yelanAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Shenhe
export const shenheAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('shenheAvatar') !== 'comprado') {
        localStorage.setItem('shenheAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starShenhe');
        imgElement.src = localStorage.getItem('iconShenhe');
        imgCaracter.src = localStorage.getItem('imgShenhe');
        nomeCaracter.innerHTML = localStorage.getItem('nomeShenhe');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        shenheAvatar.innerHTML = "Esgotado";
        shenheAvatar.style.background = "#dd1440";
        shenheAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('shenheAvatar') == 'comprado') {
        shenheAvatar.innerHTML = "Esgotado";
        shenheAvatar.style.background = "#dd1440";
        shenheAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('shenheAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        shenheAvatar.innerHTML = "Indisponivel";
        shenheAvatar.style.background = "#dd1440";
        shenheAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            shenheAvatar.innerHTML = "Comprar";
            shenheAvatar.style.background = "black";
            shenheAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Qiqi
export const qiqiAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('qiqiAvatar') !== 'comprado') {
        localStorage.setItem('qiqiAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starQiqi');
        imgElement.src = localStorage.getItem('iconQiqi');
        imgCaracter.src = localStorage.getItem('imgQiqi');
        nomeCaracter.innerHTML = localStorage.getItem('nomeQiqi');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        qiqiAvatar.innerHTML = "Esgotado";
        qiqiAvatar.style.background = "#dd1440";
        qiqiAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('qiqiAvatar') == 'comprado') {
        qiqiAvatar.innerHTML = "Esgotado";
        qiqiAvatar.style.background = "#dd1440";
        qiqiAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('qiqiAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        qiqiAvatar.innerHTML = "Indisponivel";
        qiqiAvatar.style.background = "#dd1440";
        qiqiAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            qiqiAvatar.innerHTML = "Comprar";
            qiqiAvatar.style.background = "black";
            qiqiAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Baizhu
export const baizhuAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('baizhuAvatar') !== 'comprado') {
        localStorage.setItem('baizhuAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starBaizhu');
        imgElement.src = localStorage.getItem('iconBaizhu');
        imgCaracter.src = localStorage.getItem('imgBaizhu');
        nomeCaracter.innerHTML = localStorage.getItem('nomeBaizhu');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        baizhuAvatar.innerHTML = "Esgotado";
        baizhuAvatar.style.background = "#dd1440";
        baizhuAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('baizhuAvatar') == 'comprado') {
        baizhuAvatar.innerHTML = "Esgotado";
        baizhuAvatar.style.background = "#dd1440";
        baizhuAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('baizhuAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        baizhuAvatar.innerHTML = "Indisponivel";
        baizhuAvatar.style.background = "#dd1440";
        baizhuAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            baizhuAvatar.innerHTML = "Comprar";
            baizhuAvatar.style.background = "black";
            baizhuAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Keqing
export const keqingAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('keqingAvatar') !== 'comprado') {
        localStorage.setItem('keqingAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starKeqing');
        imgElement.src = localStorage.getItem('iconKeqing');
        imgCaracter.src = localStorage.getItem('imgKeqing');
        nomeCaracter.innerHTML = localStorage.getItem('nomeKeqing');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        keqingAvatar.innerHTML = "Esgotado";
        keqingAvatar.style.background = "#dd1440";
        keqingAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('keqingAvatar') == 'comprado') {
        keqingAvatar.innerHTML = "Esgotado";
        keqingAvatar.style.background = "#dd1440";
        keqingAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('keqingAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        keqingAvatar.innerHTML = "Indisponivel";
        keqingAvatar.style.background = "#dd1440";
        keqingAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            keqingAvatar.innerHTML = "Comprar";
            keqingAvatar.style.background = "black";
            keqingAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Yanfei
export const yanfeiAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('yanfeiAvatar') !== 'comprado') {
        localStorage.setItem('yanfeiAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starYanfei');
        imgElement.src = localStorage.getItem('iconYanfei');
        imgCaracter.src = localStorage.getItem('imgYanfei');
        nomeCaracter.innerHTML = localStorage.getItem('nomeYanfei');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        yanfeiAvatar.innerHTML = "Esgotado";
        yanfeiAvatar.style.background = "#dd1440";
        yanfeiAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('yanfeiAvatar') == 'comprado') {
        yanfeiAvatar.innerHTML = "Esgotado";
        yanfeiAvatar.style.background = "#dd1440";
        yanfeiAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('yanfeiAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        yanfeiAvatar.innerHTML = "Indisponivel";
        yanfeiAvatar.style.background = "#dd1440";
        yanfeiAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            yanfeiAvatar.innerHTML = "Comprar";
            yanfeiAvatar.style.background = "black";
            yanfeiAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Yunjin
export const yunjinAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('yunjinAvatar') !== 'comprado') {
        localStorage.setItem('yunjinAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starYunjin');
        imgElement.src = localStorage.getItem('iconYunjin');
        imgCaracter.src = localStorage.getItem('imgYunjin');
        nomeCaracter.innerHTML = localStorage.getItem('nomeYunjin');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        yunjinAvatar.innerHTML = "Esgotado";
        yunjinAvatar.style.background = "#dd1440";
        yunjinAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('yunjinAvatar') == 'comprado') {
        yunjinAvatar.innerHTML = "Esgotado";
        yunjinAvatar.style.background = "#dd1440";
        yunjinAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('yunjinAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        yunjinAvatar.innerHTML = "Indisponivel";
        yunjinAvatar.style.background = "#dd1440";
        yunjinAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            yunjinAvatar.innerHTML = "Comprar";
            yunjinAvatar.style.background = "black";
            yunjinAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Yaoyao
export const yaoyaoAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('yaoyaoAvatar') !== 'comprado') {
        localStorage.setItem('yaoyaoAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starYaoyao');
        imgElement.src = localStorage.getItem('iconYaoyao');
        imgCaracter.src = localStorage.getItem('imgYaoyao');
        nomeCaracter.innerHTML = localStorage.getItem('nomeYaoyao');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        yaoyaoAvatar.innerHTML = "Esgotado";
        yaoyaoAvatar.style.background = "#dd1440";
        yaoyaoAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('yaoyaoAvatar') == 'comprado') {
        yaoyaoAvatar.innerHTML = "Esgotado";
        yaoyaoAvatar.style.background = "#dd1440";
        yaoyaoAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('yaoyaoAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        yaoyaoAvatar.innerHTML = "Indisponivel";
        yaoyaoAvatar.style.background = "#dd1440";
        yaoyaoAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            yaoyaoAvatar.innerHTML = "Comprar";
            yaoyaoAvatar.style.background = "black";
            yaoyaoAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Chongyun
export const chongyunAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('chongyunAvatar') !== 'comprado') {
        localStorage.setItem('chongyunAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starChongyun');
        imgElement.src = localStorage.getItem('iconChongyun');
        imgCaracter.src = localStorage.getItem('imgChongyun');
        nomeCaracter.innerHTML = localStorage.getItem('nomeChongyun');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        chongyunAvatar.innerHTML = "Esgotado";
        chongyunAvatar.style.background = "#dd1440";
        chongyunAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('chongyunAvatar') == 'comprado') {
        chongyunAvatar.innerHTML = "Esgotado";
        chongyunAvatar.style.background = "#dd1440";
        chongyunAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('chongyunAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        chongyunAvatar.innerHTML = "Indisponivel";
        chongyunAvatar.style.background = "#dd1440";
        chongyunAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            chongyunAvatar.innerHTML = "Comprar";
            chongyunAvatar.style.background = "black";
            chongyunAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Beidou
export const beidouAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('beidouAvatar') !== 'comprado') {
        localStorage.setItem('beidouAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starBeidou');
        imgElement.src = localStorage.getItem('iconBeidou');
        imgCaracter.src = localStorage.getItem('imgBeidou');
        nomeCaracter.innerHTML = localStorage.getItem('nomeBeidou');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        beidouAvatar.innerHTML = "Esgotado";
        beidouAvatar.style.background = "#dd1440";
        beidouAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('beidouAvatar') == 'comprado') {
        beidouAvatar.style.background = "#dd1440";
        beidouAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('beidouAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        beidouAvatar.style.fontSize = "8pt";
        beidouAvatar.innerHTML = "Indisponivel";
        beidouAvatar.style.background = "#dd1440";
        beidouAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            beidouAvatar.innerHTML = "Comprar";
            beidouAvatar.style.background = "black";
            beidouAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Xinyan
export const xinyanAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('xinyanAvatar') !== 'comprado') {
        localStorage.setItem('xinyanAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starXinyan');
        imgElement.src = localStorage.getItem('iconXinyan');
        imgCaracter.src = localStorage.getItem('imgXinyan');
        nomeCaracter.innerHTML = localStorage.getItem('nomeXinyan');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        xinyanAvatar.innerHTML = "Esgotado";
        xinyanAvatar.style.background = "#dd1440";
        xinyanAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('xinyanAvatar') == 'comprado') {
        xinyanAvatar.innerHTML = "Esgotado";
        xinyanAvatar.style.background = "#dd1440";
        xinyanAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('xinyanAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        xinyanAvatar.innerHTML = "Indisponivel";
        xinyanAvatar.style.background = "#dd1440";
        xinyanAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            xinyanAvatar.innerHTML = "Comprar";
            xinyanAvatar.style.background = "black";
            xinyanAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Xingqiu
export const xingqiuAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('xingqiuAvatar') !== 'comprado') {
        localStorage.setItem('xingqiuAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starXingqiu');
        imgElement.src = localStorage.getItem('iconXingqiu');
        imgCaracter.src = localStorage.getItem('imgXingqiu');
        nomeCaracter.innerHTML = localStorage.getItem('nomeXingqiu');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        xingqiuAvatar.innerHTML = "Esgotado";
        xingqiuAvatar.style.background = "#dd1440";
        xingqiuAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('xingqiuAvatar') == 'comprado') {
        xingqiuAvatar.innerHTML = "Esgotado";
        xingqiuAvatar.style.background = "#dd1440";
        xingqiuAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('xingqiuAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        xingqiuAvatar.innerHTML = "Indisponivel";
        xingqiuAvatar.style.background = "#dd1440";
        xingqiuAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            xingqiuAvatar.innerHTML = "Comprar";
            xingqiuAvatar.style.background = "black";
            xingqiuAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Xiangling
export const xianglingAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('xianglingAvatar') !== 'comprado') {
        localStorage.setItem('xianglingAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starXiangling');
        imgElement.src = localStorage.getItem('iconXiangling');
        imgCaracter.src = localStorage.getItem('imgXiangling');
        nomeCaracter.innerHTML = localStorage.getItem('nomeXiangling');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        xianglingAvatar.innerHTML = "Esgotado";
        xianglingAvatar.style.background = "#dd1440";
        xianglingAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('xianglingAvatar') == 'comprado') {
        xianglingAvatar.innerHTML = "Esgotado";
        xianglingAvatar.style.background = "#dd1440";
        xianglingAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('xianglingAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        xianglingAvatar.innerHTML = "Indisponivel";
        xianglingAvatar.style.background = "#dd1440";
        xianglingAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            xianglingAvatar.innerHTML = "Comprar";
            xianglingAvatar.style.background = "black";
            xianglingAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Ningguang
export const ningguangAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('ningguangAvatar') !== 'comprado') {
        localStorage.setItem('ningguangAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starNingguang');
        imgElement.src = localStorage.getItem('iconNingguang');
        imgCaracter.src = localStorage.getItem('imgNingguang');
        nomeCaracter.innerHTML = localStorage.getItem('nomeNingguang');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        ningguangAvatar.innerHTML = "Esgotado";
        ningguangAvatar.style.background = "#dd1440";
        ningguangAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('ningguangAvatar') == 'comprado') {
        ningguangAvatar.innerHTML = "Esgotado";
        ningguangAvatar.style.background = "#dd1440";
        ningguangAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('ningguangAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        ningguangAvatar.innerHTML = "Indisponivel";
        ningguangAvatar.style.background = "#dd1440";
        ningguangAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            ningguangAvatar.innerHTML = "Comprar";
            ningguangAvatar.style.background = "black";
            ningguangAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

//Inazuma

// Raiden Shogun
export const raidenAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('raidenAvatar') !== 'comprado') {
        localStorage.setItem('raidenAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starRaiden');
        imgElement.src = localStorage.getItem('iconRaiden');
        imgCaracter.src = localStorage.getItem('imgRaiden');
        nomeCaracter.innerHTML = localStorage.getItem('nomeRaiden');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        raidenAvatar.innerHTML = "Esgotado";
        raidenAvatar.style.background = "#dd1440";
        raidenAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('raidenAvatar') == 'comprado') {
        raidenAvatar.innerHTML = "Esgotado";
        raidenAvatar.style.background = "#dd1440";
        raidenAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('raidenAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        raidenAvatar.innerHTML = "Indisponivel";
        raidenAvatar.style.background = "#dd1440";
        raidenAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            raidenAvatar.innerHTML = "Comprar";
            raidenAvatar.style.background = "black";
            raidenAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Kazuha
export const kazuhaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('kazuhaAvatar') !== 'comprado') {
        localStorage.setItem('kazuhaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starKazuha');
        imgElement.src = localStorage.getItem('iconKazuha');
        imgCaracter.src = localStorage.getItem('imgKazuha');
        nomeCaracter.innerHTML = localStorage.getItem('nomeKazuha');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        kazuhaAvatar.innerHTML = "Esgotado";
        kazuhaAvatar.style.background = "#dd1440";
        kazuhaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kazuhaAvatar') == 'comprado') {
        kazuhaAvatar.innerHTML = "Esgotado";
        kazuhaAvatar.style.background = "#dd1440";
        kazuhaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kazuhaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        kazuhaAvatar.innerHTML = "Indisponivel";
        kazuhaAvatar.style.background = "#dd1440";
        kazuhaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            kazuhaAvatar.innerHTML = "Comprar";
            kazuhaAvatar.style.background = "black";
            kazuhaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Ayaka 
export const ayakaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('ayakaAvatar') !== 'comprado') {
        localStorage.setItem('ayakaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starAyaka');
        imgElement.src = localStorage.getItem('iconAyaka');
        imgCaracter.src = localStorage.getItem('imgAyaka');
        nomeCaracter.innerHTML = localStorage.getItem('nomeAyaka');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        ayakaAvatar.innerHTML = "Esgotado";
        ayakaAvatar.style.background = "#dd1440";
        ayakaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('ayakaAvatar') == 'comprado') {
        ayakaAvatar.innerHTML = "Esgotado";
        ayakaAvatar.style.background = "#dd1440";
        ayakaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('ayakaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        ayakaAvatar.innerHTML = "Indisponivel";
        ayakaAvatar.style.background = "#dd1440";
        ayakaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            ayakaAvatar.innerHTML = "Comprar";
            ayakaAvatar.style.background = "black";
            ayakaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Yoimiya
export const yoimiyaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('yoimiyaAvatar') !== 'comprado') {
        localStorage.setItem('yoimiyaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starYoimiya');
        imgElement.src = localStorage.getItem('iconYoimiya');
        imgCaracter.src = localStorage.getItem('imgYoimiya');
        nomeCaracter.innerHTML = localStorage.getItem('nomeYoimiya');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        yoimiyaAvatar.innerHTML = "Esgotado";
        yoimiyaAvatar.style.background = "#dd1440";
        yoimiyaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('yoimiyaAvatar') == 'comprado') {
        yoimiyaAvatar.innerHTML = "Esgotado";
        yoimiyaAvatar.style.background = "#dd1440";
        yoimiyaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('yoimiyaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        yoimiyaAvatar.innerHTML = "Indisponivel";
        yoimiyaAvatar.style.background = "#dd1440";
        yoimiyaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            yoimiyaAvatar.innerHTML = "Comprar";
            yoimiyaAvatar.style.background = "black";
            yoimiyaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Yae Miko
export const yaemikoAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('yaemikoAvatar') !== 'comprado') {
        localStorage.setItem('yaemikoAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starYaeMiko');
        imgElement.src = localStorage.getItem('iconYaeMiko');
        imgCaracter.src = localStorage.getItem('imgYaeMiko');
        nomeCaracter.innerHTML = localStorage.getItem('nomeYaeMiko');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        yaemikoAvatar.innerHTML = "Esgotado";
        yaemikoAvatar.style.background = "#dd1440";
        yaemikoAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('yaemikoAvatar') == 'comprado') {
        yaemikoAvatar.innerHTML = "Esgotado";
        yaemikoAvatar.style.background = "#dd1440";
        yaemikoAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('yaemikoAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        yaemikoAvatar.innerHTML = "Indisponivel";
        yaemikoAvatar.style.background = "#dd1440";
        yaemikoAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            yaemikoAvatar.innerHTML = "Comprar";
            yaemikoAvatar.style.background = "black";
            yaemikoAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Arataki Itto 
export const aratakiAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('aratakiAvatar') !== 'comprado') {
        localStorage.setItem('aratakiAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starArataki');
        imgElement.src = localStorage.getItem('iconArataki');
        imgCaracter.src = localStorage.getItem('imgArataki');
        nomeCaracter.innerHTML = localStorage.getItem('nomeArataki');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        aratakiAvatar.innerHTML = "Esgotado";
        aratakiAvatar.style.background = "#dd1440";
        aratakiAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('aratakiAvatar') == 'comprado') {
        aratakiAvatar.innerHTML = "Esgotado";
        aratakiAvatar.style.background = "#dd1440";
        aratakiAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('aratakiAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        aratakiAvatar.innerHTML = "Indisponivel";
        aratakiAvatar.style.background = "#dd1440";
        aratakiAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            aratakiAvatar.innerHTML = "Comprar";
            aratakiAvatar.style.background = "black";
            aratakiAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Ayato
export const ayatoAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('ayatoAvatar') !== 'comprado') {
        localStorage.setItem('ayatoAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starAyato');
        imgElement.src = localStorage.getItem('iconAyato');
        imgCaracter.src = localStorage.getItem('imgAyato');
        nomeCaracter.innerHTML = localStorage.getItem('nomeAyato');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        ayatoAvatar.innerHTML = "Esgotado";
        ayatoAvatar.style.background = "#dd1440";
        ayatoAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('ayatoAvatar') == 'comprado') {
        ayatoAvatar.innerHTML = "Esgotado";
        ayatoAvatar.style.background = "#dd1440";
        ayatoAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('ayatoAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        ayatoAvatar.innerHTML = "Indisponivel";
        ayatoAvatar.style.background = "#dd1440";
        ayatoAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            ayatoAvatar.innerHTML = "Comprar";
            ayatoAvatar.style.background = "black";
            ayatoAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Kokomi
export const kokomiAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('kokomiAvatar') !== 'comprado') {
        localStorage.setItem('kokomiAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starKokomi');
        imgElement.src = localStorage.getItem('iconKokomi');
        imgCaracter.src = localStorage.getItem('imgKokomi');
        nomeCaracter.innerHTML = localStorage.getItem('nomeKokomi');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        kokomiAvatar.innerHTML = "Esgotado";
        kokomiAvatar.style.background = "#dd1440";
        kokomiAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kokomiAvatar') == 'comprado') {
        kokomiAvatar.innerHTML = "Esgotado";
        kokomiAvatar.style.background = "#dd1440";
        kokomiAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kokomiAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        kokomiAvatar.innerHTML = "Indisponivel";
        kokomiAvatar.style.background = "#dd1440";
        kokomiAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            kokomiAvatar.innerHTML = "Comprar";
            kokomiAvatar.style.background = "black";
            kokomiAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Kirara
export const kiraraAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('kiraraAvatar') !== 'comprado') {
        localStorage.setItem('kiraraAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starKirara');
        imgElement.src = localStorage.getItem('iconKirara');
        imgCaracter.src = localStorage.getItem('imgKirara');
        nomeCaracter.innerHTML = localStorage.getItem('nomeKirara');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        kiraraAvatar.innerHTML = "Esgotado";
        kiraraAvatar.style.background = "#dd1440";
        kiraraAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kiraraAvatar') == 'comprado') {
        kiraraAvatar.innerHTML = "Esgotado";
        kiraraAvatar.style.background = "#dd1440";
        kiraraAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kiraraAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        kiraraAvatar.innerHTML = "Indisponivel";
        kiraraAvatar.style.background = "#dd1440";
        kiraraAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            kiraraAvatar.innerHTML = "Comprar";
            kiraraAvatar.style.background = "black";
            kiraraAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Heizou
export const heizouAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('heizouAvatar') !== 'comprado') {
        localStorage.setItem('heizouAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starHeizou');
        imgElement.src = localStorage.getItem('iconHeizou');
        imgCaracter.src = localStorage.getItem('imgHeizou');
        nomeCaracter.innerHTML = localStorage.getItem('nomeHeizou');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        heizouAvatar.innerHTML = "Esgotado";
        heizouAvatar.style.background = "#dd1440";
        heizouAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('heizouAvatar') == 'comprado') {
        heizouAvatar.innerHTML = "Esgotado";
        heizouAvatar.style.background = "#dd1440";
        heizouAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('heizouAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        heizouAvatar.innerHTML = "Indisponivel";
        heizouAvatar.style.background = "#dd1440";
        heizouAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            heizouAvatar.innerHTML = "Comprar";
            heizouAvatar.style.background = "black";
            heizouAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Kuki
export const kukiAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('kukiAvatar') !== 'comprado') {
        localStorage.setItem('kukiAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starKuki');
        imgElement.src = localStorage.getItem('iconKuki');
        imgCaracter.src = localStorage.getItem('imgKuki');
        nomeCaracter.innerHTML = localStorage.getItem('nomeKuki');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        kukiAvatar.innerHTML = "Esgotado";
        kukiAvatar.style.background = "#dd1440";
        kukiAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kukiAvatar') == 'comprado') {
        kukiAvatar.innerHTML = "Esgotado";
        kukiAvatar.style.background = "#dd1440";
        kukiAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kukiAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        kukiAvatar.innerHTML = "Indisponivel";
        kukiAvatar.style.background = "#dd1440";
        kukiAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            kukiAvatar.innerHTML = "Comprar";
            kukiAvatar.style.background = "black";
            kukiAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Sara
export const saraAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('saraAvatar') !== 'comprado') {
        localStorage.setItem('saraAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starSara');
        imgElement.src = localStorage.getItem('iconSara');
        imgCaracter.src = localStorage.getItem('imgSara');
        nomeCaracter.innerHTML = localStorage.getItem('nomeSara');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        saraAvatar.innerHTML = "Esgotado";
        saraAvatar.style.background = "#dd1440";
        saraAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('saraAvatar') == 'comprado') {
        saraAvatar.innerHTML = "Esgotado";
        saraAvatar.style.background = "#dd1440";
        saraAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('saraAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        saraAvatar.innerHTML = "Indisponivel";
        saraAvatar.style.background = "#dd1440";
        saraAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            saraAvatar.innerHTML = "Comprar";
            saraAvatar.style.background = "black";
            saraAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Sayu
export const sayuAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('sayuAvatar') !== 'comprado') {
        localStorage.setItem('sayuAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starSayu');
        imgElement.src = localStorage.getItem('iconSayu');
        imgCaracter.src = localStorage.getItem('imgSayu');
        nomeCaracter.innerHTML = localStorage.getItem('nomeSayu');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        sayuAvatar.innerHTML = "Esgotado";
        sayuAvatar.style.background = "#dd1440";
        sayuAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('sayuAvatar') == 'comprado') {
        sayuAvatar.innerHTML = "Esgotado";
        sayuAvatar.style.background = "#dd1440";
        sayuAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('sayuAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        sayuAvatar.innerHTML = "Indisponivel";
        sayuAvatar.style.background = "#dd1440";
        sayuAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            sayuAvatar.innerHTML = "Comprar";
            sayuAvatar.style.background = "black";
            sayuAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Thoma
export const thomaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('thomaAvatar') !== 'comprado') {
        localStorage.setItem('thomaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starThoma');
        imgElement.src = localStorage.getItem('iconThoma');
        imgCaracter.src = localStorage.getItem('imgThoma');
        nomeCaracter.innerHTML = localStorage.getItem('nomeThoma');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        thomaAvatar.innerHTML = "Esgotado";
        thomaAvatar.style.background = "#dd1440";
        thomaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('thomaAvatar') == 'comprado') {
        thomaAvatar.innerHTML = "Esgotado";
        thomaAvatar.style.background = "#dd1440";
        thomaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('thomaAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        thomaAvatar.innerHTML = "Indisponivel";
        thomaAvatar.style.background = "#dd1440";
        thomaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            thomaAvatar.innerHTML = "Comprar";
            thomaAvatar.style.background = "black";
            thomaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Gorou
export const gorouAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('gorouAvatar') !== 'comprado') {
        localStorage.setItem('gorouAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starGorou');
        imgElement.src = localStorage.getItem('iconGorou');
        imgCaracter.src = localStorage.getItem('imgGorou');
        nomeCaracter.innerHTML = localStorage.getItem('nomeGorou');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        gorouAvatar.innerHTML = "Esgotado";
        gorouAvatar.style.background = "#dd1440";
        gorouAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('gorouAvatar') == 'comprado') {
        gorouAvatar.innerHTML = "Esgotado";
        gorouAvatar.style.background = "#dd1440";
        gorouAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('gorouAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        gorouAvatar.innerHTML = "Indisponivel";
        gorouAvatar.style.background = "#dd1440";
        gorouAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            gorouAvatar.innerHTML = "Comprar";
            gorouAvatar.style.background = "black";
            gorouAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

//Sumeru

// Nahida 
export const nahidaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('nahidaAvatar') !== 'comprado') {
        localStorage.setItem('nahidaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starNahida');
        imgElement.src = localStorage.getItem('iconNahida');
        imgCaracter.src = localStorage.getItem('imgNahida');
        nomeCaracter.innerHTML = localStorage.getItem('nomeNahida');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        nahidaAvatar.innerHTML = "Esgotado";
        nahidaAvatar.style.background = "#dd1440";
        nahidaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('nahidaAvatar') == 'comprado') {
        nahidaAvatar.innerHTML = "Esgotado";
        nahidaAvatar.style.background = "#dd1440";
        nahidaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('nahidaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        nahidaAvatar.innerHTML = "Indisponivel";
        nahidaAvatar.style.background = "#dd1440";
        nahidaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            nahidaAvatar.innerHTML = "Comprar";
            nahidaAvatar.style.background = "black";
            nahidaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Dehya
export const dehyaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('dehyaAvatar') !== 'comprado') {
        localStorage.setItem('dehyaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starDehya');
        imgElement.src = localStorage.getItem('iconDehya');
        imgCaracter.src = localStorage.getItem('imgDehya');
        nomeCaracter.innerHTML = localStorage.getItem('nomeDehya');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        dehyaAvatar.innerHTML = "Esgotado";
        dehyaAvatar.style.background = "#dd1440";
        dehyaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('dehyaAvatar') == 'comprado') {
        dehyaAvatar.innerHTML = "Esgotado";
        dehyaAvatar.style.background = "#dd1440";
        dehyaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('dehyaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        dehyaAvatar.innerHTML = "Indisponivel";
        dehyaAvatar.style.background = "#dd1440";
        dehyaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            dehyaAvatar.innerHTML = "Comprar";
            dehyaAvatar.style.background = "black";
            dehyaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Cyno
export const cynoAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('cynoAvatar') !== 'comprado') {
        localStorage.setItem('cynoAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starCyno');
        imgElement.src = localStorage.getItem('iconCyno');
        imgCaracter.src = localStorage.getItem('imgCyno');
        nomeCaracter.innerHTML = localStorage.getItem('nomeCyno');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        cynoAvatar.innerHTML = "Esgotado";
        cynoAvatar.style.background = "#dd1440";
        cynoAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('cynoAvatar') == 'comprado') {
        cynoAvatar.innerHTML = "Esgotado";
        cynoAvatar.style.background = "#dd1440";
        cynoAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('cynoAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        cynoAvatar.innerHTML = "Indisponivel";
        cynoAvatar.style.background = "#dd1440";
        cynoAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            cynoAvatar.innerHTML = "Comprar";
            cynoAvatar.style.background = "black";
            cynoAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Alhaitham
export const alhaithamAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('alhaithamAvatar') !== 'comprado') {
        localStorage.setItem('alhaithamAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starAlhaitham');
        imgElement.src = localStorage.getItem('iconAlhaitham');
        imgCaracter.src = localStorage.getItem('imgAlhaitham');
        nomeCaracter.innerHTML = localStorage.getItem('nomeAlhaitham');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        alhaithamAvatar.innerHTML = "Esgotado";
        alhaithamAvatar.style.background = "#dd1440";
        alhaithamAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('alhaithamAvatar') == 'comprado') {
        alhaithamAvatar.innerHTML = "Esgotado";
        alhaithamAvatar.style.background = "#dd1440";
        alhaithamAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('alhaithamAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        alhaithamAvatar.innerHTML = "Indisponivel";
        alhaithamAvatar.style.background = "#dd1440";
        alhaithamAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            alhaithamAvatar.innerHTML = "Comprar";
            alhaithamAvatar.style.background = "black";
            alhaithamAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Wanderer
export const wandererAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('wandererAvatar') !== 'comprado') {
        localStorage.setItem('wandererAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starWanderer');
        imgElement.src = localStorage.getItem('iconWanderer');
        imgCaracter.src = localStorage.getItem('imgWanderer');
        nomeCaracter.innerHTML = localStorage.getItem('nomeWanderer');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        wandererAvatar.innerHTML = "Esgotado";
        wandererAvatar.style.background = "#dd1440";
        wandererAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('wandererAvatar') == 'comprado') {
        wandererAvatar.innerHTML = "Esgotado";
        wandererAvatar.style.background = "#dd1440";
        wandererAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('wandererAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        wandererAvatar.innerHTML = "Indisponivel";
        wandererAvatar.style.background = "#dd1440";
        wandererAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            wandererAvatar.innerHTML = "Comprar";
            wandererAvatar.style.background = "black";
            wandererAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Nilou
export const nilouAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('nilouAvatar') !== 'comprado') {
        localStorage.setItem('nilouAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starNilou');
        imgElement.src = localStorage.getItem('iconNilou');
        imgCaracter.src = localStorage.getItem('imgNilou');
        nomeCaracter.innerHTML = localStorage.getItem('nomeNilou');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        nilouAvatar.innerHTML = "Esgotado";
        nilouAvatar.style.background = "#dd1440";
        nilouAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('nilouAvatar') == 'comprado') {
        nilouAvatar.innerHTML = "Esgotado";
        nilouAvatar.style.background = "#dd1440";
        nilouAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('nilouAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        nilouAvatar.innerHTML = "Indisponivel";
        nilouAvatar.style.background = "#dd1440";
        nilouAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            nilouAvatar.innerHTML = "Comprar";
            nilouAvatar.style.background = "black";
            nilouAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Tighnari
export const tighnariAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('tighnariAvatar') !== 'comprado') {
        localStorage.setItem('tighnariAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starTighnari');
        imgElement.src = localStorage.getItem('iconTighnari');
        imgCaracter.src = localStorage.getItem('imgTighnari');
        nomeCaracter.innerHTML = localStorage.getItem('nomeTighnari');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        tighnariAvatar.innerHTML = "Esgotado";
        tighnariAvatar.style.background = "#dd1440";
        tighnariAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('tighnariAvatar') == 'comprado') {
        tighnariAvatar.innerHTML = "Esgotado";
        tighnariAvatar.style.background = "#dd1440";
        tighnariAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('tighnariAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        tighnariAvatar.innerHTML = "Indisponivel";
        tighnariAvatar.style.background = "#dd1440";
        tighnariAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            tighnariAvatar.innerHTML = "Comprar";
            tighnariAvatar.style.background = "black";
            tighnariAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Collei
export const colleiAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('colleiAvatar') !== 'comprado') {
        localStorage.setItem('colleiAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starCollei');
        imgElement.src = localStorage.getItem('iconCollei');
        imgCaracter.src = localStorage.getItem('imgCollei');
        nomeCaracter.innerHTML = localStorage.getItem('nomeCollei');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        colleiAvatar.innerHTML = "Esgotado";
        colleiAvatar.style.background = "#dd1440";
        colleiAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('colleiAvatar') == 'comprado') {
        colleiAvatar.innerHTML = "Esgotado";
        colleiAvatar.style.background = "#dd1440";
        colleiAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('colleiAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        colleiAvatar.innerHTML = "Indisponivel";
        colleiAvatar.style.background = "#dd1440";
        colleiAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            colleiAvatar.innerHTML = "Comprar";
            colleiAvatar.style.background = "black";
            colleiAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Dori
export const doriAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('doriAvatar') !== 'comprado') {
        localStorage.setItem('doriAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starDori');
        imgElement.src = localStorage.getItem('iconDori');
        imgCaracter.src = localStorage.getItem('imgDori');
        nomeCaracter.innerHTML = localStorage.getItem('nomeDori');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        doriAvatar.innerHTML = "Esgotado";
        doriAvatar.style.background = "#dd1440";
        doriAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('doriAvatar') == 'comprado') {
        doriAvatar.innerHTML = "Esgotado";
        doriAvatar.style.background = "#dd1440";
        doriAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('doriAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        doriAvatar.innerHTML = "Indisponivel";
        doriAvatar.style.background = "#dd1440";
        doriAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            doriAvatar.innerHTML = "Comprar";
            doriAvatar.style.background = "black";
            doriAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Kaveh
export const kavehAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('kavehAvatar') !== 'comprado') {
        localStorage.setItem('kavehAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starKaveh');
        imgElement.src = localStorage.getItem('iconKaveh');
        imgCaracter.src = localStorage.getItem('imgKaveh');
        nomeCaracter.innerHTML = localStorage.getItem('nomeKaveh');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        kavehAvatar.innerHTML = "Esgotado";
        kavehAvatar.style.background = "#dd1440";
        kavehAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kavehAvatar') == 'comprado') {
        kavehAvatar.innerHTML = "Esgotado";
        kavehAvatar.style.background = "#dd1440";
        kavehAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kavehAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        kavehAvatar.innerHTML = "Indisponivel";
        kavehAvatar.style.background = "#dd1440";
        kavehAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            kavehAvatar.innerHTML = "Comprar";
            kavehAvatar.style.background = "black";
            kavehAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Layla
export const laylaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('laylaAvatar') !== 'comprado') {
        localStorage.setItem('laylaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starLayla');
        imgElement.src = localStorage.getItem('iconLayla');
        imgCaracter.src = localStorage.getItem('imgLayla');
        nomeCaracter.innerHTML = localStorage.getItem('nomeLayla');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        laylaAvatar.innerHTML = "Esgotado";
        laylaAvatar.style.background = "#dd1440";
        laylaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('laylaAvatar') == 'comprado') {
        laylaAvatar.innerHTML = "Esgotado";
        laylaAvatar.style.background = "#dd1440";
        laylaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('laylaAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        laylaAvatar.innerHTML = "Indisponivel";
        laylaAvatar.style.background = "#dd1440";
        laylaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            laylaAvatar.innerHTML = "Comprar";
            laylaAvatar.style.background = "black";
            laylaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Faruzan
export const faruzanAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('faruzanAvatar') !== 'comprado') {
        localStorage.setItem('faruzanAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starFaruzan');
        imgElement.src = localStorage.getItem('iconFaruzan');
        imgCaracter.src = localStorage.getItem('imgFaruzan');
        nomeCaracter.innerHTML = localStorage.getItem('nomeFaruzan');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        faruzanAvatar.innerHTML = "Esgotado";
        faruzanAvatar.style.background = "#dd1440";
        faruzanAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('faruzanAvatar') == 'comprado') {
        faruzanAvatar.innerHTML = "Esgotado";
        faruzanAvatar.style.background = "#dd1440";
        faruzanAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('faruzanAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        faruzanAvatar.innerHTML = "Indisponivel";
        faruzanAvatar.style.background = "#dd1440";
        faruzanAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            faruzanAvatar.innerHTML = "Comprar";
            faruzanAvatar.style.background = "black";
            faruzanAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Candace
export const candaceAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('candaceAvatar') !== 'comprado') {
        localStorage.setItem('candaceAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starCandace');
        imgElement.src = localStorage.getItem('iconCandace');
        imgCaracter.src = localStorage.getItem('imgCandace');
        nomeCaracter.innerHTML = localStorage.getItem('nomeCandace');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        candaceAvatar.innerHTML = "Esgotado";
        candaceAvatar.style.background = "#dd1440";
        candaceAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('candaceAvatar') == 'comprado') {
        candaceAvatar.innerHTML = "Esgotado";
        candaceAvatar.style.background = "#dd1440";
        candaceAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('candaceAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        candaceAvatar.innerHTML = "Indisponivel";
        candaceAvatar.style.background = "#dd1440";
        candaceAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            candaceAvatar.innerHTML = "Comprar";
            candaceAvatar.style.background = "black";
            candaceAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

//Fontaine

// Neuvillette
export const neuvilletteAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('neuvilletteAvatar') !== 'comprado') {
        localStorage.setItem('neuvilletteAvatar', 'comprado');
        star.innerHTML = localStorage.getItem('starNeuvillette');
        imgElement.src = localStorage.getItem('iconNeuvillette');
        imgCaracter.src = localStorage.getItem('imgNeuvillette');
        nomeCaracter.innerHTML = localStorage.getItem('nomeNeuvillette');
        divCompra.style.display = 'flex';
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        neuvilletteAvatar.innerHTML = "Esgotado";
        neuvilletteAvatar.style.background = "#dd1440";
        neuvilletteAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('neuvilletteAvatar') == 'comprado') {
        neuvilletteAvatar.innerHTML = "Esgotado";
        neuvilletteAvatar.style.background = "#dd1440";
        neuvilletteAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('neuvilletteAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        neuvilletteAvatar.innerHTML = "Indisponivel";
        neuvilletteAvatar.style.background = "#dd1440";
        neuvilletteAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            neuvilletteAvatar.innerHTML = "Comprar";
            neuvilletteAvatar.style.background = "black";
            neuvilletteAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Furina
export const furinaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('furinaAvatar') !== 'comprado') {
        localStorage.setItem('furinaAvatar', 'comprado');
        star.innerHTML = localStorage.getItem('starFurina');
        imgElement.src = localStorage.getItem('iconFurina');
        imgCaracter.src = localStorage.getItem('imgFurina');
        nomeCaracter.innerHTML = localStorage.getItem('nomeFurina');
        divCompra.style.display = 'flex';
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        furinaAvatar.innerHTML = "Esgotado";
        furinaAvatar.style.background = "#dd1440";
        furinaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('furinaAvatar') == 'comprado') {
        furinaAvatar.innerHTML = "Esgotado";
        furinaAvatar.style.background = "#dd1440";
        furinaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('furinaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        furinaAvatar.innerHTML = "Indisponivel";
        furinaAvatar.style.background = "#dd1440";
        furinaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            furinaAvatar.innerHTML = "Comprar";
            furinaAvatar.style.background = "black";
            furinaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Lyney
export const lyneyAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('lyneyAvatar') !== 'comprado') {
        localStorage.setItem('lyneyAvatar', 'comprado');
        star.innerHTML = localStorage.getItem('starLyney');
        imgElement.src = localStorage.getItem('iconLyney');
        imgCaracter.src = localStorage.getItem('imgLyney');
        nomeCaracter.innerHTML = localStorage.getItem('nomeLyney');
        divCompra.style.display = 'flex';
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        lyneyAvatar.innerHTML = "Esgotado";
        lyneyAvatar.style.background = "#dd1440";
        lyneyAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('lyneyAvatar') == 'comprado') {
        lyneyAvatar.innerHTML = "Esgotado";
        lyneyAvatar.style.background = "#dd1440";
        lyneyAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('lyneyAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        lyneyAvatar.innerHTML = "Indisponivel";
        lyneyAvatar.style.background = "#dd1440";
        lyneyAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            lyneyAvatar.innerHTML = "Comprar";
            lyneyAvatar.style.background = "black";
            lyneyAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Navia
export const naviaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('naviaAvatar') !== 'comprado') {
        localStorage.setItem('naviaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starNavia');
        imgElement.src = localStorage.getItem('iconNavia');
        imgCaracter.src = localStorage.getItem('imgNavia');
        nomeCaracter.innerHTML = localStorage.getItem('nomeNavia');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        naviaAvatar.innerHTML = "Esgotado";
        naviaAvatar.style.background = "#dd1440";
        naviaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('naviaAvatar') == 'comprado') {
        naviaAvatar.innerHTML = "Esgotado";
        naviaAvatar.style.background = "#dd1440";
        naviaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('naviaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        naviaAvatar.innerHTML = "Indisponivel";
        naviaAvatar.style.background = "#dd1440";
        naviaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            naviaAvatar.innerHTML = "Comprar";
            naviaAvatar.style.background = "black";
            naviaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Wriothesley
export const wriothesleyAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('wriothesleyAvatar') !== 'comprado') {
        localStorage.setItem('wriothesleyAvatar', 'comprado');
        star.innerHTML = localStorage.getItem('starWriothesley');
        imgElement.src = localStorage.getItem('iconWriothesley');
        imgCaracter.src = localStorage.getItem('imgWriothesley');
        nomeCaracter.innerHTML = localStorage.getItem('nomeWriothesley');
        divCompra.style.display = 'flex';
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        wriothesleyAvatar.innerHTML = "Esgotado";
        wriothesleyAvatar.style.background = "#dd1440";
        wriothesleyAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('wriothesleyAvatar') == 'comprado') {
        wriothesleyAvatar.innerHTML = "Esgotado";
        wriothesleyAvatar.style.background = "#dd1440";
        wriothesleyAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('wriothesleyAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        wriothesleyAvatar.innerHTML = "Indisponivel";
        wriothesleyAvatar.style.background = "#dd1440";
        wriothesleyAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            wriothesleyAvatar.innerHTML = "Comprar";
            wriothesleyAvatar.style.background = "black";
            wriothesleyAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Freminet
export const freminetAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('freminetAvatar') !== 'comprado') {
        localStorage.setItem('freminetAvatar', 'comprado');
        star.innerHTML = localStorage.getItem('starFreminet');
        imgElement.src = localStorage.getItem('iconFreminet');
        imgCaracter.src = localStorage.getItem('imgFreminet');
        nomeCaracter.innerHTML = localStorage.getItem('nomeFreminet');
        divCompra.style.display = 'flex';
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        freminetAvatar.innerHTML = "Esgotado";
        freminetAvatar.style.background = "#dd1440";
        freminetAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('freminetAvatar') == 'comprado') {
        freminetAvatar.innerHTML = "Esgotado";
        freminetAvatar.style.background = "#dd1440";
        freminetAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('freminetAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        freminetAvatar.innerHTML = "Indisponivel";
        freminetAvatar.style.background = "#dd1440";
        freminetAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            freminetAvatar.innerHTML = "Comprar";
            freminetAvatar.style.background = "black";
            freminetAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Lynette
export const lynetteAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('lynetteAvatar') !== 'comprado') {
        localStorage.setItem('lynetteAvatar', 'comprado');
        star.innerHTML = localStorage.getItem('starLynette');
        imgElement.src = localStorage.getItem('iconLynette');
        imgCaracter.src = localStorage.getItem('imgLynette');
        nomeCaracter.innerHTML = localStorage.getItem('nomeLynette');
        divCompra.style.display = 'flex';
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        lynetteAvatar.innerHTML = "Esgotado";
        lynetteAvatar.style.background = "#dd1440";
        lynetteAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('lynetteAvatar') == 'comprado') {
        lynetteAvatar.innerHTML = "Esgotado";
        lynetteAvatar.style.background = "#dd1440";
        lynetteAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('lynetteAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        lynetteAvatar.innerHTML = "Indisponivel";
        lynetteAvatar.style.background = "#dd1440";
        lynetteAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            lynetteAvatar.innerHTML = "Comprar";
            lynetteAvatar.style.background = "black";
            lynetteAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Charlotte
export const charlotteAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('charlotteAvatar') !== 'comprado') {
        localStorage.setItem('charlotteAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starCharlotte');
        imgElement.src = localStorage.getItem('iconCharlotte');
        imgCaracter.src = localStorage.getItem('imgCharlotte');
        nomeCaracter.innerHTML = localStorage.getItem('nomeCharlotte');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        charlotteAvatar.innerHTML = "Esgotado";
        charlotteAvatar.style.background = "#dd1440";
        charlotteAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('charlotteAvatar') == 'comprado') {
        charlotteAvatar.innerHTML = "Esgotado";
        charlotteAvatar.style.background = "#dd1440";
        charlotteAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('charlotteAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        charlotteAvatar.innerHTML = "Indisponivel";
        charlotteAvatar.style.background = "#dd1440";
        charlotteAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            charlotteAvatar.innerHTML = "Comprar";
            charlotteAvatar.style.background = "black";
            charlotteAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Chevreuse
export const chevreuseAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 600 && localStorage.getItem('chevreuseAvatar') !== 'comprado') {
        localStorage.setItem('chevreuseAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starChevreuse');
        imgElement.src = localStorage.getItem('iconChevreuse');
        imgCaracter.src = localStorage.getItem('imgChevreuse');
        nomeCaracter.innerHTML = localStorage.getItem('nomeChevreuse');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 600);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        chevreuseAvatar.innerHTML = "Esgotado";
        chevreuseAvatar.style.background = "#dd1440";
        chevreuseAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('chevreuseAvatar') == 'comprado') {
        chevreuseAvatar.innerHTML = "Esgotado";
        chevreuseAvatar.style.background = "#dd1440";
        chevreuseAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('chevreuseAvatar') !== 'comprado' && localStorage.getItem('Money') < 600) {
        chevreuseAvatar.innerHTML = "Indisponivel";
        chevreuseAvatar.style.background = "#dd1440";
        chevreuseAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            chevreuseAvatar.innerHTML = "Comprar";
            chevreuseAvatar.style.background = "black";
            chevreuseAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

//Snezhnaya

// Tartaglia
export const tartagliaAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('tartagliaAvatar') !== 'comprado') {
        localStorage.setItem('tartagliaAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starTartaglia');
        imgElement.src = localStorage.getItem('iconTartaglia');
        imgCaracter.src = localStorage.getItem('imgTartaglia');
        nomeCaracter.innerHTML = localStorage.getItem('nomeTartaglia');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        tartagliaAvatar.innerHTML = "Esgotado";
        tartagliaAvatar.style.background = "#dd1440";
        tartagliaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('tartagliaAvatar') == 'comprado') {
        tartagliaAvatar.innerHTML = "Esgotado";
        tartagliaAvatar.style.background = "#dd1440";
        tartagliaAvatar.style.transition = "0.4s linear";
    } else if(localStorage.getItem('tartagliaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        tartagliaAvatar.innerHTML = "Indisponivel";
        tartagliaAvatar.style.background = "#dd1440";
        tartagliaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            tartagliaAvatar.innerHTML = "Comprar";
            tartagliaAvatar.style.background = "black";
            tartagliaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
};

//Skins

// Diluc Skin
export const dilucSkinAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 1000 && localStorage.getItem('dilucSkinAvatar') !== 'comprado') {
        localStorage.setItem('dilucSkinAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starDilucSkin');
        imgElement.src = localStorage.getItem('iconDilucSkin');
        imgCaracter.src = localStorage.getItem('imgDilucSkin');
        nomeCaracter.innerHTML = localStorage.getItem('nomeDilucSkin');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 1000);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        dilucAvatarSkin.innerHTML = "Esgotado";
        dilucAvatarSkin.style.background = "#dd1440";
        dilucAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('dilucSkinAvatar') == 'comprado') {
        dilucAvatarSkin.innerHTML = "Esgotado";
        dilucAvatarSkin.style.background = "#dd1440";
        dilucAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('dilucSkinAvatar') !== 'comprado' && localStorage.getItem('Money') < 1000) {
        dilucAvatarSkin.innerHTML = "Indisponivel";
        dilucAvatarSkin.style.background = "#dd1440";
        dilucAvatarSkin.style.transition = "0.4s linear";
        setTimeout(() => {
            dilucAvatarSkin.innerHTML = "Comprar";
            dilucAvatarSkin.style.background = "black";
            dilucAvatarSkin.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Jean Skin
export const jeanSkinAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 1000 && localStorage.getItem('jeanSkinAvatar') !== 'comprado') {
        localStorage.setItem('jeanSkinAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starJeanSkin');
        imgElement.src = localStorage.getItem('iconJeanSkin');
        imgCaracter.src = localStorage.getItem('imgJeanSkin');
        nomeCaracter.innerHTML = localStorage.getItem('nomeJeanSkin');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 1000);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        jeanAvatarSkin.innerHTML = "Esgotado";
        jeanAvatarSkin.style.background = "#dd1440";
        jeanAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('jeanSkinAvatar') == 'comprado') {
        jeanAvatarSkin.innerHTML = "Esgotado";
        jeanAvatarSkin.style.background = "#dd1440";
        jeanAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('jeanSkinAvatar') !== 'comprado' && localStorage.getItem('Money') < 1000) {
        jeanAvatarSkin.innerHTML = "Indisponivel";
        jeanAvatarSkin.style.background = "#dd1440";
        jeanAvatarSkin.style.transition = "0.4s linear";
        setTimeout(() => {
            jeanAvatarSkin.innerHTML = "Comprar";
            jeanAvatarSkin.style.background = "black";
            jeanAvatarSkin.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Klee Skin
export const kleeSkinAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 1000 && localStorage.getItem('kleeSkinAvatar') !== 'comprado') {
        localStorage.setItem('kleeSkinAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starKleeSkin');
        imgElement.src = localStorage.getItem('iconKleeSkin');
        imgCaracter.src = localStorage.getItem('imgKleeSkin');
        nomeCaracter.innerHTML = localStorage.getItem('nomeKleeSkin');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 1000);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        kleeAvatarSkin.innerHTML = "Esgotado";
        kleeAvatarSkin.style.background = "#dd1440";
        kleeAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kleeSkinAvatar') == 'comprado') {
        kleeAvatarSkin.innerHTML = "Esgotado";
        kleeAvatarSkin.style.background = "#dd1440";
        kleeAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kleeSkinAvatar') !== 'comprado' && localStorage.getItem('Money') < 1000) {
        kleeAvatarSkin.innerHTML = "Indisponivel";
        kleeAvatarSkin.style.background = "#dd1440";
        kleeAvatarSkin.style.transition = "0.4s linear";
        setTimeout(() => {
            kleeAvatarSkin.innerHTML = "Comprar";
            kleeAvatarSkin.style.background = "black";
            kleeAvatarSkin.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Ayaka Skin
export const ayakaSkinAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 1000 && localStorage.getItem('ayakaSkinAvatar') !== 'comprado') {
        localStorage.setItem('ayakaSkinAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starAyakaSkin');
        imgElement.src = localStorage.getItem('iconAyakaSkin');
        imgCaracter.src = localStorage.getItem('imgAyakaSkin');
        nomeCaracter.innerHTML = localStorage.getItem('nomeAyakaSkin');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 1000);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        ayakaAvatarSkin.innerHTML = "Esgotado";
        ayakaAvatarSkin.style.background = "#dd1440";
        ayakaAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('ayakaSkinAvatar') == 'comprado') {
        ayakaAvatarSkin.innerHTML = "Esgotado";
        ayakaAvatarSkin.style.background = "#dd1440";
        ayakaAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('ayakaSkinAvatar') !== 'comprado' && localStorage.getItem('Money') < 1000) {
        ayakaAvatarSkin.innerHTML = "Indisponivel";
        ayakaAvatarSkin.style.background = "#dd1440";
        ayakaAvatarSkin.style.transition = "0.4s linear";
        setTimeout(() => {
            ayakaAvatarSkin.innerHTML = "Comprar";
            ayakaAvatarSkin.style.background = "black";
            ayakaAvatarSkin.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Fischl Skin
export const fischlSkinAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 1000 && localStorage.getItem('fischlSkinAvatar') !== 'comprado') {
        localStorage.setItem('fischlSkinAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starFischlSkin');
        imgElement.src = localStorage.getItem('iconFischlSkin');
        imgCaracter.src = localStorage.getItem('imgFischlSkin');
        nomeCaracter.innerHTML = localStorage.getItem('nomeFischlSkin');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 1000);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        fischlAvatarSkin.innerHTML = "Esgotado";
        fischlAvatarSkin.style.background = "#dd1440";
        fischlAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('fischlSkinAvatar') == 'comprado') {
        fischlAvatarSkin.innerHTML = "Esgotado";
        fischlAvatarSkin.style.background = "#dd1440";
        fischlAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('fischlSkinAvatar') !== 'comprado' && localStorage.getItem('Money') < 1000) {
        fischlAvatarSkin.innerHTML = "Indisponivel";
        fischlAvatarSkin.style.background = "#dd1440";
        fischlAvatarSkin.style.transition = "0.4s linear";
        setTimeout(() => {
            fischlAvatarSkin.innerHTML = "Comprar";
            fischlAvatarSkin.style.background = "black";
            fischlAvatarSkin.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Ningguang Skin
export const ningguangSkinAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 1000 && localStorage.getItem('ningguangSkinAvatar') !== 'comprado') {
        localStorage.setItem('ningguangSkinAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starNingguangSkin');
        imgElement.src = localStorage.getItem('iconNingguangSkin');
        imgCaracter.src = localStorage.getItem('imgNingguangSkin');
        nomeCaracter.innerHTML = localStorage.getItem('nomeNingguangSkin');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 1000);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        ningguangAvatarSkin.innerHTML = "Esgotado";
        ningguangAvatarSkin.style.background = "#dd1440";
        ningguangAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('ningguangSkinAvatar') == 'comprado') {
        ningguangAvatarSkin.innerHTML = "Esgotado";
        ningguangAvatarSkin.style.background = "#dd1440";
        ningguangAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('ningguangSkinAvatar') !== 'comprado' && localStorage.getItem('Money') < 1000) {
        ningguangAvatarSkin.innerHTML = "Indisponivel";
        ningguangAvatarSkin.style.background = "#dd1440";
        ningguangAvatarSkin.style.transition = "0.4s linear";
        setTimeout(() => {
            ningguangAvatarSkin.innerHTML = "Comprar";
            ningguangAvatarSkin.style.background = "black";
            ningguangAvatarSkin.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Lisa Skin
export const lisaSkinAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 1000 && localStorage.getItem('lisaSkinAvatar') !== 'comprado') {
        localStorage.setItem('lisaSkinAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starLisaSkin');
        imgElement.src = localStorage.getItem('iconLisaSkin');
        imgCaracter.src = localStorage.getItem('imgLisaSkin');
        nomeCaracter.innerHTML = localStorage.getItem('nomeLisaSkin');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 1000);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        lisaAvatarSkin.innerHTML = "Esgotado";
        lisaAvatarSkin.style.background = "#dd1440";
        lisaAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('lisaSkinAvatar') == 'comprado') {
        lisaAvatarSkin.innerHTML = "Esgotado";
        lisaAvatarSkin.style.background = "#dd1440";
        lisaAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('lisaSkinAvatar') !== 'comprado' && localStorage.getItem('Money') < 1000) {
        lisaAvatarSkin.innerHTML = "Indisponivel";
        lisaAvatarSkin.style.background = "#dd1440";
        lisaAvatarSkin.style.transition = "0.4s linear";
        setTimeout(() => {
            lisaAvatarSkin.innerHTML = "Comprar";
            lisaAvatarSkin.style.background = "black";
            lisaAvatarSkin.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Barbara Skin
export const barbaraSkinAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 1000 && localStorage.getItem('barbaraSkinAvatar') !== 'comprado') {
        localStorage.setItem('barbaraSkinAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starBarbaraSkin');
        imgElement.src = localStorage.getItem('iconBarbaraSkin');
        imgCaracter.src = localStorage.getItem('imgBarbaraSkin');
        nomeCaracter.innerHTML = localStorage.getItem('nomeBarbaraSkin');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 1000);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        barbaraAvatarSkin.innerHTML = "Esgotado";
        barbaraAvatarSkin.style.background = "#dd1440";
        barbaraAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('barbaraSkinAvatar') == 'comprado') {
        barbaraAvatarSkin.innerHTML = "Esgotado";
        barbaraAvatarSkin.style.background = "#dd1440";
        barbaraAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('barbaraSkinAvatar') !== 'comprado' && localStorage.getItem('Money') < 1000) {
        barbaraAvatarSkin.innerHTML = "Indisponivel";
        barbaraAvatarSkin.style.background = "#dd1440";
        barbaraAvatarSkin.style.transition = "0.4s linear";
        setTimeout(() => {
            barbaraAvatarSkin.innerHTML = "Comprar";
            barbaraAvatarSkin.style.background = "black";
            barbaraAvatarSkin.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Keqing Skin
export const keqingSkinAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 1000 && localStorage.getItem('keqingSkinAvatar') !== 'comprado') {
        localStorage.setItem('keqingSkinAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starKeqingSkin');
        imgElement.src = localStorage.getItem('iconKeqingSkin');
        imgCaracter.src = localStorage.getItem('imgKeqingSkin');
        nomeCaracter.innerHTML = localStorage.getItem('nomeKeqingSkin');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 1000);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        keqingAvatarSkin.innerHTML = "Esgotado";
        keqingAvatarSkin.style.background = "#dd1440";
        keqingAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('keqingSkinAvatar') == 'comprado') {
        keqingAvatarSkin.innerHTML = "Esgotado";
        keqingAvatarSkin.style.background = "#dd1440";
        keqingAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('keqingSkinAvatar') !== 'comprado' && localStorage.getItem('Money') < 1000) {
        keqingAvatarSkin.innerHTML = "Indisponivel";
        keqingAvatarSkin.style.background = "#dd1440";
        keqingAvatarSkin.style.transition = "0.4s linear";
        setTimeout(() => {
            keqingAvatarSkin.innerHTML = "Comprar";
            keqingAvatarSkin.style.background = "black";
            keqingAvatarSkin.style.transition = "0.4s linear";
        }, 3000);
    }
};

// Kaeya Skin
export const kaeyaSkinAvatarCompra = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    let divCompra = document.querySelector('#divCompra');
    let imgElement = document.querySelector('#imgElement');
    let star = document.querySelector('#star');
    let nomeCaracter = document.querySelector('#nomeCaracter');
    let imgCaracter = document.querySelector('#imgCaracter');

    if(localStorage.getItem('Money') >= 1000 && localStorage.getItem('kaeyaSkinAvatar') !== 'comprado') {
        localStorage.setItem('kaeyaSkinAvatar', 'comprado');
        const audio = new Audio();
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        star.innerHTML = localStorage.getItem('starKaeyaSkin');
        imgElement.src = localStorage.getItem('iconKaeyaSkin');
        imgCaracter.src = localStorage.getItem('imgKaeyaSkin');
        nomeCaracter.innerHTML = localStorage.getItem('nomeKaeyaSkin');
        divCompra.style.display = 'flex';
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 1000);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        kaeyaAvatarSkin.innerHTML = "Esgotado";
        kaeyaAvatarSkin.style.background = "#dd1440";
        kaeyaAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kaeyaSkinAvatar') == 'comprado') {
        kaeyaAvatarSkin.innerHTML = "Esgotado";
        kaeyaAvatarSkin.style.background = "#dd1440";
        kaeyaAvatarSkin.style.transition = "0.4s linear";
    } else if(localStorage.getItem('kaeyaSkinAvatar') !== 'comprado' && localStorage.getItem('Money') < 1000) {
        kaeyaAvatarSkin.innerHTML = "Indisponivel";
        kaeyaAvatarSkin.style.background = "#dd1440";
        kaeyaAvatarSkin.style.transition = "0.4s linear";
        setTimeout(() => {
            kaeyaAvatarSkin.innerHTML = "Comprar";
            kaeyaAvatarSkin.style.background = "black";
            kaeyaAvatarSkin.style.transition = "0.4s linear";
        }, 3000);
    }
};


