const buttonStatus = document.querySelector('#statusButton');

buttonStatus.addEventListener('click', () => {
    document.querySelector(".status").style.display = 'none'; 
    document.querySelector(".desc").style.display = 'flex'; 
    document.querySelector("#voltarDesc").style.display = 'flex';
    document.querySelector("#btnStatus").style.transition = '0.2s linear';
    document.querySelector("#btnStatus").style.borderBottom = '2px solid black';
    document.querySelector("#btnDesc").style.transition = '0.5s linear';
    document.querySelector("#btnDesc").style.borderBottom = '2px solid rgb(92, 0, 128)';
    //Manda para o banco de dados
    //Link
    const link = document.querySelector('#link');
    const linkValue = link.value;
    if(linkValue.length == 0) {
        localStorage.setItem('link', 'Tirei da Mente Mesmo');
    }else {
        localStorage.setItem('link', linkValue);
    }
    //Nome
    const nome = document.querySelector('#nome');
    const nomeValue = nome.value;
    if(nomeValue.length == 0) {
        localStorage.setItem('nome', 'Sem Nome');
    }else {
        localStorage.setItem('nome', nomeValue);
    }
    //Descrição
    const rank = document.querySelector('#rank');
    const rankValue = rank.value;
    if(rankValue.length == 0) {
        localStorage.setItem('rank', 'Sem Rank');
    }else {
        localStorage.setItem('rank', rankValue);
    }
    //Ataque
    const ataque = document.querySelector('#ataque');
    const ataqueValue = ataque.value;
    if(ataqueValue.length == 0) {
        localStorage.setItem('ataque', '0');
    }else {
        localStorage.setItem('ataque', ataqueValue);
    }
    //Defesa
    const defesa = document.querySelector('#defesa');
    const defesaValue = defesa.value;
    if(defesaValue.length == 0) {
        localStorage.setItem('defesa', '0');
    }else {
        localStorage.setItem('defesa', defesaValue);
    }
    //Hp
    const hp = document.querySelector('#hp');
    const hpValue = hp.value;
    if(hpValue.length == 0) {
        localStorage.setItem('hp', '0');
    }else {
        localStorage.setItem('hp', hpValue);
    }
    //Agilidade
    const agilidade = document.querySelector('#agilidade');
    const agilidadeValue = agilidade.value;
    if(agilidadeValue.length == 0) {
        localStorage.setItem('agilidade', '0');
    }else {
        localStorage.setItem('agilidade', agilidadeValue);
    }
    //Energia
    const energia = document.querySelector('#energia');
    const energiaValue = energia.value;
    if(energiaValue.length == 0) {
        localStorage.setItem('energia', '0');
    }else {
        localStorage.setItem('energia', energiaValue);
    }
});

const buttonDesc = document.querySelector('#descButton');

