import { 
    dilucAvatarCompra, 
    ventiAvatarCompra, 
    jeanAvatarCompra, 
    albedoAvatarCompra, 
    monaAvatarCompra, 
    kleeAvatarCompra, 
    eulaAvatarCompra,
    barbaraAvatarCompra,
    razorAvatarCompra,
    amberAvatarCompra,
    bennettAvatarCompra,
    rosariaAvatarCompra,
    sucroseAvatarCompra,
    fischlAvatarCompra,
    dionaAvatarCompra,
    noelleAvatarCompra,
    kaeyaAvatarCompra,
    lisaAvatarCompra,
    mikaAvatarCompra,
    //Liyue
    hutaoAvatarCompra,
    zhongliAvatarCompra,
    ganyuAvatarCompra,
    shenheAvatarCompra,
    xiaoAvatarCompra,
    baizhuAvatarCompra,
    qiqiAvatarCompra,
    yelanAvatarCompra,
    keqingAvatarCompra,
    yaoyaoAvatarCompra,
    xianglingAvatarCompra,
    ningguangAvatarCompra,
    xingqiuAvatarCompra,
    yanfeiAvatarCompra,
    beidouAvatarCompra,
    yunjinAvatarCompra,
    xinyanAvatarCompra,
    chongyunAvatarCompra,
    //Inazuma
    aratakiAvatarCompra,
    raidenAvatarCompra,
    yoimiyaAvatarCompra,
    yaemikoAvatarCompra,
    kazuhaAvatarCompra,
    ayakaAvatarCompra,
    ayatoAvatarCompra,
    kokomiAvatarCompra,
    kukiAvatarCompra,
    heizouAvatarCompra,
    sayuAvatarCompra,
    kiraraAvatarCompra,
    thomaAvatarCompra,
    gorouAvatarCompra,
    saraAvatarCompra,
    //Sumeru
    nahidaAvatarCompra,
    alhaithamAvatarCompra,
    cynoAvatarCompra,
    nilouAvatarCompra,
    dehyaAvatarCompra,
    tighnariAvatarCompra,
    wandererAvatarCompra,
    colleiAvatarCompra,
    doriAvatarCompra,
    kavehAvatarCompra,
    laylaAvatarCompra,
    faruzanAvatarCompra,
    candaceAvatarCompra,
    //Fontaine
    furinaAvatarCompra,
    naviaAvatarCompra,
    neuvilletteAvatarCompra,
    wriothesleyAvatarCompra,
    lyneyAvatarCompra,
    lynetteAvatarCompra,
    freminetAvatarCompra,
    charlotteAvatarCompra,
    chevreuseAvatarCompra,
    //Snezhnaya
    tartagliaAvatarCompra,
    //Skins
    
    dilucSkinAvatarCompra,
    jeanSkinAvatarCompra,
    kleeSkinAvatarCompra,
    barbaraSkinAvatarCompra,
    ayakaSkinAvatarCompra,
    fischlSkinAvatarCompra,
    keqingSkinAvatarCompra,
    ningguangSkinAvatarCompra,
    lisaSkinAvatarCompra,
    kaeyaSkinAvatarCompra,
} from "../js/caracters.js";


  
import { compraDica, btnBonusCompra } from "../js/compraDica.js";

import { salvarUser } from "../js/user.js";

import { verificaCompraDiluc, 
    verificaCompraVenti,
    verificaCompraMona,
    verificaCompraBarbara,
    verificaCompraAlbedo,
    verificaCompraAmber,
    verificaCompraKlee,
    verificaCompraJean,
    verificaCompraRazor,
    verificaCompraEula,
    verificaCompraDiona,
    verificaCompraNoelle,
    verificaCompraFischl,
    verificaCompraKaeya,
    verificaCompraBennett,
    verificaCompraLisa,
    verificaCompraRosaria,
    verificaCompraSucrose,
    verificaCompraMika,
    //Liyue
    verificaCompraZhongli,
    verificaCompraHutao,
    verificaCompraYelan,
    verificaCompraGanyu,
    verificaCompraXiao,
    verificaCompraQiqi,
    verificaCompraBaizhu,
    verificaCompraShenhe,
    verificaCompraKeqing,
    verificaCompraYaoyao,
    verificaCompraYanfei,
    verificaCompraYunjin,
    verificaCompraXinyan,
    verificaCompraBeidou,
    verificaCompraChongyun,
    verificaCompraNingguang,
    verificaCompraXingqiu,
    verificaCompraXiangling,
    //Inazuma
    verificaCompraRaiden,
    verificaCompraKazuha,
    verificaCompraArataki,
    verificaCompraKokomi,
    verificaCompraAyato,
    verificaCompraAyaka,
    verificaCompraYaeMiko,
    verificaCompraYoimiya,
    verificaCompraSayu,
    verificaCompraSara,
    verificaCompraThoma,
    verificaCompraGorou,
    verificaCompraKuki,
    verificaCompraHeizou,
    verificaCompraKirara,
    //Sumeru
    verificaCompraNahida,
    verificaCompraAlhaitham,
    verificaCompraDehya,
    verificaCompraTighnari,
    verificaCompraWanderer,
    verificaCompraNilou,
    verificaCompraCyno,
    verificaCompraDori,
    verificaCompraKaveh,
    verificaCompraCandace,
    verificaCompraFaruzan,
    verificaCompraCollei,
    verificaCompraLayla,
    //Fontaine
    verificaCompraNeuvillette, 
    verificaCompraWriothesley, 
    verificaCompraNavia,
    verificaCompraLyney, 
    verificaCompraFurina, 
    verificaCompraLynette, 
    verificaCompraFreminet, 
    verificaCompraCharlotte,
    verificaCompraChevreuse,
    //Snazhnaya
    verificaCompraTartaglia,
    //Skins
    verificaCompraDilucAvatarSkin,
    verificaCompraJeanSkinAvatar,
    verificaCompraKleeSkinAvatar,
    verificaCompraAyakaSkinAvatar,
    verificaCompraBarbaraSkinAvatar,
    verificaCompraFischlSkinAvatar,
    verificaCompraNingguangSkinAvatar,
    verificaCompraKeqingSkinAvatar,
    verificaCompraLisaSkinAvatar,
    verificaCompraKaeyaSkinAvatar,
} from "../js/verificaCompra.js";

import { 
    addDiluc, 
    addVenti, 
    addEula, 
    addMona, 
    addAlbedo, 
    addBarbara, 
    addAmber, 
    addJean, 
    addKlee, 
    addRazor, 
    addNoelle,
    addRosaria, 
    addSucrose, 
    addFischl, 
    addKaeya, 
    addLisa, 
    addDiona, 
    addBennett,
    addMika,
    //Liyue
    addZhongli,
    addHutao,
    addYelan,
    addGanyu,
    addXiao,
    addQiqi,
    addBaizhu,
    addShenhe,
    addKeqing,
    addYaoyao,
    addYanfei,
    addYunjin,
    addXinyan,
    addBeidou,
    addChongyun,
    addNingguang,
    addXingqiu,
    addXiangling,
    //Inazuma
    addRaiden,
    addKazuha,
    addYaeMiko,
    addKokomi,
    addArataki,
    addYoimiya,
    addAyato,
    addAyaka,
    addSara,
    addSayu,
    addThoma,
    addHeizou,
    addKuki,
    addGorou,
    addKirara,   
    //Sumeru
    addNahida,
    addAlhaitham,
    addDehya,
    addTighnari,
    addWanderer,
    addNilou,
    addCyno,
    addDori,
    addKaveh,
    addCandace,
    addFaruzan,
    addCollei,
    addLayla,
    //Fontaine 
    addLyney, 
    addNeuvillette, 
    addWriothesley, 
    addFurina, 
    addNavia,
    addFreminet, 
    addCharlotte, 
    addLynette, 
    addChevreuse, 
    //Snezhnaya
    addTartaglia,
    //Skins
    addDilucSkin,
    addJeanSkin,
    addKleeSkin,
    addAyakaSkin,
    addBarbaraSkin,
    addFischlSkin,
    addNingguangSkin,
    addKeqingSkin,
    addLisaSkin,
    addKaeyaSkin,
} from "../js/adicionaCaracter.js";

const dica = document.querySelector('#dica');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const imagem = document.querySelector('#img-fundo');
const btnAgain = document.querySelector('#btnAgain');
const vidasDiv = document.querySelector('#vidas');
const vida1 = document.querySelector('#vida1');
const vida2 = document.querySelector('#vida2');
const vida3 = document.querySelector('#vida3');
const pont = document.querySelector('#input-pont');
const dicaBonus = document.querySelector('#bonus');
const btnBonus = document.querySelector('#btnDica');
const init = document.querySelector("#init");
const initImg = document.querySelector("#init #initImg");
const initImg2 = document.querySelector("#init #initImg2");

document.onload = setTimeout(() => {
    initImg.src = "./icon/HoYoverse.png";
    initImg.style.animation = 'init 5s linear';
    setTimeout(() => {
        initImg.style.display = 'block';
    }, 5000);
    setTimeout(() => {
        initImg2.src = "./icon/Genshin.png";
        initImg2.style.animation = 'init2 5s linear';
        setTimeout(() => {
            init.style.animation = "closeInit 1s linear";
            setTimeout(() => {
                init.style.display = 'none';
                const audio = new Audio();
                const efeito = "./music/somBack.mp3";
                audio.src = efeito;
                function reiniciarReproducao() {
                    audio.currentTime = 0;  
                    audio.play();           
                }
                audio.addEventListener('ended', reiniciarReproducao);
                audio.play();
            }, 300);
        }, 6000);
    }, 6000);
}, 5000);


//exibe o user 

document.querySelector('#imgUser').src = localStorage.getItem('imgUser');
document.querySelector('#name').innerHTML = localStorage.getItem('nomeUser');
document.querySelector('#imgUser').style.background = localStorage.getItem('colorUser');
document.querySelector('#input-pont').style.background = localStorage.getItem('Money');


//Configura isso na parte de edição de usuário

document.querySelector('#imgPerfil img').src = localStorage.getItem('imgUser');
document.querySelector('#nickName').value = localStorage.getItem('nomeUser');
document.querySelector('#imgPerfil img').style.background = localStorage.getItem('colorUser');

if(document.querySelector('#name').innerHTML == '') {
    document.querySelector('#imgUser').src = 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/viajante.png';
    document.querySelector('#name').innerHTML = 'Aether';
    document.querySelector('#imgUser').style.background =  '#000';
    document.querySelector('#imgPerfil img').src = 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/viajante.png';
    document.querySelector('#nickName').value = 'Aether';
    document.querySelector('#imgPerfil img').style.background = '#000';
}

//É uma função para verificar se esse avatar ja foi comprado

