const eua = {
    inicio: "Home",
    cursos: "Courses",
    jogos: "Games",
    portfolio: "Portfolio",
    contato: "Contact",
    sobre: "About",
    textDio: "Find here all the courses and bootcamps I have completed through Dio.me",
    backButton: '<span class="material-symbols-outlined">arrow_left_alt</span>Back',
    titleGitSantander: 'Dio.me Projects | Santander Bootcamp',
    projectText: 'Repository of the lab "Contributing to an Open Source Project on GitHub" by Digital Innovation One.',
    projectTitle: 'dio-lab-open-source',
    projectsButton: 'View Repository',
    viewProjects: 'View Projects'
};

const brasil = {
    inicio: "Ínicio",
    cursos: "Cursos",
    jogos: "Jogos",
    portfolio: "Portfólio",
    contato: "Contato",
    sobre: "Sobre",
    textDio: "Encontre aqui todos os cursos e bootcamps que já fiz através da Dio.me",
    backButton: '<span class="material-symbols-outlined">arrow_left_alt</span>Voltar',
    titleGitSantander: 'Projetos do Dio.me | Bootcamp Santander',
    projectText: 'Repositório do lab "Contribuindo em um Projeto Open Source no Github" da Digital Innovation One.',
    projectTitle: 'dio-lab-open-source',
    projectsButton: 'Ver Repositório',
    viewProjects: 'Ver Projetos'
};

const spain = {
    inicio: "Comenzar",
    cursos: "Cursos",
    jogos: "Juegos",
    portfolio: "Portafolio",
    contato: "Contacto",
    sobre: "En",
    textDio: "Encuentra aquí todos los cursos y bootcamps que he realizado a través de Dio.me",
    backButton: '<span class="material-symbols-outlined">arrow_left_alt</span>Volver',
    titleGitSantander: 'Proyectos de Dio.me | Bootcamp Santander',
    projectText: 'Repositorio del laboratorio "Contribuyendo a un Proyecto Open Source en GitHub" de Digital Innovation One.',
    projectTitle: 'dio-lab-open-source',
    projectsButton: 'Ver Repositorio',
    viewProjects: 'Ver Proyectos'
};

const franca = {
    inicio: "Commencer",
    cursos: "Cours",
    jogos: "Jeux",
    portfolio: "Portefeuille",
    contato: "Contact",
    sobre: "Sur",
    textDio: "Trouvez ici tous les cours et bootcamps que j’ai suivis via Dio.me",
    backButton: '<span class="material-symbols-outlined">arrow_left_alt</span>Retour',
    titleGitSantander: 'Projets de Dio.me | Bootcamp Santander',
    projectText: 'Dépôt du laboratoire "Contribuer à un projet Open Source sur GitHub" de Digital Innovation One.',
    projectTitle: 'dio-lab-open-source',
    projectsButton: 'Voir le Répertoire',
    viewProjects: 'Voir les Projets'
};

const china = {
    inicio: "开始",
    cursos: "课程",
    jogos: "游戏",
    portfolio: "作品集",
    contato: "接触",
    sobre: "在",
    textDio: "在这里查看我通过 Dio.me 完成的所有课程和训练营",
    backButton: '<span class="material-symbols-outlined">arrow_left_alt</span>返回',
    titleGitSantander: 'Dio.me 项目 | Santander 训练营',
    projectText: 'Digital Innovation One 的实验项目 "在 GitHub 上参与开源项目" 的仓库。',
    projectTitle: 'dio-lab-open-source',
    projectsButton: '查看存储库',
    viewProjects: '查看项目'
};

