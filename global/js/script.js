// Linguagens e elementos

const eua = {
  toastAlertDesenvolvi: "In Development",
};

const brasil = {
  toastAlertDesenvolvi: "Em Desenvolvimento",
};

const spain = {
  toastAlertDesenvolvi: "En Desarrollo",
};

const franca = {
  toastAlertDesenvolvi: "En Développement",
};

const china = {
  toastAlertDesenvolvi: "开发中",
};

const elementos = {
  toastAlertDesenvolvi: document.querySelector(".textToast"),
};



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
btnMenu.addEventListener('click', () => {
  menuMobile.classList.remove('fadeOutMenu');
  mobile.classList.remove('fadeOutRightMenu');
  menuMobile.classList.add('activedMenu');
  menuMobile.classList.add('fadeInMenu');
  mobile.classList.add('fadeInRightMenu');
  langPage();
});

// Fecha o Menu
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

let langSelecionada = document.querySelector(".idiomaSelecionada");
let flagSelecionada = document.querySelector(".flagsSelecionada img");
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
const es = document.querySelector('.spain');
const br = document.querySelector('.brasil');
const fr = document.querySelector('.franca');
const ch = document.querySelector('.china');

// Inglês
eu.addEventListener('click', () => {
  langSelecionada.innerHTML = "EN";
  flagSelecionada.src = "https://eryckborges.github.io/Dev-Escorpion/global/icon/eua.png"
  localStorage.setItem('lang', 'eu');
  ingles();
});

// Espanhol
es.addEventListener('click', () => {
  langSelecionada.innerHTML = "ES";
  flagSelecionada.src = "https://eryckborges.github.io/Dev-Escorpion/global/icon/spain.png"
  localStorage.setItem('lang', 'es');
  espanha();
});

// Português Brasil
br.addEventListener('click', () => {
  langSelecionada.innerHTML = "PT";
  flagSelecionada.src = "https://eryckborges.github.io/Dev-Escorpion/global/icon/brasil.png"
  localStorage.setItem('lang', 'br');
  portugues();
});

// Francês
fr.addEventListener('click', () => {
  langSelecionada.innerHTML = "FR";
  flagSelecionada.src = "https://eryckborges.github.io/Dev-Escorpion/global/icon/franca.png"
  localStorage.setItem('lang', 'fr');
  frances();
});

// Chinês
ch.addEventListener('click', () => {
  langSelecionada.innerHTML = "ZH";
  flagSelecionada.src = "https://eryckborges.github.io/Dev-Escorpion/global/icon/china.png"
  localStorage.setItem('lang', 'ch');
  chines();
});

// Funcionalidade do Toast

export class ToastFunction {
  constructor(lang) {
    this.lang = lang;
    this.toast = null; // Vai guardar o .toast
    this.textToast = null; // Vai guardar o parágrafo da mensagem
  }

  createToast() {
    // Cria os elementos
    const toastDiv = document.createElement("div");
    const divForToast = document.createElement("div");
    const imgToast = document.createElement("img");
    const divForToast2 = document.createElement("div");
    const pToast = document.createElement("p");

    // Aponta elementos para uso posterior
    this.toast = toastDiv;
    this.textToast = pToast;

    // Adiciona classes e estrutura
    toastDiv.classList.add("toast", "center", "over");

    const main = document.querySelector("main") || document.body;
    main.appendChild(toastDiv);

    divForToast.classList.add("imgToast", "center", "over");
    toastDiv.appendChild(divForToast);

    imgToast.src = "../global/icon/atencao.png";
    imgToast.alt = "Warning";
    imgToast.loading = "lazy";
    imgToast.draggable = false;
    imgToast.classList.add("imageToast");
    divForToast.appendChild(imgToast);

    divForToast2.classList.add("center", "over", "pToast");
    toastDiv.appendChild(divForToast2);

    pToast.classList.add("title", "textToast");
    divForToast2.appendChild(pToast);
  }

  verificaLinguagem() {
    if (this.lang === "eu") {
      this.textToast.innerHTML = eua.toastAlertDesenvolvi;
    } else if (this.lang === "es") {
      this.textToast.innerHTML = spain.toastAlertDesenvolvi;
    } else if (this.lang === "fr") {
      this.textToast.innerHTML = franca.toastAlertDesenvolvi;
    } else if (this.lang === "ch") {
      this.textToast.innerHTML = china.toastAlertDesenvolvi;
    } else {
      this.textToast.innerHTML = brasil.toastAlertDesenvolvi;
    }
  }

  openToast() {
    const toastNotification = new Audio();
    toastNotification.src = "../global/music/toastNotification.mp3";
    toastNotification.play();

    setTimeout(() => {
      this.toast.classList.add("toastOpen");

      setTimeout(() => {
        this.textToast.style.display = "flex";
        this.verificaLinguagem();
      }, 200);
    }, 200);

    setTimeout(() => {
      this.toast.style.animation = "closeToast 500ms";
      this.textToast.style.opacity = "0";

      setTimeout(() => {
        this.toast.classList.remove("toastOpen");
        this.toast.style.animation = "openToast 500ms";
        this.textToast.style.display = "none"; // limpa display depois de fechar
        this.textToast.style.opacity = "1"; // reseta opacidade
      }, 450);
    }, 5000);
  }
}
