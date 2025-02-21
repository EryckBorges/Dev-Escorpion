const eua = {
    inicio: "Home",
    cursos: "Courses",
    jogos: "Games",
    portfolio: "Portfolio",
    contato: "Contact",
    sobre: "About",
    footerProject: 'Projects',
  use: 'Terms of Use',
  cookie: 'Cookie Policy',
  privacity: 'Privacy',
  slechiText: 'In this project, I developed card layouts and menus for Slechi ice cream shop, aiming to provide an attractive and intuitive visual experience for customers. The designs were created to clearly and neatly showcase all types of available products, highlighting each flavor in a practical and accessible way. Each card was designed to be visually appealing, making it easier for customers to choose and enhancing the overall menu navigation experience.',
}

const brasil = {
    inicio: "Ínicio",
    cursos: "Cursos",
    jogos: "Jogos",
    portfolio: "Portfólio",
    contato: "Contato",
    sobre: "Sobre",
    footerProject: 'Projetos',
    use: 'Termos de Uso',
    cookie: 'Politica de Cookies',
    privacity: 'Privacidade',
    slechiText: 'Nesse projeto, desenvolvi layouts de cards e cardápios para a sorveteria Slechi, com o objetivo de oferecer uma experiência visual atrativa e intuitiva para os clientes. Os designs foram pensados para apresentar de forma clara e organizada todos os tipos de produtos disponíveis, destacando cada sabor de maneira prática e acessível. Cada card foi projetado para ser visualmente agradável, facilitando a escolha do cliente e tornando o processo de navegação pelo cardápio mais simples e envolvente.',
}

const spain = {
    inicio: "Comenzar",
    cursos: "Cursos",
    jogos: "Juegos",
    portfolio: "Portafolio",
    contato: "Contacto",
    sobre: "En",
    footerProject: 'Proyectos',
  use: 'Términos de Uso',
  cookie: 'Política de Cookies',
  privacity: 'Privacidad',
  slechiText: 'En este proyecto, desarrollé diseños de tarjetas y menús para la heladería Slechi, con el objetivo de ofrecer una experiencia visual atractiva e intuitiva para los clientes. Los diseños fueron creados para mostrar de manera clara y organizada todos los tipos de productos disponibles, destacando cada sabor de forma práctica y accesible. Cada tarjeta fue diseñada para ser visualmente atractiva, facilitando la elección del cliente y mejorando la experiencia general de navegación por el menú.',
}

const franca = {
    inicio: "Commencer",
    cursos: "Cours",
    jogos: "Jeux",
    portfolio: "Portefeuille",
    contato: "Contact",
    sobre: "Sur",
    footerProject: 'Projets',
  use: 'Conditions d’utilisation',
  cookie: 'Politique de Cookies',
  privacity: 'Confidentialité',
  slechiText: "Dans ce projet, j'ai développé des mises en page de cartes et de menus pour la glacerie Slechi, dans le but d'offrir une expérience visuelle attrayante et intuitive aux clients. Les designs ont été créés pour présenter clairement et de manière organisée tous les types de produits disponibles, en mettant en avant chaque saveur de façon pratique et accessible. Chaque carte a été conçue pour être visuellement attrayante, facilitant le choix des clients et améliorant l'expérience globale de navigation dans le menu.",
}

const china = {
    inicio: "开始",
    cursos: "课程",
    jogos: "游戏",
    portfolio: "作品集",
    contato: "接触",
    sobre: "在",
    footerProject: '项目',
  use: '使用条款',
  cookie: 'Cookie 政策',
  privacity: '隐私政策',
  slechiText: '在这个项目中，我为 Slechi 冰淇淋店设计了卡片和菜单布局，旨在为顾客提供直观且吸引人的视觉体验。设计旨在清晰、有条理地展示所有可用产品类型，并以实用且易于访问的方式突出每种口味。每张卡片都经过精心设计，具有视觉吸引力，方便顾客选择，提升整体菜单浏览体验。',
}

const elementos = {
    inicio: document.querySelectorAll(".inicio"),
    cursos: document.querySelectorAll(".cursos"),
    jogos: document.querySelectorAll(".jogos"),
    portfolio: document.querySelectorAll(".portfolio"),
    contato: document.querySelectorAll(".contato"),
    sobre: document.querySelectorAll(".sobre"),
    footerProject: document.querySelector('.footerProject'),
    use: document.querySelector('.use'),
    cookie: document.querySelector('.cookie'),
    privacity: document.querySelector('.privacity'),
    slechiText: document.querySelector('.textProject p'),
}

