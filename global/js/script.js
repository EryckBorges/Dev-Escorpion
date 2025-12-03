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

  ignore() {
    
  }
}

// Caixa para visualização de imagens

export class MostrarImagens {
  constructor(imgs) {
    this.imgs = imgs;
    this.contElement = 0;
    localStorage.setItem('contElement', this.contElement);
  }

  // Cria o elemento usado para exibir as imagens e afins
  showNewBox() {
    let dados = JSON.parse(localStorage.getItem('jsonImages')); 
    let contElement = localStorage.getItem('contElement');
    
    const body = document.querySelector('body');
    const section = document.createElement('section');
    section.classList.add('center', 'over', 'boxImage', 'closedBox');

    const divContent = document.createElement('div');
    divContent.classList.add('center', 'over', 'divContent');

    const divContentImagens = document.createElement('div');
    const divContentDesc = document.createElement('div');
    divContentImagens.classList.add('center', 'over', 'divContentImagens');
    divContentDesc.classList.add('center', 'over', 'divContentDesc');

    const divLogo = document.createElement('div');
    const divDesc = document.createElement('div');
    divLogo.classList.add('center', 'over', 'divLogo');
    divDesc.classList.add('center', 'over', 'divDesc');

    const imgLogo = document.createElement('img');
    imgLogo.src = dados.logo;
    imgLogo.classList.add('center', 'over', 'imgLogo');
    imgLogo.setAttribute('draggable', 'false');
    
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.classList.add('over', 'title', 'titleDesc');
    p.classList.add('over', 'text', 'textDesc');
    h1.innerHTML = dados.title;
    p.innerHTML = dados.text[contElement];

    const divImage = document.createElement('div');
    const imgMain = document.createElement('img');
    divImage.classList.add('center', 'over', 'divImg');
    imgMain.src = dados.imagens[contElement];
    imgMain.classList.add('over', 'center', 'imgMain');

    const divButtons = document.createElement('div');
    divButtons.classList.add('center', 'over', 'title', 'divButtons');

    const nextButtonImage = document.createElement('button');
    const backButtonImage = document.createElement('button');
    backButtonImage.classList.add('over', 'center', 'backButtonImage');
    nextButtonImage.classList.add('over', 'center', 'nextButtonImage');
    nextButtonImage.innerHTML = '<span class="material-symbols-outlined">arrow_forward</span>';
    backButtonImage.innerHTML = '<span class="material-symbols-outlined">arrow_back</span>';

    const closedImage = document.createElement('button');
    closedImage.classList.add('over', 'center', 'closedImage');
    closedImage.innerHTML = '<span class="material-symbols-outlined">close</span>';

    body.appendChild(section);
    section.appendChild(divContent);
    section.appendChild(closedImage);
    divContent.appendChild(divContentImagens);
    divContent.appendChild(divContentDesc);
    divContentDesc.appendChild(divLogo);
    divContentDesc.appendChild(divDesc);
    divLogo.appendChild(imgLogo);
    divDesc.appendChild(h1);
    divDesc.appendChild(p);
    divContentImagens.appendChild(divImage);
    divContentImagens.appendChild(divButtons);
    divImage.appendChild(imgMain);
    divButtons.appendChild(nextButtonImage);
    divButtons.appendChild(backButtonImage);
  }

  // Fecha e exclui os elementos criados no showNewBox
  closedBox() {
    const closeImage = document.querySelector('.closedImage');
    const boxImages = document.querySelector('.boxImage');
    closeImage.addEventListener('click', () => {
      localStorage.setItem('jsonImages', '');
      boxImages.style.animation = 'fadeOutBox 0.5s';
      setTimeout(() => {
        this.contElement = 0;
        localStorage.setItem('contElement', this.contElement);
        boxImages.classList.add('closedBox');
        boxImages.remove();
      }, 500);
    });
  }

  // Cria e Abre a caixa para exibição de imagens 
  openBox() {
    this.showNewBox(this.contElement);
    const boxImages = document.querySelector('.boxImage');  
    boxImages.style.animation = 'fadeInBox 0.5s';
    boxImages.classList.remove('closedBox');
  }

  // Passa para o próximo elemento
  nextElement() {
    const nextButtonImage = document.querySelector('.nextButtonImage');
    const imgMain = document.querySelector('.imgMain');
    const textDesc = document.querySelector('.textDesc');

    let dados = JSON.parse(localStorage.getItem('jsonImages')); 
    nextButtonImage.addEventListener('click', () => { 
      this.contElement++
      if(dados.imagens.length > this.contElement) {
        localStorage.setItem('contElement', this.contElement);
        imgMain.src = dados.imagens[this.contElement];
        textDesc.innerHTML = dados.text[this.contElement];
      }else if(dados.imagens.length == this.contElement) {
        this.contElement = 0;
        localStorage.setItem('contElement', this.contElement);
        imgMain.src = dados.imagens[this.contElement];
        textDesc.innerHTML = dados.text[this.contElement];
      }
    })
  }

  // Passa para o próximo elemento
  backElement() {
    const backButtonImage = document.querySelector('.backButtonImage');
    const imgMain = document.querySelector('.imgMain');
    const textDesc = document.querySelector('.textDesc');

    let dados = JSON.parse(localStorage.getItem('jsonImages')); 
    backButtonImage.addEventListener('click', () => { 
      if(this.contElement == 0) {
        this.contElement = 0;
        localStorage.setItem('contElement', this.contElement);
        imgMain.src = dados.imagens[this.contElement];
        textDesc.innerHTML = dados.text[this.contElement];
      } else if(this.contElement <= dados.imagens.length) {
        this.contElement--
        console.log("oi");
        
        localStorage.setItem('contElement', this.contElement);
        imgMain.src = dados.imagens[this.contElement];
        textDesc.innerHTML = dados.text[this.contElement];
      }
    })
  }
}