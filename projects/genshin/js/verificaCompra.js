
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

export const verificaCompraDiluc = () => {
    if(localStorage.getItem('dilucAvatar') == 'comprado') {
        dilucAvatar.innerHTML = "Esgotado";
        dilucAvatar.style.background = "#dd1440";
    }else {
        dilucAvatar.innerHTML = "Comprar";
        dilucAvatar.style.background = "black";
    }
};

export const verificaCompraVenti = () => {
    if(localStorage.getItem('ventiAvatar') == 'comprado') {
        ventiAvatar.innerHTML = "Esgotado";
        ventiAvatar.style.background = "#dd1440";
    }else {
        ventiAvatar.innerHTML = "Comprar";
        ventiAvatar.style.background = "black";
    }
};

export const verificaCompraMona = () => {
    if(localStorage.getItem('monaAvatar') == 'comprado') {
        monaAvatar.innerHTML = "Esgotado";
        monaAvatar.style.background = "#dd1440";
    }else {
        monaAvatar.innerHTML = "Comprar";
        monaAvatar.style.background = "black";
    }
};

export const verificaCompraJean = () => {
    if(localStorage.getItem('jeanAvatar') == 'comprado') {
        jeanAvatar.innerHTML = "Esgotado";
        jeanAvatar.style.background = "#dd1440";
    }else {
        jeanAvatar.innerHTML = "Comprar";
        jeanAvatar.style.background = "black";
    }
};

export const verificaCompraKlee = () => {
    if(localStorage.getItem('kleeAvatar') == 'comprado') {
        kleeAvatar.innerHTML = "Esgotado";
        kleeAvatar.style.background = "#dd1440";
    }else {
        kleeAvatar.innerHTML = "Comprar";
        kleeAvatar.style.background = "black";
    }
};

export const verificaCompraBarbara = () => {
    if(localStorage.getItem('barbaraAvatar') == 'comprado') {
        barbaraAvatar.innerHTML = "Esgotado";
        barbaraAvatar.style.background = "#dd1440";
    }else {
        barbaraAvatar.innerHTML = "Comprar";
        barbaraAvatar.style.background = "black";
    }
};

export const verificaCompraAmber = () => {
    if(localStorage.getItem('amberAvatar') == 'comprado') {
        amberAvatar.innerHTML = "Esgotado";
        amberAvatar.style.background = "#dd1440";
    }else {
        amberAvatar.innerHTML = "Comprar";
        amberAvatar.style.background = "black";
    }
};

export const verificaCompraAlbedo = () => {
    if(localStorage.getItem('albedoAvatar') == 'comprado') {
        albedoAvatar.innerHTML = "Esgotado";
        albedoAvatar.style.background = "#dd1440";
    }else {
        albedoAvatar.innerHTML = "Comprar";
        albedoAvatar.style.background = "black";
    }
};

export const verificaCompraEula = () => {
    if(localStorage.getItem('eulaAvatar') == 'comprado') {
        eulaAvatar.innerHTML = "Esgotado";
        eulaAvatar.style.background = "#dd1440";
    } else {
        eulaAvatar.innerHTML = "Comprar";
        eulaAvatar.style.background = "black";
    }
};

// Bennett
export const verificaCompraBennett = () => {
    if(localStorage.getItem('bennettAvatar') == 'comprado') {
        bennettAvatar.innerHTML = "Esgotado";
        bennettAvatar.style.background = "#dd1440";
    } else {
        bennettAvatar.innerHTML = "Comprar";
        bennettAvatar.style.background = "black";
    }
};

// Fischl
export const verificaCompraFischl = () => {
    if(localStorage.getItem('fischlAvatar') == 'comprado') {
        fischlAvatar.innerHTML = "Esgotado";
        fischlAvatar.style.background = "#dd1440";
    } else {
        fischlAvatar.innerHTML = "Comprar";
        fischlAvatar.style.background = "black";
    }
};

