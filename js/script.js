// Importações
import { ToastFunction, MostrarImagens } from "../../global/js/script.js";

// Assim que carregar a página já cria um toast e adiciona a própria página para poder ser manipulado pelo DOM
document.addEventListener('DOMContentLoaded', () => {
fbq('track', 'PageViewPortfolio');

  // Cria a caixa para exibição de imagens e outros elementos
  const boxImages = new MostrarImagens();
    
  let jsonImages = {
     logo: '',
      title: '',
      text: [
        "",
      ],
      imagens: [''],
    
  };
  localStorage.setItem('jsonImages', JSON.stringify(jsonImages));
  // Cria um toast para quando precisar exibir uma mensagem 
  const toastElement = new ToastFunction(localStorage.getItem("lang"));
  toastElement.createToast();

  let toast = document.querySelector(".toast");

  const allButtonProject = document.querySelector(".buttonAllProjects");

  let clicks = 0;

  const contClick = () => {
    clicks++
    allButtonProject.setAttribute('disabled', '');
    if(clicks == 1) {
      toastElement.openToast();
      setTimeout(() => {
        allButtonProject.removeAttribute('disabled');
        clicks = 0;
      }, 6000);
    }
  }

  allButtonProject.addEventListener("click", () => {
    contClick();
  });

  // Função para exibição dos  certificados

  const cnpq = document.querySelector('.btnCnpq');
  const unesp = document.querySelector('.btnUnesp');
  const plenus = document.querySelector('.btnPlenus');

  cnpq.addEventListener('click', () => {
    // Json com os dados que seram exibidos para o usuário
    let jsonImg = {
      logo: './image/icon/cnpq.svg',
      title: 'Descrição sobre o certificado',
      titleEU: 'Description of the certificate',
      titleES: 'Descripción del certificado',
      titleFR: 'Description du certificat',
      titleCH: '证书说明',
      text: [
        "Esse certificado foi conquistado durante o desenvolvimento do nosso projeto de TCC, que consistia na criação de um site voltado para a adoção de pets. A plataforma permitia que usuários adotassem ou colocassem animais para adoção, além de oferecer a opção de assinar uma caixinha surpresa mensal, com produtos personalizados para cada pet. Se tiver mais interesse sobre ele basta acessar o link abaixo <br><br><a href='https://eryckborges.github.io/Dev-Escorpion/projects/aumigosPets/' target='_blank'>AuMigos Pet's ",
      ],
      textEU: [
        "This certificate was earned during the development of our graduation project, which consisted of creating a website focused on pet adoption. The platform allowed users to adopt animals or put them up for adoption, as well as subscribe to a monthly surprise box with personalized products for each pet. If you are interested in learning more, just access the link below:<br><br><a href='https://eryckborges.github.io/Dev-Escorpion/projects/aumigosPets/' target='_blank'>AuMigos Pet's</a>",
      ],
      textES: [
        "Este certificado fue obtenido durante el desarrollo de nuestro proyecto de fin de curso, que consistió en la creación de un sitio web enfocado en la adopción de mascotas. La plataforma permitía a los usuarios adoptar animales o ponerlos en adopción, además de ofrecer la opción de suscribirse a una caja sorpresa mensual con productos personalizados para cada mascota. Si tienes más interés, simplemente accede al enlace abajo:<br><br><a href='https://eryckborges.github.io/Dev-Escorpion/projects/aumigosPets/' target='_blank'>AuMigos Pet's</a>",
      ],
      textFR: [
        "Ce certificat a été obtenu lors du développement de notre projet de fin d’études, qui consistait à créer un site web dédié à l’adoption d’animaux. La plateforme permettait aux utilisateurs d’adopter ou de proposer des animaux à l’adoption, ainsi que de s’abonner à une boîte surprise mensuelle contenant des produits personnalisés pour chaque animal. Pour en savoir plus, il vous suffit d’accéder au lien ci-dessous :<br><br><a href='https://eryckborges.github.io/Dev-Escorpion/projects/aumigosPets/' target='_blank'>AuMigos Pet's</a>",
      ],
      textCH: [
        "该证书是在我们毕业项目开发过程中获得的，该项目旨在创建一个专注于宠物领养的网站。平台允许用户领养动物或发布待领养的宠物，并提供订阅每月惊喜礼盒的选项，礼盒内包含为每只宠物量身定制的产品。若您想了解更多，请点击下方链接：<br><br><a href='https://eryckborges.github.io/Dev-Escorpion/projects/aumigosPets/' target='_blank'>AuMigos Pet's</a>"
      ],
      imagens: ['./image/certificados/cotuca.png'],
    }

    localStorage.setItem('jsonImages', JSON.stringify(jsonImg));
    boxImages.openBox();
    boxImages.closedBox();
    boxImages.nextElement();
    boxImages.backElement();
  });

  // Abre a caixa de imagens para exibir os certificados da unesp
  unesp.addEventListener('click', () => {
    // Json com os dados que seram exibidos para o usuário
    let jsonImg = {
      logo: './image/icon/unesp.png',
      title: 'Descrição sobre o certificado',
      titleEU: 'Description of the certificate',
      titleES: 'Descripción del certificado',
      titleFR: 'Description du certificat',
      titleCH: '证书说明',
      text: [
        "Esse certificado da UNESP foi conquistado durante uma semana exclusiva sobre tecnologia. Aprendi a criar animações 2D usando o GIMP, integrá-las ao HTML, desenvolver joguinhos e muito mais. Foi uma semana incrível da qual sentirei saudades.", 
        "Esse certificado da UNESP foi conquistado durante uma semana exclusiva sobre tecnologia. Aprendi a criar animações 2D usando o GIMP, integrá-las ao HTML, desenvolver joguinhos e muito mais. Foi uma semana incrível da qual sentirei saudades.",
        "Já esse outro certificado foi da SETINF — a Semana de Tecnologia. Durante o evento, tive contato com diversos temas como impressoras 3D, programação em Python e outros recursos bastante interessantes.",
        "Já esse outro certificado foi da SETINF — a Semana de Tecnologia. Durante o evento, tive contato com diversos temas como impressoras 3D, programação em Python e outros recursos bastante interessantes."
      ],
      textEU: [
        "This UNESP certificate was earned during an exclusive technology week. I learned to create 2D animations using GIMP, integrate them into HTML, develop small games, and much more. It was an amazing week that I will miss.",
        "This UNESP certificate was earned during an exclusive technology week. I learned to create 2D animations using GIMP, integrate them into HTML, develop small games, and much more. It was an amazing week that I will miss.",
        "This other certificate is from SETINF — the Technology Week. During the event, I explored several topics such as 3D printers, Python programming, and other very interesting resources.",
        "This other certificate is from SETINF — the Technology Week. During the event, I explored several topics such as 3D printers, Python programming, and other very interesting resources."
      ],
      textES: [
        "Este certificado de la UNESP fue obtenido durante una semana exclusiva dedicada a la tecnología. Aprendí a crear animaciones 2D con GIMP, integrarlas en HTML, desarrollar pequeños juegos y mucho más. Fue una semana increíble que extrañaré.",
        "Este certificado de la UNESP fue obtenido durante una semana exclusiva dedicada a la tecnología. Aprendí a crear animaciones 2D con GIMP, integrarlas en HTML, desarrollar pequeños juegos y mucho más. Fue una semana increíble que extrañaré.",
        "Este otro certificado es de la SETINF — la Semana de Tecnología. Durante el evento, tuve contacto con varios temas como impresoras 3D, programación en Python y otros recursos muy interesantes.",
        "Este otro certificado es de la SETINF — la Semana de Tecnología. Durante el evento, tuve contacto con varios temas como impresoras 3D, programación en Python y otros recursos muy interesantes."
      ],
      textFR: [
        "Ce certificat de l’UNESP a été obtenu lors d’une semaine exclusive dédiée à la technologie. J’ai appris à créer des animations 2D avec GIMP, à les intégrer dans du HTML, à développer de petits jeux, et bien plus encore. Ce fut une semaine incroyable qui me manquera.",
        "Ce certificat de l’UNESP a été obtenu lors d’une semaine exclusive dédiée à la technologie. J’ai appris à créer des animations 2D avec GIMP, à les intégrer dans du HTML, à développer de petits jeux, et bien plus encore. Ce fut une semaine incroyable qui me manquera.",
        "Cet autre certificat provient de la SETINF — la Semaine de la Technologie. Pendant l'événement, j’ai découvert plusieurs sujets tels que les imprimantes 3D, la programmation Python et d’autres ressources très intéressantes.",
        "Cet autre certificat provient de la SETINF — la Semaine de la Technologie. Pendant l'événement, j’ai découvert plusieurs sujets tels que les imprimantes 3D, la programmation Python et d’autres ressources très intéressantes."
      ],
      textCH: [
        "这个来自 UNESP 的证书是在一场以科技为主题的特别活动周中获得的。我学习了如何使用 GIMP 创建 2D 动画、将它们整合到 HTML 中、开发小游戏等内容。这是令人难忘的一周，我会非常怀念。",
        "这个来自 UNESP 的证书是在一场以科技为主题的特别活动周中获得的。我学习了如何使用 GIMP 创建 2D 动画、将它们整合到 HTML 中、开发小游戏等内容。这是令人难忘的一周，我会非常怀念。",
        "而另一个证书来自 SETINF —— 技术周。在活动期间，我接触到了多个主题，如 3D 打印机、Python 编程以及其他非常有趣的技术资源。",
        "而另一个证书来自 SETINF —— 技术周。在活动期间，我接触到了多个主题，如 3D 打印机、Python 编程以及其他非常有趣的技术资源。"
      ],
      imagens: ['./image/certificados/unesp-front.png', './image/certificados/unesp-back.png', './image/certificados/setinf-front.png', './image/certificados/setinf-back.png'],
    };
  
    localStorage.setItem('jsonImages', JSON.stringify(jsonImg));
    boxImages.openBox();
    boxImages.closedBox();
    boxImages.nextElement();
    boxImages.backElement();
  });

  // Abre a caixa de imagens para exibir os certificados da unesp
  plenus.addEventListener('click', () => {
    // Json com os dados que seram exibidos para o usuário
    let jsonImg = {
      logo: './image/icon/plenus.png',
      title: 'Descrição sobre o certificado',
      titleEU: 'Description of the certificate',
      titleES: 'Descripción del certificado',
      titleFR: 'Description du certificat',
      titleCH: '证书说明',
      text: [
        "Conquistei esse certificado para aprofundar meus conhecimentos sobre aplicativos usados em design gráfico — uma área que gosto de explorar e personalizar de várias formas."
      ],
      textEU: [
        "I earned this certificate to deepen my knowledge of applications used in graphic design — an area I enjoy exploring and customizing in many different ways."
      ],
      textES: [
        "Obtuve este certificado para profundizar mis conocimientos sobre aplicaciones utilizadas en el diseño gráfico, un área que me gusta explorar y personalizar de varias maneras.",
      ],
      textFR: [
        "J’ai obtenu ce certificat pour approfondir mes connaissances des applications utilisées en design graphique — un domaine que j’aime explorer et personnaliser de différentes manières.",
      ],
      textCH: [
        "我获得此证书是为了加深对平面设计所使用应用程序的了解，这是一个我喜欢以多种方式探索和个性化的领域"
      ],
      imagens: ['./image/certificados/plenus.png'],
    };
  
    localStorage.setItem('jsonImages', JSON.stringify(jsonImg));
    boxImages.openBox();
    boxImages.closedBox();
    boxImages.nextElement();
    boxImages.backElement();
  });
}); 

