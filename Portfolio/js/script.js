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

const conhecimento1 = document.querySelector(".conhecimento1");
const conhecimento2 = document.querySelector(".conhecimento2");
const conhecimento3 = document.querySelector(".conhecimento3");
const conhecimento4 = document.querySelector(".conhecimento4");
const conhecimento5 = document.querySelector(".conhecimento5");
const conhecimento6 = document.querySelector(".conhecimento6");
const conhecimento7 = document.querySelector(".conhecimento7");
const conhecimento8 = document.querySelector(".conhecimento8");
const conhecimento9 = document.querySelector(".conhecimento9");
const iconeConhecimento = document.querySelector(".iconMore img");
const titleConhecimento = document.querySelector(".iconMore h1");
const carregamento = document.querySelector(".carregamento");
const carregamentoText = document.querySelector(".carregamentoText");
const porcento = document.querySelector(".porcento");
const conhecimentoPorcento = document.querySelector(".conhecimento");
const naoConhecimentoPorcento = document.querySelector(".naoConhecimento");

const more = document.querySelector(".more");
const ferramentas = document.querySelector(".ferramentas");
const closeMore = document.querySelector(".iconMore button");

let titleButtonTranslate = document.querySelectorAll(".btnTraduz");

//Porcentagem de meus conhecimentos

const porcentagem =  {
    allPorcentoFigma: '83%',
    notPorcentoFigma: '17%',
    allPorcentoHtml: '80%',
    notPorcentoHtml: '20%',
    allPorcentoCss: '70%',
    notPorcentoCss: '30%',
    allPorcentoJs: '65%',
    notPorcentoJs: '35%',
    allPorcentoCanva: '83%',
    notPorcentoCanva: '17%',
    allPorcentoGit: '80%',
    notPorcentoGit: '20%',
    allPorcentoGithub: '80%',
    notPorcentoGithub: '20%',
}

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
  html1Eu: "Essential Fundamentals",
  html2Eu: "Semantics",
  html3Eu: "Forms",
  html4Eu: "Global Attributes",
  html5Eu: "Best Practices",
  html6Eu: "Modern Content",
  html7Eu: "Performance and Optimization",
  html8Eu: "Advanced Knowledge",
  html9Eu: "",
  htmlTitleEu: "My HTML Knowledge",
  css1Eu: "CSS Basics",
  css2Eu: "Selectors",
  css3Eu: "Box Model",
  css4Eu: "Layouts",
  css5Eu: "Responsiveness",
  css6Eu: "Typography",
  css7Eu: "Visual Effects",
  css8Eu: "Pseudo-classes and States",
  css9Eu: "Inheritance and Specificity",
  cssTitleEu: "My CSS Knowledge",
  js1Eu: "JavaScript Fundamentals",
  js2Eu: "Functions",
  js3Eu: "Array and Object Manipulation",
  js4Eu: "DOM Manipulation",
  js5Eu: "Promises and Async/Await",
  js6Eu: "Error Handling",
  js7Eu: "Date and Time Manipulation",
  js8Eu: "Modules and Import/Export",
  js9Eu: "Best Practices and Modern Patterns",
  jsTitleEu: "My JavaScript Knowledge",
  // Git
  git1Eu: "Initial Setup",
  git2Eu: "Version Control System",
  git3Eu: "Basic Commands",
  git4Eu: "Branches",
  git5Eu: "Merge and Conflict Resolution",
  git6Eu: "Reverting Changes",
  git7Eu: "Logs and History",
  git8Eu: "Remote Repositories",
  git9Eu: "Workflows and Best Practices",
  gitTitleEu: "My Git Knowledge",
  // GitHub
  github1Eu: "Repository Creation and Management",
  github2Eu: "GitHub Pages",
  github3Eu: "Pull Requests",
  github4Eu: "Issues and Projects",
  github5Eu: "Actions and Automated Workflows",
  github6Eu: "Permission Control",
  github7Eu: "Integrations",
  github8Eu: "Markdown and Documentation",
  github9Eu: "Security",
  githubTitleEu: "My GitHub Knowledge",
  // Figma
  figma1Eu: "Navigation and Interface",
  figma2Eu: "Creating Frames and Layouts",
  figma3Eu: "Components and Variants",
  figma4Eu: "Text and Color Styles",
  figma5Eu: "Prototyping",
  figma6Eu: "Real-Time Collaboration",
  figma7Eu: "Plugins",
  figma8Eu: "Export and Inspection",
  figma9Eu: "Design Tokens and Documentation",
  figmaTitleEu: "My Figma Knowledge",
  // Canva
  canva1Eu: "Creating Custom Projects",
  canva2Eu: "Element Library",
  canva3Eu: "Ready-Made Templates and Themes",
  canva4Eu: "Styles and Fonts",
  canva5Eu: "Visual Effects",
  canva6Eu: "Collaboration and Sharing",
  canva7Eu: "Exporting and Formats",
  canva8Eu: "Animations",
  canva9Eu: "Marketing and Branding",
  canvaTitleEu: "My Canva Knowledge",
  contact: "Talk to me, and let's create something amazing together!",
  titleSolo: "Solo Leveling RPG Generator",
  titleRelogio: "Clocks and Stopwatch",
  titleGenshin: "Genshin Impact Divination",
  titlePokemon: "Pokedex and Games",
  titleSlechi: "Ice Cream Catalog",
  toastAlertDesenvolvi: "In Development",
  btnAllProject: "See all projects",
  allConhecimento: "of my knowledge",
  notConhecimento: "of knowledge <br> that I do not possess",
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
  //Html
  html1Br: "Fundamentos Essenciais",
  html2Br: "Semântica",
  html3Br: "Formulários",
  html4Br: "Atributos Globais",
  html5Br: "Boas Práticas",
  html6Br: "Conteúdo Moderno",
  html7Br: "Desempenho e Otimização",
  html8Br: "Conhecimentos Avançados",
  html9Br: "",
  htmlTitleBr: "Meus Conhecimentos de Html",
  //Css
  css1Br: "Fundamentos de CSS",
  css2Br: "Seletores",
  css3Br: "Box Model",
  css4Br: "Layouts",
  css5Br: "Responsividade",
  css6Br: "Tipografia",
  css7Br: "Efeitos Visuais",
  css8Br: "Pseudo-classes e Estados",
  css9Br: "Herança e Especificidade",
  cssTitleBr: "Meus Conhecimentos de Css",
  //Js
  js1Br: "Fundamentos do JavaScript",
  js2Br: "Funções",
  js3Br: "Manipulação de Arrays e Objetos",
  js4Br: "Manipulação do DOM",
  js5Br: "Promises e Async/Await",
  js6Br: "Controle de Erros",
  js7Br: "Manipulação de Datas e Tempo",
  js8Br: "Módulos e Importação/Exportação",
  js9Br: "Boas Práticas e Padrões Modernos",
  jsTitleBr: "Meus Conhecimentos de JavaScript",
  //Git
  git1Br: "Configuração Inicial",
  git2Br: "Sistema de Versionamento",
  git3Br: "Comandos Básicos",
  git4Br: "Branches",
  git5Br: "Merge e Resolução de Conflitos",
  git6Br: "Reverter Alterações",
  git7Br: "Logs e Histórico",
  git8Br: "Repositórios Remotos",
  git9Br: "Workflows e Boas Práticas",
  gitTitleBr: "Meus Conhecimentos de Git",
  // GitHub
  github1Br: "Criação e Gerenciamento de Repositórios",
  github2Br: "GitHub Pages",
  github3Br: "Pull Requests",
  github4Br: "Issues e Projetos",
  github5Br: "Ações e Workflows Automatizados",
  github6Br: "Controle de Permissões",
  github7Br: "Integrações",
  github8Br: "Markdown e Documentação",
  github9Br: "Segurança",
  githubTitleBr: "Meus Conhecimentos de GitHub",
  // Figma
  figma1Br: "Navegação e Interface",
  figma2Br: "Criação de Frames e Layouts",
  figma3Br: "Componentes e Variantes",
  figma4Br: "Estilos de Texto e Cores",
  figma5Br: "Prototipagem",
  figma6Br: "Colaboração em Tempo Real",
  figma7Br: "Plugins",
  figma8Br: "Exportação e Inspeção",
  figma9Br: "Design Tokens e Documentação",
  figmaTitleBr: "Meus Conhecimentos de Figma",
  // Canva
  canva1Br: "Criação de Projetos Personalizados",
  canva2Br: "Biblioteca de Elementos",
  canva3Br: "Modelos e Temas Prontos",
  canva4Br: "Estilos e Fontes",
  canva5Br: "Efeitos Visuais",
  canva6Br: "Colaboração e Compartilhamento",
  canva7Br: "Exportação e Formatos",
  canva8Br: "Animações",
  canva9Br: "Marketing e Branding",
  canvaTitleBr: "Meus Conhecimentos de Canva",
  contact: "Fale comigo e vamos criar algo incrível juntos!",
  titleSolo: "Gerador RPG Solo Leveling",
  titleRelogio: "Relógios e Cronômetro",
  titlePokemon: "Pokedex e Jogos",
  titleGenshin: "Adivinhação de Genshin Impact",
  titleSlechi: "Catalogo de Sorvetes",
  toastAlertDesenvolvi: "Em Desenvolvimento",
  btnAllProject: "Veja todos os projetos",
  allConhecimento: 'de meu conhecimento',
  notConhecimento: 'de conhecimento <br> que não possuo',
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
  html1Es: "Fundamentos Esenciales",
  html2Es: "Semántica",
  html3Es: "Formularios",
  html4Es: "Atributos Globales",
  html5Es: "Buenas Prácticas",
  html6Es: "Contenido Moderno",
  html7Es: "Desempeño y Optimización",
  html8Es: "Conocimientos Avanzados",
  html9Es: "",
  htmlTitleEs: "Mis Conocimientos de HTML",
  css1Es: "Fundamentos de CSS",
  css2Es: "Selectores",
  css3Es: "Modelo de Caja",
  css4Es: "Diseños",
  css5Es: "Responsividad",
  css6Es: "Tipografía",
  css7Es: "Efectos Visuales",
  css8Es: "Pseudo-clases y Estados",
  css9Es: "Herencia y Especificidad",
  cssTitleEs: "Mis Conocimientos de CSS",
  js1Es: "Fundamentos de JavaScript",
  js2Es: "Funciones",
  js3Es: "Manipulación de Arrays y Objetos",
  js4Es: "Manipulación del DOM",
  js5Es: "Promises y Async/Await",
  js6Es: "Control de Errores",
  js7Es: "Manipulación de Fechas y Tiempo",
  js8Es: "Módulos e Importación/Exportación",
  js9Es: "Buenas Prácticas y Patrones Modernos",
  jsTitleEs: "Mis Conocimientos de JavaScript",
  // Git
  git1Es: "Configuración Inicial",
  git2Es: "Sistema de Control de Versiones",
  git3Es: "Comandos Básicos",
  git4Es: "Ramas",
  git5Es: "Merge y Resolución de Conflictos",
  git6Es: "Revertir Cambios",
  git7Es: "Registros e Historial",
  git8Es: "Repositorios Remotos",
  git9Es: "Flujos de Trabajo y Buenas Prácticas",
  gitTitleEs: "Mis Conocimientos de Git",
  // GitHub
  github1Es: "Creación y Gestión de Repositorios",
  github2Es: "GitHub Pages",
  github3Es: "Pull Requests",
  github4Es: "Issues y Proyectos",
  github5Es: "Acciones y Flujos de Trabajo Automatizados",
  github6Es: "Control de Permisos",
  github7Es: "Integraciones",
  github8Es: "Markdown y Documentación",
  github9Es: "Seguridad",
  githubTitleEs: "Mis Conocimientos de GitHub",
  // Figma
  figma1Es: "Navegación e Interfaz",
  figma2Es: "Creación de Marcos y Diseños",
  figma3Es: "Componentes y Variantes",
  figma4Es: "Estilos de Texto y Colores",
  figma5Es: "Prototipado",
  figma6Es: "Colaboración en Tiempo Real",
  figma7Es: "Plugins",
  figma8Es: "Exportación e Inspección",
  figma9Es: "Tokens de Diseño y Documentación",
  figmaTitleEs: "Mis Conocimientos de Figma",
  // Canva
  canva1Es: "Creación de Proyectos Personalizados",
  canva2Es: "Biblioteca de Elementos",
  canva3Es: "Plantillas y Temas Listos",
  canva4Es: "Estilos y Fuentes",
  canva5Es: "Efectos Visuales",
  canva6Es: "Colaboración y Compartición",
  canva7Es: "Exportación y Formatos",
  canva8Es: "Animaciones",
  canva9Es: "Marketing y Branding",
  canvaTitleEs: "Mis Conocimientos de Canva",
  contact: "¡Habla conmigo y creemos algo increíble juntos!",
  titleSolo: "Generador RPG Solo Leveling",
  titleRelogio: "Relojes y Cronómetro",
  titleGenshin: "Adivinación de Genshin Impact",
  titlePokemon: "Pokedex y Juegos",
  titleSlechi: "Catálogo de Helados",
  toastAlertDesenvolvi: "En Desarrollo",
  btnAllProject: "Ver todos los proyectos",
  allConhecimento: "de mi conocimiento",
