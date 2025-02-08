const scarlet = document.querySelectorAll('.scarlet');
const arceus = document.querySelectorAll('.arceus');
const diamond = document.querySelectorAll('.diamond');
const sword = document.querySelectorAll('.sword');
const pikachu = document.querySelectorAll('.pikachu');
const ultraSun = document.querySelectorAll('.ultraSun');
const sun = document.querySelectorAll('.sun');
const ruby = document.querySelectorAll('.ruby');
const xy = document.querySelectorAll('.xy');
const black = document.querySelectorAll('.black');
const white = document.querySelectorAll('.white');
const silver = document.querySelectorAll('.silver');
const platinum = document.querySelectorAll('.platinum');
const pearl = document.querySelectorAll('.pearl');
const esmerald = document.querySelectorAll('.esmerald');
const fireRed = document.querySelectorAll('.fireRed');
const rubyVersion = document.querySelectorAll('.rubyVersion');
const cristal = document.querySelectorAll('.cristal');
const gold = document.querySelectorAll('.gold');
const yellow = document.querySelectorAll('.yellow');
const blue = document.querySelectorAll('.blue');
const red = document.querySelectorAll('.red');

const btnNintendo = document.querySelectorAll('.nintendo');
const logoPokemon = document.querySelector('.contPokemon img');
const logoPokemonMobile = document.querySelector('.contDescMobile img');

const videoPokemon = document.querySelector('.gamesPoke video');
const videoPokemonMobile = document.querySelector('.gamesMobile video');

const capaPokemon = document.querySelectorAll('.capaPokemon');


let linkJogo;
let gameDesc;

const eua = {
  inicio: "Home",
  cursos: "Courses",
  jogos: "Games",
  portfolio: "Portfolio",
  contato: "Contact",
  sobre: "About",
  descSword: "A new generation of Pokémon is coming to the Nintendo Switch™. Choose between Grookey, Scorbunny, or Sobble and embark on a journey through the Galar region, facing Team Yell and uncovering the mysteries of the legendary Zacian and Zamazenta. Explore the Wild Area with free camera control and join cooperative Max Raid Battles against Dynamax Pokémon.",
  textHeader: "Here you will find a complete interactive Pokédex, where you can explore all Pokémon in detail, as well as access the collection of all games in the Pokémon franchise. Discover trivia, abilities, and much more!",
  btnPokedex: "Pokédex",
  descPokemon: 'Pokémon is a franchise created by Satoshi Tajiri, where players capture, train, and battle with creatures called Pokémon. The goal is to complete the Pokédex and become a Pokémon Champion. Initially released as a game in 1996, the franchise includes TV shows, movies, and various products, making it one of the biggest media phenomena worldwide.',
  titlePokedex: 'Interactive Pokédex',
  descPokedex: 'The interactive Pokédex allows you to search and discover detailed information about each Pokémon, including types, abilities, evolutions, and stats. Find your favorite Pokémon and dive into the Pokémon universe like never before!',
  descScarlet: 'Capture, battle, and train Pokémon in the Paldea region, a vast area full of lakes, towering peaks, deserts, villages, and expanding cities. Explore the open world at your own pace and travel across land, water, and air mounted on the legendary Pokémon that changes form (Koraidon in Pokémon Scarlet and Miraidon in Pokémon Violet). Choose between Sprigatito, Fuecoco, or Quaxly to be your first Pokémon partner before embarking on your journey through Paldea.',
descArceus: 'Get ready for a new great Pokémon adventure in Pokémon™ Legends: Arceus, a completely new game from Game Freak that blends action and exploration with the RPG roots of the Pokémon series. Embark on research missions in the ancient Hisui region. Explore vast natural areas to capture wild Pokémon, learn their behavior, sneak up on them, and throw a well-aimed Poké Ball™.',
descDiamond: 'Welcome to the Sinnoh region! Rich in nature and with the powerful Mount Coronet at its core, Sinnoh is a land of many myths passed down through generations. Choose Turtwig, Chimchar, or Piplup as your first Pokémon partner, and then embark on your journey to become the Pokémon League Champion. Along the way, you will encounter the mysterious Team Galactic and may come across the Legendary Pokémon Dialga.',
descPikachu: "In Pokémon™: Let’s Go, Pikachu!, available on Nintendo Switch™, embark on an adventure with Pikachu to capture and collect Pokémon. Battle other Trainers, Gym Leaders, and the evil Team Rocket. Use the Joy-Con controller or Poké Ball™ Plus to catch Pokémon, or play in handheld mode. Connect to Pokémon™ GO to transfer Pokémon from the Kanto region!",
descUltra: 'Embark on a new and exciting journey in the Alola region with Pokémon™ Ultra Sun and Ultra Moon for the Nintendo 3DS™! Discover an expanded story, new Pokémon, and alternate forms of the legendary Solgaleo and Lunala. Face the threat of Team Rainbow Rocket, use even more powerful Z-moves, and travel through Ultra Wormholes to find rare Pokémon. A grander adventure full of surprises awaits you!',
descSun: 'Embark on a tropical adventure in the Alola region with Pokémon™ Sun and Moon for the Nintendo 3DS™! Explore lush islands, discover new Pokémon, and take on the Island Challenge instead of traditional Gym battles. Unravel the mysteries of the Legendary Pokémon Solgaleo and Lunala, experience the new Z-moves, and battle the enigmatic Team Skull. An innovative journey full of discoveries awaits you!',
descOmega: 'Embark on an epic journey in the Hoenn region with Pokémon™ Omega Ruby for the Nintendo 3DS™! Relive the classic adventure with enhanced graphics, new Mega Evolutions, and Groudon\'s Primal Reversion. Battle Team Magma, customize your Super-Secret Base, and trade Pokémon online. An engaging experience for both new and veteran trainers!',
descY: 'Explore the beautiful Kalos region in Pokémon™ X and Y for the Nintendo 3DS™! With fully 3D graphics, discover new Pokémon, challenge Gym Leaders, and experience the powerful Mega Evolutions. Customize your trainer like never before and embark on an epic journey alongside the legendary Xerneas or Yveltal. With new battle modes and online features, this adventure promises to be unique and full of surprises!',
descBlack2: 'Return to the Unova region in Pokémon™ Black 2 for the Nintendo DS™ and discover an entirely new story! Two years after the events of Pokémon Black, explore new areas, battle the revamped Team Plasma, and uncover the mystery behind the legendary Kyurem Black. With new challenges, intense tournaments, and enhanced gameplay, this sequel offers one of the most exciting experiences in the Pokémon series!',
descWhite: 'Explore the Unova region in Pokémon™ Black for the Nintendo DS™ and embark on a journey full of new challenges! Discover over 150 new Pokémon, face the mysterious Team Plasma, and unravel the secrets of the legendary Reshiram. With an engaging story, dynamic battles, and innovations such as Triple Battles, this adventure promises to take your Pokémon experience to a whole new level!',
descSilver: 'Relive the classic journey in Johto in Pokémon™ SoulSilver for the Nintendo DS™! Explore nostalgic cities and routes with enhanced graphics, capture and train Pokémon as one walks by your side, and face the Elite Four to become the Champion. Challenge Gym Leaders both in Johto and Kanto, discover the secrets of the legendary Lugia, and enjoy new features like the Pokéwalker. An epic adventure awaits you!',
descPlatinum: 'Relive the classic journey in Johto in Pokémon™ SoulSilver for the Nintendo DS™! Explore nostalgic cities and routes with enhanced graphics, capture and train Pokémon as one walks by your side, and face the Elite Four to become the Champion. Challenge Gym Leaders both in Johto and Kanto, discover the secrets of the legendary Lugia, and enjoy new features like the Pokéwalker. An epic adventure awaits you!',
descPearl: 'Adventures await in the Sinnoh region in Pokémon™ Pearl for the Nintendo DS™! Explore vast territories, capture new Pokémon, and challenge Gym Leaders to become the Champion. Battle Team Galactic and uncover the secrets of the legendary Palkia, guardian of space. With intense battles, new mechanics, and an engaging story, this journey through the Sinnoh region promises to be unforgettable!',
descEsmerald: 'Dive into the Hoenn region in Pokémon™ Emerald for the Nintendo DS™ and get ready for a journey full of surprises! Battle the powerful leaders of Team Aqua and Team Magma while uncovering the secrets of Kyogre and Groudon in their Primal forms. The Battle Frontier offers exclusive challenges and epic battles as you aim to become the Champion of Hoenn. A unique adventure with many mysteries and Pokémon to capture!',
descFireRed: 'Embark on a nostalgic adventure in the Kanto region in Pokémon™ FireRed for the Game Boy Advance! Relive the 1996 classic with enhanced graphics and modern features while capturing, training, and battling to become the best Pokémon Trainer. Challenge Gym Leaders, face off against Team Rocket, and uncover the secrets of the legendary Mewtwo. With new challenges and an updated experience, this journey will captivate both newcomers and longtime fans!',
descRuby: 'Get ready for a new and exciting journey in the Hoenn region with Pokémon™ Ruby for the Game Boy Advance! Embark on an adventure full of discoveries as you explore vast routes, cities, and mysterious locations. Capture new Pokémon, challenge Gym Leaders, and face Team Aqua, who threatens to dominate the waters of Hoenn. With incredible graphics for its time and more dynamic battles, Pokémon Ruby takes your Pokémon experience to a new level!',
descCristal: 'In Pokémon™ Crystal for the Game Boy Color, a new era of adventure begins in the Johto region! Explore a land full of mysteries, capture new Pokémon, and battle Team Rocket in their attempt to dominate the Pokémon world. For the first time, you can choose your character\'s gender, customizing your journey. Plus, the legendary Suicune awaits to be discovered on its epic mission. With vibrant graphics and innovative gameplay, Pokémon Crystal is a unique and unforgettable experience!',
descGold: 'In Pokémon™ Gold for the Game Boy Color, embark on an epic journey through the Johto region! Capture new Pokémon, face challenging Gym Leaders, and unravel the mysteries behind the legendary Ho-Oh and Lugia. Venture through vibrant routes and cities, explore the famous Bellsprout Tower, and battle Team Rocket. With enhanced graphics and an engaging gaming experience, Pokémon Gold takes you on an unforgettable journey full of discoveries and exciting battles!',
descYellow: 'In Pokémon™ Yellow for the Game Boy, the adventure takes a new perspective! Follow Pikachu as your faithful companion on its journey, who refuses to stay in its Poké Ball, and explore the Kanto region in search of becoming the greatest trainer of all. With a story closer to the anime, face challenging Gym Leaders, battle Team Rocket, and capture legendary Pokémon like Zapdos, Moltres, and Articuno. Pokémon Yellow brings a charming and unforgettable experience for fans of the series!',
descBlue: 'In Pokémon™ Blue for the Game Boy, begin your journey in the classic Kanto region! Capture, train, and battle with over 150 Pokémon while facing Gym Leaders and challenging the Elite Four. Battle Team Rocket and do everything you can to become the Pokémon League Champion. With groundbreaking graphics for its time and an engaging gaming experience, Pokémon Blue offers a unique and challenging adventure for all fans of the series!',
descRed: 'In Pokémon™ Red for the Game Boy, the classic adventure begins in the Kanto region! Capture, train, and battle with a wide range of Pokémon while facing Gym Leaders and battling Team Rocket. Face powerful trainers and aim to become the Pokémon League Champion. With captivating gameplay and groundbreaking graphics for its time, Pokémon Red is an epic journey that defined the series and captivated millions of fans worldwide!'

}