let typedInstance; // Variável global para armazenar a instância de Typed.js

// Função da animação de apresentação
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
  titlePokemon: "Pokedex and Games",
  titleSlechi: "Ice Cream Catalog",
  titleAumigos: "Graduation Project - AuMigos Pet's",
  unespDesc: 'High School and Computer Technician',
  dioDesc: 'Bootcamps and Other Courses',
  cnpqDesc: '30th Young Scientist Award',
  plenusDesc: 'Office Package, Design, and Much More',
  btnCertificados: 'Certificates',
  // btnAllProject: "See all projects",
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
  titleSlechi: "Catalogo de Sorvetes",
  titleAumigos: "TCC - AuMigos Pet's",
  unespDesc: 'Ensino médio e Técnico em Informática',
  dioDesc: 'Bootcamps e Outros Cursos',
  cnpqDesc: '30º Prêmio Jovem Cientista',
  plenusDesc: 'Pacote Office, Design e muito mais...',
  btnCertificados: 'Certificados',
  // btnAllProject: "Veja todos os projetos",
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
  titlePokemon: "Pokedex y Juegos",
  titleSlechi: "Catálogo de Helados",
  titleAumigos: "Trabajo de Fin de Curso - AuMigos Pet's",
  unespDesc: 'Secundaria y Técnico en Informática',
  dioDesc: 'Bootcamps y Otros Cursos',
  cnpqDesc: '30º Premio Joven Científico',
  plenusDesc: 'Paquete Office, Diseño y Mucho Más',
  btnCertificados: 'Certificados',
  // btnAllProject: "Ver todos los proyectos",
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
  titleSlechi: "Catalogue de Glaces",
  titleAumigos: "Projet de Fin d'Études - AuMigos Pet's",
  unespDesc: 'Lycée et Technicien en Informatique',
  dioDesc: 'Bootcamps et Autres Cours',
  cnpqDesc: '30e Prix Jeune Scientifique',
  plenusDesc: 'Pack Office, Design et Bien Plus',
  btnCertificados: 'Certificats',
