// Seleciona o canvas e define o atributo willReadFrequently para melhorar o desempenho
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d', { willReadFrequently: true });

// Inicialize o Paper.js com o canvas
paper.setup(canvas);

// Estilo padrão para os objetos
paper.project.currentStyle = {
    fillColor: 'red',
};

// Configuração das posições das bolas
var ballPositions = [
    [255, 129], [610, 73], [486, 363],
    [117, 459], [484, 726], [843, 306],
    [789, 615], [1049, 82], [1292, 428],
    [1117, 733], [1352, 86], [92, 798],
];

var handle_len_rate = 2.4;
var circlePaths = [];
var radius = 50;

// Criação dos círculos com base nas posições
for (var i = 0, l = ballPositions.length; i < l; i++) {
    var circlePath = new paper.Path.Circle({
        center: ballPositions[i],
        radius: radius,
    });
    circlePaths.push(circlePath);
}

// Criação do círculo maior para interatividade
var largeCircle = new paper.Path.Circle({
    center: [676, 433],
    radius: 100,
});
circlePaths.push(largeCircle);

// Função de movimentação do mouse
function onMouseMove(event) {
    largeCircle.position = event.point; // Atualiza a posição do grande círculo
    generateConnections(circlePaths);  // Gera as conexões metaball
}

// Grupo para as conexões metaball
var connections = new paper.Group();

// Função para gerar conexões entre círculos
function generateConnections(paths) {
    connections.removeChildren(); // Limpa conexões anteriores

    for (var i = 0, l = paths.length; i < l; i++) {
        for (var j = i - 1; j >= 0; j--) {
            var path = metaball(paths[i], paths[j], 0.5, handle_len_rate, 300);
            if (path) {
                connections.addChild(path);
                path.removeOnMove();
            }
        }
    }
}

// Função metaball para criar as formas entre círculos
function metaball(ball1, ball2, v, handle_len_rate, maxDistance) {
    var center1 = ball1.position;
    var center2 = ball2.position;
    var radius1 = ball1.bounds.width / 2;
    var radius2 = ball2.bounds.width / 2;
    var pi2 = Math.PI / 2;
    var d = center1.getDistance(center2);

    if (radius1 === 0 || radius2 === 0 || d > maxDistance || d <= Math.abs(radius1 - radius2)) {
        return null;
    }

    // Correção: Subtrai os centros e obtém o ângulo corretamente
    var vector = center2.subtract(center1);
    var angle1 = vector.getAngle() * Math.PI / 180; // Converte para radianos
    var angle2 = Math.acos((radius1 - radius2) / d);
    var angle1a = angle1 + angle2;
    var angle1b = angle1 - angle2;

    var p1a = center1.add(getVector(angle1a, radius1));
    var p1b = center1.add(getVector(angle1b, radius1));
    var p2a = center2.add(getVector(angle1a + Math.PI, radius2));
    var p2b = center2.add(getVector(angle1b + Math.PI, radius2));

    var path = new paper.Path({
        segments: [p1a, p2a, p2b, p1b],
        closed: true,
        style: ball1.style,
    });
    return path;
}

// Função auxiliar para calcular vetores
function getVector(angle, length) {
    return new paper.Point({
        angle: angle * 180 / Math.PI, // Converte o ângulo de radianos para graus
        length: length,
    });
}

// Detecta movimento do mouse e chama a função de atualização
paper.view.onMouseMove = onMouseMove;

// Gera conexões iniciais
generateConnections(circlePaths);

//Linguagens 

const eua = {
    inicio: 'Home',
    cursos: 'Courses',
    jogos: 'Games',
    portfolio: 'Portfolio',
    contato: 'Contact',
    sobre: 'About',
    segunda: 'Monday',
    terca: 'Tuesday',
    quarta: 'Wednesday',
    quinta: 'Thursday',
    sexta: 'Friday',
    sabado: 'Saturday',
    domingo: 'Sunday',
    janeiro: 'January',
    fevereiro: 'February',
    marco: 'March',
    abril: 'April',
    maio: 'May',
    junho: 'June',
    julho: 'July',
    agosto: 'August',
    setembro: 'September',
    outubro: 'October',
    novembro: 'November',
    dezembro: 'December',
};