const brasil = {
  inicio: "Ínicio",
  cursos: "Cursos",
  jogos: "Jogos",
  portfolio: "Portfólio",
  contato: "Contato",
  sobre: "Sobre",
  textHeader: 'Aqui você encontrará uma Pokédex interativa completa, onde poderá explorar todos os Pokémon em detalhes, além de acessar a coleção de todos os jogos da franquia Pokémon. Descubra curiosidades, habilidades e muito mais!',
  btnPokedex: 'Pokedex',
  titlePokedex: 'Pokédex Interativa',
  descPokedex: 'A Pokédex interativa permite que você pesquise e descubra informações detalhadas sobre cada Pokémon, incluindo tipos, habilidades, evoluções e estatísticas. Encontre seu Pokémon favorito e mergulhe no universo Pokémon como nunca antes!',
  descPokemon: 'Pokémon é uma franquia criada por Satoshi Tajiri, onde jogadores capturam, treinam e batalham com criaturas chamadas Pokémon. O objetivo é completar a Pokédex e se tornar um Campeão Pokémon. Lançada inicialmente como um jogo em 1996, a franquia inclui desenhos, filmes e produtos diversos, sendo um dos maiores fenômenos de mídia mundial.',
  descScarlet: 'Capture, lute e treine Pokémon na região de Paldea, uma vasta área cheia de lagos, picos imponentes, desertos, vilarejos e cidades em expansão. Explore o mundo aberto no seu próprio ritmo e atravesse terra, água e ar montado no Pokémon lendário que muda de forma (Koraidon no Pokémon Scarlet e Miraidon no Pokémon Violet). Escolha entre Sprigatito, Fuecoco ou Quaxly para ser seu primeiro parceiro Pokémon antes de partir em sua jornada por Paldea.',
  descArceus: 'Prepare-se para uma nova grande aventura Pokémon em Pokémon™ Legends: Arceus, um jogo totalmente novo da Game Freak que combina ação e exploração com as raízes de RPG da série Pokémon. Embarque em missões de pesquisa na antiga região de Hisui. Explore extensões naturais para capturar Pokémon selvagens, aprendendo seu comportamento, aproximando-se sorrateiramente e jogando uma Poké Ball™ bem direcionada.',
  descDiamond: 'Bem-vindo à região de Sinnoh! Rica em natureza e com o poderoso Mount Coronet em seu núcleo, Sinnoh é uma terra de muitos mitos passados de geração em geração. Você poderá escolher Turtwig, Chimchar ou Piplup para ser seu primeiro parceiro Pokémon e, em seguida, partir em sua jornada para se tornar o campeão da Pokémon League. Ao longo do caminho, você irá se deparar com a misteriosa organização Team Galactic e poderá encontrar o Legendary Pokémon Dialga.',
   descSword: "Uma nova geração Pokémon chega ao Nintendo Switch™. Escolha entre Grookey, Scorbunny ou Sobble e embarque na jornada pela região de Galar, enfrentando a Equipe Yell e desvendando os mistérios dos lendários Zacian e Zamazenta. Explore a Área Wild com câmera livre e participe de batalhas cooperativas Max Raid contra Pokémon Dynamax.",
  descPikachu: "Em Pokémon™: Let’s Go, Pikachu!, disponível para Nintendo Switch™, aventure-se ao lado de Pikachu para capturar e colecionar Pokémon. Enfrente outros Treinadores, Líderes de Ginásio e a Equipe Rocket. Use o controle Joy-Con ou Poké Ball™ Plus para capturar Pokémon, ou jogue no modo portátil. Conecte-se ao Pokémon™ GO para transferir Pokémon da região de Kanto!",
   descUltra: 'Explore uma nova e emocionante jornada na região de Alola com Pokémon™ Ultra Sun and Ultra Moon para o Nintendo 3DS™! Descubra uma história expandida, novos Pokémon e formas alternativas dos lendários Solgaleo e Lunala. Enfrente a ameaça da Equipe Rainbow Rocket, use movimentos Z ainda mais poderosos e viaje por Ultra Wormholes para encontrar Pokémon raros. Uma aventura ainda mais grandiosa e repleta de surpresas espera por você!',
  descSun: 'Embarque em uma aventura tropical na região de Alola com Pokémon™ Sun and Moon para o Nintendo 3DS™! Explore ilhas exuberantes, descubra novos Pokémon e enfrente o Desafio da Ilha em vez dos tradicionais ginásios. Desvende os mistérios dos Pokémon Lendários Solgaleo e Lunala, experimente os novos movimentos Z e enfrente a enigmática Equipe Skull. Uma jornada inovadora e repleta de descobertas aguarda você!',
  descOmega: 'Embarque em uma jornada épica na região de Hoenn com Pokémon™ Omega Ruby para o Nintendo 3DS™! Reviva a clássica aventura com gráficos aprimorados, novas Mega Evoluções e a Primal Reversion de Groudon. Enfrente a Equipe Magma, personalize sua Super-Secret Base e troque Pokémon online. Uma experiência envolvente para novos e veteranos treinadores!',
  descY: 'Explore a bela região de Kalos em Pokémon™ X and Y para o Nintendo 3DS™! Com gráficos totalmente em 3D, descubra novos Pokémon, desafie Líderes de Ginásio e experimente as poderosas Mega Evoluções. Personalize seu treinador como nunca antes e embarque em uma jornada épica ao lado do lendário Xerneas ou Yveltal. Com novos modos de batalha e recursos online, esta aventura promete ser única e cheia de surpresas!',
  descBlack2: 'Retorne à região de Unova em Pokémon™ Black 2 para o Nintendo DS™ e descubra uma história totalmente nova! Dois anos após os eventos de Pokémon Black, explore novas áreas, enfrente a reformulada Equipe Plasma e desvende o mistério por trás do lendário Kyurem Black. Com desafios inéditos, torneios intensos e uma jogabilidade aprimorada, esta sequência oferece uma das experiências mais emocionantes da série Pokémon!',
  descWhite: 'Explore a região de Unova em Pokémon™ Black para o Nintendo DS™ e embarque em uma jornada repleta de novos desafios! Descubra mais de 150 Pokémon inéditos, enfrente a misteriosa Equipe Plasma e desvende os segredos do lendário Reshiram. Com uma narrativa envolvente, batalhas dinâmicas e inovações como as Triple Battles, esta aventura promete levar sua experiência Pokémon a um novo patamar!',
  descSilver: 'Reviva a clássica jornada de Johto em Pokémon™ SoulSilver para o Nintendo DS™! Explore cidades e rotas nostálgicas com gráficos aprimorados, capture e treine Pokémon enquanto um deles caminha ao seu lado, e enfrente a Elite dos Quatro para se tornar o Campeão. Desafie Líderes de Ginásio tanto em Johto quanto em Kanto, descubra os segredos do lendário Lugia e aproveite novos recursos, como o Pokéwalker. Uma aventura épica aguarda você!',
  descPlatinum: 'Reviva a clássica jornada de Johto em Pokémon™ SoulSilver para o Nintendo DS™! Explore cidades e rotas nostálgicas com gráficos aprimorados, capture e treine Pokémon enquanto um deles caminha ao seu lado, e enfrente a Elite dos Quatro para se tornar o Campeão. Desafie Líderes de Ginásio tanto em Johto quanto em Kanto, descubra os segredos do lendário Lugia e aproveite novos recursos, como o Pokéwalker. Uma aventura épica aguarda você!',
  descPearl: 'Aventuras aguardam na região de Sinnoh em Pokémon™ Pearl para o Nintendo DS™! Explore vastos territórios, capture Pokémon inéditos e desafie os Líderes de Ginásio para se tornar o Campeão. Enfrente a Equipe Galáctica e descubra os segredos do lendário Palkia, guardião do espaço. Com batalhas intensas, novas mecânicas e uma narrativa envolvente, esta jornada pela região de Sinnoh promete ser inesquecível!',
  descEsmerald: 'Mergulhe na região de Hoenn em Pokémon™ Emerald para o Nintendo DS™ e prepare-se para uma jornada cheia de surpresas! Enfrente os poderosos líderes da Equipe Aqua e Equipe Magma, enquanto descobre os segredos de Kyogre e Groudon em suas formas Primal. O Battle Frontier oferece desafios exclusivos e batalhas épicas, enquanto você busca se tornar o Campeão de Hoenn. Uma aventura única com muitos mistérios e Pokémon para capturar!',
  descFireRed: 'Embarque em uma aventura nostálgica na região de Kanto em Pokémon™ FireRed para o Game Boy Advance! Reviva o clássico de 1996 com gráficos aprimorados e recursos modernos, enquanto captura, treina e batalha para se tornar o melhor treinador Pokémon. Desafie os Líderes de Ginásio, enfrente a Equipe Rocket e desvende os segredos do lendário Mewtwo. Com novos desafios e uma experiência atualizada, essa jornada vai conquistar tanto novatos quanto fãs de longa data!',
  descRuby: 'Prepare-se para uma nova e emocionante jornada na região de Hoenn com Pokémon™ Ruby para o Game Boy Advance! Embarque em uma aventura cheia de descobertas enquanto explora vastas rotas, cidades e misteriosos locais. Capture novos Pokémon, enfrente os Líderes de Ginásio e desafie a Equipe Aqua, que ameaça dominar as águas de Hoenn. Com gráficos incríveis para a época e batalhas mais dinâmicas, Pokémon Ruby leva sua experiência Pokémon a um novo nível!',
  descCristal: 'Em Pokémon™ Crystal para o Game Boy Color, uma nova era de aventuras começa na região de Johto! Explore uma região cheia de mistérios, capture novos Pokémon e enfrente a Equipe Rocket em sua tentativa de dominar o mundo Pokémon. Pela primeira vez, você poderá escolher o gênero do seu personagem, personalizando sua jornada. Além disso, o lendário Suicune aguarda ser descoberto em sua missão épica. Com gráficos vibrantes e uma jogabilidade inovadora, Pokémon Crystal é uma experiência única e inesquecível!',
  descGold: 'Em Pokémon™ Gold para o Game Boy Color, embarque em uma jornada épica pela região de Johto! Capture novos Pokémon, enfrente desafiantes Líderes de Ginásio e desvende os mistérios por trás dos lendários Ho-Oh e Lugia. Aventure-se por rotas e cidades vibrantes, explore a famosa Torre Bellsprout e lute contra a Equipe Rocket. Com gráficos aprimorados e uma experiência de jogo envolvente, Pokémon Gold leva você a uma jornada inesquecível cheia de descobertas e batalhas emocionantes!',
  descYellow: 'Em Pokémon™ Yellow para o Game Boy, a aventura ganha uma nova perspectiva! Acompanhe Pikachu em sua jornada como seu fiel companheiro, que se recusa a ficar dentro de sua Poké Ball, e explore a região de Kanto em busca de se tornar o maior treinador de todos. Com uma história mais próxima do anime, enfrente os desafiantes Líderes de Ginásio, lute contra a Equipe Rocket e capture os lendários Pokémon como Zapdos, Moltres e Articuno. Pokémon Yellow traz uma experiência encantadora e inesquecível para fãs da série!',
  descBlue: 'Em Pokémon™ Blue para o Game Boy, comece sua jornada na clássica região de Kanto! Capture, treine e batalhe com mais de 150 Pokémon enquanto enfrenta os Líderes de Ginásio e desafia a Elite dos Quatro. Enfrente a Equipe Rocket e faça de tudo para se tornar o Campeão da Liga Pokémon. Com gráficos inovadores para a época e uma jogabilidade envolvente, Pokémon Blue traz uma experiência única e cheia de desafios para todos os fãs da série!',
  descRed: 'Em Pokémon™ Red para o Game Boy, a aventura clássica começa na região de Kanto! Capture, treine e batalhe com uma vasta gama de Pokémon enquanto enfrenta os Líderes de Ginásio e desafia a Equipe Rocket. Enfrente poderosos treinadores e busque se tornar o Campeão da Liga Pokémon. Com uma jogabilidade cativante e gráficos pioneiros para a época, Pokémon Red é uma jornada épica que definiu a série e cativou milhões de fãs ao redor do mundo!'
}