buttonDesc.addEventListener('click', () => {
    document.querySelector("#voltarDesc").style.display = 'none';
    document.querySelector(".desc").style.display = 'none'; 
    document.querySelector(".outro").style.display = 'flex'; 
    document.querySelector("#voltarOutro").style.display = 'flex';
    document.querySelector("#btnDesc").style.transition = '0.2s linear';
    document.querySelector("#btnDesc").style.borderBottom = '2px solid black';
    document.querySelector("#btnOutro").style.transition = '0.5s linear';
    document.querySelector("#btnOutro").style.borderBottom = '2px solid rgb(92, 0, 128)';
    //Descrição
    const desc = document.querySelector('#descricao');
    const descValue = desc.value;
    if(descValue.length == 0) {
        localStorage.setItem('Desc', 'Sem Descrição');
    }else {
        localStorage.setItem('Desc', descValue);
    }
    //Observação
    const obs1 = document.querySelector('#obs1');
    const obs1Value = obs1.value;
    if(obs1Value.length == 0) {
        localStorage.setItem('Obs1', 'Sem Observação');
    }else {
        localStorage.setItem('Obs1', obs1Value);
    }
    //Observação
    const obs2 = document.querySelector('#obs2');
    const obs2Value = obs2.value;
    if(obs2Value.length == 0) {
        localStorage.setItem('Obs2', 'Sem Observação');
    }else {
        localStorage.setItem('Obs2', obs2Value);
    }
    //Observação
    const obs3 = document.querySelector('#obs3');
    const obs3Value = obs3.value;
    if(obs3Value.length == 0) {
        localStorage.setItem('Obs3', 'Sem Observação');
    }else {
        localStorage.setItem('Obs3', obs3Value);
    }
    //Observação
    const obs4 = document.querySelector('#obs4');
    const obs4Value = obs4.value;
    if(obs4Value.length == 0) {
        localStorage.setItem('Obs4', 'Sem Observação');
    }else {
        localStorage.setItem('Obs4', obs4Value);
    }
    //Observação
    const obs5 = document.querySelector('#obs5');
    const obs5Value = obs5.value;
    if(obs5Value.length == 0) {
        localStorage.setItem('Obs5', 'Sem Observação');
    }else {
        localStorage.setItem('Obs5', obs5Value);
    }
    //Observação
    const obs6 = document.querySelector('#obs6');
    const obs6Value = obs6.value;
    if(obs6Value.length == 0) {
        localStorage.setItem('Obs6', 'Sem Observação');
    }else {
        localStorage.setItem('Obs6', obs6Value);
    }
});

const buttonOutro = document.querySelector('#outroButton');

buttonOutro.addEventListener('click', () => {
    document.querySelector("#voltarOutro").style.display = 'none';
    document.querySelector(".outro").style.display = 'none'; 
    document.querySelector(".download").style.display = 'flex';
    document.querySelector("#voltarDown").style.display = 'flex'; 
    document.querySelector("#btnOutro").style.transition = '0.2s linear';
    document.querySelector("#btnOutro").style.borderBottom = '2px solid black';
    document.querySelector("#btnCopy").style.transition = '0.5s linear';
    document.querySelector("#btnCopy").style.borderBottom = '2px solid rgb(92, 0, 128)';
    //Cooldown
    const cool = document.querySelector('#cooldown');
    const coolValue = cool.value;
    if(coolValue.length == 0) {
        localStorage.setItem('cool', '0');
    }else {
        localStorage.setItem('cool', coolValue);
    }
    //Fuga
    const fuga = document.querySelector('#fuga');
    const fugaValue = fuga.value;
    if(fugaValue.length == 0) {
        localStorage.setItem('fuga', 'Sem Fuga');
    }else {
        localStorage.setItem('fuga', fugaValue);
    }
    //Usuários
    const user = document.querySelector('#usuarios');
    const userValue = user.value;
    if(userValue.length == 0) {
        localStorage.setItem('user', 'Sem usuário');
    }else {
        localStorage.setItem('user', userValue);
    }
    //Preço
    const preco = document.querySelector('#preco');
    const precoValue = preco.value;
    if(precoValue.length == 0) {
        localStorage.setItem('preco', '0,00');
    }else {
        localStorage.setItem('preco', precoValue);
    }
    const conteudo = localStorage.getItem('link') + "\n\n" +  `*${localStorage.getItem('nome')}*` + "\n\n" + `*${localStorage.getItem('rank')}*` + "\n\n" + "*Atk*: " + localStorage.getItem('ataque') + "\n\n" + "*Def*: " + localStorage.getItem('defesa') + "\n\n" + "*Hp*: " + localStorage.getItem('hp') + "\n\n" + "*Agl*: " + localStorage.getItem('agilidade') + "\n\n" + "*Eng*: " + localStorage.getItem('energia') + "\n\n" + "*Descrição*: " + localStorage.getItem('Desc') + "\n\n" + "*Obs 1*: " + localStorage.getItem('Obs1') + "\n\n"  + "*Obs 2*: " + localStorage.getItem('Obs2') + "\n\n"  + "*Obs 3*: " + localStorage.getItem('Obs3') + "\n\n"  + "*Obs 4*: " + localStorage.getItem('Obs4') + "\n\n" + "*Obs 5*: " + localStorage.getItem('Obs5') + "\n\n"  + "*Obs 6*: " + localStorage.getItem('Obs6') + "\n\n" + "*Cooldown*: " + localStorage.getItem('cool') + "\n\n"  + "*Fuga*: " + localStorage.getItem('fuga') + "\n\n"  + "*Usuário*: " + localStorage.getItem('user') + "\n\n"  + "*Preço*: " + localStorage.getItem('preco') + "\n\n";
    const descricao = document.querySelector('#downloadText').value = conteudo;
});