notConhecimento: "de conocimiento <br> que no poseo",
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
  html1Fr: "Fondements Essentiels",
  html2Fr: "Sémantique",
  html3Fr: "Formulaires",
  html4Fr: "Attributs Globaux",
  html5Fr: "Bonnes Pratiques",
  html6Fr: "Contenu Moderne",
  html7Fr: "Performance et Optimisation",
  html8Fr: "Connaissances Avancées",
  html9Fr: "",
  htmlTitleFr: "Mes Connaissances en HTML",
  css1Fr: "Bases de CSS",
  css2Fr: "Sélecteurs",
  css3Fr: "Modèle de Boîte",
  css4Fr: "Mises en Page",
  css5Fr: "Responsivité",
  css6Fr: "Typographie",
  css7Fr: "Effets Visuels",
  css8Fr: "Pseudo-classes et États",
  css9Fr: "Héritage et Spécificité",
  cssTitleFr: "Mes Connaissances en CSS",
  js1Fr: "Fondamentaux de JavaScript",
  js2Fr: "Fonctions",
  js3Fr: "Manipulation de Tableaux et Objets",
  js4Fr: "Manipulation du DOM",
  js5Fr: "Promises et Async/Await",
  js6Fr: "Gestion des Erreurs",
  js7Fr: "Manipulation de Dates et Temps",
  js8Fr: "Modules et Importation/Exportation",
  js9Fr: "Bonnes Pratiques et Modèles Modernes",
  jsTitleFr: "Mes Connaissances en JavaScript",
  // Git
  git1Fr: "Configuration Initiale",
  git2Fr: "Système de Gestion de Versions",
  git3Fr: "Commandes de Base",
  git4Fr: "Branches",
  git5Fr: "Fusion et Résolution de Conflits",
  git6Fr: "Annuler les Modifications",
  git7Fr: "Logs et Historique",
  git8Fr: "Dépôts Distants",
  git9Fr: "Workflows et Bonnes Pratiques",
  gitTitleFr: "Mes Connaissances en Git",
  // GitHub
  github1Fr: "Création et Gestion de Dépôts",
  github2Fr: "GitHub Pages",
  github3Fr: "Pull Requests",
  github4Fr: "Issues et Projets",
  github5Fr: "Actions et Workflows Automatisés",
  github6Fr: "Contrôle des Permissions",
  github7Fr: "Intégrations",
  github8Fr: "Markdown et Documentation",
  github9Fr: "Sécurité",
  githubTitleFr: "Mes Connaissances en GitHub",
  // Figma
  figma1Fr: "Navigation et Interface",
  figma2Fr: "Création de Frames et de Layouts",
  figma3Fr: "Composants et Variantes",
  figma4Fr: "Styles de Texte et Couleurs",
  figma5Fr: "Prototypage",
  figma6Fr: "Collaboration en Temps Réel",
  figma7Fr: "Plugins",
  figma8Fr: "Exportation et Inspection",
  figma9Fr: "Design Tokens et Documentation",
  figmaTitleFr: "Mes Connaissances en Figma",
  // Canva
  canva1Fr: "Création de Projets Personnalisés",
  canva2Fr: "Bibliothèque d'Éléments",
  canva3Fr: "Modèles et Thèmes Prêts à l'Emploi",
  canva4Fr: "Styles et Polices",
  canva5Fr: "Effets Visuels",
  canva6Fr: "Collaboration et Partage",
  canva7Fr: "Exportation et Formats",
  canva8Fr: "Animations",
  canva9Fr: "Marketing et Branding",
  canvaTitleFr: "Mes Connaissances en Canva",
  contact: "Parlez-moi et créons quelque chose d'incroyable ensemble !",
  titleSolo: "Générateur RPG Solo Leveling",
  titleRelogio: "Horloges et Chronomètre",
  titlePokemon: "Pokedex et Jeux",
  titleGenshin: "Divination de Genshin Impact",
  titleSlechi: "Catalogue de Glaces",
  toastAlertDesenvolvi: "En Développement",
  btnAllProject: "Voir tous les projets",
  allConhecimento: "de ma connaissance",
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
  html1Ch: "基本要素",
  html2Ch: "语义",
  html3Ch: "表单",
  html4Ch: "全局属性",
  html5Ch: "最佳实践",
  html6Ch: "现代内容",
  html7Ch: "性能与优化",
  html8Ch: "高级知识",
  html9Ch: "",
  htmlTitleCh: "我的 HTML 知识",
  css1Ch: "CSS 基础",
  css2Ch: "选择器",
  css3Ch: "盒模型",
  css4Ch: "布局",
  css5Ch: "响应式设计",
  css6Ch: "排版",
  css7Ch: "视觉效果",
  css8Ch: "伪类和状态",
  css9Ch: "继承和优先级",
  cssTitleCh: "我的 CSS 知识",
  js1Ch: "JavaScript 基础",
  js2Ch: "函数",
  js3Ch: "数组和对象的操作",
  js4Ch: "DOM 操作",
  js5Ch: "Promises 和 Async/Await",
  js6Ch: "错误处理",
  js7Ch: "日期和时间操作",
  js8Ch: "模块和导入/导出",
  js9Ch: "最佳实践和现代模式",
  jsTitleCh: "我的 JavaScript 知识",
  // Git
  git1Ch: "初始化配置",
  git2Ch: "版本控制系统",
  git3Ch: "基本命令",
  git4Ch: "分支",
  git5Ch: "合并和解决冲突",
  git6Ch: "撤销更改",
  git7Ch: "日志和历史",
  git8Ch: "远程仓库",
  git9Ch: "工作流和最佳实践",
  gitTitleCh: "我的 Git 知识",
  // GitHub
  github1Ch: "创建和管理仓库",
  github2Ch: "GitHub Pages",
  github3Ch: "Pull 请求",
  github4Ch: "问题和项目",
  github5Ch: "自动化的操作和工作流",
  github6Ch: "权限控制",
  github7Ch: "集成",
  github8Ch: "Markdown 和文档",
  github9Ch: "安全",
  githubTitleCh: "我的 GitHub 知识",
  // Figma
  figma1Ch: "导航和界面",
  figma2Ch: "创建框架和布局",
  figma3Ch: "组件和变体",
  figma4Ch: "文本和颜色样式",
  figma5Ch: "原型设计",
  figma6Ch: "实时协作",
  figma7Ch: "插件",
  figma8Ch: "导出和检查",
  figma9Ch: "设计令牌和文档",
  figmaTitleCh: "我的 Figma 知识",
  // Canva
  canva1Ch: "创建自定义项目",
  canva2Ch: "元素库",
  canva3Ch: "现成模板和主题",
  canva4Ch: "样式和字体",
  canva5Ch: "视觉效果",
  canva6Ch: "协作和分享",
  canva7Ch: "导出和格式",
  canva8Ch: "动画",
  canva9Ch: "市场营销和品牌",
  canvaTitleCh: "我的 Canva 知识",
  contact: "和我聊聊，让我们一起创造一些令人惊叹的东西！",
  titleSolo: "Solo Leveling RPG 生成器",
  titleRelogio: "时钟和计时器",
  titleGenshin: "原神占卜",
  titleSlechi: "冰淇淋目录",
  titlePokemon: "宝可梦图鉴与游戏",
  toastAlertDesenvolvi: "开发中",
  btnAllProject: "查看所有项目",
  allConhecimento: "我的知识",
