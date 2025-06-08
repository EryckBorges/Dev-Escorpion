let typedInstance; // Variável global para armazenar a instância de Typed.js

const animacaoTyped = (elementSelector, strings) => {
  const typedElement = document.querySelector(elementSelector);
  typedElement.innerHTML = ""; // Limpa o conteúdo anterior

  // Destroi a instância anterior, se existir
  if (typedInstance) {
    typedInstance.destroy();
  }

  // Cria uma nova instância de Typed.js e armazena
  typedInstance = new Typed(elementSelector, {
    strings: strings,
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
  });
};

const alternarIdioma = (idioma) => {
  // Esconde todas as divs
  const divs = document.querySelectorAll(
    ".typedBr, .typedEu, .typedEs, .typedCh, .typedFr"
  );
  divs.forEach((div) => (div.style.display = "none"));

  // Mostra a div correspondente ao idioma selecionado
  const divSelecionada = document.querySelector(`.typed${idioma}`);
  if (divSelecionada) {
    divSelecionada.style.display = "block";
  }
};

let titleButtonTranslate = document.querySelectorAll(".btnTraduz");

//Linguagens

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
  sobreMim: "About Me",
  contMim:
    "Hello, my name is Éryck Borges da Silva Dionizio, I am 18 years old, graduated in Technical Computer Science from UNESP, and I am a Front-End Developer and Web Designer with experience in HTML, CSS, JavaScript, Git, GitHub, creating layouts and websites, basic maintenance of notebooks and PCs, as well as using Figma and Canva to develop modern and intuitive designs, always focusing on usability and performance. Passionate about technology, I am constantly seeking to learn and evolve.",
    meusProjetos: "My Projects",
    clientProjetos: "Client Portfolio",    
  visualizar: "View",
  ferramentas: "Tools and Technologies I Use",
  tecnologias: "Tools and Technologies in Learning and Improvement",
  certificado: "Certificates and Achievements",
  avaliacaoTitle: "Professional Feedback and Reviews",
  contact: "Talk to me, and let's create something amazing together!",
  titleSolo: "Solo Leveling RPG Generator",
  titleRelogio: "Clocks and Stopwatch",
  titleGenshin: "Genshin Impact Divination",
  titlePokemon: "Pokedex and Games",
  titleSlechi: "Ice Cream Catalog",
  titleAumigos: "Graduation Project - AuMigos Pet's",
  toastAlertDesenvolvi: "In Development",
  btnAllProject: "See all projects",
yourNumber: 'Your number, your Multiplication Table',
servicePrest: 'Discover the Services I Offer',
servicePrestText: "I offer computer and laptop repair and maintenance services, as well as PC assembly and upgrades, helping you choose the best parts for performance and cost-effectiveness. I also work in web application development, creating modern and responsive websites using HTML, CSS, JavaScript, Git, GitHub, Figma, and Canva. Get in touch and take your technology to the next level! Let's Code!",
};

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
  sobreMim: "Sobre Mim",
  contMim:
    "Olá, meu nome é Éryck Borges da Silva Dionizio, tenho 18 anos, sou formado em Técnico em Informática pela UNESP e sou Front-End Developer e Web Designer com experiência em HTML, CSS, JavaScript, Git, GitHub, criação de layouts e sites, manutenção básica de notebooks e PCs, além de utilizar Figma e Canva para desenvolver designs modernos e intuitivos, sempre focando em usabilidade e performance. Apaixonado por tecnologia, estou sempre em busca de aprender e evoluir.",
  meusProjetos: "Meus Projetos",
  clientProjetos: 'Portfólio de Clientes',
  visualizar: "Visualizar",
  ferramentas: "Ferramentas e Tecnologias que Utilizo",
  tecnologias: "Ferramentas e Tecnologias em Aprendizado e Aprimoramento",
  certificado: "Certificados e Conquistas",
  avaliacaoTitle: "Feedbacks e Avaliações Profissionais",
  contact: "Fale comigo e vamos criar algo incrível juntos!",
  titleSolo: "Gerador RPG Solo Leveling",
  titleRelogio: "Relógios e Cronômetro",
  titlePokemon: "Pokedex e Jogos",
  titleGenshin: "Adivinhação de Genshin Impact",
  titleSlechi: "Catalogo de Sorvetes",
  titleAumigos: "TCC - AuMigos Pet's",
  toastAlertDesenvolvi: "Em Desenvolvimento",
  btnAllProject: "Veja todos os projetos",
  yourNumber: 'Seu número, sua Tabuada',
  servicePrest: 'Conheça os Serviços que Ofereço',