const brasil = {
    inicio: 'Ínicio',
    cursos: 'Cursos',
    jogos: 'Jogos',
    portfolio: 'Portfolio',
    contato: 'Contato',
    sobre: 'Sobre',
    segunda: 'Segunda-feira',
    terca: 'Terça-feira',
    quarta: 'Quarta-feira',
    quinta: 'Quinta-feira',
    sexta: 'Sexta-feira',
    sabado: 'Sábado',
    domingo: 'Domingo',
    janeiro: 'Janeiro',
    fevereiro: 'Fevereiro',
    marco: 'Março',
    abril: 'Abril',
    maio: 'Maio',
    junho: 'Junho',
    julho: 'Julho',
    agosto: 'Agosto',
    setembro: 'Setembro',
    outubro: 'Outubro',
    novembro: 'Novembro',
    dezembro: 'Dezembro',
};

const spain = {
    inicio: 'Comenzar',
    cursos: 'Cursos',
    jogos: 'Juegos',
    portfolio: 'Cartera',
    contato: 'Contacto',
    sobre: 'En',
    segunda: 'Lunes',
    terca: 'Martes',
    quarta: 'Miércoles',
    quinta: 'Jueves',
    sexta: 'Viernes',
    sabado: 'Sábado',
    domingo: 'Domingo',
    janeiro: 'Enero',
    fevereiro: 'Febrero',
    marco: 'Marzo',
    abril: 'Abril',
    maio: 'Mayo',
    junho: 'Junio',
    julho: 'Julio',
    agosto: 'Agosto',
    setembro: 'Septiembre',
    outubro: 'Octubre',
    novembro: 'Noviembre',
    dezembro: 'Diciembre',
};

const franca = {
    inicio: 'Commencer',
    cursos: 'Cours',
    jogos: 'Jeux',
    portfolio: 'Portefeuille',
    contato: 'Contact',
    sobre: 'Sur',
    segunda: 'Lundi',
    terca: 'Mardi',
    quarta: 'Mercredi',
    quinta: 'Jeudi',
    sexta: 'Vendredi',
    sabado: 'Samedi',
    domingo: 'Dimanche',
    janeiro: 'Janvier',
    fevereiro: 'Février',
    marco: 'Mars',
    abril: 'Avril',
    maio: 'Mai',
    junho: 'Juin',
    julho: 'Juillet',
    agosto: 'Août',
    setembro: 'Septembre',
    outubro: 'Octobre',
    novembro: 'Novembre',
    dezembro: 'Décembre',
};

const china = {
    inicio: '开始',
    cursos: '课程',
    jogos: '游戏',
    portfolio: '文件夹',
    contato: '接触',
    sobre: '在',
    segunda: '星期一',
    terca: '星期二',
    quarta: '星期三',
    quinta: '星期四',
    sexta: '星期五',
    sabado: '星期六',
    domingo: '星期日',
    janeiro: '一月',
    fevereiro: '二月',
    marco: '三月',
    abril: '四月',
    maio: '五月',
    junho: '六月',
    julho: '七月',
    agosto: '八月',
    setembro: '九月',
    outubro: '十月',
    novembro: '十一月',
    dezembro: '十二月',
};

const elementos = {
    inicio: document.querySelectorAll('.inicio'),
    cursos: document.querySelectorAll('.cursos'),
    jogos: document.querySelectorAll('.jogos'),
    portfolio: document.querySelectorAll('.portfolio'),
    contato: document.querySelectorAll('.contato'),
    sobre: document.querySelectorAll('.sobre'),
    diaDaSemana: document.querySelector('.diaSemana'),
    mesAno: document.querySelector('.mesAno'),
};