notConhecimento: "我不具备的知识",
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
  certificado: document.querySelector(".certificados h1"),
  avaliacaoTitle: document.querySelector(".avaliacao h1"),
  contact: document.querySelector(".qrCode h1"),
  titleRelogio: document.querySelector(".relogio p"),
  titleSolo: document.querySelector(".sololeveling p"),
  titleGenshin: document.querySelector(".genshin p"),
  titlePokemon: document.querySelector(".pokemon p"),
  titleSlechi: document.querySelector(".slechi p"),
  toastAlertDesenvolvi: document.querySelector(".textToast"),
  btnAllProject: document.querySelectorAll(".btnAllProject"),
  allConhecimento: document.querySelector('.conhecimento'),
  notConhecimento: document.querySelector('.naoConhecimento'),
  yourNumber: document.querySelector('.tabuada p'),
  servicePrest: document.querySelector('.servicePrest'),
servicePrestText: document.querySelector('.servicePrestText'),
};

//Icones para clique

const html = document.querySelector(".html5");
const htmlMobile = document.querySelector(".html5Mobile");
const css = document.querySelector(".css");
const cssMobile = document.querySelector(".cssMobile");
const js = document.querySelector(".js");
const jsMobile = document.querySelector(".jsMobile");
const git = document.querySelector(".git");
const gitMobile = document.querySelector(".gitMobile");
const figma = document.querySelector(".figma");
const figmaMobile = document.querySelector(".figmaMobile");
const github = document.querySelector(".github");
const githubMobile = document.querySelector(".githubMobile");
const canva = document.querySelector(".canva");
const canvaMobile = document.querySelector(".canvaMobile");

//Verifica qual conteúdo esta sendo exibido

const verificaCont = () => {
    if (localStorage.getItem('lang') == 'eu') {
    if (more.classList.contains('Fgm')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoFigma} ${eua.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoFigma} ${eua.notConhecimento}`;
    } else if (more.classList.contains('html')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoHtml} ${eua.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoHtml} ${eua.notConhecimento}`;
    } else if (more.classList.contains('css')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoCss} ${eua.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoCss} ${eua.notConhecimento}`;
    }else if (more.classList.contains('javaScript')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoJs} ${eua.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoJs} ${eua.notConhecimento}`;
    } else if (more.classList.contains('Gt')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoGit} ${eua.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoGit} ${eua.notConhecimento}`;
    }else if (more.classList.contains('Gth')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoGithub} ${eua.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoGithallPorcentoGithub} ${eua.notConhecimento}`;
    } else if (more.classList.contains('Cnv')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoCanva} ${eua.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoCanva} ${eua.notConhecimento}`;
    }
}else if (localStorage.getItem('lang') == 'es') {
    if (more.classList.contains('Fgm')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoFigma} ${spain.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoFigma} ${spain.notConhecimento}`;
    } else if (more.classList.contains('html')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoHtml} ${spain.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoHtml} ${spain.notConhecimento}`;
    } else if (more.classList.contains('css')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoCss} ${spain.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoCss} ${spain.notConhecimento}`;
    }else if (more.classList.contains('javaScript')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoJs} ${spain.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoJs} ${spain.notConhecimento}`;
    } else if (more.classList.contains('Gt')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoGit} ${spain.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoGit} ${spain.notConhecimento}`;
    }else if (more.classList.contains('Gth')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoGithub} ${spain.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoGithub} ${spain.notConhecimento}`;
    } else if (more.classList.contains('Cnv')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoCanva} ${spain.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoCanva} ${spain.notConhecimento}`;
    }
}else if (localStorage.getItem('lang') == 'fr') {
    if (more.classList.contains('Fgm')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoFigma} ${franca.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoFigma} ${franca.notConhecimento}`;
    } else if (more.classList.contains('html')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoHtml} ${franca.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoHtml} ${franca.notConhecimento}`;
    } else if (more.classList.contains('css')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoCss} ${franca.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoCss} ${franca.notConhecimento}`;
    }else if (more.classList.contains('javaScript')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoJs} ${franca.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoJs} ${franca.notConhecimento}`;
    } else if (more.classList.contains('Gt')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoGit} ${franca.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoGit} ${franca.notConhecimento}`;
    }else if (more.classList.contains('Gth')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoGithub} ${franca.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoGithub} ${franca.notConhecimento}`;
    } else if (more.classList.contains('Cnv')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoCanva} ${franca.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoCanva} ${franca.notConhecimento}`;
    }
}else if (localStorage.getItem('lang') == 'ch') {
    if (more.classList.contains('Fgm')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoFigma} ${china.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoFigma} ${china.notConhecimento}`;
    } else if (more.classList.contains('html')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoHtml} ${china.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoHtml} ${china.notConhecimento}`;
    } else if (more.classList.contains('css')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoCss} ${china.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoCss} ${china.notConhecimento}`;
    }else if (more.classList.contains('javaScript')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoJs} ${china.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoJs} ${china.notConhecimento}`;
    } else if (more.classList.contains('Gt')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoGit} ${china.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoGit} ${china.notConhecimento}`;
    }else if (more.classList.contains('Gth')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoGithub} ${china.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoGithub} ${china.notConhecimento}`;
    } else if (more.classList.contains('Cnv')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoCanva} ${china.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoCanva} ${china.notConhecimento}`;
    }
}else if (localStorage.getItem('lang') == 'br') {
    if (more.classList.contains('Fgm')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoFigma} ${brasil.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoFigma} ${brasil.notConhecimento}`;
    } else if (more.classList.contains('html')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoHtml} ${brasil.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoHtml} ${brasil.notConhecimento}`;
    } else if (more.classList.contains('css')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoCss} ${brasil.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoCss} ${brasil.notConhecimento}`;
    }else if (more.classList.contains('javaScript')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoJs} ${brasil.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoJs} ${brasil.notConhecimento}`;
    } else if (more.classList.contains('Gt')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoGit} ${brasil.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoGit} ${brasil.notConhecimento}`;
    }else if (more.classList.contains('Gth')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoGithub} ${brasil.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoGithub} ${brasil.notConhecimento}`;
    } else if (more.classList.contains('Cnv')) {
        elementos.allConhecimento.innerHTML = `${porcentagem.allPorcentoCanva} ${brasil.allConhecimento}`;
        elementos.notConhecimento.innerHTML = `${porcentagem.notPorcentoCanva} ${brasil.notConhecimento}`;
    }
}
}

//Funções