const copiar = document.querySelector('#copiar');

copiar.addEventListener('click', () => {
    document.querySelector('#copiar').innerHTML = 'Copiado <span class="material-symbols-outlined">done</span></button>';
    setTimeout(() => {
        document.querySelector('#copiar').innerHTML = 'Copiar <span class="material-symbols-outlined">content_copy</span></button>';
    }, 2000);
    const descricao = document.querySelector('#downloadText');
    descricao.select();
    descricao.setSelectionRange(0, 99999);
    document.execCommand('copy');
});

//Função dos botões de voltar

const buttonVoltar = document.querySelector('#voltarDesc');

buttonVoltar.addEventListener('click', () => {
    document.querySelector("#voltarDesc").style.display = 'none'; 
    document.querySelector(".status").style.display = 'flex'; 
    document.querySelector(".desc").style.display = 'none';
    document.querySelector("#btnDesc").style.transition = '0.2s linear';
    document.querySelector("#btnDesc").style.borderBottom = '2px solid black';
    document.querySelector("#btnStatus").style.transition = '0.5s linear';
    document.querySelector("#btnStatus").style.borderBottom = '2px solid rgb(92, 0, 128)';
});

const voltarOutro = document.querySelector('#voltarOutro');

voltarOutro.addEventListener('click', () => {
    document.querySelector("#voltarOutro").style.display = 'none';
    document.querySelector("#voltarDesc").style.display = 'flex'; 
    document.querySelector(".desc").style.display = 'flex'; 
    document.querySelector(".outro").style.display = 'none';
    document.querySelector("#btnOutro").style.transition = '0.2s linear';
    document.querySelector("#btnOutro").style.borderBottom = '2px solid black';
    document.querySelector("#btnDesc").style.transition = '0.5s linear';
    document.querySelector("#btnDesc").style.borderBottom = '2px solid rgb(92, 0, 128)';
});

const voltarDownload = document.querySelector('#voltarDown');

voltarDownload.addEventListener('click', () => {
    document.querySelector("#voltarDown").style.display = 'none'; 
    document.querySelector("#voltarOutro").style.display = 'flex';
    document.querySelector(".outro").style.display = 'flex'; 
    document.querySelector(".download").style.display = 'none';
    document.querySelector("#btnCopy").style.transition = '0.2s linear';
    document.querySelector("#btnCopy").style.borderBottom = '2px solid black';
    document.querySelector("#btnOutro").style.transition = '0.5s linear';
    document.querySelector("#btnOutro").style.borderBottom = '2px solid rgb(92, 0, 128)';
});

//Linguagens 

const eua = {
    inicio: 'Home',
    cursos: 'Courses',
    jogos: 'Games',
    portfolio: 'Portfolio',
    contato: 'Contact',
    sobre: 'About',
    titleProject: 'RPG Character Generator for WhatsApp',
    textProject: "This project is a character generator for RPG on WhatsApp, developed with HTML, CSS, and JavaScript. Users fill in the available fields to customize their character, and at the end, they receive all the formatted data, ready to copy and paste directly into WhatsApp. With a design inspired by the amazing anime *Solo Leveling*, the project's visual is dynamic and immersive, bringing the vibe of hunters and portals to fans of the anime and RPGs!",
    logoSolo: './image/logoSoloLeveling.png',
    btnVoltar: 'Back',
    statusP: 'Status',
    descP: 'Description',
    outroP: 'Others',
    copyP: 'Copy',
    descricao: 'Description',
    obs1: 'Observation 1',
    obs2: 'Observation 2',
    obs3: 'Observation 3',
    obs4: 'Observation 4',
    obs5: 'Observation 5',
    obs6: 'Observation 6',
    cooldown: 'Cooldown',
    fuga: 'Escape',
    usuarios: 'Users',
    preco: 'Price',
    linkStatus: 'Link',
nomeStatus: 'Name',
rankStatus: 'Rank',
ataqueStatus: 'Attack',
defesaStatus: 'Defense',
hpStatus: 'HP',
agilidadeStatus: 'Agility',
energiaStatus: 'Energy',
next: 'Next',

};