const spain = {
  inicio: "Comenzar",
  cursos: "Cursos",
  jogos: "Juegos",
  portfolio: "Portafolio",
  contato: "Contacto",
  sobre: "En",
  textHeader: "Aquí encontrarás una Pokédex interactiva completa, donde podrás explorar todos los Pokémon en detalle, además de acceder a la colección de todos los juegos de la franquicia Pokémon. ¡Descubre curiosidades, habilidades y mucho más!",
  btnPokedex: "Pokédex",
  titlePokedex: 'Pokédex Interactiva',
  descPokedex: 'La Pokédex interactiva te permite buscar y descubrir información detallada sobre cada Pokémon, incluyendo tipos, habilidades, evoluciones y estadísticas. ¡Encuentra tu Pokémon favorito y sumérgete en el universo Pokémon como nunca antes!',
  descPokemon: 'Pokémon es una franquicia creada por Satoshi Tajiri, donde los jugadores capturan, entrenan y luchan con criaturas llamadas Pokémon. El objetivo es completar la Pokédex y convertirse en un Campeón Pokémon. Originalmente lanzado como un juego en 1996, la franquicia incluye programas de televisión, películas y varios productos, convirtiéndola en uno de los fenómenos mediáticos más grandes a nivel mundial.',
  descScarlet: 'Captura, batalla y entrena Pokémon en la región de Paldea, una vasta área llena de lagos, picos imponentes, desiertos, aldeas y ciudades en expansión. Explora el mundo abierto a tu propio ritmo y viaja por tierra, agua y aire montado en el Pokémon legendario que cambia de forma (Koraidon en Pokémon Scarlet y Miraidon en Pokémon Violet). Elige entre Sprigatito, Fuecoco o Quaxly como tu primer compañero Pokémon antes de embarcarte en tu viaje por Paldea.',
descArceus: 'Prepárate para una nueva gran aventura Pokémon en Pokémon™ Legends: Arceus, un juego completamente nuevo de Game Freak que combina acción y exploración con las raíces RPG de la serie Pokémon. Emprende misiones de investigación en la antigua región de Hisui. Explora vastas áreas naturales para capturar Pokémon salvajes, aprender su comportamiento, acercarte sigilosamente a ellos y lanzar una Poké Ball bien dirigida.',
descDiamond: '¡Bienvenido a la región de Sinnoh! Rica en naturaleza y con la poderosa Montaña Coronet en su núcleo, Sinnoh es una tierra llena de muchos mitos transmitidos de generación en generación. Elige Turtwig, Chimchar o Piplup como tu primer compañero Pokémon y luego embárcate en tu viaje para convertirte en el Campeón de la Liga Pokémon. En el camino, te encontrarás con el misterioso Team Galactic y podrías encontrar a los Pokémon legendarios Dialga.',
descSword: "Una nueva generación de Pokémon llega a la consola Nintendo Switch™. Elige entre Grookey, Scorbunny o Sobble y embarca en un viaje por la región de Galar, enfrentando a Team Yell y desentrañando los misterios de los legendarios Zacian y Zamazenta. Explora la Zona Wild con control libre de la cámara y únete a las Batallas de Incursión Max cooperativas contra Pokémon Dynamax.",
descPikachu: "¡En Pokémon™: Let’s Go, Pikachu!, disponible en Nintendo Switch™, embárcate en una aventura con Pikachu para capturar y coleccionar Pokémon. Lucha contra otros entrenadores, líderes de gimnasio y el malvado equipo Rocket. Usa el controlador Joy-Con o el Poké Ball™ Plus para atrapar Pokémon, o juega en modo portátil. ¡Conéctate con Pokémon™ GO para transferir Pokémon de la región de Kanto!",
descUltra: '¡Embárcate en una nueva y emocionante aventura en la región de Alola con Pokémon™ Ultra Sun y Ultra Moon para Nintendo 3DS™! Descubre una historia expandida, nuevos Pokémon y formas alternas de los legendarios Solgaleo y Lunala. Enfréntate a la amenaza del Team Rainbow Rocket, usa movimientos Z aún más poderosos y viaja a través de los Ultra Wormholes para encontrar Pokémon raros. ¡Te espera una aventura grandiosa llena de sorpresas!',
descSun: 'Embárcate en una aventura tropical en la región de Alola con Pokémon™ Sun y Moon para Nintendo 3DS™! Explora islas exuberantes, descubre nuevos Pokémon y realiza el Island Challenge en lugar de los tradicionales combates de Gimnasio. Desvela los misterios de los Pokémon legendarios Solgaleo y Lunala, experimenta los nuevos movimientos Z y lucha contra el enigmático Team Skull. ¡Una aventura innovadora llena de descubrimientos te espera!',
descOmega: 'Embárcate en un viaje épico en la región de Hoenn con Pokémon™ Omega Ruby para Nintendo 3DS™! Revive la aventura clásica con gráficos mejorados, nuevas Mega Evoluciones y la Reversión Primal de Groudon. Lucha contra el Team Magma, personaliza tu Super-Secret Base y comercia Pokémon en línea. ¡Una experiencia cautivadora tanto para nuevos como veteranos entrenadores!',
descY: 'Explora la hermosa región de Kalos en Pokémon™ X y Y para Nintendo 3DS™! Con gráficos completamente en 3D, descubre nuevos Pokémon, desafía a los Líderes de Gimnasio y experimenta las poderosas Mega Evoluciones. Personaliza a tu entrenador como nunca antes y emprende una aventura épica junto a los legendarios Xerneas o Yveltal. ¡Con nuevos modos de batalla y características en línea, esta aventura promete ser única y llena de sorpresas!',
descBlack2: '¡Regresa a la región de Unova en Pokémon™ Black 2 para Nintendo DS™ y descubre una historia completamente nueva! Dos años después de los eventos de Pokémon Black, explora nuevas áreas, enfrenta al renovado Team Plasma y desvela el misterio detrás del legendario Kyurem Black. Con nuevos desafíos, intensos torneos y un gameplay mejorado, ¡esta secuela ofrece una de las experiencias más emocionantes de la serie Pokémon!',
descWhite: 'Explora la región de Unova en Pokémon™ Black para Nintendo DS™ y emprende un viaje lleno de nuevos desafíos. Descubre más de 150 nuevos Pokémon, enfrenta al misterioso Team Plasma y desvela los secretos del legendario Reshiram. Con una historia cautivadora, batallas dinámicas e innovaciones como las Batallas Triples, ¡esta aventura te llevará la experiencia Pokémon a un nuevo nivel!',
descSilver: 'Revive la clásica aventura en Johto en Pokémon™ SoulSilver para Nintendo DS™! Explora ciudades y rutas nostálgicas con gráficos mejorados, captura y entrena Pokémon mientras uno camina a tu lado, y enfrenta a la Elite Four para convertirte en el Campeón. Desafía a los Líderes de Gimnasio tanto en Johto como en Kanto, descubre los secretos del legendario Lugia y disfruta de nuevas características como el Pokéwalker. ¡Una aventura épica te espera!',
descPlatinum: 'Revive la clásica aventura en Johto en Pokémon™ SoulSilver para Nintendo DS™! Explora ciudades y rutas nostálgicas con gráficos mejorados, captura y entrena Pokémon mientras uno camina a tu lado, y enfrenta a la Elite Four para convertirte en el Campeón. Desafía a los Líderes de Gimnasio tanto en Johto como en Kanto, descubre los secretos del legendario Lugia y disfruta de nuevas características como el Pokéwalker. ¡Una aventura épica te espera!',
descPearl: '¡Las aventuras esperan en la región de Sinnoh en Pokémon™ Pearl para Nintendo DS™! Explora vastos territorios, captura nuevos Pokémon y desafía a los Líderes de Gimnasio para convertirte en el Campeón. Enfréntate al Team Galactic y desvela los secretos del legendario Palkia, guardián del espacio. Con intensas batallas, nuevas mecánicas y una historia cautivadora, ¡este viaje por la región de Sinnoh promete ser inolvidable!',
descEsmerald: 'Sumérgete en la región de Hoenn en Pokémon™ Emerald para Nintendo DS™ y prepárate para un viaje lleno de sorpresas. Enfréntate a los poderosos líderes del Team Aqua y Team Magma mientras desvelas los secretos de Kyogre y Groudon en sus formas Primal. El Battle Frontier ofrece desafíos exclusivos y épicas batallas mientras aspiras a convertirte en el Campeón de Hoenn. ¡Una aventura única con muchos misterios y Pokémon por capturar!',
descFireRed: 'Embárcate en una aventura nostálgica en la región de Kanto en Pokémon™ FireRed para Game Boy Advance. Revive el clásico de 1996 con gráficos mejorados y características modernas mientras capturas, entrenas y batallas para convertirte en el mejor Entrenador Pokémon. Desafía a los Líderes de Gimnasio, enfrenta al Team Rocket y descubre los secretos del legendario Mewtwo. Con nuevos desafíos y una experiencia actualizada, ¡este viaje cautivará tanto a los nuevos como a los viejos fanáticos!',
descRuby: '¡Prepárate para un nuevo y emocionante viaje en la región de Hoenn con Pokémon™ Ruby para Game Boy Advance! Embárcate en una aventura llena de descubrimientos mientras exploras vastas rutas, ciudades y ubicaciones misteriosas. Captura nuevos Pokémon, desafía a los Líderes de Gimnasio y enfrenta al Team Aqua, que amenaza con dominar las aguas de Hoenn. Con gráficos increíbles para su época y batallas más dinámicas, ¡Pokémon Ruby lleva tu experiencia Pokémon a un nuevo nivel!',
descCristal: 'En Pokémon™ Crystal para Game Boy Color, comienza una nueva era de aventura en la región de Johto. Explora una tierra llena de misterios, captura nuevos Pokémon y combate contra el Team Rocket en su intento de dominar el mundo Pokémon. Por primera vez, puedes elegir el género de tu personaje, personalizando tu viaje. Además, el legendario Suicune te espera para ser descubierto en su misión épica. Con gráficos vibrantes y un gameplay innovador, Pokémon Crystal es una experiencia única e inolvidable.',
descGold: 'En Pokémon™ Gold para Game Boy Color, emprende un viaje épico a través de la región de Johto. Captura nuevos Pokémon, enfrenta desafiantes Líderes de Gimnasio y desvela los secretos detrás de los legendarios Ho-Oh y Lugia. Viaja por rutas y ciudades vibrantes, explora la famosa Bellsprout Tower y enfrenta al Team Rocket. Con gráficos mejorados y una experiencia de juego cautivadora, Pokémon Gold te lleva a un viaje inolvidable lleno de descubrimientos y batallas emocionantes.',
descYellow: 'En Pokémon™ Yellow para Game Boy, ¡la aventura toma una nueva perspectiva! Sigue a Pikachu como tu fiel compañero en su viaje, quien se niega a permanecer dentro de su Poké Ball, y explora la región de Kanto en busca de convertirte en el mejor entrenador de todos. Con una historia más cercana al anime, enfréntate a desafiantes Líderes de Gimnasio, combate contra el Team Rocket y captura Pokémon legendarios como Zapdos, Moltres y Articuno. Pokémon Yellow trae una experiencia encantadora e inolvidable para los fanáticos de la serie.',
descBlue: 'En Pokémon™ Blue para Game Boy, comienza tu viaje en la clásica región de Kanto. Captura, entrena y combate con más de 150 Pokémon mientras enfrentas a los Líderes de Gimnasio y desafías a la Elite Four. Combate contra el Team Rocket y haz todo lo posible por convertirte en el Campeón de la Liga Pokémon. Con gráficos innovadores para su época y una experiencia de juego cautivadora, Pokémon Blue ofrece una aventura única y desafiante para todos los fanáticos de la serie.',
descRed: 'En Pokémon™ Red para Game Boy, ¡comienza la aventura clásica en la región de Kanto! Captura, entrena y combate con una amplia gama de Pokémon mientras enfrentas a los Líderes de Gimnasio y combates contra el Team Rocket. Enfréntate a entrenadores poderosos y aspira a convertirte en el Campeón de la Liga Pokémon. Con jugabilidad cautivadora y gráficos innovadores para su época, Pokémon Red es un viaje épico que definió la serie y cautivó a millones de fanáticos en todo el mundo.'

}

