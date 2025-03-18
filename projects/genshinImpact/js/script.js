//Array de Descrição de Personagens

const personagens = [
    //Natlan
    {
        nome: "MUALANI",
        img: 'mualani.png',
        tipo: 'Hydro.png',
        descricao: "Uma renomada guia de nova geração do Povo das Termas. Se você quer conhecer Natlan, ela é a sua melhor companheira.",
        descEua: "A renowned next-generation guide of the People of the Hot Springs. If you want to explore Natlan, she is your best companion.",
        descEsp: "Una renombrada guía de nueva generación del Pueblo de las Termas. Si quieres conocer Natlan, ella es tu mejor compañera.",
        descChn: "一位著名的新一代温泉族向导。如果你想了解纳特兰，她是你最好的伙伴。",
        descFra: "Une guide renommée de nouvelle génération du Peuple des Thermes. Si vous voulez découvrir Natlan, elle est votre meilleure compagne.",
        audioEn: "mualaniEN.mp3",
        audioJp: "mualaniJP.mp3",
    }, 
    {
        nome: "KACHINA",
        img: 'kachina.png',
        tipo: 'Geo.png',
        descricao: "Uma jovem guerreira dos Filhos dos Ecos, condecorada com o Nome Antigo 'Uthabiti'. É uma jovem garota otimista que nunca para de crescer no meio das adversidades.",
        descEua: "A young warrior of the Children of Echoes, decorated with the Ancient Name 'Uthabiti'. She is an optimistic young girl who never stops growing amidst adversity.",
        descEsp: "Una joven guerrera de los Hijos de los Ecos, condecorada con el Nombre Antiguo 'Uthabiti'. Es una joven optimista que nunca deja de crecer en medio de las adversidades.",
        descChn: "一位来自回声之子的年轻战士，荣获古老的名字'乌塔比提'。她是一个乐观的年轻女孩，在逆境中不断成长。",
        descFra: "Une jeune guerrière des Enfants des Échos, décorée du Nom Ancien 'Uthabiti'. C'est une jeune fille optimiste qui ne cesse de grandir au milieu des adversités.",
        audioEn: "kachinaEN.mp3",
        audioJp: "kachinaJP.mp3",
    },
    {
        nome: "KINICH",
        img: 'kinich.png',
        tipo: 'Dendro.png',
        descricao: "Um caçador de Saurianos que viaja com o autoproclamado 'Dragão Soberano'. Só aceita comissões pouco populares, e é um especialista em calcular o preço das coisas.",
        descEua: "A Saurian hunter who travels with the self-proclaimed 'Sovereign Dragon'. He only accepts unpopular commissions and is an expert in calculating the price of things.",
        descEsp: "Un cazador de Saurianos que viaja con el autoproclamado 'Dragón Soberano'. Solo acepta comisiones poco populares y es un experto en calcular el precio de las cosas.",
        descChn: "一位与自称为‘主权龙’的伙伴一起旅行的萨乌里安猎人。他只接受不太受欢迎的委托，是一位精通计算事物价格的专家。",
        descFra: "Un chasseur de Saurians qui voyage avec le soi-disant 'Dragon Souverain'. Il n'accepte que des commissions peu populaires et est un expert pour calculer le prix des choses.",
        audioEn: "kinichEN.mp3",
        audioJp: "kinichJP.mp3",
    },
    {
        nome: "XILONEN",
        img: 'Xilonen.png',
        tipo: 'Geo.png',
        descricao: "Uma ferreira de Nanatzcayan, ela é especialmente habilidosa em encontrar um bom equilíbrio entre as pesadas responsabilidades de seu trabalho e viver bem.",
        descEua: "A blacksmith from Nanatzcayan, she is especially skilled at finding a good balance between the heavy responsibilities of her work and living well.",
        descEsp: "Una herrera de Nanatzcayan, ella es especialmente hábil en encontrar un buen equilibrio entre las pesadas responsabilidades de su trabajo y vivir bien.",
        descChn: "来自纳纳兹卡扬的铁匠，她特别擅长在繁重的工作责任和良好的生活之间找到平衡。",
        descFra: "Une forgeronne de Nanatzcayan, elle est particulièrement habile à trouver un bon équilibre entre les lourdes responsabilités de son travail et une vie bien vécue.",
        audioEn: "xilonenEN.mp3",
        audioJp: "xilonenJP.mp3",
    },
    {
        nome: "CHASCA",
        img: 'chasca.png',
        tipo: 'Anemo.png',
        descricao: "A Pacificadora de Tlalocan, seja nos 'conflitos' provocados por humanos ou Saurianos, seja 'mediando' com palavras ou munição, encerra todos os conflitos aqui.",
        descEua: "The Peacemaker of Tlalocan, whether in 'conflicts' caused by humans or Saurians, whether 'mediating' with words or ammunition, ends all conflicts here.",
        descEsp: "La Pacificadora de Tlalocan, ya sea en 'conflictos' provocados por humanos o Saurianos, ya sea 'mediando' con palabras o munición, pone fin a todos los conflictos aquí.",
        descChn: "特拉洛坎的和平使者，无论是人类还是萨乌里安引发的'冲突'，无论是用言语还是弹药'调解'，她都在这里结束所有冲突。",
        descFra: "La Pacifiqueuse de Tlalocan, que ce soit dans les 'conflits' provoqués par les humains ou les Saurians, que ce soit en 'médiant' avec des mots ou des munitions, met fin à tous les conflits ici.",
        audioEn: "chascaEN.mp3",
        audioJp: "chascaJP.mp3",
    },
    {
        nome: "ORORON",
        img: 'ororon.png',
        tipo: 'Electro.png',
        descricao: "Dos 'Mestres do Vento Noturno', vem esse jovem de expressão sempre serena. Para capturá-lo, será preciso um bom esforço.",
        descEua: "From the 'Masters of the Night Wind', comes this young man with a always serene expression. Capturing him will require a good effort.",
        descEsp: "De los 'Maestros del Viento Nocturno', viene este joven de expresión siempre serena. Para capturarlo, será necesario un buen esfuerzo.",
        descChn: "来自'夜风大师'的这位年轻人，面容总是平静。要捕捉他，将需要付出很大的努力。",
        descFra: "Des 'Maîtres du Vent Nocturne', vient ce jeune homme à l'expression toujours sereine. Pour le capturer, il faudra un grand effort.",
        audioEn: "ororonEN.mp3",
        audioJp: "ororonJP.mp3",
    },
    {
        nome: "CITLALI",
        img: 'citlali.png',
        tipo: 'Cryo.png',
        descricao: "A lendária xamã dos Mestres do Vento Noturno, conhecida em toda Natlan como a eminente 'Vovó Itztli'. Não é alguém com quem se deve brincar, mas também é a primeira pessoa a quem todos recorrem quando surgem problemas.",
        descEua: "The legendary shaman of the Masters of the Night Wind, known throughout Natlan as the eminent 'Grandma Itztli'. She is not someone to be trifled with, but she is also the first person everyone turns to when problems arise.",
        descEsp: "La legendaria chamana de los Maestros del Viento Nocturno, conocida en todo Natlan como la eminente 'Abuela Itztli'. No es alguien con quien se deba jugar, pero también es la primera persona a la que todos recurren cuando surgen problemas.",
        descChn: "夜风大师的传奇萨满，在整个纳特兰以杰出的'祖母伊兹特利'而闻名。她不是一个可以随便开玩笑的人，但也是每当问题出现时，大家首先求助的人。",
        descFra: "La légendaire chamane des Maîtres du Vent Nocturne, connue à travers Natlan sous le nom éminent de 'Grand-mère Itztli'. Ce n'est pas quelqu'un avec qui on doit plaisanter, mais c'est aussi la première personne vers qui tout le monde se tourne lorsque des problèmes surviennent.",
        audioEn: "citlaliEN.mp3",
        audioJp: "citlaliJP.mp3",
    },
    {
        nome: "MAVUIKA",
        img: 'mavuika.png',
        tipo: 'Pyro.png',
        descricao: "Arconte e líder de Natlan, a chama eterna que concede esperança aos vivos e o fogo purificador que faz tremer os perversos.",
        descEua: "Archon and leader of Natlan, the eternal flame that grants hope to the living and the purifying fire that makes the wicked tremble.",
        descEsp: "Arconte y líder de Natlan, la llama eterna que concede esperanza a los vivos y el fuego purificador que hace temblar a los perversos.",
        descChn: "纳特兰的阿尔孔和领袖，永恒的火焰给予活人希望，净化的火焰使邪恶者颤抖。",
        descFra: "Archonte et leader de Natlan, la flamme éternelle qui accorde l'espoir aux vivants et le feu purificateur qui fait trembler les pervers.",
        audioEn: "citlaliEN.mp3",
        audioJp: "citlaliJP.mp3",
    },
];