const elementos = {
    inicio: document.querySelectorAll(".inicio"),
    cursos: document.querySelectorAll(".cursos"),
    jogos: document.querySelectorAll(".jogos"),
    portfolio: document.querySelectorAll(".portfolio"),
    contato: document.querySelectorAll(".contato"),
    sobre: document.querySelectorAll(".sobre"),
    textDio: document.querySelector('.logos p'),
    backContent: document.querySelector('.backContent'),
    backProjects: document.querySelector('.backProjects'),
    titleGit: document.querySelector('.titleGit h1'),
    projectText: document.querySelector('.project p'),
    projectTitle: document.querySelector('.project h1'),
    contentProjectButton: document.querySelector('.contentProject button a'),
    viewProjects: document.querySelector('.viewProject'),
};

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
    elementos.textDio.innerHTML = eua.textDio;
    elementos.backContent.innerHTML = eua.backButton;
    elementos.backProjects.innerHTML = eua.backButton;
    elementos.titleGit.innerHTML = eua.titleGitSantander;
    elementos.projectText.innerHTML = eua.projectText;
    elementos.projectTitle.innerHTML = eua.projectTitle;
    elementos.contentProjectButton.innerHTML = eua.projectsButton;
    elementos.viewProjects.innerHTML = eua.viewProjects;
};

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
    elementos.textDio.innerHTML = brasil.textDio;
    elementos.backContent.innerHTML = brasil.backButton;
    elementos.backProjects.innerHTML = brasil.backButton;
    elementos.titleGit.innerHTML = brasil.titleGitSantander;
    elementos.projectText.innerHTML = brasil.projectText;
    elementos.projectTitle.innerHTML = brasil.projectTitle;
    elementos.contentProjectButton.innerHTML = brasil.projectsButton;
    elementos.viewProjects.innerHTML = eua.viewProjects;
};

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
    elementos.textDio.innerHTML = spain.textDio;
    elementos.backContent.innerHTML = spain.backButton;
    elementos.backProjects.innerHTML = spain.backButton;
    elementos.titleGit.innerHTML = spain.titleGitSantander;
    elementos.projectText.innerHTML = spain.projectText;
    elementos.projectTitle.innerHTML = spain.projectTitle;
    elementos.contentProjectButton.innerHTML = spain.projectsButton;
    elementos.viewProjects.innerHTML = spain.viewProjects;
};

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
    elementos.textDio.innerHTML = franca.textDio;
    elementos.backContent.innerHTML = franca.backButton;
    elementos.backProjects.innerHTML = franca.backButton;
    elementos.titleGit.innerHTML = franca.titleGitSantander;
    elementos.projectText.innerHTML = franca.projectText;
    elementos.projectTitle.innerHTML = franca.projectTitle;
    elementos.contentProjectButton.innerHTML = franca.projectsButton;
    elementos.viewProjects.innerHTML = franca.viewProjects;
};

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
    elementos.textDio.innerHTML = china.textDio;
    elementos.backContent.innerHTML = china.backButton;
    elementos.backProjects.innerHTML = china.backButton;
    elementos.titleGit.innerHTML = china.titleGitSantander;
    elementos.projectText.innerHTML = china.projectText;
    elementos.projectTitle.innerHTML = china.projectTitle;
    elementos.contentProjectButton.innerHTML = china.projectsButton;
    elementos.viewProjects.innerHTML = china.viewProjects;
};

const langPage = () => {
  let langSelecionada = document.querySelector(".idiomaSelecionada");
  let flagSelecionada = document.querySelector(".flagsSelecionada img");
  let titleButtonTranslate = document.querySelectorAll(".btnTraduz");
  
  // Obtém a linguagem salva no localStorage
  const lang = localStorage.getItem("lang");

  if (lang === "eu") {
    langSelecionada.innerHTML = "EN";
    flagSelecionada.src = "../../../global/icon/eua.png";
    titleButtonTranslate.forEach((btnTranslate) => {
      btnTranslate.setAttribute("title", "Translate to English");
    });
    ingles();
  } else if (lang === "es") {
    langSelecionada.innerHTML = "ES";
    flagSelecionada.src = "../../../global/icon/spain.png";
    titleButtonTranslate.forEach((btnTranslate) => {
      btnTranslate.setAttribute("title", "Traducir al español");
    });
    espanha();
  } else if (lang === "fr") {
    langSelecionada.innerHTML = "FR";
    flagSelecionada.src = "../../../global/icon/franca.png";
    titleButtonTranslate.forEach((btnTranslate) => {
      btnTranslate.setAttribute("title", "Traduire en français");
    });
    frances();
  } else if (lang === "ch") {
    langSelecionada.innerHTML = "ZH";
    flagSelecionada.src = "../../../global/icon/china.png";
    titleButtonTranslate.forEach((btnTranslate) => {
      btnTranslate.setAttribute("title", "翻译成中文");
    });
    chines();
  } else {
    // Caso nenhuma linguagem esteja no localStorage, define como 'br'
    localStorage.setItem("lang", "br");
    langSelecionada.innerHTML = "PT";
    flagSelecionada.src = "../../../global/icon/brasil.png";
    titleButtonTranslate.forEach((btnTranslate) => {
      btnTranslate.setAttribute("title", "Traduzir para o Português");
    });
    portugues();
  }
};