const franca = {
  inicio: "Commencer",
  cursos: "Cours",
  jogos: "Jeux",
  portfolio: "Portefeuille",
  contato: "Contact",
  sobre: "Sur",
  textHeader: "Ici, vous trouverez un Pokédex interactif complet, où vous pourrez explorer tous les Pokémon en détail, ainsi que la collection de tous les jeux de la franchise Pokémon. Découvrez des curiosités, des capacités et bien plus encore !",
  btnPokedex: "Pokédex",
  titlePokedex: 'Pokédex Interactive',
  descPokedex: 'Le Pokédex interactif vous permet de rechercher et de découvrir des informations détaillées sur chaque Pokémon, y compris les types, les capacités, les évolutions et les statistiques. Trouvez votre Pokémon préféré et plongez dans l’univers Pokémon comme jamais auparavant !',
  descPokemon: "Pokémon est une franchise créée par Satoshi Tajiri, où les joueurs capturent, entraînent et combattent avec des créatures appelées Pokémon. L'objectif est de compléter le Pokédex et de devenir un Champion Pokémon. Initialement lancé sous forme de jeu en 1996, la franchise comprend des émissions de télévision, des films et divers produits, faisant d'elle l'un des plus grands phénomènes médiatiques mondiaux.",
  descScarlet: 'Attrapez, battez et entraînez des Pokémon dans la région de Paldea, une vaste zone remplie de lacs, de montagnes imposantes, de déserts, de villages et de villes en expansion. Explorez le monde ouvert à votre rythme et voyagez par terre, mer et air à dos du légendaire Pokémon qui change de forme (Koraidon dans Pokémon Scarlet et Miraidon dans Pokémon Violet). Choisissez Sprigatito, Fuecoco ou Quaxly comme votre premier compagnon Pokémon avant de commencer votre aventure à travers Paldea.',
descArceus: 'Préparez-vous pour une grande nouvelle aventure Pokémon dans Pokémon™ Legends: Arceus, un jeu totalement inédit de Game Freak qui allie action et exploration avec les racines RPG de la série Pokémon. Menez des missions de recherche dans la région ancienne de Hisui. Explorez de vastes zones naturelles pour attraper des Pokémon sauvages, apprenez leur comportement, approchez-les furtivement et lancez une Poké Ball bien placée.',
descDiamond: 'Bienvenue dans la région de Sinnoh ! Riche en nature et avec la puissante Montagne Coronet au centre, Sinnoh est une terre pleine de nombreux mythes transmis de génération en génération. Choisissez Turtwig, Chimchar ou Piplup comme votre premier compagnon Pokémon, puis lancez-vous dans votre aventure pour devenir le Champion de la Ligue Pokémon. En chemin, vous rencontrerez le mystérieux Team Galactic et pourrez rencontrer les Pokémon légendaires Dialga.',
descSword: "Une nouvelle génération de Pokémon arrive sur la console Nintendo Switch™. Choisissez parmi Grookey, Scorbunny ou Sobble et partez à l'aventure dans la région de Galar, affrontant l'Équipe Yell et découvrant les mystères des Pokémon légendaires Zacian et Zamazenta. Explorez la Zone Wild avec un contrôle libre de la caméra et participez aux nouvelles batailles multijoueurs coopératives Max Raid contre des Pokémon Dynamax.",
descPikachu: "Dans Pokémon™ : Let’s Go, Pikachu !, disponible sur Nintendo Switch™, partez à l'aventure avec Pikachu pour capturer et collectionner des Pokémon. Combattez d'autres entraîneurs, les leaders de gymnase et l'infâme équipe Rocket. Utilisez la manette Joy-Con ou le Poké Ball™ Plus pour attraper des Pokémon, ou jouez en mode portable. Connectez-vous à Pokémon™ GO pour transférer des Pokémon de la région de Kanto !",
descUltra: 'Partez dans une toute nouvelle aventure passionnante dans la région d’Alola avec Pokémon™ Ultra Sun et Ultra Moon sur Nintendo 3DS™ ! Découvrez une histoire étendue, de nouveaux Pokémon et des formes alternatives des légendaires Solgaleo et Lunala. Affrontez la menace du Team Rainbow Rocket, utilisez des mouvements Z encore plus puissants et voyagez à travers les Ultra Wormholes pour rencontrer des Pokémon rares. Une aventure épique pleine de surprises vous attend !',
descSun: 'Partez à l’aventure dans la région d’Alola avec Pokémon™ Sun et Moon sur Nintendo 3DS™ ! Explorez des îles luxuriantes, découvrez de nouveaux Pokémon et réalisez le Island Challenge au lieu des traditionnels combats de gymnase. Découvrez les mystères des Pokémon légendaires Solgaleo et Lunala, vivez de nouveaux mouvements Z et combattez le Team Skull mystérieux. Une aventure innovante pleine de découvertes vous attend !',
descOmega: 'Embarquez pour un voyage épique dans la région de Hoenn avec Pokémon™ Omega Ruby pour Nintendo 3DS™ ! Revivez l’aventure classique avec des graphismes améliorés, de nouvelles Mega Evolutions et la Primal Reversion de Groudon. Combattez le Team Magma, personnalisez votre Super-Secret Base et échangez des Pokémon en ligne. Une expérience captivante tant pour les nouveaux venus que pour les vétérans !',
descY: 'Explorez la magnifique région de Kalos dans Pokémon™ X et Y pour Nintendo 3DS™ ! Avec des graphismes entièrement en 3D, découvrez de nouveaux Pokémon, défiez les leaders de gymnase et vivez les puissantes Mega Evolutions. Personnalisez votre dresseur comme jamais auparavant et partez pour une aventure épique aux côtés des légendaires Xerneas ou Yveltal. Avec de nouveaux modes de combat et des fonctionnalités en ligne, cette aventure promet d’être unique et pleine de surprises !',
descBlack2: 'Retournez dans la région d’Unova dans Pokémon™ Black 2 pour Nintendo DS™ et découvrez une toute nouvelle histoire ! Deux ans après les événements de Pokémon Black, explorez de nouvelles zones, affrontez le Team Plasma renouvelé et découvrez les mystères derrière le légendaire Kyurem Black. Avec de nouveaux défis, des tournois intenses et un gameplay amélioré, cette suite propose l’une des expériences les plus excitantes de la série Pokémon !',
descWhite: 'Explorez la région d’Unova dans Pokémon™ Black pour Nintendo DS™ et embarquez pour un voyage plein de nouveaux défis. Découvrez plus de 150 nouveaux Pokémon, combattez le mystérieux Team Plasma et découvrez les secrets du légendaire Reshiram. Avec une histoire captivante, des combats dynamiques et des innovations comme les Triple Battles, cette aventure vous emmènera à un tout nouveau niveau !',
descSilver: 'Revivez l’aventure classique dans Johto avec Pokémon™ SoulSilver pour Nintendo DS™ ! Explorez des villes et des routes nostalgiques avec des graphismes améliorés, capturez et entraînez des Pokémon pendant qu’ils marchent à vos côtés, et affrontez les Elite Four pour devenir Champion. Défiez les leaders de gymnase à Johto et à Kanto, découvrez les secrets du légendaire Lugia et profitez de nouvelles fonctionnalités comme le Pokéwalker. Une aventure épique vous attend !',
descPlatinum: 'Revivez l’aventure classique dans Johto avec Pokémon™ SoulSilver pour Nintendo DS™ ! Explorez des villes et des routes nostalgiques avec des graphismes améliorés, capturez et entraînez des Pokémon pendant qu’ils marchent à vos côtés, et affrontez les Elite Four pour devenir Champion. Défiez les leaders de gymnase à Johto et à Kanto, découvrez les secrets du légendaire Lugia et profitez de nouvelles fonctionnalités comme le Pokéwalker. Une aventure épique vous attend !',
descPearl: 'Les aventures vous attendent dans la région de Sinnoh dans Pokémon™ Pearl pour Nintendo DS™ ! Explorez des territoires vastes, capturez de nouveaux Pokémon et défiez les leaders de gymnase pour devenir Champion. Affrontez le Team Galactic et découvrez les secrets du légendaire Palkia, gardien de l’espace. Avec des combats intenses, de nouvelles mécaniques et une histoire captivante, ce voyage dans la région de Sinnoh promet d’être inoubliable !',
descEsmerald: 'Plongez dans la région de Hoenn dans Pokémon™ Emerald pour Nintendo DS™ et préparez-vous pour un voyage plein de surprises. Affrontez les puissants leaders des Teams Aqua et Magma tout en découvrant les secrets de Kyogre et Groudon sous leurs formes Primal. Le Battle Frontier offre des défis exclusifs et des combats épiques pendant que vous aspirez à devenir Champion de Hoenn. Une aventure unique avec de nombreux mystères et des Pokémon à capturer vous attend !',
descFireRed: 'Partez en aventure dans la région de Kanto dans Pokémon™ FireRed pour Game Boy Advance. Revivez le classique de 1996 avec des graphismes améliorés et des fonctionnalités modernes tout en capturant, entraînant et combattant pour devenir le meilleur dresseur Pokémon. Défiez les leaders de gymnase, affrontez le Team Rocket et découvrez les secrets du légendaire Mewtwo. Avec de nouveaux défis et une expérience mise à jour, ce voyage captivant vous attend !',
descRuby: 'Préparez-vous pour un voyage passionnant dans la région de Hoenn avec Pokémon™ Ruby pour Game Boy Advance ! Embarquez pour une aventure pleine de découvertes tout en explorant des routes vastes, des villes et des lieux mystérieux. Capturez de nouveaux Pokémon, défiez les leaders de gymnase et affrontez le Team Aqua qui menace de dominer les eaux de Hoenn. Avec des graphismes impressionnants pour l’époque et des combats plus dynamiques, Pokémon Ruby élève votre expérience Pokémon à un tout nouveau niveau !',
descCristal: 'Dans Pokémon™ Crystal pour Game Boy Color, commencez une nouvelle ère d’aventure dans la région de Johto. Explorez une terre pleine de mystères, capturez de nouveaux Pokémon et combattez le Team Rocket dans leur tentative de dominer le monde Pokémon. Pour la première fois, vous pouvez choisir le sexe de votre personnage et personnaliser votre voyage. De plus, le légendaire Suicune vous attend pour être découvert dans sa quête épique. Avec des graphismes vibrants et un gameplay innovant, Pokémon Crystal est une expérience unique et inoubliable.',
descGold: 'Dans Pokémon™ Gold pour Game Boy Color, embarquez pour un voyage épique à travers la région de Johto. Capturez de nouveaux Pokémon, affrontez des leaders de gymnase redoutables et découvrez les secrets des légendaires Ho-Oh et Lugia. Voyagez à travers des routes et des villes vibrantes, explorez la fameuse Bellsprout Tower et combattez le Team Rocket. Avec des graphismes améliorés et une expérience captivante, Pokémon Gold vous emmène dans un voyage inoubliable rempli de découvertes et de combats excitants.',
descYellow: 'Dans Pokémon™ Yellow pour Game Boy, l’aventure prend une nouvelle perspective ! Suivez Pikachu comme compagnon fidèle dans son voyage, qui refuse de rester dans sa Poké Ball, et explorez la région de Kanto pour devenir le meilleur dresseur de tous les temps. Avec une histoire plus proche de l’anime, affrontez des leaders de gymnase difficiles, combattez le Team Rocket et capturez des Pokémon légendaires comme Zapdos, Moltres et Articuno. Pokémon Yellow offre une expérience charmante et inoubliable pour les fans de la série.',
descBlue: 'Dans Pokémon™ Blue pour Game Boy, commencez votre voyage dans la classique région de Kanto. Capturez, entraînez et combattez pour devenir le meilleur dresseur Pokémon. Défiez les leaders de gymnase, affrontez le redoutable Team Rocket et capturez les légendaires Mewtwo et Mew. Ce jeu est le point de départ d’une aventure épique pleine de souvenirs et de défis pour les amateurs de Pokémon.',
descRed: 'Dans Pokémon™ Red pour Game Boy, commencez votre aventure dans la région classique de Kanto. Capturez, entraînez et combattez pour devenir le meilleur dresseur Pokémon. Défiez les leaders de gymnase, affrontez le redoutable Team Rocket et capturez les légendaires Mewtwo et Mew. Ce jeu est le point de départ d’une aventure épique pleine de souvenirs et de défis pour les amateurs de Pokémon.'

}

