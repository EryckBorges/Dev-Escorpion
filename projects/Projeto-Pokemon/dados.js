const tipos = {
    "Planta" : "Tipos/Grass.ico",
    "Escuro" : "Tipos/Dark.ico",
    "Inseto" : "Tipos/Bug.ico",
    "Dragão" : "Tipos/Dragon.ico",
    "Elétrico" : "Tipos/Electric.ico",
    "Fada" : "Tipos/Fairy.ico",
    "Lutador" : "Tipos/Fighting.ico",
    "Fogo" : "Tipos/Fire.ico",
    "Voador" : "Tipos/Flying.ico",
    "Terrestre" : "Tipos/Ground.ico",
    "Fantasma" : "Tipos/Ghost.ico",
    "Gelo" : "Tipos/Ice.ico",
    "Normal" : "Tipos/Normal.ico",
    "Venenoso" : "Tipos/Poison.ico",
    "Psíquico" : "Tipos/Psychic.ico",
    "Rochoso" : "Tipos/Rock.ico",
    "Metal" : "Tipos/Steel.ico",
    "Água" : "Tipos/Water.ico",
};

const tamanho = ["Minúsculo", "Pequeno", "Médio", "Grande", "Enorme"];
const dados = [
    {
        nro: 1,
        som: "./Sons/bulbasaur.mp3",
        nome: "Bulbasaur",
        genero: " ",
        tamanho: 1,
        img:"./pokemons/bulbasaur.gif",
        tipo: ["Planta", "Venenoso"],
        descricao: "Bulbasaur é uma criatura quadrúpede réptil que lembra um dinossauro jovem, com um azul-verde manchado. Ele tem três dedos brancos ou garras crescendo fora de suas quatro pernas, e seus olhos são de um vermelho brilhante."
    }
    ,{
        nro: 2,
        som: "./Sons/ivysaur.mp3",
        nome: "Ivysaur",
        genero: " ",
        tamanho: 2,
        img: "./pokemons/ivysaur.gif",
        tipo: ["Planta", "Venenoso"],
        descricao: "A luz solar fará a flor em suas costas crescer. Conforme Ivysaur for crescendo, essa flor irá desabrochar. Ela irá soltar um doce aroma quando florescer."
    }
    , {
        nro: 3,
        som: "./Sons/venusaur.mp3",
        nome: "Venasaur",
        genero: "♂",
        tamanho: 3,
        img: "./pokemons/venusaur.gif",
        tipo: ["Planta", "Venenoso"],
        descricao: "Venasaur é um Pokémon quadrúpede com pele verde acinzentada, e azulada. Ele tem olhos pequenos e circulares vermelhos, dois dentes pontiagudos em sua mandíbula superior, e quatro dentes pontiagudos em sua mandíbula inferior. Tem três dedos com garras em cada pé. Possui um grande coqueiro em suas costas."}
    ,  {
        nro: 3,
        som: "./Sons/venusaur.mp3",
        nome: "Venasaur",
        genero: "♀",
        tamanho: 3,
        img:"./pokemons/venusaur.gif",
        tipo: ["Planta", "Venenoso"],
        descricao: "Venasaur é um Pokémon quadrúpede com pele verde acinzentada, e azulada. Ele tem olhos pequenos e circulares vermelhos, dois dentes pontiagudos em sua mandíbula superior, e quatro dentes pontiagudos em sua mandíbula inferior. Tem três dedos com garras em cada pé. Possui um grande coqueiro em suas costas."
    },
    {
        nro: 4,
        som: "./Sons/charmander.mp3",
        nome: "Charmander",
        genero: " ",
        tamanho: 1,
        img:"./pokemons/charmander.gif",
        tipo: ["Fogo"],
        descricao: "O fogo na ponta de sua cauda é uma medida de sua vida. Se saudável, sua cauda queima intensamente. A chama na ponta de sua cauda faz um som enquanto queima. Você só pode ouvi-lo em lugares tranquilos."
    },
    {
        nro: 5,
        som: "./Sons/charmeleon.mp3",
        nome: "Charmeleon",
        genero: " ",
        tamanho: 2,
        img:"./pokemons/charmeleon.gif",
        tipo: ["Fogo"],
        descricao: "Charmeleon tem uma natureza perversa e constantemente procurando adversários. Adversários fortes excita este Pokémon, fazendo-a jorrar chamas azuis que tocham seus arredores. No entanto, uma vez que relaxar ganhou. É raro na natureza, mas pode ser encontrado em áreas montanhosas."},
    {
        nro: 6,
        som: "./Sons/charizard.mp3",
        nome: "Charizard",
        genero: " ",
        tamanho: 4,
        img:"./pokemons/charizard.gif",
        tipo: ["Fogo", "Voador"],
        descricao: "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas."
    },
    {
        nro: 7,
        som: "./Sons/squirtle.mp3",
        nome: "Squirtle",
        genero: " ",
        tamanho: 1,
        img:"./pokemons/squirtle.gif",
        tipo: ["Água"],
        descricao: "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa. Quando se sente ameaçado, puxa seus membros para dentro de sua concha e borrifa água de sua boca."
    },
    {
        nro: 8,
        som: "./Sons/wartortle.mp3",
        nome: "Wartortle",
        genero: " ",
        tamanho: 2,
        img:"./pokemons/wartortle.gif",
        tipo: ["Água"],
        descricao: "Ele controla habilmente suas orelhas e cauda peludas para manter o equilíbrio enquanto nada. É reconhecido como um símbolo de longevidade. Se a concha tiver algas, esse Wartortle é muito antigo."
    },
    {
        nro: 9,
        som: "./Sons/blastoise.mp3",
        nome: "Blastoise",
        genero: " ",
        tamanho: 3,
        img:"./pokemons/blastoise.gif",
        tipo: ["Água"],
        descricao: "Os canhões de foguete em seu casco disparam jatos de água capazes de perfurar o aço grosso. Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma patada, ele se retirará dentro de sua concha."
    },
    {
        nro: 10,
        som: "./Sons/caterpie.mp3",
        nome: "Caterpie",
        genero: " ",
        tamanho: 0,
        img:"./pokemons/caterpie.gif",
        tipo: ["Inseto"],
        descricao: "Seus pés curtos possuem ventosas que lhe permitem escalar incansavelmente encostas e paredes. Para proteção, ele libera um cheiro horrível da antena em sua cabeça para afastar os inimigos."
    },
    {
        nro: 11,
        som: "./Sons/metapod.mp3",
        nome: "Metapod",
        genero: " ",
        tamanho: 1,
        img:"https://projectpokemon.org/images/normal-sprite/metapod.gif",
        tipo: ["Inseto"],
        descricao: "Ele controla habilmente suas orelhas e cauda peludas para manter o equilíbrio enquanto nada. É reconhecido como um símbolo de longevidade. Se a concha tiver algas, esse Wartortle é muito antigo."
    },
    {
        nro: 12,
        som: "./Sons/butterfree.mp3",
        nome: "Butterfree",
        genero: "♂",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/butterfree.gif",
        tipo: ["Inseto", "Voador"],
        descricao: "Na batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar.Coleta mel todos os dias. Ele esfrega mel nos pelos das pernas para levá-lo de volta ao ninho."
    },
    {
        nro: 12,
        som: "./Sons/butterfree.mp3",
        nome: "Butterfree",
        genero: "♀",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/butterfree-f.gif",
        tipo: ["Inseto", "Voador"],
        descricao: "Na batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar.Coleta mel todos os dias. Ele esfrega mel nos pelos das pernas para levá-lo de volta ao ninho."
    },
    {
        nro: 13,
        som: "./Sons/weedle.mp3",
        nome: "Weedle",
        genero: " ",
        tamanho: 0,
        img:"https://projectpokemon.org/images/normal-sprite/weedle.gif",
        tipo: ["Inseto", "Venenoso"],
        descricao: "Cuidado com o ferrão afiado em sua cabeça. Esconde-se na grama e nos arbustos onde come folhas."
    },
    {
        nro: 14,
        som: "./Sons/kakuna.mp3",
        nome: "Kakuna",
        genero: " ",
        tamanho: 1,
        img:"https://projectpokemon.org/images/normal-sprite/kakuna.gif",
        tipo: ["Inseto", "Venenoso"],
        descricao: "Capaz de se mover apenas ligeiramente. Quando em perigo, pode esticar seu ferrão e envenenar seu inimigo."
    },
    {
        nro: 15,
        som: "./Sons/beedrill.mp3",
        nome: "Beedrill",
        genero: " ",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/beedrill.gif",
        tipo: ["Inseto", "Venenoso"],
        descricao: "Tem três ferrões venenosos nas patas dianteiras e na cauda. Eles são usados para espetar seu inimigo repetidamente."
    },
    {
        nro: 16,
        som: "./Sons/pidgey.mp3",
        nome: "Pidgey",
        genero: " ",
        tamanho: 0,
        img:"https://projectpokemon.org/images/normal-sprite/pidgey.gif",
        tipo: ["Normal", "Voador"],
        descricao: "Muito dócil. Se atacado, ele geralmente levanta areia para se proteger, em vez de revidar."
    },
    {
        nro: 17,
        som: "./Sons/pidgeotto.mp3",
        nome: "Pidgeotto",
        genero: " ",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/pidgeotto.gif",
        tipo: ["Normal", "Voador"],
        descricao: "Este Pokémon é cheio de vitalidade. Ele voa constantemente em torno de seu grande território em busca de presas."
    },
    {
        nro: 18,
        som: "./Sons/pidgeot.mp3",
        nome: "Pidgeot",
        genero: " ",
        tamanho: 4,
        img:"https://projectpokemon.org/images/normal-sprite/pidgeot.gif",
        tipo: ["Normal", "Voador"],
        descricao: "Este Pokémon voa em velocidade Mach 2, em busca de presas. Suas grandes garras são temidas como armas perversas"
    },
    {
        nro: 19,
        som: "./Sons/rattata.mp3",
        nome: "Rattata",
        genero: "♂",
        tamanho: 1,
        img:"https://projectpokemon.org/images/normal-sprite/rattata.gif",
        tipo: ["Normal"],
        descricao: "Vai mastigar qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área."
    },
    {
        nro: 19,
        som: "./Sons/rattata.mp3",
        nome: "Rattata",
        genero: "♀",
        tamanho: 1,
        img:"https://projectpokemon.org/images/normal-sprite/rattata-f.gif",
        tipo: ["Normal"],
        descricao: "Vai mastigar qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área."
    },
    {
        nro: 20,
        som: "./Sons/raticate.mp3",
        nome: "Raticate",
        genero: "♂",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/raticate.gif",
        tipo: ["Normal"],
        descricao: "Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas."
    },
    {
        nro: 20,
        som: "./Sons/raticate.mp3",
        nome: "Raticate",
        genero: "♀",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/raticate-f.gif",
        tipo: ["Normal"],
        descricao: "Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas."
    },
    {
        nro: 21,
        som: "./Sons/spearow.mp3",
        nome: "Spearow",
        genero: " ",
        tamanho: 0,
        img:"https://projectpokemon.org/images/normal-sprite/spearow.gif",
        tipo: ["Normal", "Voador"],
        descricao: "Inepto para voar alto. No entanto, ele pode voar muito rápido para proteger seu território."
    },
    {
        nro: 22,
        som: "./Sons/fearow.mp3",
        nome: "Fearow",
        genero: " ",
        tamanho: 4,
        img:"https://projectpokemon.org/images/normal-sprite/fearow.gif",
        tipo: ["Normal", "Voador"],
        descricao: "Um Pokémon que remonta a muitos anos. Se ele sentir o perigo, ele voa alto e para longe, instantaneamente"
    },
    {
        nro: 23,
        som: "./Sons/ekans.mp3",
        nome: "Ekans",
        genero: " ",
        tamanho: 0,
        img:"https://projectpokemon.org/images/normal-sprite/ekans.gif",
        tipo: ["Venenoso"],
        descricao: "Quanto mais velho fica, mais cresce. À noite, ele envolve seu corpo comprido em galhos de árvores para descansar."
    },
    {
        nro: 24,
        som: "./Sons/arbok.mp3",
        nome: "Arbok",
        genero: " ",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/arbok.gif",
        tipo: ["Venenoso"],
        descricao: "Os padrões assustadores em sua barriga foram estudados. Seis variações foram confirmadas."
    },
    {
        nro: 25,
        som: "./Sons/pikachu.mp3",
        nome: "Pikachu",
        genero: "♂",
        tamanho: 1,
        img:"https://projectpokemon.org/images/normal-sprite/pikachu.gif",
        tipo: ["Elétrico"],
        descricao: "Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas. Quando Pikachu se encontra, eles tocam suas caudas e trocam eletricidade através delas como uma forma de saudação."
    },
    {
        nro: 25,
        som: "./Sons/pikachu.mp3",
        nome: "Pikachu",
        genero: "♀",
        tamanho: 1,
        img:"https://projectpokemon.org/images/normal-sprite/pikachu-f.gif",
        tipo: ["Elétrico"],
        descricao: "Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas. Quando Pikachu se encontra, eles tocam suas caudas e trocam eletricidade através delas como uma forma de saudação."
    },
    {
        nro: 26,
        som: "./Sons/raichu.mp3",
        nome: "Raichu",
        genero: "♂",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/raichu.gif",
        tipo: ["Elétrico"],
        descricao: "Sua longa cauda serve como base para se proteger de sua própria energia de alta tensão. Se suas bolsas elétricas ficarem vazias, ele levanta a cauda para coletar eletricidade da atmosfera"
    },
    {
        nro: 26,
        som: "./Sons/raichu.mp3",
        nome: "Raichu",
        genero: "♀",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/raichu-f.gif",
        tipo: ["Elétrico"],
        descricao: "Sua longa cauda serve como base para se proteger de sua própria energia de alta tensão. Se suas bolsas elétricas ficarem vazias, ele levanta a cauda para coletar eletricidade da atmosfera"
    },
    {
        nro: 27,
        som: "./Sons/sandshrew.mp3",
        nome: "Sandshrew",
        genero: " ",
        tamanho: 1,
        img:"https://projectpokemon.org/images/normal-sprite/sandshrew.gif",
        tipo: ["Terrestre"],
        descricao: "Adora tomar banho na areia das áreas secas e arenosas. Ao tomar banho de areia, o Pokémon se livra da sujeira e da umidade que se agarram ao seu corpo. Ele se enterra no chão para criar seu ninho. Se as pedras duras impedirem o túnel, ele usa suas garras afiadas para despedaçá-las e depois continua cavando."
    },
    {
        nro: 28,
        som: "./Sons/sandslash.mp3",
        nome: "Sandslash",
        genero: " ",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/sandslash.gif",
        tipo: ["Terrestre"],
        descricao: "Quanto mais seca a área onde Sandslash vive, mais duros e suaves os espinhos do Pokémon se sentirão quando tocados. Ele sobe em árvores enganchando com suas garras afiadas. Sandslash compartilha as bagas que colhe, deixando-as para Sandshrew esperando embaixo da árvore."
    },
    {
        nro: 29,
        som: "./Sons/nidoran-f.mp3",
        nome: "Nidoran",
        genero: "♀",
        tamanho: 0,
        img:"https://projectpokemon.org/images/normal-sprite/nidoran_f.gif",
        tipo: ["Venenoso"],
        descricao: "As fêmeas são mais sensíveis aos cheiros do que os machos. Enquanto forrageiam, eles usam seus bigodes para verificar a direção do vento e ficar a favor do vento dos predadores. Ele usa seus dentes incisivos duros para esmagar e comer frutas. A ponta do chifre de um Nidoran feminino é um pouco mais arredondada do que a ponta do chifre de um macho."
    },
    {
        nro: 30,
        som: "./Sons/nidorina.mp3",
        nome: "Nidorina",
        genero: "♀",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/nidorina.gif",
        tipo: ["Venenoso"],
        descricao: "O chifre em sua cabeça está atrofiado. Acredita-se que isso aconteça para que os filhos de Nidorina não sejam picados enquanto a mãe os alimenta. Se o grupo for ameaçado, esses Pokémon se unirão para atacar os inimigos com um coro de ondas ultrassônicas."
    },
    {
        nro: 31,
        som: "./Sons/nidoqueen.mp3",
        nome: "Nidoqueen",
        genero: "♀",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/nidoqueen.gif",
        tipo: ["Venenoso", "Terrestre"],
        descricao: "Nidoqueen é melhor na defesa do que no ataque. Com escamas como armaduras, este Pokémon protegerá seus filhos de qualquer tipo de ataque. Ele pacifica a prole, colocando-os nos espaços entre os espinhos nas costas. Os espinhos nunca secretarão veneno enquanto os jovens estiverem presentes"
    },
    {
        nro: 32,
        som: "./Sons/nidoranm.mp3",
        nome: "Nidoran",
        genero: "♂",
        tamanho: 0,
        img:"https://projectpokemon.org/images/normal-sprite/nidoran_m.gif",
        tipo: ["Venenoso"],
        descricao: "O chifre na testa de um Nidoran macho contém um poderoso veneno. Este é um Pokémon muito cauteloso, sempre esticando suas orelhas grandes"
    },
    {
        nro: 33,
        som: "./Sons/nidorino.mp3",
        nome: "Nidorino",
        genero: "♂",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/nidorino.gif",
        tipo: ["Venenoso"],
        descricao: "Com um chifre que é mais duro que diamante, este Pokémon anda por aí quebrando pedregulhos enquanto procura por uma pedra da lua. É nervoso e rápido para agir de forma agressiva. A potência de seu veneno aumenta junto com o nível de adrenalina presente em seu corpo"
    },
    {
        nro: 34,
        som: "./Sons/nidoking.mp3",
        nome: "Nidoking",
        genero: "♂",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/nidoking.gif",
        tipo: ["Venenoso", "Terrestre"],
        descricao: "Quando está em fúria, é impossível controlar. Mas na presença de uma Nidoqueen com quem conviveu por muito tempo, Nidoking se acalma. Nidoking se orgulha de sua força. É forte e espirituoso na batalha, fazendo uso de sua cauda grossa e chifre de esmagamento de diamantes."
    },
    {
        nro: 35,
        som: "./Sons/clefairy.mp3",
        nome: "Clefairy",
        genero: "",
        tamanho: 1,
        img:"https://projectpokemon.org/images/normal-sprite/clefairy.gif",
        tipo: ["Fada"],
        descricao: "Diz-se que a felicidade virá para aqueles que virem uma reunião de Clefairy dançando sob a lua cheia. Seu comportamento adorável e choro o tornam altamente popular. No entanto, este Pokémon fofo raramente é encontrado"
    },
    {
        nro: 36,
        som: "./Sons/clefable.mp3",
        nome: "Clefable",
        genero: "",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/clefable.gif",
        tipo: ["Fada"],
        descricao: "Um Pokémon fada tímido que raramente é visto, ele correrá e se esconderá no momento em que sentir as pessoas. Seus ouvidos são sensíveis o suficiente para ouvir um alfinete cair a mais de um quilômetro de distância, então eles geralmente são encontrados em lugares silenciosos."
    },
    {
        nro: 37,
        som: "./Sons/vulpix.mp3",
        nome: "Vulpix",
        genero: "",
        tamanho: 1,
        img:"https://projectpokemon.org/images/normal-sprite/vulpix.gif",
        tipo: ["Fogo"],
        descricao: "Enquanto jovem, tem seis caudas lindas. Quando cresce, várias novas caudas brotam. À medida que cada cauda cresce, sua pelagem se torna mais brilhante. Quando segurado, ele se sente um pouco quente."
    },
    {
        nro: 38,
        som: "./Sons/ninetales.mp3",
        nome: "Ninetales",
        genero: "",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/ninetales.gif",
        tipo: ["Fogo"],
        descricao: "Diz-se que vive 1.000 anos, e cada uma de suas caudas é carregada com poderes sobrenaturais. Agarrar uma de suas muitas caudas pode resultar em uma maldição de 1.000 ano"
    },
    {
        nro: 39,
        som: "./Sons/jigglypuff.mp3",
        nome: "Jigglypuff",
        genero: "",
        tamanho: 1,
        img:"https://projectpokemon.org/images/normal-sprite/jigglypuff.gif",
        tipo: ["Normal", "Fada"],
        descricao: "Jigglypuff tem capacidade pulmonar de alto nível, mesmo em comparação com outros Pokémon. Ele não vai parar de cantar suas canções de ninar até que seus inimigos adormeçam. Ao mudar livremente o comprimento de onda de sua voz, Jigglypuff canta uma melodia misteriosa que certamente deixará qualquer ouvinte sonolento."
    },
    {
        nro: 40,
        som: "./Sons/wigglytuff.mp3",
        nome: "Wigglytuff",
        genero: "",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/wigglytuff.gif",
        tipo: ["Normal", "Fada"],
        descricao: "Quanto mais ar aspira, mais infla. Se os oponentes o pegarem de mau humor, ele se inflará a um tamanho enorme para intimidá-los. Orgulha-se da sua pelagem, que é fina e delicada. Em particular, o cacho na testa tem uma textura perfeitamente celestial."
    },
    {
        nro: 41,
        som: "./Sons/zubat.mp3",
        nome: "Zubat",
        genero: "♂",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/zubat.gif",
        tipo: ["Venenoso", "Voador"],
        descricao: "Ele emite ondas ultrassônicas de sua boca para verificar seus arredores. Mesmo em cavernas apertadas, Zubat voa com habilidade. Zubat vivem em cavernas, onde a luz do sol não chega. De manhã, eles se reúnem para manter um ao outro aquecido enquanto dormem."
    },
    {
        nro: 41,
        som: "./Sons/zubat.mp3",
        nome: "Zubat",
        genero: "♀",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/zubat.gif",
        tipo: ["Venenoso", "Voador"],
        descricao: "Ele emite ondas ultrassônicas de sua boca para verificar seus arredores. Mesmo em cavernas apertadas, Zubat voa com habilidade. Zubat vivem em cavernas, onde a luz do sol não chega. De manhã, eles se reúnem para manter um ao outro aquecido enquanto dormem."
    },
    {
        nro: 42,
        som: "./Sons/golbat.mp3",
        nome: "Golbat",
        genero: "♂",
        tamanho: 4,
        img:"https://projectpokemon.org/images/normal-sprite/golbat.gif",
        tipo: ["Venenoso", "Voador"],
        descricao: "Adora beber o sangue de outras criaturas. Seus pés são minúsculos, mas este Pokémon anda habilmente. Ele se aproxima de uma presa adormecida antes de afundar em suas presas e sugar o sangue."
    },
    {
        nro: 42,
        som: "./Sons/golbat.mp3",
        nome: "Golbat",
        genero: "♀",
        tamanho: 4,
        img:"https://projectpokemon.org/images/normal-sprite/golbat-f.gif",
        tipo: ["Venenoso", "Voador"],
        descricao: "Adora beber o sangue de outras criaturas. Seus pés são minúsculos, mas este Pokémon anda habilmente. Ele se aproxima de uma presa adormecida antes de afundar em suas presas e sugar o sangue."
    },
    {
        nro: 43,
        som: "./Sons/oddish.mp3",
        nome: "Oddish",
        genero: "",
        tamanho: 1,
        img:"https://projectpokemon.org/images/normal-sprite/oddish.gif",
        tipo: ["Planta", "Venenoso"],
        descricao: "Se exposto ao luar, ele começa a se mover. Ele vaga por toda parte à noite para espalhar suas sementes. Durante o dia, fica no subsolo frio para evitar o sol. Cresce banhando-se ao luar."
    },
    {
        nro: 44,
        som: "./Sons/gloom.mp3",
        nome: "Gloom",
        genero: "♂",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/gloom.gif",
        tipo: ["Planta", "Venenoso"],
        descricao: "Seus pistilos exalam um odor incrivelmente fétido. O cheiro horrível pode causar desmaios a uma distância de 1,25 milhas.O que parece ser baba é na verdade mel doce. É muito pegajoso e agarra-se teimosamente se tocado."
    },
    {
        nro: 44,
        som: "./Sons/gloom.mp3",
        nome: "Gloom",
        genero: "♀",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/gloom-f.gif",
        tipo: ["Planta", "Venenoso"],
        descricao: "Seus pistilos exalam um odor incrivelmente fétido. O cheiro horrível pode causar desmaios a uma distância de 1,25 milhas.O que parece ser baba é na verdade mel doce. É muito pegajoso e agarra-se teimosamente se tocado."
    },
    {
        nro: 45,
        som: "./Sons/vileplume.mp3",
        nome: "Vileplume",
        genero: "♂",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/vileplume.gif",
        tipo: ["Planta", "Venenoso"],
        descricao: "Tem as maiores pétalas do mundo. A cada passo, as pétalas sacodem nuvens pesadas de pólen tóxico.Quanto maiores suas pétalas, mais pólen tóxico ele contém. Sua cabeça grande é pesada e difícil de segurar."
    },
    {
        nro: 45,
        som: "./Sons/vileplume.mp3",
        nome: "Vileplume",
        genero: "♀",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/vileplume-f.gif",
        tipo: ["Planta", "Venenoso"],
        descricao: "Tem as maiores pétalas do mundo. A cada passo, as pétalas sacodem nuvens pesadas de pólen tóxico.Quanto maiores suas pétalas, mais pólen tóxico ele contém. Sua cabeça grande é pesada e difícil de segurar."
    },
    {
        nro: 46,
        som: "./Sons/paras.mp3",
        nome: "Paras",
        genero: "",
        tamanho: 0,
        img:"https://projectpokemon.org/images/normal-sprite/paras.gif",
        tipo: ["Inseto", "Planta"],
        descricao: "Tocas sob o solo para roer as raízes das árvores. Os cogumelos nas costas absorvem a maior parte da nutrição."
    },
    {
        nro: 47,
        som: "./Sons/parasect.mp3",
        nome: "Parasect",
        genero: "",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/parasect.gif",
        tipo: ["Inseto", "Planta"],
        descricao: "O hospedeiro do inseto é drenado de energia pelo cogumelo em suas costas. O cogumelo parece fazer todo o pensamento."
    },
    {
        nro: 48,
        som: "./Sons/venonat.mp3",
        nome: "Venonat",
        genero: "",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/venonat.gif",
        tipo: ["Inseto", "Venenoso"],
        descricao: "Seus grandes olhos atuam como radar. Em um lugar claro, você pode ver que eles são aglomerados de muitos olhos minúsculos."
    },
    {
        nro: 49,
        som: "./Sons/venomoth.mp3",
        nome: "Venomoth",
        genero: "",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/venomoth.gif",
        tipo: ["Inseto", "Venenoso"],
        descricao: "As escamas em pó em suas asas são difíceis de remover da pele. Eles também contêm veneno que vaza em contato."
    },
    {
        nro: 50,
        som: "./Sons/diglett.mp3",
        nome: "Diglett",
        genero: "",
        tamanho: 0,
        img:"https://projectpokemon.org/images/normal-sprite/diglett.gif",
        tipo: ["Terrestre"],
        descricao: "se um Diglett cava através de um campo, deixa o solo perfeitamente arado e ideal para plantar."
    },
    {
        nro: 51,
        som: "./Sons/dugtrio.mp3",
        nome: "Dugtrio",
        genero: "",
        tamanho: 1,
        img:"https://projectpokemon.org/images/normal-sprite/dugtrio.gif",
        tipo: ["Terrestre"],
        descricao: "Uma equipe de trigêmeos Diglett. Ele desencadeia enormes terremotos cavando 60 milhas no subsolo."
    },
    {
        nro: 52,
        som: "./Sons/meowth.mp3",
        nome: "Meowth",
        genero: "",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/meowth.gif",
        tipo: ["Normal"],
        descricao: "Adora colecionar coisas brilhantes. Se estiver de bom humor, pode até deixar seu Treinador dar uma olhada em seu tesouro de tesouros."
    },
    {
        nro: 53,
        som: "./Sons/persian.mp3",
        nome: "Persian",
        genero: "",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/persian.gif",
        tipo: ["Normal"],
        descricao: "Fazer com que este Pokémon orgulhoso se aqueça com você exige muito esforço, e ele vai arranhar você no momento em que ficar irritado."
    },
    {
        nro: 54,
        som: "./Sons/psyduck.mp3",
        nome: "Psyduck",
        genero: "",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/psyduck.gif",
        tipo: ["Água"],
        descricao: "Psyduck é constantemente assolado por dores de cabeça. Se o Pokémon deixar seu estranho poder entrar em erupção, aparentemente a dor diminui por um tempo."
    },
    {
        nro: 55,
        som: "./Sons/golduck.mp3",
        nome: "Golduck",
        genero: "",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/golduck.gif",
        tipo: ["Água"],
        descricao: "Este Pokémon vive em rios que fluem suavemente. Ele rema pela água com seus longos membros, exibindo suas graciosas habilidades de natação."
    },
    {
        nro: 56,
        som: "./Sons/mankey.mp3",
        nome: "Mankey",
        genero: "",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/mankey.gif",
        tipo: ["Lutador"],
        descricao: "Um Pokémon ágil que vive em árvores. Ele se irrita facilmente e não hesitará em atacar qualquer coisa."
    },
    {
        nro: 57,
        som: "./Sons/primeape.mp3",
        nome: "Primeape",
        genero: "",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/primeape.gif",
        tipo: ["Lutador"],
        descricao: "Só deixa de ficar com raiva quando ninguém mais está por perto. Ver este momento é muito difícil."
    },
    {
        nro: 58,
        som: "./Sons/growlithe.mp3",
        nome: "Growlithe",
        genero: "",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/growlithe.gif",
        tipo: ["Fogo"],
        descricao: "Tem uma natureza corajosa e confiável. Ele enfrenta sem medo inimigos maiores e mais fortes."
    },
    {
        nro: 59,
        som: "./Sons/arcanine.mp3",
        nome: "Arcanine",
        genero: "",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/arcanine.gif",
        tipo: ["Fogo"],
        descricao: "A visão dele correndo mais de 6.200 milhas em um único dia e noite cativou muitas pessoas."
    },
    {
        nro: 60,
        som: "./Sons/poliwag.mp3",
        nome: "Poliwag",
        genero: "",
        tamanho:1,
        img:"https://projectpokemon.org/images/normal-sprite/poliwag.gif",
        tipo: ["Água"],
        descricao: "Para Poliwag, nadar é mais fácil do que caminhar. O padrão de redemoinho em sua barriga é, na verdade, parte das entranhas do Pokémon que aparecem através da pele."
    },
    {
        nro: 61,
        som: "./Sons/poliwhirl.mp3",
        nome: "Poliwhirl",
        genero: "",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/poliwhirl.gif",
        tipo: ["Água"],
        descricao: "Olhar para o redemoinho em sua barriga causa sonolência. Esse traço de Poliwhirl tem sido usado no lugar de canções de ninar para fazer as crianças dormirem."
    },
    {
        nro: 62,
        som: "./Sons/poliwrath.mp3",
        nome: "Poliwrath",
        genero: "",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/poliwrath.gif",
        tipo: ["Água", "Lutador"],
        descricao: "Seu corpo é músculo sólido. Ao nadar em mares frios, Poliwrath usa seus braços impressionantes para esmagar o gelo à deriva e avançar."
    },
    {
        nro: 63,
        som: "./Sons/abra.mp3",
        nome: "Abra",
        genero: "",
        tamanho: 2,
        img:"https://projectpokemon.org/images/normal-sprite/abra.gif",
        tipo: ["Psíquico"],
        descricao: "Este Pokémon usa seus poderes psíquicos enquanto dorme. O conteúdo dos sonhos de Abra afeta os poderes que o Pokémon exerce."
    },
    {
        nro: 64,
        som: "./Sons/kadabra.mp3",
        nome: "Kadabra",
        genero: "",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/kadabra.gif",
        tipo: ["Psíquico"],
        descricao: "Usando seu poder psíquico, Kadabra levita enquanto dorme. Ele usa sua cauda elástica como travesseiro."
    },
    {
        nro: 65,
        som: "./Sons/alakazam.mp3",
        nome: "Alakazam",
        genero: "",
        tamanho: 3,
        img:"https://projectpokemon.org/images/normal-sprite/alakazam.gif",
        tipo: ["Psíquico"],
        descricao: "Tem um nível incrivelmente alto de inteligência. Alguns dizem que Alakazam se lembra de tudo o que aconteceu com ele, desde o nascimento até a morte."
    },
    {
        nro: 66,
        som: "./Sons/machop.mp3",
        nome: "Machop",
        genero: "",
        tamanho: 2,
        img:"./pokemons/machop.gif",
        tipo: ["Lutador"],
        descricao: "Todo o seu corpo é composto por músculos. Mesmo sendo do tamanho de uma criança humana, pode arremessar 100 adultos."
    },
    {
        nro: 67,
        som: "./Sons/machoke.mp3",
        nome: "Machoke",
        genero: "",
        tamanho: 3,
        img:"./pokemons/machoke.gif",
        tipo: ["Lutador"],
        descricao: "Seu corpo musculoso é tão poderoso que deve usar um cinto de economia de energia para poder regular seus movimentos."
    },
    {
        nro: 68,
        som: "./Sons/machamp.mp3",
        nome: "Machamp",
        genero: "",
        tamanho: 4,
        img:"./pokemons/machamp.gif",
        tipo: ["Lutador"],
        descricao: "Ele rapidamente balança seus quatro braços para balançar seus oponentes com socos e golpes incessantes de todos os ângulos."
    },
    {
        nro: 69,
        som: "./Sons/bellsprout.mp3",
        nome: "Bellsprout",
        genero: "",
        tamanho: 1,
        img:"./pokemons/bellsprout.gif",
        tipo: ["Planta", "Venenoso"],
        descricao: "Prefere lugares quentes e úmidos. Ele captura pequenos insetos com suas videiras e os devora."
    },
    {
        nro: 70,
        som: "./Sons/weepinbell.mp3",
        nome: "Weepinbell",
        genero: "",
        tamanho: 2,
        img:"./pokemons/weepinbell.gif",
        tipo: ["Planta", "Venenoso"],
        descricao: "Quando está com fome, engole qualquer coisa que se mova. Sua presa infeliz é dissolvida por ácidos fortes."
    },
    {
        nro: 71,
        som: "./Sons/victreebel.mp3",
        nome: "Victreebel",
        genero: "",
        tamanho: 3,
        img:"./pokemons/victreebel.gif",
        tipo: ["Planta", "Venenoso"],
        descricao: "Atrai a presa com o doce aroma do mel. Engolida inteira, a presa é dissolvida em um dia, com ossos e tudo."
    },
    {
        nro: 72,
        som: "./Sons/tentacool.mp3",
        nome: "Tentacool",
        genero: "",
        img:"./pokemons/tentacool.gif",
        tipo: ["Água", "Venenoso"],
        descricao: "Tentacool não é um nadador particularmente forte. Ele flutua pela superfície de mares rasos enquanto procura por presas."
    },
    {
        nro: 73,
        som: "./Sons/tentacruel.mp3",
        nome: "Tentacruel",
        genero: "",
        img:"./pokemons/tentacruel.gif",
        tipo: ["Água", "e Veneno"],
        descricao: "Quando as esferas vermelhas na cabeça de Tentacruel brilharem, cuidado. O Pokémon está prestes a disparar uma explosão de ondas ultrassônicas."
    },
    {
        nro: 74,
        som: "./Sons/geodude.mp3",
        nome: "Geodude",
        genero: "",
        img:"./pokemons/geodude.gif",
        tipo: ["Rochoso", "Terrestre"],
        descricao: "Comumente encontrado perto de trilhas de montanha e similares. Se você pisar em um por acidente, ele fica com raiva."
    },
    {
        nro: 75,
        som: "./Sons/graveler.mp3",
        nome: "Graveler",
        genero: "",
        img:"./pokemons/graveler.gif",
        tipo: ["Rochoso", "Terrestre"],
        descricao: "Muitas vezes visto rolando por trilhas de montanha. Obstáculos são apenas coisas para passar direto, não para evitar."
    },
    {
        nro: 76,
        som: "./Sons/golem.mp3",
        nome: "Golem",
        genero: "",
        img:"./pokemons/golem.gif",
        tipo: ["Rochoso", "Terrestre"],
        descricao: "Uma vez que ele muda de pele, seu corpo fica macio e esbranquiçado. Sua pele endurece quando exposta ao ar."
    },
    {
        nro: 77,
        som: "./Sons/ponyta.mp3",
        nome: "Ponyta",
        genero: "",
        img:"./pokemons/ponyta.gif",
        tipo: ["Fogo"],
        descricao: "Ele não pode funcionar corretamente quando é recém-nascido. À medida que corre com outros de sua espécie, suas pernas ficam mais fortes."
    },
    {
        nro: 78,
        som: "./Sons/rapidash.mp3",
        nome: "Rapidash",
        genero: "",
        img:"https://projectpokemon.org/images/normal-sprite/rapidash.gif",
        tipo: ["Fogo"],
        descricao: "Este Pokémon pode ser visto galopando pelos campos a velocidades de até 150 mph, sua juba de fogo tremulando ao vento."
    },
    {
        nro: 79,
        som: "./Sons/slowpoke.mp3",
        nome: "Slowpoke",
        genero: "",
        img:"./pokemons/slowpoke.gif",
        tipo: ["Água", "e Psíquico"],
        descricao: "De raciocínio lento e alheio, este Pokémon não sentirá nenhuma dor se sua cauda for comida. Ele também não notará quando sua cauda crescer novamente."
    },
    {
        nro: 80,
        som: "./Sons/slowbro.mp3",
        nome: "Slowbro",
        genero: "",
        img:"./pokemons/slowbro.gif",
        tipo: ["Água", "e Psíquico"],
        descricao: "Slowpoke se tornou Slowbro quando um Shellder mordeu sua cauda. Sabores doces que escorrem da cauda fazem com que o Shellder se sinta como se sua vida fosse um sonho."
    },
    {
        nro: 81,
        som: "./Sons/magnemite.mp3",
        nome: "Magnemite",
        genero: "",
        img:"./pokemons/magnemite.gif",
        tipo: ["Elétrico", "Metal"],
        descricao: "Às vezes, o Magnemite fica sem eletricidade e acaba no chão. Se você der baterias a um Magnemite aterrado, ele começará a se mover novamente."
    },
    {
        nro: 82,
        som: "./Sons/magneton.mp3",
        nome: "Magneton",
        genero: "",
        img:"./pokemons/magneton.gif",
        tipo: ["Elétrico", "Metal"],
        descricao: "Este Pokémon são três Magnemite que se ligaram. Magneton envia poderosas ondas de rádio para estudar seus arredores."
    },
    {
        nro: 83,
        som: "./Sons/farfetchd.mp3",
        nome: "Farfetch’d",
        genero: "",
        img:"./pokemons/farfetchd.gif",
        tipo: ["Normal", "Voador"],
        descricao: "O talo que este Pokémon carrega em suas asas serve como uma espada para derrubar os oponentes. Em uma situação terrível, o talo também pode servir como alimento."
    },
    {
        nro: 84,
        som: "./Sons/doduo.mp3",
        nome: "Doduo",
        genero: "",
        img:"./pokemons/doduo.gif",
        tipo: ["Normal", "Voador"],
        descricao: "Suas asas curtas dificultam o vôo. Em vez disso, este Pokémon corre em alta velocidade nas pernas desenvolvidas."
    },
    {
        nro: 85,
        som: "./Sons/dodrio.mp3",
        nome: "Dodrio",
        genero: "",
        img:"./pokemons/dodrio.gif",
        tipo: ["Normal", "Voador"],
        descricao: "Uma das duas cabeças de Doduo se divide para formar uma espécie única. Ele corre perto de 40 mph em pradarias."
    },
    {
        nro: 86,
        som: "./Sons/seel.mp3",
        nome: "Seel",
        genero: "",
        img:"./pokemons/seel.gif",
        tipo: ["Água"],
        descricao: "Adora condições de frio congelante. Aprecia nadar em um clima frio de cerca de 14 graus Fahrenheit."
    },
    {
        nro: 87,
        som: "./Sons/dewgong.mp3",
        nome: "Dewgong",
        genero: "",
        img:"./pokemons/dewgong.gif",
        tipo: ["Água", "e Gelo"],
        descricao: "Todo o seu corpo é branco como a neve. Incólume mesmo pelo frio intenso, nada poderosamente em águas geladas."
    },
    {
        nro: 88,
        som: "./Sons/grimer.mp3",
        nome: "Grimer",
        genero: "",
        img:"./pokemons/grimer.gif",
        tipo: ["Veneno"],
        descricao: "Feito de lodo congelado. Cheira muito pútrido ao toque. Mesmo as ervas daninhas não crescerão em seu caminho."
    },
    {
        nro: 89,
        som: "./Sons/muk.mp3",
        nome: "Muk",
        genero: "",
        img:"./pokemons/muk.gif",
        tipo: ["Veneno"],
        descricao: "O cheiro é tão horrível que pode causar desmaios. Através da degeneração do nariz, perdeu o olfato."
    },
    {
        nro: 90,
        som: "./Sons/shellder.mp3",
        nome: "Shellder",
        genero: "",
        img:"./pokemons/shellder.gif",
        tipo: ["Água"],
        descricao: "Ele nada voltado para trás abrindo e fechando sua concha de duas peças. É surpreendentemente rápido."
    },
    {
        nro: 91,
        som: "./Sons/cloyster.mp3",
        nome: "Cloyster",
        genero: "",
        img:"./pokemons/cloyster.gif",
        tipo: ["Água", "e Gelo"],
        descricao: "Sua casca é extremamente dura. Não pode ser quebrado, mesmo com uma bomba. A concha abre apenas quando está atacando."
    },
    {
        nro: 92,
        som: "./Sons/gastly.mp3",
        nome: "Gastly",
        genero: "",
        img:"./pokemons/gastly.gif",
        tipo: ["Fantasma", "e Veneno"],
        descricao: "Nascido de gases, qualquer um desmaiaria se engolido por seu corpo gasoso, que contém veneno."
    },
    {
        nro:93,
        som: "./Sons/haunter.mp3",
        nome: "Haunter",
        genero: "♂",
        img:"./pokemons/haunter.gif",
        tipo: ["Fantasma", "Venenoso"],
        descricao: "Sua língua é feita de gás. Se lambido, sua vítima começa a tremer constantemente até que a morte finalmente chegue. "
    },
{
        nro:93,
        som: "./Sons/haunter.mp3",
        nome: "Haunter",
        genero: "♀",
        img:"./pokemons/haunter.gif",
        tipo: ["Fantasma", "Venenoso"],
        descricao: "Sua língua é feita de gás. Se lambido, sua vítima começa a tremer constantemente até que a morte finalmente chegue. "
    },
{
        nro:94,
        som: "./Sons/gengar.mp3",
        nome: "Gengar",
        genero: "♂",
        img:"./pokemons/gengar.gif",
        tipo: ["Fantasma", "Venenoso"],
        descricao: "Na noite de lua cheia, se as sombras se movem sozinhas e riem, deve ser culpa de Gengar. "
    },
{
        nro:94,
        som: "./Sons/gengar.mp3",
        nome: "Gengar",
        genero: "♀",
        img:"./pokemons/gengar.gif",
        tipo: ["Fantasma", "Venenoso"],
        descricao: "Na noite de lua cheia, se as sombras se movem sozinhas e riem, deve ser culpa de Gengar. "
    },
{
        nro:95,
        som: "./Sons/onix.mp3",
        nome: "Onix",
        genero: "♂",
        img:"./pokemons/onix.gif",
        tipo: ["Pedra", "Terra"],
        descricao: "À medida que escava o solo, absorve muitos objetos duros. Isso é o que torna seu corpo tão sólido."
    },
{
        nro:95,
        som: "./Sons/onix.mp3",
        nome: "Onix",
        genero: "♀",
        img:"./pokemons/onix.gif",
        tipo: ["Pedra", "Terra"],
        descricao: "À medida que escava o solo, absorve muitos objetos duros. Isso é o que torna seu corpo tão sólido."
    },
{
        nro:96,
        som: "./Sons/drowzee.mp3",
        nome: "Drowzee",
        genero: "♂",
        img:"./pokemons/drowzee.gif",
        tipo: ["Psíquico"],
        descricao: "Se você dormir com ele o tempo todo, às vezes ele mostrará sonhos que comeu no passado. "
    },
{
        nro:96,
        som: "./Sons/drowzee.mp3",
        nome: "Drowzee",
        genero: "♀",
        img:"./pokemons/drowzee.gif",
        tipo: ["Psíquico"],
        descricao: "Se você dormir com ele o tempo todo, às vezes ele mostrará sonhos que comeu no passado. "
    },
{
        nro:97,
        som: "./Sons/hypno.mp3",
        nome: "Hypno",
        genero: "♂",
        img:"./pokemons/hypno.gif",
        tipo: ["Psíquico"],
        descricao: "Evite o contato visual se encontrar um. Ele tentará colocá-lo para dormir usando seu pêndulo. "
    },
{
        nro:97,
        som: "./Sons/hypno.mp3",
        nome: "Hypno",
        genero: "♀",
        img:"./pokemons/hypno.gif",
        tipo: ["Psíquico"],
        descricao: "Evite o contato visual se encontrar um. Ele tentará colocá-lo para dormir usando seu pêndulo. "
    },
{
        nro:98,
        som: "./Sons/krabby.mp3",
        nome: "Krabby",
        genero: "♂",
        img:"./pokemons/krabby.gif",
        tipo: ["Água"],
        descricao: "Pode ser encontrado perto do mar. As pinças grandes voltam a crescer se forem arrancadas de seus soquetes. "
    },
{
        nro:98,
        som: "./Sons/krabby.mp3",
        nome: "Krabby",
        genero: "♀",
        img:"./pokemons/krabby.gif",
        tipo: ["Água"],
        descricao: "Pode ser encontrado perto do mar. As pinças grandes voltam a crescer se forem arrancadas de seus soquetes. "
    },

{
        nro:99,
        som: "./Sons/kingler.mp3",
        nome: "Kingler",
        genero: "♂",
        img:"./pokemons/kingler.gif",
        tipo: ["Água"],
        descricao: "Sua pinça grande e dura tem força de 10.000 cavalos de potência. No entanto, sendo tão grande, é difícil de se mover."
    },
    {
        nro:100,
        som: "./Sons/voltorb.mp3",
        nome: "Voltorb",
        genero: "",
        img:"./pokemons/voltorb.gif",
        tipo: ["Elétrico"],
        descricao: "Diz-se que se camufla como uma Pokébola. Ele se autodestruirá com muito pouco estímulo."
    },

{
        nro:101,
        som: "./Sons/electrode.mp3",
        nome: "Electrode",
        genero: "",
        img:"./pokemons/electrode.gif",
        tipo: ["Elétrico"],
        descricao: "Armazena energia elétrica dentro de seu corpo. Mesmo o menor choque pode desencadear uma enorme explosão."
    },

{
        nro:102,
        som: "./Sons/exeggcute.mp3",
        nome: "Exeggcute",
        genero: "♂",
        img:"./pokemons/exeggcute.gif",
        tipo: ["Grama", "Psíquico"],
        descricao: "Embora possa parecer apenas um monte de ovos, é um Pokémon adequado. Exeggcute se comunica com outros de seu tipo via telepatia, aparentemente."
    },
{
        nro:102,
        som: "./Sons/exeggcute.mp3",
        nome: "Exeggcute",
        genero: "♀",
        img:"./pokemons/exeggcute.gif",
        tipo: ["Grama", "Psíquico"],
        descricao: "Embora possa parecer apenas um monte de ovos, é um Pokémon adequado. Exeggcute se comunica com outros de seu tipo via telepatia, aparentemente."
    },
{
        nro:103,
        som: "./Sons/exeggutor.mp3",
        nome: "Exeggutor",
        genero: "♂",
        img:"./pokemons/exeggutor.gif",
        tipo: ["Grama", "Psíquico"],
        descricao: "Cada uma das três cabeças de Exeggutor está pensando em pensamentos diferentes. Os três não parecem estar muito interessados um no outro."
    },
{
        nro:103,
        som: "./Sons/exeggutor.mp3",
        nome: "Exeggutor",
        genero: "♀",
        img:"./pokemons/exeggutor.gif",
        tipo: ["Grama", "Psíquico"],
        descricao: "Cada uma das três cabeças de Exeggutor está pensando em pensamentos diferentes. Os três não parecem estar muito interessados um no outro."
    },
{
        nro:104,
        som: "./Sons/cubone.mp3",
        nome: "Cubone",
        genero: "♂",
        img:"./pokemons/cubone.gif",
        tipo: ["Terrestre"],
        descricao: "Quando a memória de sua mãe falecida o leva às lágrimas, seus gritos ecoam tristemente dentro do crânio que ele usa em sua cabeça."
    },
{
        nro:104,
        som: "./Sons/cubone.mp3",
        nome: "Cubone",
        genero: "♀",
        img:"./pokemons/cubone.gif",
        tipo: ["Terrestre"],
        descricao: "Quando a memória de sua mãe falecida o leva às lágrimas, seus gritos ecoam tristemente dentro do crânio que ele usa em sua cabeça."
    },
{
        nro:105,
        som: "./Sons/marowak.mp3",
        nome: "Marowak",
        genero: "♂",
        img:"./pokemons/marowak.gif",
        tipo: ["Terrestre"],
        descricao: "Este Pokémon superou sua tristeza para evoluir um novo corpo robusto. Marowak enfrenta seus oponentes com bravura, usando um osso como arma."
    },
{
        nro:105,
        som: "./Sons/marowak.mp3",
        nome: "Marowak",
        genero: "♀",
        img:"./pokemons/marowak.gif",
        tipo: ["Terrestre"],
        descricao: "Este Pokémon superou sua tristeza para evoluir um novo corpo robusto. Marowak enfrenta seus oponentes com bravura, usando um osso como arma."
    },
{
        nro:106,
        som: "./Sons/hitmonlee.mp3",
        nome: "Hitmonlee",
        genero: "♂",
        img:"./pokemons/hitmonlee.gif",
        tipo: ["Lutador"],
        descricao: "Este incrível Pokémon tem um incrível senso de equilíbrio. Pode chutar sucessivamente de qualquer posição."
    },
{
        nro:106,
        som: "./Sons/hitmonlee.mp3",
        nome: "Hitmonlee",
        genero: "♂",
        img:"./pokemons/hitmonlee.gif",
        tipo: ["Lutador"],
        descricao: "Este incrível Pokémon tem um incrível senso de equilíbrio. Pode chutar sucessivamente de qualquer posição."
    },
{
        nro:107,
        som: "./Sons/hitmonchan.mp3",
        nome: "Hitmonchan",
        genero: "♂",
        img:"./pokemons/hitmonchan.gif",
        tipo: ["Lutador"],
        descricao: "Seus socos cortam o ar. Eles são lançados a uma velocidade tão alta que até um leve arranhão pode causar uma queimadura."
    },
{
        nro:107,
        som: "./Sons/hitmonchan.mp3",
        nome: "Hitmonchan",
        genero: "♂",
        img:"./pokemons/hitmonchan.gif",
        tipo: ["Lutador"],
        descricao: "Seus socos cortam o ar. Eles são lançados a uma velocidade tão alta que até um leve arranhão pode causar uma queimadura."
    },
{
        nro:108,
        som: "./Sons/lickitung.mp3",
        nome: "Lickitung",
        genero: "♂",
        img:"./pokemons/lickitung.gif",
        tipo: ["Normal"],
        descricao: "Se a saliva pegajosa deste Pokémon entrar em contato com você e você não a limpar, uma coceira intensa se instalará. A coceira também não desaparecerá."
    },
{
        nro:108,
        som: "./Sons/lickitung.mp3",
        nome: "Lickitung",
        genero: "♀",
        img:"./pokemons/lickitung.gif",
        tipo: ["Normal"],
        descricao: "Se a saliva pegajosa deste Pokémon entrar em contato com você e você não a limpar, uma coceira intensa se instalará. A coceira também não desaparecerá."
    },
{
        nro:109,
        som: "./Sons/koffing.mp3",
        nome: "Koffing",
        genero: "♂",
        img:"./pokemons/koffing.gif",
        tipo: ["Tóxico"],
        descricao: "Seu corpo está cheio de gás venenoso. Ele flutua em lixões, procurando a fumaça do lixo cru e apodrecido."
    },
{
        nro:109,
        som: "./Sons/koffing.mp3",
        nome: "Koffing",
        genero: "♀",
        img:"./pokemons/koffing.gif",
        tipo: ["Tóxico"],
        descricao: "Seu corpo está cheio de gás venenoso. Ele flutua em lixões, procurando a fumaça do lixo cru e apodrecido."
    },
{
        nro:110,
        som: "./Sons/weezing.mp3",
        nome: "Weezing",
        genero: "♂",
        img:"./pokemons/weezing.gif",
        tipo: ["Tóxico"],
        descricao: "Mistura gases entre seus dois corpos. Dizem que esses Pokémon foram vistos em toda a região de Galar no passado."
    },
{
        nro:110,
        som: "./Sons/weezing.mp3",
        nome: "Weezing",
        genero: "♀",
        img:"./pokemons/weezing.gif",
        tipo: ["Tóxico"],
        descricao: "Mistura gases entre seus dois corpos. Dizem que esses Pokémon foram vistos em toda a região de Galar no passado."
    },
{
        nro:111,
        som: "./Sons/rhyhorn.mp3",
        nome: "Rhyhorn",
        genero: "♂",
        img:"./pokemons/rhyhorn.gif",
        tipo: ["Terrestre", "Pedra"],
        descricao: "Forte, mas não muito brilhante, este Pokémon pode destruir até um arranha-céu com seus ataques de ataque."
    },
{
        nro:111,
        som: "./Sons/rhyhorn.mp3",
        nome: "Rhyhorn",
        genero: "♀",
        img:"./pokemons/rhyhorn.gif",
        tipo: ["Terrestre", "Pedra"],
        descricao: "Forte, mas não muito brilhante, este Pokémon pode destruir até um arranha-céu com seus ataques de ataque."
    },
{
        nro:112,
        som: "./Sons/rhydon.mp3",
        nome: "Rhydon",
        genero: "♂",
        img:"./pokemons/rhydon.gif",
        tipo: ["Terrestre", "Pedra"],
        descricao: "Ele começa a andar nas patas traseiras após a evolução. Ele pode fazer buracos através de pedregulhos com seu chifre."
    },
{
        nro:112,
        som: "./Sons/rhydon.mp3",
        nome: "Rhydon",
        genero: "♀",
        img:"./pokemons/rhydon.gif",
        tipo: ["Terrestre", "Pedra"],
        descricao: "Ele começa a andar nas patas traseiras após a evolução. Ele pode fazer buracos através de pedregulhos com seu chifre."
    },
{
        nro:113,
        som: "./Sons/chansey.mp3",
        nome: "Chansey",
        genero: "♀",
        img:"./pokemons/chansey.gif",
        tipo: ["Normal"],
        descricao: "O ovo que Chansey carrega não é apenas delicioso, mas também repleto de nutrição. É usado como um ingrediente culinário de alta classe."
    },
{
        nro:113,
        som:"./Sons/chansey.mp3",
        nome:"Chansey",
        genero: "♀",
        img:"./pokemons/chansey.gif",
        tipo: ["Normal"],
        descricao: "O ovo que Chansey carrega não é apenas delicioso, mas também repleto de nutrição. É usado como um ingrediente culinário de alta classe."
    },
{
        nro:114,
        som: "./Sons/tangela.mp3",
        nome: "Tangela",
        genero: "♂",
        img:"./pokemons/tangela.gif",
        tipo: ["Grama"],
        descricao: "Escondido sob um emaranhado de trepadeiras que cresce sem parar, mesmo que as trepadeiras sejam arrancadas, a verdadeira aparência deste Pokémon permanece um mistério."
    },
{
        nro:114,
        som: "./Sons/tangela.mp3",
        nome: "Tangela",
        genero: "♀",
        img:"./pokemons/tangela.gif",
        tipo: ["Grama"],
        descricao: "Escondido sob um emaranhado de trepadeiras que cresce sem parar, mesmo que as trepadeiras sejam arrancadas, a verdadeira aparência deste Pokémon permanece um mistério."
    },
{
        nro:115,
        som: "./Sons/kangaskhan.mp3",
        nome: "Kangaskhan",
        genero: "♀",
        img:"./pokemons/kangaskhan.gif",
        tipo: ["Normal"],
        descricao: "Embora esteja carregando seu bebê em uma bolsa na barriga, Kangaskhan é rápido em seus pés. Ele intimida seus oponentes com jabs rápidos."
    },
{
        nro:115,
        som: "./Sons/kangaskhan.mp3",
        nome: "Kangaskhan",
        genero: "♀",
        img:"./pokemons/kangaskhan.gif",
        tipo: ["Normal"],
        descricao: "Embora esteja carregando seu bebê em uma bolsa na barriga, Kangaskhan é rápido em seus pés. Ele intimida seus oponentes com jabs rápidos."
    },
{
        nro:116,
        som: "./Sons/horsea.mp3",
        nome: "Horsea",
        genero: "♂",
        img:"./pokemons/horsea.gif",
        tipo: ["Água"],
        descricao: "Horsea faz sua casa em oceanos com correntes suaves. Se este Pokémon estiver sob ataque, ele cospe tinta preta e escapa."
    },
{
        nro:116,
        som: "./Sons/horsea.mp3",
        nome: "Horsea",
        genero: "♀",
        img:"./pokemons/horsea.gif",
        tipo: ["Água"],
        descricao: "Horsea faz sua casa em oceanos com correntes suaves. Se este Pokémon estiver sob ataque, ele cospe tinta preta e escapa."
    },
{
        nro:117,
        som: "./Sons/seadra.mp3",
        nome: "Seadra",
        genero: "♂",
        img:"./pokemons/seadra.gif",
        tipo: ["Água"],
        descricao: "São os machos que criam a prole. Enquanto Seadra está criando filhotes, os espinhos em suas costas secretam um veneno mais espesso e forte."
    },
{
        nro:117,
        som: "./Sons/seadra.mp3",
        nome: "Seadra",
        genero: "♀",
        img:"./pokemons/seadra.gif",
        tipo: ["Água"],
        descricao: "São os machos que criam a prole. Enquanto Seadra está criando filhotes, os espinhos em suas costas secretam um veneno mais espesso e forte."
    },
{
        nro:118,
        som: "./Sons/goldeen.mp3",
        nome: "Goldeen",
        genero: "♂",
        img:"./pokemons/goldeen.gif",
        tipo: ["Água"],
        descricao: "Suas barbatanas dorsais, peitorais e caudais ondulam elegantemente na água. É por isso que é conhecido como o Dançarino da Água."
    },
{
        nro:118,
        som: "./Sons/goldeen.mp3",
        nome: "Goldeen",
        genero: "♀",
        img:"./pokemons/goldeen.gif",
        tipo: ["Água"],
        descricao: "Suas barbatanas dorsais, peitorais e caudais ondulam elegantemente na água. É por isso que é conhecido como o Dançarino da Água."
    },
{
        nro:119,
        som: "./Sons/seaking.mp3",
        nome: "Seaking",
        genero: "♂",
        img:"./pokemons/seaking.gif",
        tipo: ["Água"],
        descricao: "No outono, seu corpo fica mais gorduroso ao se preparar para propor a um companheiro. Adquire cores bonitas."
    },
{
        nro:119,
        som: "./Sons/seaking.mp3",
        nome: "Seaking",
        genero: "♀",
        img:"./pokemons/seaking.gif",
        tipo: ["Água"],
        descricao: "No outono, seu corpo fica mais gorduroso ao se preparar para propor a um companheiro. Adquire cores bonitas."
    },
{
        nro:120,
        som: "./Sons/staryu.mp3",
        nome: "Staryu",
        genero: "",
        img:"./pokemons/staryu.gif",
        tipo: ["Água"],
        descricao: "Se você visitar uma praia no final do verão, poderá ver grupos de Staryus se iluminando em um ritmo constante."
    },

{
        nro:121,
        som: "./Sons/starmie.mp3",
        nome: "Starmie",
        genero: "",
        img:"./pokemons/starmie.gif",
        tipo: ["Água", "Psíquico"],
        descricao: "Este Pokémon tem um órgão conhecido como núcleo. O órgão brilha em sete cores quando Starmie está liberando seus poderosos poderes psíquicos."
    },

{
        nro:122,
        som: "./Sons/mrmime.mp3",
        nome: "Mr. Mime",
        genero: "♂",
        img:"./pokemons/mrmime.gif",
        tipo: ["Psíquico", "Fadas"],
        descricao: "A largura de suas mãos pode não ser coincidência – muitos cientistas acreditam que suas palmas se tornaram maiores especificamente para a mímica."
    },
{
        nro:122,
        som: "./Sons/mrmime.mp3",
        nome: "Mr. Mime",
        genero: "♀",
        img:"./pokemons/mrmime.gif",
        tipo: ["Psíquico", "Fadas"],
        descricao: "A largura de suas mãos pode não ser coincidência – muitos cientistas acreditam que suas palmas se tornaram maiores especificamente para a mímica."
    },
{
        nro:123,
        som: "./Sons/scyther.mp3",
        nome: "Scyther",
        genero: "♂",
        img:"./pokemons/scyther.gif",
        tipo: ["Incomodar", "Vôo"],
        descricao: "À medida que Scyther luta mais e mais batalhas, suas foices ficam cada vez mais afiadas. Com um único corte, Scyther pode derrubar uma árvore enorme."
    },
{
        nro:123,
        som: "./Sons/scyther.mp3",
        nome: "Scyther",
        genero: "♀",
        img:"./pokemons/scyther.gif",
        tipo: ["Incomodar", "Vôo"],
        descricao: "À medida que Scyther luta mais e mais batalhas, suas foices ficam cada vez mais afiadas. Com um único corte, Scyther pode derrubar uma árvore enorme."
    },
{
        nro:124,
        som: "./Sons/jynx.mp3",
        nome: "Jynx",
        genero: "♀",
        img:"./pokemons/jynx.gif",
        tipo: ["Gelo", "Psíquico"],
        descricao: "Em certas partes de Galar, Jynx já foi temida e adorada como a Rainha do Gelo."
    },
{
        nro:124,
        som: "./Sons/jynx.mp3",
        nome: "Jynx",
        genero: "♀",
        img:"./pokemons/jynx.gif",
        tipo: ["Gelo", "Psíquico"],
        descricao: "Em certas partes de Galar, Jynx já foi temida e adorada como a Rainha do Gelo."
    },
{
        nro:125,
        som: "./Sons/electabuzz.mp3",
        nome: "Electabuzz",
        genero: "♂",
        img:"./pokemons/electabuzz.gif",
        tipo: ["Elétrico"],
        descricao: "Muitas usinas de energia mantêm Pokémon do tipo terra por perto como uma defesa contra Electabuzz que vem em busca de eletricidade."
    },
{
        nro:125,
        som: "./Sons/electabuzz.mp3",
        nome: "Electabuzz",
        genero: "♀",
        img:"./pokemons/electabuzz.gif",
        tipo: ["Elétrico"],
        descricao: "Muitas usinas de energia mantêm Pokémon do tipo terra por perto como uma defesa contra Electabuzz que vem em busca de eletricidade."
    },
{
        nro:126,
        som: "./Sons/magmar.mp3",
        nome: "Magmar",
        genero: "♂",
        img:"./pokemons/magmar.gif",
        tipo: ["Incêndio"],
        descricao: "Magmar despacha sua presa com fogo. Mas ele se arrepende desse hábito quando percebe que queimou sua presa pretendida em uma batata frita carbonizada."
    },
{
        nro:126,
        som: "./Sons/magmar.mp3",
        nome: "Magmar",
        genero: "♀",
        img:"./pokemons/magmar.gif",
        tipo: ["Incêndio"],
        descricao: "Magmar despacha sua presa com fogo. Mas ele se arrepende desse hábito quando percebe que queimou sua presa pretendida em uma batata frita carbonizada."
    },
{
        nro:127,
        som: "./Sons/pinsir.mp3",
        nome: "Pinsir",
        genero: "♂",
        img:"./pokemons/pinsir.gif",
        tipo: ["Incomodar"],
        descricao: "Esses Pokémon julgam uns aos outros com base em pinças. Pinças mais grossas e impressionantes aumentam a popularidade com o sexo oposto."
    },
{
        nro:127,
        som: "./Sons/pinsir.mp3",
        nome: "Pinsir",
        genero: "♀",
        img:"./pokemons/pinsir.gif",
        tipo: ["Incomodar"],
        descricao: "Esses Pokémon julgam uns aos outros com base em pinças. Pinças mais grossas e impressionantes aumentam a popularidade com o sexo oposto."
    },
{
        nro:128,
        som: "./Sons/tauros.mp3",
        nome: "Tauros",
        genero: "♂",
        img:"./pokemons/tauros.gif",
        tipo: ["Normal"],
        descricao: "Quando Tauros começa a se chicotear com suas caudas, é um aviso de que o Pokémon está prestes a atacar com uma velocidade impressionante."
    },

{
        nro:129,
        som: "./Sons/magikarp.mp3",
        nome: "Magikarp",
        genero: "♂",
        img:"./pokemons/magikarp.gif",
        tipo: ["Água"],
        descricao: "É praticamente inútil em termos de potência e velocidade. É o Pokémon mais fraco e patético do mundo."
    },
{
        nro:129,
        som: "./Sons/magikarp.mp3",
        nome: "Magikarp",
        genero: "♀",
        img:"./pokemons/magikarp.gif",
        tipo: ["Água"],
        descricao: "É praticamente inútil em termos de potência e velocidade. É o Pokémon mais fraco e patético do mundo."
    },
{
        nro:130,
        som: "./Sons/gyarados.mp3",
        nome: "Gyarados",
        genero: "♂",
        img:"./pokemons/gyarados.gif",
        tipo: ["Água", "Vôo"],
        descricao: "Tem uma natureza extremamente agressiva. O Hyper Beam que dispara de sua boca incinera totalmente todos os alvos."
    },
{
        nro:130,
        som: "./Sons/gyarados.mp3",
        nome: "Gyarados",
        genero: "♀",
        img:"./pokemons/gyarados.gif",
        tipo: ["Água", "Vôo"],
        descricao: "Tem uma natureza extremamente agressiva. O Hyper Beam que dispara de sua boca incinera totalmente todos os alvos."
    },
{
        nro:131,
        som: "./Sons/lapras.mp3",
        nome: "Lapras",
        genero: "♂",
        img:"./pokemons/lapras.gif",
        tipo: ["Água", "Gelo"],
        descricao: "Um Pokémon inteligente e bondoso, ele desliza pela superfície do mar enquanto sua bela música ecoa ao seu redor."
    },
{
        nro:131,
        som: "./Sons/lapras.mp3",
        nome: "Lapras",
        genero: "♀",
        img:"./pokemons/lapras.gif",
        tipo: ["Água", "Gelo"],
        descricao: "Um Pokémon inteligente e bondoso, ele desliza pela superfície do mar enquanto sua bela música ecoa ao seu redor."
    },
{
        nro:132,
        som: "./Sons/ditto.mp3",
        nome: "Ditto",
        genero: "",
        img:"./pokemons/ditto.gif",
        tipo: ["Normal"],
        descricao: "Ele pode reconstituir toda a sua estrutura celular para se transformar no que vê, mas volta ao normal quando relaxa."
    },

{
        nro:133,
        som: "./Sons/eevee.mp3",
        nome: "Eevee",
        genero: "♂",
        img:"./pokemons/eevee.gif",
        tipo: ["Normal"],
        descricao: "Tem a capacidade de alterar a composição do seu corpo para se adequar ao ambiente circundante."
    },
{
        nro:133,
        som: "./Sons/eevee.mp3",
        nome: "Eevee",
        genero: "♀",
        img:"./pokemons/eevee.gif",
        tipo: ["Normal"],
        descricao: "Tem a capacidade de alterar a composição do seu corpo para se adequar ao ambiente circundante."
    },
{
        nro:134,
        som: "./Sons/vaporeon.mp3",
        nome: "Vaporeon",
        genero: "♂",
        img:"./pokemons/vaporeon.gif",
        tipo: ["Água"],
        descricao: "Quando as barbatanas do Vaporeon começam a vibrar, é sinal de que a chuva virá dentro de algumas horas."
    },
{
        nro:134,
        som: "./Sons/vaporeon.mp3",
        nome: "Vaporeon",
        genero: "♀",
        img:"./pokemons/vaporeon.gif",
        tipo: ["Água"],
        descricao: "Quando as barbatanas do Vaporeon começam a vibrar, é sinal de que a chuva virá dentro de algumas horas."
    },
{
        nro:135,
        som: "./Sons/jolteon.mp3",
        nome: "Jolteon",
        genero: "♂",
        img:"./pokemons/jolteon.gif",
        tipo: ["Elétrico"],
        descricao: "Se estiver irritado ou assustado, a pele por todo o corpo se eriça como agulhas afiadas que perfuram os inimigos."
    },
{
        nro:135,
        som: "./Sons/jolteon.mp3",
        nome: "Jolteon",
        genero: "♀",
        img:"./pokemons/jolteon.gif",
        tipo: ["Elétrico"],
        descricao: "Se estiver irritado ou assustado, a pele por todo o corpo se eriça como agulhas afiadas que perfuram os inimigos."
    },
{
        nro:136,
        som: "./Sons/flareon.mp3",
        nome: "Flareon",
        genero: "♂",
        img:"./pokemons/flareon.gif",
        tipo: ["Incêndio", ""],
        descricao: "Depois de armazenar calor suficiente, a temperatura corporal deste Pokémon pode atingir até 1.700 graus Fahrenheit."
    },
{
        nro:136,
        som: "./Sons/flareon.mp3",
        nome: "Flareon",
        genero: "♀",
        img:"./pokemons/flareon.gif",
        tipo: ["Incêndio", ""],
        descricao: "Depois de armazenar calor suficiente, a temperatura corporal deste Pokémon pode atingir até 1.700 graus Fahrenheit."
    },
{
        nro:137,
        som: "./Sons/porygon.mp3",
        nome: "Porygon",
        genero: "",
        img:"./pokemons/porygon.gif",
        tipo: ["Normal"],
        descricao: "Tecnologia de ponta foi usada para criar Porygon. Foi o primeiro Pokémon artificial a ser criado via programação de computador."
    },

{
        nro:138,
        som: "./Sons/omanyte.mp3",
        nome: "Omanyte",
        genero: "♂",
        img:"./pokemons/omanyte.gif",
        tipo: ["Pedra", "Água"],
        descricao: "Como alguns omanitas conseguem escapar após serem restaurados ou são soltos na natureza por pessoas, essa espécie está se tornando um problema."
    },
{
        nro:138,
        som: "./Sons/omanyte.mp3",
        nome: "Omanyte",
        genero: "♀",
        img:"./pokemons/omanyte.gif",
        tipo: ["Pedra", "Água"],
        descricao: "Como alguns omanitas conseguem escapar após serem restaurados ou são soltos na natureza por pessoas, essa espécie está se tornando um problema."
    },
{
        nro:139,
        som: "./Sons/omastar.mp3",
        nome: "Omastar",
        genero: "♂",
        img:"./pokemons/omastar.gif",
        tipo: ["Pedra", "Água"],
        descricao: "Pesado por uma concha grande e pesada, Omastar não conseguia se mover muito rápido. Alguns dizem que foi extinto porque não conseguia pegar comida."
    },
{
        nro:139,
        som: "./Sons/omastar.mp3",
        nome: "Omastar",
        genero: "♀",
        img:"./pokemons/omastar.gif",
        tipo: ["Pedra", "Água"],
        descricao: "Pesado por uma concha grande e pesada, Omastar não conseguia se mover muito rápido. Alguns dizem que foi extinto porque não conseguia pegar comida."
    },
{
        nro:140,
        som: "./Sons/kabuto.mp3",
        nome: "Kabuto",
        genero: "♂",
        img:"./pokemons/kabuto.gif",
        tipo: ["Pedra", "Água"],
        descricao: "Esta espécie está quase totalmente extinta. Kabuto muda a cada três dias, tornando suas conchas cada vez mais duras."
    },
{
        nro:140,
        som: "./Sons/kabuto.mp3",
        nome: "Kabuto",
        genero: "♀",
        img:"./pokemons/kabuto.gif",
        tipo: ["Pedra", "Água"],
        descricao: "Esta espécie está quase totalmente extinta. Kabuto muda a cada três dias, tornando suas conchas cada vez mais duras."
    },
{
        nro:141,
        som: "./Sons/kabutops.mp3",
        nome: "Kabutops",
        genero: "♂",
        img:"./pokemons/kabutops.gif",
        tipo: ["Pedra", "Água"],
        descricao: "Kabutops corta sua presa e suga os fluidos. As partes do corpo descartadas se tornam comida para outros Pokémon."
    },
{
        nro:141,
        som: "./Sons/kabutops.mp3",
        nome: "Kabutops",
        genero: "♀",
        img:"./pokemons/kabutops.gif",
        tipo: ["Pedra", "Água"],
        descricao: "Kabutops corta sua presa e suga os fluidos. As partes do corpo descartadas se tornam comida para outros Pokémon."
    },
{
        nro:142,
        som: "./Sons/aerodactyl.mp3",
        nome: "Aerodactyl",
        genero: "♂",
        img:"./pokemons/aerodactyl.gif",
        tipo: ["Pedra", "Vôo"],
        descricao: "Este é um Pokémon feroz dos tempos antigos. Aparentemente, mesmo a tecnologia moderna é incapaz de produzir um espécime perfeitamente restaurado."
    },
{
        nro:142,
        som: "./Sons/aerodactyl.mp3",
        nome: "Aerodactyl",
        genero: "♀",
        img:"./pokemons/aerodactyl.gif",
        tipo: ["Pedra", "Vôo"],
        descricao: "Este é um Pokémon feroz dos tempos antigos. Aparentemente, mesmo a tecnologia moderna é incapaz de produzir um espécime perfeitamente restaurado."
    },
{
        nro:143,
        som: "./Sons/snorlax.mp3",
        nome: "Snorlax",
        genero: "♂",
        img:"./pokemons/snorlax.gif",
        tipo: ["Normal"],
        descricao: "Ele não fica satisfeito a menos que coma mais de 880 quilos de comida todos os dias. Quando termina de comer, ele adormece prontamente."
    },
{
        nro:143,
        som: "./Sons/snorlax.mp3",
        nome: "Snorlax",
        genero: "♀",
        img:"./pokemons/snorlax.gif",
        tipo: ["Normal"],
        descricao: "Ele não fica satisfeito a menos que coma mais de 880 quilos de comida todos os dias. Quando termina de comer, ele adormece prontamente."
    },
{
        nro:144,
        som: "./Sons/articuno.mp3",
        nome: "Articuno",
        genero: "",
        img:"./pokemons/articuno.gif",
        tipo: ["Gelo", "Vôo"],
        descricao: "Dizem que as belas asas azuis deste Pokémon são feitas de gelo. Articuno voa sobre montanhas nevadas, sua longa cauda esvoaçando atrás dele."
    },

{
        nro:145,
        som: "./Sons/zapdos.mp3",
        nome: "Zapdos",
        genero: "",
        img:"./pokemons/zapdos.gif",
        tipo: ["Elétrico", "Vôo"],
        descricao: "Este Pokémon tem controle total sobre a eletricidade. Há histórias de Zapdos aninhando-se nas profundezas escuras de nuvens negras como breu."
    },

{
        nro:146,
        som: "./Sons/moltres.mp3",
        nome: "Moltres",
        genero: "",
        img:"./pokemons/moltres.gif",
        tipo: ["Incêndio", "Vôo"],
        descricao: "É um dos Pokémon pássaros lendários. Quando Moltres bate suas asas flamejantes, elas brilham com um brilho vermelho deslumbrante."
    },

{
        nro:147,
        som: "./Sons/dratini.mp3",
        nome: "Dratini",
        genero: "♂",
        img:"./pokemons/dratini.gif",
        tipo: ["Dragão"],
        descricao: "Dratini mora perto de corpos de água que fluem rapidamente, como as piscinas de cachoeiras. À medida que cresce, Dratini muda de pele muitas vezes."
    },
{
        nro:147,
        som: "./Sons/dratini.mp3",
        nome: "Dratini",
        genero: "♀",
        img:"./pokemons/dratini.gif",
        tipo: ["Dragão"],
        descricao: "Dratini mora perto de corpos de água que fluem rapidamente, como as piscinas de cachoeiras. À medida que cresce, Dratini muda de pele muitas vezes."
    },
{
        nro:148,
        som: "./Sons/dragonair.mp3",
        nome: "Dragonair",
        genero: "♂",
        img:"./pokemons/dragonair.gif",
        tipo: ["Dragão"],
        descricao: "Este Pokémon vive em oceanos e lagos intocados. Ele pode controlar o clima e usa esse poder para voar no céu, cavalgando no vento."
    },
{
        nro:148,
        som: "./Sons/dragonair.mp3",
        nome: "Dragonair",
        genero: "♀",
        img:"./pokemons/dragonair.gif",
        tipo: ["Dragão"],
        descricao: "Este Pokémon vive em oceanos e lagos intocados. Ele pode controlar o clima e usa esse poder para voar no céu, cavalgando no vento."
    },
{
        nro:149,
        som: "./Sons/dragonite.mp3",
        nome: "Dragonite",
        genero: "♂",
        img:"./pokemons/dragonite.gif",
        tipo: ["Dragão", "Vôo"],
        descricao: "É um Pokémon de bom coração. Se detectar uma pessoa ou Pokémon se afogando, Dragonite simplesmente deve ajudá-los."
    },
{
        nro:149,
        som: "./Sons/dragonite.mp3",
        nome: "Dragonite",
        genero: "♀",
        img:"./pokemons/dragonite.gif",
        tipo: ["Dragão", "Vôo"],
        descricao: "É um Pokémon de bom coração. Se detectar uma pessoa ou Pokémon se afogando, Dragonite simplesmente deve ajudá-los."
    },
{
        nro:150,
        som: "./Sons/mewtwo.mp3",
        nome: "Mewtwo",
        genero: "",
        img:"./pokemons/mewtwo.gif",
        tipo: ["Psíquico"],
        descricao: "Seu DNA é quase o mesmo do Mew. No entanto, seu tamanho e disposição são muito diferentes."
    },

{
        nro:151,
        som: "./Sons/mew.mp3",
        nome: "Mew",
        genero: "",
        img:"./pokemons/mew.gif",
        tipo: ["Psíquico"],
        descricao: "Quando visto através de um microscópio, o cabelo curto, fino e delicado deste Pokémon pode ser visto."
    }
]; 