// Kaeya
export const verificaCompraKaeya = () => {
    if(localStorage.getItem('kaeyaAvatar') == 'comprado') {
        kaeyaAvatar.innerHTML = "Esgotado";
        kaeyaAvatar.style.background = "#dd1440";
    } else {
        kaeyaAvatar.innerHTML = "Comprar";
        kaeyaAvatar.style.background = "black";
    }
};

// Noelle
export const verificaCompraNoelle = () => {
    if(localStorage.getItem('noelleAvatar') == 'comprado') {
        noelleAvatar.innerHTML = "Esgotado";
        noelleAvatar.style.background = "#dd1440";
    } else {
        noelleAvatar.innerHTML = "Comprar";
        noelleAvatar.style.background = "black";
    }
};

// Lisa
export const verificaCompraLisa = () => {
    if(localStorage.getItem('lisaAvatar') == 'comprado') {
        lisaAvatar.innerHTML = "Esgotado";
        lisaAvatar.style.background = "#dd1440";
    } else {
        lisaAvatar.innerHTML = "Comprar";
        lisaAvatar.style.background = "black";
    }
};

// Sucrose
export const verificaCompraSucrose = () => {
    if(localStorage.getItem('sucroseAvatar') == 'comprado') {
        sucroseAvatar.innerHTML = "Esgotado";
        sucroseAvatar.style.background = "#dd1440";
    } else {
        sucroseAvatar.innerHTML = "Comprar";
        sucroseAvatar.style.background = "black";
    }
};

// Rosaria
export const verificaCompraRosaria = () => {
    if(localStorage.getItem('rosariaAvatar') == 'comprado') {
        rosariaAvatar.innerHTML = "Esgotado";
        rosariaAvatar.style.background = "#dd1440";
    } else {
        rosariaAvatar.innerHTML = "Comprar";
        rosariaAvatar.style.background = "black";
    }
};

// Razor
export const verificaCompraRazor = () => {
    if(localStorage.getItem('razorAvatar') == 'comprado') {
        razorAvatar.innerHTML = "Esgotado";
        razorAvatar.style.background = "#dd1440";
    } else {
        razorAvatar.innerHTML = "Comprar";
        razorAvatar.style.background = "black";
    }
};

// Diona
export const verificaCompraDiona = () => {
    if(localStorage.getItem('dionaAvatar') == 'comprado') {
        dionaAvatar.innerHTML = "Esgotado";
        dionaAvatar.style.background = "#dd1440";
    } else {
        dionaAvatar.innerHTML = "Comprar";
        dionaAvatar.style.background = "black";
    }
};

// Mika
export const verificaCompraMika = () => {
    if(localStorage.getItem('mikaAvatar') == 'comprado') {
        mikaAvatar.innerHTML = "Esgotado";
        mikaAvatar.style.background = "#dd1440";
    } else {
        mikaAvatar.innerHTML = "Comprar";
        mikaAvatar.style.background = "black";
    }
};

//Liyue

// Zhongli
export const verificaCompraZhongli = () => {
    if(localStorage.getItem('zhongliAvatar') == 'comprado') {
        zhongliAvatar.innerHTML = "Esgotado";
        zhongliAvatar.style.background = "#dd1440";
    } else {
        zhongliAvatar.innerHTML = "Comprar";
        zhongliAvatar.style.background = "black";
    }
};

// Hutao
export const verificaCompraHutao = () => {
    if(localStorage.getItem('hutaoAvatar') == 'comprado') {
        hutaoAvatar.innerHTML = "Esgotado";
        hutaoAvatar.style.background = "#dd1440";
    } else {
        hutaoAvatar.innerHTML = "Comprar";
        hutaoAvatar.style.background = "black";
    }
};

// Yelan
export const verificaCompraYelan = () => {
    if(localStorage.getItem('yelanAvatar') == 'comprado') {
        yelanAvatar.innerHTML = "Esgotado";
        yelanAvatar.style.background = "#dd1440";
    } else {
        yelanAvatar.innerHTML = "Comprar";
        yelanAvatar.style.background = "black";
    }
};