notConhecimento: "de connaissance <br> que je ne possède pas",
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
  titleSlechi: "冰淇淋目录",
  titlePokemon: "宝可梦图鉴与游戏",
  titleAumigos: "毕业项目 - AuMigos Pet's",
  unespDesc: '高中与计算机技术员课程',
  dioDesc: '训练营和其他课程',
  cnpqDesc: '第30届青年科学家奖',
  plenusDesc: 'Office 套件、设计及更多内容',
  btnCertificados: '证书',
  // btnAllProject: "查看所有项目",
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
  titlePokemon: document.querySelector(".pokemon p"),
  titleSlechi: document.querySelector(".slechi p"),
  titleAumigos: document.querySelector(".aumigos p"),
  unespDesc: document.querySelector(".unesp"),
  dioDesc: document.querySelector(".dio"),
  cnpqDesc: document.querySelector(".cnpq"),
  plenusDesc: document.querySelector(".plenus"),
  btnCertificados: document.querySelectorAll(".btnCertificados"),
  // btnAllProject: document.querySelectorAll(".btnAllProject"),
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
  elementos.unespDesc.innerHTML = eua.unespDesc;
  elementos.dioDesc.innerHTML = eua.dioDesc;
  elementos.cnpqDesc.innerHTML = eua.cnpqDesc;
  elementos.plenusDesc.innerHTML = eua.plenusDesc;
  elementos.btnCertificados.forEach((textBtnCertificado) => {
    textBtnCertificado.innerHTML = eua.btnCertificados;
  })
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
  elementos.titlePokemon.innerHTML = eua.titlePokemon;
  elementos.titleAumigos.innerHTML = eua.titleAumigos;
  // elementos.btnAllProject.forEach((btnAllProjectText) => {
  //   btnAllProjectText.innerHTML = eua.btnAllProject;
  // });
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
   elementos.unespDesc.innerHTML = brasil.unespDesc;
  elementos.dioDesc.innerHTML = brasil.dioDesc;
  elementos.cnpqDesc.innerHTML = brasil.cnpqDesc;
  elementos.plenusDesc.innerHTML = brasil.plenusDesc;
  elementos.ferramentas.innerHTML = brasil.ferramentas;
  elementos.tecnologias.innerHTML = brasil.tecnologias;
  elementos.certificado.innerHTML = brasil.certificado;
  elementos.avaliacaoTitle.innerHTML = brasil.avaliacaoTitle;
  elementos.btnCertificados.forEach((textBtnCertificado) => {
    textBtnCertificado.innerHTML = brasil.btnCertificados;
  })
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
  elementos.titlePokemon.innerHTML = brasil.titlePokemon;
  elementos.titleAumigos.innerHTML = brasil.titleAumigos;
  // elementos.btnAllProject.forEach((btnAllProjectText) => {
  //   btnAllProjectText.innerHTML = brasil.btnAllProject;
  // });
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
   elementos.unespDesc.innerHTML = spain.unespDesc;
  elementos.dioDesc.innerHTML = spain.dioDesc;
  elementos.cnpqDesc.innerHTML = spain.cnpqDesc;
  elementos.plenusDesc.innerHTML = spain.plenusDesc;
  elementos.ferramentas.innerHTML = spain.ferramentas;
  elementos.tecnologias.innerHTML = spain.tecnologias;
  elementos.certificado.innerHTML = spain.certificado;
  elementos.avaliacaoTitle.innerHTML = spain.avaliacaoTitle;
  elementos.btnCertificados.forEach((textBtnCertificado) => {
    textBtnCertificado.innerHTML = spain.btnCertificados;
  })
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
  elementos.titlePokemon.innerHTML = spain.titlePokemon;
  elementos.titleSlechi.innerHTML = spain.titleSlechi;
  elementos.titleAumigos.innerHTML = spain.titleAumigos;
  // elementos.btnAllProject.forEach((btnAllProjectText) => {
  //   btnAllProjectText.innerHTML = spain.btnAllProject;
  // });
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
   elementos.unespDesc.innerHTML = franca.unespDesc;
  elementos.dioDesc.innerHTML = franca.dioDesc;
  elementos.cnpqDesc.innerHTML = franca.cnpqDesc;
  elementos.plenusDesc.innerHTML = franca.plenusDesc;
  elementos.ferramentas.innerHTML = franca.ferramentas;
  elementos.tecnologias.innerHTML = franca.tecnologias;
  elementos.certificado.innerHTML = franca.certificado;
  elementos.btnCertificados.forEach((textBtnCertificado) => {
    textBtnCertificado.innerHTML = franca.btnCertificados;
  })
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
  elementos.titlePokemon.innerHTML = franca.titlePokemon;
  elementos.titleSlechi.innerHTML = franca.titleSlechi;
  elementos.titleAumigos.innerHTML = franca.titleAumigos;
  // elementos.btnAllProject.forEach((btnAllProjectText) => {
  //   btnAllProjectText.innerHTML = franca.btnAllProject;
  // });
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
   elementos.unespDesc.innerHTML = china.unespDesc;
  elementos.dioDesc.innerHTML = china.dioDesc;
  elementos.cnpqDesc.innerHTML = china.cnpqDesc;
  elementos.plenusDesc.innerHTML = china.plenusDesc;
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
  elementos.btnCertificados.forEach((textBtnCertificado) => {
    textBtnCertificado.innerHTML = china.btnCertificados;
  })
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
  elementos.titlePokemon.innerHTML = china.titlePokemon;
  elementos.titleSlechi.innerHTML = china.titleSlechi;
  elementos.titleAumigos.innerHTML = china.titleAumigos;
  // elementos.btnAllProject.forEach((btnAllProjectText) => {
  //   btnAllProjectText.innerHTML = china.btnAllProject;
  // });
  elementos.servicePrest.innerHTML = china.servicePrest;
  elementos.servicePrestText.innerHTML = china.servicePrestText;
  titleButtonTranslate.forEach((btnTranslate) => {
    btnTranslate.setAttribute("title", "翻译成中文");
  });
};

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