const china = {
  inicio: "开始",
  cursos: "课程",
  jogos: "游戏",
  portfolio: "作品集",
  contato: "接触",
  sobre: "在",
  sobreMim: "关于我",
    textHeader: "在这里，您将找到一个完整的互动宝可梦图鉴，您可以详细探索所有宝可梦，并访问宝可梦系列所有游戏的合集。发现更多有趣的内容、技能等！",
  btnPokedex: "宝可梦图鉴",
  titlePokedex: '互动图鉴',
  descPokedex: '互动式宝可梦图鉴让您可以搜索并发现每只宝可梦的详细信息，包括类型、技能、进化和统计数据。找到您最喜欢的宝可梦，前所未有地沉浸在宝可梦的世界中！',
  descPokemon: '宝可梦是由田尻智创立的一个系列，玩家捕捉、训练并与名为宝可梦的生物进行对战。目标是完成宝可梦图鉴并成为宝可梦冠军。最初于1996年作为游戏发布，该系列还包括电视节目、电影和各种产品，使其成为全球最大的媒体现象之一。',
  descScarlet: '在宝可梦 Scarlet 中，捕捉、战斗并训练宝可梦，探索帕尔代亚地区，这里有广阔的湖泊、雄伟的山脉、沙漠、村庄和正在扩展的城市。以自己的节奏探索开放世界，骑乘传奇宝可梦（Scarlet 中是科赖多，Violet 中是米莱多）穿越陆地、水域和空中。选择初始宝可梦：草苗龟、火焰鳄或鸭嘴炎，让它们成为你的伙伴，开始你的帕尔代亚之旅。',
descArceus: '准备好迎接全新的宝可梦冒险了吗？《宝可梦：传说 阿尔宙斯》是一款全新的游戏，融合了动作、探索与宝可梦系列的RPG根源。进入古老的希苏地区，展开研究任务。探索自然环境，捕捉野生宝可梦，学习它们的行为，偷偷接近并准确投掷宝贝球。',
descDiamond: '欢迎来到神奥地区！这里自然资源丰富，核心地带是强大的神奥山脉，是无数代传说的发源地。你将可以选择草苗龟、烈焰猴或波加曼作为你的初始宝可梦，开始你的冒险，成为宝可梦联盟的冠军。在旅途中，你会遇到神秘的银河队，还能与传奇宝可梦帝牙卢卡邂逅。',
descSword: "全新一代宝可梦即将登陆Nintendo Switch™主机。选择Grookey、Scorbunny或Sobble作为你的宝可梦伙伴，踏上前往新区域加拉尔的冒险之旅，挑战恶势力团队Yell，并揭开传奇宝可梦Zacian和Zamazenta的神秘面纱。探索Wild Area，在这里你可以自由控制相机，参与全新的多人合作Max Raid Battles，与巨大的Dynamax宝可梦展开对决。",
descPikachu: "在《宝可梦™：Let’s Go，皮卡丘！》中，与皮卡丘一起踏上冒险，捕捉并收集宝可梦。与其他训练师、道馆馆主以及邪恶的火箭队展开战斗。使用Joy-Con控制器或Poké Ball™ Plus捕捉宝可梦，或者在便携模式下玩。你还可以将游戏与Pokémon™ GO连接，转移在关东地区发现的宝可梦！",
descUltra: '在《宝可梦 Ultra Sun 和 Ultra Moon》中，探索阿罗拉地区的全新冒险！发现扩展后的故事、全新的宝可梦，以及传奇宝可梦索尔迦雷欧与露奈雅拉的另类形态。与彩虹火箭队展开战斗，使用更强大的 Z 技能，穿越超空间虫洞，寻找稀有宝可梦。一次更宏大的冒险等待着你！',
descSun: '在《宝可梦 Sun 和 Moon》中，踏上阿罗拉地区的热带冒险！探索丰饶的岛屿，捕捉新的宝可梦，挑战岛屿挑战而非传统的道馆。解锁传奇宝可梦太阳神索尔迦雷欧和月亮神露奈雅拉的秘密，体验全新的 Z 技能并对抗神秘的恶行队。一次创新且充满发现的冒险正等着你！',
descOmega: '在《宝可梦 Omega Ruby》中，踏上霍恩地区的史诗旅程！重温经典冒险，享受提升的图形、全新的超级进化以及古老的地面宝可梦盖欧卡复原形态。对抗火焰队，个性化超级秘密基地，并与其他训练师在线交换宝可梦。无论是新手还是老玩家，都会享受这一令人沉浸的体验！',
descY: '在《宝可梦 X 和 Y》中，探索美丽的卡洛斯地区！凭借全新的 3D 图形，捕捉新的宝可梦，挑战道馆馆主并体验强大的超级进化。个性化你的训练师角色，和传奇宝可梦基尔吉欧或伊菲塔一起踏上史诗冒险。这次的冒险充满了新的战斗模式和线上玩法！',
descBlack2: '返回尤诺瓦地区，继续《宝可梦 Black 2》的全新冒险！在《宝可梦 Black》的两年后，探索新的区域，迎战重组的等离子队，并解开传奇宝可梦基拉祈黑的秘密。通过未曾见过的挑战，参与激烈的对战，这一续集提供了宝可梦系列最激动人心的冒险之一！',
descWhite: '探索尤诺瓦地区，在《宝可梦 Black》中展开新的冒险！捕捉超过 150 种全新的宝可梦，挑战神秘的等离子队，并揭开传奇宝可梦烈空坐的秘密。这场冒险将为你带来引人入胜的故事、动态战斗以及全新的三重战斗模式，向你展示了不一样的宝可梦世界。',
descSilver: '在《宝可梦 SoulSilver》中，重温经典的城都地区之旅！探索那些熟悉的城市和路线，带着一个宝可梦与你同行，挑战精英四人组，争取成为宝可梦联盟的冠军。在城都与关都两个地区挑战道馆，解开传奇宝可梦陆地之神的秘密。一次史诗般的冒险正等着你！',
descPlatinum: '在《宝可梦 SoulSilver》中，重温经典的城都地区之旅！探索那些熟悉的城市和路线，带着一个宝可梦与你同行，挑战精英四人组，争取成为宝可梦联盟的冠军。在城都与关都两个地区挑战道馆，解开传奇宝可梦陆地之神的秘密。一次史诗般的冒险正等着你！',
descPearl: '在《宝可梦 Pearl》中，探索神奥地区！捕捉未知的宝可梦，挑战道馆馆主成为冠军，打败银河队，解锁传奇宝可梦帕尔基亚的秘密。体验全新的战斗机制，这场神奥地区的冒险将给你带来一次难忘的经历！',
descEsmerald: '在《宝可梦 Emerald》中，踏上霍恩地区的冒险！与水队和火队的领导者展开对战，揭开海皇哈克龙和火王盖欧卡的秘密。通过全新的战斗设施挑战，尽全力成为霍恩地区的冠军！',
descFireRed: '重温经典的关东地区冒险，探索《宝可梦 FireRed》！通过现代化的图形和玩法，捕捉、训练并与其他训练师战斗。挑战关东的道馆，阻止火箭队的阴谋，解开传奇宝可梦 Mewtwo 的秘密！',
descRuby: '准备好迎接霍恩地区的冒险了吗？在《宝可梦 Ruby》中，捕捉新宝可梦，挑战道馆，打败海洋队，阻止他们的邪恶计划！探索新的地区和神秘地点。',
descCristal: '在《宝可梦 Crystal》中，体验全新的冒险！通过第一个可以选择角色性别的游戏玩法，探索丰富的城市与路线。对抗火箭队，捕捉传奇宝可梦瑞克苏，发现它的巨大秘密。',
descGold: '在《宝可梦 Gold》中，开启金色之旅！挑战关都地区的道馆，捕捉全新宝可梦并阻止火箭队的阴谋，揭开传奇宝可梦 Ho-Oh 与 Lugia 的秘密。',
descYellow: '在《宝可梦 Yellow》中，与皮卡丘一起踏上关东地区的冒险！随着皮卡丘的陪伴，挑战道馆并击败火箭队。捕捉传奇宝可梦 Zapdos、Moltres 和 Articuno！',
descBlue: '在《宝可梦 Blue》中，开始你的冒险！挑战道馆，捕捉所有宝可梦，努力成为宝可梦联盟的冠军。与火箭队作战，探索一个充满挑战的世界。',
descRed: '在《宝可梦 Red》中，开始你的经典冒险！捕捉、训练并挑战关东地区的道馆，击败火箭队并成为宝可梦联盟的冠军！'

}

const elementos = {
  inicio: document.querySelectorAll(".inicio"),
  cursos: document.querySelectorAll(".cursos"),
  jogos: document.querySelectorAll(".jogos"),
  portfolio: document.querySelectorAll(".portfolio"),
  contato: document.querySelectorAll(".contato"),
  sobre: document.querySelectorAll(".sobre"),
  descPokemon: document.querySelector('.contPokemon p'),
  descPokemonMobile: document.querySelector('.contDescMobile p'),
  titlePokedex: document.querySelector('.contPokedex h1'),
  descPokedex: document.querySelector('.contPokedex p'),
  btnPokedex: document.querySelector('.contPokedex button'),
  textHeader: document.querySelector('.logoPokemon p'),
}

const select = new Audio();
select.src = './audio/select.mp3';

const hover = new Audio();
hover.src = './audio/hover.mp3';

capaPokemon.forEach((selects) => {
  selects.addEventListener('click', () => {
    select.currentTime = 0;
     select.play();
  });
})

capaPokemon.forEach((audios) => {
  audios.addEventListener('mouseenter', () => {
    hover.currentTime = 0;
     hover.play();
  });
})
  


scarlet.forEach((scarlets) => {
  scarlets.addEventListener('click', () => {
    gameDesc = "scarlet";
    langPage();
    logoPokemon.src = './image/logoScarlet.webp';
    logoPokemonMobile.src = './image/logoScarlet.webp';
    videoPokemon.src = './video/scarlet.mp4';
    videoPokemonMobile.src = './video/scarlet.mp4';
    linkJogo = 'https://www.nintendo.com/pt-br/store/products/pokemon-scarlet-switch/?srsltid=AfmBOoq3CpftcNgAFU9-nsu-QBCQRiiXFXiFdJaUQEvWoc2S51PtrwPp';
    capaPokemon.forEach((attribute) => {
      attribute.classList.remove('actived');
    });
    scarlets.classList.add('actived');
  });
});