//Defini o personagem atual

let personagemAtual = 0;

//Elementos para mudança de personagem

const descRegiao = document.querySelector('.contentRegiao p');
const regiao = document.querySelector('.contentRegiao h1');

//Verifica a linguagem do site e adiciona a descrição para determinada linguagem

const langDesc = () => {
    if (localStorage.getItem('lang') == 'eu') {
        descricao.innerHTML = personagens[personagemAtual].descEua;
    }else if (localStorage.getItem('lang') == 'es') {
        descricao.innerHTML = personagens[personagemAtual].descEsp;
    }else if (localStorage.getItem('lang') == 'fr') {
        descricao.innerHTML = personagens[personagemAtual].descFra;
    }else if (localStorage.getItem('lang') == 'ch') {
        descricao.innerHTML = personagens[personagemAtual].descChn;
    }else {
        localStorage.setItem('lang', 'br');
        descricao.innerHTML = personagens[personagemAtual].descricao;
    }
}

//Array de Descrição de Personagens

const regioes = [
    {
        nomeRegiao: 'MONDSTADT',
        videoRegiao: 'mondstadt.mp4',
        iconeRegiao: 'Mondstadt.png',
        desc: 'A capital da liberdade, ao nordeste de Teyvat. Entre cadeias de montanhas e as vastas planícies, o vento da liberdade traz consigo o aroma de Dandelion e acaricia o lago de Cidra, trazendo à cidade, no meio do lago, a bênção de Barbatos.',
        descEua: 'The capital of freedom, located in the northeast of Teyvat. Among mountain ranges and vast plains, the wind of freedom carries the scent of Dandelion and caresses Cider Lake, bringing the blessing of Barbatos to the city in the middle of the lake.',
        descEsp: 'La capital de la libertad, ubicada en el noreste de Teyvat. Entre cadenas montañosas y vastas llanuras, el viento de la libertad trae consigo el aroma de Dandelion y acaricia el Lago de Sidra, llevando la bendición de Barbatos a la ciudad en medio del lago.',
        descFra: 'La capitale de la liberté, située au nord-est de Teyvat. Parmi les chaînes de montagnes et les vastes plaines, le vent de la liberté porte le parfum du Pissenlit et caresse le Lac de Cidre, apportant la bénédiction de Barbatos à la ville au milieu du lac.',
        descChn: '自由之都，位于提瓦特的东北部。在群山与广阔平原之间，自由之风带来了蒲公英的芬芳，轻拂着苹果酒湖，将巴巴托斯的祝福带到湖中央的城市。',
    },
    {
        nomeRegiao: 'LIYUE',
        videoRegiao: 'liyue.mp4',
        iconeRegiao: 'liyue.png',
        desc: 'Um porto próspero localizado ao leste de Teyvat. Liyue está localizada entre o sopé da Floresta de Pedra, das planícies grossas e um litoral cheio de vida, com mudanças sazonais claramente definidas e coloridas. Quantos presentes do Deus da Pedra estão escondidas entre suas montanhas?',
        descEua: 'A prosperous port located in the east of Teyvat. Liyue is situated between the foothills of the Stone Forest, vast plains, and a lively coastline, with clearly defined and colorful seasonal changes. How many gifts from the God of Stone are hidden among its mountains?',
        descEsp: 'Un próspero puerto ubicado al este de Teyvat. Liyue se encuentra entre las estribaciones del Bosque de Piedra, extensas llanuras y una costa llena de vida, con cambios estacionales claramente definidos y coloridos. ¿Cuántos regalos del Dios de la Piedra están escondidos entre sus montañas?',
        descFra: 'Un port prospère situé à l’est de Teyvat. Liyue est nichée entre les contreforts de la Forêt de Pierre, de vastes plaines et un littoral animé, avec des changements saisonniers clairement définis et colorés. Combien de cadeaux du Dieu de la Pierre sont cachés parmi ses montagnes ?',
        descChn: '位于提瓦特东部的繁荣港口。璃月坐落在石林的山麓、广阔的平原和充满生机的海岸之间，四季分明，色彩斑斓。究竟有多少岩神的馈赠隐藏在这些群山之中呢？',
    },
    {
        nomeRegiao: 'INAZUMA',
        videoRegiao: 'inazuma.mp4',
        iconeRegiao: 'inazuma.png',
        desc: 'Um porto próspero localizado ao leste de Teyvat. Liyue está localizada entre o sopé da Floresta de Pedra, das planícies grossas e um litoral cheio de vida, com mudanças sazonais claramente definidas e coloridas. Quantos presentes do Deus da Pedra estão escondidas entre suas montanhas?',
        descEua: 'Isolated islands in the Far East of Teyvat. Overcome endless storms, step onto the island of Sakura blossoms, and witness in the steep cliffs and dense forests the Eternity pursued by the Almighty Narukami Ogosho.',
        descEsp: 'Islas aisladas en el Lejano Oriente de Teyvat. Supera tormentas interminables, pisa la isla de las flores de Sakura y presencia en los acantilados escarpados y densos bosques la Eternidad perseguida por la Todopoderosa Narukami Ogosho.',
        descFra: 'Îles isolées à l’Extrême-Orient de Teyvat. Surmontez des tempêtes sans fin, posez le pied sur l’île des fleurs de Sakura et témoignez, sur les falaises escarpées et dans les forêts denses, de l’Éternité poursuivie par la Toute-Puissante Narukami Ogosho.',
        descChn: '位于提瓦特远东的孤立群岛。穿越无尽的风暴，踏上樱花盛开的岛屿，在陡峭的悬崖与茂密的森林中，见证全能的鸣神大御所所追求的永恒。',        
    },
    {
        nomeRegiao: 'SUMERU',
        videoRegiao: 'sumeru.mp4',
        iconeRegiao: 'sumeru.png',
        desc: 'Capital da Cidade dos Eruditos Localizada no Oeste de Teyvat. Uma nação exótica com florestas tropicais exuberantes e desertos áridos coexistindo simultaneamente, onde inúmeros frutos da sabedoria crescem e murcham. Seja atravessando as florestas até os degraus da Cidade dos Eruditos ou cavando as ruínas nos confins do deserto, Viajantes de longe poderão obter conhecimentos valiosos aqui.',
        descEua: 'Capital of the City of Scholars, located in the West of Teyvat. An exotic nation where lush rainforests and arid deserts coexist simultaneously, where countless fruits of wisdom grow and wither. Whether traversing the forests to the steps of the City of Scholars or exploring the ruins in the depths of the desert, Travelers from afar can gain valuable knowledge here.',
        descEsp: 'Capital de la Ciudad de los Eruditos, ubicada en el Oeste de Teyvat. Una nación exótica donde exuberantes selvas tropicales y áridos desiertos coexisten simultáneamente, donde innumerables frutos de la sabiduría crecen y se marchitan. Ya sea atravesando los bosques hasta los escalones de la Ciudad de los Eruditos o explorando las ruinas en los confines del desierto, los Viajeros de lejos pueden obtener conocimientos valiosos aquí.',
        descFra: 'Capitale de la Cité des Érudits, située à l’Ouest de Teyvat. Une nation exotique où forêts tropicales luxuriantes et déserts arides coexistent simultanément, où d’innombrables fruits de sagesse poussent et se fanent. Que ce soit en traversant les forêts jusqu’aux marches de la Cité des Érudits ou en explorant les ruines aux confins du désert, les Voyageurs venus de loin pourront acquérir de précieuses connaissances ici.',
        descChn: '学者之城的首都，位于提瓦特西部。这是一个奇异的国度，茂密的热带雨林与干旱的沙漠共存，无数智慧的果实在这里生长和凋零。无论是穿越森林抵达学者之城的阶梯，还是深入沙漠尽头的遗迹，远道而来的旅行者都能在此获得宝贵的知识。',
    },
    {
        nomeRegiao: 'FONTAINE',
        videoRegiao: 'fontaine.mp4',
        iconeRegiao: 'fontaine.png',
        desc: 'Um mar sobre as terras localizado no centro de Teyvat. Ao seguir a direção das correntes puras, atravessando a natureza selvagem, as profundezas das florestas e a vastidão do mar de areia, é possível chegar à origem de todas as águas do continente. No topo da cachoeira, nas profundezas da capital sobre o mar terrestre, histórias nunca antes ouvidas e lendas há muito esquecidas anseiam por Viajantes como uma terra perdida submersa no fundo do mar.',
        descEua: 'A sea above the lands, located in the center of Teyvat. By following the direction of pure currents, traversing the wilderness, the depths of forests, and the vastness of the sea of sand, one can reach the origin of all the waters on the continent. At the top of the waterfall, in the depths of the capital above the terrestrial sea, unheard stories and long-forgotten legends await Travelers like a lost land submerged in the depths of the ocean.',
        descEsp: 'Un mar sobre las tierras, ubicado en el centro de Teyvat. Siguiendo la dirección de las corrientes puras, atravesando la naturaleza salvaje, las profundidades de los bosques y la inmensidad del mar de arena, se puede llegar al origen de todas las aguas del continente. En la cima de la cascada, en las profundidades de la capital sobre el mar terrestre, historias nunca antes oídas y leyendas olvidadas desde hace mucho tiempo esperan a los Viajeros, como una tierra perdida sumergida en las profundidades del océano.',
        descFra: 'Une mer au-dessus des terres, située au centre de Teyvat. En suivant la direction des courants purs, en traversant la nature sauvage, les profondeurs des forêts et l’immensité de la mer de sable, on peut atteindre l’origine de toutes les eaux du continent. Au sommet de la cascade, dans les profondeurs de la capitale au-dessus de la mer terrestre, des histoires jamais entendues et des légendes oubliées depuis longtemps attendent les Voyageurs, comme une terre perdue submergée au fond de l’océan.',
        descChn: '一片位于提瓦特中心的陆上之海。沿着纯净水流的方向，穿越荒野、森林深处和广袤的沙海，便可抵达大陆所有水源的起点。在瀑布之巅，在陆上海洋深处，前所未闻的故事和被遗忘已久的传说，正如沉没于深海之中的失落之地，静待旅行者们的到来。',        
    },
    {
        nomeRegiao: 'NATLAN',
        videoRegiao: 'natlan.mp4',
        iconeRegiao: 'natlan.webp',
        desc: 'Localizada no oeste do continente de Teyvat, a Nação dos Juramentos. Seguindo a orientação da chama, atravesse longos desfiladeiros e vales, até a terra onde as tochas ardentes brilham intensamente, onde todas as chamas se convergem. Nesta vasta planície incendiada por dragões, testemunhe o fim da antiga guerra junto aos guerreiros que resistem à escuridão.',
        descEua: 'Located in the west of the Teyvat continent, the Nation of Oaths. Following the guidance of the flame, cross long canyons and valleys to the land where blazing torches shine brightly, where all flames converge. In this vast plain set ablaze by dragons, witness the end of the ancient war alongside warriors who resist the darkness.',
        descEsp: 'Ubicada en el oeste del continente de Teyvat, la Nación de los Juramentos. Siguiendo la guía de la llama, atraviesa largos cañones y valles hasta la tierra donde las antorchas ardientes brillan intensamente, donde todas las llamas convergen. En esta vasta llanura incendiada por dragones, presencia el final de la antigua guerra junto a los guerreros que resisten la oscuridad.',        
        descFra: 'Située à l’ouest du continent de Teyvat, la Nation des Serments. En suivant la guidance de la flamme, traversez de longs canyons et vallées jusqu’à la terre où les torches ardentes brillent intensément, là où toutes les flammes convergent. Dans cette vaste plaine embrasée par les dragons, soyez témoin de la fin de l’ancienne guerre aux côtés des guerriers qui résistent aux ténèbres.',        
        descChn: '位于提瓦特大陆西部的誓言之国。沿着火焰的指引，穿越漫长的峡谷和山谷，到达熊熊燃烧的火炬汇聚之地。在这片被巨龙点燃的广阔平原上，与抵抗黑暗的战士们一起，见证古老战争的终结。',        
    },
];