servicePrestText: "Ofereço serviços de conserto e manutenção de computadores e notebooks, além de montagem e upgrade de PCs, ajudando a escolher as melhores peças para desempenho e custo-benefício. Também atuo no desenvolvimento de aplicações web, criando sites modernos e responsivos com HTML, CSS, JavaScript, Git, GitHub, Figma e Canva. Entre em contato e leve sua tecnologia para o próximo nível! Let's Code!",
};

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
  sobreMim: "Acerca de Mí",
  contMim:
    "Hola, mi nombre es Éryck Borges da Silva Dionizio, tengo 18 años, soy graduado en Técnico en Informática por la UNESP y soy Front-End Developer y Web Designer con experiencia en HTML, CSS, JavaScript, Git, GitHub, creación de layouts y sitios web, mantenimiento básico de notebooks y PCs, además de utilizar Figma y Canva para desarrollar diseños modernos e intuitivos, siempre enfocándome en la usabilidad y el rendimiento. Apasionado por la tecnología, siempre estoy buscando aprender y evolucionar.",
    meusProjetos: "Mis Proyectos",
    clientProjetos: "Portafolio de Clientes",    
  visualizar: "Vista",
  ferramentas: "Herramientas y Tecnologías que uso",
  tecnologias: "Herramientas y Tecnologías en el Aprendizaje y la Mejora",
  certificado: "Certificados y Logros",
  avaliacaoTitle: "Comentarios y Reseñas Profesionales",
  contact: "¡Habla conmigo y creemos algo increíble juntos!",
  titleSolo: "Generador RPG Solo Leveling",
  titleRelogio: "Relojes y Cronómetro",
  titleGenshin: "Adivinación de Genshin Impact",
  titlePokemon: "Pokedex y Juegos",
  titleSlechi: "Catálogo de Helados",
  titleAumigos: "Trabajo de Fin de Curso - AuMigos Pet's",
  toastAlertDesenvolvi: "En Desarrollo",
  btnAllProject: "Ver todos los proyectos",
yourNumber: 'Tu número, tu Tabla de Multiplicar',
servicePrest: 'Descubre los Servicios que Ofrezco',
servicePrestText: "Ofrezco servicios de reparación y mantenimiento de computadoras y laptops, así como ensamblaje y actualización de PC, ayudándote a elegir las mejores piezas para rendimiento y costo-beneficio. También me dedico al desarrollo de aplicaciones web, creando sitios modernos y responsivos con HTML, CSS, JavaScript, Git, GitHub, Figma y Canva. ¡Ponte en contacto y lleva tu tecnología al siguiente nivel! ¡Let's Code!",
};

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
  sobreMim: "Sur Moi",
  contMim:
    "Bonjour, je m'appelle Éryck Borges da Silva Dionizio, j'ai 18 ans, je suis diplômé en Technicien en Informatique de l'UNESP et je suis Front-End Developer et Web Designer avec de l'expérience en HTML, CSS, JavaScript, Git, GitHub, création de layouts et de sites web, maintenance de base de notebooks et de PC, ainsi qu'en utilisant Figma et Canva pour développer des designs modernes et intuitifs, toujours en me concentrant sur l'ergonomie et la performance. Passionné par la technologie, je suis constamment à la recherche d'apprendre et d'évoluer.",
    meusProjetos: "Mes Projets",
    clientProjetos: "Portefeuille de Clients",    
  visualizar: "Voir",
  ferramentas: "Outils et Technologies que j'utilise",
  tecnologias: "Outils et Technologies d'apprentissage et d'amélioration",
  certificado: "Certificats et Réalisations",
  avaliacaoTitle: "Commentaires et Avis Professionnels",
  contact: "Parlez-moi et créons quelque chose d'incroyable ensemble !",
  titleSolo: "Générateur RPG Solo Leveling",
  titleRelogio: "Horloges et Chronomètre",
  titlePokemon: "Pokedex et Jeux",
  titleGenshin: "Divination de Genshin Impact",
  titleSlechi: "Catalogue de Glaces",
  titleAumigos: "Projet de Fin d'Études - AuMigos Pet's",
  toastAlertDesenvolvi: "En Développement",
