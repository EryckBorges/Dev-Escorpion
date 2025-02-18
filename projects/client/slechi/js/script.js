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