//Defini o região atual

let regiaoAtual = 0;

//Elementos para mudança de Região

const descricao = document.querySelector('.contPerson p');
const nomePerson = document.querySelector('.contPerson h1');

//Verifica a linguagem do site e adiciona a descrição para determinada linguagem

const langRegiao = () => {
    if (localStorage.getItem('lang') == 'eu') {
        descRegiao.innerHTML = regioes[regiaoAtual].descEua;
    }else if (localStorage.getItem('lang') == 'es') {
        descRegiao.innerHTML = regioes[regiaoAtual].descEsp;
    }else if (localStorage.getItem('lang') == 'fr') {
        descRegiao.innerHTML = regioes[regiaoAtual].descFra;
    }else if (localStorage.getItem('lang') == 'ch') {
        descRegiao.innerHTML = regioes[regiaoAtual].descChn;
    }else {
        localStorage.setItem('lang', 'br');
        descRegiao.innerHTML = regioes[regiaoAtual].desc;
    }
}

//Traduz a página toda

const eua = {
    inicio: 'Home',
    cursos: 'Courses',
    jogos: 'Games',
    portfolio: 'Portfolio',
    contato: 'Contact',
    sobre: 'About',
    descHeader: '"Genshin Impact" is an open-world RPG where you explore Teyvat, travel through seven nations, meet companions with unique abilities, and face powerful enemies. Throughout your adventure, you can uncover mysteries, explore freely, and seek to reunite with your lost relatives.',
    descDivination: '"Genshin Impact Divination" is a game entirely created by me, using HTML, CSS, JavaScript, Figma, Canva, Git, and GitHub. In it, you must guess along with Paimon which character she is thinking of! Customize your name, color, and avatar in the shop using the coins you earn from Paimon after guessing the correct character.',
    btnDivination: 'Play',
}