const brasil = {
    inicio: 'Ínicio',
    cursos: 'Cursos',
    jogos: 'Jogos',
    portfolio: 'Portfólio',
    contato: 'Contato',
    sobre: 'Sobre',
    titleProject: 'Gerador de Personagens de RPG no WhatsApp',
    textProject: 'Este projeto é um gerador de personagens para RPG no WhatsApp, desenvolvido com HTML, CSS e JavaScript. O usuário preenche os campos disponíveis, personalizando seu personagem, e no final recebe todos os dados formatados, prontos para copiare colar diretamente no WhatsApp. Com um design inspirado no incrível animeSolo Leveling, o visual do projeto é dinâmico e imersivo, trazendo a vibe de caçadorese portais para os fãs do anime e RPGs!',
    logoSolo: './image/logoSoloLeveling.png',
    btnVoltar: 'Voltar',
    statusP: 'Status',
    descP: 'Descrição',
    outroP: 'Outros',
    copyP: 'Copiar',
    descricao: 'Descrição',
    obs1: 'Observação 1',
    obs2: 'Observação 2',
    obs3: 'Observação 3',
    obs4: 'Observação 4',
    obs5: 'Observação 5',
    obs6: 'Observação 6',
    cooldown: 'Cooldown',
    fuga: 'Fuga',
    usuarios: 'Usuários',
    preco: 'Preço',
    linkStatus: 'Link',
    nomeStatus: 'Nome',
    rankStatus: 'Rank',
    ataqueStatus: 'Ataque',
    defesaStatus: 'Defesa',
hpStatus: 'Hp',
agilidadeStatus: 'Agilidade',
energiaStatus: 'Energia',
next: 'Próximo',
};

const spain = {
    inicio: 'Comenzar',
    cursos: 'Cursos',
    jogos: 'Juegos',
    portfolio: 'Portafolio',
    contato: 'Contacto',
    sobre: 'En',
    titleProject: 'Generador de Personajes de RPG para WhatsApp',
    textProject: 'Este proyecto es un generador de personajes para RPG en WhatsApp, desarrollado con HTML, CSS y JavaScript. El usuario completa los campos disponibles para personalizar su personaje y, al final, recibe todos los datos formateados, listos para copiar y pegar directamente en WhatsApp. Con un diseño inspirado en el increíble anime *Solo Leveling*, el aspecto del proyecto es dinámico e inmersivo, transmitiendo la vibra de cazadores y portales para los fanáticos del anime y los RPGs.',
    logoSolo: './image/logoSoloLeveling.png',
    btnVoltar: 'Volver',
    statusP: 'Estado',
    descP: 'Descripción',
    outroP: 'Otros',
    copyP: 'Copiar',
    descricao: 'Descripción',
    obs1: 'Observación 1',
    obs2: 'Observación 2',
    obs3: 'Observación 3',
    obs4: 'Observación 4',
    obs5: 'Observación 5',
    obs6: 'Observación 6',
    cooldown: 'Recarga',
    fuga: 'Escape',
    usuarios: 'Usuarios',
    preco: 'Precio',
    linkStatus: 'Enlace',
nomeStatus: 'Nombre',
rankStatus: 'Rango',
ataqueStatus: 'Ataque',
defesaStatus: 'Defensa',
hpStatus: 'HP',
agilidadeStatus: 'Agilidad',
energiaStatus: 'Energía',
next: 'Siguiente',

};