const ingles = () => {
    elementos.inicio.forEach((inicioText) => {
        inicioText.innerHTML = eua.inicio;
    });
    elementos.cursos.forEach((cursosText) => {
        cursosText.innerHTML= eua.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
        jogosText.innerHTML= eua.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
        portfolioText.innerHTM = eua.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= eua.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = eua.sobre;
    });  
    const data = new Date();
    let daySemana = data.getDay();
    let mesAno = data.getMonth();
    switch (daySemana) {
        case 0:
            elementos.diaDaSemana.innerHTML = eua.domingo.toUpperCase();
        break;
        case 1:
            elementos.diaDaSemana.innerHTML = eua.segunda.toUpperCase();
        break;
        case 2:
            elementos.diaDaSemana.innerHTML = eua.terca.toUpperCase();
        break;
        case 3:
            elementos.diaDaSemana.innerHTML = eua.quarta.toUpperCase();
        break;
        case 4:
            elementos.diaDaSemana.innerHTML = eua.quinta.toUpperCase();
        break;
        case 5:
            elementos.diaDaSemana.innerHTML = eua.sexta.toUpperCase();
        break;
        case 6:
            elementos.diaDaSemana.innerHTML = eua.sabado.toUpperCase();
        break;
        default:
        break;
    }
    switch (mesAno) {
        case 0:
            elementos.mesAno.innerHTML = eua.janeiro;
        break;
        case 1:
            elementos.mesAno.innerHTML = eua.fevereiro;
        break;
        case 2:
            elementos.mesAno.innerHTML = eua.marco;
        break;
        case 3:
            elementos.mesAno.innerHTML = eua.abril;
        break;
        case 4:
            elementos.mesAno.innerHTML = eua.maio;
        break;
        case 5:
            elementos.mesAno.innerHTML = eua.junho;
        break;
        case 6:
            elementos.mesAno.innerHTML = eua.julho;
        break;
        case 7:
            elementos.mesAno.innerHTML = eua.agosto;
        break;
        case 8:
            elementos.mesAno.innerHTML = eua.setembro;
        break;
        case 9:
            elementos.mesAno.innerHTML = eua.outubro;
        break;
        case 10:
            elementos.mesAno.innerHTML = eua.novembro;
        break;
        case 11:
            elementos.mesAno.innerHTML = eua.dezembro;
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
        cursosText.innerHTML= brasil.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
        jogosText.innerHTML= brasil.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
        portfolioText.innerHTM = brasil.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= brasil.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = brasil.sobre;
    });  
    const data = new Date();
    let daySemana = data.getDay();
    let mesAno = data.getMonth();
    switch (daySemana) {
        case 0:
            elementos.diaDaSemana.innerHTML = brasil.domingo.toUpperCase();
        break;
        case 1:
            elementos.diaDaSemana.innerHTML = brasil.segunda.toUpperCase();
        break;
        case 2:
            elementos.diaDaSemana.innerHTML = brasil.terca.toUpperCase();
        break;
        case 3:
            elementos.diaDaSemana.innerHTML = brasil.quarta.toUpperCase();
        break;
        case 4:
            elementos.diaDaSemana.innerHTML = brasil.quinta.toUpperCase();
        break;
        case 5:
            elementos.diaDaSemana.innerHTML = brasil.sexta.toUpperCase();
        break;
        case 6:
            elementos.diaDaSemana.innerHTML = brasil.sabado.toUpperCase();
        break;
        default:
        break;
    }
    switch (mesAno) {
        case 0:
            elementos.mesAno.innerHTML = brasil.janeiro;
        break;
        case 1:
            elementos.mesAno.innerHTML = brasil.fevereiro;
        break;
        case 2:
            elementos.mesAno.innerHTML = brasil.marco;
        break;
        case 3:
            elementos.mesAno.innerHTML = brasil.abril;
        break;
        case 4:
            elementos.mesAno.innerHTML = brasil.maio;
        break;
        case 5:
            elementos.mesAno.innerHTML = brasil.junho;
        break;
        case 6:
            elementos.mesAno.innerHTML = brasil.julho;
        break;
        case 7:
            elementos.mesAno.innerHTML = brasil.agosto;
        break;
        case 8:
            elementos.mesAno.innerHTML = brasil.setembro;
        break;
        case 9:
            elementos.mesAno.innerHTML = brasil.outubro;
        break;
        case 10:
            elementos.mesAno.innerHTML = brasil.novembro;
        break;
        case 11:
            elementos.mesAno.innerHTML = brasil.dezembro;
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
        cursosText.innerHTML= spain.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
        jogosText.innerHTML= spain.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
        portfolioText.innerHTM = spain.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= spain.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = spain.sobre;
    });  
    
    const data = new Date();
    let daySemana = data.getDay();
    let mesAno = data.getMonth();
    switch (daySemana) {
        case 0:
            elementos.diaDaSemana.innerHTML = spain.domingo.toUpperCase();
        break;
        case 1:
            elementos.diaDaSemana.innerHTML = spain.segunda.toUpperCase();
        break;
        case 2:
            elementos.diaDaSemana.innerHTML = spain.terca.toUpperCase();
        break;
        case 3:
            elementos.diaDaSemana.innerHTML = spain.quarta.toUpperCase();
        break;
        case 4:
            elementos.diaDaSemana.innerHTML = spain.quinta.toUpperCase();
        break;
        case 5:
            elementos.diaDaSemana.innerHTML = spain.sexta.toUpperCase();
        break;
        case 6:
            elementos.diaDaSemana.innerHTML = spain.sabado.toUpperCase();
        break;
        default:
        break;
    }
    switch (mesAno) {
        case 0:
            elementos.mesAno.innerHTML = spain.janeiro;
        break;
        case 1:
            elementos.mesAno.innerHTML = spain.fevereiro;
        break;
        case 2:
            elementos.mesAno.innerHTML = spain.marco;
        break;
        case 3:
            elementos.mesAno.innerHTML = spain.abril;
        break;
        case 4:
            elementos.mesAno.innerHTML = spain.maio;
        break;
        case 5:
            elementos.mesAno.innerHTML = spain.junho;
        break;
        case 6:
            elementos.mesAno.innerHTML = spain.julho;
        break;
        case 7:
            elementos.mesAno.innerHTML = spain.agosto;
        break;
        case 8:
            elementos.mesAno.innerHTML = spain.setembro;
        break;
        case 9:
            elementos.mesAno.innerHTML = spain.outubro;
        break;
        case 10:
            elementos.mesAno.innerHTML = spain.novembro;
        break;
        case 11:
            elementos.mesAno.innerHTML = spain.dezembro;
        break;
        default:
        break;
    }
}