const ingles = () => {
    elementos.inicio.forEach((inicioText) => {
      inicioText.innerHTML = eua.inicio;
    });
    elementos.cursos.forEach((cursosText) => {
      cursosText.innerHTML = eua.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
      jogosText.innerHTML = eua.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
      portfolioText.innerHTML = eua.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
      contatoText.innerHTML = eua.contato;
    });
    elementos.sobre.forEach((sobreText) => {
      sobreText.innerHTML = eua.sobre;
    });
    elementos.footerProject.innerHTML = eua.footerProject;
    elementos.use.innerHTML = eua.use;
    elementos.privacity.innerHTML = eua.privacity;
    elementos.cookie.innerHTML = eua.cookie;
    elementos.slechiText.innerHTML = eua.slechiText;
}

const portugues = () => {
  elementos.inicio.forEach((inicioText) => {
    inicioText.innerHTML = brasil.inicio;
  });
  elementos.cursos.forEach((cursosText) => {
    cursosText.innerHTML = brasil.cursos;
  });
  elementos.jogos.forEach((jogosText) => {
    jogosText.innerHTML = brasil.jogos;
  });
  elementos.portfolio.forEach((portfolioText) => {
    portfolioText.innerHTML = brasil.portfolio;
  });
  elementos.contato.forEach((contatoText) => {
    contatoText.innerHTML = brasil.contato;
  });
  elementos.sobre.forEach((sobreText) => {
    sobreText.innerHTML = brasil.sobre;
  });
  elementos.footerProject.innerHTML = brasil.footerProject;
  elementos.use.innerHTML = brasil.use;
  elementos.privacity.innerHTML = brasil.privacity;
  elementos.cookie.innerHTML = brasil.cookie;
  elementos.slechiText.innerHTML = brasil.slechiText;
}

const espanha = () => {
    elementos.inicio.forEach((inicioText) => {
      inicioText.innerHTML = spain.inicio;
    });
    elementos.cursos.forEach((cursosText) => {
      cursosText.innerHTML = spain.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
      jogosText.innerHTML = spain.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
      portfolioText.innerHTML = spain.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
      contatoText.innerHTML = spain.contato;
    });
    elementos.sobre.forEach((sobreText) => {
      sobreText.innerHTML = spain.sobre;
    });
    elementos.footerProject.innerHTML = spain.footerProject;
    elementos.use.innerHTML = spain.use;
    elementos.privacity.innerHTML = spain.privacity;
    elementos.cookie.innerHTML = spain.cookie;
    elementos.slechiText.innerHTML = spain.slechiText;
}

const frances = () => {
    elementos.inicio.forEach((inicioText) => {
      inicioText.innerHTML = franca.inicio;
    });
    elementos.cursos.forEach((cursosText) => {
      cursosText.innerHTML = franca.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
      jogosText.innerHTML = franca.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
      portfolioText.innerHTML = franca.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
      contatoText.innerHTML = franca.contato;
    });
    elementos.sobre.forEach((sobreText) => {
      sobreText.innerHTML = franca.sobre;
    });
    elementos.footerProject.innerHTML = franca.footerProject;
    elementos.use.innerHTML = franca.use;
    elementos.privacity.innerHTML = franca.privacity;
    elementos.cookie.innerHTML = franca.cookie;
    elementos.slechiText.innerHTML = franca.slechiText;
}

const chines = () => {
    elementos.inicio.forEach((inicioText) => {
      inicioText.innerHTML = china.inicio;
    });
    elementos.cursos.forEach((cursosText) => {
      cursosText.innerHTML = china.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
      jogosText.innerHTML = china.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
      portfolioText.innerHTML = china.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
      contatoText.innerHTML = china.contato;
    });
    elementos.sobre.forEach((sobreText) => {
      sobreText.innerHTML = china.sobre;
    });
    elementos.footerProject.innerHTML = china.footerProject;
    elementos.use.innerHTML = china.use;
    elementos.privacity.innerHTML = china.privacity;
    elementos.cookie.innerHTML = china.cookie;
    elementos.slechiText.innerHTML = china.slechiText;
}


let langSelecionada = document.querySelector(".idiomaSelecionada");
let flagSelecionada = document.querySelector(".flagsSelecionada img");