// Ganyu
export const verificaCompraGanyu = () => {
    if(localStorage.getItem('ganyuAvatar') == 'comprado') {
        ganyuAvatar.innerHTML = "Esgotado";
        ganyuAvatar.style.background = "#dd1440";
    } else {
        ganyuAvatar.innerHTML = "Comprar";
        ganyuAvatar.style.background = "black";
    }
};

// Xiao
export const verificaCompraXiao = () => {
    if(localStorage.getItem('xiaoAvatar') == 'comprado') {
        xiaoAvatar.innerHTML = "Esgotado";
        xiaoAvatar.style.background = "#dd1440";
    } else {
        xiaoAvatar.innerHTML = "Comprar";
        xiaoAvatar.style.background = "black";
    }
};

// Qiqi
export const verificaCompraQiqi = () => {
    if(localStorage.getItem('qiqiAvatar') == 'comprado') {
        qiqiAvatar.innerHTML = "Esgotado";
        qiqiAvatar.style.background = "#dd1440";
    } else {
        qiqiAvatar.innerHTML = "Comprar";
        qiqiAvatar.style.background = "black";
    }
};

// Baizhu
export const verificaCompraBaizhu = () => {
    if(localStorage.getItem('baizhuAvatar') == 'comprado') {
        baizhuAvatar.innerHTML = "Esgotado";
        baizhuAvatar.style.background = "#dd1440";
    } else {
        baizhuAvatar.innerHTML = "Comprar";
        baizhuAvatar.style.background = "black";
    }
};

// Shenhe
export const verificaCompraShenhe = () => {
    if(localStorage.getItem('shenheAvatar') == 'comprado') {
        shenheAvatar.innerHTML = "Esgotado";
        shenheAvatar.style.background = "#dd1440";
    } else {
        shenheAvatar.innerHTML = "Comprar";
        shenheAvatar.style.background = "black";
    }
};

// Keqing
export const verificaCompraKeqing = () => {
    if(localStorage.getItem('keqingAvatar') == 'comprado') {
        keqingAvatar.innerHTML = "Esgotado";
        keqingAvatar.style.background = "#dd1440";
    } else {
        keqingAvatar.innerHTML = "Comprar";
        keqingAvatar.style.background = "black";
    }
};

// Yaoyao
export const verificaCompraYaoyao = () => {
    if(localStorage.getItem('yaoyaoAvatar') == 'comprado') {
        yaoyaoAvatar.innerHTML = "Esgotado";
        yaoyaoAvatar.style.background = "#dd1440";
    } else {
        yaoyaoAvatar.innerHTML = "Comprar";
        yaoyaoAvatar.style.background = "black";
    }
};

// Yanfei
export const verificaCompraYanfei = () => {
    if(localStorage.getItem('yanfeiAvatar') == 'comprado') {
        yanfeiAvatar.innerHTML = "Esgotado";
        yanfeiAvatar.style.background = "#dd1440";
    } else {
        yanfeiAvatar.innerHTML = "Comprar";
        yanfeiAvatar.style.background = "black";
    }
};

// Yunjin
export const verificaCompraYunjin = () => {
    if(localStorage.getItem('yunjinAvatar') == 'comprado') {
        yunjinAvatar.innerHTML = "Esgotado";
        yunjinAvatar.style.background = "#dd1440";
    } else {
        yunjinAvatar.innerHTML = "Comprar";
        yunjinAvatar.style.background = "black";
    }
};

// Xinyan
export const verificaCompraXinyan = () => {
    if(localStorage.getItem('xinyanAvatar') == 'comprado') {
        xinyanAvatar.innerHTML = "Esgotado";
        xinyanAvatar.style.background = "#dd1440";
    } else {
        xinyanAvatar.innerHTML = "Comprar";
        xinyanAvatar.style.background = "black";
    }
};

// Beidou
export const verificaCompraBeidou = () => {
    if(localStorage.getItem('beidouAvatar') == 'comprado') {
        beidouAvatar.innerHTML = "Esgotado";
        beidouAvatar.style.background = "#dd1440";
    } else {
        beidouAvatar.innerHTML = "Comprar";
        beidouAvatar.style.background = "black";
    }
};

