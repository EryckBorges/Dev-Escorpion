const eua = {
    inicio: 'Home',
    cursos: 'Courses',
    jogos: 'Games',
    portfolio: 'Portfolio',
    contato: 'Contact',
    sobre: 'About',
}

const brasil = {
    inicio: 'Ínicio',
    cursos: 'Cursos',
    jogos: 'Jogos',
    portfolio: 'Portfólio',
    contato: 'Contato',
    sobre: 'Sobre',
}

const spain = {
    inicio: 'Comenzar',
    cursos: 'Cursos',
    jogos: 'Juegos',
    portfolio: 'Portafolio',
    contato: 'Contacto',
    sobre: 'En',
}

const franca = {
    inicio: 'Commencer',
    cursos: 'Cours',
    jogos: 'Jeux',
    portfolio: 'Portefeuille',
    contato: 'Contact',
    sobre: 'Sur',
}

const china = {
    inicio: '开始',
    cursos: '课程',
    jogos: '游戏',
    portfolio: '作品集',
    contato: '接触',
    sobre: '在',
}

const elementos = {
    inicio: document.querySelectorAll('.inicio'),
    cursos: document.querySelectorAll('.cursos'),
    jogos: document.querySelectorAll('.jogos'),
    portfolio: document.querySelectorAll('.portfolio'),
    contato: document.querySelectorAll('.contato'),
    sobre: document.querySelectorAll('.sobre'),
}

const ingles = () => {
    elementos.inicio.forEach((inicioText) => {
        inicioText.innerHTML = eua.inicio;
    });
    elementos.cursos.forEach((cursosText) => {
        cursosText.innerHTML= eua.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
        jogosText.innerHTML= eua.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
        portfolioText.innerHTML = eua.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= eua.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = eua.sobre;
    });  
}

const portugues = () => {
    elementos.inicio.forEach((inicioText) => {
        inicioText.innerHTML = brasil.inicio;
    });
    elementos.cursos.forEach((cursosText) => {
        cursosText.innerHTML= brasil.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
        jogosText.innerHTML= brasil.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
        portfolioText.innerHTML = brasil.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= brasil.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = brasil.sobre;
    });  
}

const espanha = () => {
    elementos.inicio.forEach((inicioText) => {
        inicioText.innerHTML = spain.inicio;
    });
    elementos.cursos.forEach((cursosText) => {
        cursosText.innerHTML= spain.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
        jogosText.innerHTML= spain.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
        portfolioText.innerHTML = spain.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= spain.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = spain.sobre;
    });  
}

const frances = () => {
    elementos.inicio.forEach((inicioText) => {
        inicioText.innerHTML = franca.inicio;
    });
    elementos.cursos.forEach((cursosText) => {
        cursosText.innerHTML= franca.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
        jogosText.innerHTML= franca.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
        portfolioText.innerHTML = franca.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= franca.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = franca.sobre;
    });   
}

const chines = () => {
    elementos.inicio.forEach((inicioText) => {
        inicioText.innerHTML = china.inicio;
    });
    elementos.cursos.forEach((cursosText) => {
        cursosText.innerHTML= china.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
        jogosText.innerHTML= china.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
        portfolioText.innerHTML = china.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= china.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = china.sobre;
    });  
}

let langSelecionada = document.querySelector('.idiomaSelecionada');
let flagSelecionada = document.querySelector(".flagsSelecionada img");

const langPage = () => {
    if (localStorage.getItem('lang') == 'eu') {
        langSelecionada.innerHTML = "EN";
        flagSelecionada.src = "../../global/icon/eua.png";
        ingles();
    }else if (localStorage.getItem('lang') == 'es') {
            langSelecionada.innerHTML = "ES";
            flagSelecionada.src = "../../global/icon/spain.png";
            espanha();
        
    }else if (localStorage.getItem('lang') == 'fr') {
            langSelecionada.innerHTML = "FR";
            flagSelecionada.src = "../../global/icon/franca.png";
            frances();
    }else if (localStorage.getItem('lang') == 'ch') {
            langSelecionada.innerHTML = "ZH";
            flagSelecionada.src = "../../global/icon/china.png";
            chines();
    }else {
        localStorage.setItem('lang', 'br');
        langSelecionada.innerHTML = "PT";
        flagSelecionada.src = "../../global/icon/brasil.png";
        portugues();
    }
}

langPage();