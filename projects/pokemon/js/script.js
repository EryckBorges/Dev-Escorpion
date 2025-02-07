const scarlet = document.querySelector('.scarlet');
const arceus = document.querySelector('.arceus');
const diamond = document.querySelector('.diamond');
const sword = document.querySelector('.sword');
const pikachu = document.querySelector('.pikachu');
const ultraSun = document.querySelector('.ultraSun');
const sun = document.querySelector('.sun');
const ruby = document.querySelector('.ruby');
const xy = document.querySelector('.xy');
const black = document.querySelector('.black');
const white = document.querySelector('.white');
const silver = document.querySelector('.silver');
const platinum = document.querySelector('.platinum');
const pearl = document.querySelector('.pearl');
const esmerald = document.querySelector('.esmerald');
const fireRed = document.querySelector('.fireRed');
const rubyVersion = document.querySelector('.rubyVersion');
const cristal = document.querySelector('.cristal');
const gold = document.querySelector('.gold');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');

const btnNintendo = document.querySelector('.nintendo');
const logoPokemon = document.querySelector('.contPokemon img');

const videoPokemon = document.querySelector('.gamesPoke video');


let linkJogo;
let gameDesc;

const eua = {
  inicio: "Home",
  cursos: "Courses",
  jogos: "Games",
  portfolio: "Portfolio",
  contato: "Contact",
  sobre: "About",
  descScarlet: "Capture, battle, and train Pokémon in the Paldea region, a vast area filled with lakes, towering peaks, deserts, villages, and expanding cities. Explore the open world at your own pace and traverse land, water, and air while riding the shape-shifting legendary Pokémon (Koraidon in Pokémon Scarlet and Miraidon in Pokémon Violet). Choose between Sprigatito, Fuecoco, or Quaxly as your first partner Pokémon before setting off on your journey through Paldea.",
  descArceus: "Get ready for a new grand Pokémon adventure in Pokémon™ Legends: Arceus, a brand-new game from Game Freak that combines action and exploration with the RPG roots of the Pokémon series. Embark on research missions in the ancient Hisui region. Explore natural expanses to capture wild Pokémon by learning their behavior, sneaking up on them, and throwing a well-aimed Poké Ball™."
}

const brasil = {
  inicio: "Ínicio",
  cursos: "Cursos",
  jogos: "Jogos",
  portfolio: "Portfólio",
  contato: "Contato",
  sobre: "Sobre",
  descScarlet: 'Capture, lute e treine Pokémon na região de Paldea, uma vasta área cheia de lagos, picos imponentes, desertos, vilarejos e cidades em expansão. Explore o mundo aberto no seu próprio ritmo e atravesse terra, água e ar montado no Pokémon lendário que muda de forma (Koraidon no Pokémon Scarlet e Miraidon no Pokémon Violet). Escolha entre Sprigatito, Fuecoco ou Quaxly para ser seu primeiro parceiro Pokémon antes de partir em sua jornada por Paldea.',
  descArceus: 'Prepare-se para uma nova grande aventura Pokémon em Pokémon™ Legends: Arceus, um jogo totalmente novo da Game Freak que combina ação e exploração com as raízes de RPG da série Pokémon. Embarque em missões de pesquisa na antiga região de Hisui. Explore extensões naturais para capturar Pokémon selvagens, aprendendo seu comportamento, aproximando-se sorrateiramente e jogando uma Poké Ball™ bem direcionada.',
}

const spain = {
  inicio: "Comenzar",
  cursos: "Cursos",
  jogos: "Juegos",
  portfolio: "Portafolio",
  contato: "Contacto",
  sobre: "En",
}

const franca = {
  inicio: "Commencer",
  cursos: "Cours",
  jogos: "Jeux",
  portfolio: "Portefeuille",
  contato: "Contact",
  sobre: "Sur",
}

const china = {
  inicio: "开始",
  cursos: "课程",
  jogos: "游戏",
  portfolio: "作品集",
  contato: "接触",
  sobre: "在",
  sobreMim: "关于我",
}

const elementos = {
  inicio: document.querySelectorAll(".inicio"),
  cursos: document.querySelectorAll(".cursos"),
  jogos: document.querySelectorAll(".jogos"),
  portfolio: document.querySelectorAll(".portfolio"),
  contato: document.querySelectorAll(".contato"),
  sobre: document.querySelectorAll(".sobre"),
  descPokemon: document.querySelector('.contPokemon p'),
}

