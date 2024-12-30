//Animação ao rolar o scrool

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animate-on-scroll');
  
    // Dicionário para armazenar timers de animação de saída
    const exitTimers = new Map();
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = entry.target;
        const animationClass = target.getAttribute('data-animation');
  
        if (entry.isIntersecting) {
          if (exitTimers.has(target)) {
            clearTimeout(exitTimers.get(target));
            exitTimers.delete(target);
          }
  
          // Adiciona a animação de entrada
          if (animationClass) {
            target.setAttribute('style', `animation:${animationClass};animation-duration:1s;`);
            target.style.opacity = "1";
          }
        } else {
            const timer = setTimeout(() => {
              target.removeAttribute('style');
            }, 2000);
            target.style.opacity = "0";
            exitTimers.set(target, timer);
        }
      });
    }, {
      threshold: 0.1
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
});

const eua = {
  inicio: 'Home',
  cursos: 'Courses',
  jogos: 'Games',
  portfolio: 'Portfolio',
  contato: 'Contact',
  sobre: 'About',
};

const brasil = {
  inicio: 'Ínicio',
  cursos: 'Cursos',
  jogos: 'Jogos',
  portfolio: 'Portfolio',
  contato: 'Contato',
  sobre: 'Sobre',
};

const spain = {
  inicio: 'Comenzar',
  cursos: 'Cursos',
  jogos: 'Juegos',
  portfolio: 'Cartera',
  contato: 'Contacto',
  sobre: 'En',
};

const franca = {
  inicio: 'Commencer',
  cursos: 'Cours',
  jogos: 'Jeux',
  portfolio: 'Portefeuille',
  contato: 'Contact',
  sobre: 'Sur',
};

const china = {
  inicio: '开始',
  cursos: '课程',
  jogos: '游戏',
  portfolio: '文件夹',
  contato: '接触',
  sobre: '在',
};

const elementos = {
  inicio: document.querySelectorAll('.inicio'),
  cursos: document.querySelectorAll('.cursos'),
  jogos: document.querySelectorAll('.jogos'),
  portfolio: document.querySelectorAll('.portfolio'),
  contato: document.querySelectorAll('.contato'),
  sobre: document.querySelectorAll('.sobre'),
};

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
      portfolioText.innerHTM = eua.portfolio;
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
      portfolioText.innerHTM = brasil.portfolio;
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
      portfolioText.innerHTM = spain.portfolio;
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
      portfolioText.innerHTM = franca.portfolio;
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
      portfolioText.innerHTM = china.portfolio;
  });
  elementos.contato.forEach((contatoText) => {
      contatoText.innerHTML= china.contato;
  });
  elementos.sobre.forEach((sobreText) => {
      sobreText.innerHTML = china.sobre;
  });   
}


const btnMenu = document.querySelector('.btnMenu');
const menuMobile = document.querySelector('.menuMobile');
const mobile = document.querySelector('.mobile');
const closeMenuBtn = document.querySelector('.closeMenuBtn');

//Função do OpenMenu

//Todas as variaveis estão acima para funcionar a tradução

btnMenu.addEventListener('click', () => {
  menuMobile.classList.remove('fadeOutMenu');
  mobile.classList.remove('fadeOutRightMenu');
  menuMobile.classList.add('activedMenu');
  menuMobile.classList.add('fadeInMenu');
  mobile.classList.add('fadeInRightMenu');
  langPage();
});

closeMenuBtn.addEventListener('click', () => {
  menuMobile.classList.remove('fadeInMenu');
  mobile.classList.remove('fadeInRightMenu');    
  mobile.classList.add('fadeOutRightMenu');
  menuMobile.classList.add('fadeOutMenu');
  setTimeout(() => {
      menuMobile.classList.remove('activedMenu');
  }, 500);
});

// Abre as seleção de linguagens

const flagsSelecionada = document.querySelector(".flagsSelecionada");
const langs = document.querySelector('.lang');

let isLangOpen = false;

flagsSelecionada.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!isLangOpen) {
        langs.style.display = 'flex';
        langs.style.opacity = "1";
        langs.classList.add('fadeInLang');
        langs.classList.remove('fadeOutLang');
        isLangOpen = true;
    } else {
        closeLang();
    }
});

document.addEventListener("click", (event) => {
    if (isLangOpen && !langs.contains(event.target)) {
        closeLang();
    }
});

function closeLang() {
    langs.classList.remove('fadeInLang');
    langs.classList.add('fadeOutLang');
    setTimeout(() => {
        langs.style.opacity = "0";
        langs.style.display = 'none';
        langs.classList.remove('fadeOutLang');
        isLangOpen = false;
    }, 80);
}

//Muda a linguagem do site 

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
            flagSelecionada.src = "./image/franca.png";
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

//Função dos cliques para mudar de idioma

const eu = document.querySelector('.eua');

eu.addEventListener('click', () => {
    langSelecionada.innerHTML = "EN";
    flagSelecionada.src = "../../global/icon/eua.png"
    localStorage.setItem('lang', 'eu');
    ingles();
});

const es = document.querySelector('.spain');

es.addEventListener('click', () => {
    langSelecionada.innerHTML = "ES";
    flagSelecionada.src = "../../global/icon/spain.png"
    localStorage.setItem('lang', 'es');
    espanha();
});

const br = document.querySelector('.brasil');

br.addEventListener('click', () => {
    langSelecionada.innerHTML = "PT";
    flagSelecionada.src = "../../global/icon/brasil.png"
    localStorage.setItem('lang', 'br');
    portugues();
});

const fr = document.querySelector('.franca');

fr.addEventListener('click', () => {
    langSelecionada.innerHTML = "FR";
    flagSelecionada.src = "../../global/icon/franca.png"
    localStorage.setItem('lang', 'fr');
    frances();
});

const ch = document.querySelector('.china');

ch.addEventListener('click', () => {
    langSelecionada.innerHTML = "ZH";
    flagSelecionada.src = "../../global/icon/china.png"
    localStorage.setItem('lang', 'ch');
    chines();
});
