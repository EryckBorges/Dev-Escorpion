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