// Chongyun
export const verificaCompraChongyun = () => {
    if(localStorage.getItem('chongyunAvatar') == 'comprado') {
        chongyunAvatar.innerHTML = "Esgotado";
        chongyunAvatar.style.background = "#dd1440";
    } else {
        chongyunAvatar.innerHTML = "Comprar";
        chongyunAvatar.style.background = "black";
    }
};

// Ningguang
export const verificaCompraNingguang = () => {
    if(localStorage.getItem('ningguangAvatar') == 'comprado') {
        ningguangAvatar.innerHTML = "Esgotado";
        ningguangAvatar.style.background = "#dd1440";
    } else {
        ningguangAvatar.innerHTML = "Comprar";
        ningguangAvatar.style.background = "black";
    }
};

// Xingqiu
export const verificaCompraXingqiu = () => {
    if(localStorage.getItem('xingqiuAvatar') == 'comprado') {
        xingqiuAvatar.innerHTML = "Esgotado";
        xingqiuAvatar.style.background = "#dd1440";
    } else {
        xingqiuAvatar.innerHTML = "Comprar";
        xingqiuAvatar.style.background = "black";
    }
};

// Xiangling
export const verificaCompraXiangling = () => {
    if(localStorage.getItem('xianglingAvatar') == 'comprado') {
        xianglingAvatar.innerHTML = "Esgotado";
        xianglingAvatar.style.background = "#dd1440";
    } else {
        xianglingAvatar.innerHTML = "Comprar";
        xianglingAvatar.style.background = "black";
    }
};


//Inazuma

// Raiden
export const verificaCompraRaiden = () => {
    if(localStorage.getItem('raidenAvatar') == 'comprado') {
        raidenAvatar.innerHTML = "Esgotado";
        raidenAvatar.style.background = "#dd1440";
    } else {
        raidenAvatar.innerHTML = "Comprar";
        raidenAvatar.style.background = "black";
    }
};

// Kazuha
export const verificaCompraKazuha = () => {
    if(localStorage.getItem('kazuhaAvatar') == 'comprado') {
        kazuhaAvatar.innerHTML = "Esgotado";
        kazuhaAvatar.style.background = "#dd1440";
    } else {
        kazuhaAvatar.innerHTML = "Comprar";
        kazuhaAvatar.style.background = "black";
    }
};

// Arataki
export const verificaCompraArataki = () => {
    if(localStorage.getItem('aratakiAvatar') == 'comprado') {
        aratakiAvatar.innerHTML = "Esgotado";
        aratakiAvatar.style.background = "#dd1440";
    } else {
        aratakiAvatar.innerHTML = "Comprar";
        aratakiAvatar.style.background = "black";
    }
};

// Kokomi
export const verificaCompraKokomi = () => {
    if(localStorage.getItem('kokomiAvatar') == 'comprado') {
        kokomiAvatar.innerHTML = "Esgotado";
        kokomiAvatar.style.background = "#dd1440";
    } else {
        kokomiAvatar.innerHTML = "Comprar";
        kokomiAvatar.style.background = "black";
    }
};

// Ayato
export const verificaCompraAyato = () => {
    if(localStorage.getItem('ayatoAvatar') == 'comprado') {
        ayatoAvatar.innerHTML = "Esgotado";
        ayatoAvatar.style.background = "#dd1440";
    } else {
        ayatoAvatar.innerHTML = "Comprar";
        ayatoAvatar.style.background = "black";
    }
};

// Ayaka
export const verificaCompraAyaka = () => {
    if(localStorage.getItem('ayakaAvatar') == 'comprado') {
        ayakaAvatar.innerHTML = "Esgotado";
        ayakaAvatar.style.background = "#dd1440";
    } else {
        ayakaAvatar.innerHTML = "Comprar";
        ayakaAvatar.style.background = "black";
    }
};