// Executa ao carregar a página
langPage();

// Pegando os elementos
let body = document.querySelector('body');
const santander = document.querySelector('.santander');
let dio = document.querySelector('.logos img');
let courses = document.querySelector('.courses');

//Elementos para página de certificados
let certificados = document.querySelector('.certificados');
let allCertificados = document.querySelector('.allCertificados');
const backCertificados = document.querySelector('.backCertificados button');
const nextCertificados = document.querySelector('.nextCertificados button');
let certificado = document.querySelector('.certificado');
let allLogos = document.querySelector('.allLogos');
let logos = document.querySelector('.logos');
let certifica = document.querySelectorAll('.certifica img');

//Elementos projects
const projects = document.querySelector('.projects');
let allprojects = document.querySelector('.allprojects');
let titleGit = document.querySelector('.titleGit');

//Começa a verificar qual é o scroll que já foi feito
let quantScroll = 0;

//Abre a parte com certificados e conteúdo do curso do santander

santander.addEventListener('click', () => {
    body.classList.add('disabled-pointers')
    elementos.textDio.setAttribute('style', `animation:fadeOutLeft;animation-duration:1s;`);
    dio.setAttribute('style', `animation:fadeOutUp;animation-duration:1s;`);
    courses.setAttribute('style', `animation:fadeOut;animation-duration:1s;`);
    setTimeout(() => {
        quantScroll = 1
        certificados.classList.remove('hidden');
        allCertificados.classList.remove('hidden');
        certificados.style.opacity = '1';
        allCertificados.style.opacity = '1';
        courses.classList.add('hidden');
        logos.classList.add('hidden');
        setTimeout(() => {
            body.classList.remove('disabled-pointers')
        }, 1500);
    }, 200)
});

// Volta para a tela inicial

elementos.backContent.addEventListener('click', () =>  {
    quantScroll = 0
    body.classList.add('disabled-pointers')
    elementos.backContent.setAttribute('style', `animation:fadeOut;animation-duration:1s;`);
    backCertificados.setAttribute('style', `animation:fadeOut;animation-duration:1s;`);
    nextCertificados.setAttribute('style', `animation:fadeOut;animation-duration:1s;`);
    certificado.setAttribute('style', `animation:backOutUp;animation-duration:1s;`);
    allLogos.setAttribute('style', `animation:fadeOutLeft;animation-duration:1s;`);
    certifica.forEach(element => {
        element.setAttribute('style', `animation:fadeOutDown;animation-duration:1s;`);
    });
    setTimeout(() => {
        allCertificados.classList.add('hidden');
        certificados.classList.add('hidden');
        courses.setAttribute('style', `animation:fadeIn;animation-duration:1s;`);
        courses.classList.remove('hidden');
        logos.classList.remove('hidden');
        elementos.textDio.setAttribute('style', `animation:fadeInUpBig;animation-duration:1s;`);
        dio.setAttribute('style', `animation:bounceInDown;animation-duration:1s;`);
        setTimeout(() => {
            body.classList.remove('disabled-pointers')
        }, 1500);
    }, 600)
});

// Evento de rolagem que abre o projects

window.addEventListener('wheel', () =>  {   
    if (quantScroll == 1) {
        body.classList.add('disabled-pointers')
        elementos.backContent.setAttribute('style', `animation:fadeOut;animation-duration:1s;`);
        backCertificados.setAttribute('style', `animation:fadeOut;animation-duration:1s;`);
        nextCertificados.setAttribute('style', `animation:fadeOut;animation-duration:1s;`);
        certificado.setAttribute('style', `animation:backOutUp;animation-duration:1s;`);
        allLogos.setAttribute('style', `animation:fadeOutLeft;animation-duration:1s;`);
        certifica.forEach(element => {
            element.setAttribute('style', `animation:fadeOutDown;animation-duration:1s;`);
        });
        setTimeout(() => {
        allCertificados.classList.add('hidden');
        certificados.classList.add('hidden');
        
        }, 600);
        projects.classList.remove('hidden')
        setTimeout(() => {
            body.classList.remove('disabled-pointers')
        }, 1500);
    }
})