const frances = () => {
    elementos.inicio.forEach((inicioText) => {
        inicioText.innerHTML = franca.inicio;
    });
    elementos.cursos.forEach((cursosText) => {
        cursosText.innerHTML= franca.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
        jogosText.innerHTML= franca.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
        portfolioText.innerHTM = franca.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= franca.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = franca.sobre;
    });   
    const data = new Date();
    let daySemana = data.getDay();
    let mesAno = data.getMonth();
    switch (daySemana) {
        case 0:
            elementos.diaDaSemana.innerHTML = franca.domingo.toUpperCase();
        break;
        case 1:
            elementos.diaDaSemana.innerHTML = franca.segunda.toUpperCase();
        break;
        case 2:
            elementos.diaDaSemana.innerHTML = franca.terca.toUpperCase();
        break;
        case 3:
            elementos.diaDaSemana.innerHTML = franca.quarta.toUpperCase();
        break;
        case 4:
            elementos.diaDaSemana.innerHTML = franca.quinta.toUpperCase();
        break;
        case 5:
            elementos.diaDaSemana.innerHTML = franca.sexta.toUpperCase();
        break;
        case 6:
            elementos.diaDaSemana.innerHTML = franca.sabado.toUpperCase();
        break;
        default:
        break;
    }
    switch (mesAno) {
        case 0:
            elementos.mesAno.innerHTML = franca.janeiro;
        break;
        case 1:
            elementos.mesAno.innerHTML = franca.fevereiro;
        break;
        case 2:
            elementos.mesAno.innerHTML = franca.marco;
        break;
        case 3:
            elementos.mesAno.innerHTML = franca.abril;
        break;
        case 4:
            elementos.mesAno.innerHTML = franca.maio;
        break;
        case 5:
            elementos.mesAno.innerHTML = franca.junho;
        break;
        case 6:
            elementos.mesAno.innerHTML = franca.julho;
        break;
        case 7:
            elementos.mesAno.innerHTML = franca.agosto;
        break;
        case 8:
            elementos.mesAno.innerHTML = franca.setembro;
        break;
        case 9:
            elementos.mesAno.innerHTML = franca.outubro;
        break;
        case 10:
            elementos.mesAno.innerHTML = franca.novembro;
        break;
        case 11:
            elementos.mesAno.innerHTML = franca.dezembro;
        break;
        default:
        break;
    }
}

const chines = () => {
    elementos.inicio.forEach((inicioText) => {
        inicioText.innerHTML = china.inicio;
    });
    elementos.cursos.forEach((cursosText) => {
        cursosText.innerHTML= china.cursos;
    });
    elementos.jogos.forEach((jogosText) => {
        jogosText.innerHTML= china.jogos;
    });
    elementos.portfolio.forEach((portfolioText) => {
        portfolioText.innerHTM = china.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= china.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = china.sobre;
    });  
    const data = new Date();
    let daySemana = data.getDay();
    let mesAno = data.getMonth();
    switch (daySemana) {
        case 0:
            elementos.diaDaSemana.innerHTML = china.domingo.toUpperCase();
        break;
        case 1:
            elementos.diaDaSemana.innerHTML = china.segunda.toUpperCase();
        break;
        case 2:
            elementos.diaDaSemana.innerHTML = china.terca.toUpperCase();
        break;
        case 3:
            elementos.diaDaSemana.innerHTML = china.quarta.toUpperCase();
        break;
        case 4:
            elementos.diaDaSemana.innerHTML = china.quinta.toUpperCase();
        break;
        case 5:
            elementos.diaDaSemana.innerHTML = china.sexta.toUpperCase();
        break;
        case 6:
            elementos.diaDaSemana.innerHTML = china.sabado.toUpperCase();
        break;
        default:
        break;
    } 
    switch (mesAno) {
        case 0:
            elementos.mesAno.innerHTML = china.janeiro;
        break;
        case 1:
            elementos.mesAno.innerHTML = china.fevereiro;
        break;
        case 2:
            elementos.mesAno.innerHTML = china.marco;
        break;
        case 3:
            elementos.mesAno.innerHTML = china.abril;
        break;
        case 4:
            elementos.mesAno.innerHTML = china.maio;
        break;
        case 5:
            elementos.mesAno.innerHTML = china.junho;
        break;
        case 6:
            elementos.mesAno.innerHTML = china.julho;
        break;
        case 7:
            elementos.mesAno.innerHTML = china.agosto;
        break;
        case 8:
            elementos.mesAno.innerHTML = china.setembro;
        break;
        case 9:
            elementos.mesAno.innerHTML = china.outubro;
        break;
        case 10:
            elementos.mesAno.innerHTML = china.novembro;
        break;
        case 11:
            elementos.mesAno.innerHTML = china.dezembro;
        break;
        default:
        break;
    }
}