const figmaFunction = () => {
  more.classList.add("Fgm");
  carregamento.classList.remove("jsAnimation");
      carregamento.classList.remove("canvaAnimation");
      carregamento.classList.remove("htmlAnimation");
      carregamento.classList.remove("cssAnimation");
      carregamento.classList.remove("githubAnimation");
      carregamento.classList.remove("gitAnimation");
  iconeConhecimento.src = "./image/figma.png";
  conhecimento1.style.color = "var(--figma)";
  conhecimento2.style.color = "var(--figma)";
  conhecimento3.style.color = "var(--figma)";
  conhecimento4.style.color = "var(--figma)";
  conhecimento5.style.color = "var(--figma)";
  conhecimento6.style.color = "var(--figma)";
  conhecimento7.style.color = "var(--figma)";
  conhecimento8.style.color = "var(--figma)";
  conhecimento9.style.color = "var(--figma)";
  titleConhecimento.style.color = "var(--figma)";
  carregamento.style.background = "var(--figma)";
  porcento.style.border = "2px solid var(--figma)";
  closeMore.style.color = "var(--figma)";
  conhecimentoPorcento.style.color = "var(--figma)";
  if (ferramentas.classList.contains("fadeInLeft")) {
    ferramentas.classList.remove("fadeInLeft");
  }
  if (more.classList.contains("fadeOutRight")) {
    more.classList.remove("fadeOutRight");
  }
  ferramentas.classList.add("fadeOutLeft");
  setTimeout(() => {
    ferramentas.classList.add("closed");
    more.classList.add("fadeInRight");
    more.classList.remove("closed");
    setTimeout(() => {
      carregamento.classList.add("figmaAnimation");
    }, 500);
    carregamentoText.innerHTML = porcentagem.allPorcentoFigma;
    carregamentoText.style.color = "var(--branco)";
    verificaCont();
  }, 500);
  langPage();
};

const htmlFunction = () => {
  more.classList.add("html");
  carregamento.classList.remove("figmaAnimation");
      carregamento.classList.remove("canvaAnimation");
      carregamento.classList.remove("jsAnimation");
      carregamento.classList.remove("cssAnimation");
      carregamento.classList.remove("githubAnimation");
      carregamento.classList.remove("gitAnimation");
  iconeConhecimento.src = "./image/html.png";
  conhecimento1.style.color = "var(--html)";
  conhecimento2.style.color = "var(--html)";
  conhecimento3.style.color = "var(--html)";
  conhecimento4.style.color = "var(--html)";
  conhecimento5.style.color = "var(--html)";
  conhecimento6.style.color = "var(--html)";
  conhecimento7.style.color = "var(--html)";
  conhecimento8.style.color = "var(--html)";
  conhecimento9.style.color = "var(--html)";
  titleConhecimento.style.color = "var(--html)";
  carregamento.style.background = "var(--html)";
  porcento.style.border = "2px solid var(--html)";
  closeMore.style.color = "var(--html)";
  conhecimentoPorcento.style.color = "var(--html)";
  if (ferramentas.classList.contains("fadeInLeft")) {
    ferramentas.classList.remove("fadeInLeft");
  }
  if (more.classList.contains("fadeOutRight")) {
    more.classList.remove("fadeOutRight");
  }
  ferramentas.classList.add("fadeOutLeft");
  setTimeout(() => {
    ferramentas.classList.add("closed");
    more.classList.add("fadeInRight");
    more.classList.remove("closed");
    setTimeout(() => {
      carregamento.classList.add("htmlAnimation");
    }, 500);
    carregamentoText.innerHTML = porcentagem.allPorcentoHtml;
    carregamentoText.style.color = "var(--branco)";
    verificaCont();
  }, 500);
  langPage();
};

const cssFunction = () => {
  more.classList.add("css");
  carregamento.classList.remove("figmaAnimation");
      carregamento.classList.remove("canvaAnimation");
      carregamento.classList.remove("htmlAnimation");
      carregamento.classList.remove("jsAnimation");
      carregamento.classList.remove("githubAnimation");
      carregamento.classList.remove("gitAnimation");
  iconeConhecimento.src = "./image/css.png";
  conhecimento1.style.color = "var(--css)";
  conhecimento2.style.color = "var(--css)";
  conhecimento3.style.color = "var(--css)";
  conhecimento4.style.color = "var(--css)";
  conhecimento5.style.color = "var(--css)";
  conhecimento6.style.color = "var(--css)";
  conhecimento7.style.color = "var(--css)";
  conhecimento8.style.color = "var(--css)";
  conhecimento9.style.color = "var(--css)";
  titleConhecimento.style.color = "var(--css)";
  carregamento.style.background = "var(--css)";
  porcento.style.border = "2px solid var(--css)";
  closeMore.style.color = "var(--css)";
  conhecimentoPorcento.style.color = "var(--css)";
  if (ferramentas.classList.contains("fadeInLeft")) {
    ferramentas.classList.remove("fadeInLeft");
  }
  if (more.classList.contains("fadeOutRight")) {
    more.classList.remove("fadeOutRight");
  }
  ferramentas.classList.add("fadeOutLeft");
  setTimeout(() => {
    ferramentas.classList.add("closed");
    more.classList.add("fadeInRight");
    more.classList.remove("closed");
    setTimeout(() => {
      carregamento.classList.remove("figmaAnimation");
      carregamento.classList.remove("canvaAnimation");
      carregamento.classList.remove("htmlAnimation");
      carregamento.classList.remove("jsAnimation");
      carregamento.classList.remove("githubAnimation");
      carregamento.classList.remove("gitAnimation");
      carregamento.classList.add("cssAnimation");
    }, 500);
    carregamentoText.innerHTML = porcentagem.allPorcentoCss;
    carregamentoText.style.color = "var(--branco)";
    verificaCont();
  }, 500);
  langPage();
};

const jsFunction = () => {
  more.classList.add("javaScript");
  carregamento.classList.remove("figmaAnimation");
      carregamento.classList.remove("canvaAnimation");
      carregamento.classList.remove("htmlAnimation");
      carregamento.classList.remove("cssAnimation");
      carregamento.classList.remove("githubAnimation");
      carregamento.classList.remove("gitAnimation");
  iconeConhecimento.src = "./image/js.png";
  conhecimento1.style.color = "var(--js)";
  conhecimento2.style.color = "var(--js)";
  conhecimento3.style.color = "var(--js)";
  conhecimento4.style.color = "var(--js)";
  conhecimento5.style.color = "var(--js)";
  conhecimento6.style.color = "var(--js)";
  conhecimento7.style.color = "var(--js)";
  conhecimento8.style.color = "var(--js)";
  conhecimento9.style.color = "var(--js)";
  titleConhecimento.style.color = "var(--js)";
  carregamento.style.background = "var(--js)";
  porcento.style.border = "2px solid var(--js)";
  closeMore.style.color = "var(--js)";
  conhecimentoPorcento.style.color = "var(--js)";
  if (ferramentas.classList.contains("fadeInLeft")) {
    ferramentas.classList.remove("fadeInLeft");
  }
  if (more.classList.contains("fadeOutRight")) {
    more.classList.remove("fadeOutRight");
  }
  ferramentas.classList.add("fadeOutLeft");
  setTimeout(() => {
    ferramentas.classList.add("closed");
    more.classList.add("fadeInRight");
    more.classList.remove("closed");
    setTimeout(() => {
      carregamento.classList.add("jsAnimation");
    }, 500);
    carregamentoText.innerHTML = porcentagem.allPorcentoJs;
    carregamentoText.style.color = "var(--branco)";
    verificaCont();
  }, 500)
  langPage();
};

const gitFunction = () => {
  more.classList.add("Gt");
  carregamento.classList.remove("figmaAnimation");
  carregamento.classList.remove("canvaAnimation");
  carregamento.classList.remove("htmlAnimation");
  carregamento.classList.remove("cssAnimation");
  carregamento.classList.remove("githubAnimation");
  carregamento.classList.add("gitAnimation");
  iconeConhecimento.src = "./image/git.webp";
  conhecimento1.style.color = "var(--git)";
  conhecimento2.style.color = "var(--git)";
  conhecimento3.style.color = "var(--git)";
  conhecimento4.style.color = "var(--git)";
  conhecimento5.style.color = "var(--git)";
  conhecimento6.style.color = "var(--git)";
  conhecimento7.style.color = "var(--git)";
  conhecimento8.style.color = "var(--git)";
  conhecimento9.style.color = "var(--git)";
  titleConhecimento.style.color = "var(--git)";
  carregamento.style.background = "var(--git)";
  porcento.style.border = "2px solid var(--git)";
  closeMore.style.color = "var(--git)";
  conhecimentoPorcento.style.color = "var(--git)";
  if (ferramentas.classList.contains("fadeInLeft")) {
    ferramentas.classList.remove("fadeInLeft");
  }
  if (more.classList.contains("fadeOutRight")) {
    more.classList.remove("fadeOutRight");
  }
  ferramentas.classList.add("fadeOutLeft");
  setTimeout(() => {
    ferramentas.classList.add("closed");
    more.classList.add("fadeInRight");
    more.classList.remove("closed");
    setTimeout(() => {
      carregamento.classList.remove("jsAnimation");
    }, 500);
    carregamentoText.innerHTML = porcentagem.allPorcentoGit;
    carregamentoText.style.color = "var(--branco)";
    verificaCont();
  }, 500);
  langPage();
};

