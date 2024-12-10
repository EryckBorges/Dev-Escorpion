
//Linguagens

const eua = {
    inicio: 'Home',
    cursos: 'Courses',
    jogos: 'Games',
    portfolio: 'Portfolio',
    contato: 'Contact',
    sobre: 'About',
    sobreMim: 'About Me',
    contMim: 'Hello, my name is Éryck Borges da Silva Dionizio, I am Brazilian and completed high school and a degree in IT at UNESP. I have a huge passion for programming and love exploring new technologies and creative solutions. I am always looking to improve my knowledge and I intend to continue my studies at FIAP, focusing on my professional development. Thank you for visiting my portfolio, it was a pleasure meeting you! 😊',
    meusProjetos: 'My Projects and Services',
    visualizar: 'View',
    ferramentas: 'Tools and Technologies I Use',
    tecnologias: 'Tools and Technologies in Learning and Improvement',
    certificado: 'Certificates and Achievements',
    avaliacaoTitle: 'Professional Feedback and Reviews',
};

const brasil = {
    inicio: 'Ínicio',
    cursos: 'Cursos',
    jogos: 'Jogos',
    portfolio: 'Portfolio',
    contato: 'Contato',
    sobre: 'Sobre',
    sobreMim: 'Sobre Mim',
    contMim: 'Olá, meu nome é Éryck Borges da Silva Dionizio, sou brasileiro e concluí o ensino médio e o técnico em Informática pela UNESP. Tenho uma paixão enorme por programação e amo explorar novas tecnologias e soluções criativas. Estou sempre em busca de aprimorar meus conhecimentos e pretendo continuar meus estudos na FIAP, focando no meu desenvolvimento profissional. Obrigado por visitar meu portfólio, foi um prazer lhe conhecer! 😊',
    meusProjetos: 'Meus Projetos e Serviços',
    visualizar: 'Visualizar',
    ferramentas: 'Ferramentas e Tecnologias que Utilizo',
    tecnologias: 'Ferramentas e Tecnologias em Aprendizado e Aprimoramento',
    certificado: 'Certificados e Conquistas',
    avaliacaoTitle: 'Feedbacks e Avaliações Profissionais',
};

const spain = {
    inicio: 'Comenzar',
    cursos: 'Cursos',
    jogos: 'Juegos',
    portfolio: 'Cartera',
    contato: 'Contacto',
    sobre: 'En',
    sobreMim: 'Acerca de Mí',
    contMim: 'Hola, mi nombre es Éryck Borges da Silva Dionizio, soy brasileño y completé la secundaria y la licenciatura en informática por la UNESP. Tengo una gran pasión por la programación y me encanta explorar nuevas tecnologías y soluciones creativas. Siempre estoy buscando mejorar mis conocimientos y pretendo continuar mis estudios en la FIAP, enfocándome en mi desarrollo profesional. Gracias por visitar mi portafolio, ¡fue un placer conocerte! 😊',
    meusProjetos: 'Mis Proyectos y Servicios',
    visualizar: 'Vista',
    ferramentas: 'Herramientas y Tecnologías que uso',
    tecnologias: 'Herramientas y Tecnologías en el Aprendizaje y la Mejora',
    certificado: 'Certificados y Logros',
    avaliacaoTitle: 'Comentarios y Reseñas Profesionales',
};

const franca = {
    inicio: 'Commencer',
    cursos: 'Cours',
    jogos: 'Jeux',
    portfolio: 'Portefeuille',
    contato: 'Contact',
    sobre: 'Sur',
    sobreMim: 'Sur Moi',
    contMim: "Bonjour, je m'appelle Éryck Borges da Silva Dionizio, je suis brésilien et j'ai terminé mes études secondaires et un diplôme en informatique à l'UNESP. J'ai une grande passion pour la programmation et j'aime explorer les nouvelles technologies et les solutions créatives. Je cherche toujours à améliorer mes connaissances et je compte poursuivre mes études à la FIAP en me concentrant sur mon évolution professionnelle. Merci d'avoir visité mon portfolio, ce fut un plaisir de vous rencontrer ! 😊",
    meusProjetos: 'Mes Projets et Services',
    visualizar: 'Voir',
    ferramentas: "Outils et Technologies que j'utilise",
    tecnologias: "Outils et Technologies d'apprentissage et d'amélioration",
    certificado: 'Certificats et Réalisations',
    avaliacaoTitle: 'Commentaires et Avis Professionnels',
};