notConhecimento: "de connaissance <br> que je ne possède pas",
yourNumber: 'Votre numéro, votre Table de Multiplication',
servicePrest: 'Découvrez les services que j’offre',
servicePrestText: "J'offre des services de réparation et de maintenance d'ordinateurs et d'ordinateurs portables, ainsi que l'assemblage et la mise à niveau de PC, en vous aidant à choisir les meilleures pièces pour la performance et le rapport qualité-prix. Je travaille également dans le développement d'applications web, en créant des sites modernes et responsifs avec HTML, CSS, JavaScript, Git, GitHub, Figma et Canva. Contactez-moi et faites passer votre technologie au niveau supérieur ! Let's Code ",
};

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
  sobreMim: "关于我",
  contMim:
    "你好，我叫Éryck Borges da Silva Dionizio，今年18岁，毕业于UNESP的计算机技术专业，我是前端开发者和Web设计师，具有HTML、CSS、JavaScript、Git、GitHub经验，擅长布局和网站创建、笔记本电脑和PC的基础维护，并使用Figma和Canva开发现代化且直观的设计，始终关注可用性和性能。我热爱技术，始终在寻求学习和进步。 ",
    meusProjetos: "我的项目",
    clientProjetos: "客户作品集",    
  visualizar: "看法",
  ferramentas: "我使用的工具和技术",
  tecnologias: "学习和改进的工具和技术",
  certificado: "证书和成就",
  avaliacaoTitle: "专业反馈和评论",
  contact: "和我聊聊，让我们一起创造一些令人惊叹的东西！",
  titleSolo: "Solo Leveling RPG 生成器",
  titleRelogio: "时钟和计时器",
  titleGenshin: "原神占卜",
  titleSlechi: "冰淇淋目录",
  titlePokemon: "宝可梦图鉴与游戏",
  titleAumigos: "毕业项目 - AuMigos Pet's",
  toastAlertDesenvolvi: "开发中",
  btnAllProject: "查看所有项目",
yourNumber: '你的数字，你的乘法表',
servicePrest: '发现我提供的服务',
servicePrestText: "我提供电脑和笔记本电脑的维修和维护服务，以及PC组装和升级，帮助您选择最佳配件，以提高性能并优化成本。我还从事Web应用开发，使用HTML、CSS、JavaScript、Git、GitHub、Figma和Canva创建现代化、响应式的网站。欢迎联系我们，让您的技术更上一层楼！Let's Code!",
};

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
  sobreMim: document.querySelector(".cont h1"),
  contMim: document.querySelector(".cont p"),
  meusProjetos: document.querySelector(".titleMyProject"),
  clientProjetos: document.querySelector(".titleMyProjectServices"),
  visualizar: document.querySelectorAll(".project button a"),
  ferramentas: document.querySelector(".ferramentas h1"),
  tecnologias: document.querySelector(".estudos h1"),
  certificado: document.querySelector(".certificados_section h1"),
  avaliacaoTitle: document.querySelector(".avaliacao h1"),
  contact: document.querySelector(".qrCode h1"),
  titleRelogio: document.querySelector(".relogio p"),
  titleSolo: document.querySelector(".sololeveling p"),
  titleGenshin: document.querySelector(".genshin p"),
  titlePokemon: document.querySelector(".pokemon p"),
  titleSlechi: document.querySelector(".slechi p"),
  titleAumigos: document.querySelector(".aumigos p"),
  toastAlertDesenvolvi: document.querySelector(".textToast"),
  btnAllProject: document.querySelectorAll(".btnAllProject"),
  yourNumber: document.querySelector('.tabuada p'),
  servicePrest: document.querySelector('.servicePrest'),