const brasil = {
    inicio: 'Ínicio',
    cursos: 'Cursos',
    jogos: 'Jogos',
    portfolio: 'Portfólio',
    contato: 'Contato',
    sobre: 'Sobre',  
    descHeader: '"Genshin Impact" é um RPG de mundo aberto onde você explora Teyvat, viajando por sete nações, conhecendo companheiros com habilidades únicas e enfrentando inimigos poderosos. Em meio à aventura, pode desvendar mistérios, explorar livremente e buscar o reencontro com seus parentes perdidos.',
    descDivination: '"Genshin Impact Divination" é um jogo totalmente criado por mim, utilizando HTML, CSS, JavaScript, Figma, Canva, Git e GitHub. Nele, você deve adivinhar junto da Paimon qual personagem ela está pensando! Personalize seu nome, cor e avatar na lojinha, usando as moedas que você ganha ao acertar o personagem correto.',
    btnDivination: 'Jogar',
}

const spain = {
    inicio: 'Comenzar',
    cursos: 'Cursos',
    jogos: 'Juegos',
    portfolio: 'Portafolio',
    contato: 'Contacto',
    sobre: 'En',
    descHeader: '"Genshin Impact" es un RPG de mundo abierto donde exploras Teyvat, viajas por siete naciones, conoces compañeros con habilidades únicas y enfrentas enemigos poderosos. A lo largo de tu aventura, puedes descubrir misterios, explorar libremente y buscar reunirte con tus parientes perdidos.',
    descDivination: '"Genshin Impact Divination" es un juego totalmente creado por mí, utilizando HTML, CSS, JavaScript, Figma, Canva, Git y GitHub. En él, debes adivinar junto con Paimon qué personaje está pensando. ¡Personaliza tu nombre, color y avatar en la tienda usando las monedas que ganas de Paimon al acertar el personaje correcto!',
    btnDivination: 'Jugar',
}