const langPage = () => {
    let langSelecionada = document.querySelector(".idiomaSelecionada");
    let flagSelecionada = document.querySelector(".flagsSelecionada img");
    
    // Obtém a linguagem salva no localStorage
    const lang = localStorage.getItem("lang");
  
    if (lang === "eu") {
      langSelecionada.innerHTML = "EN";
      flagSelecionada.src = "../../../global/icon/eua.png";
      ingles();
    } else if (lang === "es") {
      langSelecionada.innerHTML = "ES";
      flagSelecionada.src = "../../../global/icon/spain.png";
      espanha();
    } else if (lang === "fr") {
      langSelecionada.innerHTML = "FR";
      flagSelecionada.src = "../../../global/icon/franca.png";
      frances();
    } else if (lang === "ch") {
      langSelecionada.innerHTML = "ZH";
      flagSelecionada.src = "../../../global/icon/china.png";
      chines();
    } else {
      // Caso nenhuma linguagem esteja no localStorage, define como 'br'
      localStorage.setItem("lang", "br");
      langSelecionada.innerHTML = "PT";
      flagSelecionada.src = "../../../global/icon/brasil.png";
      portugues();
    }
  };
  
  // Executa ao carregar a página
  langPage();

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".images");
    if (!slider) {
        console.error("Elemento .images não encontrado!");
        return;
    }

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 5;
        slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener("touchstart", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchend", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
});

const sabores = document.querySelector('.sabores');

const grantop = document.querySelector('.grantop');
const sorveteGrantop = document.querySelector('.sorveteGrantop');
const leite = document.querySelector('.leite');
const morangoBottom = document.querySelector('.morangoBottom');
const morangoTop = document.querySelector('.morangoTop');
const morangoBack = document.querySelector('.morangoBack');
const morangoFront = document.querySelector('.morangoFront');

const ituzinho = document.querySelector('.ituzinho');
const sorveteItuzinho = document.querySelector('.sorveteItuzinho');
const morangoBottom2 = document.querySelector('.morangoBottom2');
const morangoTop2 = document.querySelector('.morangoTop2');
const morangoBack2 = document.querySelector('.morangoBack2');
const morangoFront2 = document.querySelector('.morangoFront2');

const acai = document.querySelector('.acai');
const acai1 = document.querySelector('.acai1');
const acai2 = document.querySelector('.acai2');
const acai3 = document.querySelector('.acai3');
const acaiCaindo = document.querySelector('.acaiCaindo');

const beijinho = document.querySelector('.beijinho');
const sorveteB = document.querySelector('.sorveteB');
const beijinhoBottom = document.querySelector('.beijinhoBottom');
const beijinhoTop = document.querySelector('.beijinhoTop');
const beijinhoFront = document.querySelector('.beijinhoFront');
const beijinhoBack = document.querySelector('.beijinhoBack');
const leite2 = document.querySelector('.leite2');

const animateHeader = () => {
  setTimeout(() => {
    morangoBottom.style.animation = "fadeOutDown 0.5s";
    morangoFront.style.animation = "fadeOutDown 0.5s";
    morangoBack.style.animation = "fadeOutLeft 0.5s";
    morangoTop.style.animation = "fadeOutUp 0.5s";
    leite.style.animation = "zoomOut 1s";
    sorveteGrantop.style.animation = "fadeOutDown 0.5s";
    setTimeout(() => {
      grantop.classList.add('opacity')
   
        grantop.style.display = 'none';
      sabores.style.background = 'var(--linearItuzinho)';
      ituzinho.style.display = 'flex';
      
      setTimeout(() => {
        
        sorveteItuzinho.style.animation = "fadeOutDownBig 0.5s";
        morangoBottom2 .style.animation = "fadeOutDown 0.5s";
        morangoFront2 .style.animation = "fadeOutDown 0.5s";
        morangoBack2 .style.animation = "fadeOutLeft 0.5s";
        morangoTop2 .style.animation = "fadeOutUp 0.5s";
        setTimeout(() => {
          
          ituzinho.style.display = 'none';
          sabores.style.background = 'var(--linearAcai)';
          acai.style.display = 'flex';
          setTimeout(() => {
            acaiCaindo.style.animation = "fadeOutDownBig 0.5s";
            acai1.style.animation = "fadeOutDownBig 0.5s";
            acai2.style.animation = "fadeOutDownBig 0.5s";
            acai3.style.animation = "fadeOutDownBig 0.5s";
            setTimeout(() => {
              acai.style.display = 'none';
              sabores.style.background = 'var(--linearBeijinho)';
              beijinho.style.display = 'flex';
              setTimeout(() => {
                beijinhoBottom.style.animation = "fadeOutDownBig 0.5s";
                leite2.style.animation = "zoomOut 0.5s";
                sorveteB.style.animation = "fadeOutDownBig 0.5s";
                beijinhoFront.style.animation = "fadeOutDownBig 0.5s";
                beijinhoBack.style.animation = "fadeOutDownBig 0.5s";
                beijinhoTop.style.animation = "fadeOutDownBig 0.5s";
                setTimeout(() => {
                  beijinho.style.display = 'none';
                  sabores.style.background = 'var(--linearMorango)';
                  grantop.style.display = 'flex';
                  animateHeader();
                }, 500);
              }, 5000);
            }, 500);
          }, 5000);
        }, 500);
      }, 5000);
    }, 500);
  }, 5000);
}

animateHeader();