const githubFunction = () => {
  more.classList.add("Gth");
  carregamento.classList.remove("figmaAnimation");
      carregamento.classList.remove("canvaAnimation");
      carregamento.classList.remove("htmlAnimation");
      carregamento.classList.remove("cssAnimation");
      carregamento.classList.remove("jsAnimation");
      carregamento.classList.remove("gitAnimation");
  iconeConhecimento.src = "./image/github.png";
  conhecimento1.style.color = "var(--branco)";
  conhecimento2.style.color = "var(--branco)";
  conhecimento3.style.color = "var(--branco)";
  conhecimento4.style.color = "var(--branco)";
  conhecimento5.style.color = "var(--branco)";
  conhecimento6.style.color = "var(--branco)";
  conhecimento7.style.color = "var(--branco)";
  conhecimento8.style.color = "var(--branco)";
  conhecimento9.style.color = "var(--branco)";
  titleConhecimento.style.color = "var(--branco)";
  carregamento.style.background = "var(--branco)";
  porcento.style.border = "2px solid var(--branco)";
  closeMore.style.color = "var(--branco)";
  conhecimentoPorcento.style.color = "var(--branco)";
  if (ferramentas.classList.contains("fadeInLeft")) {
    ferramentas.classList.remove("fadeInLeft");
  }
  if (more.classList.contains("fadeOutRight")) {
    more.classList.remove("fadeOutRight");
  }
  ferramentas.classList.add("fadeOutLeft");
  setTimeout(() => {
    ferramentas.classList.add("closed");
    more.classList.add("fadeInRight");
    more.classList.remove("closed");
    setTimeout(() => {
      carregamento.classList.add("githubAnimation");
    }, 500);
    carregamentoText.innerHTML = porcentagem.allPorcentoGithub;
    carregamentoText.style.color = "var(--preto)";
 verificaCont();
  }, 500);
  langPage();
};

const canvaFunction = () => {
  more.classList.add("Cnv");
    carregamento.classList.remove("figmaAnimation");
      carregamento.classList.remove("jsAnimation");
      carregamento.classList.remove("htmlAnimation");
      carregamento.classList.remove("cssAnimation");
      carregamento.classList.remove("githubAnimation");
      carregamento.classList.remove("gitAnimation");
  iconeConhecimento.src = "./image/canva.png";
  conhecimento1.style.color = "var(--canva)";
  conhecimento2.style.color = "var(--canva)";
  conhecimento3.style.color = "var(--canva)";
  conhecimento4.style.color = "var(--canva)";
  conhecimento5.style.color = "var(--canva)";
  conhecimento6.style.color = "var(--canva)";
  conhecimento7.style.color = "var(--canva)";
  conhecimento8.style.color = "var(--canva)";
  conhecimento9.style.color = "var(--canva)";
  titleConhecimento.style.color = "var(--canva)";
  carregamento.style.background = "var(--canva)";
  porcento.style.border = "2px solid var(--canva)";
  closeMore.style.color = "var(--canva)";
  conhecimentoPorcento.style.color = "var(--canva)";
  if (ferramentas.classList.contains("fadeInLeft")) {
    ferramentas.classList.remove("fadeInLeft");
  }
  if (more.classList.contains("fadeOutRight")) {
    more.classList.remove("fadeOutRight");
  }
  ferramentas.classList.add("fadeOutLeft");
  setTimeout(() => {
    ferramentas.classList.add("closed");
    more.classList.add("fadeInRight");
    more.classList.remove("closed");
    setTimeout(() => {
      carregamento.classList.add("canvaAnimation");
    }, 500);
    carregamentoText.innerHTML = porcentagem.allPorcentoCanva;
    carregamentoText.style.color = "var(--branco)";
    verificaCont();
  }, 500);
  langPage();
};

//Função do clique do icone

html.addEventListener("click", () => {
  htmlFunction();
});

htmlMobile.addEventListener("click", () => {
  htmlFunction();
});

css.addEventListener("click", () => {
  cssFunction();
});

cssMobile.addEventListener("click", () => {
  cssFunction();
});

js.addEventListener("click", () => {
  jsFunction();
});

jsMobile.addEventListener("click", () => {
  jsFunction();
});

git.addEventListener("click", () => {
  gitFunction();
});

gitMobile.addEventListener("click", () => {
  gitFunction();
});

github.addEventListener("click", () => {
  githubFunction();
});

githubMobile.addEventListener("click", () => {
  githubFunction();
});

canva.addEventListener("click", () => {
  canvaFunction();
});

canvaMobile.addEventListener("click", () => {
  canvaFunction();
});

figma.addEventListener("click", () => {
  figmaFunction();
});

figmaMobile.addEventListener("click", () => {
  figmaFunction();
});