servicePrestText: document.querySelector('.servicePrestText'),
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
  elementos.footerProject.innerHTML = eua.footerProject;
  elementos.use.innerHTML = eua.use;
  elementos.privacity.innerHTML = eua.privacity;
  elementos.cookie.innerHTML = eua.cookie;
  elementos.sobreMim.innerHTML = eua.sobreMim;
  elementos.contMim.innerHTML = eua.contMim;
  elementos.meusProjetos.innerHTML = eua.meusProjetos;
  elementos.clientProjetos.innerHTML = eua.clientProjetos;
  elementos.visualizar.innerHTML = eua.visualizar;
  elementos.visualizar.forEach((button) => {
    button.innerHTML = eua.visualizar;
  });
  elementos.ferramentas.innerHTML = eua.ferramentas;
  elementos.tecnologias.innerHTML = eua.tecnologias;
  elementos.certificado.innerHTML = eua.certificado;
  elementos.avaliacaoTitle.innerHTML = eua.avaliacaoTitle;
  alternarIdioma("Eu");
  animacaoTyped(".typedEu", [
    "Hello, my name is Eryck Borges",
    "I am 18 years old",
    "I am a Front-end Developer",
    "and Web Designer",
    "I am from São Paulo-BR",
    "Welcome to My Portfolio",
  ]);
  elementos.contact.innerHTML = eua.contact;
  elementos.titleSolo.innerHTML = eua.titleSolo;
  elementos.titleSlechi.innerHTML = eua.titleSlechi;
  elementos.titleRelogio.innerHTML = eua.titleRelogio;
  elementos.titleGenshin.innerHTML = eua.titleGenshin;
  elementos.titlePokemon.innerHTML = eua.titlePokemon;
  elementos.titleAumigos.innerHTML = eua.titleAumigos;
  elementos.toastAlertDesenvolvi.innerHTML = eua.toastAlertDesenvolvi;
  elementos.btnAllProject.forEach((btnAllProjectText) => {
    btnAllProjectText.innerHTML = eua.btnAllProject;
  });
  elementos.yourNumber.innerHTML = eua.yourNumber;
  elementos.servicePrest.innerHTML = eua.servicePrest;
  elementos.servicePrestText.innerHTML = eua.servicePrestText;
  titleButtonTranslate.forEach((btnTranslate) => {
    btnTranslate.setAttribute("title", "Translate to English");
  });
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
  elementos.footerProject.innerHTML = brasil.footerProject;
  elementos.use.innerHTML = brasil.use;
  elementos.privacity.innerHTML = brasil.privacity;
  elementos.cookie.innerHTML = brasil.cookie;
  elementos.sobreMim.innerHTML = brasil.sobreMim;
  elementos.contMim.innerHTML = brasil.contMim;
  elementos.meusProjetos.innerHTML = brasil.meusProjetos;
  elementos.clientProjetos.innerHTML = brasil.clientProjetos;
  elementos.visualizar.innerHTML = brasil.visualizar;
  elementos.visualizar.forEach((button) => {
    button.innerHTML = brasil.visualizar;
  });
  elementos.ferramentas.innerHTML = brasil.ferramentas;
  elementos.tecnologias.innerHTML = brasil.tecnologias;
  elementos.certificado.innerHTML = brasil.certificado;
  elementos.avaliacaoTitle.innerHTML = brasil.avaliacaoTitle;
  alternarIdioma("Br");
  animacaoTyped(".typedBr", [
    "Olá, meu nome é Eryck Borges",
    "Tenho 18 anos de idade",
    "Sou um Front-end Developer",
    "e Web Designer",
    "Sou de São Paulo-BR",
    "Seja Bem-vindo ao Meu Portfolio",
  ]);
  elementos.titleSlechi.innerHTML = brasil.titleSlechi;
  elementos.contact.innerHTML = brasil.contact;
  elementos.titleSolo.innerHTML = brasil.titleSolo;
  elementos.titleRelogio.innerHTML = brasil.titleRelogio;
  elementos.titleGenshin.innerHTML = brasil.titleGenshin;
  elementos.titlePokemon.innerHTML = brasil.titlePokemon;
  elementos.titleAumigos.innerHTML = brasil.titleAumigos;
  elementos.toastAlertDesenvolvi.innerHTML = brasil.toastAlertDesenvolvi;
  elementos.btnAllProject.forEach((btnAllProjectText) => {
    btnAllProjectText.innerHTML = brasil.btnAllProject;
  });
  elementos.yourNumber.innerHTML = brasil.yourNumber;
  elementos.servicePrest.innerHTML = brasil.servicePrest;
  elementos.servicePrestText.innerHTML = brasil.servicePrestText;
  titleButtonTranslate.forEach((btnTranslate) => {
    btnTranslate.setAttribute("title", "Traduzir para o Português");
  });
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
  elementos.footerProject.innerHTML = spain.footerProject;
  elementos.use.innerHTML = spain.use;
  elementos.privacity.innerHTML = spain.privacity;
  elementos.cookie.innerHTML = spain.cookie;
  elementos.sobreMim.innerHTML = spain.sobreMim;
  elementos.contMim.innerHTML = spain.contMim;
  elementos.meusProjetos.innerHTML = spain.meusProjetos;
  elementos.clientProjetos.innerHTML = spain.clientProjetos;
  elementos.visualizar.forEach((button) => {
    button.innerHTML = spain.visualizar;
  });
  elementos.ferramentas.innerHTML = spain.ferramentas;
  elementos.tecnologias.innerHTML = spain.tecnologias;
  elementos.certificado.innerHTML = spain.certificado;
  elementos.avaliacaoTitle.innerHTML = spain.avaliacaoTitle;
  alternarIdioma("Es");
  animacaoTyped(".typedEs", [
    "Hola, mi nombre es Éryck Borges",
    "Tengo 18 años",
    "Soy Desarrollador Front-end",
    "y Diseñador Web",
    "Soy de São Paulo-BR",
    "Bienvenido a mi portafolio",
  ]);

  elementos.contact.innerHTML = spain.contact;
  elementos.titleSolo.innerHTML = spain.titleSolo;
  elementos.titleRelogio.innerHTML = spain.titleRelogio;
  elementos.titleGenshin.innerHTML = spain.titleGenshin;
  elementos.titlePokemon.innerHTML = spain.titlePokemon;
  elementos.titleSlechi.innerHTML = spain.titleSlechi;
  elementos.titleAumigos.innerHTML = spain.titleAumigos;
  elementos.toastAlertDesenvolvi.innerHTML = spain.toastAlertDesenvolvi;
  elementos.btnAllProject.forEach((btnAllProjectText) => {
    btnAllProjectText.innerHTML = spain.btnAllProject;
  });
  elementos.yourNumber.innerHTML = spain.yourNumber;
  elementos.servicePrest.innerHTML = spain.servicePrest;
  elementos.servicePrestText.innerHTML = spain.servicePrestText;
  titleButtonTranslate.forEach((btnTranslate) => {
    btnTranslate.setAttribute("title", "Traducir al español");
  });
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
  elementos.footerProject.innerHTML = franca.footerProject;
  elementos.use.innerHTML = franca.use;
  elementos.privacity.innerHTML = franca.privacity;
  elementos.cookie.innerHTML = franca.cookie;
  elementos.sobreMim.innerHTML = franca.sobreMim;
  elementos.contMim.innerHTML = franca.contMim;
  elementos.meusProjetos.innerHTML = franca.meusProjetos;
  elementos.clientProjetos.innerHTML = franca.clientProjetos;
  elementos.visualizar.innerHTML = franca.visualizar;
  elementos.visualizar.forEach((button) => {
    button.innerHTML = franca.visualizar;
  });
  elementos.ferramentas.innerHTML = franca.ferramentas;
  elementos.tecnologias.innerHTML = franca.tecnologias;
  elementos.certificado.innerHTML = franca.certificado;
  elementos.avaliacaoTitle.innerHTML = franca.avaliacaoTitle;
  alternarIdioma("Fr");
  animacaoTyped(".typedFr", [
    "Bonjour, je m'appelle Éryck Borges",
    "J'ai 18 ans",
    "Je suis Développeur Front-end",
    "et Designer Web",
    "Je viens de São Paulo-BR",
    "Bienvenue sur mon portfolio",
  ]);
  elementos.contact.innerHTML = franca.contact;
  elementos.titleSolo.innerHTML = franca.titleSolo;
  elementos.titleRelogio.innerHTML = franca.titleRelogio;
  elementos.titleGenshin.innerHTML = franca.titleGenshin;
  elementos.titlePokemon.innerHTML = franca.titlePokemon;
  elementos.titleSlechi.innerHTML = franca.titleSlechi;
  elementos.titleAumigos.innerHTML = franca.titleAumigos;
  elementos.toastAlertDesenvolvi.innerHTML = franca.toastAlertDesenvolvi;
  elementos.btnAllProject.forEach((btnAllProjectText) => {
    btnAllProjectText.innerHTML = franca.btnAllProject;
  });
  elementos.yourNumber.innerHTML = franca.yourNumber;
  elementos.servicePrest.innerHTML = franca.servicePrest;
  elementos.servicePrestText.innerHTML = franca.servicePrestText;
  titleButtonTranslate.forEach((btnTranslate) => {
    btnTranslate.setAttribute("title", "Traduire en français");
  });
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
  elementos.sobreMim.innerHTML = china.sobreMim;
  elementos.contMim.innerHTML = china.contMim;
  elementos.meusProjetos.innerHTML = china.meusProjetos;
  elementos.clientProjetos.innerHTML = china.clientProjetos;
  elementos.visualizar.forEach((button) => {
    button.innerHTML = china.visualizar;
  });
  elementos.footerProject.innerHTML = china.footerProject;
  elementos.use.innerHTML = china.use;
  elementos.privacity.innerHTML = china.privacity;
  elementos.cookie.innerHTML = china.cookie;
  elementos.ferramentas.innerHTML = china.ferramentas;
  elementos.tecnologias.innerHTML = china.tecnologias;
  elementos.certificado.innerHTML = china.certificado;
  elementos.avaliacaoTitle.innerHTML = china.avaliacaoTitle;
  alternarIdioma("Ch");
  animacaoTyped(".typedCh", [
    "你好，我的名字是 Éryck Borges",
    "我今年18岁",
    "我是前端开发者",
    "也是网页设计师",
    "我来自巴西圣保罗",
    "欢迎来到我的作品集",
  ]);
  elementos.contact.innerHTML = china.contact;
  elementos.titleSolo.innerHTML = china.titleSolo;
  elementos.titleRelogio.innerHTML = china.titleRelogio;
  elementos.titleGenshin.innerHTML = china.titleGenshin;
  elementos.titlePokemon.innerHTML = china.titlePokemon;
  elementos.titleSlechi.innerHTML = china.titleSlechi;
  elementos.titleAumigos.innerHTML = china.titleAumigos;
  elementos.toastAlertDesenvolvi.innerHTML = china.toastAlertDesenvolvi;
  elementos.btnAllProject.forEach((btnAllProjectText) => {
    btnAllProjectText.innerHTML = china.btnAllProject;
  });
  elementos.yourNumber.innerHTML = china.yourNumber;
  elementos.servicePrest.innerHTML = china.servicePrest;
  elementos.servicePrestText.innerHTML = china.servicePrestText;
  titleButtonTranslate.forEach((btnTranslate) => {
    btnTranslate.setAttribute("title", "翻译成中文");
  });
};
//Muda a linguagem do site