const franca = {
    inicio: 'Commencer',
    cursos: 'Cours',
    jogos: 'Jeux',
    portfolio: 'Portefeuille',
    contato: 'Contact',
    sobre: 'Sur',
    titleProject: 'Générateur de Personnages de RPG pour WhatsApp',
    textProject: 'Ce projet est un générateur de personnages pour RPG sur WhatsApp, développé avec HTML, CSS et JavaScript. L’utilisateur remplit les champs disponibles pour personnaliser son personnage, et à la fin, il reçoit toutes les données formatées, prêtes à être copiées et collées directement dans WhatsApp. Avec un design inspiré par l’incroyable anime *Solo Leveling*, le visuel du projet est dynamique et immersif, apportant l’ambiance des chasseurs et des portails aux fans de l’anime et des RPG.',
    logoSolo: './image/logoSoloLeveling.png',
    btnVoltar: 'Retour',
    statusP: 'Statut',
    descP: 'Description',
    outroP: 'Autres',
    copyP: 'Copier',
    descricao: 'Description',
    obs1: 'Observation 1',
    obs2: 'Observation 2',
    obs3: 'Observation 3',
    obs4: 'Observation 4',
    obs5: 'Observation 5',
    obs6: 'Observation 6',
    cooldown: 'Temps de récupération',
    fuga: 'Évasion',
    usuarios: 'Utilisateurs',
    preco: 'Prix',
    linkStatus: 'Lien',
nomeStatus: 'Nom',
rankStatus: 'Rang',
ataqueStatus: 'Attaque',
defesaStatus: 'Défense',
hpStatus: 'HP',
agilidadeStatus: 'Agilité',
energiaStatus: 'Énergie',
next: 'Suivant',

};

const china = {
    inicio: '开始',
    cursos: '课程',
    jogos: '游戏',
    portfolio: '作品集',
    contato: '接触',
    sobre: '在',
    titleProject: 'WhatsApp RPG角色生成器',
    textProject: '该项目是一个用于WhatsApp的RPG角色生成器，使用HTML、CSS和JavaScript开发。用户填写可用字段，自定义他们的角色，最终会收到所有格式化的数据，直接可以复制粘贴到WhatsApp中。项目的设计灵感来自于令人惊叹的动漫《Solo Leveling》，其视觉效果动态且沉浸，带来了猎人和传送门的氛围，专为动漫和RPG爱好者打造。',
    logoSolo: './image/soloLevelingLogoChines.webp',
    btnVoltar: '返回',
    statusP: '状态',
    descP: '描述',
    outroP: '其他',
    copyP: '复制',
    descricao: '描述',
    obs1: '观察 1',
    obs2: '观察 2',
    obs3: '观察 3',
    obs4: '观察 4',
    obs5: '观察 5',
    obs6: '观察 6',
    cooldown: '冷却时间',
    fuga: '逃脱',
    usuarios: '用户',
    preco: '价格',
    linkStatus: '链接',
nomeStatus: '名称',
rankStatus: '排名',
ataqueStatus: '攻击',
defesaStatus: '防御',
hpStatus: '生命值',
agilidadeStatus: '敏捷',
energiaStatus: '能量',
next: '下一个',

};