arceus.forEach((arceusElement) => {
  arceusElement.addEventListener('click', () => {
    gameDesc = "arceus";
    langPage();
    logoPokemon.src = './image/logoArceus.png';
    logoPokemonMobile.src = './image/logoArceus.png';
    videoPokemon.src = './video/arceus.mp4';
    videoPokemonMobile.src = './video/arceus.mp4';
    linkJogo = 'https://www.nintendo.com/pt-br/store/products/pokemon-legends-arceus-switch/';
    capaPokemon.forEach((attribute) => {
      attribute.classList.remove('actived');
    });
    arceusElement.classList.add('actived');
  });
});

diamond.forEach((diamondElement) => {
  diamondElement.addEventListener('click', () => {
    gameDesc = "diamond";
    langPage();
    logoPokemon.src = './image/logoDiamond.png';
    logoPokemonMobile.src = './image/logoDiamond.png';
    videoPokemon.src = './video/diamond.mp4';
    videoPokemonMobile.src = './video/diamond.mp4';
    linkJogo = 'https://www.nintendo.com/pt-br/store/products/pokemon-brilliant-diamond-switch/';
    capaPokemon.forEach((attribute) => {
      attribute.classList.remove('actived');
    });
    diamondElement.classList.add('actived');
  });
});

sword.forEach((swordElement) => {
  swordElement.addEventListener('click', () => {
    gameDesc = "sword";
    langPage();
    logoPokemon.src = './image/logoSword.png';
    logoPokemonMobile.src = './image/logoSword.png';
    videoPokemon.src = './video/sword.mp4';
    videoPokemonMobile.src = './video/sword.mp4';
    logoPokemon.style.height = "40%";
    linkJogo = 'https://www.nintendo.com/pt-br/store/products/pokemon-sword-switch/';
    capaPokemon.forEach((attribute) => {
      attribute.classList.remove('actived');
    });
    swordElement.classList.add('actived');
  });
});

pikachu.forEach((pikachuElement) => {
  pikachuElement.addEventListener('click', () => {
    gameDesc = "pikachu";
    langPage();
    logoPokemon.src = './image/logoPikachu.png';
    videoPokemon.src = './video/pikachu.mp4';
    logoPokemonMobile.src = './image/logoPikachu.png';
    videoPokemonMobile.src = './video/pikachu.mp4';
    linkJogo = 'https://www.nintendo.com/pt-br/store/products/pokemon-lets-go-pikachu-switch/';
    capaPokemon.forEach((attribute) => {
      attribute.classList.remove('actived');
    });
    pikachuElement.classList.add('actived');
  });
});

ultraSun.forEach((ultraSunElement) => {
  ultraSunElement.addEventListener('click', () => {
    gameDesc = "ultra";
    langPage();
      logoPokemon.src = './image/logoUltra.webp';
   videoPokemon.src = './video/ultra.mp4';  
   logoPokemonMobile.src = './image/logoUltra.webp';
   videoPokemonMobile.src = './video/ultra.mp4';  
    linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Ultra-Sun-1231949.html';
    capaPokemon.forEach((attribute) => {
      attribute.classList.remove('actived');
    });
    ultraSun.classList.add('actived');
  })
})

sun.forEach((sunElement) => {
  sunElement.addEventListener('click', () => {
    gameDesc = "sun";
    langPage();
    logoPokemon.src = './image/logoSun.webp';
  videoPokemon.src = './video/sun.mp4';  
  logoPokemonMobile.src = './image/logoSun.webp';
  videoPokemonMobile.src = './video/sun.mp4';  
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Sun-1092368.html?srsltid=AfmBOorALcY28IzVBpw5GZQU8LBmffwCpY0Fsp6E4VLGT7GKStpqcNV1'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  sun.classList.add('actived');
  });
})

ruby.forEach((rubyElement) => {
  rubyElement.addEventListener('click', () => {
    gameDesc = "omega";
    langPage();
    logoPokemon.src = './image/logoOmega.webp';
  videoPokemon.src = './video/omega.mp4';  
  logoPokemonMobile.src = './image/logoOmega.webp';
  videoPokemonMobile.src = './video/omega.mp4'; 
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Omega-Ruby-893014.html?srsltid=AfmBOoqJH2DmTESjannVTiECjdQUIbGSsMqeszsQZQGMnTDrPrPiaJ1D'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  ruby.classList.add('actived');
  })
})

xy.forEach((xyElement) => {
  xyElement.addEventListener('click', () => {
    gameDesc = "xy";
    langPage();
    logoPokemon.src = './image/logoY.webp';
  videoPokemon.src = './video/xy.mp4';  
  logoPokemonMobile.src = './image/logoY.webp';
  videoPokemonMobile.src = './video/xy.mp4'; 
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Nintendo-3DS/Pokemon-Y-766700.html?srsltid=AfmBOopeodX2V9L1zNN3J_h360XYH0MbRRSV6ZqYSevvxKkc4tGYAXvh'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  xy.classList.add('actived');
  })
})

black.forEach((blackElement) => {
  blackElement.addEventListener('click', () => {
    gameDesc = "black2";
    langPage();
    logoPokemon.src = './image/logoBlack2.webp';
  videoPokemon.src = './video/black2.mp4';  
  logoPokemonMobile.src = './image/logoBlack2.webp';
  videoPokemonMobile.src = './video/black2.mp4';
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Black-Version-2-523591.html?srsltid=AfmBOop5__Ag7VMInaWB1kdZsB8RAXoP-jBpliRIY3LX9_l6nVpeMcO4'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  black.classList.add('actived');
  })
})

white.forEach((whiteElement) => {
  whiteElement.addEventListener('click', () => {
    gameDesc = "white";
    langPage();
    logoPokemon.src = './image/logoBlack.webp';
  videoPokemon.src = './video/black.mp4';  
  logoPokemonMobile.src = './image/logoBlack.webp';
  videoPokemonMobile.src = './video/black.mp4'; 
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Black-Version-272332.html?srsltid=AfmBOordTfBLWLtZXSJJnWzi2h4Rqqh85kyrear2bv65GSvW6eF_WCmh'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  white.classList.add('actived');
  })
})

silver.forEach((silverElement) => {
  silverElement.addEventListener('click', () => {
    gameDesc = "silver";
    langPage();
    logoPokemonMobile.src = './image/logoSilver.webp';
  videoPokemonMobile.src = './video/silver.mp4'; 
    logoPokemon.src = './image/logoSilver.webp';
  videoPokemon.src = './video/silver.mp4';  
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-SoulSilver-Version-272475.html?srsltid=AfmBOoqRGXmizQ1f09yB6GqxRFT9waoC5nOw81Gwwtudu6Z2vGbfBFna'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  silver.classList.add('actived');
  })
})

platinum.forEach((platinumElement) => {
  platinumElement.addEventListener('click', () => {
    gameDesc = "platinum";
    langPage();
    logoPokemon.src = './image/logoPlatinum.png';
  videoPokemon.src = './video/platinum.mp4';  
  logoPokemonMobile.src = './image/logoPlatinum.png';
  videoPokemonMobile.src = './video/platinum.mp4'; 
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Platinum-Version-272321.html?srsltid=AfmBOoowBP2yJGrOe1GS9EKOyHtj3bIXAFIk42kPf2Ga-DU-OPQsD96O'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  platinum.classList.add('actived');
  })
})

pearl.forEach((pearlElement) => {
  pearlElement.addEventListener('click', () => {
    gameDesc = "pearl";
    langPage();
    logoPokemon.src = './image/logoPearl.png';
  videoPokemon.src = './video/pearl.mp4';  
  logoPokemonMobile.src = './image/logoPearl.png';
  videoPokemonMobile.src = './video/pearl.mp4';  
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Nintendo-DS/Pokemon-Pearl-272431.html?srsltid=AfmBOopFUQnrqO2MD9pLq03HjP1bCpWtUuZv1eauIYhz0hhsCdAaxdHl'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  pearl.classList.add('actived');
  })
  
})

rubyVersion.forEach((rubyVersionElement) => {
  rubyVersionElement.addEventListener('click', () => {
    gameDesc = "ruby";
    langPage();
    logoPokemon.src = './image/logoRuby.png';
  videoPokemon.src = './video/rubyVersion.mp4';  
  logoPokemonMobile.src = './image/logoRuby.png';
  videoPokemonMobile.src = './video/rubyVersion.mp4'; 
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-Ruby-267167.html?srsltid=AfmBOoqypz0nkFNXLBlxPJt4ZDsy9sJhxG-TQr1m8f8TEpiMTMQd9-cW'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  rubyVersion.classList.add('actived');
  })
})

esmerald.forEach((esmeraldElement) => {
  esmeraldElement.addEventListener('click', () => {
    gameDesc = "esmerald";
    langPage();
    logoPokemon.src = './image/logoEsmerald.webp';
  videoPokemon.src = './video/esmerald.mp4';  
  logoPokemonMobile.src = './image/logoEsmerald.webp';
  videoPokemonMobile.src = './video/esmerald.mp4';  
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-Emerald-Version-267112.html?srsltid=AfmBOopneU6FFufaPdDbLHFKn15jCB1aQ6o-hz10ruoPz_KLWPlEKGyk'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  esmerald.classList.add('actived');
  })
})

fireRed.forEach((fireRedElement) => {
  fireRedElement.addEventListener('click', () => {
    gameDesc = "fireRed";
    langPage();
    logoPokemon.src = './image/logoFireRed.webp';
  videoPokemon.src = './video/fireRed.mp4';  
  logoPokemonMobile.src = './image/logoFireRed.webp';
  videoPokemonMobile.src = './video/fireRed.mp4';  
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-FireRed-267123.html?srsltid=AfmBOoouv5Dv5Dt7dvS1K1gPn7_6MwErLwInpPu84MNcfyDcLqtkcorm'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  fireRed.classList.add('actived');
  })
})

cristal.forEach((cristalElement) => {
  cristalElement.addEventListener('click', () => {
    gameDesc = "cristal";
    langPage();
    logoPokemon.src = './image/logoCristal.webp';
  videoPokemon.src = './video/cristal.mp4';  
  logoPokemonMobile.src = './image/logoCristal.webp';
  videoPokemonMobile.src = './video/cristal.mp4'; 
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Color/Pokemon-Crystal-Version-266065.html?srsltid=AfmBOoqWZv12-5TsZ_pieqKtPOTm7w9ttakE66q4ceaOUesiSqMtp984'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  cristal.classList.add('actived');
  })
})

gold.forEach((goldElement) => {
  goldElement.addEventListener('click', () => {
    gameDesc = "gold";
    langPage();
    logoPokemon.src = './image/logoGold.webp';
  videoPokemon.src = './video/gold.mp4'; 
  logoPokemonMobile.src = './image/logoGold.webp';
  videoPokemonMobile.src = './video/gold.mp4'; 
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Color/Pokemon-Gold-Version-266076.html?srsltid=AfmBOoqnzzf71rASkd-Z8nnCa3TVeZ17HflVXWszvw4GQuOs4r8Ao_i6'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  gold.classList.add('actived');
  })
  
})

yellow.forEach((yellowElement) => {
  yellowElement.addEventListener('click', () => {
    gameDesc = "yellow";
    langPage();  
    logoPokemon.src = './image/logoYellow.png';
  videoPokemon.src = './video/yellow.mp4';  
  logoPokemonMobile.src = './image/logoYellow.png';
  videoPokemonMobile.src = './video/yellow.mp4';  
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy/Pokemon-Yellow-Version-Special-Pikachu-Edition-266142.html?srsltid=AfmBOoq-aSXnAk-oSsUVZYje0rjlezefLsiXNLEqqg5S2U-tZZ6UlbFW'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  yellow.classList.add('actived');
  })
})