const china = {
    inicio: '开始',
    cursos: '课程',
    jogos: '游戏',
    portfolio: '文件夹',
    contato: '接触',
    sobre: '在',
    sobreMim: '关于我',
    contMim: '您好，我叫 Éryck Borges da Silva Dionizio，我是巴西人，完成了高中学业，并在 UNESP 获得了 IT 学位。我对编程充满热情，喜欢探索新技术和创造性的解决方案。我一直在寻求提高我的知识，我打算继续在 FIAP 学习，专注于我的专业发展。感谢您访问我的作品集，很高兴认识您！ 😊',
    meusProjetos: '我的项目和服务',
    visualizar: '看法',
    ferramentas: '我使用的工具和技术',
    tecnologias: '学习和改进的工具和技术',
    certificado: '证书和成就',
    avaliacaoTitle: '专业反馈和评论',
};

const elementos = {
    inicio: document.querySelector('.inicio'),
    cursos: document.querySelector('.cursos'),
    jogos: document.querySelector('.jogos'),
    portfolio: document.querySelector('.portfolio'),
    contato: document.querySelector('.contato'),
    sobre: document.querySelector('.sobre'),
    sobreMim: document.querySelector('.cont h1'),
    contMim: document.querySelector('.cont p'),
    meusProjetos: document.querySelector('.titleMyProject'),
    visualizar: document.querySelectorAll('.project button a'),
    ferramentas: document.querySelector('.ferramentas h1'),
    tecnologias: document.querySelector('.estudos h1'),
    certificado: document.querySelector('.certificados h1'),
    avaliacaoTitle: document.querySelector('.avaliacao h1'),
};

//Função que modifica a linguagem

const ingles = () => {
    elementos.inicio.innerHTML = eua.inicio;
    elementos.cursos.innerHTML = eua.cursos;
    elementos.jogos.innerHTML = eua.jogos;
    elementos.portfolio.innerHTML = eua.portfolio;
    elementos.contato.innerHTML = eua.contato;
    elementos.sobre.innerHTML = eua.sobre;
    elementos.sobreMim.innerHTML = eua.sobreMim;
    elementos.contMim.innerHTML = eua.contMim;
    elementos.meusProjetos.innerHTML = eua.meusProjetos;
    elementos.visualizar.forEach((button) => {
        button.innerHTML = eua.visualizar;
    });
    elementos.ferramentas.innerHTML = eua.ferramentas;
    elementos.tecnologias.innerHTML = eua.tecnologias;
    elementos.certificado.innerHTML = eua.certificado;
    elementos.avaliacaoTitle.innerHTML = eua.avaliacaoTitle;
}

const portugues = () => {
    elementos.inicio.innerHTML = brasil.inicio;
    elementos.cursos.innerHTML = brasil.cursos;
    elementos.jogos.innerHTML = brasil.jogos;
    elementos.portfolio.innerHTML = brasil.portfolio;
    elementos.contato.innerHTML = brasil.contato;
    elementos.sobre.innerHTML = brasil.sobre;
    elementos.sobreMim.innerHTML = brasil.sobreMim;
    elementos.contMim.innerHTML = brasil.contMim;
    elementos.meusProjetos.innerHTML = brasil.meusProjetos;
    elementos.visualizar.innerHTML = brasil.visualizar;
    elementos.visualizar.forEach((button) => {
        button.innerHTML = brasil.visualizar;
    });
    elementos.ferramentas.innerHTML = brasil.ferramentas;
    elementos.tecnologias.innerHTML = brasil.tecnologias;
    elementos.certificado.innerHTML = brasil.certificado;
    elementos.avaliacaoTitle.innerHTML = brasil.avaliacaoTitle;
}