let langSelecionada = document.querySelector(".idiomaSelecionada");
let flagSelecionada = document.querySelector(".flagsSelecionada img");
// Função para traduzir o texto usando a API do Google Translate
const traduzirAvaliacao = async (texto, targetLang) => {
  try {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(
        texto
      )}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    // Combina todas as partes do texto traduzido caso sejam separadas
    return data[0].map((part) => part[0]).join(" ");
  } catch (error) {
    console.error("Erro ao traduzir:", error);
    return texto; // Retorna o texto original em caso de erro
  }
};

// Função para lidar com o clique no botão de tradução
document.querySelectorAll(".btnTraduz").forEach((btn) => {
  btn.addEventListener("click", async () => {
    // Identifica o idioma selecionado
    const lang = localStorage.getItem("lang") || "br";
    const targetLang = {
      br: "pt",
      eu: "en",
      es: "es",
      fr: "fr",
      ch: "zh-CN",
    }[lang];

    // Pega o texto da avaliação
    const descAvaliacao = btn
      .closest(".avaliacaoCard")
      .querySelector(".descAvaliacao");
    const originalText = descAvaliacao.textContent.trim();

    // Tradução e atualização do texto
    const translatedText = await traduzirAvaliacao(originalText, targetLang);
    descAvaliacao.textContent = translatedText;
  });
});