blue.forEach((blueElement) => {
  blueElement.addEventListener('click', () => {
    gameDesc = "blue";
    langPage();
    logoPokemon.src = './image/logoBlue.webp';
  videoPokemon.src = './video/blue.mp4';  
  logoPokemonMobile.src = './image/logoBlue.webp';
  videoPokemonMobile.src = './video/blue.mp4';  
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy/Pokemon-Blue-Version-266054.html?srsltid=AfmBOoopdK4X-W1uynwO8vrt_FsLL7lFDcWT6jTRWWAFHivSdBuL5fGJ'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  blue.classList.add('actived');
  })
})

red.forEach((redElement) => {
  redElement.addEventListener('click', () => {
    gameDesc = "red";
    langPage();
    logoPokemon.src = './image/logoRed.webp';
  videoPokemon.src = './video/red.mp4';  
  logoPokemonMobile.src = './image/logoRed.webp';
  videoPokemonMobile.src = './video/red.mp4';  
  linkJogo = 'https://www.nintendo.com/pt-pt/Jogos/Game-Boy/Pokemon-Red-Version-266109.html?srsltid=AfmBOoq5w4VrcPTVKEHF3YzrYEJRwpzdfj4ofitCDtZ0XWqTtkDY2tKI'
  capaPokemon.forEach((attribute) => {
    attribute.classList.remove('actived');
  });
  red.classList.add('actived');
  })
})