elementos.viewProjects.addEventListener('click', () =>  { 
    if (quantScroll == 1) {
        body.classList.add('disabled-pointers')
        elementos.backContent.setAttribute('style', `animation:fadeOut;animation-duration:1s;`);
        backCertificados.setAttribute('style', `animation:fadeOut;animation-duration:1s;`);
        nextCertificados.setAttribute('style', `animation:fadeOut;animation-duration:1s;`);
        certificado.setAttribute('style', `animation:backOutUp;animation-duration:1s;`);
        allLogos.setAttribute('style', `animation:fadeOutLeft;animation-duration:1s;`);
        certifica.forEach(element => {
            element.setAttribute('style', `animation:fadeOutDown;animation-duration:1s;`);
        });
        setTimeout(() => {
        allCertificados.classList.add('hidden');
        certificados.classList.add('hidden');
        
        }, 600);
        projects.classList.remove('hidden')
        setTimeout(() => {
            body.classList.remove('disabled-pointers')
        }, 1500);
    }
})


// Volta para a página de certificados

elementos.backProjects.addEventListener('click', () => {
    body.classList.add('disabled-pointers')
    allprojects.setAttribute('style', `animation:fadeOutRight;animation-duration:1s;`);
    titleGit.setAttribute('style', `animation:fadeOutLeft;animation-duration:1s;`);
    elementos.backProjects.setAttribute('style', `animation:fadeOut;animation-duration:1s;`);
    setTimeout(() => {
        projects.classList.add('hidden');
        certificados.classList.remove('hidden');
        allCertificados.classList.remove('hidden');
        setTimeout(() => {
            body.classList.remove('disabled-pointers')
        }, 1500);
    }, 600)
})

// Certificações

let certificado_santander = [
    'Santander-Certificado-01.png', 'Santander-Certificado-02.png', 'Santander-Certificado-03.png', 
    'Santander-Certificado-04.png', 'Santander-Certificado-05.png', 'Santander-Certificado-06.png', 
    'Santander-Certificado-07.png', 'Santander-Certificado-08.png', 'Santander-Certificado-09.png',  
    'Santander-Certificado-10.png',  
]

let certificado_img = document.querySelector('.certificado img');
let quantCertificado = 0;

let certificado_01 = document.querySelector('.certificado-01');
let certificado_02 = document.querySelector('.certificado-02');
let certificado_03 = document.querySelector('.certificado-03');
let certificado_04 = document.querySelector('.certificado-04');

nextCertificados.addEventListener('click', () => {
    quantCertificado = (quantCertificado + 1) % certificado_santander.length;

    let total = certificado_santander.length;

    // Atualiza os da barra inferior com rotação
    certificado_01.src = `./image/${certificado_santander[quantCertificado % total]}`
    certificado_02.src = `./image/${certificado_santander[(quantCertificado + 1) % total]}`
    certificado_03.src = `./image/${certificado_santander[(quantCertificado + 2) % total]}`
    certificado_04.src = `./image/${certificado_santander[(quantCertificado + 3) % total]}`

    // Atualiza o principal
    certificado_img.src = `./image/${certificado_santander[quantCertificado]}`
});

backCertificados.addEventListener('click', () => {
    let total = certificado_santander.length;

    // Garante valor positivo com somatório do total
    quantCertificado = (quantCertificado - 1 + total) % total;

    // Atualiza os da barra inferior com rotação reversa
    certificado_01.src = `./image/${certificado_santander[quantCertificado % total]}`
    certificado_02.src = `./image/${certificado_santander[(quantCertificado + 1) % total]}`
    certificado_03.src = `./image/${certificado_santander[(quantCertificado + 2) % total]}`
    certificado_04.src = `./image/${certificado_santander[(quantCertificado + 3) % total]}`

    // Atualiza o principal
    certificado_img.src = `./image/${certificado_santander[quantCertificado]}`
    // Atualiza o principal
    certificado_img.src = `./image/${certificado_santander[quantCertificado]}`
    if (quantCertificado < 0) {
        quantCertificado = 0
        certificado_img.src = `./image/${certificado_santander[quantCertificado]}`;
    }
});