closeMore.addEventListener("click", () => {
  conhecimento1.innerHTML = " ";
  conhecimento2.innerHTML = " ";
  conhecimento3.innerHTML = " ";
  conhecimento4.innerHTML = " ";
  conhecimento5.innerHTML = " ";
  conhecimento6.innerHTML = " ";
  conhecimento7.innerHTML = " ";
  conhecimento8.innerHTML = " ";
  conhecimento9.innerHTML = " ";
  titleConhecimento.innerHTML = " ";
  more.classList.remove("html");
  more.classList.remove("css");
  more.classList.remove("javaScript");
  more.classList.remove("Gt");
  more.classList.remove("Gth");
  more.classList.remove("Fgm");
  more.classList.remove("Cnv");
  more.classList.remove("fadeInRight");
  more.classList.add("fadeOutRight");

  ferramentas.classList.remove("fadeOutLeft");
  ferramentas.classList.add("fadeInLeft");
  setTimeout(() => {
    ferramentas.classList.remove("closed");
    more.classList.add("closed");
  }, 500);
});

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
  if (more.classList.contains("html")) {
    conhecimento1.innerHTML = eua.html1Eu;
    conhecimento2.innerHTML = eua.html2Eu;
    conhecimento3.innerHTML = eua.html3Eu;
    conhecimento4.innerHTML = eua.html4Eu;
    conhecimento5.innerHTML = eua.html5Eu;
    conhecimento6.innerHTML = eua.html6Eu;
    conhecimento7.innerHTML = eua.html7Eu;
    conhecimento8.innerHTML = eua.html8Eu;
    conhecimento9.innerHTML = eua.html9Eu;
    titleConhecimento.innerHTML = eua.htmlTitleEu;
  } else if (more.classList.contains("css")) {
    conhecimento1.innerHTML = eua.css1Eu;
    conhecimento2.innerHTML = eua.css2Eu;
    conhecimento3.innerHTML = eua.css3Eu;
    conhecimento4.innerHTML = eua.css4Eu;
    conhecimento5.innerHTML = eua.css5Eu;
    conhecimento6.innerHTML = eua.css6Eu;
    conhecimento7.innerHTML = eua.css7Eu;
    conhecimento8.innerHTML = eua.css8Eu;
    conhecimento9.innerHTML = eua.css9Eu;
    titleConhecimento.innerHTML = eua.cssTitleEu;
  } else if (more.classList.contains("javaScript")) {
    conhecimento1.innerHTML = eua.js1Eu;
    conhecimento2.innerHTML = eua.js2Eu;
    conhecimento3.innerHTML = eua.js3Eu;
    conhecimento4.innerHTML = eua.js4Eu;
    conhecimento5.innerHTML = eua.js5Eu;
    conhecimento6.innerHTML = eua.js6Eu;
    conhecimento7.innerHTML = eua.js7Eu;
    conhecimento8.innerHTML = eua.js8Eu;
    conhecimento9.innerHTML = eua.js9Eu;
    titleConhecimento.innerHTML = eua.jsTitleEu;
  } else if (more.classList.contains("Gt")) {
    conhecimento1.innerHTML = eua.git1Eu;
    conhecimento2.innerHTML = eua.git2Eu;
    conhecimento3.innerHTML = eua.git3Eu;
    conhecimento4.innerHTML = eua.git4Eu;
    conhecimento5.innerHTML = eua.git5Eu;
    conhecimento6.innerHTML = eua.git6Eu;
    conhecimento7.innerHTML = eua.git7Eu;
    conhecimento8.innerHTML = eua.git8Eu;
    conhecimento9.innerHTML = eua.git9Eu;
    titleConhecimento.innerHTML = eua.gitTitleEu;
  } else if (more.classList.contains("Gth")) {
    conhecimento1.innerHTML = eua.github1Eu;
    conhecimento2.innerHTML = eua.github2Eu;
    conhecimento3.innerHTML = eua.github3Eu;
    conhecimento4.innerHTML = eua.github4Eu;
    conhecimento5.innerHTML = eua.github5Eu;
    conhecimento6.innerHTML = eua.github6Eu;
    conhecimento7.innerHTML = eua.github7Eu;
    conhecimento8.innerHTML = eua.github8Eu;
    conhecimento9.innerHTML = eua.github9Eu;
    titleConhecimento.innerHTML = eua.githubTitleEu;
  } else if (more.classList.contains("Fgm")) {
    conhecimento1.innerHTML = eua.figma1Eu;
    conhecimento2.innerHTML = eua.figma2Eu;
    conhecimento3.innerHTML = eua.figma3Eu;
    conhecimento4.innerHTML = eua.figma4Eu;
    conhecimento5.innerHTML = eua.figma5Eu;
    conhecimento6.innerHTML = eua.figma6Eu;
    conhecimento7.innerHTML = eua.figma7Eu;
    conhecimento8.innerHTML = eua.figma8Eu;
    conhecimento9.innerHTML = eua.figma9Eu;
    titleConhecimento.innerHTML = eua.figmaTitleEu;
  } else if (more.classList.contains("Cnv")) {
    conhecimento1.innerHTML = eua.canva1Eu;
    conhecimento2.innerHTML = eua.canva2Eu;
    conhecimento3.innerHTML = eua.canva3Eu;
    conhecimento4.innerHTML = eua.canva4Eu;
    conhecimento5.innerHTML = eua.canva5Eu;
    conhecimento6.innerHTML = eua.canva6Eu;
    conhecimento7.innerHTML = eua.canva7Eu;
    conhecimento8.innerHTML = eua.canva8Eu;
    conhecimento9.innerHTML = eua.canva9Eu;
    titleConhecimento.innerHTML = eua.canvaTitleEu;
  }
  elementos.contact.innerHTML = eua.contact;
  elementos.titleSolo.innerHTML = eua.titleSolo;
  elementos.titleSlechi.innerHTML = eua.titleSlechi;
  elementos.titleRelogio.innerHTML = eua.titleRelogio;
  elementos.titleGenshin.innerHTML = eua.titleGenshin;
  elementos.titlePokemon.innerHTML = eua.titlePokemon;
  elementos.toastAlertDesenvolvi.innerHTML = eua.toastAlertDesenvolvi;
  elementos.btnAllProject.forEach((btnAllProjectText) => {
    btnAllProjectText.innerHTML = eua.btnAllProject;
  });
  elementos.yourNumber.innerHTML = eua.yourNumber;
  elementos.servicePrest.innerHTML = eua.servicePrest;
  elementos.servicePrestText.innerHTML = eua.servicePrestText;
  verificaCont();
 
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
  if (more.classList.contains("html")) {
    conhecimento1.innerHTML = brasil.html1Br;
    conhecimento2.innerHTML = brasil.html2Br;
    conhecimento3.innerHTML = brasil.html3Br;
    conhecimento4.innerHTML = brasil.html4Br;
    conhecimento5.innerHTML = brasil.html5Br;
    conhecimento6.innerHTML = brasil.html6Br;
    conhecimento7.innerHTML = brasil.html7Br;
    conhecimento8.innerHTML = brasil.html8Br;
    conhecimento9.innerHTML = brasil.html9Br;
    titleConhecimento.innerHTML = brasil.htmlTitleBr;
  } else if (more.classList.contains("css")) {
    conhecimento1.innerHTML = brasil.css1Br;
    conhecimento2.innerHTML = brasil.css2Br;
    conhecimento3.innerHTML = brasil.css3Br;
    conhecimento4.innerHTML = brasil.css4Br;
    conhecimento5.innerHTML = brasil.css5Br;
    conhecimento6.innerHTML = brasil.css6Br;
    conhecimento7.innerHTML = brasil.css7Br;
    conhecimento8.innerHTML = brasil.css8Br;
    conhecimento9.innerHTML = brasil.css9Br;
    titleConhecimento.innerHTML = brasil.cssTitleBr;
  } else if (more.classList.contains("javaScript")) {
    conhecimento1.innerHTML = brasil.js1Br;
    conhecimento2.innerHTML = brasil.js2Br;
    conhecimento3.innerHTML = brasil.js3Br;
    conhecimento4.innerHTML = brasil.js4Br;
    conhecimento5.innerHTML = brasil.js5Br;
    conhecimento6.innerHTML = brasil.js6Br;
    conhecimento7.innerHTML = brasil.js7Br;
    conhecimento8.innerHTML = brasil.js8Br;
    conhecimento9.innerHTML = brasil.js9Br;
    titleConhecimento.innerHTML = brasil.jsTitleBr;
  } else if (more.classList.contains("Gt")) {
    conhecimento1.innerHTML = brasil.git1Br;
    conhecimento2.innerHTML = brasil.git2Br;
    conhecimento3.innerHTML = brasil.git3Br;
    conhecimento4.innerHTML = brasil.git4Br;
    conhecimento5.innerHTML = brasil.git5Br;
    conhecimento6.innerHTML = brasil.git6Br;
    conhecimento7.innerHTML = brasil.git7Br;
    conhecimento8.innerHTML = brasil.git8Br;
    conhecimento9.innerHTML = brasil.git9Br;
    titleConhecimento.innerHTML = brasil.gitTitleBr;
  } else if (more.classList.contains("Gth")) {
    conhecimento1.innerHTML = brasil.github1Br;
    conhecimento2.innerHTML = brasil.github2Br;
    conhecimento3.innerHTML = brasil.github3Br;
    conhecimento4.innerHTML = brasil.github4Br;
    conhecimento5.innerHTML = brasil.github5Br;
    conhecimento6.innerHTML = brasil.github6Br;
    conhecimento7.innerHTML = brasil.github7Br;
    conhecimento8.innerHTML = brasil.github8Br;
    conhecimento9.innerHTML = brasil.github9Br;
    titleConhecimento.innerHTML = brasil.githubTitleBr;
  } else if (more.classList.contains("Fgm")) {
    conhecimento1.innerHTML = brasil.figma1Br;
    conhecimento2.innerHTML = brasil.figma2Br;
    conhecimento3.innerHTML = brasil.figma3Br;
    conhecimento4.innerHTML = brasil.figma4Br;
    conhecimento5.innerHTML = brasil.figma5Br;
    conhecimento6.innerHTML = brasil.figma6Br;
    conhecimento7.innerHTML = brasil.figma7Br;
    conhecimento8.innerHTML = brasil.figma8Br;
    conhecimento9.innerHTML = brasil.figma9Br;
    titleConhecimento.innerHTML = brasil.figmaTitleBr;
  } else if (more.classList.contains("Cnv")) {
    conhecimento1.innerHTML = brasil.canva1Br;
    conhecimento2.innerHTML = brasil.canva2Br;
    conhecimento3.innerHTML = brasil.canva3Br;
    conhecimento4.innerHTML = brasil.canva4Br;
    conhecimento5.innerHTML = brasil.canva5Br;
    conhecimento6.innerHTML = brasil.canva6Br;
    conhecimento7.innerHTML = brasil.canva7Br;
    conhecimento8.innerHTML = brasil.canva8Br;
    conhecimento9.innerHTML = brasil.canva9Br;
    titleConhecimento.innerHTML = brasil.canvaTitleBr;
  }
  elementos.titleSlechi.innerHTML = brasil.titleSlechi;
  elementos.contact.innerHTML = brasil.contact;
  elementos.titleSolo.innerHTML = brasil.titleSolo;
  elementos.titleRelogio.innerHTML = brasil.titleRelogio;
  elementos.titleGenshin.innerHTML = brasil.titleGenshin;
  elementos.titlePokemon.innerHTML = brasil.titlePokemon;
  elementos.toastAlertDesenvolvi.innerHTML = brasil.toastAlertDesenvolvi;
  elementos.btnAllProject.forEach((btnAllProjectText) => {
    btnAllProjectText.innerHTML = brasil.btnAllProject;
  });
  elementos.yourNumber.innerHTML = brasil.yourNumber;
  elementos.servicePrest.innerHTML = brasil.servicePrest;
  elementos.servicePrestText.innerHTML = brasil.servicePrestText;
  verificaCont();
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
  if (more.classList.contains("html")) {
    conhecimento1.innerHTML = spain.html1Es;
    conhecimento2.innerHTML = spain.html2Es;
    conhecimento3.innerHTML = spain.html3Es;
    conhecimento4.innerHTML = spain.html4Es;
    conhecimento5.innerHTML = spain.html5Es;
    conhecimento6.innerHTML = spain.html6Es;
    conhecimento7.innerHTML = spain.html7Es;
    conhecimento8.innerHTML = spain.html8Es;
    conhecimento9.innerHTML = spain.html9Es;
    titleConhecimento.innerHTML = spain.htmlTitleEs;
  } else if (more.classList.contains("css")) {
    conhecimento1.innerHTML = spain.css1Es;
    conhecimento2.innerHTML = spain.css2Es;
    conhecimento3.innerHTML = spain.css3Es;
    conhecimento4.innerHTML = spain.css4Es;
    conhecimento5.innerHTML = spain.css5Es;
    conhecimento6.innerHTML = spain.css6Es;
    conhecimento7.innerHTML = spain.css7Es;
    conhecimento8.innerHTML = spain.css8Es;
    conhecimento9.innerHTML = spain.css9Es;
    titleConhecimento.innerHTML = spain.cssTitleEs;
  } else if (more.classList.contains("javaScript")) {
    conhecimento1.innerHTML = spain.js1Es;
    conhecimento2.innerHTML = spain.js2Es;
    conhecimento3.innerHTML = spain.js3Es;
    conhecimento4.innerHTML = spain.js4Es;
    conhecimento5.innerHTML = spain.js5Es;
    conhecimento6.innerHTML = spain.js6Es;
    conhecimento7.innerHTML = spain.js7Es;
    conhecimento8.innerHTML = spain.js8Es;
    conhecimento9.innerHTML = spain.js9Es;
    titleConhecimento.innerHTML = spain.jsTitleEs;
  } else if (more.classList.contains("Gt")) {
    conhecimento1.innerHTML = spain.git1Es;
    conhecimento2.innerHTML = spain.git2Es;
    conhecimento3.innerHTML = spain.git3Es;
    conhecimento4.innerHTML = spain.git4Es;
    conhecimento5.innerHTML = spain.git5Es;
    conhecimento6.innerHTML = spain.git6Es;
    conhecimento7.innerHTML = spain.git7Es;
    conhecimento8.innerHTML = spain.git8Es;
    conhecimento9.innerHTML = spain.git9Es;
    titleConhecimento.innerHTML = spain.gitTitleEs;
  } else if (more.classList.contains("Gth")) {
    conhecimento1.innerHTML = spain.github1Es;
    conhecimento2.innerHTML = spain.github2Es;
    conhecimento3.innerHTML = spain.github3Es;
    conhecimento4.innerHTML = spain.github4Es;
    conhecimento5.innerHTML = spain.github5Es;
    conhecimento6.innerHTML = spain.github6Es;
    conhecimento7.innerHTML = spain.github7Es;
    conhecimento8.innerHTML = spain.github8Es;
    conhecimento9.innerHTML = spain.github9Es;
    titleConhecimento.innerHTML = spain.githubTitleEs;
  } else if (more.classList.contains("Fgm")) {
    conhecimento1.innerHTML = spain.figma1Es;
    conhecimento2.innerHTML = spain.figma2Es;
    conhecimento3.innerHTML = spain.figma3Es;
    conhecimento4.innerHTML = spain.figma4Es;
    conhecimento5.innerHTML = spain.figma5Es;
    conhecimento6.innerHTML = spain.figma6Es;
    conhecimento7.innerHTML = spain.figma7Es;
    conhecimento8.innerHTML = spain.figma8Es;
    conhecimento9.innerHTML = spain.figma9Es;
    titleConhecimento.innerHTML = spain.figmaTitleEs;
  } else if (more.classList.contains("Cnv")) {
    conhecimento1.innerHTML = spain.canva1Es;
    conhecimento2.innerHTML = spain.canva2Es;
    conhecimento3.innerHTML = spain.canva3Es;
    conhecimento4.innerHTML = spain.canva4Es;
    conhecimento5.innerHTML = spain.canva5Es;
    conhecimento6.innerHTML = spain.canva6Es;
    conhecimento7.innerHTML = spain.canva7Es;
    conhecimento8.innerHTML = spain.canva8Es;
    conhecimento9.innerHTML = spain.canva9Es;
    titleConhecimento.innerHTML = spain.canvaTitleEs;
  }
  elementos.contact.innerHTML = spain.contact;
  elementos.titleSolo.innerHTML = spain.titleSolo;
  elementos.titleRelogio.innerHTML = spain.titleRelogio;
  elementos.titleGenshin.innerHTML = spain.titleGenshin;
  elementos.titlePokemon.innerHTML = spain.titlePokemon;
  elementos.titleSlechi.innerHTML = spain.titleSlechi;
  elementos.toastAlertDesenvolvi.innerHTML = spain.toastAlertDesenvolvi;
  elementos.btnAllProject.forEach((btnAllProjectText) => {
    btnAllProjectText.innerHTML = spain.btnAllProject;
  });
  elementos.yourNumber.innerHTML = spain.yourNumber;
  elementos.servicePrest.innerHTML = spain.servicePrest;
  elementos.servicePrestText.innerHTML = spain.servicePrestText;
  verificaCont();
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
  if (more.classList.contains("html")) {
    conhecimento1.innerHTML = franca.html1Fr;
    conhecimento2.innerHTML = franca.html2Fr;
    conhecimento3.innerHTML = franca.html3Fr;
    conhecimento4.innerHTML = franca.html4Fr;
    conhecimento5.innerHTML = franca.html5Fr;
    conhecimento6.innerHTML = franca.html6Fr;
    conhecimento7.innerHTML = franca.html7Fr;
    conhecimento8.innerHTML = franca.html8Fr;
    conhecimento9.innerHTML = franca.html9Fr;
    titleConhecimento.innerHTML = franca.htmlTitleFr;
  } else if (more.classList.contains("css")) {
    conhecimento1.innerHTML = franca.css1Fr;
    conhecimento2.innerHTML = franca.css2Fr;
    conhecimento3.innerHTML = franca.css3Fr;
    conhecimento4.innerHTML = franca.css4Fr;
    conhecimento5.innerHTML = franca.css5Fr;
    conhecimento6.innerHTML = franca.css6Fr;
    conhecimento7.innerHTML = franca.css7Fr;
    conhecimento8.innerHTML = franca.css8Fr;
    conhecimento9.innerHTML = franca.css9Fr;
    titleConhecimento.innerHTML = franca.cssTitleFr;
  } else if (more.classList.contains("javaScript")) {
    conhecimento1.innerHTML = franca.js1Fr;
    conhecimento2.innerHTML = franca.js2Fr;
    conhecimento3.innerHTML = franca.js3Fr;
    conhecimento4.innerHTML = franca.js4Fr;
    conhecimento5.innerHTML = franca.js5Fr;
    conhecimento6.innerHTML = franca.js6Fr;
    conhecimento7.innerHTML = franca.js7Fr;
    conhecimento8.innerHTML = franca.js8Fr;
    conhecimento9.innerHTML = franca.js9Fr;
    titleConhecimento.innerHTML = franca.jsTitleFr;
  } else if (more.classList.contains("Gt")) {
    conhecimento1.innerHTML = franca.git1Fr;
    conhecimento2.innerHTML = franca.git2Fr;
    conhecimento3.innerHTML = franca.git3Fr;
    conhecimento4.innerHTML = franca.git4Fr;
    conhecimento5.innerHTML = franca.git5Fr;
    conhecimento6.innerHTML = franca.git6Fr;
    conhecimento7.innerHTML = franca.git7Fr;
    conhecimento8.innerHTML = franca.git8Fr;
    conhecimento9.innerHTML = franca.git9Fr;
    titleConhecimento.innerHTML = franca.gitTitleFr;
  } else if (more.classList.contains("Gth")) {
    conhecimento1.innerHTML = franca.github1Fr;
    conhecimento2.innerHTML = franca.github2Fr;
    conhecimento3.innerHTML = franca.github3Fr;
    conhecimento4.innerHTML = franca.github4Fr;
    conhecimento5.innerHTML = franca.github5Fr;
    conhecimento6.innerHTML = franca.github6Fr;
    conhecimento7.innerHTML = franca.github7Fr;
    conhecimento8.innerHTML = franca.github8Fr;
    conhecimento9.innerHTML = franca.github9Fr;
    titleConhecimento.innerHTML = franca.githubTitleFr;
  } else if (more.classList.contains("Fgm")) {
    conhecimento1.innerHTML = franca.figma1Fr;
    conhecimento2.innerHTML = franca.figma2Fr;
    conhecimento3.innerHTML = franca.figma3Fr;
    conhecimento4.innerHTML = franca.figma4Fr;
    conhecimento5.innerHTML = franca.figma5Fr;
    conhecimento6.innerHTML = franca.figma6Fr;
    conhecimento7.innerHTML = franca.figma7Fr;
    conhecimento8.innerHTML = franca.figma8Fr;
    conhecimento9.innerHTML = franca.figma9Fr;
    titleConhecimento.innerHTML = franca.figmaTitleFr;
  } else if (more.classList.contains("Cnv")) {
    conhecimento1.innerHTML = franca.canva1Fr;
    conhecimento2.innerHTML = franca.canva2Fr;
    conhecimento3.innerHTML = franca.canva3Fr;
    conhecimento4.innerHTML = franca.canva4Fr;
    conhecimento5.innerHTML = franca.canva5Fr;
    conhecimento6.innerHTML = franca.canva6Fr;
    conhecimento7.innerHTML = franca.canva7Fr;
    conhecimento8.innerHTML = franca.canva8Fr;
    conhecimento9.innerHTML = franca.canva9Fr;
    titleConhecimento.innerHTML = franca.canvaTitleFr;
  }
  elementos.contact.innerHTML = franca.contact;
  elementos.titleSolo.innerHTML = franca.titleSolo;
  elementos.titleRelogio.innerHTML = franca.titleRelogio;
  elementos.titleGenshin.innerHTML = franca.titleGenshin;
  elementos.titlePokemon.innerHTML = franca.titlePokemon;
  elementos.titleSlechi.innerHTML = franca.titleSlechi;
  elementos.toastAlertDesenvolvi.innerHTML = franca.toastAlertDesenvolvi;
  elementos.btnAllProject.forEach((btnAllProjectText) => {
    btnAllProjectText.innerHTML = franca.btnAllProject;
  });
  elementos.yourNumber.innerHTML = franca.yourNumber;
  elementos.servicePrest.innerHTML = franca.servicePrest;
  elementos.servicePrestText.innerHTML = franca.servicePrestText;
  verificaCont();
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
  if (more.classList.contains("html")) {
    conhecimento1.innerHTML = china.html1Ch;
    conhecimento2.innerHTML = china.html2Ch;
    conhecimento3.innerHTML = china.html3Ch;
    conhecimento4.innerHTML = china.html4Ch;
    conhecimento5.innerHTML = china.html5Ch;
    conhecimento6.innerHTML = china.html6Ch;
    conhecimento7.innerHTML = china.html7Ch;
    conhecimento8.innerHTML = china.html8Ch;
    conhecimento9.innerHTML = china.html9Ch;
    titleConhecimento.innerHTML = china.htmlTitleCh;
  } else if (more.classList.contains("css")) {
    conhecimento1.innerHTML = china.css1Ch;
    conhecimento2.innerHTML = china.css2Ch;
    conhecimento3.innerHTML = china.css3Ch;
    conhecimento4.innerHTML = china.css4Ch;
    conhecimento5.innerHTML = china.css5Ch;
    conhecimento6.innerHTML = china.css6Ch;
    conhecimento7.innerHTML = china.css7Ch;
    conhecimento8.innerHTML = china.css8Ch;
    conhecimento9.innerHTML = china.css9Ch;
    titleConhecimento.innerHTML = china.cssTitleCh;
  } else if (more.classList.contains("javaScript")) {
    conhecimento1.innerHTML = china.js1Ch;
    conhecimento2.innerHTML = china.js2Ch;
    conhecimento3.innerHTML = china.js3Ch;
    conhecimento4.innerHTML = china.js4Ch;
    conhecimento5.innerHTML = china.js5Ch;
    conhecimento6.innerHTML = china.js6Ch;
    conhecimento7.innerHTML = china.js7Ch;
    conhecimento8.innerHTML = china.js8Ch;
    conhecimento9.innerHTML = china.js9Ch;
    titleConhecimento.innerHTML = china.jsTitleCh;
  } else if (more.classList.contains("Gt")) {
    conhecimento1.innerHTML = china.git1Ch;
    conhecimento2.innerHTML = china.git2Ch;
    conhecimento3.innerHTML = china.git3Ch;
    conhecimento4.innerHTML = china.git4Ch;
    conhecimento5.innerHTML = china.git5Ch;
    conhecimento6.innerHTML = china.git6Ch;
    conhecimento7.innerHTML = china.git7Ch;
    conhecimento8.innerHTML = china.git8Ch;
    conhecimento9.innerHTML = china.git9Ch;
    titleConhecimento.innerHTML = china.gitTitleCh;
  } else if (more.classList.contains("Gth")) {
    conhecimento1.innerHTML = china.github1Ch;
    conhecimento2.innerHTML = china.github2Ch;
    conhecimento3.innerHTML = china.github3Ch;
    conhecimento4.innerHTML = china.github4Ch;
    conhecimento5.innerHTML = china.github5Ch;
    conhecimento6.innerHTML = china.github6Ch;
    conhecimento7.innerHTML = china.github7Ch;
    conhecimento8.innerHTML = china.github8Ch;
    conhecimento9.innerHTML = china.github9Ch;
    titleConhecimento.innerHTML = china.githubTitleCh;
  } else if (more.classList.contains("Fgm")) {
    conhecimento1.innerHTML = china.figma1Ch;
    conhecimento2.innerHTML = china.figma2Ch;
    conhecimento3.innerHTML = china.figma3Ch;
    conhecimento4.innerHTML = china.figma4Ch;
    conhecimento5.innerHTML = china.figma5Ch;
    conhecimento6.innerHTML = china.figma6Ch;
    conhecimento7.innerHTML = china.figma7Ch;
    conhecimento8.innerHTML = china.figma8Ch;
    conhecimento9.innerHTML = china.figma9Ch;
    titleConhecimento.innerHTML = china.figmaTitleCh;
  } else if (more.classList.contains("Cnv")) {
    conhecimento1.innerHTML = china.canva1Ch;
    conhecimento2.innerHTML = china.canva2Ch;
    conhecimento3.innerHTML = china.canva3Ch;
    conhecimento4.innerHTML = china.canva4Ch;
    conhecimento5.innerHTML = china.canva5Ch;
    conhecimento6.innerHTML = china.canva6Ch;
    conhecimento7.innerHTML = china.canva7Ch;
    conhecimento8.innerHTML = china.canva8Ch;
    conhecimento9.innerHTML = china.canva9Ch;
    titleConhecimento.innerHTML = china.canvaTitleCh;
  }
  elementos.contact.innerHTML = china.contact;
  elementos.titleSolo.innerHTML = china.titleSolo;
  elementos.titleRelogio.innerHTML = china.titleRelogio;
  elementos.titleGenshin.innerHTML = china.titleGenshin;
  elementos.titlePokemon.innerHTML = china.titlePokemon;
  elementos.titleSlechi.innerHTML = china.titleSlechi;
  elementos.toastAlertDesenvolvi.innerHTML = china.toastAlertDesenvolvi;
  elementos.btnAllProject.forEach((btnAllProjectText) => {
    btnAllProjectText.innerHTML = china.btnAllProject;
  });
  elementos.yourNumber.innerHTML = china.yourNumber;
  elementos.servicePrest.innerHTML = china.servicePrest;
  elementos.servicePrestText.innerHTML = china.servicePrestText;
  verificaCont();
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