//Função para exibir a hora 

const contentHours = document.querySelector('.hours');
const contentMinutes = document.querySelector('.minutes');
const contentSecunds = document.querySelector('.secunds');
const contentMes = document.querySelector('.mesAno');
const hoursEua = document.querySelector('.hoursEua');
const diaNumerico = document.querySelector('.diaMes');

// Função para exibir a hora

const horario = () => {
    const data = new Date(); // Atualize a data a cada chamada
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let secunds = data.getSeconds();
    let diaMesNumerico = data.getDate();

    contentHours.innerHTML = hours < 10 ? `0${hours}` : hours; // Adicione zero à esquerda se necessário
    contentMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    contentSecunds.innerHTML = secunds < 10 ? `0${secunds}` : secunds;
    diaNumerico.innerHTML = diaMesNumerico;

    if(localStorage.getItem('lang') == 'eu' && hours <= 12) {
        hoursEua.innerHTML = 'AM';
        hoursEua.style.display = 'flex'
    }else if(localStorage.getItem('lang') == 'eu' && hours > 12) {
        hoursEua.innerHTML = 'PM';
        hoursEua.style.display = 'flex'
    }else {
        hoursEua.innerHTML = '';
        hoursEua.style.display = 'none'
    }
};

//Muda a linguagem do site 

let langSelecionada = document.querySelector('.idiomaSelecionada');
let flagSelecionada = document.querySelector(".flagsSelecionada img");

const langPage = () => {
    if (localStorage.getItem('lang') == 'eu') {
        langSelecionada.innerHTML = "EN";
        flagSelecionada.src = "../../global/icon/eua.png";
        ingles();
    }else if (localStorage.getItem('lang') == 'es') {
            langSelecionada.innerHTML = "ES";
            flagSelecionada.src = "../../global/icon/spain.png";
            espanha();
        
    }else if (localStorage.getItem('lang') == 'fr') {
            langSelecionada.innerHTML = "FR";
            flagSelecionada.src = "../../global/icon/franca.png";
            frances();
    }else if (localStorage.getItem('lang') == 'ch') {
            langSelecionada.innerHTML = "ZH";
            flagSelecionada.src = "../../global/icon/china.png";
            chines();
    }else {
        localStorage.setItem('lang', 'br');
        langSelecionada.innerHTML = "PT";
        flagSelecionada.src = "../../global/icon/brasil.png";
        portugues();
    }
}

langPage();

// Atualizar a hora e o dia da semana a cada segundo
setInterval(() => {
    horario();
    langPage();
}, 1000);


let clickSong = new Audio();
clickSong.src = './music/clickClock.mp3';

let clockSong = new Audio();
clockSong.src = './music/clock.mp3';

const nextNumberChess = document.querySelector('.nextChess');
const backNumberChess = document.querySelector('.backChess');

//Player 1
let horaChess = document.querySelector('.horaChess');
let minutoChess = document.querySelector('.minutoChess');
let segundoChess = document.querySelector('.segundoChess');

//Player 2
let horaChess2 = document.querySelector('.horaChess2');
let minutoChess2 = document.querySelector('.minutoChess2');
let segundoChess2 = document.querySelector('.segundoChess2');

let menos = document.querySelector('.menos');
let mais = document.querySelector('.mais');

let valorHora = 0;
let valorMinuto = 0;
let valorSegundo = 0;

let valorHora2 = 0;
let valorMinuto2 = 0;
let valorSegundo2 = 0;