const espanha = () => {
    elementos.inicio.innerHTML = spain.inicio;
    elementos.cursos.innerHTML = spain.cursos;
    elementos.jogos.innerHTML = spain.jogos;
    elementos.portfolio.innerHTML = spain.portfolio;
    elementos.contato.innerHTML = spain.contato;
    elementos.sobre.innerHTML = spain.sobre;
    elementos.sobreMim.innerHTML = spain.sobreMim;
    elementos.contMim.innerHTML = spain.contMim;
    elementos.meusProjetos.innerHTML = spain.meusProjetos;
    elementos.visualizar.forEach((button) => {
        button.innerHTML = spain.visualizar;
    });
    elementos.ferramentas.innerHTML = spain.ferramentas;
    elementos.tecnologias.innerHTML = spain.tecnologias;
    elementos.certificado.innerHTML = spain.certificado;
    elementos.avaliacaoTitle.innerHTML = spain.avaliacaoTitle;
}

const frances = () => {
    elementos.inicio.innerHTML = franca.inicio;
    elementos.cursos.innerHTML = franca.cursos;
    elementos.jogos.innerHTML = franca.jogos;
    elementos.portfolio.innerHTML = franca.portfolio;
    elementos.contato.innerHTML = franca.contato;
    elementos.sobre.innerHTML = franca.sobre;
    elementos.sobreMim.innerHTML = franca.sobreMim;
    elementos.contMim.innerHTML = franca.contMim;
    elementos.meusProjetos.innerHTML = franca.meusProjetos;
    elementos.visualizar.innerHTML = franca.visualizar;
    elementos.visualizar.forEach((button) => {
        button.innerHTML = franca.visualizar;
    });
    elementos.ferramentas.innerHTML = franca.ferramentas;
    elementos.tecnologias.innerHTML = franca.tecnologias;
    elementos.certificado.innerHTML = franca.certificado;
    elementos.avaliacaoTitle.innerHTML = franca.avaliacaoTitle;
}

const chines = () => {
    elementos.inicio.innerHTML = china.inicio;
    elementos.cursos.innerHTML = china.cursos;
    elementos.jogos.innerHTML = china.jogos;
    elementos.portfolio.innerHTML = china.portfolio;
    elementos.contato.innerHTML = china.contato;
    elementos.sobre.innerHTML = china.sobre;
    elementos.sobreMim.innerHTML = china.sobreMim;
    elementos.contMim.innerHTML = china.contMim;
    elementos.meusProjetos.innerHTML = china.meusProjetos;
    elementos.visualizar.forEach((button) => {
        button.innerHTML = china.visualizar;
    });
    elementos.ferramentas.innerHTML = china.ferramentas;
    elementos.tecnologias.innerHTML = china.tecnologias;
    elementos.certificado.innerHTML = china.certificado;
    elementos.avaliacaoTitle.innerHTML = china.avaliacaoTitle;
}

//Muda a linguagem do site 

let langSelecionada = document.querySelector('.idiomaSelecionada');
let flagSelecionada = document.querySelector(".flagsSelecionada img");

const langPage = () => {
    if (localStorage.getItem('lang') == 'eu') {
        langSelecionada.innerHTML = "EU";
        flagSelecionada.src = "./image/eua.png";
        ingles();
    }else if (localStorage.getItem('lang') == 'es') {
            langSelecionada.innerHTML = "ES";
            flagSelecionada.src = "./image/spain.png";
            espanha();
    }else if (localStorage.getItem('lang') == 'fr') {
            langSelecionada.innerHTML = "FR";
            flagSelecionada.src = "./image/franca.png";
            frances();
    }else if (localStorage.getItem('lang') == 'ch') {
            langSelecionada.innerHTML = "CH";
            flagSelecionada.src = "./image/china.png";
            chines();
    }else {
        localStorage.setItem('lang', 'br')
        langSelecionada.innerHTML = "BR";
        flagSelecionada.src = "./image/brasil.png";
        portugues();
    }
}

langPage();

const apresentacao = document.querySelector('.apresentacao');
const red = document.querySelector('.red');

const ola = [
    "O", "l", "a", ",",
    " ", "m", "e", "u",
    " ", "n", "o", "m", 
    "e", " ", "é", " ",
    "E", "r", "y", "c",
    "k", " ", "B", "o", 
    "r", "g", "e", "s"
];