// YaeMiko
export const verificaCompraYaeMiko = () => {
    if(localStorage.getItem('yaemikoAvatar') == 'comprado') {
        yaemikoAvatar.innerHTML = "Esgotado";
        yaemikoAvatar.style.background = "#dd1440";
    } else {
        yaemikoAvatar.innerHTML = "Comprar";
        yaemikoAvatar.style.background = "black";
    }
};

// Yoimiya
export const verificaCompraYoimiya = () => {
    if(localStorage.getItem('yoimiyaAvatar') == 'comprado') {
        yoimiyaAvatar.innerHTML = "Esgotado";
        yoimiyaAvatar.style.background = "#dd1440";
    } else {
        yoimiyaAvatar.innerHTML = "Comprar";
        yoimiyaAvatar.style.background = "black";
    }
};

// Sayu
export const verificaCompraSayu = () => {
    if(localStorage.getItem('sayuAvatar') == 'comprado') {
        sayuAvatar.innerHTML = "Esgotado";
        sayuAvatar.style.background = "#dd1440";
    } else {
        sayuAvatar.innerHTML = "Comprar";
        sayuAvatar.style.background = "black";
    }
};

// Sara
export const verificaCompraSara = () => {
    if(localStorage.getItem('saraAvatar') == 'comprado') {
        saraAvatar.innerHTML = "Esgotado";
        saraAvatar.style.background = "#dd1440";
    } else {
        saraAvatar.innerHTML = "Comprar";
        saraAvatar.style.background = "black";
    }
};

// Thoma
export const verificaCompraThoma = () => {
    if(localStorage.getItem('thomaAvatar') == 'comprado') {
        thomaAvatar.innerHTML = "Esgotado";
        thomaAvatar.style.background = "#dd1440";
    } else {
        thomaAvatar.innerHTML = "Comprar";
        thomaAvatar.style.background = "black";
    }
};

// Gorou
export const verificaCompraGorou = () => {
    if(localStorage.getItem('gorouAvatar') == 'comprado') {
        gorouAvatar.innerHTML = "Esgotado";
        gorouAvatar.style.background = "#dd1440";
    } else {
        gorouAvatar.innerHTML = "Comprar";
        gorouAvatar.style.background = "black";
    }
};

// Kuki
export const verificaCompraKuki = () => {
    if(localStorage.getItem('kukiAvatar') == 'comprado') {
        kukiAvatar.innerHTML = "Esgotado";
        kukiAvatar.style.background = "#dd1440";
    } else {
        kukiAvatar.innerHTML = "Comprar";
        kukiAvatar.style.background = "black";
    }
};

// Heizou
export const verificaCompraHeizou = () => {
    if(localStorage.getItem('heizouAvatar') == 'comprado') {
        heizouAvatar.innerHTML = "Esgotado";
        heizouAvatar.style.background = "#dd1440";
    } else {
        heizouAvatar.innerHTML = "Comprar";
        heizouAvatar.style.background = "black";
    }
};

// Kirara
export const verificaCompraKirara = () => {
    if(localStorage.getItem('kiraraAvatar') == 'comprado') {
        kiraraAvatar.innerHTML = "Esgotado";
        kiraraAvatar.style.background = "#dd1440";
    } else {
        kiraraAvatar.innerHTML = "Comprar";
        kiraraAvatar.style.background = "black";
    }
};

//Sumeru

// Nahida
export const verificaCompraNahida = () => {
    if(localStorage.getItem('nahidaAvatar') == 'comprado') {
        nahidaAvatar.innerHTML = "Esgotado";
        nahidaAvatar.style.background = "#dd1440";
    } else {
        nahidaAvatar.innerHTML = "Comprar";
        nahidaAvatar.style.background = "black";
    }
};

// Alhaitham
export const verificaCompraAlhaitham = () => {
    if(localStorage.getItem('alhaithamAvatar') == 'comprado') {
        alhaithamAvatar.innerHTML = "Esgotado";
        alhaithamAvatar.style.background = "#dd1440";
    } else {
        alhaithamAvatar.innerHTML = "Comprar";
        alhaithamAvatar.style.background = "black";
    }
};