btnNintendo.forEach((btn) => {
  btn.addEventListener('click', () => {
    window.open(linkJogo, '_blank');
  });
})

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
  elementos.descPokemon.innerHTML = eua.descPokemon;
  elementos.descPokemonMobile.innerHTML = eua.descPokemon;
  switch (gameDesc) {
    case 'scarlet':
      elementos.descPokemon.innerHTML = eua.descScarlet;
      elementos.descPokemonMobile.innerHTML = eua.descScarlet;
      break;
      case 'arceus': 
      elementos.descPokemon.innerHTML = eua.descArceus;
      elementos.descPokemonMobile.innerHTML = eua.descArceus;
      break;
      case 'diamond':
        elementos.descPokemon.innerHTML = eua.descDiamond;
        elementos.descPokemonMobile.innerHTML = eua.descDiamond;
        break;
        case 'sword': 
        elementos.descPokemon.innerHTML = eua.descSword;
        elementos.descPokemonMobile.innerHTML = eua.descSword;
        break;
        case 'pikachu': 
        elementos.descPokemon.innerHTML = eua.descPikachu;
        elementos.descPokemonMobile.innerHTML = eua.descPikachu;
        break;
        case 'ultra': 
        elementos.descPokemon.innerHTML = eua.descUltra;
        elementos.descPokemonMobile.innerHTML = eua.descUltra;
        break;
        case 'sun': 
        elementos.descPokemon.innerHTML = eua.descSun;
        elementos.descPokemonMobile.innerHTML = eua.descSun;
        break;
        case 'ultra': 
        elementos.descPokemon.innerHTML = eua.descUltra;
        elementos.descPokemonMobile.innerHTML = eua.descUltra;
        break;
        case 'omega': 
        elementos.descPokemon.innerHTML = eua.descOmega;
        elementos.descPokemonMobile.innerHTML = eua.descOmega;
        break;
        case 'xy': 
        elementos.descPokemon.innerHTML = eua.descY;
        elementos.descPokemonMobile.innerHTML = eua.descY;
        break;
        case 'black2': 
        elementos.descPokemon.innerHTML = eua.descBlack2;
        elementos.descPokemonMobile.innerHTML = eua.descBlack2;
        break;
        case 'white': 
        elementos.descPokemon.innerHTML = eua.descWhite;
        elementos.descPokemonMobile.innerHTML = eua.descWhite;
        break;
        case 'silver': 
        elementos.descPokemon.innerHTML = eua.descSilver;
        elementos.descPokemonMobile.innerHTML = eua.descSilver;
        break;
        case 'platinum': 
        elementos.descPokemon.innerHTML = eua.descPlatinum;
        elementos.descPokemonMobile.innerHTML = eua.descPlatinum;
        break;
        case 'pearl': 
        elementos.descPokemon.innerHTML = eua.descPearl;
        elementos.descPokemonMobile.innerHTML = eua.descPearl;
        break;
        case 'esmerald': 
        elementos.descPokemon.innerHTML = eua.descEsmerald;
        elementos.descPokemonMobile.innerHTML = eua.descEsmerald;
        break;
        case 'fireRed': 
        elementos.descPokemon.innerHTML = eua.descArceus;
        elementos.descPokemonMobile.innerHTML = eua.descArceus;
        break;
        case 'ruby': 
        elementos.descPokemon.innerHTML = eua.descRuby;
         elementos.descPokemonMobile.innerHTML = eua.descRuby;
        break;
        case 'cristal': 
        elementos.descPokemon.innerHTML = eua.descCristal;
        elementos.descPokemonMobile.innerHTML = eua.descCristal;
        break;
        case 'gold': 
        elementos.descPokemon.innerHTML = eua.descGold;
        elementos.descPokemonMobile.innerHTML = eua.descGold;
        break;
        case 'yellow': 
        elementos.descPokemon.innerHTML = eua.descYellow;
        elementos.descPokemonMobile.innerHTML = eua.descYellow;
        break;
        case 'blue': 
        elementos.descPokemon.innerHTML = eua.descBlue;
        elementos.descPokemonMobile.innerHTML = eua.descBlue;
        break;
        case 'red': 
        elementos.descPokemon.innerHTML = eua.descRed;
        elementos.descPokemonMobile.innerHTML = eua.descRed;
        break;
    default:
      break;
  }
  elementos.titlePokedex.innerHTML = eua.titlePokedex;
  elementos.descPokedex.innerHTML = eua.descPokedex;
  elementos.btnPokedex.innerHTML = eua.btnPokedex;
  elementos.textHeader.innerHTML = eua.textHeader;
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
  elementos.descPokemon.innerHTML = brasil.descPokemon;
  switch (gameDesc) {
    case 'scarlet':
      elementos.descPokemon.innerHTML = brasil.descScarlet;
      elementos.descPokemonMobile.innerHTML = brasil.descScarlet;
      break;
      case 'arceus': 
      elementos.descPokemon.innerHTML = brasil.descArceus;
      elementos.descPokemonMobile.innerHTML = brasil.descArceus;
      break;
      case 'diamond':
      elementos.descPokemon.innerHTML = brasil.descDiamond;  
      elementos.descPokemonMobile.innerHTML = brasil.descDiamond;
        break;
        case 'sword': 
        elementos.descPokemon.innerHTML = brasil.descSword;
        elementos.descPokemonMobile.innerHTML = brasil.descSword;
        break;
        case 'pikachu': 
        elementos.descPokemon.innerHTML = brasil.descPikachu;
        elementos.descPokemonMobile.innerHTML = brasil.descPikachu;
        break;
        case 'ultra': 
        elementos.descPokemon.innerHTML = brasil.descUltra;
        elementos.descPokemonMobile.innerHTML = brasil.descUltra;
        break;
        case 'sun': 
        elementos.descPokemon.innerHTML = brasil.descSun;
        elementos.descPokemonMobile.innerHTML = brasil.descSun;
        break;
        case 'ultra': 
        elementos.descPokemon.innerHTML = brasil.descUltra;
        elementos.descPokemonMobile.innerHTML = brasil.descUltra;
        break;
        case 'omega': 
        elementos.descPokemon.innerHTML = brasil.descOmega;
        elementos.descPokemonMobile.innerHTML = brasil.descOmega;
        break;
        case 'xy': 
        elementos.descPokemon.innerHTML = brasil.descY;
        elementos.descPokemonMobile.innerHTML = brasil.descY;
        break;
        case 'black2': 
        elementos.descPokemon.innerHTML = brasil.descBlack2;
        elementos.descPokemonMobile.innerHTML = brasil.descBlack2;
        break;
        case 'white': 
        elementos.descPokemon.innerHTML = brasil.descWhite;
        elementos.descPokemonMobile.innerHTML = brasil.descWhite;
        break;
        case 'silver': 
        elementos.descPokemon.innerHTML = brasil.descSilver;
        elementos.descPokemonMobile.innerHTML = brasil.descSilver;
        break;
        case 'platinum': 
        elementos.descPokemon.innerHTML = brasil.descPlatinum;
        elementos.descPokemonMobile.innerHTML = brasil.descPlatinum;
        break;
        case 'pearl': 
        elementos.descPokemon.innerHTML = brasil.descPearl;
        elementos.descPokemonMobile.innerHTML = brasil.descPearl;
        break;
        case 'esmerald': 
        elementos.descPokemon.innerHTML = brasil.descEsmerald;
        elementos.descPokemonMobile.innerHTML = brasil.descEsmerald;
        break;
        case 'fireRed': 
        elementos.descPokemon.innerHTML = brasil.descArceus;
        elementos.descPokemonMobile.innerHTML = brasil.descArceus;
        break;
        case 'ruby': 
        elementos.descPokemon.innerHTML = brasil.descRuby;
        elementos.descPokemonMobile.innerHTML = brasil.descRuby;
        break;
        case 'cristal': 
        elementos.descPokemon.innerHTML = brasil.descCristal;
        elementos.descPokemonMobile.innerHTML = brasil.descCristal;
        break;
        case 'gold': 
        elementos.descPokemon.innerHTML = brasil.descGold;
        elementos.descPokemonMobile.innerHTML = brasil.descGold;
        break;
        case 'yellow': 
        elementos.descPokemon.innerHTML = brasil.descYellow;
        elementos.descPokemonMobile.innerHTML = brasil.descYellow;
        break;
        case 'blue': 
        elementos.descPokemon.innerHTML = brasil.descBlue;
        elementos.descPokemonMobile.innerHTML = brasil.descBlue;
        break;
        case 'red': 
        elementos.descPokemon.innerHTML = brasil.descRed;
        elementos.descPokemonMobile.innerHTML = brasil.descRed;
        break;
    default:
      break;
  }
  elementos.titlePokedex.innerHTML = brasil.titlePokedex;
  elementos.descPokedex.innerHTML = brasil.descPokedex;
  elementos.btnPokedex.innerHTML = brasil.btnPokedex;
  elementos.textHeader.innerHTML = brasil.textHeader;
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
  elementos.descPokemon.innerHTML = spain.descPokemon;
  switch (gameDesc) {
    case 'scarlet':
      elementos.descPokemon.innerHTML = spain.descScarlet;
      elementos.descPokemonMobile.innerHTML = spain.descScarlet;
      break;
    case 'arceus': 
      elementos.descPokemon.innerHTML = spain.descArceus;
      elementos.descPokemonMobile.innerHTML = spain.descArceus;
      break;
    case 'diamond':
      elementos.descPokemon.innerHTML = spain.descDiamond;
      elementos.descPokemonMobile.innerHTML = spain.descDiamond;
      break;
    case 'sword': 
      elementos.descPokemon.innerHTML = spain.descSword;
      elementos.descPokemonMobile.innerHTML = spain.descSword;
      break;
    case 'pikachu': 
      elementos.descPokemon.innerHTML = spain.descPikachu;
      elementos.descPokemonMobile.innerHTML = spain.descPikachu;
      break;
    case 'ultra': 
      elementos.descPokemon.innerHTML = spain.descUltra;
      elementos.descPokemonMobile.innerHTML = spain.descUltra;
      break;
    case 'sun': 
      elementos.descPokemon.innerHTML = spain.descSun;
      elementos.descPokemonMobile.innerHTML = spain.descSun;
      break;
    case 'omega': 
      elementos.descPokemon.innerHTML = spain.descOmega;
      elementos.descPokemonMobile.innerHTML = spain.descOmega;
      break;
    case 'xy': 
      elementos.descPokemon.innerHTML = spain.descY;
      elementos.descPokemonMobile.innerHTML = spain.descY;
      break;
    case 'black2': 
      elementos.descPokemon.innerHTML = spain.descBlack2;
      elementos.descPokemonMobile.innerHTML = spain.descBlack2;
      break;
    case 'white': 
      elementos.descPokemon.innerHTML = spain.descWhite;
      elementos.descPokemonMobile.innerHTML = spain.descWhite;
      break;
    case 'silver': 
      elementos.descPokemon.innerHTML = spain.descSilver;
      elementos.descPokemonMobile.innerHTML = spain.descSilver;
      break;
    case 'platinum': 
      elementos.descPokemon.innerHTML = spain.descPlatinum;
      elementos.descPokemonMobile.innerHTML = spain.descPlatinum;
      break;
    case 'pearl': 
      elementos.descPokemon.innerHTML = spain.descPearl;
      elementos.descPokemonMobile.innerHTML = spain.descPearl;
      break;
    case 'esmerald': 
      elementos.descPokemon.innerHTML = spain.descEsmerald;
      elementos.descPokemonMobile.innerHTML = spain.descEsmerald;
      break;
    case 'fireRed': 
      elementos.descPokemon.innerHTML = spain.descArceus;
      elementos.descPokemonMobile.innerHTML = spain.descArceus;
      break;
    case 'ruby': 
      elementos.descPokemon.innerHTML = spain.descRuby;
      elementos.descPokemonMobile.innerHTML = spain.descRuby;
      break;
    case 'cristal': 
      elementos.descPokemon.innerHTML = spain.descCristal;
      elementos.descPokemonMobile.innerHTML = spain.descCristal;
      break;
    case 'gold': 
      elementos.descPokemon.innerHTML = spain.descGold;
      elementos.descPokemonMobile.innerHTML = spain.descGold;
      break;
    case 'yellow': 
      elementos.descPokemon.innerHTML = spain.descYellow;
      elementos.descPokemonMobile.innerHTML = spain.descYellow;
      break;
    case 'blue': 
      elementos.descPokemon.innerHTML = spain.descBlue;
      elementos.descPokemonMobile.innerHTML = spain.descBlue;
      break;
    case 'red': 
      elementos.descPokemon.innerHTML = spain.descRed;
      elementos.descPokemonMobile.innerHTML = spain.descRed;
      break;
    default:
      break;
}
  elementos.titlePokedex.innerHTML = spain.titlePokedex;
  elementos.descPokedex.innerHTML = spain.descPokedex;
  elementos.btnPokedex.innerHTML = spain.btnPokedex;
  elementos.textHeader.innerHTML = spain.textHeader;
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
  elementos.descPokemon.innerHTML = franca.descPokemon;
  switch (gameDesc) {
    case 'scarlet':
      elementos.descPokemon.innerHTML = franca.descScarlet;
      elementos.descPokemonMobile.innerHTML = franca.descScarlet;
      break;
    case 'arceus': 
      elementos.descPokemon.innerHTML = franca.descArceus;
      elementos.descPokemonMobile.innerHTML = franca.descArceus;
      break;
    case 'diamond':
      elementos.descPokemon.innerHTML = franca.descDiamond;
      elementos.descPokemonMobile.innerHTML = franca.descDiamond;
      break;
    case 'sword': 
      elementos.descPokemon.innerHTML = franca.descSword;
      elementos.descPokemonMobile.innerHTML = franca.descSword;
      break;
    case 'pikachu': 
      elementos.descPokemon.innerHTML = franca.descPikachu;
      elementos.descPokemonMobile.innerHTML = franca.descPikachu;
      break;
    case 'ultra': 
      elementos.descPokemon.innerHTML = franca.descUltra;
      elementos.descPokemonMobile.innerHTML = franca.descUltra;
      break;
    case 'sun': 
      elementos.descPokemon.innerHTML = franca.descSun;
      elementos.descPokemonMobile.innerHTML = franca.descSun;
      break;
    case 'omega': 
      elementos.descPokemon.innerHTML = franca.descOmega;
      elementos.descPokemonMobile.innerHTML = franca.descOmega;
      break;
    case 'xy': 
      elementos.descPokemon.innerHTML = franca.descY;
      elementos.descPokemonMobile.innerHTML = franca.descY;
      break;
    case 'black2': 
      elementos.descPokemon.innerHTML = franca.descBlack2;
      elementos.descPokemonMobile.innerHTML = franca.descBlack2;
      break;
    case 'white': 
      elementos.descPokemon.innerHTML = franca.descWhite;
      elementos.descPokemonMobile.innerHTML = franca.descWhite;
      break;
    case 'silver': 
      elementos.descPokemon.innerHTML = franca.descSilver;
      elementos.descPokemonMobile.innerHTML = franca.descSilver;
      break;
    case 'platinum': 
      elementos.descPokemon.innerHTML = franca.descPlatinum;
      elementos.descPokemonMobile.innerHTML = franca.descPlatinum;
      break;
    case 'pearl': 
      elementos.descPokemon.innerHTML = franca.descPearl;
      elementos.descPokemonMobile.innerHTML = franca.descPearl;
      break;
    case 'esmerald': 
      elementos.descPokemon.innerHTML = franca.descEsmerald;
      elementos.descPokemonMobile.innerHTML = franca.descEsmerald;
      break;
    case 'fireRed': 
      elementos.descPokemon.innerHTML = franca.descArceus;
      elementos.descPokemonMobile.innerHTML = franca.descArceus;
      break;
    case 'ruby': 
      elementos.descPokemon.innerHTML = franca.descRuby;
      elementos.descPokemonMobile.innerHTML = franca.descRuby;
      break;
    case 'cristal': 
      elementos.descPokemon.innerHTML = franca.descCristal;
      elementos.descPokemonMobile.innerHTML = franca.descCristal;
      break;
    case 'gold': 
      elementos.descPokemon.innerHTML = franca.descGold;
      elementos.descPokemonMobile.innerHTML = franca.descGold;
      break;
    case 'yellow': 
      elementos.descPokemon.innerHTML = franca.descYellow;
      elementos.descPokemonMobile.innerHTML = franca.descYellow;
      break;
    case 'blue': 
      elementos.descPokemon.innerHTML = franca.descBlue;
      elementos.descPokemonMobile.innerHTML = franca.descBlue;
      break;
    case 'red': 
      elementos.descPokemon.innerHTML = franca.descRed;
      elementos.descPokemonMobile.innerHTML = franca.descRed;
      break;
    default:
      break;
}
  elementos.titlePokedex.innerHTML = franca.titlePokedex;
  elementos.descPokedex.innerHTML = franca.descPokedex;
  elementos.btnPokedex.innerHTML = franca.btnPokedex;
  elementos.textHeader.innerHTML = franca.textHeader;
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
  elementos.descPokemon.innerHTML = china.descPokemon;
  switch (gameDesc) {
    case 'scarlet':
      elementos.descPokemon.innerHTML = china.descScarlet;
      elementos.descPokemonMobile.innerHTML = china.descScarlet;
      break;
    case 'arceus': 
      elementos.descPokemon.innerHTML = china.descArceus;
      elementos.descPokemonMobile.innerHTML = china.descArceus;
      break;
    case 'diamond':
      elementos.descPokemon.innerHTML = china.descDiamond;
      elementos.descPokemonMobile.innerHTML = china.descDiamond;
      break;
    case 'sword': 
      elementos.descPokemon.innerHTML = china.descSword;
      elementos.descPokemonMobile.innerHTML = china.descSword;
      break;
    case 'pikachu': 
      elementos.descPokemon.innerHTML = china.descPikachu;
      elementos.descPokemonMobile.innerHTML = china.descPikachu;
      break;
    case 'ultra': 
      elementos.descPokemon.innerHTML = china.descUltra;
      elementos.descPokemonMobile.innerHTML = china.descUltra;
      break;
    case 'sun': 
      elementos.descPokemon.innerHTML = china.descSun;
      elementos.descPokemonMobile.innerHTML = china.descSun;
      break;
    case 'omega': 
      elementos.descPokemon.innerHTML = china.descOmega;
      elementos.descPokemonMobile.innerHTML = china.descOmega;
      break;
    case 'xy': 
      elementos.descPokemon.innerHTML = china.descY;
      elementos.descPokemonMobile.innerHTML = china.descY;
      break;
    case 'black2': 
      elementos.descPokemon.innerHTML = china.descBlack2;
      elementos.descPokemonMobile.innerHTML = china.descBlack2;
      break;
    case 'white': 
      elementos.descPokemon.innerHTML = china.descWhite;
      elementos.descPokemonMobile.innerHTML = china.descWhite;
      break;
    case 'silver': 
      elementos.descPokemon.innerHTML = china.descSilver;
      elementos.descPokemonMobile.innerHTML = china.descSilver;
      break;
    case 'platinum': 
      elementos.descPokemon.innerHTML = china.descPlatinum;
      elementos.descPokemonMobile.innerHTML = china.descPlatinum;
      break;
    case 'pearl': 
      elementos.descPokemon.innerHTML = china.descPearl;
      elementos.descPokemonMobile.innerHTML = china.descPearl;
      break;
    case 'esmerald': 
      elementos.descPokemon.innerHTML = china.descEsmerald;
      elementos.descPokemonMobile.innerHTML = china.descEsmerald;
      break;
    case 'fireRed': 
      elementos.descPokemon.innerHTML = china.descArceus;
      elementos.descPokemonMobile.innerHTML = china.descArceus;
      break;
    case 'ruby': 
      elementos.descPokemon.innerHTML = china.descRuby;
      elementos.descPokemonMobile.innerHTML = china.descRuby;
      break;
    case 'cristal': 
      elementos.descPokemon.innerHTML = china.descCristal;
      elementos.descPokemonMobile.innerHTML = china.descCristal;
      break;
    case 'gold': 
      elementos.descPokemon.innerHTML = china.descGold;
      elementos.descPokemonMobile.innerHTML = china.descGold;
      break;
    case 'yellow': 
      elementos.descPokemon.innerHTML = china.descYellow;
      elementos.descPokemonMobile.innerHTML = china.descYellow;
      break;
    case 'blue': 
      elementos.descPokemon.innerHTML = china.descBlue;
      elementos.descPokemonMobile.innerHTML = china.descBlue;
      break;
    case 'red': 
      elementos.descPokemon.innerHTML = china.descRed;
      elementos.descPokemonMobile.innerHTML = china.descRed;
      break;
    default:
      break;
}
  elementos.titlePokedex.innerHTML = china.titlePokedex;
  elementos.descPokedex.innerHTML = china.descPokedex;
  elementos.btnPokedex.innerHTML = china.btnPokedex;
  elementos.textHeader.innerHTML = china.textHeader;
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

const btnAudio = document.querySelector('.btnAudio');
const btnAudioIcon = document.querySelector('.btnAudio span');

const btnAudioMobile = document.querySelector('.btnAudioMobile');
const btnAudioIconMobile = document.querySelector('.btnAudioMobile span');

let muted = true;
videoPokemon.volume = 0;

let mutedMobile = true;
videoPokemonMobile.volume = 0;

btnAudio.addEventListener('click', () => {
 if (muted == true) {
  videoPokemon.volume = 1;
  muted = false;
  btnAudioIcon.innerHTML = 'volume_up';
 } else {
  muted = true;
  videoPokemon.volume = 0;
  btnAudioIcon.innerHTML = 'volume_off';
 }
});

btnAudioMobile.addEventListener('click', () => {
  if (mutedMobile == true) {
   videoPokemonMobile.volume = 1;
   mutedMobile = false;
   btnAudioIconMobile.innerHTML = 'volume_up';
  } else {
   mutedMobile = true;
   videoPokemonMobile.volume = 0;
   btnAudioIconMobile.innerHTML = 'volume_off';
  }
 });

elementos.btnPokedex.addEventListener('click', () => {
  window.location.href = './pokedex/'
});