//Função de slide de projetos e serviços
const sliderServices = document.querySelector(".swiperServices");
let isDownServices = false;
let startXServices;
let scrollLeftServices;

// Eventos de mouse
sliderServices.addEventListener("mousedown", (ev) => {
  isDownServices = true;
  sliderServices.classList.add("active");
  startXServices = ev.pageX - sliderServices.offsetLeft;
  scrollLeftServices = sliderServices.scrollLeft;
});

sliderServices.addEventListener("mouseleave", () => {
  isDownServices = false;
  sliderServices.classList.remove("active");
});

sliderServices.addEventListener("mouseup", () => {
  isDownServices = false;
  sliderServices.classList.remove("active");
});

sliderServices.addEventListener("mousemove", (evs) => {
  if (!isDownServices) return; // Parar se o mouse não estiver pressionado
  evs.preventDefault();
  const x = evs.pageX - sliderServices.offsetLeft;
  const walk = (x - startXServices) * 2; // Multiplica para ajustar a velocidade
  sliderServices.scrollLeft = scrollLeftServices - walk;
});

// Eventos de toque
sliderServices.addEventListener("touchstart", (evsm) => {
  isDownServices = true;
  sliderServices.classList.add("active");
  startXServices = evsm.touches[0].pageX - sliderServices.offsetLeft;
  scrollLeftServices = sliderServices.scrollLeft;
});