// Dehya
export const verificaCompraDehya = () => {
    if(localStorage.getItem('dehyaAvatar') == 'comprado') {
        dehyaAvatar.innerHTML = "Esgotado";
        dehyaAvatar.style.background = "#dd1440";
    } else {
        dehyaAvatar.innerHTML = "Comprar";
        dehyaAvatar.style.background = "black";
    }
};

// Cyno
export const verificaCompraCyno = () => {
    if(localStorage.getItem('cynoAvatar') == 'comprado') {
        cynoAvatar.innerHTML = "Esgotado";
        cynoAvatar.style.background = "#dd1440";
    } else {
        cynoAvatar.innerHTML = "Comprar";
        cynoAvatar.style.background = "black";
    }
};

// Tighnari
export const verificaCompraTighnari = () => {
    if(localStorage.getItem('tighnariAvatar') == 'comprado') {
        tighnariAvatar.innerHTML = "Esgotado";
        tighnariAvatar.style.background = "#dd1440";
    } else {
        tighnariAvatar.innerHTML = "Comprar";
        tighnariAvatar.style.background = "black";
    }
};

// Nilou
export const verificaCompraNilou = () => {
    if(localStorage.getItem('nilouAvatar') == 'comprado') {
        nilouAvatar.innerHTML = "Esgotado";
        nilouAvatar.style.background = "#dd1440";
    } else {
        nilouAvatar.innerHTML = "Comprar";
        nilouAvatar.style.background = "black";
    }
};

// Wanderer
export const verificaCompraWanderer = () => {
    if(localStorage.getItem('wandererAvatar') == 'comprado') {
        wandererAvatar.innerHTML = "Esgotado";
        wandererAvatar.style.background = "#dd1440";
    } else {
        wandererAvatar.innerHTML = "Comprar";
        wandererAvatar.style.background = "black";
    }
};

// Collei
export const verificaCompraCollei = () => {
    if(localStorage.getItem('colleiAvatar') == 'comprado') {
        colleiAvatar.innerHTML = "Esgotado";
        colleiAvatar.style.background = "#dd1440";
    } else {
        colleiAvatar.innerHTML = "Comprar";
        colleiAvatar.style.background = "black";
    }
};

// Dori
export const verificaCompraDori = () => {
    if(localStorage.getItem('doriAvatar') == 'comprado') {
        doriAvatar.innerHTML = "Esgotado";
        doriAvatar.style.background = "#dd1440";
    } else {
        doriAvatar.innerHTML = "Comprar";
        doriAvatar.style.background = "black";
    }
};

// Kaveh
export const verificaCompraKaveh = () => {
    if(localStorage.getItem('kavehAvatar') == 'comprado') {
        kavehAvatar.innerHTML = "Esgotado";
        kavehAvatar.style.background = "#dd1440";
    } else {
        kavehAvatar.innerHTML = "Comprar";
        kavehAvatar.style.background = "black";
    }
};

// Candace
export const verificaCompraCandace = () => {
    if(localStorage.getItem('candaceAvatar') == 'comprado') {
        candaceAvatar.innerHTML = "Esgotado";
        candaceAvatar.style.background = "#dd1440";
    } else {
        candaceAvatar.innerHTML = "Comprar";
        candaceAvatar.style.background = "black";
    }
};

// Faruzan
export const verificaCompraFaruzan = () => {
    if(localStorage.getItem('faruzanAvatar') == 'comprado') {
        faruzanAvatar.innerHTML = "Esgotado";
        faruzanAvatar.style.background = "#dd1440";
    } else {
        faruzanAvatar.innerHTML = "Comprar";
        faruzanAvatar.style.background = "black";
    }
};

// Layla
export const verificaCompraLayla = () => {
    if(localStorage.getItem('laylaAvatar') == 'comprado') {
        laylaAvatar.innerHTML = "Esgotado";
        laylaAvatar.style.background = "#dd1440";
    } else {
        laylaAvatar.innerHTML = "Comprar";
        laylaAvatar.style.background = "black";
    }
};

//Fontaine