const franca = {
    inicio: 'Commencer',
    cursos: 'Cours',
    jogos: 'Jeux',
    portfolio: 'Portefeuille',
    contato: 'Contact',
    sobre: 'Sur',
    descHeader: '"Genshin Impact" est un RPG en monde ouvert où vous explorez Teyvat, voyagez à travers sept nations, rencontrez des compagnons aux capacités uniques et affrontez de puissants ennemis. Au cours de votre aventure, vous pouvez percer des mystères, explorer librement et chercher à retrouver vos proches perdus.',
    descDivination: '"Genshin Impact Divination" est un jeu entièrement créé par moi, utilisant HTML, CSS, JavaScript, Figma, Canva, Git et GitHub. Dans celui-ci, vous devez deviner avec Paimon quel personnage elle a en tête ! Personnalisez votre nom, couleur et avatar dans la boutique en utilisant les pièces que vous gagnez auprès de Paimon après avoir trouvé le bon personnage.',
    btnDivination: 'Jouer',
}

const china = {
    inicio: '开始',
    cursos: '课程',
    jogos: '游戏',
    portfolio: '作品集',
    contato: '接触',
    sobre: '在',
    descHeader: '《原神》是一款开放世界RPG，你将在提瓦特大陆中探索，穿越七个国家，结识拥有独特能力的伙伴，并与强大的敌人战斗。在你的冒险旅程中，你可以揭开谜团，自由探索，并寻找与你失散的亲人重逢。',
    descDivination: '"Genshin Impact Divination" 是一个完全由我使用 HTML、CSS、JavaScript、Figma、Canva、Git 和 GitHub 创建的游戏。在游戏中，你需要和派蒙一起猜测她正在想的角色！使用你从派蒙那里赢得的金币，在商店中自定义你的名字、颜色和头像。',
    btnDivination: '玩',
}

