const eua = {
    inicio: "Home",
    cursos: "Courses",
    jogos: "Games",
    portfolio: "Portfolio",
    contato: "Contact",
    sobre: "About",
    textAumigos: "The AuMigos Pet's is a website we developed as part of our TCC (Final Graduation Project) in partnership with Ian, Otavio Ricardo, and Helena Borges. Our goal is to make pet adoption easier, helping you find the perfect companion. In addition, we offer a monthly subscription service that includes hygiene products, toys, food, and treats specially selected for your pet. <br><br>Visit our website and learn more!",
    btnAumigos: "See More",
}

const brasil = {
    inicio: "Ínicio",
    cursos: "Cursos",
    jogos: "Jogos",
    portfolio: "Portfólio",
    contato: "Contato",
    sobre: "Sobre",
    textAumigos: "O AuMigos Pet's é um site que desenvolvemos como parte do nosso TCC (Trabalho de Conclusão de Curso), em parceria com Ian, Otavio Ricardo e Helena Borges. Nosso objetivo é facilitar a adoção de pets, ajudando você a encontrar o companheiro ideal. Além disso, oferecemos um serviço de assinatura mensal, que inclui itens de higiene, brinquedos, alimentos e petiscos especialmente selecionados para o seu pet. <br><br>Acesse nosso site e descubra mais!",
    btnAumigos: 'Veja Mais',
}

const spain = {
    inicio: "Comenzar",
    cursos: "Cursos",
    jogos: "Juegos",
    portfolio: "Portafolio",
    contato: "Contacto",
    sobre: "En", 
    textAumigos: "AuMigos Pet's es un sitio web que desarrollamos como parte de nuestro TCC (Trabajo de Fin de Curso) en colaboración con Ian, Otavio Ricardo y Helena Borges. Nuestro objetivo es facilitar la adopción de mascotas, ayudándote a encontrar el compañero ideal. Además, ofrecemos un servicio de suscripción mensual que incluye productos de higiene, juguetes, alimentos y golosinas especialmente seleccionadas para tu mascota. <br><br>¡Visita nuestro sitio web y descubre más!",
    btnAumigos: "Ver Más",
}

const franca = {
    inicio: "Commencer",
    cursos: "Cours",
    jogos: "Jeux",
    portfolio: "Portefeuille",
    contato: "Contact",
    sobre: "Sur",
    textAumigos: "AuMigos Pet's est un site web que nous avons développé dans le cadre de notre TCC (Travail de Fin d'Études) en collaboration avec Ian, Otavio Ricardo et Helena Borges. Notre objectif est de faciliter l'adoption des animaux de compagnie en vous aidant à trouver le compagnon idéal. De plus, nous proposons un service d'abonnement mensuel comprenant des produits d'hygiène, des jouets, de la nourriture et des friandises spécialement sélectionnées pour votre animal. <br><br>Visitez notre site web et découvrez-en plus !",
    btnAumigos: "Voir Plus",
}

const china = {
    inicio: "开始",
    cursos: "课程",
    jogos: "游戏",
    portfolio: "作品集",
    contato: "接触",
    sobre: "在",
    textAumigos: "AuMigos Pet's 是我们作为 TCC（毕业项目）的一部分，与 Ian、Otavio Ricardo 和 Helena Borges 合作开发的网站。我们的目标是让宠物领养变得更简单，帮助您找到理想的宠物伙伴。此外，我们还提供每月订阅服务，包括卫生用品、玩具、食品和专为您的宠物挑选的小零食。<br><br>访问我们的网站，了解更多信息！",
    btnAumigos: "查看更多",
}

const elementos = {
    inicio: document.querySelectorAll(".inicio"),
    cursos: document.querySelectorAll(".cursos"),
    jogos: document.querySelectorAll(".jogos"),
    portfolio: document.querySelectorAll(".portfolio"),
    contato: document.querySelectorAll(".contato"),
    sobre: document.querySelectorAll(".sobre"),
    textAumigos: document.querySelector('.content p'),
    btnAumigos: document.querySelector('.content button')
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
    elementos.textAumigos.innerHTML = eua.textAumigos;
    elementos.btnAumigos.innerHTML = eua.btnAumigos;
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
    elementos.textAumigos.innerHTML = brasil.textAumigos;
    elementos.btnAumigos.innerHTML = brasil.btnAumigos;
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
    elementos.textAumigos.innerHTML = spain.textAumigos;
    elementos.btnAumigos.innerHTML = spain.btnAumigos;
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
    elementos.textAumigos.innerHTML = franca.textAumigos;
    elementos.btnAumigos.innerHTML = franca.btnAumigos;
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
    elementos.textAumigos.innerHTML = china.textAumigos;
    elementos.btnAumigos.innerHTML = china.btnAumigos;
}

let langSelecionada = document.querySelector(".idiomaSelecionada");
let flagSelecionada = document.querySelector(".flagsSelecionada img");

const langPage = () => {
  // Obtém a linguagem salva no localStorage
  const lang = localStorage.getItem("lang");

  if (lang === "eu") {
    langSelecionada.innerHTML = "EN";
    flagSelecionada.src = "../../global/icon/eua.png";
    ingles();
  } else if (lang === "es") {
    langSelecionada.innerHTML = "ES";
    flagSelecionada.src = "../../global/icon/spain.png";
    espanha();
  } else if (lang === "fr") {
    langSelecionada.innerHTML = "FR";
    flagSelecionada.src = "../../global/icon/franca.png";
    frances();
  } else if (lang === "ch") {
    langSelecionada.innerHTML = "ZH";
    flagSelecionada.src = "../../global/icon/china.png";
    chines();
  } else {
    // Caso nenhuma linguagem esteja no localStorage, define como 'br'
    localStorage.setItem("lang", "br");
    langSelecionada.innerHTML = "PT";
    flagSelecionada.src = "../../global/icon/brasil.png";
    portugues();
  }
};

// Executa ao carregar a página
langPage();

elementos.btnAumigos.addEventListener('click', () => {
  window.location.href = 'https://aumigos-pet.vercel.app/pages/landing-page/'
});