export const verificaCompraWriothesley = () => {
    if(localStorage.getItem('wriothesleyAvatar') == 'comprado') {
        wriothesleyAvatar.innerHTML = "Esgotado";
        wriothesleyAvatar.style.background = "#dd1440";
    }else {
        wriothesleyAvatar.innerHTML = "Comprar";
        wriothesleyAvatar.style.background = "black";
    }
};

export const verificaCompraLyney = () => {
    if(localStorage.getItem('lyneyAvatar') == 'comprado') {
        lyneyAvatar.innerHTML = "Esgotado";
        lyneyAvatar.style.background = "#dd1440";
    }else {
        lyneyAvatar.innerHTML = "Comprar";
        lyneyAvatar.style.background = "black";
    }
};

// Navia
export const verificaCompraNavia = () => {
    if(localStorage.getItem('naviaAvatar') == 'comprado') {
        naviaAvatar.innerHTML = "Esgotado";
        naviaAvatar.style.background = "#dd1440";
    } else {
        naviaAvatar.innerHTML = "Comprar";
        naviaAvatar.style.background = "black";
    }
};

export const verificaCompraNeuvillette = () => {
    if(localStorage.getItem('neuvilletteAvatar') == 'comprado') {
        neuvilletteAvatar.innerHTML = "Esgotado";
        neuvilletteAvatar.style.background = "#dd1440";
    }else {
        neuvilletteAvatar.innerHTML = "Comprar";
        neuvilletteAvatar.style.background = "black";
    }
};

export const verificaCompraFurina = () => {
    if(localStorage.getItem('furinaAvatar') == 'comprado') {
        furinaAvatar.innerHTML = "Esgotado";
        furinaAvatar.style.background = "#dd1440";
    }else {
        furinaAvatar.innerHTML = "Comprar";
        furinaAvatar.style.background = "black";
    }
};

export const verificaCompraLynette = () => {
    if(localStorage.getItem('lynetteAvatar') == 'comprado') {
        lynetteAvatar.innerHTML = "Esgotado";
        lynetteAvatar.style.background = "#dd1440";
    }else {
        lynetteAvatar.innerHTML = "Comprar";
        lynetteAvatar.style.background = "black";
    }
};

export const verificaCompraFreminet = () => {
    if(localStorage.getItem('freminetAvatar') == 'comprado') {
        freminetAvatar.innerHTML = "Esgotado";
        freminetAvatar.style.background = "#dd1440";
    }else {
        freminetAvatar.innerHTML = "Comprar";
        freminetAvatar.style.background = "black";
    }
};

export const verificaCompraCharlotte = () => {
    if(localStorage.getItem('charlotteAvatar') == 'comprado') {
        charlotteAvatar.innerHTML = "Esgotado";
        charlotteAvatar.style.background = "#dd1440";
    }else {
        charlotteAvatar.innerHTML = "Comprar";
        charlotteAvatar.style.background = "black";
    }
};

export const verificaCompraChevreuse = () => {
    if(localStorage.getItem('chevreuseAvatar') == 'comprado') {
        chevreuseAvatar.innerHTML = "Esgotado";
        chevreuseAvatar.style.background = "#dd1440";
    }else {
        chevreuseAvatar.innerHTML = "Comprar";
        chevreuseAvatar.style.background = "black";
    }
};

//Snezhnaya

// Tartaglia
export const verificaCompraTartaglia = () => {
    if(localStorage.getItem('tartagliaAvatar') == 'comprado') {
        tartagliaAvatar.innerHTML = "Esgotado";
        tartagliaAvatar.style.background = "#dd1440";
    } else {
        tartagliaAvatar.innerHTML = "Comprar";
        tartagliaAvatar.style.background = "black";
    }
};

//Skins

// Diluc Avatar Skin
export const verificaCompraDilucAvatarSkin = () => {
    if(localStorage.getItem('dilucSkinAvatar') == 'comprado') {
        dilucAvatarSkin.innerHTML = "Esgotado";
        dilucAvatarSkin.style.background = "#dd1440";
    } else {
        dilucAvatarSkin.innerHTML = "Comprar";
        dilucAvatarSkin.style.background = "black";
    }
};