let index = 0; // Variável para rastrear o índice atual

const interval = setInterval(() => {
    if (index < ola.length) {
        if (index < 15) {
            // Adiciona as letras em apresentacao até o índice 14
            apresentacao.innerHTML += ola[index];
            
        } else {
            // Adiciona as letras em red a partir do índice 15
            red.innerHTML += ola[index];
        }
        index++; // Incrementa o índice após adicionar a letra
    } else {
        clearInterval(interval); // Para o intervalo quando terminar
    }
}, 200);

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


const eu = document.querySelector('.eua');

eu.addEventListener('click', () => {
    langSelecionada.innerHTML = "EU";
    flagSelecionada.src = "./image/eua.png"
    localStorage.setItem('lang', 'eu');
    ingles();
});

const es = document.querySelector('.spain');

es.addEventListener('click', () => {
    langSelecionada.innerHTML = "ES";
    flagSelecionada.src = "./image/spain.png"
    localStorage.setItem('lang', 'es');
    espanha();
});

const br = document.querySelector('.brasil');

br.addEventListener('click', () => {
    langSelecionada.innerHTML = "BR";
    flagSelecionada.src = "./image/brasil.png"
    localStorage.setItem('lang', 'br');
    portugues();
});

const fr = document.querySelector('.franca');

fr.addEventListener('click', () => {
    langSelecionada.innerHTML = "FR";
    flagSelecionada.src = "./image/franca.png"
    localStorage.setItem('lang', 'fr');
    frances();
});

const ch = document.querySelector('.china');

ch.addEventListener('click', () => {
    langSelecionada.innerHTML = "CH";
    flagSelecionada.src = "./image/china.png"
    localStorage.setItem('lang', 'ch');
    chines();
});

//Função de slide de projetos e serviços
const slider = document.querySelector('.swiper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Parar se o mouse não estiver pressionado
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Multiplica para ajustar a velocidade
    slider.scrollLeft = scrollLeft - walk;
});

// Função de slide de avaliação
const avalia = document.querySelector('.avalia');
let praBaixo = false;
let startXY;
let scrollEsquerda;

avalia.addEventListener('mousedown', (e) => {
    praBaixo = true;
    avalia.classList.add('active');
    startXY = e.pageX - avalia.scrollLeft;
    scrollEsquerda = avalia.scrollLeft;
});

avalia.addEventListener('mouseleave', () => {
    praBaixo = false;
    avalia.classList.remove('active');
});

avalia.addEventListener('mouseup', () => {
    praBaixo = false;
    avalia.classList.remove('active');
});

avalia.addEventListener('mousemove', (e) => {
    if (!praBaixo) return;
    e.preventDefault();
    const x = e.pageX - avalia.scrollLeft;
    const walk = (x - startXY) * 0.5;
    avalia.scrollLeft = scrollEsquerda - walk; 
});

//Função mostrar mais certificados
const buttonCertificado = document.querySelector('.certificados button');
const certificados = document.querySelector('.certificados');
const certificadosOcultos = document.querySelectorAll('.certificadoOculto');
const buttonSpan = document.querySelector('.certificados button span');

let isExpanded = false;

buttonCertificado.addEventListener('click', () => {
    if (!isExpanded) {
        // Expande os certificados
        const fullHeight = 'auto';
        certificados.style.height = fullHeight;

        certificadosOcultos.forEach(certificado => {
            setTimeout(() => {
                certificado.classList.remove('certificadoOculto');
                certificado.classList.add('certificado');
            }, 100);
        });

        buttonSpan.innerHTML = 'keyboard_arrow_up';
        isExpanded = true;
    } else {
        // Colapsa os certificados
        certificados.style.height = "150vh"; // Altura reduzida fixa

        certificadosOcultos.forEach(certificado => {
            setTimeout(() => {
                certificado.classList.add('certificadoOculto');
                certificado.classList.remove('certificado');
            }, 100);
        });

        buttonSpan.innerHTML = 'keyboard_arrow_down';
        isExpanded = false;
    }
});