const dilucVerifica = () => {
    if(localStorage.getItem('dilucAvatar') == 'comprado') {
        document.querySelector('#diluc').classList.remove('disabled');
        document.querySelector('#diluc').removeAttribute('disabled');
        let imgSelect = document.querySelector('#diluc img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('dilucAvatar') !== 'comprado') {
        document.querySelector('#diluc').classList.add('disabled');
        document.querySelector('#diluc').setAttribute('disabled', 'true');
    }
}

dilucVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const albedoVerifica = () => {
    if(localStorage.getItem('albedoAvatar') == 'comprado') {
        document.querySelector('#albedo').classList.remove('disabled');
        document.querySelector('#albedo').removeAttribute('disabled');
        let imgSelect = document.querySelector('#albedo img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('albedoAvatar') !== 'comprado') {
        document.querySelector('#albedo').classList.add('disabled');
        document.querySelector('#albedo').setAttribute('disabled', 'true');
    }
}

albedoVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const ventiVerifica = () => {
    if(localStorage.getItem('ventiAvatar') == 'comprado') {
        document.querySelector('#venti').classList.remove('disabled');
        document.querySelector('#venti').removeAttribute('disabled');
        let imgSelect = document.querySelector('#venti img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('ventiAvatar') !== 'comprado') {
        document.querySelector('#venti').classList.add('disabled');
        document.querySelector('#venti').setAttribute('disabled', 'true');
    }
}

ventiVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const eulaVerifica = () => {
    if(localStorage.getItem('eulaAvatar') == 'comprado') {
        document.querySelector('#eula').classList.remove('disabled');
        document.querySelector('#eula').removeAttribute('disabled');
        let imgSelect = document.querySelector('#eula img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('eulaAvatar') !== 'comprado') {
        document.querySelector('#eula').classList.add('disabled');
        document.querySelector('#eula').setAttribute('disabled', 'true');
    }
}

eulaVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const kleeVerifica = () => {
    if(localStorage.getItem('kleeAvatar') == 'comprado') {
        document.querySelector('#klee').classList.remove('disabled');
        document.querySelector('#klee').removeAttribute('disabled');
        let imgSelect = document.querySelector('#klee img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('kleeAvatar') !== 'comprado') {
        document.querySelector('#klee').classList.add('disabled');
        document.querySelector('#klee').setAttribute('disabled', 'true');
    }
}

kleeVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const jeanVerifica = () => {
    if(localStorage.getItem('jeanAvatar') == 'comprado') {
        document.querySelector('#jean').classList.remove('disabled');
        document.querySelector('#jean').removeAttribute('disabled');
        let imgSelect = document.querySelector('#jean img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('jeanAvatar') !== 'comprado') {
        document.querySelector('#jean').classList.add('disabled');
        document.querySelector('#jean').setAttribute('disabled', 'true');
    }
}

jeanVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const monaVerifica = () => {
    if(localStorage.getItem('monaAvatar') == 'comprado') {
        document.querySelector('#mona').classList.remove('disabled');
        document.querySelector('#mona').removeAttribute('disabled');
        let imgSelect = document.querySelector('#mona img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('monaAvatar') !== 'comprado') {
        document.querySelector('#mona').classList.add('disabled');
        document.querySelector('#mona').setAttribute('disabled', 'true');
    }
}

monaVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const barbaraVerifica = () => {
    if(localStorage.getItem('barbaraAvatar') == 'comprado') {
        document.querySelector('#barbara').classList.remove('disabled');
        document.querySelector('#barbara').removeAttribute('disabled');
        let imgSelect = document.querySelector('#barbara img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('barbaraAvatar') !== 'comprado') {
        document.querySelector('#barbara').classList.add('disabled');
        document.querySelector('#barbara').setAttribute('disabled', 'true');
    }
}

barbaraVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const amberVerifica = () => {
    if(localStorage.getItem('amberAvatar') == 'comprado') {
        document.querySelector('#amber').classList.remove('disabled');
        document.querySelector('#amber').removeAttribute('disabled');
        let imgSelect = document.querySelector('#amber img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('amberAvatar') !== 'comprado') {
        document.querySelector('#amber').classList.add('disabled');
        document.querySelector('#amber').setAttribute('disabled', 'true');
    }
}

amberVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const dionaVerifica = () => {
    if(localStorage.getItem('dionaAvatar') == 'comprado') {
        document.querySelector('#diona').classList.remove('disabled');
        document.querySelector('#diona').removeAttribute('disabled');
        let imgSelect = document.querySelector('#diona img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('dionaAvatar') !== 'comprado') {
        document.querySelector('#diona').classList.add('disabled');
        document.querySelector('#diona').setAttribute('disabled', 'true');
    }
}

dionaVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const razorVerifica = () => {
    if(localStorage.getItem('razorAvatar') == 'comprado') {
        document.querySelector('#razor').classList.remove('disabled');
        document.querySelector('#razor').removeAttribute('disabled');
        let imgSelect = document.querySelector('#razor img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('razorAvatar') !== 'comprado') {
        document.querySelector('#razor').classList.add('disabled');
        document.querySelector('#razor').setAttribute('disabled', 'true');
    }
}

razorVerifica();

const bennettVerifica = () => {
    if(localStorage.getItem('bennettAvatar') == 'comprado') {
        document.querySelector('#bennett').classList.remove('disabled');
        document.querySelector('#bennett').removeAttribute('disabled');
        let imgSelect = document.querySelector('#bennett img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('bennettAvatar') !== 'comprado') {
        document.querySelector('#bennett').classList.add('disabled');
        document.querySelector('#bennett').setAttribute('disabled', 'true');
    }
}

bennettVerifica();

const fishVerifica = () => {
    if(localStorage.getItem('fischlAvatar') == 'comprado') {
        document.querySelector('#fischl').classList.remove('disabled');
        document.querySelector('#fischl').removeAttribute('disabled');
        let imgSelect = document.querySelector('#fischl img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('fischlAvatar') !== 'comprado') {
        document.querySelector('#fischl').classList.add('disabled');
        document.querySelector('#fischl').setAttribute('disabled', 'true');
    }
}

fishVerifica();

const kayeaVerifica = () => {
    if(localStorage.getItem('kaeyaAvatar') == 'comprado') {
        document.querySelector('#kaeya').classList.remove('disabled');
        document.querySelector('#kaeya').removeAttribute('disabled');
        let imgSelect = document.querySelector('#kaeya img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('kaeyaAvatar') !== 'comprado') {
        document.querySelector('#kaeya').classList.add('disabled');
        document.querySelector('#kaeya').setAttribute('disabled', 'true');
    }
}

kayeaVerifica();

const lisaVerifica = () => {
    if(localStorage.getItem('lisaAvatar') == 'comprado') {
        document.querySelector('#lisa').classList.remove('disabled');
        document.querySelector('#lisa').removeAttribute('disabled');
        let imgSelect = document.querySelector('#lisa img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('lisaAvatar') !== 'comprado') {
        document.querySelector('#lisa').classList.add('disabled');
        document.querySelector('#lisa').setAttribute('disabled', 'true');
    }
}

lisaVerifica();

const noelleVerifica = () => {
    if(localStorage.getItem('noelleAvatar') == 'comprado') {
        document.querySelector('#noelle').classList.remove('disabled');
        document.querySelector('#noelle').removeAttribute('disabled');
        let imgSelect = document.querySelector('#noelle img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('noelleAvatar') !== 'comprado') {
        document.querySelector('#noelle').classList.add('disabled');
        document.querySelector('#noelle').setAttribute('disabled', 'true');
    }
}

noelleVerifica();

const rosariaVerifica = () => {
    if(localStorage.getItem('rosariaAvatar') == 'comprado') {
        document.querySelector('#rosaria').classList.remove('disabled');
        document.querySelector('#rosaria').removeAttribute('disabled');
        let imgSelect = document.querySelector('#rosaria img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('rosariaAvatar') !== 'comprado') {
        document.querySelector('#rosaria').classList.add('disabled');
        document.querySelector('#rosaria').setAttribute('disabled', 'true');
    }
}

rosariaVerifica();

const sucroseVerifica = () => {
    if(localStorage.getItem('sucroseAvatar') == 'comprado') {
        document.querySelector('#sucrose').classList.remove('disabled');
        document.querySelector('#sucrose').removeAttribute('disabled');
        let imgSelect = document.querySelector('#sucrose img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('sucroseAvatar') !== 'comprado') {
        document.querySelector('#sucrose').classList.add('disabled');
        document.querySelector('#sucrose').setAttribute('disabled', 'true');
    }
}

sucroseVerifica();

const hutaoVerifica = () => {
    if(localStorage.getItem('hutaoAvatar') == 'comprado') {
        document.querySelector('#hutao').classList.remove('disabled');
        document.querySelector('#hutao').removeAttribute('disabled');
        let imgSelect = document.querySelector('#hutao img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('hutaoAvatar') !== 'comprado') {
        document.querySelector('#hutao').classList.add('disabled');
        document.querySelector('#hutao').setAttribute('disabled', 'true');
    }
}

hutaoVerifica();

const zhongliVerifica = () => {
    if(localStorage.getItem('zhongliAvatar') == 'comprado') {
        document.querySelector('#zhongli').classList.remove('disabled');
        document.querySelector('#zhongli').removeAttribute('disabled');
        let imgSelect = document.querySelector('#zhongli img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('zhongliAvatar') !== 'comprado') {
        document.querySelector('#zhongli').classList.add('disabled');
        document.querySelector('#zhongli').setAttribute('disabled', 'true');
    }
}

zhongliVerifica();

const xiaoVerifica = () => {
    if(localStorage.getItem('xiaoAvatar') == 'comprado') {
        document.querySelector('#xiao').classList.remove('disabled');
        document.querySelector('#xiao').removeAttribute('disabled');
        let imgSelect = document.querySelector('#xiao img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('xiaoAvatar') !== 'comprado') {
        document.querySelector('#xiao').classList.add('disabled');
        document.querySelector('#xiao').setAttribute('disabled', 'true');
    }
}

xiaoVerifica();

const ganyuVerifica = () => {
    if(localStorage.getItem('ganyuAvatar') == 'comprado') {
        document.querySelector('#ganyu').classList.remove('disabled');
        document.querySelector('#ganyu').removeAttribute('disabled');
        let imgSelect = document.querySelector('#ganyu img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('ganyuAvatar') !== 'comprado') {
        document.querySelector('#ganyu').classList.add('disabled');
        document.querySelector('#ganyu').setAttribute('disabled', 'true');
    }
}

ganyuVerifica();

const shenheVerifica = () => {
    if(localStorage.getItem('shenheAvatar') == 'comprado') {
        document.querySelector('#shenhe').classList.remove('disabled');
        document.querySelector('#shenhe').removeAttribute('disabled');
        let imgSelect = document.querySelector('#shenhe img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('shenheAvatar') !== 'comprado') {
        document.querySelector('#shenhe').classList.add('disabled');
        document.querySelector('#shenhe').setAttribute('disabled', 'true');
    }
}

shenheVerifica();

const yelanVerifica = () => {
    if(localStorage.getItem('yelanAvatar') == 'comprado') {
        document.querySelector('#yelan').classList.remove('disabled');
        document.querySelector('#yelan').removeAttribute('disabled');
        let imgSelect = document.querySelector('#yelan img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('yelanAvatar') !== 'comprado') {
        document.querySelector('#yelan').classList.add('disabled');
        document.querySelector('#yelan').setAttribute('disabled', 'true');
    }
}

yelanVerifica();

const qiqiVerifica = () => {
    if(localStorage.getItem('qiqiAvatar') == 'comprado') {
        document.querySelector('#qiqi').classList.remove('disabled');
        document.querySelector('#qiqi').removeAttribute('disabled');
        let imgSelect = document.querySelector('#qiqi img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('qiqiAvatar') !== 'comprado') {
        document.querySelector('#qiqi').classList.add('disabled');
        document.querySelector('#qiqi').setAttribute('disabled', 'true');
    }
}

qiqiVerifica();

const baizhuVerifica = () => {
    if(localStorage.getItem('baizhuAvatar') == 'comprado') {
        document.querySelector('#baizhu').classList.remove('disabled');
        document.querySelector('#baizhu').removeAttribute('disabled');
        let imgSelect = document.querySelector('#baizhu img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('baizhuAvatar') !== 'comprado') {
        document.querySelector('#baizhu').classList.add('disabled');
        document.querySelector('#baizhu').setAttribute('disabled', 'true');
    }
}

baizhuVerifica();

const keqingVerifica = () => {
    if(localStorage.getItem('keqingAvatar') == 'comprado') {
        document.querySelector('#keqing').classList.remove('disabled');
        document.querySelector('#keqing').removeAttribute('disabled');
        let imgSelect = document.querySelector('#keqing img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('keqingAvatar') !== 'comprado') {
        document.querySelector('#keqing').classList.add('disabled');
        document.querySelector('#keqing').setAttribute('disabled', 'true');
    }
}

keqingVerifica();

const yaoyaoVerifica = () => {
    if(localStorage.getItem('yaoyaoAvatar') == 'comprado') {
        document.querySelector('#yaoyao').classList.remove('disabled');
        document.querySelector('#yaoyao').removeAttribute('disabled');
        let imgSelect = document.querySelector('#yaoyao img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('yaoyaoAvatar') !== 'comprado') {
        document.querySelector('#yaoyao').classList.add('disabled');
        document.querySelector('#yaoyao').setAttribute('disabled', 'true');
    }
}

yaoyaoVerifica();

const yunjinVerifica = () => {
    if(localStorage.getItem('yunjinAvatar') == 'comprado') {
        document.querySelector('#yunjin').classList.remove('disabled');
        document.querySelector('#yunjin').removeAttribute('disabled');
        let imgSelect = document.querySelector('#yunjin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('yunjinAvatar') !== 'comprado') {
        document.querySelector('#yunjin').classList.add('disabled');
        document.querySelector('#yunjin').setAttribute('disabled', 'true');
    }
}

yunjinVerifica();

const yanfeiVerifica = () => {
    if(localStorage.getItem('yanfeiAvatar') == 'comprado') {
        document.querySelector('#yanfei').classList.remove('disabled');
        document.querySelector('#yanfei').removeAttribute('disabled');
        let imgSelect = document.querySelector('#yanfei img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('yanfeiAvatar') !== 'comprado') {
        document.querySelector('#yanfei').classList.add('disabled');
        document.querySelector('#yanfei').setAttribute('disabled', 'true');
    }
}

yanfeiVerifica();

const xianglingVerifica = () => {
    if(localStorage.getItem('xianglingAvatar') == 'comprado') {
        document.querySelector('#xiangling').classList.remove('disabled');
        document.querySelector('#xiangling').removeAttribute('disabled');
        let imgSelect = document.querySelector('#xiangling img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('xianglingAvatar') !== 'comprado') {
        document.querySelector('#xiangling').classList.add('disabled');
        document.querySelector('#xiangling').setAttribute('disabled', 'true');
    }
}

xianglingVerifica();

const beidouVerifica = () => {
    if(localStorage.getItem('beidouAvatar') == 'comprado') {
        document.querySelector('#beidou').classList.remove('disabled');
        document.querySelector('#beidou').removeAttribute('disabled');
        let imgSelect = document.querySelector('#beidou img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('beidouAvatar') !== 'comprado') {
        document.querySelector('#beidou').classList.add('disabled');
        document.querySelector('#beidou').setAttribute('disabled', 'true');
    }
}

beidouVerifica();

const chongyunVerifica = () => {
    if(localStorage.getItem('chongyunAvatar') == 'comprado') {
        document.querySelector('#chongyun').classList.remove('disabled');
        document.querySelector('#chongyun').removeAttribute('disabled');
        let imgSelect = document.querySelector('#chongyun img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('chongyunAvatar') !== 'comprado') {
        document.querySelector('#chongyun').classList.add('disabled');
        document.querySelector('#chongyun').setAttribute('disabled', 'true');
    }
}

chongyunVerifica();

const xinyanVerifica = () => {
    if(localStorage.getItem('xinyanAvatar') == 'comprado') {
        document.querySelector('#xinyan').classList.remove('disabled');
        document.querySelector('#xinyan').removeAttribute('disabled');
        let imgSelect = document.querySelector('#xinyan img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('xinyanAvatar') !== 'comprado') {
        document.querySelector('#xinyan').classList.add('disabled');
        document.querySelector('#xinyan').setAttribute('disabled', 'true');
    }
}

xinyanVerifica();

const xingqiuVerifica = () => {
    if(localStorage.getItem('xingqiuAvatar') == 'comprado') {
        document.querySelector('#xingqiu').classList.remove('disabled');
        document.querySelector('#xingqiu').removeAttribute('disabled');
        let imgSelect = document.querySelector('#xingqiu img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('xingqiuAvatar') !== 'comprado') {
        document.querySelector('#xingqiu').classList.add('disabled');
        document.querySelector('#xingqiu').setAttribute('disabled', 'true');
    }
}

xingqiuVerifica();

const ningguangVerifica = () => {
    if(localStorage.getItem('ningguangAvatar') == 'comprado') {
        document.querySelector('#ningguang').classList.remove('disabled');
        document.querySelector('#ningguang').removeAttribute('disabled');
        let imgSelect = document.querySelector('#ningguang img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('ningguangAvatar') !== 'comprado') {
        document.querySelector('#ningguang').classList.add('disabled');
        document.querySelector('#ningguang').setAttribute('disabled', 'true');
    }
}

ningguangVerifica();

const raidenVerifica = () => {
    if(localStorage.getItem('raidenAvatar') == 'comprado') {
        document.querySelector('#raiden').classList.remove('disabled');
        document.querySelector('#raiden').removeAttribute('disabled');
        let imgSelect = document.querySelector('#raiden img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('raidenAvatar') !== 'comprado') {
        document.querySelector('#raiden').classList.add('disabled');
        document.querySelector('#raiden').setAttribute('disabled', 'true');
    }
}

raidenVerifica();

const yaemikoVerifica = () => {
    if(localStorage.getItem('yaemikoAvatar') == 'comprado') {
        document.querySelector('#yaemiko').classList.remove('disabled');
        document.querySelector('#yaemiko').removeAttribute('disabled');
        let imgSelect = document.querySelector('#yaemiko img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('yaemikoAvatar') !== 'comprado') {
        document.querySelector('#yaemiko').classList.add('disabled');
        document.querySelector('#yaemiko').setAttribute('disabled', 'true');
    }
}

yaemikoVerifica();

const kazuhaVerifica = () => {
    if(localStorage.getItem('kazuhaAvatar') == 'comprado') {
        document.querySelector('#kazuha').classList.remove('disabled');
        document.querySelector('#kazuha').removeAttribute('disabled');
        let imgSelect = document.querySelector('#kazuha img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('kazuhaAvatar') !== 'comprado') {
        document.querySelector('#kazuha').classList.add('disabled');
        document.querySelector('#kazuha').setAttribute('disabled', 'true');
    }
}

kazuhaVerifica();

const aratakiVerifica = () => {
    if(localStorage.getItem('aratakiAvatar') == 'comprado') {
        document.querySelector('#arataki').classList.remove('disabled');
        document.querySelector('#arataki').removeAttribute('disabled');
        let imgSelect = document.querySelector('#arataki img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('aratakiAvatar') !== 'comprado') {
        document.querySelector('#arataki').classList.add('disabled');
        document.querySelector('#arataki').setAttribute('disabled', 'true');
    }
}

aratakiVerifica();

const ayakaVerifica = () => {
    if(localStorage.getItem('ayakaAvatar') == 'comprado') {
        document.querySelector('#ayaka').classList.remove('disabled');
        document.querySelector('#ayaka').removeAttribute('disabled');
        let imgSelect = document.querySelector('#ayaka img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('ayakaAvatar') !== 'comprado') {
        document.querySelector('#ayaka').classList.add('disabled');
        document.querySelector('#ayaka').setAttribute('disabled', 'true');
    }
}

ayakaVerifica();

const yoimiyaVerifica = () => {
    if(localStorage.getItem('yoimiyaAvatar') == 'comprado') {
        document.querySelector('#yoimiya').classList.remove('disabled');
        document.querySelector('#yoimiya').removeAttribute('disabled');
        let imgSelect = document.querySelector('#yoimiya img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('yoimiyaAvatar') !== 'comprado') {
        document.querySelector('#yoimiya').classList.add('disabled');
        document.querySelector('#yoimiya').setAttribute('disabled', 'true');
    }
}

yoimiyaVerifica();

const kokomiVerifica = () => {
    if(localStorage.getItem('kokomiAvatar') == 'comprado') {
        document.querySelector('#kokomi').classList.remove('disabled');
        document.querySelector('#kokomi').removeAttribute('disabled');
        let imgSelect = document.querySelector('#kokomi img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('kokomiAvatar') !== 'comprado') {
        document.querySelector('#kokomi').classList.add('disabled');
        document.querySelector('#kokomi').setAttribute('disabled', 'true');
    }
}

kokomiVerifica();

const ayatoVerifica = () => {
    if(localStorage.getItem('ayatoAvatar') == 'comprado') {
        document.querySelector('#ayato').classList.remove('disabled');
        document.querySelector('#ayato').removeAttribute('disabled');
        let imgSelect = document.querySelector('#ayato img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('ayatoAvatar') !== 'comprado') {
        document.querySelector('#ayato').classList.add('disabled');
        document.querySelector('#ayato').setAttribute('disabled', 'true');
    }
}

ayatoVerifica();

const kiraraVerifica = () => {
    if(localStorage.getItem('kiraraAvatar') == 'comprado') {
        document.querySelector('#kirara').classList.remove('disabled');
        document.querySelector('#kirara').removeAttribute('disabled');
        let imgSelect = document.querySelector('#kirara img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('kiraraAvatar') !== 'comprado') {
        document.querySelector('#kirara').classList.add('disabled');
        document.querySelector('#kirara').setAttribute('disabled', 'true');
    }
}

kiraraVerifica();

const heizouVerifica = () => {
    if(localStorage.getItem('heizouAvatar') == 'comprado') {
        document.querySelector('#heizou').classList.remove('disabled');
        document.querySelector('#heizou').removeAttribute('disabled');
        let imgSelect = document.querySelector('#heizou img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('heizouAvatar') !== 'comprado') {
        document.querySelector('#heizou').classList.add('disabled');
        document.querySelector('#heizou').setAttribute('disabled', 'true');
    }
}

heizouVerifica();

const kukiVerifica = () => {
    if(localStorage.getItem('kukiAvatar') == 'comprado') {
        document.querySelector('#kuki').classList.remove('disabled');
        document.querySelector('#kuki').removeAttribute('disabled');
        let imgSelect = document.querySelector('#kuki img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('kukiAvatar') !== 'comprado') {
        document.querySelector('#kuki').classList.add('disabled');
        document.querySelector('#kuki').setAttribute('disabled', 'true');
    }
}

kukiVerifica();

const gorouVerifica = () => {
    if(localStorage.getItem('gorouAvatar') == 'comprado') {
        document.querySelector('#gorou').classList.remove('disabled');
        document.querySelector('#gorou').removeAttribute('disabled');
        let imgSelect = document.querySelector('#gorou img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('gorouAvatar') !== 'comprado') {
        document.querySelector('#gorou').classList.add('disabled');
        document.querySelector('#gorou').setAttribute('disabled', 'true');
    }
}

gorouVerifica();

const thomaVerifica = () => {
    if(localStorage.getItem('thomaAvatar') == 'comprado') {
        document.querySelector('#thoma').classList.remove('disabled');
        document.querySelector('#thoma').removeAttribute('disabled');
        let imgSelect = document.querySelector('#thoma img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('thomaAvatar') !== 'comprado') {
        document.querySelector('#thoma').classList.add('disabled');
        document.querySelector('#thoma').setAttribute('disabled', 'true');
    }
}

thomaVerifica();

const saraVerifica = () => {
    if(localStorage.getItem('saraAvatar') == 'comprado') {
        document.querySelector('#sara').classList.remove('disabled');
        document.querySelector('#sara').removeAttribute('disabled');
        let imgSelect = document.querySelector('#sara img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('saraAvatar') !== 'comprado') {
        document.querySelector('#sara').classList.add('disabled');
        document.querySelector('#sara').setAttribute('disabled', 'true');
    }
}

saraVerifica();

const sayuVerifica = () => {
    if(localStorage.getItem('sayuAvatar') == 'comprado') {
        document.querySelector('#sayu').classList.remove('disabled');
        document.querySelector('#sayu').removeAttribute('disabled');
        let imgSelect = document.querySelector('#sayu img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('sayuAvatar') !== 'comprado') {
        document.querySelector('#sayu').classList.add('disabled');
        document.querySelector('#sayu').setAttribute('disabled', 'true');
    }
}

sayuVerifica();

const nahidaVerifica = () => {
    if(localStorage.getItem('nahidaAvatar') == 'comprado') {
        document.querySelector('#nahida').classList.remove('disabled');
        document.querySelector('#nahida').removeAttribute('disabled');
        let imgSelect = document.querySelector('#nahida img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('nahidaAvatar') !== 'comprado') {
        document.querySelector('#nahida').classList.add('disabled');
        document.querySelector('#nahida').setAttribute('disabled', 'true');
    }
}

nahidaVerifica();

const cynoVerifica = () => {
    if(localStorage.getItem('cynoAvatar') == 'comprado') {
        document.querySelector('#cyno').classList.remove('disabled');
        document.querySelector('#cyno').removeAttribute('disabled');
        let imgSelect = document.querySelector('#cyno img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('cynoAvatar') !== 'comprado') {
        document.querySelector('#cyno').classList.add('disabled');
        document.querySelector('#cyno').setAttribute('disabled', 'true');
    }
}

cynoVerifica();

const dehyaVerifica = () => {
    if(localStorage.getItem('dehyaAvatar') == 'comprado') {
        document.querySelector('#dehya').classList.remove('disabled');
        document.querySelector('#dehya').removeAttribute('disabled');
        let imgSelect = document.querySelector('#dehya img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('dehyaAvatar') !== 'comprado') {
        document.querySelector('#dehya').classList.add('disabled');
        document.querySelector('#dehya').setAttribute('disabled', 'true');
    }
}

dehyaVerifica();

const alhaithamVerifica = () => {
    if(localStorage.getItem('alhaithamAvatar') == 'comprado') {
        document.querySelector('#alhaitham').classList.remove('disabled');
        document.querySelector('#alhaitham').removeAttribute('disabled');
        let imgSelect = document.querySelector('#alhaitham img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('alhaithamAvatar') !== 'comprado') {
        document.querySelector('#alhaitham').classList.add('disabled');
        document.querySelector('#alhaitham').setAttribute('disabled', 'true');
    }
}

alhaithamVerifica();

const wandererVerifica = () => {
    if(localStorage.getItem('wandererAvatar') == 'comprado') {
        document.querySelector('#wanderer').classList.remove('disabled');
        document.querySelector('#wanderer').removeAttribute('disabled');
        let imgSelect = document.querySelector('#wanderer img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('wandererAvatar') !== 'comprado') {
        document.querySelector('#wanderer').classList.add('disabled');
        document.querySelector('#wanderer').setAttribute('disabled', 'true');
    }
}

wandererVerifica();

const nilouVerifica = () => {
    if(localStorage.getItem('nilouAvatar') == 'comprado') {
        document.querySelector('#nilou').classList.remove('disabled');
        document.querySelector('#nilou').removeAttribute('disabled');
        let imgSelect = document.querySelector('#nilou img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('nilouAvatar') !== 'comprado') {
        document.querySelector('#nilou').classList.add('disabled');
        document.querySelector('#nilou').setAttribute('disabled', 'true');
    }
}

nilouVerifica();

const tighnariVerifica = () => {
    if(localStorage.getItem('tighnariAvatar') == 'comprado') {
        document.querySelector('#tighnari').classList.remove('disabled');
        document.querySelector('#tighnari').removeAttribute('disabled');
        let imgSelect = document.querySelector('#tighnari img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('tighnariAvatar') !== 'comprado') {
        document.querySelector('#tighnari').classList.add('disabled');
        document.querySelector('#tighnari').setAttribute('disabled', 'true');
    }
}

tighnariVerifica();

const colleiVerifica = () => {
    if(localStorage.getItem('colleiAvatar') == 'comprado') {
        document.querySelector('#collei').classList.remove('disabled');
        document.querySelector('#collei').removeAttribute('disabled');
        let imgSelect = document.querySelector('#collei img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('colleiAvatar') !== 'comprado') {
        document.querySelector('#collei').classList.add('disabled');
        document.querySelector('#collei').setAttribute('disabled', 'true');
    }
}

colleiVerifica();

const doriVerifica = () => {
    if(localStorage.getItem('doriAvatar') == 'comprado') {
        document.querySelector('#dori').classList.remove('disabled');
        document.querySelector('#dori').removeAttribute('disabled');
        let imgSelect = document.querySelector('#dori img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('doriAvatar') !== 'comprado') {
        document.querySelector('#dori').classList.add('disabled');
        document.querySelector('#dori').setAttribute('disabled', 'true');
    }
}

doriVerifica();

const kavehVerifica = () => {
    if(localStorage.getItem('kavehAvatar') == 'comprado') {
        document.querySelector('#kaveh').classList.remove('disabled');
        document.querySelector('#kaveh').removeAttribute('disabled');
        let imgSelect = document.querySelector('#kaveh img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('kavehAvatar') !== 'comprado') {
        document.querySelector('#kaveh').classList.add('disabled');
        document.querySelector('#kaveh').setAttribute('disabled', 'true');
    }
}

kavehVerifica();

const laylaVerifica = () => {
    if(localStorage.getItem('laylaAvatar') == 'comprado') {
        document.querySelector('#layla').classList.remove('disabled');
        document.querySelector('#layla').removeAttribute('disabled');
        let imgSelect = document.querySelector('#layla img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('laylaAvatar') !== 'comprado') {
        document.querySelector('#layla').classList.add('disabled');
        document.querySelector('#layla').setAttribute('disabled', 'true');
    }
}

laylaVerifica();

const faruzanVerifica = () => {
    if(localStorage.getItem('faruzanAvatar') == 'comprado') {
        document.querySelector('#faruzan').classList.remove('disabled');
        document.querySelector('#faruzan').removeAttribute('disabled');
        let imgSelect = document.querySelector('#faruzan img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('faruzanAvatar') !== 'comprado') {
        document.querySelector('#faruzan').classList.add('disabled');
        document.querySelector('#faruzan').setAttribute('disabled', 'true');
    }
}

faruzanVerifica();

const candaceVerifica = () => {
    if(localStorage.getItem('candaceAvatar') == 'comprado') {
        document.querySelector('#candace').classList.remove('disabled');
        document.querySelector('#candace').removeAttribute('disabled');
        let imgSelect = document.querySelector('#candace img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('candaceAvatar') !== 'comprado') {
        document.querySelector('#candace').classList.add('disabled');
        document.querySelector('#candace').setAttribute('disabled', 'true');
    }
}

candaceVerifica();

const lyneyVerifica = () => {
    if(localStorage.getItem('lyneyAvatar') == 'comprado') {
        document.querySelector('#lyney').classList.remove('disabled');
        document.querySelector('#lyney').removeAttribute('disabled');
        let imgSelect = document.querySelector('#lyney img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('lyneyAvatar') !== 'comprado') {
        document.querySelector('#lyney').classList.add('disabled');
        document.querySelector('#lyney').setAttribute('disabled', 'true');
    }
}

lyneyVerifica();

const wriothesleyVerifica = () => {
    if(localStorage.getItem('wriothesleyAvatar') == 'comprado') {
        document.querySelector('#wriothesley').classList.remove('disabled');
        document.querySelector('#wriothesley').removeAttribute('disabled');
        let imgSelect = document.querySelector('#wriothesley img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('wriothesleyAvatar') !== 'comprado') {
        document.querySelector('#wriothesley').classList.add('disabled');
        document.querySelector('#wriothesley').setAttribute('disabled', 'true');
    }
}

wriothesleyVerifica();

const furinaVerifica = () => {
    if(localStorage.getItem('furinaAvatar') == 'comprado') {
        document.querySelector('#furina').classList.remove('disabled');
        document.querySelector('#furina').removeAttribute('disabled');
        let imgSelect = document.querySelector('#furina img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('furinaAvatar') !== 'comprado') {
        document.querySelector('#furina').classList.add('disabled');
        document.querySelector('#furina').setAttribute('disabled', 'true');
    }
}

furinaVerifica();

const neuvilletteVerifica = () => {
    if(localStorage.getItem('neuvilletteAvatar') == 'comprado') {
        document.querySelector('#neuvillette').classList.remove('disabled');
        document.querySelector('#neuvillette').removeAttribute('disabled');
        let imgSelect = document.querySelector('#neuvillette img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('neuvilletteAvatar') !== 'comprado') {
        document.querySelector('#neuvillette').classList.add('disabled');
        document.querySelector('#neuvillette').setAttribute('disabled', 'true');
    }
}

neuvilletteVerifica();

const charlotteVerifica = () => {
    if(localStorage.getItem('charlotteAvatar') == 'comprado') {
        document.querySelector('#charlotte').classList.remove('disabled');
        document.querySelector('#charlotte').removeAttribute('disabled');
        let imgSelect = document.querySelector('#charlotte img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('charlotteAvatar') !== 'comprado') {
        document.querySelector('#charlotte').classList.add('disabled');
        document.querySelector('#charlotte').setAttribute('disabled', 'true');
    }
}

charlotteVerifica();

const freminetVerifica = () => {
    if(localStorage.getItem('freminetAvatar') == 'comprado') {
        document.querySelector('#freminet').classList.remove('disabled');
        document.querySelector('#freminet').removeAttribute('disabled');
        let imgSelect = document.querySelector('#freminet img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('freminetAvatar') !== 'comprado') {
        document.querySelector('#freminet').classList.add('disabled');
        document.querySelector('#freminet').setAttribute('disabled', 'true');
    }
}

freminetVerifica();

const dilucSkinVerifica = () => {
    if(localStorage.getItem('dilucSkinAvatar') == 'comprado') {
        document.querySelector('#dilucSkin').classList.remove('disabled');
        document.querySelector('#dilucSkin').removeAttribute('disabled');
        let imgSelect = document.querySelector('#dilucSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('dilucSkinAvatar') !== 'comprado') {
        document.querySelector('#dilucSkin').classList.add('disabled');
        document.querySelector('#dilucSkin').setAttribute('disabled', 'true');
    }
}

dilucSkinVerifica();

const jeanSkinVerifica = () => {
    if(localStorage.getItem('jeanSkinAvatar') == 'comprado') {
        document.querySelector('#jeanSkin').classList.remove('disabled');
        document.querySelector('#jeanSkin').removeAttribute('disabled');
        let imgSelect = document.querySelector('#jeanSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('jeanSkinAvatar') !== 'comprado') {
        document.querySelector('#jeanSkin').classList.add('disabled');
        document.querySelector('#jeanSkin').setAttribute('disabled', 'true');
    }
}

jeanSkinVerifica();

const kleeSkinVerifica = () => {
    if(localStorage.getItem('kleeSkinAvatar') == 'comprado') {
        document.querySelector('#kleeSkin').classList.remove('disabled');
        document.querySelector('#kleeSkin').removeAttribute('disabled');
        let imgSelect = document.querySelector('#kleeSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('kleeSkinAvatar') !== 'comprado') {
        document.querySelector('#kleeSkin').classList.add('disabled');
        document.querySelector('#kleeSkin').setAttribute('disabled', 'true');
    }
}

kleeSkinVerifica();

const ayakaSkinVerifica = () => {
    if(localStorage.getItem('ayakaSkinAvatar') == 'comprado') {
        document.querySelector('#ayakaSkin').classList.remove('disabled');
        document.querySelector('#ayakaSkin').removeAttribute('disabled');
        let imgSelect = document.querySelector('#ayakaSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('ayakaSkinAvatar') !== 'comprado') {
        document.querySelector('#ayakaSkin').classList.add('disabled');
        document.querySelector('#ayakaSkin').setAttribute('disabled', 'true');
    }
}

ayakaSkinVerifica();

const barbaraSkinVerifica = () => {
    if(localStorage.getItem('barbaraSkinAvatar') == 'comprado') {
        document.querySelector('#barbaraSkin').classList.remove('disabled');
        document.querySelector('#barbaraSkin').removeAttribute('disabled');
        let imgSelect = document.querySelector('#barbaraSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('barbaraSkinAvatar') !== 'comprado') {
        document.querySelector('#barbaraSkin').classList.add('disabled');
        document.querySelector('#barbaraSkin').setAttribute('disabled', 'true');
    }
}

barbaraSkinVerifica();

const fischlSkinVerifica = () => {
    if(localStorage.getItem('fischlSkinAvatar') == 'comprado') {
        document.querySelector('#fischlSkin').classList.remove('disabled');
        document.querySelector('#fischlSkin').removeAttribute('disabled');
        let imgSelect = document.querySelector('#fischlSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('fischlSkinAvatar') !== 'comprado') {
        document.querySelector('#fischlSkin').classList.add('disabled');
        document.querySelector('#fischlSkin').setAttribute('disabled', 'true');
    }
}

fischlSkinVerifica();

const ningguangSkinVerifica = () => {
    if(localStorage.getItem('ningguangSkinAvatar') == 'comprado') {
        document.querySelector('#ningguangSkin').classList.remove('disabled');
        document.querySelector('#ningguangSkin').removeAttribute('disabled');
        let imgSelect = document.querySelector('#ningguangSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('ningguangSkinAvatar') !== 'comprado') {
        document.querySelector('#ningguangSkin').classList.add('disabled');
        document.querySelector('#ningguangSkin').setAttribute('disabled', 'true');
    }
}

ningguangSkinVerifica();

const keqingSkinVerifica = () => {
    if(localStorage.getItem('keqingSkinAvatar') == 'comprado') {
        document.querySelector('#keqingSkin').classList.remove('disabled');
        document.querySelector('#keqingSkin').removeAttribute('disabled');
        let imgSelect = document.querySelector('#keqingSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('keqingSkinAvatar') !== 'comprado') {
        document.querySelector('#keqingSkin').classList.add('disabled');
        document.querySelector('#keqingSkin').setAttribute('disabled', 'true');
    }
}

keqingSkinVerifica();

const lisaSkinVerifica = () => {
    if(localStorage.getItem('lisaSkinAvatar') == 'comprado') {
        document.querySelector('#lisaSkin').classList.remove('disabled');
        document.querySelector('#lisaSkin').removeAttribute('disabled');
        let imgSelect = document.querySelector('#lisaSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('lisaSkinAvatar') !== 'comprado') {
        document.querySelector('#lisaSkin').classList.add('disabled');
        document.querySelector('#lisaSkin').setAttribute('disabled', 'true');
    }
}

lisaSkinVerifica();

const kaeyaSkinVerifica = () => {
    if(localStorage.getItem('kaeyaSkinAvatar') == 'comprado') {
        document.querySelector('#kaeyaSkin').classList.remove('disabled');
        document.querySelector('#kaeyaSkin').removeAttribute('disabled');
        let imgSelect = document.querySelector('#kaeyaSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('kaeyaSkinAvatar') !== 'comprado') {
        document.querySelector('#kaeyaSkin').classList.add('disabled');
        document.querySelector('#kaeyaSkin').setAttribute('disabled', 'true');
    }
}

kaeyaSkinVerifica();

const tartagliaVerifica = () => {
    if(localStorage.getItem('tartagliaAvatar') == 'comprado') {
        document.querySelector('#tartaglia').classList.remove('disabled');
        document.querySelector('#tartaglia').removeAttribute('disabled');
        let imgSelect = document.querySelector('#tartaglia img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('tartagliaAvatar') !== 'comprado') {
        document.querySelector('#tartaglia').classList.add('disabled');
        document.querySelector('#tartaglia').setAttribute('disabled', 'true');
    }
}

tartagliaVerifica();

const naviaVerifica = () => {
    if(localStorage.getItem('naviaAvatar') == 'comprado') {
        document.querySelector('#navia').classList.remove('disabled');
        document.querySelector('#navia').removeAttribute('disabled');
        let imgSelect = document.querySelector('#navia img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('naviaAvatar') !== 'comprado') {
        document.querySelector('#navia').classList.add('disabled');
        document.querySelector('#navia').setAttribute('disabled', 'true');
    }
}

naviaVerifica();

const mikaVerifica = () => {
    if(localStorage.getItem('mikaAvatar') == 'comprado') {
        document.querySelector('#mika').classList.remove('disabled');
        document.querySelector('#mika').removeAttribute('disabled');
        let imgSelect = document.querySelector('#mika img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('mikaAvatar') !== 'comprado') {
        document.querySelector('#mika').classList.add('disabled');
        document.querySelector('#mika').setAttribute('disabled', 'true');
    }
}

mikaVerifica();


const lynetteVerifica = () => {
    if(localStorage.getItem('lynetteAvatar') == 'comprado') {
        document.querySelector('#lynette').classList.remove('disabled');
        document.querySelector('#lynette').removeAttribute('disabled');
        let imgSelect = document.querySelector('#lynette img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('lynetteAvatar') !== 'comprado') {
        document.querySelector('#lynette').classList.add('disabled');
        document.querySelector('#lynette').setAttribute('disabled', 'true');
    }
}

lynetteVerifica();

const chevreuseVerifica = () => {
    if(localStorage.getItem('chevreuseAvatar') == 'comprado') {
        document.querySelector('#chevreuse').classList.remove('disabled');
        document.querySelector('#chevreuse').removeAttribute('disabled');
        let imgSelect = document.querySelector('#chevreuse img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('chevreuseAvatar') !== 'comprado') {
        document.querySelector('#chevreuse').classList.add('disabled');
        document.querySelector('#chevreuse').setAttribute('disabled', 'true');
    }
}

chevreuseVerifica();


//Sortei as Dicas
let arrayPersons;

const sorteia = () => {
    arrayPersons = JSON.parse(localStorage.getItem('persons'));
    if (arrayPersons) {
        const persEscolhido = Math.floor(Math.random() * arrayPersons.length);
        localStorage.setItem('Personagem', persEscolhido);
        localStorage.setItem('Nome', arrayPersons[persEscolhido].nome);
        localStorage.setItem('Bonus', arrayPersons[persEscolhido].bonus);
        dica.innerHTML = arrayPersons[persEscolhido].dica;
    } else {
        const persEscolhido = Math.floor(Math.random() * personagens.length);
        localStorage.setItem('Personagem', persEscolhido);
        localStorage.setItem('Nome', personagens[persEscolhido].nome);
        localStorage.setItem('Bonus', personagens[persEscolhido].bonus);
        dica.innerHTML = personagens[persEscolhido].dica;
    }
};

sorteia();

let vidas = 3;

const Vidas = () => {
    if(vidas === 0){
        const efeito = "./music/gamerOver.mp3";
        audio.src = efeito;
        audio.play(); 
        vida1.style.display = "none";
        dica.innerHTML = "Suas chances acabaram";
        input.style.display = "none";
        btn.style.display = "none";
        btnAgain.style.display = "block";
        clearTimeout(opendica);
    }else if(vidas === 3){
        const efeito = "./music/percaVida.mp3";
        audio.src = efeito;
        audio.play(); 
        vida3.setAttribute('class', 'overCora');
        setTimeout(() => {
            vida3.style.display = "none";
            vidas--
        }, 1500);
    }
    else if(vidas === 2){
        const efeito = "./music/percaVida.mp3";
        audio.src = efeito;
        audio.play(); 
        vida2.setAttribute('class', 'overCora');
        setTimeout(() => {
            vida2.style.display = "none";
            vidas--
        }, 1500);
    }
    else if(vidas === 1){
        const efeito = "./music/percaVida.mp3";
        audio.src = efeito;
        audio.play(); 
        vida1.setAttribute('class', 'overCora');
        setTimeout(() => {
            vida1.style.display = "none";
            vidas--
        }, 1500);
    }
} 

btnAgain.addEventListener('click', () => {
    if(vidas == 0) {
        sorteia();
        input.style.display = 'block';
        input.value = " "; 
        btn.style.display = 'block';
        vidasDiv.style.display = 'flex';
        btnAgain.style.display = 'none';
        btn.removeAttribute('disabled');
        vidas = 3;
        vida1.style.display = 'block';
        vida2.style.display = 'block';
        vida3.style.display = 'block';
    }else {
         personagens.push(
//Diluc 0
{
    nome: "diluc",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Dilucback.mp4",
    dica: "Este personagem de Genshin Impact comanda as chamas e é dono da Taverna Dawn Winery. Quem é?",
    desc: "",
    bonus:"Este herdeiro da Casa Ragnvindr é tanto o mestre das chamas quanto o proprietário da Taverna Dawn Winery.",
    icon: './icon/Element_Pyro.png',
    img: './image/dilucCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Diluc",  
},

//Venti 1
{
    nome: "venti",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Ventiback.mp4",
    dica: "Este personagem de Mondstadt é leve como o vento, toca uma melodia encantadora com sua lira e seu nome significa 'vento' em italiano. Quem é?",
    desc: "",
    bonus:"um aventureiro de Mondstadt que comanda o vento com maestria. Seu passado é envolto em mistério, mas sua melodia ressoa como uma suave brisa. Quem é esse virtuoso que leva consigo a harmonia do Anemo?",
    icon: './icon/Element_Anemo.png',
    img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/ventiCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Venti",  
},

//Jean 2
{
   nome: "jean",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Jeanback.mp4",
   dica: "Esta Cavalheira de Favonius é uma líder dedicada de Mondstadt, habilidosa no uso da espada e usuária do elemento Anemo. Ela é conhecida por sua compaixão e liderança exemplar. Quem é essa personagem que protege Mondstadt com graciosidade e poder?",
   desc: "",
   bonus: "Como a Grande Mestra dos Cavaleiros de Favonius, esta líder diligente de Mondstadt é conhecida por sua generosidade, habilidades anemo e dedicação em proteger a cidade.",
   icon: './icon/Element_Anemo.png',
   img: './image/jeanCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Jean",  
},

//Klee 3
{
   nome: "klee",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Kleeback.mp4",
   dica: "Esta pequena piromaniaca é uma explosiva usuária de Pyro, conhecida por sua paixão por explosões e bombas. Seu nome começa com a letra 'K' e ela é uma verdadeira amante da diversão. Quem é essa adorável e ardente arremessadora de bombas em Teyvat?",
   desc: "",
   bonus: "Esta pequena e explosiva cavaleira de Mondstadt é uma alquimista mirim com uma paixão por bombas.",
   icon: './icon/Element_Pyro.png',
   img: './image/kleeCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Klee",  
},

//Mona 4
{
   nome: "mona",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Monaback.mp4",
   dica: 'Ela tem pele clara, olhos verde-mar claros e cabelo roxo escuro na altura da cintura que fica levemente vermelho nas pontas',
   desc: "",
   bonus: 'Uma misteriosa jovem astróloga que se autoproclama a "Astróloga Mona Megistus" e que possui habilidades que correspondem ao título',
   icon: './icon/Element_Hydro.png',
   img: './image/monaCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Mona",  
},

//Albedo 5
{
   nome: "albedo",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/AlbedoBack.mp4",
   dica: "Este alquimista talentoso e estudioso de Mondstadt é conhecido por sua habilidade em manipular o poder do elemento Geo. Sua paixão pela alquimia e suas vestimentas brancas são características marcantes. Quem é este personagem que explora o poder dos elementos em Teyvat?",
   desc: "",
   bonus: " Como o Capitão da Ordem dos Alquimistas em Mondstadt, este mestre da alquimia busca desvendar os segredos do mundo. ",
   icon: './icon/Element_Geo.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/albedoCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Albedo",  
},

//Eula 6
{
   nome: "eula",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Eulaback.mp4",
   dica: 'Os Cavaleiros de Favonius valorizam mais as habilidades e ações de alguém do que sua origem e linhagem. Ela é de fato uma cavaleira notável, e não há necessidade de usar sua identidade como descendente dos antigos nobres contra ela.',
   desc: "",
   bonus: 'Ela tem pele pálida e olhos que parecem exibir heterocromia setorial , passando do roxo escuro ao amarelo pálido. Ela tem cabelo azul claro despenteado e com corte irregular.',
   icon: './icon/Element_Cryo.png',
   img: './image/eulaCheck.png',
   star: '⭐⭐⭐⭐⭐',
   nomeCaracter: "Eula",
},

//Barbara 7
{
   nome: "barbara",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Barbaraback.mp4",
   dica: "Esta encantadora barda de Mondstadt é conhecida por sua paixão pela música e medicina. Seu nome começa com a letra 'B' e ela é frequentemente associada a um elemento que tem propriedades refrescantes. Quem é essa personagem?",
   desc: "",
   bonus:"Esta doce cantora de Mondstadt é a Irmã Deaconess da Igreja de Favonius, conhecida por suas habilidades de cura e alegres apresentações musicais.",
   icon: './icon/Element_Hydro.png',
   img: './image/barbaraCheck.png',
   star: '⭐⭐⭐⭐', 
   nomeCaracter: "Barbara",  
},

//Amber 8
{
   nome: "amber",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/amberBack.mp4",
   dica: "Esta intrépida arqueira é a defensora de Mondstadt, conhecida por sua habilidade com arco e flecha. Ela tem um espírito livre, sempre pronta para ajudar em qualquer situação. Seu nome começa com a letra 'A'. Quem é essa atiradora destemida?",
   desc: "",
   bonus: "Esta arqueira de Outrora-Knights em Mondstadt é conhecida por sua atitude otimista, habilidades pirotécnicas e paixão por aventuras.",
   icon: './icon/Element_Pyro.png',
   img: './image/amberCheck.png',
   star: '⭐⭐⭐⭐', 
   nomeCaracter: "Amber",  
},

//Bennett 9
{
   nome: "bennett",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/bennettBack.mp4",
   dica: 'Um dos poucos jovens aventureiros da Guilda dos Aventureiros de Mondstadt, ele é sempre atormentado por um azar inexplicável.',
   desc: "",
   bonus: 'Ele tem cabelos grisalhos claros, pele bronzeada clara e olhos verdes brilhantes. Parece que ele continua ficando marcado por suas várias desventuras e por uma sorte categoricamente terrível. Ele tem uma cicatriz proeminente no ombro esquerdo.',
   icon: './icon/Element_Pyro.png',
   img: './image/bennettCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Bennett",
},

//Fischl 10
{
   nome: "fischl",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Fischlback.mp4",
   dica: 'Uma garota misteriosa que se autodenomina "Prinzessin der Verurteilung" e viaja com um corvo noturno chamado Oz. Atualmente atua como investigador na Guilda dos Aventureiros.',
   desc: "",
   bonus: 'Ela tem pele clara e cabelos loiros que se estendem até o meio das costas. Seu olho visível é verde claro. Sobre o olho esquerdo, ela usa um tapa-olho que é quase totalmente coberto pela franja.',
   icon: './icon/Element_Electro.png',
   img: './image/fischlCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Fischl",
},

//Kaeya 11
{
   nome: "kaeya",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/kaeyaBack.mp4",
   dica: 'Nos Cavaleiros de Favonius, ele é o assessor de maior confiança da Grã-Mestre Interina Jean. Você sempre pode contar com ele para resolver quaisquer problemas intratáveis. Todos em Mondstadt o amam, mas ninguém sabe quais segredos esse cavaleiro espirituoso e charmoso tem...',
   desc: "",
   bonus: 'Ele tem pele bronzeada e cabelo azul marinho com mechas de um azul mais claro, acompanhado por uma mecha de cabelo na altura da cintura que começa na base do couro cabeludo, na parte de trás da cabeça, à esquerda.',
   icon: './icon/Element_Cryo.png',
   img: './image/kaeyaCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Kaeya",
},

//Noelle 12
{
   nome: "noelle",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Noelleback.mp4",
   dica: 'Uma empregada que serve fielmente os Cavaleiros de Favonius. Ela sonha em se juntar a eles algum dia.',
   desc: "",
   bonus: 'Ela tem cabelos grisalhos curtos, na altura do pescoço, com franja reta e mechas tortas emoldurando seu rosto. Uma mecha de cabelo está trançada sobre a franja e presa no lado direito do rosto com um clipe de escudo dourado. Seus olhos são verde oliva.',
   icon: './icon/Element_Geo.png',
   img: './image/noelleCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Noelle",
},

//Lisa 13
{
   nome: "lisa",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/lisaBack.mp4",
   dica: 'Ela é uma bruxa intelectual que nunca consegue cochilar o suficiente. Como bibliotecária dos Cavaleiros de Favonius, ela é inteligente porque sempre sabe exatamente o que fazer com tudo o que a incomoda.',
   desc: "",
   bonus: 'Ela adora chá e acha que o chá da tarde é a parte mais importante do seu dia. Ela às vezes toma chá com sopa de legumes, como costumava fazer com Jean no restaurante Good Hunter . Ela também sofre de cucurbitofobia, medo de abóboras.',
   icon: './icon/Element_Electro.png',
   img: './image/lisaCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Lisa",
},

//Razor 14
{
   nome: "razor",
   imagem: "https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/razorBack.mp4",
   dica: 'Até hoje, o menino lobo pode ser encontrado rondando a floresta, onde ele e sua matilha caçam para sobreviver usando nada mais do que seus instintos animais.',
   desc: "",
   bonus: 'Alguns dizem que ele é um órfão criado por lobos. Outros dizem que ele é um espírito lobo em forma humana. Ele se sente mais à vontade na selva, lutando com garras e trovões.',
   icon: './icon/Element_Electro.png',
   img: './image/razorCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Razor",
},

//Sucrose 15 
{
   nome: "sucrose",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/sucroseBack.mp4",
   dica: 'Uma alquimista cheia de curiosidade sobre todas as coisas. Ela pesquisa bioalquimia.',
   desc: "",
   bonus: 'Ela tem pele clara, olhos âmbar e cabelo verde claro que vai até o queixo, exceto por uma mecha na parte de trás da cabeça que desce até os quadris.',
   icon: './icon/Element_Anemo.png',
   img: './image/sucroseCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Sucrose",
},

//Diona 16
{
   nome: "diona",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Dionaback.mp4",
   dica: "Uma jovem que herdou vestígios de sangue não humano. Ela é a incrível bartender popular da taverna Cat's Tail.",
   desc: "",
   bonus: 'Ela tem pele clara, cabelo curto rosa, olhos verdes esverdeados e sobrancelhas redondas. As orelhas e cauda de gato de Diona parecem ser de um gato malhado.',
   icon: './icon/Element_Cryo.png',
   img: './image/dionaCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Diona",
},

//Rosaria 17 
{
   nome: "rosaria",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Rosariaback.mp4",
   dica: 'Uma irmã da Igreja de Favonius de Mondstadt. Uma irmã da igreja, embora você não saberia disso se não fosse por seu traje. Uma mulher incomum, com palavras cortantes e penetrantes e modos frios.',
   desc: "",
   bonus: 'Ela tem uma pele cinza-clara fantasmagórica, olhos magenta-claros com pupilas brancas estreitas e cabelo cor de vinho agitado cortado curto na parte de trás com uma franja na altura dos ombros e alguns fios de sua franja coloridos em um vermelho mais escuro.',
   icon: './icon/Element_Cryo.png',
   img: './image/rosariaCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Rosaria",
},

//Mika 18
{
   nome: "mika",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Mikaback.mp4",
   dica: 'Um jovem cavaleiro que é um membro importante da equipe de escoteiros da linha de frente. Calmo e despretensioso, trata cada tarefa com seriedade e pode preparar uma boa porção de rações de campo.',
   desc: "",
   bonus: 'Ele tem pele clara, olhos azuis e cabelos dourados cacheados que se destacam em tufos irregulares e são castanho-dourados nas pontas.',
   icon: './icon/Element_Cryo.png',
   img: './image/mikaCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Mika",
},

//Liyue

//Hutao 19
{
    nome: "hutao",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Hutaoback.mp4",
    dica: "Quem em Liyue adora assustar os outros, tem um amuleto especial e comanda um Urso de Papel Flamejante? Descubra o nome dessa piromaníaca divertida!",
    desc: "",
    bonus: "Em Liyue, ela é a diretora alegre do Funeral Parlor, fascinada por histórias assustadoras e com um espírito animado.",
    icon: './icon/Element_Pyro.png',
    img: './image/hutaoCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Hu tao",  
},

//Zhongli 20
{
    nome: "zhongli",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Zhongliback.mp4",
    dica: "Em Liyue, quem é conhecido como o guardião das rochas, mestre da petrificação, e que carrega consigo a essência de uma serpente?",
    desc: "",
    bonus: "Em Liyue, este arconte da terra é conhecido por sua serenidade, mestria nas rochas e compromisso com contratos.",
    icon: './icon/Element_Geo.png',
    img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/zhongliCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Zhongli",  
},

//Xiao 21
{
    nome: "xiao",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Xiaoback.mp4",
    dica: "Este vigilante solitário de Liyue, com uma paixão pelos céus e um passado misterioso, empunha a Lâmina Alada para proteger a justiça. Quem é este guardião das sombras em Genshin Impact?",
    desc: "",
    bonus: "Vagando pelos céus de Liyue, este guardião solitário possui uma ligação única com os yakshas e uma busca incessante por aniquilar os demônios.",
    icon: './icon/Element_Anemo.png',
    img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/xiaoCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Xiao",  
},

//Qiqi 22
{
   nome: "qiqi",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Qiqiback.mp4",
   dica: "Esta jovem e adorável zumbi de Liyue é uma usuária de Cryo, especializada em cura. Seu nome começa com a letra 'Q' e ela é frequentemente acompanhada por um pequeno amigo. Quem é essa personagem que traz um toque gelado ao grupo?",
   desc: "",
   bonus: "Esta adorável e zumbi fofa de Liyue é conhecida como a Assistente da Florista.",
   icon: './icon/Element_Cryo.png',
   img: './image/qiqiCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Qiqi",  
},

//Ganyu 23
{
   nome: "ganyu",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Ganyuback.mp4",
   dica: "Esta arqueira de Genshin Impact é originária da região de Liyue e tem uma conexão especial com os adeptos. Seu ataque carregado desencadeia uma tempestade de flechas que pode congelar até mesmo os inimigos mais quentes. Quem é essa talentosa usuária de Cryo?",
   desc: "",
   bonus: 'Esta arqueira de cabelos azuis, cujo nome começa com "G", é uma especialista em gelo que ataca com graciosidade, lembrando a beleza e a serenidade de uma paisagem congelada. Quem é ela?',
   icon: './icon/Element_Cryo.png',
   img: './image/ganyuCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Ganyu",  
},

//Yelan 24
{
   nome: "yelan",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Yelanback.mp4",
   dica: 'Uma pessoa misteriosa que afirma trabalhar para o Ministério dos Assuntos Civis de Liyue. No entanto, ela é na verdade a chefe da Casa de Chá Yanshang.',
   desc: "",
   bonus: 'É uma arqueira excepcional, no jogo Genshin Impact é uma personagem indispensável para combinação de time para Hu Tao',
   icon: './icon/Element_Hydro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/yelanCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Yelan",  
},

//Shenhe 25
{
   nome: "shenhe",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Shenheback.mp4",
   dica: 'Filha de um casal de exorcistas não identificados, foi acolhida e criada por Cloud Retainer como discípula após um incidente traumático durante sua infância.',
   desc: "",
   bonus: 'Ela tem uma pele clara, cabelos longos que vão do branco prateado na raiz ao preto escuro nas pontas, e olhos claros e iridescentes com pupilas brancas.',
   icon: './icon/Element_Cryo.png',
   img: './image/shenheCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Shenhe",  
},

//Baizhu 26
{
   nome: "baizhu",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/baizhuBack.mp4",
   dica: 'Proprietário da Farmácia Bubu e guardião de Qiqi, o Doutor é um mestre nas artes medicinais e o mais recente destinatário de um contrato geracional com uma cobra branca chamada Changsheng.',
   desc: "",
   bonus: 'Ele busca alcançar a imortalidade para garantir que será o último a cumprir seu contrato, salvando potenciais herdeiros e até a própria Changsheng do custo que vem com seu poder.',
   icon: './icon/Element_Dendro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/baizhuCheck.png',
   star: '⭐⭐⭐⭐⭐',
   nomeCaracter: "Baizhu",
},

//Keqing 27
{
   nome: "keqing",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Keqingback.mp4",
   dica: 'Como Yuheng do Liyue Qixing, ela é alguém que busca suas próprias respostas em vez de deixar o caos tomar conta de Liyue . Ela escolhe seu próprio caminho com seu próprio poder e habilidade, em vez de deixar que os deuses determinem seu destino.',
   desc: "",
   bonus: 'Ela tem pele clara, olhos ametistas com pupilas ovais apoiadas por um formato que lembra seu estilete e cabelo roxo na altura da cintura que se transforma em roxo prateado nas pontas.',
   icon: './icon/Element_Electro.png',
   img: './image/keqingCheck.png',
   star: '⭐⭐⭐⭐⭐',
   nomeCaracter: "Keqing",
},

//Yaoyao 28
{
   nome: "yaoyao",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Yaoyaoback.mp4",
   dica: 'Ela está acostumada a cuidar de todos ao seu redor. Ela treina com seu mestre em porto de Liyue e viaja regularmente entre as montanhas e a cidade.',
   desc: "",
   bonus: 'Ela tem pele clara, olhos vermelho-escuros claros que são dourados na parte inferior e cabelo castanho dourado.',
   icon: './icon/Element_Dendro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/yaoyaoCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Yaoyao",
},

//Yunjin 29
{
   nome: "yunjin",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Yunjinback.mp4",
   dica: 'A atual diretora da Trupe de Ópera Yun-Han, uma renomada cantora de ópera de Liyue com habilidade tanto em dramaturgia quanto em canto',
   desc: "",
   bonus: 'Ela tem uma pele clara, olhos vermelhos ricos com maquiagem vermelha proeminente pintada nos cantos e cabelo preto na altura do quadril com mechas roxas estilizadas em um corte Hime.',
   icon: './icon/Element_Geo.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/yunjinCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Yunjin",
},

//Yanfei 30
{
   nome: "yanfei",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Yanfeiback.mp4",
   dica: 'Uma conhecida consultora jurídica ativa no porto de Liyue. Uma jovem brilhante em cujas veias corre o sangue de uma fera iluminada.',
   desc: "",
   bonus: 'Ela tem uma pele pálida, olhos verdes brilhantes com pupilas ovóides e cabelos cor de salmão que vão até os ombros e se transformam em um pêssego pálido nas pontas.',
   icon: './icon/Element_Pyro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/yanfeiCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Yanfei",
},

//Xinyan 31
{
   nome: "xinyan",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/xinyanBack.mp4",
   dica: "A única música de rock 'n' roll de Liyue. Ela se rebela contra preconceitos ossificados usando sua música e canto apaixonado.",
   desc: "",
   bonus: 'Ela tem pele escura, olhos âmbar e cabelo castanho escuro na altura dos ombros com mechas vermelhas escuras e parte inferior laranja.',
   icon: './icon/Element_Pyro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/xinyanCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Xinyan",
},

//Xiangling 32
{
   nome: "xiangling",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Xianglingback.mp4",
   dica: 'Uma renomada chef de Liyue. Ela é extremamente apaixonada por culinária e se destaca em preparar seus pratos quentes e picantes exclusivos.',
   desc: "",
   bonus: 'Fora da culinária, ela é fácil de assustar e costuma receber pegadinhas de Hu Tao. Apesar de não gostar de suas pegadinhas, ela não guarda rancor dela porque ocasionalmente ela traz presentes em troca de lhe dar boas risadas.',
   icon: './icon/Element_Pyro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/xianglingCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Xiangling",
},

//Beidou 33
{
   nome: "beidou",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Beidouback.mp4",
   dica: 'Capitão de sua tripulação, The Crux. Ela é uma mulher bastante livre e franca.',
   desc: "",
   bonus: 'Ela tem longos cabelos castanhos escuros na altura da cintura e pele clara. Seu olho direito tem uma tonalidade rubi profunda que se funde em ouro. Seu olho esquerdo está coberto por um tapa-olho vermelho.',
   icon: './icon/Element_Electro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/beidouCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Beidou",
},

//Xingqiu 34
{
   nome: "xingqiu",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/xingqiuBack.mp4",
   dica: 'Um jovem carregando uma espada longa que é frequentemente visto em livrarias. Ele tem um coração cavalheiresco e anseia por justiça e imparcialidade para todos.',
   desc: "",
   bonus: 'Ele tem olhos âmbar dourados, tom de pele claro e cabelo azul marinho escuro com franja assimétrica.',
   icon: './icon/Element_Hydro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/xingqiuCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Xingqiu",
},

//Chongyun 35
{
   nome: "chongyun",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/chongyunBack.mp4",
   dica: 'Um jovem exorcista de uma família de exorcistas. Ele faz tudo o que pode para suprimir sua abundância de energia yang.',
   desc: "",
   bonus: 'Ele tem cabelo azul claro chegando às orelhas, pele clara e olhos de gato azul-gelo.',
   icon: './icon/Element_Cryo.png',
   img: './image/chongyunCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Chongyun",
},

//Ningguang 36
{
   nome: "ningguang",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Ningguangback.mp4",
   dica: 'É uma empresária profissional que acumulou riqueza através de muito trabalho e perseverança.',
   desc: "",
   bonus: 'Ela tem pele clara, olhos vermelhos e cabelos lisos, na altura dos joelhos, bege-esbranquiçados, que desbotam em uma cor acinzentada nas pontas.',
   icon: './icon/Element_Geo.png',
   img: './image/ningguangCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Ningguang",
},

//Inazuma

//Kazuha 37 
{
    nome: "kazuha",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Kazuhaback.mp4",
    dica: "Vagando pelos ventos de Inazuma, este viajante anemo é um amante da poesia e da natureza. Seus versos dançam no ar enquanto ele manipula a energia do vento. Quem é esse poeta errante em Genshin Impact?",
    desc: "",
    bonus: "Este viajante anemo de Inazuma é conhecido por sua paixão pela poesia e pela brisa suave que o envolve.",
    icon: './icon/Element_Anemo.png',
    img: './image/kazuhaCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Kaedehara Kazuha",  
},

//Raiden 38
{
    nome: "raiden",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Raidenback.mp4",
    dica: "Em Inazuma, a comandante supremo governa com autoridade, equilibrando seu papel divino e humano. Ela é a portadora da visão Eletro e anseia por alcançar a eternidade. Quem é essa governante de Inazuma em Genshin Impact?",
    desc: "",
    bonus: "Seu nome começa com Ra...",
    icon: './icon/Element_Electro.png',
    img: './image/raidenCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Shogun Raiden",  
},

//Yae Miko 39
{
    nome: "yaemiko",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Yaemikoback.mp4",
    dica: "Esta personagem carismática em Genshin Impact é uma usuária de Electro, proveniente da região de Inazuma. Ela detém um catalizador e é associada a uma divindade local. Quem é essa carismática líder de visão eletro?",
    desc: "",
    bonus: 'Esta usuária de Electro em Genshin Impact, com o nome começando por "Y", é uma sacerdotisa que emana charme e mistério. Quem é essa personagem eletricamente encantadora?',
    icon: './icon/Element_Electro.png',
    img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/yaemikoCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Yae Miko",  
},

//Arataki Itto 40
{
   nome: "arataki",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Aratakiback.mp4",
   dica: 'Rápido como o vento, majestoso como o trovão, ele é um homem com o sangue de Povo Oni fluindo em suas veias. Pelos seus chifres dos Oni chamativos e pela sua voz sempre alta, ele se destacou.',
   desc: "",
   bonus: 'Seu segundo nome é "Itto" e seu primeiro nome começa com "A"',
   icon: './icon/Element_Geo.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/aratakiCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Arataki Itto",  
},

//Yoimiya 41
{
   nome: "yoimiya",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Yoimiyaback.mp4",
   dica: 'Especialista em fogos de artifício mais habilidosa de Inazuma e conhecida como “Rainha dos Festivais de Verão”',
   desc: "",
   bonus: 'Herdou o manto de "Naganohara", é capaz de proporcionar para as pessoas uma experiência incomparável com seus fogos de artifício espetaculares e sempre cheios de novidades.',
   icon: './icon/Element_Pyro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/yoimiyaCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Yoimiya",  
},

//Ayaka 42
{
   nome: "ayaka",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Ayakaback.mp4",
   dica: 'Filha da família Kamisato da Comissão de Yashiro. Solene e elegante, também sábia e forte.',
   desc: "",
   bonus: 'É uma mulher de estatura ligeiramente abaixo da média. Ela mantém seu longo cabelo branco-azulado preso em um rabo de cavalo alto por um laço.',
   icon: './icon/Element_Cryo.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/ayakaCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Kamisato Ayaka",  
},

//Kokomi 43
{
   nome: "kokomi",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Kokomiback.mp4",
   dica: 'É a Sacerdotisa Divina da Ilha Watatsumi e também atua como sua líder suprema. Ela é versada na arte da guerra, é boa em estratégias e tem insights aguçados sobre assuntos militares.',
   desc: "",
   bonus: 'Ela tem longos cabelos rosa salmão claro e olhos índigo claros, sem pupila e um grande destaque branco no topo da íris.',
   icon: './icon/Element_Hydro.png',
   img: './image/kokomiCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Sangonomiya Kokomi",  
},

//Ayato 44
{
   nome: "ayato",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Ayatoback.mp4",
   dica: 'O jovem promissor e chefe atual da Comissão Yashiro e do Clã Kamisato, é culto e educado, e sempre tem uma forma de fazer as coisas.',
   desc: "",
   bonus: 'Ele é o atual chefe do Clã Kamisato , o irmão mais velho de Kamisato Ayaka, e o Comissário Yashiro.',
   icon: './icon/Element_Hydro.png',
   img: './image/ayatoCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Kamisato Ayato",  
},

//Kirara 45
{
   nome: "kirara",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Kiraraback.mp4",
   dica: 'Uma mensageira do Komaniya Express, empresa de entregas em Inazuma. Uma Nekomata que ama seu trabalho e a sociedade humana.',
   desc: "",
   bonus: 'Tem orelhas de gato e um longo cabelo loiro',
   icon: './icon/Element_Dendro.png',
   img: './image/kiraraCheck.png',
   star: '⭐⭐⭐⭐', 
   nomeCaracter: "Kirara",  
},

//Sara 46
{
   nome: "sara",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Saraback.mp4",
   dica: 'Uma general da Comissão Tenryou. Ousada, decisiva e habilidosa em batalha',
   desc: "",
   bonus: 'Ela tem cabelo índigo cortado em um corte irregular, pele clara e olhos dourados.',
   icon: './icon/Element_Electro.png',
   img: './image/saraCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Kujou Sara",
},

//Sayu 47
{
   nome: "sayu",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Sayuback.mp4",
   dica: 'Uma pequena ninja ligada ao Shuumatsuban, que sempre parece privada de sono.',
   desc: "",
   bonus: 'Ela tem cabelo bege curto e olhos avermelhados.',
   icon: './icon/Element_Anemo.png',
   img: './image/sayuCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Sayu",
},

//Thoma 48
{
   nome: "thoma",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/thomaBack.mp4",
   dica: 'Ele deposita grande lealdade ao Clã Kamisato. Apesar de sua aparência descontraída, ele não mostra piedade daqueles que ameaçam os irmãos Kamisato e a Comissão Yashiro . Ele não usa suas conexões para ganhos pessoais.',
   desc: "",
   bonus: 'Ele tem olhos verdes, pele clara e cabelo loiro bagunçado que é curto, exceto por uma mecha na parte de trás da cabeça que desce até os ombros.',
   icon: './icon/Element_Pyro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/thomaCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Thoma",
},

//Gorou 49
{
   nome: "gorou",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Gorouback.mp4",
   dica: 'O grande general das forças da Ilha Watatsumi. Ele tem a confiança profunda de seus subordinados.',
   desc: "",
   bonus: 'Ele tem pele clara, cabelo castanho-alaranjado claro com uma mecha branca e olhos azuis-esverdeados. Ele tem orelhas pontudas e eretas, brancas por dentro e uma cauda espessa com a parte inferior branca.',
   icon: './icon/Element_Geo.png',
   img: './image/gorouCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Gorou",
},

//Kuki 50
{
   nome: "kuki",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Kukiback.mp4",
   dica: 'Ao contrário do resto de sua família que trabalha como sacerdotisas, Shinobu prefere seguir seu próprio caminho, tendo tentado vários ofícios, estudando em Liyue e até ingressando na Gangue Arataki',
   desc: "",
   bonus: 'Ela tem cabelo verde claro, pele clara e olhos estreitos violeta-avermelhados. Ela também tem marcas roxo-avermelhadas na pele nas laterais da cintura.',
   icon: './icon/Element_Electro.png',
   img: './image/kukiCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Kuki Shinobu",
},

//Heizou 51
{
   nome: "heizou",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/heizouBack.mp4",
   dica: 'Um jovem detetive prodígio da Comissão Tenryou. Seus sentidos são aguçados e seus pensamentos são claros.',
   desc: "",
   bonus: 'Ele tem cabelo cor de vinho com mechas escuras, olhos verde-oliva claros e uma verruga abaixo de cada olho.',
   icon: './icon/Element_Anemo.png',
   img: './image/heizouCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Shikanoin Heizou",
},

//Sumeru

//Scaramouche 52
{
   nome: "scaramouche",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Scaraback.mp4",
   dica: "Este membro da Fatui em Inazuma é conhecido por seu comportamento extravagante e atitude provocadora. Com sua máscara eletrovisionária, ele mantém suas verdadeiras intenções ocultas. Quem é esse agente ardiloso em Genshin Impact?",
   desc: "",
   bonus:"Seu nome de fatui começa com Sca...",
   icon: './icon/Element_Anemo.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/WandererCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Scaramouche",  
},

//Nahida 53
{
    nome: "nahida",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Nahidaback.mp4",
    dica: 'Esta misteriosa arconte de Sumeru em Genshin Impact, conhecida como a "Lorde Menor", domina o elemento Dendro e empunha um catalisador. Sua aura de mistério e ligação com a natureza a destacam como uma presença singular. Quem é essa enigmática representante de Sumeru?',
    desc: "",
    bonus: 'Ela é a Deusa da Sabedoria, seu nome comça com "N" quem é essa personagem?',
    icon: './icon/Element_Dendro.png',
    img: './image/nahidaCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Nahida",  
},

//Cyno 54
{
    nome: "cyno",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/cynoBack.mp4",
    dica: 'É um experiente estudioso da Academia de Sumeru que parece ser uma pessoa um tanto indiferente e misteriosa, preferindo manter as coisas claras e concisas.',
    desc: "",
    bonus: 'Portador de uma lança ele a utiliza com maestria, seu nome termina com "no".',
    icon: './icon/Element_Electro.png',
    img: './image/cynoCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Cyno",  
},

//Nilou 55
{
    nome: "nilou",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Nilouback.mp4",
    dica: 'É uma personagem cinco estrelas que usa uma espada como arma sob o elemento Hydro. Dançarina do Teatro Zubayr, seu cabelo chama atenção pela cor avermelhada',
    desc: "",
    bonus: 'Dançarina do Teatro Zubayr, é elegante e graciosa, no entanto, fora dos holofotes do palco, ela é como qualquer garota de sua idade; calorosa, sorridente e amigável.',
    icon: './icon/Element_Hydro.png',
    img: './image/nilouCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Nilou",  
},

// Alhaitham 56
{
   nome: "alhaitham",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Alhaithamback.mp4",
   dica: 'O atual escriba da Sumeru Akademiya, um homem dotado de inteligência e talento extraordinários. Ele vive livre – pelo menos, livre dos olhos curiosos das pessoas comuns.',
   desc: "",
   bonus: 'Ele tem pele clara, cabelos grisalhos que ficam mais claros nas pontas e com algumas mechas que têm a parte inferior turquesa clara, e olhos turquesa claros com pupilas amarelas com anéis laranja. Ele usa dois grandes fones de ouvido dourados e verdes.',
   icon: './icon/Element_Dendro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/AlhaithamCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Alhaitham",  
},

//Tighnari 57
{
   nome: "tighnari",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/tighnariBack.mp4",
   dica: 'Um jovem pesquisador versado em botânica que atualmente atua como Vigilante Florestal na Floresta Avidya. Ele é um atirador direto, com um coração caloroso - e uma mão habilidosa para guiar até mesmo os alunos mais estúpidos.',
   desc: "",
   bonus: 'Ele tem pele clara, cabelo verde escuro na altura do queixo com raízes pretas e mechas verdes claras na frente, e olhos com pupilas claras que vão do marrom ao verde. Ele também possui orelhas pretas grandes e pontudas e uma cauda fofa em dois tons de verde escuro.',
   icon: './icon/Element_Dendro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/TighnariCheck.png',
   star: '⭐⭐⭐⭐⭐',
   nomeCaracter: "Tighnari",
},

//Deyha 58
{
   nome: "dehya",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Dehyaback.mp4",
   dica: 'Membra dos Eremitas, uma organização mercenária que vaga pelas areias de Sumeru. Valente e poderosa, ela goza de grande fama entre seus companheiros eremitas.',
   desc: "",
   bonus: 'Ela tem pele levemente bronzeada, olhos azul-celeste com pupilas amarelas de "olho de gato" e cabelo castanho escuro com detalhes loiros escuros.',
   icon: './icon/Element_Pyro.png',
   img: './image/dehyaCheck.png',
   star: '⭐⭐⭐⭐⭐',
   nomeCaracter: "Dehya",
},

//Layla 59
{
    nome: "layla",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Laylaback.mp4",
    dica: 'Ela é estudante do Rtawahist Darshan, com especialização em Astrologia Teórica. Como resultado, cronicamente privada de sono e com problemas de saúde, ela acredita que "A Bênção das Estrelas" é a razão pela qual ela acorda do sonambulismo e encontra seus papéis totalmente preenchidos.',
    desc: "",
    bonus: 'Ela tem pele clara, olhos dourados com pupilas brancas, cabelo azul escuro que desbota para um tom mais claro nas pontas e orelhas pontudas.',
    icon: './icon/Element_Cryo.png',
    img: './image/laylaCheck.png',
    star: '⭐⭐⭐⭐', 
    nomeCaracter: "Layla",  

},

//Collei 60
{
   nome: "collei",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Colleiback.mp4",
   dica: 'Uma guarda florestal estagiário ativo na Floresta Avidya. Por trás de suas palavras e ações entusiasmadas esconde-se uma personalidade ligeiramente introvertida.',
   desc: "",
   bonus: 'Ela tem cabelos verdes claros curtos e ondulados que chegam aos ombros e olhos roxos, quase magentas.',
   icon: './icon/Element_Dendro.png',
   img: './image/colleiCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Collei",
},

//Faruzan 61
{
   nome: "faruzan",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Faruzanback.mp4",
   dica: 'Uma pesquisadora de “cem anos atrás”. Ela gosta de se identificar como a mais velha de todos e tem um conhecimento significativo de escritas antigas e máquinas de todos os tipos.',
   desc: "",
   bonus: 'Ela tem pele clara e seu cabelo tem um gradiente turquesa, do turquesa claro na raiz até um turquesa mais escuro nas pontas. Ela tem uma franja bagunçada que emoldura os lados do rosto, e seu cabelo é cortado curto, exceto por duas mechas que imitam caudas duplas. ',
   icon: './icon/Element_Anemo.png',
   img: './image/faruzanCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Faruzan",
},

//Candace 62 
{
   nome: "candace",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Candaceback.mp4",
   dica: 'Uma descendente do Rei Deshret com olho esquerdo âmbar. A defensora da Vila Aaru.',
   desc: "",
   bonus: 'Ela tem pele bronzeada e cabelo azul escuro. Seus olhos exibem uma forma de heterocromia iridum : seu olho direito é azul escuro e seu olho esquerdo é amarelo dourado.',
   icon: './icon/Element_Hydro.png',
   img: './image/candaceCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Candace",
},

//Dori 63
{
   nome: "dori",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/doriBack.mp4",
   dica: 'Não importa quão raros sejam os materiais experimentais, você pode comprá-los dela. Não sei de onde ela consegue seus produtos... Além disso, preste atenção ao preço ao comprar dela. Meu coração dói toda vez que pago a conta.',
   desc: "",
   bonus: 'Ela tem pele clara, olhos castanhos dourados e cabelo rosa curto. Ela também usa um par de óculos pequenos com lentes avermelhadas e armação dourada em formato de diamante.',
   icon: './icon/Element_Electro.png',
   img: './image/doriCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Dori",
},

//Kaveh 64
{
   nome: "kaveh",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Kavehback.mp4",
   dica: 'Um renomado arquiteto de Sumeru que talvez se preocupe demais com muitas coisas. Ele é um esteta preocupado com a realidade.',
   desc: "",
   bonus: 'Ele tem cabelos loiros distintos, de comprimento médio, com pontas loiras sujas e olhos penetrantes com íris vermelhas.',
   icon: './icon/Element_Dendro.png',
   img: './image/kavehCheck.png',
   star: '⭐⭐⭐⭐',
   nomeCaracter: "Kaveh",
},

//Fontaine

// Lyney 65
{
    nome: "lyney",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/lyneyBack.mp4",
    dica: 'Um gênio mágico, famoso em Fontaine. Ele emociona seu público com uma combinação de prestidigitação e o dom da palavra. Eloqüente, engenhoso e com uma mente tão difícil de compreender quanto a de um gato.',
    desc: "",
    bonus: 'Habilidoso e eloqüente, é irmão gêmeo de Lynette. Após a morte de seus pais e tendo sido salvo de um nobre abusivo por seu “ Pai ”, empreendeu missões para a Casa da Lareira e disse que eventualmente se tornaria o sucessor do “Pai”.',
    icon: './icon/Element_Pyro.png',
    img: './image/lyneyCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Lyney", 
},

// Wriothesley 66
{
    nome: "wriothesley",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Wriothesleyback.mp4",
    dica: 'Tendo matado seus pais adotivos abusivos para salvar seus irmãos adotivos, foi condenado e exilado na Fortaleza de Meropide na adolescência. Ele acabou se tornando seu administrador e impôs uma série de reformas sob seu governo, servindo de modelo para os prisioneiros.',
    desc: "",
    bonus: 'Administrador da Fortaleza de Meropide, recebeu o título honorário mais elevado de Fontaine, de "Duque". Discreto e confiável.',
    icon: './icon/Element_Cryo.png',
    img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/WriothesleyCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Wriothesley", 
},

// Neuvillette 67
{
    nome: "neuvillette",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/neuvilletteBack.mp4",
    dica: 'Você não descreveria exatamente o Iudex de Fontaine como “acessível”. É difícil dizer se é apenas da natureza dele ou porque ele tem segredos a esconder.',
    desc: "",
    bonus: 'Embora cumpra as regras do tribunal com a maior reverência, ele é bastante indiferente ao lidar com as emoções humanas e muitas vezes se distancia dos olhos do público.',
    icon: './icon/Element_Hydro.png',
    img: './image/neuvilletteCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Neuvillette", 
},

// Furina 68
{
    nome: "furina",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Furinaback.mp4",
    dica: 'Amaldiçoada com a imortalidade, ela supervisionou Fontaine, por 500 anos, a fim de realizar os planos do verdadeiro Arconte de enganar os Princípios Celestiais para salvar Fontaine de uma grande profecia',
    desc: "",
    bonus: 'A “Regina de Todas as Águas, Famílias, Povos e Leis” é profundamente amada por seu povo. Ela acompanha cada julgamento realizado na Ópera Epiclese com uma paixão inextinguível e está sempre consciente de como o “público” vê as coisas.',
    icon: './icon/Element_Hydro.png',
    img: './image/furinaCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Furina", 
},
 
// Charlotte 69
{
    nome: "charlotte",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Charlotteback.mp4",
    dica: 'Repórter infatigável do The Steambird, constantemente em busca da "verdade".',
    desc: "",
    bonus: 'Está sempre em busca de novidades exclusivas. Sempre tão implacável e infatigável, ela não vai parar até descobrir a verdade, mesmo que esteja mais perto do perigo.',
    icon: './icon/Element_Cryo.png',
    img: './image/charlotteCheck.png',
    star: '⭐⭐⭐⭐', 
    nomeCaracter: "Charlotte", 
},

// Freminet 70
{
    nome: "freminet",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/freminetBack.mp4",
    dica: "Apesar de sua habilidade e experiência como mergulhador profissional, ele prefere ficar fora dos holofotes, contentando-se em simplesmente cumprir ordens e encontrar paz ao lado das Flores Tidalga e Romaritime debaixo d'água.",
    desc: "",
    bonus: 'Jovem taciturno e mergulhador experiente, seu coração permanece tão inocente quanto os contos de fadas que nunca param de absorvê-lo.',
    icon: './icon/Element_Cryo.png',
    img: './image/freminetCheck.png',
    star: '⭐⭐⭐⭐', 
    nomeCaracter: "Freminet", 
},

// Lynette 71
{
    nome: "lynette",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/lynetteBack.mp4",
    dica: 'Calma e reservada, ela funciona como assistente de mágico de seu irmão Lyney. Após a morte de seus pais e tendo sido salva de um nobre abusivo por seu “ Pai ”, ela também serviu como “olhos” e “ouvidos” para a Casa da Lareira.',
    desc: "",
    bonus: 'Uma assistente de mágico escondida nas sombras que se refere a si mesma como uma "Assistente Mágica Multifuncional". Com cara de pôquer, reticente em falar e tão imprevisível em seus movimentos quanto um gato.',
    icon: './icon/Element_Anemo.png',
    img: './image/lynetteCheck.png',
    star: '⭐⭐⭐⭐', 
    nomeCaracter: "Lynette", 
},

// Tartaglia 72
{
    nome: "tartaglia",
    imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Tartagliaback.mp4",
    dica: 'Nº 11 de The Harbingers, também conhecido como "Childe". Seu nome é altamente temido no campo de batalha.',
    desc: "",
    bonus: 'Ele tem cabelo curto ruivo e olhos azuis opacos. Ele usa uma máscara Fatui vermelha puxada para o lado esquerdo da cabeça e um brinco de contas com um cristal vermelho na orelha esquerda.',
    icon: './icon/Element_Hydro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/tartagliaCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Tartaglia", 
},

// Navia 73
{
   nome: "navia",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/Naviaback.mp4",
   dica: 'Ela é a presidente da Spina di Rosula, manto anteriormente ocupado por seu falecido pai Callas.',
   desc: "",
   bonus: 'Apesar de ter perdido muitos entes queridos ao longo dos anos, principalmente seus pais Callas e Clementine, junto com seus subordinados de confiança Melus e Silver, ela ainda segue em frente por um futuro melhor, não querendo que seus sacrifícios sejam em vão.',
   icon: './icon/Element_Geo.png',
   img: './image/naviaCheck.png',
   star: '⭐⭐⭐⭐⭐', 
   nomeCaracter: "Navia", 
},

// Chevreuse 74
{
   nome: "chevreuse",
   imagem: "https://github.com/EryckBorges/Genshin-Impact-Divination/raw/main/image/chevreuseBack.mp4",
   dica: 'Nas horas vagas, ela gosta de ler, principalmente livros em que a justiça prevalece sobre o mal. Ela também tem uma obsessão doentia por junk food.',
   desc: "",
   bonus: 'Ela cresceu em Flueve Cendre. Ela é a atual Capitã da Patrulha Especial de Segurança e Vigilância e cliente frequente da Oficina Beaumont , muitas vezes comprando materiais caros para manter seu mosquete.',
   icon: './icon/Element_Pyro.png',
   img: 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/chevreuseCheck.png',
   star: '⭐⭐⭐⭐', 
   nomeCaracter: "Chevreuse", 
},);
        const arrayPerson = JSON.stringify(personagens);
        localStorage.setItem('persons', arrayPerson);
        sorteia();
        input.style.display = 'block';
        input.value = " "; 
        btn.style.display = 'block';
        vidasDiv.style.display = 'flex';
        btnAgain.style.display = 'none';
        btn.removeAttribute('disabled');
        vidas = 3;
        vida1.style.display = 'block';
        vida2.style.display = 'block';
        vida3.style.display = 'block';
    }
   
});

let pontos = parseInt(localStorage.getItem('Money')) || 0;

//Verificação de Money

if(localStorage.getItem('Money') == null) {
    pont.placeholder = `R$ 0,00`;
}else {
    pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
}

const audio = new Audio();
        
btn.addEventListener('click', () => {
    const persDigitado = input.value;
    const personagemDig = persDigitado.toLowerCase();
    const person = localStorage.getItem('Nome');
    const perEscolhido = localStorage.getItem('Personagem');

    if (personagemDig.trim() === person) {
        if (localStorage.getItem('persons')) {
            const arrayPersons = JSON.parse(localStorage.getItem('persons'));
            imagem.src = arrayPersons[perEscolhido].imagem;
            pontos += 100;
            localStorage.setItem('Money', pontos);
            pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
            const efeito = "./music/moedas.mp3";
            audio.src = efeito;
            audio.play();
            dica.innerHTML = `Mandou ver! Você Acertou em cheio o personagem que estava na mente de Paimon, E o escolhido foi ${arrayPersons[perEscolhido].nomeCaracter}`;
            input.style.display = "none";
            btn.style.display = "none";
            btnBonus.style.display = "none";
            arrayPersons.splice(perEscolhido, 1);
            const arrayPerson = JSON.stringify(arrayPersons);
            localStorage.setItem('persons', arrayPerson);
            setTimeout(() => {
                if (arrayPersons.length > 0) {
                    sorteia();
                    input.value = " ";
                    input.style.display = "block";
                    btn.style.display = "block";
                } else {
                    if(localStorage.getItem('nomeUser') == null) {
                        dica.innerHTML = `Parabéns Aether você acertou todos os personagens de Genshin Impact, como prêmio você ganhou 5000 moras, porém ainda há muito a se fazer. Que tal completar todos os avatares? Para isso, vamos jogar de novo, boa sorte :)`;
                    }else {
                         dica.innerHTML = `Parabéns ${localStorage.getItem('nomeUser')} você acertou todos os personagens de Genshin Impact, como prêmio você ganhou 5000 moras, porém ainda há muito a se fazer. Que tal completar todos os avatares? Para isso, vamos jogar de novo, boa sorte :)`;
                    }
                    pontos += 5000;
                    localStorage.setItem('Money', pontos);
                    pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
                    const efeito = "./music/moedas.mp3";
                    audio.src = efeito;
                    audio.play();
                    input.style.display = 'none';
                    btn.style.display = 'none';
                    vidasDiv.style.display = 'none';
                    btnAgain.style.display = 'block';
                }
            }, 5000);
        } else {
            imagem.src = personagens[perEscolhido].imagem;
            pontos += 100;
            localStorage.setItem('Money', pontos);
            pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
            const efeito = "./music/moedas.mp3";
            audio.src = efeito;
            audio.play();
            dica.innerHTML = `Mandou ver! Você Acertou em cheio o personagem que estava na mente de Paimon, E o escolhido foi ${personagens[perEscolhido].nome}`;
            input.style.display = "none";
            btn.style.display = "none";
            btnBonus.style.display = "none";
            personagens.splice(perEscolhido, 1);
            const arrayPerson = JSON.stringify(personagens);
            localStorage.setItem('persons', arrayPerson);
            setTimeout(() => {
                if (personagens.length > 0) {
                    sorteia();
                    input.value = " ";
                    input.style.display = "block";
                    btn.style.display = "block";
                } else {
                    if(localStorage.getItem('nomeUser') == null) {
                        dica.innerHTML = `Parabéns Aether você acertou todos os personagens de Genshin Impact, como prêmio você ganhou 5000 moras, porém ainda há muito a se fazer. Que tal completar todos os avatares? Para isso, vamos jogar de novo, boa sorte :)`;
                    }else {
                         dica.innerHTML = `Parabéns ${localStorage.getItem('nomeUser')} você acertou todos os personagens de Genshin Impact, como prêmio você ganhou 5000 moras, porém ainda há muito a se fazer. Que tal completar todos os avatares? Para isso, vamos jogar de novo, boa sorte :)`;
                    }
                    pontos += 5000;
                    localStorage.setItem('Money', pontos);
                    pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
                    const efeito = "./music/moedas.mp3";
                    audio.src = efeito;
                    audio.play();
                    input.style.display = 'none';
                    btn.style.display = 'none';
                    vidasDiv.style.display = 'none';
                    btnAgain.style.display = 'block';
                }
            }, 5000);
        }
    } else if (personagemDig.trim() === 'bom dia' || personagemDig.trim() === 'bomdia' || personagemDig.trim() === 'Bom Dia' || personagemDig.trim() === 'BomDia' ) {
        if(localStorage.getItem('nomeUser') == null) {
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Bom Dia Aether<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[localStorage.getItem('Personagem')].dica;
            input.value = " ";
        }, 4000);
        }else {
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Bom Dia ${localStorage.getItem('nomeUser')}<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[localStorage.getItem('Personagem')].dica;
            input.value = " ";
        }, 4000);
        }
        
    } else if (personagemDig.trim() === 'boa tarde' || personagemDig.trim() === 'boatarde' || personagemDig.trim() === 'Boa Tarde' || personagemDig.trim() === 'BoaTarde' ) {
        if(localStorage.getItem('nomeUser') == null) {
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Boa Tarde Aether<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[localStorage.getItem('Personagem')].dica;
            input.value = " ";
        }, 4000);
        }else{
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Boa Tarde ${localStorage.getItem('nomeUser')}<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[localStorage.getItem('Personagem')].dica;
            input.value = " ";
        }, 4000);
        }
        
    } else if (personagemDig.trim() === 'boa noite' || personagemDig.trim() === 'boanoite' || personagemDig.trim() === 'Boa Noite' || personagemDig.trim() === 'BoaNoite') {
        if(localStorage.getItem('nomeUser') == null) {
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Boa Noite Aether<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[localStorage.getItem('Personagem')].dica;
            input.value = " ";
        }, 4000);
        }else{
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Boa Noite ${localStorage.getItem('nomeUser')}<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[localStorage.getItem('Personagem')].dica;
            input.value = " ";
        }, 4000);
        }
        
    } else {
        pontos = Math.max(0, pontos - 50);
        localStorage.setItem('Money', pontos);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        dica.innerHTML = `O Personagem que Paimon pensou é outro`;
        btn.setAttribute('disabled', '');
        Vidas();
        let openDica = setTimeout(() => {
            btn.removeAttribute('disabled');
            dica.innerHTML = personagens[perEscolhido].dica;
            arrayPersons = JSON.parse(localStorage.getItem('persons'));
            dica.innerHTML = arrayPersons[perEscolhido].dica;
        }, 2200);
    }
});


document.addEventListener('keydown', (event) => {
    if(event.code === 'Enter') {
        const persDigitado = input.value;
    const personagemDig = persDigitado.toLowerCase();
    const person = localStorage.getItem('Nome');
    const perEscolhido = localStorage.getItem('Personagem');

    if (personagemDig.trim() === person) {
        if (localStorage.getItem('persons')) {
            const arrayPersons = JSON.parse(localStorage.getItem('persons'));
            imagem.src = arrayPersons[perEscolhido].imagem;
            pontos += 100;
            localStorage.setItem('Money', pontos);
            pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
            const efeito = "./music/moedas.mp3";
            audio.src = efeito;
            audio.play();
            dica.innerHTML = `Mandou ver! Você Acertou em cheio o personagem que estava na mente de Paimon, E o escolhido foi ${arrayPersons[perEscolhido].nomeCaracter}`;
            input.style.display = "none";
            btn.style.display = "none";
            btnBonus.style.display = "none";
            arrayPersons.splice(perEscolhido, 1);
            const arrayPerson = JSON.stringify(arrayPersons);
            localStorage.setItem('persons', arrayPerson);
            setTimeout(() => {
                if (arrayPersons.length > 0) {
                    sorteia();
                    input.value = " ";
                    input.style.display = "block";
                    btn.style.display = "block";
                } else {
                    if(localStorage.getItem('nomeUser') == null) {
                        dica.innerHTML = `Parabéns Aether você acertou todos os personagens de Genshin Impact, como prêmio você ganhou 5000 moras, porém ainda há muito a se fazer. Que tal completar todos os avatares? Para isso, vamos jogar de novo, boa sorte :)`;
                    }else {
                         dica.innerHTML = `Parabéns ${localStorage.getItem('nomeUser')} você acertou todos os personagens de Genshin Impact, como prêmio você ganhou 5000 moras, porém ainda há muito a se fazer. Que tal completar todos os avatares? Para isso, vamos jogar de novo, boa sorte :)`;
                    }
                     pontos += 5000;
                    localStorage.setItem('Money', pontos);
                    pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
                    const efeito = "./music/moedas.mp3";
                    audio.src = efeito;
                    audio.play();
                    input.style.display = 'none';
                    btn.style.display = 'none';
                    vidasDiv.style.display = 'none';
                    btnAgain.style.display = 'block';
                }
            }, 5000);
        } else {
            imagem.src = personagens[perEscolhido].imagem;
            pontos += 100;
            localStorage.setItem('Money', pontos);
            pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
            const efeito = "./music/moedas.mp3";
            audio.src = efeito;
            audio.play();
            dica.innerHTML = `Mandou ver! Você Acertou em cheio o personagem que estava na mente de Paimon, E o escolhido foi ${personagens[perEscolhido].nome}`;
            input.style.display = "none";
            btn.style.display = "none";
            btnBonus.style.display = "none";
            personagens.splice(perEscolhido, 1);
            const arrayPerson = JSON.stringify(personagens);
            localStorage.setItem('persons', arrayPerson);
            setTimeout(() => {
                if (personagens.length > 0) {
                    sorteia();
                    input.value = " ";
                    input.style.display = "block";
                    btn.style.display = "block";
                } else {
                    if(localStorage.getItem('nomeUser') == null) {
                        dica.innerHTML = `Parabéns Aether você acertou todos os personagens de Genshin Impact, como prêmio você ganhou 5000 moras, porém ainda há muito a se fazer. Que tal completar todos os avatares? Para isso, vamos jogar de novo, boa sorte :)`;
                    }else {
                         dica.innerHTML = `Parabéns ${localStorage.getItem('nomeUser')} você acertou todos os personagens de Genshin Impact, como prêmio você ganhou 5000 moras, porém ainda há muito a se fazer. Que tal completar todos os avatares? Para isso, vamos jogar de novo, boa sorte :)`;
                    }
                    pontos += 5000;
                    localStorage.setItem('Money', pontos);
                    pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
                    const efeito = "./music/moedas.mp3";
                    audio.src = efeito;
                    audio.play();
                    input.style.display = 'none';
                    btn.style.display = 'none';
                    vidasDiv.style.display = 'none';
                    btnAgain.style.display = 'block';
                }
            }, 5000);
        }
    } else if (personagemDig.trim() === 'bom dia' || personagemDig.trim() === 'bomdia' || personagemDig.trim() === 'Bom Dia' || personagemDig.trim() === 'BomDia' ) {
        if(localStorage.getItem('nomeUser') == null) {
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Bom Dia Aether<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[localStorage.getItem('Personagem')].dica;
            input.value = " ";
        }, 4000);
        }else {
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Bom Dia ${localStorage.getItem('nomeUser')}<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[localStorage.getItem('Personagem')].dica;
            input.value = " ";
        }, 4000);
        }
        
    } else if (personagemDig.trim() === 'boa tarde' || personagemDig.trim() === 'boatarde' || personagemDig.trim() === 'Boa Tarde' || personagemDig.trim() === 'BoaTarde' ) {
        if(localStorage.getItem('nomeUser') == null) {
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Boa Tarde Aether<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[localStorage.getItem('Personagem')].dica;
            input.value = " ";
        }, 4000);
        }else{
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Boa Tarde ${localStorage.getItem('nomeUser')}<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[localStorage.getItem('Personagem')].dica;
            input.value = " ";
        }, 4000);
        }
        
    } else if (personagemDig.trim() === 'boa noite' || personagemDig.trim() === 'boanoite' || personagemDig.trim() === 'Boa Noite' || personagemDig.trim() === 'BoaNoite') {
        if(localStorage.getItem('nomeUser') == null) {
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Boa Noite Aether<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[localStorage.getItem('Personagem')].dica;
            input.value = " ";
        }, 4000);
        }else{
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Boa Noite ${localStorage.getItem('nomeUser')}<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[localStorage.getItem('Personagem')].dica;
            input.value = " ";
        }, 4000);
        }
        
    } else {
        pontos = Math.max(0, pontos - 50);
        localStorage.setItem('Money', pontos);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        dica.innerHTML = `O Personagem que Paimon pensou é outro`;
        btn.setAttribute('disabled', '');
        Vidas();
        let openDica = setTimeout(() => {
            btn.removeAttribute('disabled');
            dica.innerHTML = personagens[perEscolhido].dica;
            arrayPersons = JSON.parse(localStorage.getItem('persons'));
            dica.innerHTML = arrayPersons[perEscolhido].dica;
        }, 2200);
        }
    }
});

const comprar = document.querySelector('#comprar');
const compras = document.querySelector('#compras');
const fechar = document.querySelector('#close');

compras.addEventListener('click', () => {
    if(comprar.style.display === "none") {
        const efeito = "./music/loja.mp3";
        audio.src = efeito;
        audio.play(); 
        comprar.style.display = "block";
        verificaCompraDiluc();
        addDiluc();
        verificaCompraVenti();
        addVenti();
        verificaCompraMona();
        addMona();
        verificaCompraAlbedo();
        addAlbedo();
        verificaCompraJean();
        addJean();
        verificaCompraKlee();
        addKlee();
        verificaCompraBarbara();
        addBarbara();
        verificaCompraAmber();
        addAmber();
        verificaCompraNeuvillette();
        addNeuvillette();
        verificaCompraFreminet();
        addFreminet();
        verificaCompraCharlotte();
        addCharlotte();
        verificaCompraLynette();
        addLynette();
        verificaCompraFurina();
        addFurina();
        verificaCompraLyney();
        addLyney();
        verificaCompraWriothesley();
        addWriothesley();
        verificaCompraEula();
        addEula();
        verificaCompraRazor();
        addRazor();
        verificaCompraNoelle();
        addNoelle();
        verificaCompraSucrose();
        addSucrose();
        verificaCompraRosaria();
        addRosaria();
        verificaCompraKaeya();
        addKaeya();
        verificaCompraFischl();
        addFischl();
        verificaCompraDiona();
        addDiona();
        verificaCompraBennett();
        addBennett();
        verificaCompraLisa();
        addLisa();
        //Liyue
        verificaCompraZhongli();
        addZhongli();
        verificaCompraHutao();
        addHutao();
        verificaCompraYelan();
        addYelan();
        verificaCompraGanyu();
        addGanyu();
        verificaCompraXiao();
        addXiao();
        verificaCompraQiqi();
        addQiqi();
        verificaCompraBaizhu();
        addBaizhu();
        verificaCompraShenhe();
        addShenhe();
        verificaCompraKeqing();
        addKeqing();
        verificaCompraYaoyao();
        addYaoyao();
        verificaCompraYanfei();
        addYanfei();
        verificaCompraYunjin();
        addYunjin();
        verificaCompraXinyan();
        addXinyan();
        verificaCompraBeidou();
        addBeidou();
        verificaCompraChongyun();
        addChongyun();
        verificaCompraNingguang();
        addNingguang();
        verificaCompraXingqiu();
        addXingqiu();
        verificaCompraXiangling();
        addXiangling();
        //Inazuma
        verificaCompraRaiden();
        addRaiden();
        verificaCompraKazuha();
        addKazuha();
        verificaCompraArataki();
        addArataki();
        verificaCompraKokomi();
        addKokomi();
        verificaCompraAyato();
        addAyato();
        verificaCompraAyaka();
        addAyaka();
        verificaCompraYaeMiko();
        addYaeMiko();
        verificaCompraYoimiya();
        addYoimiya();
        verificaCompraSayu();
        addSayu();
        verificaCompraSara();
        addSara();
        verificaCompraThoma();
        addThoma();
        verificaCompraGorou();
        addGorou();
        verificaCompraKuki();
        addKuki();
        verificaCompraHeizou();
        addHeizou();
        verificaCompraKirara();
        addKirara();
        //Sumeru
        verificaCompraNahida();
        addNahida();
        verificaCompraAlhaitham();
        addAlhaitham();
        verificaCompraDehya();
        addDehya();
        verificaCompraTighnari();
        addTighnari();
        verificaCompraWanderer();
        addWanderer();
        verificaCompraNilou();
        addNilou();
        verificaCompraCyno();
        addCyno();
        verificaCompraDori();
        addDori();
        verificaCompraKaveh();
        addKaveh();
        verificaCompraCandace();
        addCandace();
        verificaCompraFaruzan();
        addFaruzan();
        verificaCompraCollei();
        addCollei();
        verificaCompraLayla();
        addLayla();
        verificaCompraDilucAvatarSkin();
        addDilucSkin();
        verificaCompraJeanSkinAvatar();
        addJeanSkin();
        verificaCompraKleeSkinAvatar();
        addKleeSkin();
        verificaCompraAyakaSkinAvatar();
        addAyakaSkin();
        verificaCompraBarbaraSkinAvatar();
        addBarbaraSkin();
        verificaCompraFischlSkinAvatar();
        addFischlSkin();
        verificaCompraNingguangSkinAvatar();
        addNingguangSkin();
        verificaCompraKeqingSkinAvatar();
        addKeqingSkin();
        verificaCompraLisaSkinAvatar();
        addLisaSkin();
        verificaCompraKaeyaSkinAvatar();
        addKaeyaSkin();
        verificaCompraTartaglia();
        addTartaglia();
        verificaCompraMika();
        addMika();
        verificaCompraNavia();
        addNavia();
        verificaCompraChevreuse();
        addChevreuse();
        
    }else {
        comprar.style.display = "none";
    }
});

fechar.addEventListener('click', () => {
    comprar.style.display = "none";
    pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
});

const btnrest = document.querySelector('#btnrest');
const btnrest2 = document.querySelector('#btnrest2');
const btnrest3 = document.querySelector('#btnrest3');

btnrest.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 100 && vidas < 3) {
        vidas++;
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 100);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        if(vidas === 0){
            vida1.style.display = "block";
        }else if(vidas === 3){
            vida3.style.display = "block";
        }
        else if(vidas === 2){
            vida2.style.display = "block";
        }
        else if(vidas === 1){
            vida1.style.display = "block";
        }
    }else if(vidas >= 3) {
        
        btnrest.innerHTML = "Vida Completa";
        btnrest.style.background = "#dd1440";
        btnrest.style.transition = "0.4s linear";
            setTimeout(() => {
                btnrest.innerHTML = "Comprar";
                btnrest.style.background = "black";
                btnrest.style.transition = "0.4s linear";
            }, 3000);
    }else if(vidas < 3 && localStorage.getItem('Money') < 100) {
        btnrest.innerHTML = "Indisponivel";
        btnrest.style.background = "#dd1440";
        btnrest.style.transition = "0.4s linear";
            setTimeout(() => {
                btnrest.innerHTML = "Comprar";
                btnrest.style.background = "black";
                btnrest.style.transition = "0.4s linear";
            }, 3000);
    }
});

btnrest2.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 200 && vidas < 3) {
        vidas++
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 100);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        if(vidas === 0){
            vidas++
            vida1.style.display = "block";
            vida2.style.display = "block";
        }else if(vidas === 3){
            vida3.style.display = "block";
        }
        else if(vidas === 2){
            vidas++
            vida2.style.display = "block";
            vida3.style.display = "block";
        }
        else if(vidas === 1){
            vidas++
            vida1.style.display = "block";
            vida2.style.display = "block";
        }
    }else if(vidas >= 3) {
        btnrest2.innerHTML = "Vida Completa";
        btnrest2.style.background = "#dd1440";
        btnrest2.style.transition = "0.4s linear";
            setTimeout(() => {
                btnrest2.innerHTML = "Comprar";
                btnrest2.style.background = "black";
                btnrest2.style.transition = "0.4s linear";
            }, 3000);
    }else if(vidas < 3 && localStorage.getItem('Money') < 100) {
        btnrest2.innerHTML = "Indisponivel";
        btnrest2.style.background = "#dd1440";
        btnrest2.style.transition = "0.4s linear";
            setTimeout(() => {
                btnrest2.innerHTML = "Comprar";
                btnrest2.style.background = "black";
                btnrest2.style.transition = "0.4s linear";
            }, 3000);
    }
});

btnrest3.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 300 && vidas < 3) {
        vidas = 3;
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        localStorage.setItem('Money', pontos-= 300);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        vida1.style.display = "block";
        vida2.style.display = "block";
        vida3.style.display = "block";
    }else if(vidas >= 3) {
        btnrest3.innerHTML = "Vida Completa";
        btnrest3.style.background = "#dd1440";
        btnrest3.style.transition = "0.4s linear";
            setTimeout(() => {
                btnrest3.innerHTML = "Comprar";
                btnrest3.style.background = "black";
                btnrest3.style.transition = "0.4s linear";
            }, 3000);
    }else if(vidas < 3 && localStorage.getItem('Money') < 200) {
        btnrest3.innerHTML = "Indisponivel";
        btnrest3.style.background = "#dd1440";
        btnrest3.style.transition = "0.4s linear";
            setTimeout(() => {
                btnrest3.innerHTML = "Comprar";
                btnrest3.style.background = "black";
                btnrest3.style.transition = "0.4s linear";
            }, 3000);
    }
});

dicaBonus.addEventListener('click', () => {
    compraDica();
});

btnBonus.addEventListener('click', () => {
    btnBonusCompra();
});

//Compra do Avatar do Diluc

const dilucAvatar = document.querySelector('#dilucAvatar');

//Função da Compra do Avatar do Diluc

dilucAvatar.addEventListener('click', () => {
    dilucAvatarCompra();
});

const ventiAvatar = document.querySelector('#ventiAvatar');

//Função da Compra do Avatar do Albedo

ventiAvatar.addEventListener('click', () => {
   ventiAvatarCompra();
});

const albedoAvatar = document.querySelector('#albedoAvatar');

//Função da Compra do Avatar do Albedo

albedoAvatar.addEventListener('click', () => {
    albedoAvatarCompra();    
});

const eulaAvatar = document.querySelector('#eulaAvatar');

//Função da Compra do Avatar do Eula

eulaAvatar.addEventListener('click', () => {
    eulaAvatarCompra();
});

const kleeAvatar = document.querySelector('#kleeAvatar');

//Função da Compra do Avatar da Klee

kleeAvatar.addEventListener('click', () => {
   kleeAvatarCompra();
});

const jeanAvatar = document.querySelector('#jeanAvatar');

//Função da Compra do Avatar da Jean

jeanAvatar.addEventListener('click', () => {
   jeanAvatarCompra();
});

const monaAvatar = document.querySelector('#monaAvatar');

//Função da Compra do Avatar da Mona

monaAvatar.addEventListener('click', () => {
   monaAvatarCompra();
});

const barbaraAvatar = document.querySelector('#barbaraAvatar');

//Função da Compra do Avatar da Barbara

barbaraAvatar.addEventListener('click', () => {
    barbaraAvatarCompra();
});

// Amber
const amberAvatar = document.querySelector('#amberAvatar');

amberAvatar.addEventListener('click', () => {
   amberAvatarCompra();
});

// Razor
const razorAvatar = document.querySelector('#razorAvatar');

razorAvatar.addEventListener('click', () => {
   razorAvatarCompra();
});

// Diona
const dionaAvatar = document.querySelector('#dionaAvatar');

dionaAvatar.addEventListener('click', () => {
   dionaAvatarCompra();
});

// Noelle
const noelleAvatar = document.querySelector('#noelleAvatar');

noelleAvatar.addEventListener('click', () => {
   noelleAvatarCompra();
});

// Lisa
const lisaAvatar = document.querySelector('#lisaAvatar');

lisaAvatar.addEventListener('click', () => {
   lisaAvatarCompra();
});

// Bennett
const bennettAvatar = document.querySelector('#bennettAvatar');

bennettAvatar.addEventListener('click', () => {
   bennettAvatarCompra();
});

// Kaeya
const kaeyaAvatar = document.querySelector('#kaeyaAvatar');

kaeyaAvatar.addEventListener('click', () => {
   kaeyaAvatarCompra();
});

// Fischl
const fischlAvatar = document.querySelector('#fischlAvatar');

fischlAvatar.addEventListener('click', () => {
   fischlAvatarCompra();
});

// Rosaria
const rosariaAvatar = document.querySelector('#rosariaAvatar');

rosariaAvatar.addEventListener('click', () => {
   rosariaAvatarCompra();
});

// Sucrose
const sucroseAvatar = document.querySelector('#sucroseAvatar');

sucroseAvatar.addEventListener('click', () => {
   sucroseAvatarCompra();
});

// Xiao
const xiaoAvatar = document.querySelector('#xiaoAvatar');

xiaoAvatar.addEventListener('click', () => {
   xiaoAvatarCompra();
});

// Zhongli
const zhongliAvatar = document.querySelector('#zhongliAvatar');

zhongliAvatar.addEventListener('click', () => {
   zhongliAvatarCompra();
});

// Hu Tao
const hutaoAvatar = document.querySelector('#hutaoAvatar');

hutaoAvatar.addEventListener('click', () => {
   hutaoAvatarCompra();
});

// Shenhe
const shenheAvatar = document.querySelector('#shenheAvatar');

shenheAvatar.addEventListener('click', () => {
   shenheAvatarCompra();
});

// Ganyu
const ganyuAvatar = document.querySelector('#ganyuAvatar');

ganyuAvatar.addEventListener('click', () => {
   ganyuAvatarCompra();
});

// Yelan
const yelanAvatar = document.querySelector('#yelanAvatar');

yelanAvatar.addEventListener('click', () => {
   yelanAvatarCompra();
});

// Qiqi
const qiqiAvatar = document.querySelector('#qiqiAvatar');

qiqiAvatar.addEventListener('click', () => {
   qiqiAvatarCompra();
});

// Baizhu
const baizhuAvatar = document.querySelector('#baizhuAvatar');

baizhuAvatar.addEventListener('click', () => {
   baizhuAvatarCompra();
});

// Keqing
const keqingAvatar = document.querySelector('#keqingAvatar');

keqingAvatar.addEventListener('click', () => {
   keqingAvatarCompra();
});

// Yaoyao
const yaoyaoAvatar = document.querySelector('#yaoyaoAvatar');

yaoyaoAvatar.addEventListener('click', () => {
   yaoyaoAvatarCompra();
});

// Yunjin
const yunjinAvatar = document.querySelector('#yunjinAvatar');

yunjinAvatar.addEventListener('click', () => {
   yunjinAvatarCompra();
});

// Yanfei
const yanfeiAvatar = document.querySelector('#yanfeiAvatar');

yanfeiAvatar.addEventListener('click', () => {
   yanfeiAvatarCompra();
});

// Xiangling
const xianglingAvatar = document.querySelector('#xianglingAvatar');

xianglingAvatar.addEventListener('click', () => {
   xianglingAvatarCompra();
});

// Beidou
const beidouAvatar = document.querySelector('#beidouAvatar');

beidouAvatar.addEventListener('click', () => {
   beidouAvatarCompra();
});

// Chongyun
const chongyunAvatar = document.querySelector('#chongyunAvatar');

chongyunAvatar.addEventListener('click', () => {
   chongyunAvatarCompra();
});

// Xinyan
const xinyanAvatar = document.querySelector('#xinyanAvatar');

xinyanAvatar.addEventListener('click', () => {
   xinyanAvatarCompra();
});

// Xingqiu
const xingqiuAvatar = document.querySelector('#xingqiuAvatar');

xingqiuAvatar.addEventListener('click', () => {
   xingqiuAvatarCompra();
});

// Ningguang
const ningguangAvatar = document.querySelector('#ningguangAvatar');

ningguangAvatar.addEventListener('click', () => {
   ningguangAvatarCompra();
});

// Raiden
const raidenAvatar = document.querySelector('#raidenAvatar');

raidenAvatar.addEventListener('click', () => {
   raidenAvatarCompra();
});

// Kazuha
const kazuhaAvatar = document.querySelector('#kazuhaAvatar');

kazuhaAvatar.addEventListener('click', () => {
   kazuhaAvatarCompra();
});

// Yae Miko
const yaemikoAvatar = document.querySelector('#yaemikoAvatar');

yaemikoAvatar.addEventListener('click', () => {
   yaemikoAvatarCompra();
});

// Arataki
const aratakiAvatar = document.querySelector('#aratakiAvatar');

aratakiAvatar.addEventListener('click', () => {
   aratakiAvatarCompra();
});

// Yoimiya
const yoimiyaAvatar = document.querySelector('#yoimiyaAvatar');

yoimiyaAvatar.addEventListener('click', () => {
   yoimiyaAvatarCompra();
});

// Ayaka
const ayakaAvatar = document.querySelector('#ayakaAvatar');

ayakaAvatar.addEventListener('click', () => {
   ayakaAvatarCompra();
});

// Ayato
const ayatoAvatar = document.querySelector('#ayatoAvatar');

ayatoAvatar.addEventListener('click', () => {
   ayatoAvatarCompra();
});

// Kokomi
const kokomiAvatar = document.querySelector('#kokomiAvatar');

kokomiAvatar.addEventListener('click', () => {
   kokomiAvatarCompra();
});

// Kirara
const kiraraAvatar = document.querySelector('#kiraraAvatar');

kiraraAvatar.addEventListener('click', () => {
   kiraraAvatarCompra();
});

// Heizou
const heizouAvatar = document.querySelector('#heizouAvatar');

heizouAvatar.addEventListener('click', () => {
   heizouAvatarCompra();
});

// Sara
const saraAvatar = document.querySelector('#saraAvatar');

saraAvatar.addEventListener('click', () => {
   saraAvatarCompra();
});

// Kuki
const kukiAvatar = document.querySelector('#kukiAvatar');

kukiAvatar.addEventListener('click', () => {
   kukiAvatarCompra();
});

// Gorou
const gorouAvatar = document.querySelector('#gorouAvatar');

gorouAvatar.addEventListener('click', () => {
   gorouAvatarCompra();
});

// Thoma
const thomaAvatar = document.querySelector('#thomaAvatar');

thomaAvatar.addEventListener('click', () => {
   thomaAvatarCompra();
});

// Sayu
const sayuAvatar = document.querySelector('#sayuAvatar');

sayuAvatar.addEventListener('click', () => {
   sayuAvatarCompra();
});

// Nahida
const nahidaAvatar = document.querySelector('#nahidaAvatar');

nahidaAvatar.addEventListener('click', () => {
   nahidaAvatarCompra();
});

// Cyno
const cynoAvatar = document.querySelector('#cynoAvatar');

cynoAvatar.addEventListener('click', () => {
   cynoAvatarCompra();
});

// Alhaitham
const alhaithamAvatar = document.querySelector('#alhaithamAvatar');

alhaithamAvatar.addEventListener('click', () => {
   alhaithamAvatarCompra();
});

// Dehya
const dehyaAvatar = document.querySelector('#dehyaAvatar');

dehyaAvatar.addEventListener('click', () => {
   dehyaAvatarCompra();
});

// Wanderer
const wandererAvatar = document.querySelector('#wandererAvatar');

wandererAvatar.addEventListener('click', () => {
   wandererAvatarCompra();
});

// Nilou
const nilouAvatar = document.querySelector('#nilouAvatar');

nilouAvatar.addEventListener('click', () => {
   nilouAvatarCompra();
});

// Tighnari
const tighnariAvatar = document.querySelector('#tighnariAvatar');

tighnariAvatar.addEventListener('click', () => {
   tighnariAvatarCompra();
});

// Collei
const colleiAvatar = document.querySelector('#colleiAvatar');

colleiAvatar.addEventListener('click', () => {
   colleiAvatarCompra();
});

// Dori
const doriAvatar = document.querySelector('#doriAvatar');

doriAvatar.addEventListener('click', () => {
   doriAvatarCompra();
});

// Kaveh
const kavehAvatar = document.querySelector('#kavehAvatar');

kavehAvatar.addEventListener('click', () => {
   kavehAvatarCompra();
});

// Layla
const laylaAvatar = document.querySelector('#laylaAvatar');

laylaAvatar.addEventListener('click', () => {
   laylaAvatarCompra();
});

// Faruzan
const faruzanAvatar = document.querySelector('#faruzanAvatar');

faruzanAvatar.addEventListener('click', () => {
   faruzanAvatarCompra();
});

// Candace
const candaceAvatar = document.querySelector('#candaceAvatar');

candaceAvatar.addEventListener('click', () => {
   candaceAvatarCompra();
});

// Lyney
const lyneyAvatar = document.querySelector('#lyneyAvatar');

lyneyAvatar.addEventListener('click', () => {
   lyneyAvatarCompra();
});

// Lynette
const lynetteAvatar = document.querySelector('#lynetteAvatar');

lynetteAvatar.addEventListener('click', () => {
   lynetteAvatarCompra();
});

// Freminet
const freminetAvatar = document.querySelector('#freminetAvatar');

freminetAvatar.addEventListener('click', () => {
   freminetAvatarCompra();
});

// Charlotte
const charlotteAvatar = document.querySelector('#charlotteAvatar');

charlotteAvatar.addEventListener('click', () => {
   charlotteAvatarCompra();
});

// Furina
const furinaAvatar = document.querySelector('#furinaAvatar');

furinaAvatar.addEventListener('click', () => {
   furinaAvatarCompra();
});

// Neuvillette
const neuvilletteAvatar = document.querySelector('#neuvilletteAvatar');

neuvilletteAvatar.addEventListener('click', () => {
   neuvilletteAvatarCompra();
});

const chevreuseAvatar = document.querySelector('#chevreuseAvatar');

chevreuseAvatar.addEventListener('click', () => {
   chevreuseAvatarCompra();
});

// Wriothesley
const wriothesleyAvatar = document.querySelector('#wriothesleyAvatar');

wriothesleyAvatar.addEventListener('click', () => {
   wriothesleyAvatarCompra();
});

const dilucAvatarSkin = document.querySelector('#dilucAvatarSkin');

dilucAvatarSkin.addEventListener('click', () => {
    dilucSkinAvatarCompra();
});

const jeanAvatarSkin = document.querySelector('#jeanAvatarSkin');

jeanAvatarSkin.addEventListener('click', () => {
    jeanSkinAvatarCompra();
});

const kleeAvatarSkin = document.querySelector('#kleeAvatarSkin');

kleeAvatarSkin.addEventListener('click', () => {
    kleeSkinAvatarCompra();
});

const ayakaAvatarSkin = document.querySelector('#ayakaAvatarSkin');

ayakaAvatarSkin.addEventListener('click', () => {
    ayakaSkinAvatarCompra();
});

const barbaraAvatarSkin = document.querySelector('#barbaraAvatarSkin');

barbaraAvatarSkin.addEventListener('click', () => {
    barbaraSkinAvatarCompra();
});

const fischlAvatarSkin = document.querySelector('#fischlAvatarSkin');

fischlAvatarSkin.addEventListener('click', () => {
    fischlSkinAvatarCompra();
});

const ningguangAvatarSkin = document.querySelector('#ningguangAvatarSkin');

ningguangAvatarSkin.addEventListener('click', () => {
    ningguangSkinAvatarCompra();
});

const keqingAvatarSkin = document.querySelector('#keqingAvatarSkin');

keqingAvatarSkin.addEventListener('click', () => {
    keqingSkinAvatarCompra();
});

const lisaAvatarSkin = document.querySelector('#lisaAvatarSkin');

lisaAvatarSkin.addEventListener('click', () => {
    lisaSkinAvatarCompra();
});

const kaeyaAvatarSkin = document.querySelector('#kaeyaAvatarSkin');

kaeyaAvatarSkin.addEventListener('click', () => {
    kaeyaSkinAvatarCompra();
});


// For Tartaglia Skin
const tartagliaAvatar = document.querySelector('#tartagliaAvatar');

tartagliaAvatar.addEventListener('click', () => {
    tartagliaAvatarCompra();
});

// For Navia Skin
const naviaAvatar = document.querySelector('#naviaAvatar');

naviaAvatar.addEventListener('click', () => {
    naviaAvatarCompra();
});

// For Mika Skin
const mikaAvatar = document.querySelector('#mikaAvatar');

mikaAvatar.addEventListener('click', () => {
    mikaAvatarCompra();
});



//Seleciona os objetos 

const btnClosePerfil = document.querySelector('#closePerfil');
const perfil = document.querySelector('#contUser');
const user = document.querySelector('#user');
const cancelar = document.querySelector('#cancelar');
const salvar = document.querySelector('#salvar');
const viajante = document.querySelector('#viajante');
const lumine = document.querySelector('#lumine');
const aloy = document.querySelector('#aloy');
const diluc = document.querySelector('#diluc');
const venti = document.querySelector('#venti');
const albedo = document.querySelector('#albedo');
const eula = document.querySelector('#eula');
const jean = document.querySelector('#jean');
const klee = document.querySelector('#klee');
const mona = document.querySelector('#mona');
const barbara = document.querySelector('#barbara');
const amber = document.querySelector('#amber');
const diona = document.querySelector('#diona');
const razor = document.querySelector('#razor');
const bennett = document.querySelector('#bennett');
const fish = document.querySelector('#fischl');
const kayea = document.querySelector('#kaeya');
const lisa = document.querySelector('#lisa');
const noelle = document.querySelector('#noelle');
const sucrose = document.querySelector('#sucrose');
const rosaria = document.querySelector('#rosaria');
const hutao = document.querySelector('#hutao');
const zhongli = document.querySelector('#zhongli');
const xiao = document.querySelector('#xiao');
const yelan = document.querySelector('#yelan');
const ganyu = document.querySelector('#ganyu');
const qiqi = document.querySelector('#qiqi');
const baizhu = document.querySelector('#baizhu');
const keqing = document.querySelector('#keqing');
const shenhe = document.querySelector('#shenhe');
const yaoyao = document.querySelector('#yaoyao');
const yunjin = document.querySelector('#yunjin');
const yanfei = document.querySelector('#yanfei');
const xiangling = document.querySelector('#xiangling');
const beidou = document.querySelector('#beidou');
const chongyun = document.querySelector('#chongyun');
const xinyan = document.querySelector('#xinyan');
const xingqiu = document.querySelector('#xingqiu');
const ningguang = document.querySelector('#ningguang');
const raiden = document.querySelector('#raiden');
const kazuha = document.querySelector('#kazuha');
const arataki = document.querySelector('#arataki');
const ayaka = document.querySelector('#ayaka');
const yoimiya = document.querySelector('#yoimiya');
const kokomi = document.querySelector('#kokomi');
const ayato = document.querySelector('#ayato');
const yaemiko = document.querySelector('#yaemiko');
const kirara = document.querySelector('#kirara');
const heizou = document.querySelector('#heizou');
const kuki = document.querySelector('#kuki');
const gorou = document.querySelector('#gorou');
const thoma = document.querySelector('#thoma');
const sara = document.querySelector('#sara');
const sayu = document.querySelector('#sayu');
const nahida = document.querySelector('#nahida');
const cyno = document.querySelector('#cyno');
const dehya = document.querySelector('#dehya');
const alhaitham = document.querySelector('#alhaitham');
const wanderer = document.querySelector('#wanderer');
const nilou = document.querySelector('#nilou');
const tighnari = document.querySelector('#tighnari');
const collei = document.querySelector('#collei');
const dori = document.querySelector('#dori');
const kaveh = document.querySelector('#kaveh');
const layla = document.querySelector('#layla');
const faruzan = document.querySelector('#faruzan');
const candace = document.querySelector('#candace');
const lyney = document.querySelector('#lyney');
const wriothesley = document.querySelector('#wriothesley');
const furina = document.querySelector('#furina');
const neuvillette = document.querySelector('#neuvillette');
const charlotte = document.querySelector('#charlotte');
const freminet = document.querySelector('#freminet');
const lynette = document.querySelector('#lynette');
const dilucSkin = document.querySelector('#dilucSkin');
const jeanSkin = document.querySelector('#jeanSkin');
const kleeSkin = document.querySelector('#kleeSkin');
const ayakaSkin = document.querySelector('#ayakaSkin');
const barbaraSkin = document.querySelector('#barbaraSkin');
const fischlSkin = document.querySelector('#fischlSkin');
const ningguangSkin = document.querySelector('#ningguangSkin');
const keqingSkin = document.querySelector('#keqingSkin');
const lisaSkin = document.querySelector('#lisaSkin');
const kaeyaSkin = document.querySelector('#kaeyaSkin');
const tartaglia = document.querySelector('#tartaglia');
const mika = document.querySelector('#mika');
const navia = document.querySelector('#navia');
const chevreuse = document.querySelector('#chevreuse');
const selectVenti = document.querySelector('#venti');
const selectDiluc = document.querySelector('#diluc');
const selectMona = document.querySelector('#mona');
const selectAlbedo = document.querySelector('#albedo');
const selectJean = document.querySelector('#jean');
const selectKlee = document.querySelector('#klee');
const selectEula = document.querySelector('#eula');
const selectBarbara = document.querySelector('#barbara');
const selectAmber = document.querySelector('#amber');
const selectRazor = document.querySelector('#razor');
const selectSucrose = document.querySelector('#sucrose');
const selectRosaria = document.querySelector('#rosaria');
const selectLisa = document.querySelector('#lisa');
const selectKaeya = document.querySelector('#kaeya');
const selectDiona = document.querySelector('#diona');
const selectFischl = document.querySelector('#fischl');
const selectNoelle = document.querySelector('#noelle');
const selectBennett = document.querySelector('#bennett');
const selectMika = document.querySelector('#mika');
const selectHutao = document.querySelector('#hutao');
const selectZhongli = document.querySelector('#zhongli');
const selectGanyu = document.querySelector('#ganyu');
const selectShenhe = document.querySelector('#shenhe');
const selectXiao = document.querySelector('#xiao');
const selectYelan = document.querySelector('#yelan');
const selectQiqi = document.querySelector('#qiqi');
const selectBaizhu = document.querySelector('#baizhu');
const selectKeqing = document.querySelector('#keqing');
const selectYanfei = document.querySelector('#yanfei');
const selectYunjin = document.querySelector('#yunjin');
const selectYaoyao = document.querySelector('#yaoyao');
const selectChongyun = document.querySelector('#chongyun');
const selectXingqiu = document.querySelector('#xingqiu');
const selectXiangling = document.querySelector('#xiangling');
const selectBeidou = document.querySelector('#beidou');
const selectXinyan = document.querySelector('#xinyan');
const selectNingguang = document.querySelector('#ningguang');
const selectThoma = document.querySelector('#thoma');
const selectSara = document.querySelector('#sara');
const selectSayu = document.querySelector('#sayu');
const selectKuki = document.querySelector('#kuki');
const selectGorou = document.querySelector('#gorou');
const selectHeizou = document.querySelector('#heizou');
const selectKirara = document.querySelector('#kirara');
const selectAyato = document.querySelector('#ayato');
const selectAyaka = document.querySelector('#ayaka');
const selectKokomi = document.querySelector('#kokomi');
const selectRaiden = document.querySelector('#raiden');
const selectKazuha = document.querySelector('#kazuha');
const selectArataki = document.querySelector('#arataki');
const selectYaemiko = document.querySelector('#yaemiko');
const selectYoimiya = document.querySelector('#yoimiya');
const selectCandace = document.querySelector('#candace');
const selectFaruzan = document.querySelector('#faruzan');
const selectLayla = document.querySelector('#layla');
const selectKaveh = document.querySelector('#kaveh');
const selectDori = document.querySelector('#dori');
const selectCollei = document.querySelector('#collei');
const selectNilou = document.querySelector('#nilou');
const selectTighnari = document.querySelector('#tighnari');
const selectAlhaitham = document.querySelector('#alhaitham');
const selectWanderer = document.querySelector('#wanderer');
const selectNahida = document.querySelector('#nahida');
const selectCyno = document.querySelector('#cyno');
const selectDehya = document.querySelector('#dehya');
const selectNeuvillette = document.querySelector('#neuvillette');
const selectFurina = document.querySelector('#furina');
const selectWriothesley = document.querySelector('#wriothesley');
const selectLyney = document.querySelector('#lyney');
const selectCharlotte = document.querySelector('#charlotte');
const selectFreminet = document.querySelector('#freminet');
const selectLynette = document.querySelector('#lynette');
const selectNavia = document.querySelector('#navia');
const selectChevreuse = document.querySelector('#chevreuse');
const selectTartaglia = document.querySelector('#tartaglia');
const selectDilucSkin = document.querySelector('#dilucSkin');
const selectJeanSkin = document.querySelector('#jeanSkin');
const selectKleeSkin = document.querySelector('#kleeSkin');
const selectAyakaSkin = document.querySelector('#ayakaSkin');
const selectBarbaraSkin = document.querySelector('#barbaraSkin');
const selectFischlSkin = document.querySelector('#fischlSkin');
const selectNingguangSkin = document.querySelector('#ningguangSkin');
const selectKeqingSkin = document.querySelector('#keqingSkin');
const selectLisaSkin = document.querySelector('#lisaSkin');
const selectKaeyaSkin = document.querySelector('#kaeyaSkin');

lumine.addEventListener('click', () => {
    if(audio !== undefined) {
        audio.pause();  
    }
    const efeito = "./music/lumine.ogg";
    audio.src = efeito;
    audio.play();  
    let imgSelect = document.querySelector('#lumine img').src;
    document.querySelector('#imgPerfil img').src = imgSelect;
});

viajante.addEventListener('click', () => {
    if(audio !== undefined) {
        audio.pause();  
    }
    let imgSelect = document.querySelector('#viajante img').src;
    document.querySelector('#imgPerfil img').src = imgSelect;
    const efeito = "./music/aether.ogg";
    audio.src = efeito;
    audio.play();  
});

aloy.addEventListener('click', () => {
    if(audio !== undefined) {
        audio.pause();  
    }
    let imgSelect = document.querySelector('#aloy img').src;
    document.querySelector('#imgPerfil img').src = imgSelect;
    const efeito = "./music/aloy.ogg";
    audio.src = efeito;
    audio.play();  
});

diluc.addEventListener('click', () => {  
            audio.pause();  
        if(localStorage.getItem('dilucAvatar') !== 'comprado') {
            selectDiluc.classList.add('disabled');
            selectDiluc.setAttribute('disabled', 'true');
            diluc.style.background = '#dd1440';
            diluc.style.transition = '0.5s linear';
            setTimeout(() => {
                diluc.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
                diluc.style.backgroundPosition = 'center';
                diluc.style.backgroundRepeat = 'no-repeat';
                diluc.style.backgroundSize = 'cover';
                diluc.style.backgroundAttachment = 'fixed';
                diluc.style.transition = '0.5s linear';
            }, 2000);
        } else {
            let imgSelect = document.querySelector('#diluc img').src;
            document.querySelector('#imgPerfil img').src = imgSelect;    
            const efeito = "./music/diluc.ogg";
            audio.src = efeito;
            audio.play(); 
        }
});

venti.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('ventiAvatar') !== 'comprado') {
        selectVenti.classList.add('disabled');
        selectVenti.setAttribute('disabled', 'true');
        venti.style.background = '#dd1440';
        venti.style.transition = '0.5s linear';
        setTimeout(() => {
            venti.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            venti.style.backgroundPosition = 'center';
            venti.style.backgroundRepeat = 'no-repeat';
            venti.style.backgroundSize = 'cover';
            venti.style.backgroundAttachment = 'fixed';
            venti.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#venti img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/venti.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

albedo.addEventListener('click', () => {
        audio.pause();  
        if(localStorage.getItem('albedoAvatar') !== 'comprado') {
            selectAlbedo.classList.add('disabled');
            selectAlbedo.setAttribute('disabled', 'true');
            albedo.style.background = '#dd1440';
            albedo.style.transition = '0.5s linear';
            setTimeout(() => {
                albedo.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
                albedo.style.backgroundPosition = 'center';
                albedo.style.backgroundRepeat = 'no-repeat';
                albedo.style.backgroundSize = 'cover';
                albedo.style.backgroundAttachment = 'fixed';
                albedo.style.transition = '0.5s linear';
            }, 2000);
        } else {
            let imgSelect = document.querySelector('#albedo img').src;
            document.querySelector('#imgPerfil img').src = imgSelect;    
            const efeito = "./music/albedo.ogg";
            audio.src = efeito;
            audio.play();  
        }
});

eula.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('eulaAvatar') !== 'comprado') {
        selectEula.classList.add('disabled');
        selectEula.setAttribute('disabled', 'true');
        eula.style.background = '#dd1440';
        eula.style.transition = '0.5s linear';
        setTimeout(() => {
            eula.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            eula.style.backgroundPosition = 'center';
            eula.style.backgroundRepeat = 'no-repeat';
            eula.style.backgroundSize = 'cover';
            eula.style.backgroundAttachment = 'fixed';
            eula.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#eula img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/eula.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

klee.addEventListener('click', () => {
        audio.pause();  
        if(localStorage.getItem('kleeAvatar') !== 'comprado') {
            selectKlee.classList.add('disabled');
            selectKlee.setAttribute('disabled', 'true');
            klee.style.background = '#dd1440';
            klee.style.transition = '0.5s linear';
            setTimeout(() => {
                klee.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
                klee.style.backgroundPosition = 'center';
                klee.style.backgroundRepeat = 'no-repeat';
                klee.style.backgroundSize = 'cover';
                klee.style.backgroundAttachment = 'fixed';
                klee.style.transition = '0.5s linear';
            }, 2000);
        } else {
            let imgSelect = document.querySelector('#klee img').src;
            document.querySelector('#imgPerfil img').src = imgSelect;    
            const efeito = "./music/klee.ogg";
            audio.src = efeito;
            audio.play();  
        }
});

jean.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('jeanAvatar') !== 'comprado') {
        selectJean.classList.add('disabled');
        selectJean.setAttribute('disabled', 'true');
        jean.style.background = '#dd1440';
        jean.style.transition = '0.5s linear';
        setTimeout(() => {
            jean.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            jean.style.backgroundPosition = 'center';
            jean.style.backgroundRepeat = 'no-repeat';
            jean.style.backgroundSize = 'cover';
            jean.style.backgroundAttachment = 'fixed';
            jean.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#jean img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/jean.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

mona.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('monaAvatar') !== 'comprado') {
        selectMona.classList.add('disabled');
        selectMona.setAttribute('disabled', 'true');
        mona.style.background = '#dd1440';
        mona.style.transition = '0.5s linear';
        setTimeout(() => {
            mona.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            mona.style.backgroundPosition = 'center';
            mona.style.backgroundRepeat = 'no-repeat';
            mona.style.backgroundSize = 'cover';
            mona.style.backgroundAttachment = 'fixed';
            mona.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#mona img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/mona.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

barbara.addEventListener('click', () => {
        audio.pause();  
        if(localStorage.getItem('barbaraAvatar') !== 'comprado') {
            selectBarbara.classList.add('disabled');
            selectBarbara.setAttribute('disabled', 'true');
            barbara.style.background = '#dd1440';
            barbara.style.transition = '0.5s linear';
            setTimeout(() => {
                barbara.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
                barbara.style.backgroundPosition = 'center';
                barbara.style.backgroundRepeat = 'no-repeat';
                barbara.style.backgroundSize = 'cover';
                barbara.style.backgroundAttachment = 'fixed';
                barbara.style.transition = '0.5s linear';
            }, 2000);
        } else {
            let imgSelect = document.querySelector('#barbara img').src;
            document.querySelector('#imgPerfil img').src = imgSelect;    
            const efeito = "./music/barbara.ogg";
            audio.src = efeito;
            audio.play();  
        }
});

amber.addEventListener('click', () => {
        audio.pause(); 
        if(localStorage.getItem('amberAvatar') !== 'comprado') {
            selectAmber.classList.add('disabled');
            selectAmber.setAttribute('disabled', 'true');
            amber.style.background = '#dd1440';
            amber.style.transition = '0.5s linear';
            setTimeout(() => {
                amber.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
                amber.style.backgroundPosition = 'center';
                amber.style.backgroundRepeat = 'no-repeat';
                amber.style.backgroundSize = 'cover';
                amber.style.backgroundAttachment = 'fixed';
                amber.style.transition = '0.5s linear';
            }, 2000);
        } else {
            let imgSelect = document.querySelector('#amber img').src;
            document.querySelector('#imgPerfil img').src = imgSelect;    
            const efeito = "./music/amber.ogg";
            audio.src = efeito;
            audio.play();  
        }
});

diona.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('dionaAvatar') !== 'comprado') {
        selectDiona.classList.add('disabled');
        selectDiona.setAttribute('disabled', 'true');
        diona.style.background = '#dd1440';
        diona.style.transition = '0.5s linear';
        setTimeout(() => {
            diona.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            diona.style.backgroundPosition = 'center';
            diona.style.backgroundRepeat = 'no-repeat';
            diona.style.backgroundSize = 'cover';
            diona.style.backgroundAttachment = 'fixed';
            diona.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#diona img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/diona.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

razor.addEventListener('click', () => {
        audio.pause();  
        if(localStorage.getItem('razorAvatar') !== 'comprado') {
            selectRazor.classList.add('disabled');
            selectRazor.setAttribute('disabled', 'true');
            razor.style.background = '#dd1440';
            razor.style.transition = '0.5s linear';
            setTimeout(() => {
                razor.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
                razor.style.backgroundPosition = 'center';
                razor.style.backgroundRepeat = 'no-repeat';
                razor.style.backgroundSize = 'cover';
                razor.style.backgroundAttachment = 'fixed';
                razor.style.transition = '0.5s linear';
            }, 2000);
        } else {
            let imgSelect = document.querySelector('#razor img').src;
            document.querySelector('#imgPerfil img').src = imgSelect;    
            const efeito = "./music/razor.ogg";
            audio.src = efeito;
            audio.play();  
        }
});

fish.addEventListener('click', () => {
        audio.pause();  
        if(localStorage.getItem('fischlAvatar') !== 'comprado') {
            selectFischl.classList.add('disabled');
            selectFischl.setAttribute('disabled', 'true');
            fischl.style.background = '#dd1440';
            fischl.style.transition = '0.5s linear';
            setTimeout(() => {
                fischl.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
                fischl.style.backgroundPosition = 'center';
                fischl.style.backgroundRepeat = 'no-repeat';
                fischl.style.backgroundSize = 'cover';
                fischl.style.backgroundAttachment = 'fixed';
                fischl.style.transition = '0.5s linear';
            }, 2000);
        } else {
            let imgSelect = document.querySelector('#fischl img').src;
            document.querySelector('#imgPerfil img').src = imgSelect;    
            const efeito = "./music/fischl.ogg";
            audio.src = efeito;
            audio.play();  
        }
});

lisa.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('lisaAvatar') !== 'comprado') {
        selectLisa.classList.add('disabled');
        selectLisa.setAttribute('disabled', 'true');
        lisa.style.background = '#dd1440';
        lisa.style.transition = '0.5s linear';
        setTimeout(() => {
            lisa.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            lisa.style.backgroundPosition = 'center';
            lisa.style.backgroundRepeat = 'no-repeat';
            lisa.style.backgroundSize = 'cover';
            lisa.style.backgroundAttachment = 'fixed';
            lisa.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#lisa img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/lisa.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

sucrose.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('sucroseAvatar') !== 'comprado') {
        selectSucrose.classList.add('disabled');
        selectSucrose.setAttribute('disabled', 'true');
        sucrose.style.background = '#dd1440';
        sucrose.style.transition = '0.5s linear';
        setTimeout(() => {
            sucrose.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            sucrose.style.backgroundPosition = 'center';
            sucrose.style.backgroundRepeat = 'no-repeat';
            sucrose.style.backgroundSize = 'cover';
            sucrose.style.backgroundAttachment = 'fixed';
            sucrose.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#sucrose img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/sucrose.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

rosaria.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('rosariaAvatar') !== 'comprado') {
        selectRosaria.classList.add('disabled');
        selectRosaria.setAttribute('disabled', 'true');
        rosaria.style.background = '#dd1440';
        rosaria.style.transition = '0.5s linear';
        setTimeout(() => {
            rosaria.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            rosaria.style.backgroundPosition = 'center';
            rosaria.style.backgroundRepeat = 'no-repeat';
            rosaria.style.backgroundSize = 'cover';
            rosaria.style.backgroundAttachment = 'fixed';
            rosaria.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#rosaria img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/rosaria.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

noelle.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('noelleAvatar') !== 'comprado') {
        selectNoelle.classList.add('disabled');
        selectNoelle.setAttribute('disabled', 'true');
        noelle.style.background = '#dd1440';
        noelle.style.transition = '0.5s linear';
        setTimeout(() => {
            noelle.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            noelle.style.backgroundPosition = 'center';
            noelle.style.backgroundRepeat = 'no-repeat';
            noelle.style.backgroundSize = 'cover';
            noelle.style.backgroundAttachment = 'fixed';
            noelle.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#noelle img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/noelle.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

kayea.addEventListener('click', () => {
        audio.pause();  
        if(localStorage.getItem('kaeyaAvatar') !== 'comprado') {
            selectKaeya.classList.add('disabled');
            selectKaeya.setAttribute('disabled', 'true');
            kaeya.style.background = '#dd1440';
            kaeya.style.transition = '0.5s linear';
            setTimeout(() => {
                kaeya.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
                kaeya.style.backgroundPosition = 'center';
                kaeya.style.backgroundRepeat = 'no-repeat';
                kaeya.style.backgroundSize = 'cover';
                kaeya.style.backgroundAttachment = 'fixed';
                kaeya.style.transition = '0.5s linear';
            }, 2000);
        } else {
            let imgSelect = document.querySelector('#kaeya img').src;
            document.querySelector('#imgPerfil img').src = imgSelect; 
            const audio = new Audio();   
            const efeito = "./music/kaeya.ogg";
            audio.src = efeito;
            audio.play();  
        }
});

bennett.addEventListener('click', () => {
        audio.pause();  
        if(localStorage.getItem('bennettAvatar') !== 'comprado') {
            selectBennett.classList.add('disabled');
            selectBennett.setAttribute('disabled', 'true');
            bennett.style.background = '#dd1440';
            bennett.style.transition = '0.5s linear';
            setTimeout(() => {
                bennett.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
                bennett.style.backgroundPosition = 'center';
                bennett.style.backgroundRepeat = 'no-repeat';
                bennett.style.backgroundSize = 'cover';
                bennett.style.backgroundAttachment = 'fixed';
                bennett.style.transition = '0.5s linear';
            }, 2000);
        } else {
            let imgSelect = document.querySelector('#bennett img').src;
            document.querySelector('#imgPerfil img').src = imgSelect; 
            const audio = new Audio();   
            const efeito = "./music/bennett.ogg";
            audio.src = efeito;
            audio.play();  
        }
});

hutao.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('hutaoAvatar') !== 'comprado') {
        selectHutao.classList.add('disabled');
        selectHutao.setAttribute('disabled', 'true');
        hutao.style.background = '#dd1440';
        hutao.style.transition = '0.5s linear';
        setTimeout(() => {
            hutao.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            hutao.style.backgroundPosition = 'center';
            hutao.style.backgroundRepeat = 'no-repeat';
            hutao.style.backgroundSize = 'cover';
            hutao.style.backgroundAttachment = 'fixed';
            hutao.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#hutao img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/hutao.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

zhongli.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('zhongliAvatar') !== 'comprado') {
        selectZhongli.classList.add('disabled');
        selectZhongli.setAttribute('disabled', 'true');
        zhongli.style.background = '#dd1440';
        zhongli.style.transition = '0.5s linear';
        setTimeout(() => {
            zhongli.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            zhongli.style.backgroundPosition = 'center';
            zhongli.style.backgroundRepeat = 'no-repeat';
            zhongli.style.backgroundSize = 'cover';
            zhongli.style.backgroundAttachment = 'fixed';
            zhongli.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#zhongli img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const efeito = "./music/zhongli.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

xiao.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('xiaoAvatar') !== 'comprado') {
        selectXiao.classList.add('disabled');
        selectXiao.setAttribute('disabled', 'true');
        xiao.style.background = '#dd1440';
        xiao.style.transition = '0.5s linear';
        setTimeout(() => {
            xiao.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            xiao.style.backgroundPosition = 'center';
            xiao.style.backgroundRepeat = 'no-repeat';
            xiao.style.backgroundSize = 'cover';
            xiao.style.backgroundAttachment = 'fixed';
            xiao.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#xiao img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/xiao.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

ganyu.addEventListener('click', () => {
    audio.pause();  
 if(localStorage.getItem('ganyuAvatar') !== 'comprado') {
        selectGanyu.classList.add('disabled');
        selectGanyu.setAttribute('disabled', 'true');
        ganyu.style.background = '#dd1440';
        ganyu.style.transition = '0.5s linear';
        setTimeout(() => {
            ganyu.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            ganyu.style.backgroundPosition = 'center';
            ganyu.style.backgroundRepeat = 'no-repeat';
            ganyu.style.backgroundSize = 'cover';
            ganyu.style.backgroundAttachment = 'fixed';
            ganyu.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#ganyu img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const efeito = "./music/ganyu.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

shenhe.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('shenheAvatar') !== 'comprado') {
        selectShenhe.classList.add('disabled');
        selectShenhe.setAttribute('disabled', 'true');
        shenhe.style.background = '#dd1440';
        shenhe.style.transition = '0.5s linear';
        setTimeout(() => {
            shenhe.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            shenhe.style.backgroundPosition = 'center';
            shenhe.style.backgroundRepeat = 'no-repeat';
            shenhe.style.backgroundSize = 'cover';
            shenhe.style.backgroundAttachment = 'fixed';
            shenhe.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#shenhe img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/shenhe.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

yelan.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('yelanAvatar') !== 'comprado') {
        selectYelan.classList.add('disabled');
        selectYelan.setAttribute('disabled', 'true');
        yelan.style.background = '#dd1440';
        yelan.style.transition = '0.5s linear';
        setTimeout(() => {
            yelan.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            yelan.style.backgroundPosition = 'center';
            yelan.style.backgroundRepeat = 'no-repeat';
            yelan.style.backgroundSize = 'cover';
            yelan.style.backgroundAttachment = 'fixed';
            yelan.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#yelan img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/yelan.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

qiqi.addEventListener('click', () => {
    audio.pause();  
   if(localStorage.getItem('qiqiAvatar') !== 'comprado') {
        selectQiqi.classList.add('disabled');
        selectQiqi.setAttribute('disabled', 'true');
        qiqi.style.background = '#dd1440';
        qiqi.style.transition = '0.5s linear';
        setTimeout(() => {
            qiqi.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            qiqi.style.backgroundPosition = 'center';
            qiqi.style.backgroundRepeat = 'no-repeat';
            qiqi.style.backgroundSize = 'cover';
            qiqi.style.backgroundAttachment = 'fixed';
            qiqi.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#qiqi img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/qiqi.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

baizhu.addEventListener('click', () => {
    audio.pause();  
     if(localStorage.getItem('baizhuAvatar') !== 'comprado') {
        selectBaizhu.classList.add('disabled');
        selectBaizhu.setAttribute('disabled', 'true');
        baizhu.style.background = '#dd1440';
        baizhu.style.transition = '0.5s linear';
        setTimeout(() => {
            baizhu.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            baizhu.style.backgroundPosition = 'center';
            baizhu.style.backgroundRepeat = 'no-repeat';
            baizhu.style.backgroundSize = 'cover';
            baizhu.style.backgroundAttachment = 'fixed';
            baizhu.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#baizhu img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/baizhu.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

keqing.addEventListener('click', () => {
    audio.pause();  
     if(localStorage.getItem('keqingAvatar') !== 'comprado') {
        selectKeqing.classList.add('disabled');
        selectKeqing.setAttribute('disabled', 'true');
        keqing.style.background = '#dd1440';
        keqing.style.transition = '0.5s linear';
        setTimeout(() => {
            keqing.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            keqing.style.backgroundPosition = 'center';
            keqing.style.backgroundRepeat = 'no-repeat';
            keqing.style.backgroundSize = 'cover';
            keqing.style.backgroundAttachment = 'fixed';
            keqing.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#keqing img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const efeito = "./music/keqing.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

yaoyao.addEventListener('click', () => {
    audio.pause();  
     if(localStorage.getItem('yaoyaoAvatar') !== 'comprado') {
        selectYaoyao.classList.add('disabled');
        selectYaoyao.setAttribute('disabled', 'true');
        yaoyao.style.background = '#dd1440';
        yaoyao.style.transition = '0.5s linear';
        setTimeout(() => {
            yaoyao.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            yaoyao.style.backgroundPosition = 'center';
            yaoyao.style.backgroundRepeat = 'no-repeat';
            yaoyao.style.backgroundSize = 'cover';
            yaoyao.style.backgroundAttachment = 'fixed';
            yaoyao.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#yaoyao img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/yaoyao.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

yunjin.addEventListener('click', () => {
    audio.pause();  
   if(localStorage.getItem('yunjinAvatar') !== 'comprado') {
        selectYunjin.classList.add('disabled');
        selectYunjin.setAttribute('disabled', 'true');
        yunjin.style.background = '#dd1440';
        yunjin.style.transition = '0.5s linear';
        setTimeout(() => {
            yunjin.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            yunjin.style.backgroundPosition = 'center';
            yunjin.style.backgroundRepeat = 'no-repeat';
            yunjin.style.backgroundSize = 'cover';
            yunjin.style.backgroundAttachment = 'fixed';
            yunjin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#yunjin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
        const efeito = "./music/yunjin.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

yanfei.addEventListener('click', () => {
    audio.pause();  
   if(localStorage.getItem('yanfeiAvatar') !== 'comprado') {
        selectYanfei.classList.add('disabled');
        selectYanfei.setAttribute('disabled', 'true');
        yanfei.style.background = '#dd1440';
        yanfei.style.transition = '0.5s linear';
        setTimeout(() => {
            yanfei.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            yanfei.style.backgroundPosition = 'center';
            yanfei.style.backgroundRepeat = 'no-repeat';
            yanfei.style.backgroundSize = 'cover';
            yanfei.style.backgroundAttachment = 'fixed';
            yanfei.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#yanfei img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/yanfei.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Xiangling
xiangling.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('xianglingAvatar') !== 'comprado') {
        selectXiangling.classList.add('disabled');
        selectXiangling.setAttribute('disabled', 'true');
        xiangling.style.background = '#dd1440';
        xiangling.style.transition = '0.5s linear';
        setTimeout(() => {
            xiangling.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            xiangling.style.backgroundPosition = 'center';
            xiangling.style.backgroundRepeat = 'no-repeat';
            xiangling.style.backgroundSize = 'cover';
            xiangling.style.backgroundAttachment = 'fixed';
            xiangling.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#xiangling img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const efeito = "./music/xiangling.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Beidou
beidou.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('beidouAvatar') !== 'comprado') {
        selectBeidou.classList.add('disabled');
        selectBeidou.setAttribute('disabled', 'true');
        beidou.style.background = '#dd1440';
        beidou.style.transition = '0.5s linear';
        setTimeout(() => {
            beidou.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            beidou.style.backgroundPosition = 'center';
            beidou.style.backgroundRepeat = 'no-repeat';
            beidou.style.backgroundSize = 'cover';
            beidou.style.backgroundAttachment = 'fixed';
            beidou.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#beidou img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const efeito = "./music/beidou.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Chongyun
chongyun.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('chongyunAvatar') !== 'comprado') {
        selectChongyun.classList.add('disabled');
        selectChongyun.setAttribute('disabled', 'true');
        chongyun.style.background = '#dd1440';
        chongyun.style.transition = '0.5s linear';
        setTimeout(() => {
            chongyun.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            chongyun.style.backgroundPosition = 'center';
            chongyun.style.backgroundRepeat = 'no-repeat';
            chongyun.style.backgroundSize = 'cover';
            chongyun.style.backgroundAttachment = 'fixed';
            chongyun.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#chongyun img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
        const efeito = "./music/chongyun.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Xinyan
xinyan.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('xinyanAvatar') !== 'comprado') {
        selectXinyan.classList.add('disabled');
        selectXinyan.setAttribute('disabled', 'true');
        xinyan.style.background = '#dd1440';
        xinyan.style.transition = '0.5s linear';
        setTimeout(() => {
            xinyan.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            xinyan.style.backgroundPosition = 'center';
            xinyan.style.backgroundRepeat = 'no-repeat';
            xinyan.style.backgroundSize = 'cover';
            xinyan.style.backgroundAttachment = 'fixed';
            xinyan.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#xinyan img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/xinyan.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Xingqiu
xingqiu.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('xingqiuAvatar') !== 'comprado') {
        selectXingqiu.classList.add('disabled');
        selectXingqiu.setAttribute('disabled', 'true');
        xingqiu.style.background = '#dd1440';
        xingqiu.style.transition = '0.5s linear';
        setTimeout(() => {
            xingqiu.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            xingqiu.style.backgroundPosition = 'center';
            xingqiu.style.backgroundRepeat = 'no-repeat';
            xingqiu.style.backgroundSize = 'cover';
            xingqiu.style.backgroundAttachment = 'fixed';
            xingqiu.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#xingqiu img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const efeito = "./music/xingqiu.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Ningguang
ningguang.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('ningguangAvatar') !== 'comprado') {
        selectNingguang.classList.add('disabled');
        selectNingguang.setAttribute('disabled', 'true');
        ningguang.style.background = '#dd1440';
        ningguang.style.transition = '0.5s linear';
        setTimeout(() => {
            ningguang.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            ningguang.style.backgroundPosition = 'center';
            ningguang.style.backgroundRepeat = 'no-repeat';
            ningguang.style.backgroundSize = 'cover';
            ningguang.style.backgroundAttachment = 'fixed';
            ningguang.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#ningguang img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/ningguang.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

raiden.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('raidenAvatar') !== 'comprado') {
        selectRaiden.classList.add('disabled');
        selectRaiden.setAttribute('disabled', 'true');
        raiden.style.background = '#dd1440';
        raiden.style.transition = '0.5s linear';
        setTimeout(() => {
            raiden.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            raiden.style.backgroundPosition = 'center';
            raiden.style.backgroundRepeat = 'no-repeat';
            raiden.style.backgroundSize = 'cover';
            raiden.style.backgroundAttachment = 'fixed';
            raiden.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#raiden img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/raiden.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Kazuha
kazuha.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('kazuhaAvatar') !== 'comprado') {
        selectKazuha.classList.add('disabled');
        selectKazuha.setAttribute('disabled', 'true');
        kazuha.style.background = '#dd1440';
        kazuha.style.transition = '0.5s linear';
        setTimeout(() => {
            kazuha.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            kazuha.style.backgroundPosition = 'center';
            kazuha.style.backgroundRepeat = 'no-repeat';
            kazuha.style.backgroundSize = 'cover';
            kazuha.style.backgroundAttachment = 'fixed';
            kazuha.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kazuha img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const efeito = "./music/kazuha.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Yaemiko
yaemiko.addEventListener('click', () => {
    audio.pause();  
     if(localStorage.getItem('yaemikoAvatar') !== 'comprado') {
        selectYaemiko.classList.add('disabled');
        selectYaemiko.setAttribute('disabled', 'true');
        yaemiko.style.background = '#dd1440';
        yaemiko.style.transition = '0.5s linear';
        setTimeout(() => {
            yaemiko.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            yaemiko.style.backgroundPosition = 'center';
            yaemiko.style.backgroundRepeat = 'no-repeat';
            yaemiko.style.backgroundSize = 'cover';
            yaemiko.style.backgroundAttachment = 'fixed';
            yaemiko.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#yaemiko img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const efeito = "./music/yaemiko.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Arataki
arataki.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('aratakiAvatar') !== 'comprado') {
        selectArataki.classList.add('disabled');
        selectArataki.setAttribute('disabled', 'true');
        arataki.style.background = '#dd1440';
        arataki.style.transition = '0.5s linear';
        setTimeout(() => {
            arataki.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            arataki.style.backgroundPosition = 'center';
            arataki.style.backgroundRepeat = 'no-repeat';
            arataki.style.backgroundSize = 'cover';
            arataki.style.backgroundAttachment = 'fixed';
            arataki.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#arataki img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/arataki.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Ayaka
ayaka.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('ayakaAvatar') !== 'comprado') {
        selectAyaka.classList.add('disabled');
        selectAyaka.setAttribute('disabled', 'true');
        ayaka.style.background = '#dd1440';
        ayaka.style.transition = '0.5s linear';
        setTimeout(() => {
            ayaka.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            ayaka.style.backgroundPosition = 'center';
            ayaka.style.backgroundRepeat = 'no-repeat';
            ayaka.style.backgroundSize = 'cover';
            ayaka.style.backgroundAttachment = 'fixed';
            ayaka.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#ayaka img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/ayaka.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Yoimiya
yoimiya.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('yoimiyaAvatar') !== 'comprado') {
        selectYoimiya.classList.add('disabled');
        selectYoimiya.setAttribute('disabled', 'true');
        yoimiya.style.background = '#dd1440';
        yoimiya.style.transition = '0.5s linear';
        setTimeout(() => {
            yoimiya.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            yoimiya.style.backgroundPosition = 'center';
            yoimiya.style.backgroundRepeat = 'no-repeat';
            yoimiya.style.backgroundSize = 'cover';
            yoimiya.style.backgroundAttachment = 'fixed';
            yoimiya.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#yoimiya img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/yoimiya.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Kokomi
kokomi.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('kokomiAvatar') !== 'comprado') {
        selectKokomi.classList.add('disabled');
        selectKokomi.setAttribute('disabled', 'true');
        kokomi.style.background = '#dd1440';
        kokomi.style.transition = '0.5s linear';
        setTimeout(() => {
            kokomi.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            kokomi.style.backgroundPosition = 'center';
            kokomi.style.backgroundRepeat = 'no-repeat';
            kokomi.style.backgroundSize = 'cover';
            kokomi.style.backgroundAttachment = 'fixed';
            kokomi.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kokomi img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/kokomi.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Ayato
ayato.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('ayatoAvatar') !== 'comprado') {
        selectAyato.classList.add('disabled');
        selectAyato.setAttribute('disabled', 'true');
        ayato.style.background = '#dd1440';
        ayato.style.transition = '0.5s linear';
        setTimeout(() => {
            ayato.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            ayato.style.backgroundPosition = 'center';
            ayato.style.backgroundRepeat = 'no-repeat';
            ayato.style.backgroundSize = 'cover';
            ayato.style.backgroundAttachment = 'fixed';
            ayato.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#ayato img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/ayato.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Kirara
kirara.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('kiraraAvatar') !== 'comprado') {
        selectKirara.classList.add('disabled');
        selectKirara.setAttribute('disabled', 'true');
        kirara.style.background = '#dd1440';
        kirara.style.transition = '0.5s linear';
        setTimeout(() => {
            kirara.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            kirara.style.backgroundPosition = 'center';
            kirara.style.backgroundRepeat = 'no-repeat';
            kirara.style.backgroundSize = 'cover';
            kirara.style.backgroundAttachment = 'fixed';
            kirara.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kirara img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/kirara.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Heizou
heizou.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('heizouAvatar') !== 'comprado') {
        selectHeizou.classList.add('disabled');
        selectHeizou.setAttribute('disabled', 'true');
        heizou.style.background = '#dd1440';
        heizou.style.transition = '0.5s linear';
        setTimeout(() => {
            heizou.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            heizou.style.backgroundPosition = 'center';
            heizou.style.backgroundRepeat = 'no-repeat';
            heizou.style.backgroundSize = 'cover';
            heizou.style.backgroundAttachment = 'fixed';
            heizou.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#heizou img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/heizou.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Kuki
kuki.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('kukiAvatar') !== 'comprado') {
        selectKuki.classList.add('disabled');
        selectKuki.setAttribute('disabled', 'true');
        kuki.style.background = '#dd1440';
        kuki.style.transition = '0.5s linear';
        setTimeout(() => {
            kuki.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            kuki.style.backgroundPosition = 'center';
            kuki.style.backgroundRepeat = 'no-repeat';
            kuki.style.backgroundSize = 'cover';
            kuki.style.backgroundAttachment = 'fixed';
            kuki.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kuki img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/kuki.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Gorou
gorou.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('gorouAvatar') !== 'comprado') {
        selectGorou.classList.add('disabled');
        selectGorou.setAttribute('disabled', 'true');
        gorou.style.background = '#dd1440';
        gorou.style.transition = '0.5s linear';
        setTimeout(() => {
            gorou.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            gorou.style.backgroundPosition = 'center';
            gorou.style.backgroundRepeat = 'no-repeat';
            gorou.style.backgroundSize = 'cover';
            gorou.style.backgroundAttachment = 'fixed';
            gorou.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#gorou img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/gorou.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Thoma
thoma.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('thomaAvatar') !== 'comprado') {
        selectThoma.classList.add('disabled');
        selectThoma.setAttribute('disabled', 'true');
        thoma.style.background = '#dd1440';
        thoma.style.transition = '0.5s linear';
        setTimeout(() => {
            thoma.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            thoma.style.backgroundPosition = 'center';
            thoma.style.backgroundRepeat = 'no-repeat';
            thoma.style.backgroundSize = 'cover';
            thoma.style.backgroundAttachment = 'fixed';
            thoma.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#thoma img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/thoma.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Sara
sara.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('saraAvatar') !== 'comprado') {
        selectSara.classList.add('disabled');
        selectSara.setAttribute('disabled', 'true');
        sara.style.background = '#dd1440';
        sara.style.transition = '0.5s linear';
        setTimeout(() => {
            sara.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            sara.style.backgroundPosition = 'center';
            sara.style.backgroundRepeat = 'no-repeat';
            sara.style.backgroundSize = 'cover';
            sara.style.backgroundAttachment = 'fixed';
            sara.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#sara img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const efeito = "./music/sara.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Sayu
sayu.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('sayuAvatar') !== 'comprado') {
        selectSayu.classList.add('disabled');
        selectSayu.setAttribute('disabled', 'true');
        sayu.style.background = '#dd1440';
        sayu.style.transition = '0.5s linear';
        setTimeout(() => {
            sayu.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            sayu.style.backgroundPosition = 'center';
            sayu.style.backgroundRepeat = 'no-repeat';
            sayu.style.backgroundSize = 'cover';
            sayu.style.backgroundAttachment = 'fixed';
            sayu.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#sayu img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/sayu.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Nahida
nahida.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('nahidaAvatar') !== 'comprado') {
        selectNahida.classList.add('disabled');
        selectNahida.setAttribute('disabled', 'true');
        nahida.style.background = '#dd1440';
        nahida.style.transition = '0.5s linear';
        setTimeout(() => {
            nahida.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            nahida.style.backgroundPosition = 'center';
            nahida.style.backgroundRepeat = 'no-repeat';
            nahida.style.backgroundSize = 'cover';
            nahida.style.backgroundAttachment = 'fixed';
            nahida.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#nahida img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/nahida.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Cyno
cyno.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('cynoAvatar') !== 'comprado') {
        selectCyno.classList.add('disabled');
        selectCyno.setAttribute('disabled', 'true');
        cyno.style.background = '#dd1440';
        cyno.style.transition = '0.5s linear';
        setTimeout(() => {
            cyno.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            cyno.style.backgroundPosition = 'center';
            cyno.style.backgroundRepeat = 'no-repeat';
            cyno.style.backgroundSize = 'cover';
            cyno.style.backgroundAttachment = 'fixed';
            cyno.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#cyno img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/cyno.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Dehya
dehya.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('dehyaAvatar') !== 'comprado') {
        selectDehya.classList.add('disabled');
        selectDehya.setAttribute('disabled', 'true');
        dehya.style.background = '#dd1440';
        dehya.style.transition = '0.5s linear';
        setTimeout(() => {
            dehya.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            dehya.style.backgroundPosition = 'center';
            dehya.style.backgroundRepeat = 'no-repeat';
            dehya.style.backgroundSize = 'cover';
            dehya.style.backgroundAttachment = 'fixed';
            dehya.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#dehya img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const efeito = "./music/dehya.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Alhaitham
alhaitham.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('alhaithamAvatar') !== 'comprado') {
        selectAlhaitham.classList.add('disabled');
        selectAlhaitham.setAttribute('disabled', 'true');
        alhaitham.style.background = '#dd1440';
        alhaitham.style.transition = '0.5s linear';
        setTimeout(() => {
            alhaitham.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            alhaitham.style.backgroundPosition = 'center';
            alhaitham.style.backgroundRepeat = 'no-repeat';
            alhaitham.style.backgroundSize = 'cover';
            alhaitham.style.backgroundAttachment = 'fixed';
            alhaitham.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#alhaitham img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/alhaitham.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Wanderer
wanderer.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('wandererAvatar') !== 'comprado') {
        selectWanderer.classList.add('disabled');
        selectWanderer.setAttribute('disabled', 'true');
        wanderer.style.background = '#dd1440';
        wanderer.style.transition = '0.5s linear';
        setTimeout(() => {
            wanderer.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            wanderer.style.backgroundPosition = 'center';
            wanderer.style.backgroundRepeat = 'no-repeat';
            wanderer.style.backgroundSize = 'cover';
            wanderer.style.backgroundAttachment = 'fixed';
            wanderer.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#wanderer img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/wanderer.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Nilou
nilou.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('nilouAvatar') !== 'comprado') {
        selectNilou.classList.add('disabled');
        selectNilou.setAttribute('disabled', 'true');
        nilou.style.background = '#dd1440';
        nilou.style.transition = '0.5s linear';
        setTimeout(() => {
            nilou.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            nilou.style.backgroundPosition = 'center';
            nilou.style.backgroundRepeat = 'no-repeat';
            nilou.style.backgroundSize = 'cover';
            nilou.style.backgroundAttachment = 'fixed';
            nilou.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#nilou img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/nilou.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Tighnari
tighnari.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('tighnariAvatar') !== 'comprado') {
        selectTighnari.classList.add('disabled');
        selectTighnari.setAttribute('disabled', 'true');
        tighnari.style.background = '#dd1440';
        tighnari.style.transition = '0.5s linear';
        setTimeout(() => {
            tighnari.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            tighnari.style.backgroundPosition = 'center';
            tighnari.style.backgroundRepeat = 'no-repeat';
            tighnari.style.backgroundSize = 'cover';
            tighnari.style.backgroundAttachment = 'fixed';
            tighnari.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#tighnari img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/tighnari.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Collei
collei.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('colleiAvatar') !== 'comprado') {
        selectCollei.classList.add('disabled');
        selectCollei.setAttribute('disabled', 'true');
        collei.style.background = '#dd1440';
        collei.style.transition = '0.5s linear';
        setTimeout(() => {
            collei.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            collei.style.backgroundPosition = 'center';
            collei.style.backgroundRepeat = 'no-repeat';
            collei.style.backgroundSize = 'cover';
            collei.style.backgroundAttachment = 'fixed';
            collei.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#collei img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/collei.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Dori
dori.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('doriAvatar') !== 'comprado') {
        selectDori.classList.add('disabled');
        selectDori.setAttribute('disabled', 'true');
        dori.style.background = '#dd1440';
        dori.style.transition = '0.5s linear';
        setTimeout(() => {
            dori.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            dori.style.backgroundPosition = 'center';
            dori.style.backgroundRepeat = 'no-repeat';
            dori.style.backgroundSize = 'cover';
            dori.style.backgroundAttachment = 'fixed';
            dori.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#dori img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/dori.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Kaveh
kaveh.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('kavehAvatar') !== 'comprado') {
        selectKaveh.classList.add('disabled');
        selectKaveh.setAttribute('disabled', 'true');
        kaveh.style.background = '#dd1440';
        kaveh.style.transition = '0.5s linear';
        setTimeout(() => {
            kaveh.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            kaveh.style.backgroundPosition = 'center';
            kaveh.style.backgroundRepeat = 'no-repeat';
            kaveh.style.backgroundSize = 'cover';
            kaveh.style.backgroundAttachment = 'fixed';
            kaveh.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kaveh img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/kaveh.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Layla
layla.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('laylaAvatar') !== 'comprado') {
        selectLayla.classList.add('disabled');
        selectLayla.setAttribute('disabled', 'true');
        layla.style.background = '#dd1440';
        layla.style.transition = '0.5s linear';
        setTimeout(() => {
            layla.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            layla.style.backgroundPosition = 'center';
            layla.style.backgroundRepeat = 'no-repeat';
            layla.style.backgroundSize = 'cover';
            layla.style.backgroundAttachment = 'fixed';
            layla.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#layla img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/layla.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Faruzan
faruzan.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('faruzanAvatar') !== 'comprado') {
        selectFaruzan.classList.add('disabled');
        selectFaruzan.setAttribute('disabled', 'true');
        faruzan.style.background = '#dd1440';
        faruzan.style.transition = '0.5s linear';
        setTimeout(() => {
            faruzan.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            faruzan.style.backgroundPosition = 'center';
            faruzan.style.backgroundRepeat = 'no-repeat';
            faruzan.style.backgroundSize = 'cover';
            faruzan.style.backgroundAttachment = 'fixed';
            faruzan.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#faruzan img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/faruzan.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Candace
candace.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('candaceAvatar') !== 'comprado') {
        selectCandace.classList.add('disabled');
        selectCandace.setAttribute('disabled', 'true');
        candace.style.background = '#dd1440';
        candace.style.transition = '0.5s linear';
        setTimeout(() => {
            candace.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            candace.style.backgroundPosition = 'center';
            candace.style.backgroundRepeat = 'no-repeat';
            candace.style.backgroundSize = 'cover';
            candace.style.backgroundAttachment = 'fixed';
            candace.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#candace img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/candace.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Lyney
lyney.addEventListener('click', () => {
    audio.pause(); 
    if(localStorage.getItem('lyneyAvatar') !== 'comprado') {
        selectLyney.classList.add('disabled');
        selectLyney.setAttribute('disabled', 'true');
        lyney.style.background = '#dd1440';
        lyney.style.transition = '0.5s linear';
        setTimeout(() => {
            lyney.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            lyney.style.backgroundPosition = 'center';
            lyney.style.backgroundRepeat = 'no-repeat';
            lyney.style.backgroundSize = 'cover';
            lyney.style.backgroundAttachment = 'fixed';
            lyney.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#lyney img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/lyney.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Wriothesley
wriothesley.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('wriothesleyAvatar') !== 'comprado') {
        selectWriothesley.classList.add('disabled');
        selectWriothesley.setAttribute('disabled', 'true');
        wriothesley.style.background = '#dd1440';
        wriothesley.style.transition = '0.5s linear';
        setTimeout(() => {
            wriothesley.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            wriothesley.style.backgroundPosition = 'center';
            wriothesley.style.backgroundRepeat = 'no-repeat';
            wriothesley.style.backgroundSize = 'cover';
            wriothesley.style.backgroundAttachment = 'fixed';
            wriothesley.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#wriothesley img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/wriothesley.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Furina
furina.addEventListener('click', () => {
    audio.pause(); 
    if(localStorage.getItem('furinaAvatar') !== 'comprado') {
        selectFurina.classList.add('disabled');
        selectFurina.setAttribute('disabled', 'true');
        furina.style.background = '#dd1440';
        furina.style.transition = '0.5s linear';
        setTimeout(() => {
            furina.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            furina.style.backgroundPosition = 'center';
            furina.style.backgroundRepeat = 'no-repeat';
            furina.style.backgroundSize = 'cover';
            furina.style.backgroundAttachment = 'fixed';
            furina.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#furina img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const efeito = "./music/furina.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Neuvillette
neuvillette.addEventListener('click', () => {
    audio.pause(); 
    if(localStorage.getItem('neuvilletteAvatar') !== 'comprado') {
        selectNeuvillette.classList.add('disabled');
        selectNeuvillette.setAttribute('disabled', 'true');
        neuvillette.style.background = '#dd1440';
        neuvillette.style.transition = '0.5s linear';
        setTimeout(() => {
            neuvillette.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            neuvillette.style.backgroundPosition = 'center';
            neuvillette.style.backgroundRepeat = 'no-repeat';
            neuvillette.style.backgroundSize = 'cover';
            neuvillette.style.backgroundAttachment = 'fixed';
            neuvillette.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#neuvillette img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/neuvillette.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Charlotte
charlotte.addEventListener('click', () => {
    audio.pause(); 
    if(localStorage.getItem('charlotteAvatar') !== 'comprado') {
        selectCharlotte.classList.add('disabled');
        selectCharlotte.setAttribute('disabled', 'true');
        charlotte.style.background = '#dd1440';
        charlotte.style.transition = '0.5s linear';
        setTimeout(() => {
            charlotte.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            charlotte.style.backgroundPosition = 'center';
            charlotte.style.backgroundRepeat = 'no-repeat';
            charlotte.style.backgroundSize = 'cover';
            charlotte.style.backgroundAttachment = 'fixed';
            charlotte.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#charlotte img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const efeito = "./music/charlotte.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Freminet
freminet.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('freminetAvatar') !== 'comprado') {
        selectFreminet.classList.add('disabled');
        selectFreminet.setAttribute('disabled', 'true');
        freminet.style.background = '#dd1440';
        freminet.style.transition = '0.5s linear';
        setTimeout(() => {
            freminet.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            freminet.style.backgroundPosition = 'center';
            freminet.style.backgroundRepeat = 'no-repeat';
            freminet.style.backgroundSize = 'cover';
            freminet.style.backgroundAttachment = 'fixed';
            freminet.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#freminet img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/freminet.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Lynette
lynette.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('lynetteAvatar') !== 'comprado') {
        selectLynette.classList.add('disabled');
        selectLynette.setAttribute('disabled', 'true');
        lynette.style.background = '#dd1440';
        lynette.style.transition = '0.5s linear';
        setTimeout(() => {
            lynette.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            lynette.style.backgroundPosition = 'center';
            lynette.style.backgroundRepeat = 'no-repeat';
            lynette.style.backgroundSize = 'cover';
            lynette.style.backgroundAttachment = 'fixed';
            lynette.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#lynette img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const efeito = "./music/lynette.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

chevreuse.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('chevreuseAvatar') !== 'comprado') {
        selectChevreuse.classList.add('disabled');
        selectChevreuse.setAttribute('disabled', 'true');
        chevreuse.style.background = '#dd1440';
        chevreuse.style.transition = '0.5s linear';
        setTimeout(() => {
            chevreuse.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            chevreuse.style.backgroundPosition = 'center';
            chevreuse.style.backgroundRepeat = 'no-repeat';
            chevreuse.style.backgroundSize = 'cover';
            chevreuse.style.backgroundAttachment = 'fixed';
            chevreuse.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#chevreuse img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const efeito = "./music/chevreuse.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Diluc Skin
dilucSkin.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('dilucSkinAvatar') !== 'comprado') {
        selectDilucSkin.classList.add('disabled');
        selectDilucSkin.setAttribute('disabled', 'true');
        dilucSkin.style.background = '#dd1440';
        dilucSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            dilucSkin.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            dilucSkin.style.backgroundPosition = 'center';
            dilucSkin.style.backgroundRepeat = 'no-repeat';
            dilucSkin.style.backgroundSize = 'cover';
            dilucSkin.style.backgroundAttachment = 'fixed';
            dilucSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#dilucSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/dilucSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

jeanSkin.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('jeanSkinAvatar') !== 'comprado') {
        selectJeanSkin.classList.add('disabled');
        selectJeanSkin.setAttribute('disabled', 'true');
        jeanSkin.style.background = '#dd1440';
        jeanSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            jeanSkin.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            jeanSkin.style.backgroundPosition = 'center';
            jeanSkin.style.backgroundRepeat = 'no-repeat';
            jeanSkin.style.backgroundSize = 'cover';
            jeanSkin.style.backgroundAttachment = 'fixed';
            jeanSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#jeanSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/jeanSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

kleeSkin.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('kleeSkinAvatar') !== 'comprado') {
        selectKleeSkin.classList.add('disabled');
        selectKleeSkin.setAttribute('disabled', 'true');
        kleeSkin.style.background = '#dd1440';
        kleeSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            kleeSkin.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            kleeSkin.style.backgroundPosition = 'center';
            kleeSkin.style.backgroundRepeat = 'no-repeat';
            kleeSkin.style.backgroundSize = 'cover';
            kleeSkin.style.backgroundAttachment = 'fixed';
            kleeSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kleeSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/kleeSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }

});

ayakaSkin.addEventListener('click', () => {
    audio.pause();
    if(localStorage.getItem('ayakaSkinAvatar') !== 'comprado') {
        selectAyakaSkin.classList.add('disabled');
        selectAyakaSkin.setAttribute('disabled', 'true');
        ayakaSkin.style.background = '#dd1440';
        ayakaSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            ayakaSkin.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            ayakaSkin.style.backgroundPosition = 'center';
            ayakaSkin.style.backgroundRepeat = 'no-repeat';
            ayakaSkin.style.backgroundSize = 'cover';
            ayakaSkin.style.backgroundAttachment = 'fixed';
            ayakaSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#ayakaSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/ayakaSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }  
});

barbaraSkin.addEventListener('click', () => {
    audio.pause(); 
    if(localStorage.getItem('barbaraSkinAvatar') !== 'comprado') {
        selectBarbaraSkin.classList.add('disabled');
        selectBarbaraSkin.setAttribute('disabled', 'true');
        barbaraSkin.style.background = '#dd1440';
        barbaraSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            barbaraSkin.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            barbaraSkin.style.backgroundPosition = 'center';
            barbaraSkin.style.backgroundRepeat = 'no-repeat';
            barbaraSkin.style.backgroundSize = 'cover';
            barbaraSkin.style.backgroundAttachment = 'fixed';
            barbaraSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#barbaraSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/barbaraSkin.ogg";
        audio.src = efeito;
        audio.play();  
    } 
});

fischlSkin.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('fischlSkinAvatar') !== 'comprado') {
        selectFischlSkin.classList.add('disabled');
        selectFischlSkin.setAttribute('disabled', 'true');
        fischlSkin.style.background = '#dd1440';
        fischlSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            fischlSkin.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            fischlSkin.style.backgroundPosition = 'center';
            fischlSkin.style.backgroundRepeat = 'no-repeat';
            fischlSkin.style.backgroundSize = 'cover';
            fischlSkin.style.backgroundAttachment = 'fixed';
            fischlSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#fischlSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/fischlSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

ningguangSkin.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('ningguangSkinAvatar') !== 'comprado') {
        selectNingguangSkin.classList.add('disabled');
        selectNingguangSkin.setAttribute('disabled', 'true');
        ningguangSkin.style.background = '#dd1440';
        ningguangSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            ningguangSkin.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            ningguangSkin.style.backgroundPosition = 'center';
            ningguangSkin.style.backgroundRepeat = 'no-repeat';
            ningguangSkin.style.backgroundSize = 'cover';
            ningguangSkin.style.backgroundAttachment = 'fixed';
            ningguangSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#ningguangSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/ningguangSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

keqingSkin.addEventListener('click', () => {
            audio.pause();  
            if(localStorage.getItem('keqingSkinAvatar') !== 'comprado') {
                selectKeqingSkin.classList.add('disabled');
                selectKeqingSkin.setAttribute('disabled', 'true');
                keqingSkin.style.background = '#dd1440';
                keqingSkin.style.transition = '0.5s linear';
                setTimeout(() => {
                    keqingSkin.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
                    keqingSkin.style.backgroundPosition = 'center';
                    keqingSkin.style.backgroundRepeat = 'no-repeat';
                    keqingSkin.style.backgroundSize = 'cover';
                    keqingSkin.style.backgroundAttachment = 'fixed';
                    keqingSkin.style.transition = '0.5s linear';
                }, 2000);
            } else {
                let imgSelect = document.querySelector('#keqingSkin img').src;
                document.querySelector('#imgPerfil img').src = imgSelect;    
                const efeito = "./music/keqingSkin.ogg";
                audio.src = efeito;
                audio.play();  
            }
});

lisaSkin.addEventListener('click', () => {
        audio.pause();  
        if(localStorage.getItem('lisaSkinAvatar') !== 'comprado') {
            selectLisaSkin.classList.add('disabled');
            selectLisaSkin.setAttribute('disabled', 'true');
            lisaSkin.style.background = '#dd1440';
            lisaSkin.style.transition = '0.5s linear';
            setTimeout(() => {
                lisaSkin.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
                lisaSkin.style.backgroundPosition = 'center';
                lisaSkin.style.backgroundRepeat = 'no-repeat';
                lisaSkin.style.backgroundSize = 'cover';
                lisaSkin.style.backgroundAttachment = 'fixed';
                lisaSkin.style.transition = '0.5s linear';
            }, 2000);
        } else {
            let imgSelect = document.querySelector('#lisaSkin img').src;
            document.querySelector('#imgPerfil img').src = imgSelect;    
            const efeito = "./music/lisaSkin.ogg";
            audio.src = efeito;
            audio.play();  
        }
});

kaeyaSkin.addEventListener('click', () => {
    audio.pause();  
        if(localStorage.getItem('kaeyaSkinAvatar') !== 'comprado') {
            selectKaeyaSkin.classList.add('disabled');
            selectKaeyaSkin.setAttribute('disabled', 'true');
            kaeyaSkin.style.background = '#dd1440';
            kaeyaSkin.style.transition = '0.5s linear';
            setTimeout(() => {
                kaeyaSkin.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
                kaeyaSkin.style.backgroundPosition = 'center';
                kaeyaSkin.style.backgroundRepeat = 'no-repeat';
                kaeyaSkin.style.backgroundSize = 'cover';
                kaeyaSkin.style.backgroundAttachment = 'fixed';
                kaeyaSkin.style.transition = '0.5s linear';
            }, 2000);
        } else {
            let imgSelect = document.querySelector('#kaeyaSkin img').src;
            document.querySelector('#imgPerfil img').src = imgSelect;    
            const efeito = "./music/kaeyaSkin.ogg";
            audio.src = efeito;
            audio.play();  
        }
});

// For Tartaglia Skin
tartaglia.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('tartagliaAvatar') !== 'comprado') {
        selectTartaglia.classList.add('disabled');
        selectTartaglia.setAttribute('disabled', 'true');
        tartaglia.style.background = '#dd1440';
        tartaglia.style.transition = '0.5s linear';
        setTimeout(() => {
            tartaglia.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            tartaglia.style.backgroundPosition = 'center';
            tartaglia.style.backgroundRepeat = 'no-repeat';
            tartaglia.style.backgroundSize = 'cover';
            tartaglia.style.backgroundAttachment = 'fixed';
            tartaglia.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#tartaglia img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/tartaglia.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Mika Skin
mika.addEventListener('click', () => {
    audio.pause();  
    if(localStorage.getItem('mikaAvatar') !== 'comprado') {
        selectMika.classList.add('disabled');
        selectMika.setAttribute('disabled', 'true');
        mika.style.background = '#dd1440';
        mika.style.transition = '0.5s linear';
        setTimeout(() => {
            mika.style.background = "linear-gradient(90deg, rgb(66, 35, 83),rgb(135, 98, 165), rgb(162, 134, 228))";
            mika.style.backgroundPosition = 'center';
            mika.style.backgroundRepeat = 'no-repeat';
            mika.style.backgroundSize = 'cover';
            mika.style.backgroundAttachment = 'fixed';
            mika.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#mika img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/mika.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

// For Navia Skin
navia.addEventListener('click', () => {
    audio.pause(); 
    if(localStorage.getItem('naviaAvatar') !== 'comprado') {
        selectNavia.classList.add('disabled');
        selectNavia.setAttribute('disabled', 'true');
        navia.style.background = '#dd1440';
        navia.style.transition = '0.5s linear';
        setTimeout(() => {
            navia.style.background = "linear-gradient(90deg, rgb(90, 80, 37),rgb(194, 162, 56), rgb(228, 193, 79))";
            navia.style.backgroundPosition = 'center';
            navia.style.backgroundRepeat = 'no-repeat';
            navia.style.backgroundSize = 'cover';
            navia.style.backgroundAttachment = 'fixed';
            navia.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#navia img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/navia.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

user.addEventListener('click', () => {
    dilucVerifica();
    ventiVerifica();
    albedoVerifica();
    jeanVerifica();
    eulaVerifica();
    kleeVerifica();
    monaVerifica();
    barbaraVerifica();
    dionaVerifica();
    amberVerifica();
    razorVerifica();
    bennettVerifica(); 
    fishVerifica();   
    kayeaVerifica();   
    lisaVerifica();    
    noelleVerifica();  
    sucroseVerifica(); 
    rosariaVerifica();    
    hutaoVerifica();
    zhongliVerifica();
    yelanVerifica();
    xiaoVerifica();
    ganyuVerifica();
    qiqiVerifica();
    keqingVerifica();
    baizhuVerifica();
    shenheVerifica();
    yaoyaoVerifica();
    yanfeiVerifica();
    yunjinVerifica();
    xianglingVerifica();
    chongyunVerifica();
    beidouVerifica();
    xinyanVerifica();
    xingqiuVerifica();
    ningguangVerifica();
    raidenVerifica();
    kazuhaVerifica();
    aratakiVerifica();
    ayakaVerifica();
    yaemikoVerifica();
    yoimiyaVerifica();
    kokomiVerifica();
    ayatoVerifica();
    kiraraVerifica();
    heizouVerifica();
    kukiVerifica();
    gorouVerifica();
    thomaVerifica();
    saraVerifica();
    sayuVerifica();
    nahidaVerifica();
    cynoVerifica();
    dehyaVerifica();
    alhaithamVerifica();
    wandererVerifica();
    nilouVerifica();
    tighnariVerifica();
    colleiVerifica();
    doriVerifica();
    kavehVerifica();
    laylaVerifica();
    faruzanVerifica();
    candaceVerifica();
    lyneyVerifica();
    wriothesleyVerifica();
    furinaVerifica();
    neuvilletteVerifica();
    charlotteVerifica();
    freminetVerifica();
    lynetteVerifica();
    chevreuseVerifica();
    dilucSkinVerifica();
    lynetteVerifica();
    mikaVerifica();
    tartagliaVerifica();
    naviaVerifica();
    jeanSkinVerifica();
    kleeSkinVerifica();
    ayakaSkinVerifica();
    barbaraSkinVerifica();
    fischlSkinVerifica();
    ningguangSkinVerifica();
    keqingSkinVerifica();
    lisaSkinVerifica();
    kaeyaSkinVerifica();
    perfil.style.display = "block";
    if(localStorage.getItem('imgUser')) {
        document.querySelector('#imgPerfil img').src = localStorage.getItem('imgUser');
        document.querySelector('#nickName').value = localStorage.getItem('nomeUser');
        document.querySelector('#imgPerfil img').style.background = localStorage.getItem('colorUser');
    }
    else {
        document.querySelector('#imgPerfil img').src = 'https://raw.githubusercontent.com/EryckBorges/Genshin-Impact-Divination/main/image/viajante.png';
        document.querySelector('#nickName').value = 'Aether';
        document.querySelector('#imgPerfil img').style.background = 'black';
    }
});

btnClosePerfil.addEventListener('click', () => {
    perfil.style.display = "none";
});

cancelar.addEventListener('click', () => {
    perfil.style.display = "none";
});

document.querySelector('#closeCaracter').addEventListener('click', () => {
    document.querySelector("#divCompra").style.display = 'none';
});

salvar.addEventListener('click', () => {
    salvarUser();
});