const elementos = {
    inicio: document.querySelectorAll('.inicio'),
    cursos: document.querySelectorAll('.cursos'),
    jogos: document.querySelectorAll('.jogos'),
    portfolio: document.querySelectorAll('.portfolio'),
    contato: document.querySelectorAll('.contato'),
    sobre: document.querySelectorAll('.sobre'),
    descHeader: document.querySelector('.conteudoGenshin p'),
    descDivination: document.querySelector('.dadosGame p'),
    btnDivination: document.querySelector('.dadosGame button'),
}

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
    langDesc();
    langRegiao();
    elementos.descHeader.innerHTML= eua.descHeader;
    elementos.descDivination.innerHTML= eua.descDivination;
    elementos.btnDivination.innerHTML= eua.btnDivination;
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
    langDesc();
    langRegiao();
    elementos.descHeader.innerHTML= brasil.descHeader;
    elementos.descDivination.innerHTML= brasil.descDivination;
    elementos.btnDivination.innerHTML= brasil.btnDivination;
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
    langDesc();
    langRegiao();
    elementos.descHeader.innerHTML= spain.descHeader;
    elementos.descDivination.innerHTML= spain.descDivination;
    elementos.btnDivination.innerHTML= spain.btnDivination;
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
    langDesc();
    langRegiao();
    elementos.descHeader.innerHTML= franca.descHeader;
    elementos.descDivination.innerHTML= franca.descDivination;
    elementos.btnDivination.innerHTML= franca.btnDivination;
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
    langDesc();
    langRegiao();
    elementos.descHeader.innerHTML= china.descHeader;
    elementos.descDivination.innerHTML= china.descDivination;
    elementos.btnDivination.innerHTML= china.btnDivination;
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