const langPage = () => {
  let langSelecionada = document.querySelector(".idiomaSelecionada");
  let flagSelecionada = document.querySelector(".flagsSelecionada img");
  let titleButtonTranslate = document.querySelectorAll(".btnTraduz");
  
  // Obtém a linguagem salva no localStorage
  const lang = localStorage.getItem("lang");

  if (lang === "eu") {
    langSelecionada.innerHTML = "EN";
    flagSelecionada.src = "../global/icon/eua.png";
    titleButtonTranslate.forEach((btnTranslate) => {
      btnTranslate.setAttribute("title", "Translate to English");
    });
    ingles();
  } else if (lang === "es") {
    langSelecionada.innerHTML = "ES";
    flagSelecionada.src = "../global/icon/spain.png";
    titleButtonTranslate.forEach((btnTranslate) => {
      btnTranslate.setAttribute("title", "Traducir al español");
    });
    espanha();
  } else if (lang === "fr") {
    langSelecionada.innerHTML = "FR";
    flagSelecionada.src = "../global/icon/franca.png";
    titleButtonTranslate.forEach((btnTranslate) => {
      btnTranslate.setAttribute("title", "Traduire en français");
    });
    frances();
  } else if (lang === "ch") {
    langSelecionada.innerHTML = "ZH";
    flagSelecionada.src = "../global/icon/china.png";
    titleButtonTranslate.forEach((btnTranslate) => {
      btnTranslate.setAttribute("title", "翻译成中文");
    });
    chines();
  } else {
    // Caso nenhuma linguagem esteja no localStorage, define como 'br'
    localStorage.setItem("lang", "br");
    langSelecionada.innerHTML = "PT";
    flagSelecionada.src = "../global/icon/brasil.png";
    titleButtonTranslate.forEach((btnTranslate) => {
      btnTranslate.setAttribute("title", "Traduzir para o Português");
    });
    portugues();
  }
};

// Executa ao carregar a página
langPage();

const slider = document.querySelector(".swiper");
let isDraggingSlider = false;
let startXSlider, scrollLeftSlider;

// 🔹 MOUSE: Somente arrasta horizontalmente quando pressionado
slider.addEventListener("mousedown", (e) => {
  isDraggingSlider = true;
  slider.classList.add("active");
  startXSlider = e.pageX - slider.offsetLeft;
  scrollLeftSlider = slider.scrollLeft;
});

