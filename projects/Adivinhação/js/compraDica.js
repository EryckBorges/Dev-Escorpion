export const compraDica = () => {
    let pontos = parseInt(localStorage.getItem('Money')) || 0;
    const audio = new Audio();
    const btnBonus = document.querySelector('#btnDica');
    const dicaBonus = document.querySelector('#bonus');
    const pont = document.querySelector('#input-pont');

    //Variavel de dicas

    let dicas = 0;

    //Compra de Dicas

    if(localStorage.getItem('Money') >= 200 && dicas == 0) {
        dicas++;
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 200);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        btnBonus.style.display = "block";
        dicaBonus.innerHTML = "Esgotado";
        dicaBonus.style.background = "#dd1440";
        dicaBonus.style.transition = "0.4s linear";
    }else if(dicas > 0) {
        dicas = 0;
        dicaBonus.innerHTML = "Esgotado";
        dicaBonus.style.background = "#dd1440";
        dicaBonus.style.transition = "0.4s linear";
    }else if(dicas == 0 && localStorage.getItem('Money') < 200) {
        dicaBonus.innerHTML = "Indisponivel";
        dicaBonus.style.background = "#dd1440";
        dicaBonus.style.transition = "0.4s linear";
            setTimeout(() => {
                dicaBonus.innerHTML = "Comprar";
                dicaBonus.style.background = "black";
                dicaBonus.style.transition = "0.4s linear";
            }, 3000);
    }
};

export const btnBonusCompra = () => {
    const btnBonus = document.querySelector('#btnDica');
    const dicaBonus = document.querySelector('#bonus');
    const dica = document.querySelector('#dica');
    const arrayPersons = JSON.parse(localStorage.getItem('persons'));
    const perEscolhido = localStorage.getItem('Personagem')
    const btn = document.querySelector('#btn');

    if(localStorage.getItem('persons')) {
        dica.innerHTML = arrayPersons[perEscolhido].bonus;
        btnBonus.style.display = "none";
        dicaBonus.innerHTML = "Comprar";
        dicaBonus.style.background = "black";
        dicaBonus.style.transition = "0.4s linear";
        btn.setAttribute('disabled', '');
        setTimeout(() => {
            dica.innerHTML = arrayPersons[perEscolhido].dica;
            btn.removeAttribute('disabled');
        }, 15000);
    }else {
        dica.innerHTML = localStorage.getItem('Bonus');
        btnBonus.style.display = "none";
        dicaBonus.innerHTML = "Comprar";
        dicaBonus.style.background = "black";
        dicaBonus.style.transition = "0.4s linear";
        btn.setAttribute('disabled', '');
        setTimeout(() => {
            dica.innerHTML = personagens[`${localStorage.getItem('Personagem')}`].dica;
            btn.removeAttribute('disabled');
        }, 15000);
    }
};