scarlet.addEventListener('click', () => {
    gameDesc = "scarlet";
    langPage();
    logoPokemon.src = './image/logoScarlet.webp';
    videoPokemon.src = './video/scarlet.mp4';
    linkJogo = 'https://www.nintendo.com/pt-br/store/products/pokemon-scarlet-switch/?srsltid=AfmBOoq3CpftcNgAFU9-nsu-QBCQRiiXFXiFdJaUQEvWoc2S51PtrwPp'
});

arceus.addEventListener('click', () => {
  gameDesc = "arceus";
  langPage();
    logoPokemon.src = './image/logoArceus.png';
    videoPokemon.src = './video/arceus.mp4';
    linkJogo = 'https://www.nintendo.com/pt-br/store/products/pokemon-legends-arceus-switch/'
})

diamond.addEventListener('click', () => {
    logoPokemon.src = './image/logoDiamond.png';
    videoPokemon.src = './video/diamond.mp4';
    linkJogo = 'https://www.nintendo.com/pt-br/store/products/pokemon-brilliant-diamond-switch/'
})

sword.addEventListener('click', () => {
    logoPokemon.src = './image/logoSword.png';
    videoPokemon.src = './video/sword.mp4';
    logoPokemon.style.height = "40%"
    linkJogo = 'https://www.nintendo.com/pt-br/store/products/pokemon-sword-switch/'
})

pikachu.addEventListener('click', () => {
    logoPokemon.src = './image/logoPikachu.png';
    videoPokemon.src = './video/pikachu.mp4';
    linkJogo = 'https://www.nintendo.com/pt-br/store/products/pokemon-lets-go-pikachu-switch/'
})