mais.addEventListener('click', () => {
    if (horaChess.classList.contains('activedNumberChess')) {
        valorHora = Math.min(12, valorHora + 1);
        horaChess.value = valorHora < 10 ? `0${valorHora}` : valorHora;
    }

    if (minutoChess.classList.contains('activedNumberChess')) {
        valorMinuto++;
        if (valorMinuto >= 60) valorMinuto = 0;
        minutoChess.value = valorMinuto < 10 ? `0${valorMinuto}` : valorMinuto;
    }

    if (segundoChess.classList.contains('activedNumberChess')) {
        valorSegundo++;
        if (valorSegundo >= 60) valorSegundo = 0;
        segundoChess.value = valorSegundo < 10 ? `0${valorSegundo}` : valorSegundo;
    }

    if (horaChess2.classList.contains('activedNumberChess')) {
        valorHora2 = Math.min(12, valorHora2 + 1);
        horaChess2.value = valorHora2 < 10 ? `0${valorHora2}` : valorHora2;
    }

    if (minutoChess2.classList.contains('activedNumberChess')) {
        valorMinuto2++;
        if (valorMinuto2 >= 60) valorMinuto2 = 0;
        minutoChess2.value = valorMinuto2 < 10 ? `0${valorMinuto2}` : valorMinuto2;
    }

    if (segundoChess2.classList.contains('activedNumberChess')) {
        valorSegundo2++;
        if (valorSegundo2 >= 60) valorSegundo2 = 0;
        segundoChess2.value = valorSegundo2 < 10 ? `0${valorSegundo2}` : valorSegundo2;
    }
});


menos.addEventListener('click', () => {
    // Decrementa e ajusta Hora Chess
    if (horaChess.classList.contains('activedNumberChess')) {
        valorHora = Math.max(0, valorHora - 1);
        horaChess.value = valorHora < 10 ? `0${valorHora}` : valorHora;
    }

    // Decrementa e ajusta Minuto Chess
    if (minutoChess.classList.contains('activedNumberChess')) {
        valorMinuto = Math.max(0, valorMinuto - 1);
        minutoChess.value = valorMinuto < 10 ? `0${valorMinuto}` : valorMinuto;
    }

    // Decrementa e ajusta Segundo Chess
    if (segundoChess.classList.contains('activedNumberChess')) {
        valorSegundo = Math.max(0, valorSegundo - 1);
        segundoChess.value = valorSegundo < 10 ? `0${valorSegundo}` : valorSegundo;
    }

    // Decrementa e ajusta Hora Chess2
    if (horaChess2.classList.contains('activedNumberChess')) {
        valorHora2 = Math.max(0, valorHora2 - 1);
        horaChess2.value = valorHora2 < 10 ? `0${valorHora2}` : valorHora2;
    }

    // Decrementa e ajusta Minuto Chess2
    if (minutoChess2.classList.contains('activedNumberChess')) {
        valorMinuto2 = Math.max(0, valorMinuto2 - 1);
        minutoChess2.value = valorMinuto2 < 10 ? `0${valorMinuto2}` : valorMinuto2;
    }

    // Decrementa e ajusta Segundo Chess2
    if (segundoChess2.classList.contains('activedNumberChess')) {
        valorSegundo2 = Math.max(0, valorSegundo2 - 1);
        segundoChess2.value = valorSegundo2 < 10 ? `0${valorSegundo2}` : valorSegundo2;
    }
});

let intervalId = null; // Armazena o ID do intervalo
let isRunning = false; // Verifica se o cronômetro está rodando
let finishTime = new Audio();
finishTime.src = './music/alarme.mp3';

// Função para iniciar o tempo
const startClock = () => {
    if (!isRunning) {
        isRunning = true; // Define como rodando
        intervalId = setInterval(() => {
            // Lógica para decrementar o tempo
            if (valorSegundo > 0) {
                valorSegundo--;
            } else if (valorMinuto > 0) {
                valorMinuto--;
                valorSegundo = 59;
            } else if (valorHora > 0) {
                valorHora--;
                valorMinuto = 59;
                valorSegundo = 59;
            } else {
                // Para o relógio quando chega a 0
                pauseClock();
                clockSong.pause();
                finishTime.play();
                play.classList.remove('pause');
                play.classList.add('play');
                pause.innerHTML = 'play_arrow';
            }

            // Atualiza os elementos HTML
            segundoChess.value = valorSegundo < 10 ? `0${valorSegundo}` : valorSegundo;
            minutoChess.value = valorMinuto < 10 ? `0${valorMinuto}` : valorMinuto;
            horaChess.value = valorHora < 10 ? `0${valorHora}` : valorHora;
        }, 1000);
    }
};