const slechi = document.querySelector(".slechi");

slechi.addEventListener("click", () => {
  window.location.href = "./projects/client/slechi/";
});

//Função dos cliques para mudar de idioma

const eu = document.querySelector('.eua');
const es = document.querySelector('.spain');
const br = document.querySelector('.brasil');
const fr = document.querySelector('.franca');
const ch = document.querySelector('.china');


let langSelecionada = document.querySelector(".idiomaSelecionada");
let flagSelecionada = document.querySelector(".flagsSelecionada img");
const flagsSelecionada = document.querySelector(".flagsSelecionada");
const langs = document.querySelector('.lang');

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


//Redirecionamento dos projetos

const sololeveling = document.querySelector(".sololeveling");

sololeveling.addEventListener("click", () => {
  window.location.href = "./projects/soloLeveling/";
});

const relogio = document.querySelector(".relogio");

relogio.addEventListener("click", () => {
  window.location.href = "./projects/relogio/";
});

const pokemon = document.querySelector(".pokemon");

pokemon.addEventListener("click", () => {
  window.location.href = "./projects/pokemon/";
});

const aumigos = document.querySelector(".aumigos");

aumigos.addEventListener("click", () => {
  window.location.href = "./projects/aumigosPets/";
});


//Eventos de click da meta ads 

const curriculo = document.querySelector('.curriculo');

curriculo.addEventListener('click', () => {fbq('trackCustom', 'downloadCurriculo');})