const elementos = {
    inicio: document.querySelectorAll('.inicio'),
    cursos: document.querySelectorAll('.cursos'),
    jogos: document.querySelectorAll('.jogos'),
    portfolio: document.querySelectorAll('.portfolio'),
    contato: document.querySelectorAll('.contato'),
    sobre: document.querySelectorAll('.sobre'),
    titleProject: document.querySelector('.textProject > h1'),
    textProject: document.querySelector('.textProject > p'),
    logoSolo: document.querySelector('.textProject img'),
    voltarDesc: document.querySelector('.voltarDesc'),
    voltarOutro: document.querySelector('.voltarOutro'),
    voltarDown: document.querySelector('.voltarDown'),
    statusP: document.querySelector('.statusP'),
    descP: document.querySelector('.descP'),
    outroP: document.querySelector('.outroP'),
    copyP: document.querySelector('.copyP'),
    descricao: document.querySelector('.descricao'),
    obs1: document.querySelector('.obs1'),
    obs2: document.querySelector('.obs2'),
    obs3: document.querySelector('.obs3'),
    obs4: document.querySelector('.obs4'),
    obs5: document.querySelector('.obs5'),
    obs6: document.querySelector('.obs6'),
    cooldown: document.querySelector('.cooldown'),
    fuga: document.querySelector('.fuga'),
    usuarios: document.querySelector('.usuarios'),
    preco: document.querySelector('.preco'),
    copiarBtn: document.querySelector('.copiar'),
    linkStatus: document.querySelector('.linkStatus'),
    nomeStatus: document.querySelector('.nomeStatus'),
    rankStatus: document.querySelector('.rankStatus'),
    ataqueStatus: document.querySelector('.ataqueStatus'),
    defesaStatus: document.querySelector('.defesaStatus'),
    hpStatus: document.querySelector('.hpStatus'),
    agilidadeStatus: document.querySelector('.agilidadeStatus'),
    energiaStatus: document.querySelector('.energiaStatus'),
    nextStatus: document.querySelector('#statusButton p'),
    nextDesc: document.querySelector('#descButton p'),
    nextOutro: document.querySelector('#outroButton p'),
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
        portfolioText.innerHTML = eua.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= eua.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = eua.sobre;
    });  
    elementos.titleProject.innerHTML = eua.titleProject;  
    elementos.textProject.innerHTML = eua.textProject;
    elementos.logoSolo.src = eua.logoSolo;
    elementos.voltarDesc.innerHTML = eua.btnVoltar;
    elementos.voltarDown.innerHTML = eua.btnVoltar;
    elementos.voltarOutro.innerHTML = eua.btnVoltar;
    elementos.statusP.innerHTML = eua.statusP;
    elementos.descP.innerHTML = eua.descP;
    elementos.outroP.innerHTML = eua.outroP;
    elementos.copyP.innerHTML = eua.copyP;
    elementos.descricao.innerHTML = eua.descricao;
    elementos.obs1.innerHTML = eua.obs1;
    elementos.obs2.innerHTML = eua.obs2;
    elementos.obs3.innerHTML = eua.obs3;
    elementos.obs4.innerHTML = eua.obs4;
    elementos.obs5.innerHTML = eua.obs5;
    elementos.obs6.innerHTML = eua.obs6;
    elementos.cooldown.innerHTML = eua.cooldown;
    elementos.fuga.innerHTML = eua.fuga;
    elementos.preco.innerHTML = eua.preco;
    elementos.usuarios.innerHTML = eua.usuarios;
    elementos.copiarBtn.innerHTML = eua.copyP;
    elementos.linkStatus.innerHTML = eua.linkStatus;
    elementos.nomeStatus.innerHTML = eua.nomeStatus;
    elementos.ataqueStatus.innerHTML = eua.ataqueStatus;
    elementos.rankStatus.innerHTML = eua.rankStatus;
    elementos.defesaStatus.innerHTML = eua.defesaStatus;
    elementos.hpStatus.innerHTML = eua.hpStatus;
    elementos.agilidadeStatus.innerHTML = eua.agilidadeStatus;
    elementos.energiaStatus.innerHTML = eua.energiaStatus;
    elementos.nextStatus.innerHTML = eua.next;
    elementos.nextDesc.innerHTML = eua.next;
    elementos.nextOutro.innerHTML = eua.next;
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
        portfolioText.innerHTML = brasil.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= brasil.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = brasil.sobre;
    }); 
    elementos.titleProject.innerHTML = brasil.titleProject;  
    elementos.textProject.innerHTML = brasil.textProject; 
    elementos.logoSolo.src = brasil.logoSolo;
    elementos.voltarDesc.innerHTML = brasil.btnVoltar;
    elementos.voltarDown.innerHTML = brasil.btnVoltar;
    elementos.voltarOutro.innerHTML = brasil.btnVoltar;
    elementos.statusP.innerHTML = brasil.statusP;
    elementos.descP.innerHTML = brasil.descP;
    elementos.outroP.innerHTML = brasil.outroP;
    elementos.copyP.innerHTML = brasil.copyP;
    elementos.descricao.innerHTML = brasil.descricao;
    elementos.obs1.innerHTML = brasil.obs1;
    elementos.obs2.innerHTML = brasil.obs2;
    elementos.obs3.innerHTML = brasil.obs3;
    elementos.obs4.innerHTML = brasil.obs4;
    elementos.obs5.innerHTML = brasil.obs5;
    elementos.obs6.innerHTML = brasil.obs6;
    elementos.cooldown.innerHTML = brasil.cooldown;
    elementos.fuga.innerHTML = brasil.fuga;
    elementos.preco.innerHTML = brasil.preco;
    elementos.usuarios.innerHTML = brasil.usuarios;
    elementos.copiarBtn.innerHTML = brasil.copyP;
    elementos.linkStatus.innerHTML = brasil.linkStatus;
    elementos.nomeStatus.innerHTML = brasil.nomeStatus;
    elementos.ataqueStatus.innerHTML = brasil.ataqueStatus;
    elementos.rankStatus.innerHTML = brasil.rankStatus;
    elementos.defesaStatus.innerHTML = brasil.defesaStatus;
    elementos.hpStatus.innerHTML = brasil.hpStatus;
    elementos.agilidadeStatus.innerHTML = brasil.agilidadeStatus;
    elementos.energiaStatus.innerHTML = brasil.energiaStatus;
    elementos.nextStatus.innerHTML = brasil.next;
    elementos.nextDesc.innerHTML = brasil.next;
    elementos.nextOutro.innerHTML = brasil.next;
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
        portfolioText.innerHTML = spain.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= spain.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = spain.sobre;
    });  
    elementos.titleProject.innerHTML = spain.titleProject;  
    elementos.textProject.innerHTML = spain.textProject;
    elementos.logoSolo.src = spain.logoSolo;
    elementos.voltarDesc.innerHTML = spain.btnVoltar;
    elementos.voltarDown.innerHTML = spain.btnVoltar;
    elementos.voltarOutro.innerHTML = spain.btnVoltar;
    elementos.statusP.innerHTML = spain.statusP;
    elementos.descP.innerHTML = spain.descP;
    elementos.outroP.innerHTML = spain.outroP;
    elementos.copyP.innerHTML = spain.copyP;
    elementos.descricao.innerHTML = spain.descricao;
    elementos.obs1.innerHTML = spain.obs1;
    elementos.obs2.innerHTML = spain.obs2;
    elementos.obs3.innerHTML = spain.obs3;
    elementos.obs4.innerHTML = spain.obs4;
    elementos.obs5.innerHTML = spain.obs5;
    elementos.obs6.innerHTML = spain.obs6;
    elementos.cooldown.innerHTML = spain.cooldown;
    elementos.fuga.innerHTML = spain.fuga;
    elementos.preco.innerHTML = spain.preco;
    elementos.usuarios.innerHTML = spain.usuarios;
    elementos.copiarBtn.innerHTML = spain.copyP;
    elementos.linkStatus.innerHTML = spain.linkStatus;
    elementos.nomeStatus.innerHTML = spain.nomeStatus;
    elementos.ataqueStatus.innerHTML = spain.ataqueStatus;
    elementos.rankStatus.innerHTML = spain.rankStatus;
    elementos.defesaStatus.innerHTML = spain.defesaStatus;
    elementos.hpStatus.innerHTML = spain.hpStatus;
    elementos.agilidadeStatus.innerHTML = spain.agilidadeStatus;
    elementos.energiaStatus.innerHTML = spain.energiaStatus;
    elementos.nextStatus.innerHTML = spain.next;
    elementos.nextDesc.innerHTML = spain.next;
    elementos.nextOutro.innerHTML = spain.next;
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
        portfolioText.innerHTML = franca.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= franca.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = franca.sobre;
    });   
    elementos.titleProject.innerHTML = franca.titleProject;  
    elementos.textProject.innerHTML = franca.textProject;
    elementos.logoSolo.src = franca.logoSolo;
    elementos.voltarDesc.innerHTML = franca.btnVoltar;
    elementos.voltarDown.innerHTML = franca.btnVoltar;
    elementos.voltarOutro.innerHTML = franca.btnVoltar;
    elementos.statusP.innerHTML = franca.statusP;
    elementos.descP.innerHTML = franca.descP;
    elementos.outroP.innerHTML = franca.outroP;
    elementos.copyP.innerHTML = franca.copyP;
    elementos.descricao.innerHTML = franca.descricao;
    elementos.obs1.innerHTML = franca.obs1;
    elementos.obs2.innerHTML = franca.obs2;
    elementos.obs3.innerHTML = franca.obs3;
    elementos.obs4.innerHTML = franca.obs4;
    elementos.obs5.innerHTML = franca.obs5;
    elementos.obs6.innerHTML = franca.obs6;
    elementos.cooldown.innerHTML = franca.cooldown;
    elementos.fuga.innerHTML = franca.fuga;
    elementos.preco.innerHTML = franca.preco;
    elementos.usuarios.innerHTML = franca.usuarios;
    elementos.copiarBtn.innerHTML = franca.copyP;
    elementos.linkStatus.innerHTML = franca.linkStatus;
    elementos.nomeStatus.innerHTML = franca.nomeStatus;
    elementos.ataqueStatus.innerHTML = franca.ataqueStatus;
    elementos.rankStatus.innerHTML = franca.rankStatus;
    elementos.defesaStatus.innerHTML = franca.defesaStatus;
    elementos.hpStatus.innerHTML = franca.hpStatus;
    elementos.agilidadeStatus.innerHTML = franca.agilidadeStatus;
    elementos.energiaStatus.innerHTML = franca.energiaStatus;
    elementos.nextStatus.innerHTML = franca.next;
    elementos.nextDesc.innerHTML = franca.next;
    elementos.nextOutro.innerHTML = franca.next;
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
        portfolioText.innerHTML = china.portfolio;
    });
    elementos.contato.forEach((contatoText) => {
        contatoText.innerHTML= china.contato;
    });
    elementos.sobre.forEach((sobreText) => {
        sobreText.innerHTML = china.sobre;
    });  
    elementos.titleProject.innerHTML = china.titleProject;  
    elementos.textProject.innerHTML = china.textProject;
    elementos.logoSolo.src = china.logoSolo;
    elementos.voltarDesc.innerHTML = china.btnVoltar;
    elementos.voltarDown.innerHTML = china.btnVoltar;
    elementos.voltarOutro.innerHTML = china.btnVoltar;
    elementos.statusP.innerHTML = china.statusP;
    elementos.descP.innerHTML = china.descP;
    elementos.outroP.innerHTML = china.outroP;
    elementos.copyP.innerHTML = china.copyP;
    elementos.descricao.innerHTML = china.descricao;
    elementos.obs1.innerHTML = china.obs1;
    elementos.obs2.innerHTML = china.obs2;
    elementos.obs3.innerHTML = china.obs3;
    elementos.obs4.innerHTML = china.obs4;
    elementos.obs5.innerHTML = china.obs5;
    elementos.obs6.innerHTML = china.obs6;
    elementos.cooldown.innerHTML = china.cooldown;
    elementos.fuga.innerHTML = china.fuga;
    elementos.preco.innerHTML = china.preco;
    elementos.usuarios.innerHTML = china.usuarios;
    elementos.copiarBtn.innerHTML = china.copyP;
    elementos.linkStatus.innerHTML = china.linkStatus;
    elementos.nomeStatus.innerHTML = china.nomeStatus;
    elementos.ataqueStatus.innerHTML = china.ataqueStatus;
    elementos.rankStatus.innerHTML = china.rankStatus;
    elementos.defesaStatus.innerHTML = china.defesaStatus;
    elementos.hpStatus.innerHTML = china.hpStatus;
    elementos.agilidadeStatus.innerHTML = china.agilidadeStatus;
    elementos.energiaStatus.innerHTML = china.energiaStatus;
    elementos.nextStatus.innerHTML = china.next;
    elementos.nextDesc.innerHTML = china.next;
    elementos.nextOutro.innerHTML = china.next;
}

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