ultraSun.addEventListener('click', () => {
    logoPokemon.src = './image/logoUltra.webp';
 videoPokemon.src = './video/ultra.mp4';  
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

sun.addEventListener('click', () => {
  logoPokemon.src = './image/logoSun.webp';
videoPokemon.src = './video/sun.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Sun-1092368.html?srsltid=AfmBOorALcY28IzVBpw5GZQU8LBmffwCpY0Fsp6E4VLGT7GKStpqcNV1'
})

ruby.addEventListener('click', () => {
  logoPokemon.src = './image/logoOmega.webp';
videoPokemon.src = './video/omega.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Omega-Ruby-893014.html?srsltid=AfmBOoqJH2DmTESjannVTiECjdQUIbGSsMqeszsQZQGMnTDrPrPiaJ1D'
})

xy.addEventListener('click', () => {
  logoPokemon.src = './image/logoY.webp';
videoPokemon.src = './video/xy.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Y-766700.html?srsltid=AfmBOopeodX2V9L1zNN3J_h360XYH0MbRRSV6ZqYSevvxKkc4tGYAXvh'
})

black.addEventListener('click', () => {
  logoPokemon.src = './image/logoBlack2.webp';
videoPokemon.src = './video/black2.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Black-Version-2-523591.html?srsltid=AfmBOop5__Ag7VMInaWB1kdZsB8RAXoP-jBpliRIY3LX9_l6nVpeMcO4'
})

white.addEventListener('click', () => {
  logoPokemon.src = './image/logoBlack.webp';
videoPokemon.src = './video/black.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Black-Version-272332.html?srsltid=AfmBOordTfBLWLtZXSJJnWzi2h4Rqqh85kyrear2bv65GSvW6eF_WCmh'
})

silver.addEventListener('click', () => {
  logoPokemon.src = './image/logoSilver.webp';
videoPokemon.src = './video/silver.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-SoulSilver-Version-272475.html?srsltid=AfmBOoqRGXmizQ1f09yB6GqxRFT9waoC5nOw81Gwwtudu6Z2vGbfBFna'
})

platinum.addEventListener('click', () => {
  logoPokemon.src = './image/logoPlatinum.png';
videoPokemon.src = './video/platinum.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Platinum-Version-272321.html?srsltid=AfmBOoowBP2yJGrOe1GS9EKOyHtj3bIXAFIk42kPf2Ga-DU-OPQsD96O'
})

pearl.addEventListener('click', () => {
  logoPokemon.src = './image/logoPearl.png';
videoPokemon.src = './video/pearl.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Pearl-272431.html?srsltid=AfmBOopFUQnrqO2MD9pLq03HjP1bCpWtUuZv1eauIYhz0hhsCdAaxdHl'
})

rubyVersion.addEventListener('click', () => {
  logoPokemon.src = './image/logoRuby.png';
videoPokemon.src = './video/rubyVersion.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-Ruby-267167.html?srsltid=AfmBOoqypz0nkFNXLBlxPJt4ZDsy9sJhxG-TQr1m8f8TEpiMTMQd9-cW'
})

esmerald.addEventListener('click', () => {
  logoPokemon.src = './image/logoEsmerald.webp';
videoPokemon.src = './video/esmerald.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-Emerald-Version-267112.html?srsltid=AfmBOopneU6FFufaPdDbLHFKn15jCB1aQ6o-hz10ruoPz_KLWPlEKGyk'
})

fireRed.addEventListener('click', () => {
  logoPokemon.src = './image/logoFireRed.webp';
videoPokemon.src = './video/fireRed.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-FireRed-267123.html?srsltid=AfmBOoouv5Dv5Dt7dvS1K1gPn7_6MwErLwInpPu84MNcfyDcLqtkcorm'
})

cristal.addEventListener('click', () => {
  logoPokemon.src = './image/logoCristal.webp';
videoPokemon.src = './video/cristal.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Color/Pokemon-Crystal-Version-266065.html?srsltid=AfmBOoqWZv12-5TsZ_pieqKtPOTm7w9ttakE66q4ceaOUesiSqMtp984'
})

gold.addEventListener('click', () => {
  logoPokemon.src = './image/logoGold.webp';
videoPokemon.src = './video/gold.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Color/Pokemon-Gold-Version-266076.html?srsltid=AfmBOoqnzzf71rASkd-Z8nnCa3TVeZ17HflVXWszvw4GQuOs4r8Ao_i6'
})

yellow.addEventListener('click', () => {
  logoPokemon.src = './image/logoYellow.png';
videoPokemon.src = './video/yellow.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy/Pokemon-Yellow-Version-Special-Pikachu-Edition-266142.html?srsltid=AfmBOoq-aSXnAk-oSsUVZYje0rjlezefLsiXNLEqqg5S2U-tZZ6UlbFW'
})

blue.addEventListener('click', () => {
  logoPokemon.src = './image/logoBlue.webp';
videoPokemon.src = './video/blue.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy/Pokemon-Blue-Version-266054.html?srsltid=AfmBOoopdK4X-W1uynwO8vrt_FsLL7lFDcWT6jTRWWAFHivSdBuL5fGJ'
})

red.addEventListener('click', () => {
  logoPokemon.src = './image/logoRed.webp';
videoPokemon.src = './video/red.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy/Pokemon-Red-Version-266109.html?srsltid=AfmBOoq5w4VrcPTVKEHF3YzrYEJRwpzdfj4ofitCDtZ0XWqTtkDY2tKI'
})

btnNintendo.addEventListener('click', () => {
    window.open(linkJogo, '_blank');
});

// Função de slide de avaliação
const avalia = document.querySelector(".games");
let praBaixo = false;
let startXY;
let scrollEsquerda;

// Eventos de mouse
avalia.addEventListener("mousedown", (e) => {
  praBaixo = true;
  avalia.classList.add("active");
  startXY = e.pageX - avalia.scrollLeft;
  scrollEsquerda = avalia.scrollLeft;
});

avalia.addEventListener("mouseleave", () => {
  praBaixo = false;
  avalia.classList.remove("active");
});

avalia.addEventListener("mouseup", () => {
  praBaixo = false;
  avalia.classList.remove("active");
});

avalia.addEventListener("mousemove", (e) => {
  if (!praBaixo) return;
  e.preventDefault();
  const x = e.pageX - avalia.scrollLeft;
  const walk = (x - startXY) * 0.5; // Multiplica para ajustar a velocidade
  avalia.scrollLeft = scrollEsquerda - walk;
});

// Eventos de toque
avalia.addEventListener("touchstart", (e) => {
  praBaixo = true;
  avalia.classList.add("active");
  startXY = e.touches[0].pageX - avalia.scrollLeft;
  scrollEsquerda = avalia.scrollLeft;
});

avalia.addEventListener("touchend", () => {
  praBaixo = false;
  avalia.classList.remove("active");
});

avalia.addEventListener("touchmove", (e) => {
  if (!praBaixo) return;
  e.preventDefault();
  const x = e.touches[0].pageX - avalia.scrollLeft;
  const walk = (x - startXY) * 0.5; // Multiplica para ajustar a velocidade
  avalia.scrollLeft = scrollEsquerda - walk;
});


const btnAudio = document.querySelector('.btnAudio');

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
  switch (gameDesc) {
    case 'scarlet':
      elementos.descPokemon.innerHTML = eua.descScarlet;
      break;
      case 'arceus': 
      elementos.descPokemon.innerHTML = eua.descArceus;
      break;
    default:
      break;
  }
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
  switch (gameDesc) {
    case 'scarlet':
      elementos.descPokemon.innerHTML = brasil.descScarlet;
      break;
      case 'arceus': 
      elementos.descPokemon.innerHTML = brasil.descArceus;
      break;
    default:
      break;
  }
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