// Função para pausar o tempo
const pauseClock = () => {
    if (isRunning) {
        isRunning = false; // Define como pausado
        clearInterval(intervalId); // Para o intervalo
    }
};

// Função para iniciar o tempo
const startClock2 = () => {
    if (!isRunning) {
        isRunning = true; // Define como rodando
        intervalId = setInterval(() => {
            // Lógica para decrementar o tempo
            if (valorSegundo2 > 0) {
                valorSegundo2--;
            } else if (valorMinuto2 > 0) {
                valorMinuto2--;
                valorSegundo2 = 59;
            } else if (valorHora2 > 0) {
                valorHora2--;
                valorMinuto2 = 59;
                valorSegundo2 = 59;
            } else {
                // Para o relógio quando chega a 0
                pauseClock();
                clockSong.pause();
                finishTime.play();
                play.classList.remove('pause');
                play.classList.add('play');
                pause.innerHTML = 'play_arrow';
            }

            // Atualiza os elementos HTML
            segundoChess2.value = valorSegundo2 < 10 ? `0${valorSegundo2}` : valorSegundo2;
            minutoChess2.value = valorMinuto2 < 10 ? `0${valorMinuto2}` : valorMinuto2;
            horaChess2.value = valorHora2 < 10 ? `0${valorHora2}` : valorHora2;
        }, 1000);
    }
};

// Função para pausar o tempo
const pauseClock2 = () => {
    if (isRunning) {
        isRunning = false; // Define como pausado
        clearInterval(intervalId); // Para o intervalo
    }
};

nextNumberChess.addEventListener('click', () => {
    pauseClock();
    pauseClock2();
        switch (tempPlayer) {
            case 0:
            case -1:
                if (play.classList.contains('pause')) {
                    clockSong.pause();
                    clockSong.currentTime = 0;
                    play.classList.remove('pause');
                    play.classList.add('play');
                    pause.innerHTML = 'play_arrow';
                }
                segundoChess2.classList.remove('activedNumberChess');
                horaChess.classList.add('activedNumberChess');
                tempPlayer++
            break;
            case 1:
                horaChess.classList.remove('activedNumberChess');
                minutoChess.classList.add('activedNumberChess');
                tempPlayer++
            break;
            case 2:
            case -5:
                minutoChess.classList.remove('activedNumberChess');
                segundoChess.classList.add('activedNumberChess');
                tempPlayer++
            break;
            case 3:
            case -4:
                segundoChess.classList.remove('activedNumberChess');
                horaChess2.classList.add('activedNumberChess');
                tempPlayer++
            break;
            case 4:
            case -3:
                horaChess2.classList.remove('activedNumberChess');
                minutoChess2.classList.add('activedNumberChess');
                tempPlayer++
            break;
            case 5:
            case -2:
                minutoChess2.classList.remove('activedNumberChess');
                segundoChess2.classList.add('activedNumberChess');
                tempPlayer = 0;
            break;
            default:
            break;
        }
});

backNumberChess.addEventListener('click', () => {
    pauseClock();
    pauseClock2();
    switch (tempPlayer) {
        case 1:
        case 0:
            if (play.classList.contains('pause')) {
                clockSong.pause();
                clockSong.currentTime = 0;
                play.classList.remove('pause');
                play.classList.add('play');
                pause.innerHTML = 'play_arrow';
            }
            horaChess.classList.remove('activedNumberChess');
            segundoChess2.classList.add('activedNumberChess');
            tempPlayer--
        break;
        case -1:
            segundoChess2.classList.remove('activedNumberChess');
            minutoChess2.classList.add('activedNumberChess');
            tempPlayer--
            
        break;
        case -2:
        case 5:
            minutoChess2.classList.remove('activedNumberChess');
            horaChess2.classList.add('activedNumberChess');
            tempPlayer--
            
        break;
        case -3:
        case 4:
            horaChess2.classList.remove('activedNumberChess');
            segundoChess.classList.add('activedNumberChess');
            tempPlayer--
        break;
        case -4:
        case 3:
            segundoChess.classList.remove('activedNumberChess');
            minutoChess.classList.add('activedNumberChess');
            tempPlayer--
        break;
        case -5:
        case 2: 
            minutoChess.classList.remove('activedNumberChess');
            horaChess.classList.add('activedNumberChess');
            tempPlayer = 0;
        break;
        default:
        break;
    }
});

const play = document.querySelector('.play');
const pause = document.querySelector('.playClockChess span');

const leftClickClock = document.querySelector('.leftClock');
const rightClickClock = document.querySelector('.rightClock');

