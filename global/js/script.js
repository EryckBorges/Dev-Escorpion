
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

//Função dos cliques para mudar de idioma

const eu = document.querySelector('.eua');

eu.addEventListener('click', () => {
    langSelecionada.innerHTML = "EN";
    flagSelecionada.src = "https://eryckborges.github.io/Dev-Escorpion/global/icon/eua.png"
    localStorage.setItem('lang', 'eu');
    ingles();
});

const es = document.querySelector('.spain');

es.addEventListener('click', () => {
    langSelecionada.innerHTML = "ES";
    flagSelecionada.src = "https://eryckborges.github.io/Dev-Escorpion/global/icon/spain.png"
    localStorage.setItem('lang', 'es');
    espanha();
});

const br = document.querySelector('.brasil');

br.addEventListener('click', () => {
    langSelecionada.innerHTML = "PT";
    flagSelecionada.src = "https://eryckborges.github.io/Dev-Escorpion/global/icon/brasil.png"
    localStorage.setItem('lang', 'br');
    portugues();
});

const fr = document.querySelector('.franca');

fr.addEventListener('click', () => {
    langSelecionada.innerHTML = "FR";
    flagSelecionada.src = "https://eryckborges.github.io/Dev-Escorpion/global/icon/franca.png"
    localStorage.setItem('lang', 'fr');
    frances();
});

const ch = document.querySelector('.china');

ch.addEventListener('click', () => {
    langSelecionada.innerHTML = "ZH";
    flagSelecionada.src = "https://eryckborges.github.io/Dev-Escorpion/global/icon/china.png"
    localStorage.setItem('lang', 'ch');
    chines();
});
