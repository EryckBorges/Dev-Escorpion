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

scarlet.addEventListener('click', () => {
    logoPokemon.src = './image/logoScarlet.webp';
    videoPokemon.src = './video/scarlet.mp4';
    linkJogo = 'https://www.nintendo.com/pt-br/store/products/pokemon-scarlet-switch/?srsltid=AfmBOoq3CpftcNgAFU9-nsu-QBCQRiiXFXiFdJaUQEvWoc2S51PtrwPp'
});

arceus.addEventListener('click', () => {
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
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

ruby.addEventListener('click', () => {
  logoPokemon.src = './image/logoOmega.webp';
videoPokemon.src = './video/omega.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

xy.addEventListener('click', () => {
  logoPokemon.src = './image/logoY.webp';
videoPokemon.src = './video/xy.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

black.addEventListener('click', () => {
  logoPokemon.src = './image/logoBlack2.webp';
videoPokemon.src = './video/black2.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

white.addEventListener('click', () => {
  logoPokemon.src = './image/logoBlack.webp';
videoPokemon.src = './video/black.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

silver.addEventListener('click', () => {
  logoPokemon.src = './image/logoSilver.webp';
videoPokemon.src = './video/silver.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

platinum.addEventListener('click', () => {
  logoPokemon.src = './image/logoPlatinum.png';
videoPokemon.src = './video/platinum.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

pearl.addEventListener('click', () => {
  logoPokemon.src = './image/logoPearl.png';
videoPokemon.src = './video/pearl.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

rubyVersion.addEventListener('click', () => {
  logoPokemon.src = './image/logoRuby.webp';
videoPokemon.src = './video/rubyVersion.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

esmerald.addEventListener('click', () => {
  logoPokemon.src = './image/logoEsmerald.webp';
videoPokemon.src = './video/esmerald.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

fireRed.addEventListener('click', () => {
  logoPokemon.src = './image/logoFireRed.webp';
videoPokemon.src = './video/fireRed.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

cristal.addEventListener('click', () => {
  logoPokemon.src = './image/logoCristal.webp';
videoPokemon.src = './video/cristal.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

gold.addEventListener('click', () => {
  logoPokemon.src = './image/logoGold.webp';
videoPokemon.src = './video/gold.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

yellow.addEventListener('click', () => {
  logoPokemon.src = './image/logoYellow.png';
videoPokemon.src = './video/yellow.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

blue.addEventListener('click', () => {
  logoPokemon.src = './image/logoBlue.webp';
videoPokemon.src = './video/blue.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
})

red.addEventListener('click', () => {
  logoPokemon.src = './image/logoRed.webp';
videoPokemon.src = './video/red.mp4';  
linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html'
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