document.addEventListener("mouseup", () => {
  isDraggingSlider = false;
  slider.classList.remove("active");
});

document.addEventListener("mousemove", (e) => {
  if (!isDraggingSlider) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walkX = (x - startXSlider) * 2; // Ajuste da velocidade
  slider.scrollLeft = scrollLeftSlider - walkX;
});

// 🔹 MOUSE SCROLL: Mantém rolagem vertical normalmente
slider.addEventListener("wheel", (e) => {
  if (Math.abs(e.deltaY) > 0) return; // Permite rolagem vertical normalmente
  
  e.preventDefault();
  slider.scrollLeft += e.deltaX;
}, { passive: false });

// 🔹 TOUCH: Somente rola horizontalmente quando segurado
slider.addEventListener("touchstart", (e) => {
  isDraggingSlider = true;
  startXSlider = e.touches[0].pageX;
  scrollLeftSlider = slider.scrollLeft;
}, { passive: true });

slider.addEventListener("touchmove", (e) => {
  if (!isDraggingSlider) return;

  const moveX = e.touches[0].pageX - startXSlider;
  slider.scrollLeft = scrollLeftSlider - moveX;
}, { passive: true });

slider.addEventListener("touchend", () => {
  isDraggingSlider = false;
});


const avalia = document.querySelector(".avalia");
let isDragging = false;
let startX, scrollLeft;

// 🔹 MOUSE: Somente arrasta horizontalmente quando pressionado
avalia.addEventListener("mousedown", (e) => {
  isDragging = true;
  avalia.classList.add("active");
  startX = e.pageX - avalia.offsetLeft;
  scrollLeft = avalia.scrollLeft;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  avalia.classList.remove("active");
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - avalia.offsetLeft;
  const walkX = (x - startX) * 0.5; // Ajuste da velocidade
  avalia.scrollLeft = scrollLeft - walkX;
});

// 🔹 MOUSE SCROLL: Mantém rolagem vertical normalmente
avalia.addEventListener("wheel", (e) => {
  // Se houver rolagem na vertical, permite normalmente
  if (Math.abs(e.deltaY) > 0) return;
  
  // Impede a rolagem vertical e move horizontalmente se necessário
  e.preventDefault();
  avalia.scrollLeft += e.deltaX;
}, { passive: false });

// 🔹 TOUCH: Somente rola horizontalmente quando segurado
avalia.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX;
  scrollLeft = avalia.scrollLeft;
}, { passive: true });

avalia.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  // 🔥 Somente move horizontalmente se estiver pressionando
  const moveX = e.touches[0].pageX - startX;
  avalia.scrollLeft = scrollLeft - moveX;
}, { passive: true });

avalia.addEventListener("touchend", () => {
  isDragging = false;
});

const sliderServices = document.querySelector(".swiperServices");
let isDraggingServices = false;
let startXServices, scrollLeftServices;

// 🔹 MOUSE: Somente arrasta horizontalmente quando pressionado
sliderServices.addEventListener("mousedown", (e) => {
  isDraggingServices = true;
  sliderServices.classList.add("active");
  startXServices = e.pageX - sliderServices.offsetLeft;
  scrollLeftServices = sliderServices.scrollLeft;
});

document.addEventListener("mouseup", () => {
  isDraggingServices = false;
  sliderServices.classList.remove("active");
});

document.addEventListener("mousemove", (e) => {
  if (!isDraggingServices) return;
  e.preventDefault();
  const x = e.pageX - sliderServices.offsetLeft;
  const walkX = (x - startXServices) * 2; // Ajuste da velocidade
  sliderServices.scrollLeft = scrollLeftServices - walkX;
});

// 🔹 MOUSE SCROLL: Mantém rolagem vertical normalmente
sliderServices.addEventListener("wheel", (e) => {
  if (Math.abs(e.deltaY) > 0) return; // Permite rolagem vertical normalmente
  
  e.preventDefault();
  sliderServices.scrollLeft += e.deltaX;
}, { passive: false });

// 🔹 TOUCH: Somente rola horizontalmente quando segurado
sliderServices.addEventListener("touchstart", (e) => {
  isDraggingServices = true;
  startXServices = e.touches[0].pageX;
  scrollLeftServices = sliderServices.scrollLeft;
}, { passive: true });

sliderServices.addEventListener("touchmove", (e) => {
  if (!isDraggingServices) return;
  
  const moveX = e.touches[0].pageX - startXServices;
  sliderServices.scrollLeft = scrollLeftServices - moveX;
}, { passive: true });