sliderServices.addEventListener("touchend", () => {
  isDownServices = false;
  sliderServices.classList.remove("active");
});

sliderServices.addEventListener("touchmove", (evms) => {
  if (!isDownServices) return; // Parar se não houver toque ativo
  evms.preventDefault();
  const x = evms.touches[0].pageX - sliderServices.offsetLeft;
  const walk = (x - startXServices) * 2; // Multiplica para ajustar a velocidade
  sliderServices.scrollLeft = scrollLeftServices - walk;
});

sliderServices.addEventListener("wheel", (e) => {
  if (e.deltaY !== 0) {
    return;
  }
  
  e.preventDefault();
  sliderServices.scrollLeft += e.deltaX || e.deltaY;
});

//Função mostrar mais certificados
const buttonCertificado = document.querySelector(".certificados button");
const certificados = document.querySelector(".certificados");
const certificadosOcultos = document.querySelectorAll(".certificadoOculto");
const buttonSpan = document.querySelector(".certificados button span");

let isExpanded = false;

buttonCertificado.addEventListener("click", () => {
  if (!isExpanded) {
    // Expande os certificados
    const fullHeight = "auto";
    certificados.style.height = fullHeight;

    certificadosOcultos.forEach((certificado) => {
      setTimeout(() => {
        certificado.classList.remove("certificadoOculto");
        certificado.classList.add("certificado");
      }, 100);
    });

    buttonSpan.innerHTML = "keyboard_arrow_up";
    isExpanded = true;
  } else {
    // Colapsa os certificados
    certificados.style.height = "150vh"; // Altura reduzida fixa

    certificadosOcultos.forEach((certificado) => {
      setTimeout(() => {
        certificado.classList.add("certificadoOculto");
        certificado.classList.remove("certificado");
      }, 100);
    });

    buttonSpan.innerHTML = "keyboard_arrow_down";
    isExpanded = false;
  }
});

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