// Jean Skin Avatar
export const verificaCompraJeanSkinAvatar = () => {
    if(localStorage.getItem('jeanSkinAvatar') == 'comprado') {
        jeanAvatarSkin.innerHTML = "Esgotado";
        jeanAvatarSkin.style.background = "#dd1440";
    } else {
        jeanAvatarSkin.innerHTML = "Comprar";
        jeanAvatarSkin.style.background = "black";
    }
};

// Klee Skin Avatar
export const verificaCompraKleeSkinAvatar = () => {
    if(localStorage.getItem('kleeSkinAvatar') == 'comprado') {
        kleeAvatarSkin.innerHTML = "Esgotado";
        kleeAvatarSkin.style.background = "#dd1440";
    } else {
        kleeAvatarSkin.innerHTML = "Comprar";
        kleeAvatarSkin.style.background = "black";
    }
};

// Ayaka Skin Avatar
export const verificaCompraAyakaSkinAvatar = () => {
    if(localStorage.getItem('ayakaSkinAvatar') == 'comprado') {
        ayakaAvatarSkin.innerHTML = "Esgotado";
        ayakaAvatarSkin.style.background = "#dd1440";
    } else {
        ayakaAvatarSkin.innerHTML = "Comprar";
        ayakaAvatarSkin.style.background = "black";
    }
};

// Barbara Skin Avatar
export const verificaCompraBarbaraSkinAvatar = () => {
    if(localStorage.getItem('barbaraSkinAvatar') == 'comprado') {
        barbaraAvatarSkin.innerHTML = "Esgotado";
        barbaraAvatarSkin.style.background = "#dd1440";
    } else {
        barbaraAvatarSkin.innerHTML = "Comprar";
        barbaraAvatarSkin.style.background = "black";
    }
};

// Fischl Skin Avatar
export const verificaCompraFischlSkinAvatar = () => {
    if(localStorage.getItem('fischlSkinAvatar') == 'comprado') {
        fischlAvatarSkin.innerHTML = "Esgotado";
        fischlAvatarSkin.style.background = "#dd1440";
    } else {
        fischlAvatarSkin.innerHTML = "Comprar";
        fischlAvatarSkin.style.background = "black";
    }
};

// Ningguang Skin Avatar
export const verificaCompraNingguangSkinAvatar = () => {
    if(localStorage.getItem('ningguangSkinAvatar') == 'comprado') {
        ningguangAvatarSkin.innerHTML = "Esgotado";
        ningguangAvatarSkin.style.background = "#dd1440";
    } else {
        ningguangAvatarSkin.innerHTML = "Comprar";
        ningguangAvatarSkin.style.background = "black";
    }
};

// Keqing Skin Avatar
export const verificaCompraKeqingSkinAvatar = () => {
    if(localStorage.getItem('keqingSkinAvatar') == 'comprado') {
        keqingAvatarSkin.innerHTML = "Esgotado";
        keqingAvatarSkin.style.background = "#dd1440";
    } else {
        keqingAvatarSkin.innerHTML = "Comprar";
        keqingAvatarSkin.style.background = "black";
    }
};

// Lisa Skin Avatar
export const verificaCompraLisaSkinAvatar = () => {
    if(localStorage.getItem('lisaSkinAvatar') == 'comprado') {
        lisaAvatarSkin.innerHTML = "Esgotado";
        lisaAvatarSkin.style.background = "#dd1440";
    } else {
        lisaAvatarSkin.innerHTML = "Comprar";
        lisaAvatarSkin.style.background = "black";
    }
};

// Kaeya Skin Avatar
export const verificaCompraKaeyaSkinAvatar = () => {
    if(localStorage.getItem('kaeyaSkinAvatar') == 'comprado') {
        kaeyaAvatarSkin.innerHTML = "Esgotado";
        kaeyaAvatarSkin.style.background = "#dd1440";
    } else {
        kaeyaAvatarSkin.innerHTML = "Comprar";
        kaeyaAvatarSkin.style.background = "black";
    }
};