sliderServices.addEventListener("touchend", () => {
  isDraggingServices = false;
});

//Função mostrar mais certificados
const buttonCertificado = document.querySelector(".certificados button");
const certificados = document.querySelector(".certificados");
const buttonSpan = document.querySelector(".certificados button span");

let isExpanded = false;


//Redirecionamento dos projetos

const sololeveling = document.querySelector(".sololeveling");

sololeveling.addEventListener("click", () => {
  window.location.href = "https://eryckborges.github.io/Dev-Escorpion/projects/SoloLeveling/";
});

const relogio = document.querySelector(".relogio");

relogio.addEventListener("click", () => {
  window.location.href = "https://eryckborges.github.io/Dev-Escorpion/projects/relogio/";
});

const pokemon = document.querySelector(".pokemon");

pokemon.addEventListener("click", () => {
  window.location.href = "https://eryckborges.github.io/Dev-Escorpion/projects/pokemon/";
});

const aumigos = document.querySelector(".aumigos");

aumigos.addEventListener("click", () => {
  window.location.href = "https://eryckborges.github.io/Dev-Escorpion/projects/aumigosPets/";
});

let toast = document.querySelector(".toast");
let textToast = document.querySelector(".pToast");
let imageToast = document.querySelector(".toast img");

const toastNotification = new Audio();
toastNotification.src = "../global/music/toastNotification.mp3";

const toastFunction = () => {

  const lang = localStorage.getItem("lang");

  if (lang === "eu") {
    elementos.toastAlertDesenvolvi.innerHTML = eua.toastAlertDesenvolvi;
  } else if (lang === "es") {
    elementos.toastAlertDesenvolvi.innerHTML = spain.toastAlertDesenvolvi;
  } else if (lang === "fr") {
    elementos.toastAlertDesenvolvi.innerHTML = franca.toastAlertDesenvolvi;
  } else if (lang === "ch") {
    elementos.toastAlertDesenvolvi.innerHTML = china.toastAlertDesenvolvi;
  } else {
    // Caso nenhuma linguagem esteja no localStorage, define como 'br'
    elementos.toastAlertDesenvolvi.innerHTML = brasil.toastAlertDesenvolvi;
  }
};

const genshin = document.querySelector(".genshin");
const slechi = document.querySelector(".slechi");
const tabuada = document.querySelector(".tabuada");
const allButtonProject = document.querySelector(".buttonAllProjects");

genshin.addEventListener("click", () => {
  toastNotification.play();
  toast.style.display = "flex";
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.classList.add("toastOpen");
    toast.style.animation = "openToast 1s";
    setTimeout(() => {
      textToast.style.display = "flex";
      toastFunction();
    }, 200);
  }, 200);
  setTimeout(() => {
    toast.classList.remove("toastOpen");
    toast.style.animation = "closeToast 500ms";
    setTimeout(() => {
      textToast.style.display = "none";
      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.display = "none";
        toast.style.animation = "none";
      }, 500);
    }, 200);
  }, 5000);
});

allButtonProject.addEventListener("click", () => {
  toastNotification.play();
  toast.style.display = "flex";
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.classList.add("toastOpen");
    toast.style.animation = "openToast 1s";
    setTimeout(() => {
      textToast.style.display = "flex";
      toastFunction();
    }, 200);
  }, 200);
  setTimeout(() => {
    toast.classList.remove("toastOpen");
    toast.style.animation = "closeToast 500ms";
    setTimeout(() => {
      textToast.style.display = "none";
      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.display = "none";
        toast.style.animation = "none";
      }, 500);
    }, 200);
  }, 5000);
});

slechi.addEventListener("click", () => {
  window.location.href = "https://eryckborges.github.io/Dev-Escorpion/projects/client/slechi/";
});

tabuada.addEventListener("click", () => {
  toastNotification.play();
  toast.style.display = "flex";
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.classList.add("toastOpen");
    toast.style.animation = "openToast 1s";
    setTimeout(() => {
      textToast.style.display = "flex";
      toastFunction();
    }, 200);
  }, 200);
  setTimeout(() => {
    toast.classList.remove("toastOpen");
    toast.style.animation = "closeToast 500ms";
    setTimeout(() => {
      textToast.style.display = "none";
      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.display = "none";
        toast.style.animation = "none";
      }, 500);
    }, 200);
  }, 5000);
});

toast.addEventListener("click", () => {
  toast.classList.remove("toastOpen");
  toast.style.animation = "closeToast 500ms";
  setTimeout(() => {
    textToast.style.display = "none";
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.display = "none";
      toast.style.animation = "none";
    }, 500);
  }, 200);
});