//Botões para o download de Genshin Impact

const playStore = document.querySelector('.playStore');
const xbox = document.querySelector('.xbox');
const ps = document.querySelector('.ps');
const epic = document.querySelector('.epic');
const apple = document.querySelector('.apple');
const pc = document.querySelector('.pc');

//Redirencionamento para downlaod do jogo

playStore.addEventListener('click', () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&pli=1xx';
});

xbox.addEventListener('click', () => {
    window.location.href = 'https://www.xbox.com/pt-BR/games/store/genshin-impact/9N7TFFRRZCC9';
});

ps.addEventListener('click', () => {
    window.location.href = 'https://www.playstation.com/pt-br/games/genshin-impact/';
});

epic.addEventListener('click', () => {
    window.location.href = 'https://store.epicgames.com/pt-BR/p/genshin-impact';
});

apple.addEventListener('click', () => {
    window.location.href = 'https://apps.apple.com/us/app/genshin-impact/id1517783697';
});

pc.addEventListener('click', () => {
    window.location.href = 'https://genshin.hoyoverse.com/en/home';
});

const tipoPerson = document.querySelector('.tipoPerson');
const tipo = document.querySelector('.tipoPerson img');
const imgPerson = document.querySelector('.personagem');
const img = document.querySelector('.personagem img');

//Botões de personagem anterior e próximo

const btnNext = document.querySelector('.next');
const btnBack = document.querySelector('.back');

const audio = new Audio();
const langAudioPerson = document.querySelector('.langAudio');

const iconPlay = document.querySelector('#play span');

let langAudio = true;

langAudioPerson.addEventListener('click', () => {
    if (langAudio == true) {
        langAudio = false;
        langAudioPerson.innerHTML = 'JP';
        audio.currentTime = 0;
        langVozPerson();
        play.classList.replace('pause', 'play');
        iconPlay.innerHTML = 'play_arrow'
    } else {
        langAudio = true;
        langAudioPerson.innerHTML = 'EN';
        audio.currentTime = 0;
        langVozPerson();
        play.classList.replace('pause', 'play');
        iconPlay.innerHTML = 'play_arrow'
    }
});

const langVozPerson = () => {
    if (langAudio == true) {
        audio.src = `./audio/${personagens[personagemAtual].audioEn}`;
    } else {
        audio.src = `./audio/${personagens[personagemAtual].audioJp}`;
    }
};

//Passa para o próximo personagem

btnNext.addEventListener('click', () => {
    personagemAtual++
    btnBack.removeAttribute('disabled');
    if(personagemAtual >= personagens.length) {
        personagemAtual = personagens.length - 1;
        btnNext.setAttribute('disabled', '');
    }else {
        langDesc();
        nomePerson.innerHTML = personagens[personagemAtual].nome;
        audio.currentTime = 0;
        langVozPerson();
        play.classList.replace('pause', 'play');
        iconPlay.innerHTML = 'play_arrow'
        tipoPerson.classList.remove('entradaTipo');
        imgPerson.classList.remove('entradaPerson');
        tipoPerson.classList.add('saidaTipo');
        imgPerson.classList.add('saidaPerson');
        //Muda o Icone para a tipagem do personagem atual e a imagem do personagem atual
        setTimeout(() => {
            tipoPerson.classList.remove('saidaTipo');
            imgPerson.classList.remove('saidaPerson');
            tipo.src = `./icon/Element_${personagens[personagemAtual].tipo}`;
            img.src = `./image/${personagens[personagemAtual].img}`;
            tipoPerson.classList.add('entradaTipo');
            imgPerson.classList.add('entradaPerson');
        }, 400);
    }
});