let toast = document.querySelector('.toast');
let textToast = document.querySelector('.pToast');
let imageToast = document.querySelector('.toast img');

toast.addEventListener('click', () => {
    toast.classList.remove('toastOpen');
    toast.style.animation = 'closeToast 500ms';
    setTimeout(() => {
        textToast.style.display = 'none'
        setTimeout(() => {
            toast.style.opacity = '0'
            toast.style.display = 'none'
            toast.style.animation = 'none';
        }, 500);
    }, 200);
});

let isPlaying = false;

let tempPlayer = 0;

play.addEventListener('click', () => {
    const hora1 = Number(horaChess.value);
    const minuto1 = Number(minutoChess.value);
    const segundo1 = Number(segundoChess.value);

    const hora2 = Number(horaChess2.value);
    const minuto2 = Number(minutoChess2.value);
    const segundo2 = Number(segundoChess2.value);

    if (
        (hora1 > 0 || minuto1 > 0 || segundo1 > 0) &&
    (hora2 > 0 || minuto2 > 0 || segundo2 > 0)
    )  {
        if (isPlaying) {
            finishTime.pause();
            if (leftClickClock.classList.contains('fadeInLeftClock')) {
                pauseClock2();
            }else {
                pauseClock();
            }
            clockSong.pause();
            clockSong.currentTime = 0;
            play.classList.remove('pause');
            play.classList.add('play');
            pause.innerHTML = 'play_arrow';
        } else {
            if (leftClickClock.classList.contains('fadeInLeftClock')) {
                startClock();
            }else {
                startClock2();
            }
            clockSong.play();
            play.classList.remove('play');
            play.classList.add('pause');
            pause.innerHTML = 'pause';
            tempPlayer = 0;
            console.log(tempPlayer);
            horaChess.classList.remove('activedNumberChess')
            minutoChess.classList.remove('activedNumberChess')
            segundoChess.classList.remove('activedNumberChess')
            horaChess2.classList.remove('activedNumberChess')
            minutoChess2.classList.remove('activedNumberChess')
            segundoChess2.classList.remove('activedNumberChess')
        }
        isPlaying = !isPlaying;
    }
    else if( (hora1 == 0 || minuto1 == 0 || segundo1 == 0) &&
    (hora2 == 0 || minuto2 == 0 || segundo2 == 0)) {
        toast.style.display = 'flex';
        toast.style.opacity = '1';
        setTimeout(() => {
            toast.classList.add('toastOpen');
            toast.style.animation = 'openToast 1s';
            setTimeout(() => {
                textToast.style.display = 'flex'
                textToast.innerHTML = 'Adicione um Tempo'
                
            }, 200);
        }, 200);
        setTimeout(() => {
            toast.classList.remove('toastOpen');
            toast.style.animation = 'closeToast 500ms';
            setTimeout(() => {
                textToast.style.display = 'none'
                setTimeout(() => {
                    toast.style.opacity = '0'
                    toast.style.display = 'none'
                    toast.style.animation = 'none';
                }, 500);
            }, 200);
        }, 5000);
    }
});

clockSong.addEventListener('ended', () => {
    if (isPlaying) {
        clockSong.play();
    }
});

leftClickClock.addEventListener('click', () => {
    const hora2 = Number(horaChess2.value);
    const minuto2 = Number(minutoChess2.value);
    const segundo2 = Number(segundoChess2.value);
    clickSong.play();
    if (leftClickClock.classList.contains('fadeInLeftClock')) {
        leftClickClock.classList.remove('fadeInLeftClock');
        rightClickClock.classList.remove('fadeOutRightClock');
        leftClickClock.classList.add('fadeOutLeftClock');
        rightClickClock.classList.add('fadeInRightClock');
        if (hora2 > 0 || minuto2 > 0 || segundo2 > 0) {
            pauseClock();
            startClock2();
        }
    }
})

rightClickClock.addEventListener('click', () => {
    const hora1 = Number(horaChess.value);
    const minuto1 = Number(minutoChess.value);
    const segundo1 = Number(segundoChess.value);
    clickSong.play();
    if (rightClickClock.classList.contains('fadeInRightClock')) {
        rightClickClock.classList.remove('fadeInRightClock');
        leftClickClock.classList.remove('fadeOutLeftClock');
        rightClickClock.classList.add('fadeOutRightClock');
        leftClickClock.classList.add('fadeInLeftClock');
    }
    if (hora1 > 0 || minuto1 > 0 || segundo1 > 0) {
    pauseClock2();
    startClock();
    }
})