//Volta para o Personagem anterior

btnBack.addEventListener('click', () => {
    personagemAtual--
    btnNext.removeAttribute('disabled');
    if(personagemAtual < 0) {
        personagemAtual = 0;
        btnBack.setAttribute('disabled', '');
    }else {
        langDesc();
        nomePerson.innerHTML = personagens[personagemAtual].nome;
        audio.currentTime = 0;
        langVozPerson();
        iconPlay.innerHTML = 'play_arrow'
        play.classList.replace('pause', 'play');
        tipoPerson.classList.remove('entradaTipo');
        imgPerson.classList.remove('entradaPerson');
        tipoPerson.classList.add('saidaTipo');
        imgPerson.classList.add('saidaPerson');
        //Muda o Icone para a tipagem do personagem atual e a imagem do personagem atual
        setTimeout(() => {
            tipoPerson.classList.remove('saidaTipo');
            imgPerson.classList.remove('saidaPerson');
            tipo.src = `./icon/Element_${personagens[personagemAtual].tipo}`;
            img.src = `./image/${personagens[personagemAtual].img}`;
            tipoPerson.classList.add('entradaTipo');
            imgPerson.classList.add('entradaPerson');
        }, 400);
    }
});

//Play do audio do personagem atual

const play = document.querySelector('#play');

play.addEventListener('click', () => {
    if (play.classList.contains('play')) {
                langVozPerson(); // Atualiza o idioma antes de tocar
                audio.play();
            play.classList.replace('play', 'pause')
            iconPlay.innerHTML = 'pause'
    } else {
        audio.pause();
        play.classList.replace('pause', 'play');
        iconPlay.innerHTML = 'play_arrow'
    }
});

//Elementos para troca de região

const mondstadt = document.querySelector('.mondstadt');
const liyue = document.querySelector('.liyue');
const inazuma = document.querySelector('.inazuma');
const sumeru = document.querySelector('.sumeru');
const fontaine = document.querySelector('.fontaine');
const natlan = document.querySelector('.natlan');
const tipoRegiao = document.querySelector('.contentRegiao img');

const videoRegiao = document.querySelector('.regioes video');

mondstadt.addEventListener('click', () => {
    regiaoAtual = 0;
    langRegiao();    
    regiao.innerHTML = regioes[regiaoAtual].nomeRegiao;
    tipoRegiao.src = `./icon/Emblema_${regioes[regiaoAtual].iconeRegiao}`;
    videoRegiao.src = `./video/${regioes[regiaoAtual].videoRegiao}`;
})

liyue.addEventListener('click', () => {
    regiaoAtual = 1;
    langRegiao();    
    regiao.innerHTML = regioes[regiaoAtual].nomeRegiao;
    tipoRegiao.src = `./icon/Emblema_${regioes[regiaoAtual].iconeRegiao}`;
    videoRegiao.src = `./video/${regioes[regiaoAtual].videoRegiao}`;
});

inazuma.addEventListener('click', () => {
    regiaoAtual = 2;
    langRegiao();    
    regiao.innerHTML = regioes[regiaoAtual].nomeRegiao;
    tipoRegiao.src = `./icon/Emblema_${regioes[regiaoAtual].iconeRegiao}`;
    videoRegiao.src = `./video/${regioes[regiaoAtual].videoRegiao}`;
});

sumeru.addEventListener('click', () => {
    regiaoAtual = 3;
    langRegiao();    
    regiao.innerHTML = regioes[regiaoAtual].nomeRegiao;
    tipoRegiao.src = `./icon/Emblema_${regioes[regiaoAtual].iconeRegiao}`;
    videoRegiao.src = `./video/${regioes[regiaoAtual].videoRegiao}`;
});

fontaine.addEventListener('click', () => {
    regiaoAtual = 4;
    langRegiao();    
    regiao.innerHTML = regioes[regiaoAtual].nomeRegiao;
    tipoRegiao.src = `./icon/Emblema_${regioes[regiaoAtual].iconeRegiao}`;
    videoRegiao.src = `./video/${regioes[regiaoAtual].videoRegiao}`;
});

natlan.addEventListener('click', () => {
    regiaoAtual = 5;
    langRegiao();    
    regiao.innerHTML = regioes[regiaoAtual].nomeRegiao;
    tipoRegiao.src = `./icon/Emblema_${regioes[regiaoAtual].iconeRegiao}`;
    videoRegiao.src = `./video/${regioes[regiaoAtual].videoRegiao}`;
});


