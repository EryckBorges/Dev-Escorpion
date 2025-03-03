const tipos = {
  Planta: "Tipos/Grass.ico",
  Escuro: "Tipos/Dark.ico",
  Inseto: "Tipos/Bug.ico",
  Dragão: "Tipos/Dragon.ico",
  Elétrico: "Tipos/Electric.ico",
  Fada: "Tipos/Fairy.ico",
  Lutador: "Tipos/Fighting.ico",
  Fogo: "Tipos/Fire.ico",
  Voador: "Tipos/Flying.ico",
  Terrestre: "Tipos/Ground.ico",
  Fantasma: "Tipos/Ghost.ico",
  Gelo: "Tipos/Ice.ico",
  Normal: "Tipos/Normal.ico",
  Venenoso: "Tipos/Poison.ico",
  Psíquico: "Tipos/Psychic.ico",
  Rochoso: "Tipos/Rock.ico",
  Metal: "Tipos/Steel.ico",
  Água: "Tipos/Water.ico",
  //Ingles
  Grass: "Tipos/Grass.ico",
  Dark: "Tipos/Dark.ico",
  Bug: "Tipos/Bug.ico",
  Dragon: "Tipos/Dragon.ico",
  Electric: "Tipos/Electric.ico",
  Fairy: "Tipos/Fairy.ico",
  Fighting: "Tipos/Fighting.ico",
  Fire: "Tipos/Fire.ico",
  Flying: "Tipos/Flying.ico",
  Ground: "Tipos/Ground.ico",
  Ghost: "Tipos/Ghost.ico",
  Ice: "Tipos/Ice.ico",
  Normal: "Tipos/Normal.ico",
  Poison: "Tipos/Poison.ico",
  Psychic: "Tipos/Psychic.ico",
  Rock: "Tipos/Rock.ico",
  Steel: "Tipos/Steel.ico",
  Water: "Tipos/Water.ico",
  //Frances
  Plante: "Tipos/Grass.ico",
  Sombre: "Tipos/Dark.ico",
  Insecte: "Tipos/Bug.ico",
  Dragon: "Tipos/Dragon.ico",
  Électrique: "Tipos/Electric.ico",
  Fée: "Tipos/Fairy.ico",
  Combat: "Tipos/Fighting.ico",
  Feu: "Tipos/Fire.ico",
  Volant: "Tipos/Flying.ico",
  Sol: "Tipos/Ground.ico",
  Fantôme: "Tipos/Ghost.ico",
  Glace: "Tipos/Ice.ico",
  Normal: "Tipos/Normal.ico",
  Venimeux: "Tipos/Poison.ico",
  Psy: "Tipos/Psychic.ico",
  Roche: "Tipos/Rock.ico",
  Acier: "Tipos/Steel.ico",
  Eau: "Tipos/Water.ico",
  //Chinês Simplificado
  植物: "Tipos/Grass.ico",
  黑暗: "Tipos/Dark.ico",
  虫: "Tipos/Bug.ico",
  龙: "Tipos/Dragon.ico",
  电: "Tipos/Electric.ico",
  妖精: "Tipos/Fairy.ico",
  格斗: "Tipos/Fighting.ico",
  火: "Tipos/Fire.ico",
  飞行: "Tipos/Flying.ico",
  地面: "Tipos/Ground.ico",
  幽灵: "Tipos/Ghost.ico",
  冰: "Tipos/Ice.ico",
  普通: "Tipos/Normal.ico",
  毒: "Tipos/Poison.ico",
  超能力: "Tipos/Psychic.ico",
  岩石: "Tipos/Rock.ico",
  钢: "Tipos/Steel.ico",
  水: "Tipos/Water.ico",
  //Espanhol
  Planta: "Tipos/Grass.ico",
  Oscuro: "Tipos/Dark.ico",
  Insecto: "Tipos/Bug.ico",
  Dragón: "Tipos/Dragon.ico",
  Eléctrico: "Tipos/Electric.ico",
  Hada: "Tipos/Fairy.ico",
  Lucha: "Tipos/Fighting.ico",
  Fuego: "Tipos/Fire.ico",
  Volador: "Tipos/Flying.ico",
  Tierra: "Tipos/Ground.ico",
  Fantasma: "Tipos/Ghost.ico",
  Hielo: "Tipos/Ice.ico",
  Normal: "Tipos/Normal.ico",
  Veneno: "Tipos/Poison.ico",
  Psíquico: "Tipos/Psychic.ico",
  Roca: "Tipos/Rock.ico",
  Acero: "Tipos/Steel.ico",
  Agua: "Tipos/Water.ico",
};

const tamanho = ["Minúsculo", "Pequeno", "Médio", "Grande", "Enorme"];
const dados = [
  {
    nro: 1,
    som: "./Sons/bulbasaur.mp3",
    nome: "Bulbasaur",
    genero: " ",
    tamanho: 1,
    img: "./pokemons/bulbasaur.gif",
    imgShiny: "./pokemons/bulbasaurShiny.gif",
    tipo: ["Planta", "Venenoso"],
    tipoEua: ["Grass", "Poison"],
    tipoFra: ["Plante", "Venimeux"],
    tipoChn: ["植物", "毒"],
    tipoEsp: ["Planta", "Veneno"],
    descricao:
      "Bulbasaur é uma criatura quadrúpede réptil que lembra um dinossauro jovem, com um azul-verde manchado. Ele tem três dedos brancos ou garras crescendo fora de suas quatro pernas, e seus olhos são de um vermelho brilhante.",
    descricaoEua:
      "Bulbasaur is a quadrupedal reptilian creature that resembles a young dinosaur, with a spotted blue-green body. It has three white claws growing from each of its four legs, and its eyes are bright red.",
    descricaoFra:
      "Bulbizarre est une créature reptilienne quadrupède qui ressemble à un jeune dinosaure, avec un corps bleu-vert tacheté. Il a trois griffes blanches poussant de chacune de ses quatre pattes, et ses yeux sont d'un rouge brillant.",
    descricaoChn:
      "妙蛙种子是一种四足爬行动物，看起来像一只年轻的恐龙，拥有蓝绿色斑点的身体。它的四条腿上各长着三只白色的爪子，眼睛是明亮的红色。",
    descricaoEsp:
      "Bulbasaur es una criatura reptiliana cuadrúpeda que se asemeja a un joven dinosaurio, con un cuerpo azul verdoso con manchas. Tiene tres garras blancas que crecen de cada una de sus cuatro patas, y sus ojos son de un rojo brillante.",
  },
  {
    nro: 2,
    som: "./Sons/ivysaur.mp3",
    nome: "Ivysaur",
    genero: " ",
    tamanho: 2,
    img: "./pokemons/ivysaur.gif",
    imgShiny: "./pokemons/ivysaurShiny.gif",
    tipo: ["Planta", "Venenoso"],
    tipoEua: ["Grass", "Poison"],
    tipoFra: ["Plante", "Venimeux"],
    tipoChn: ["植物", "毒"],
    tipoEsp: ["Planta", "Veneno"],
    descricao:
      "A luz solar fará a flor em suas costas crescer. Conforme Ivysaur for crescendo, essa flor irá desabrochar. Ela irá soltar um doce aroma quando florescer.",
    descricaoEua:
      "Sunlight will make the flower on its back grow. As Ivysaur grows, this flower will bloom. It will release a sweet aroma when it blossoms.",
    descricaoFra:
      "La lumière du soleil fera pousser la fleur sur son dos. À mesure qu'Herbizarre grandit, cette fleur éclora. Elle dégagera un doux parfum lorsqu'elle fleurira.",
    descricaoChn:
      "阳光会让它背上的花朵生长。随着妙蛙植物的成长，这朵花将会绽放。它开花时会释放出甜美的香气。",
    descricaoEsp:
      "La luz solar hará que la flor en su espalda crezca. A medida que Ivysaur crece, esta flor florecerá. Liberará un aroma dulce cuando florezca.",
  },
  {
    nro: 3,
    som: "./Sons/venusaur.mp3",
    nome: "Venusaur",
    genero: "♂",
    nomeGigantamax: "Venusaur Gigantamax",
    tamanho: 3,
    tamanhoMega: 4,
    tamanhoGigantamax: 5,
    img: "./pokemons/venusaur.gif",
    imgShiny: "./pokemons/venusaurShiny.gif",
    imgGigantamax: "./pokemons/venusaur-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/venusaur-gigantamaxShiny.gif",
    nomeMega: "Venusaur Mega",
    imgMega: "./pokemons/venusaur-mega.gif",
    imgMegaShiny: "./pokemons/venusaur-megaShiny.gif",
    tipo: ["Planta", "Venenoso"],
    tipoEua: ["Grass", "Poison"],
    tipoFra: ["Plante", "Venimeux"],
    tipoChn: ["植物", "毒"],
    tipoEsp: ["Planta", "Venenoso"],
    tipoMega: ["Planta", "Venenoso"],
    tipoMegaEua: ["Grass", "Poison"],
    tipoMegaFra: ["Plante", "Venimeux"],
    tipoMegaChn: ["植物", "毒"],
    tipoMegaEsp: ["Planta", "Venenoso"],
    descricaoGigantamax:
      "Na batalha, este pokémon gira em torno de duas vinhas grossas. Se essas vinhas baterem em um prédio de 10 andares, elas podem facilmente derrubá-lo. O poder da forma Gigantamax fez com que a flor do Venusaur crescesse tanto que agora cobre todo o corpo deste pokémon. As pétalas da flor são extremamente espessas e suficientemente elásticas para repelir golpes desanimados. Durante a batalha, ele utiliza essas pétalas como um escudo e balança as suas duas vinhas espessas para atacar o seu alvo. A flor nas costas do pokémon liberta tanto pólen que se assemelha a uma erupção vulcânica. Inalar o pólen pode causar ataques de espirros incontroláveis e respirar uma quantidade excessiva pode até mesmo causar desmaios. Contudo, o pólen também estimula o crescimento das plantas. Dizem que os locais onde o pólen cai ficam repletos de enormes plantas.",
    descricaoMega:
      "Quando Venusaur se torna Mega Venusaur, a flor que está em suas costas cresce de forma ainda mais fantástica do que antes. As pernas e o corpo do pokémon ficam mais resistentes para suportar o peso da flor gigante. Depois de mega evoluir, a habilidade de Venusaur torna-se Thick Fat, que lhe dá alguma proteção contra duas de suas fraquezas: fogo e gelo. A defesa e defesa especial tornam-se mais fortes com a mega evolução.",
    descricaoGigantamaxEua:
      "In battle, this Pokémon spins around two thick vines. If these vines hit a 10-story building, they can easily knock it down. The power of the Gigantamax form has caused Venusaur's flower to grow so large that it now covers the entire body of this Pokémon. The petals of the flower are extremely thick and elastic enough to repel discouraging blows. During battle, it uses these petals as a shield and swings its two thick vines to attack its target. The flower on the Pokémon's back releases so much pollen that it resembles a volcanic eruption. Inhaling the pollen can cause uncontrollable sneezing fits, and breathing in an excessive amount may even cause fainting. However, the pollen also stimulates plant growth. It is said that places where the pollen falls become filled with enormous plants.",
    descricaoGigantamaxFra:
      "En combat, ce Pokémon tourne autour de deux épaisses lianes. Si ces lianes frappent un bâtiment de 10 étages, elles peuvent facilement le faire tomber. La puissance de la forme Gigantamax a fait pousser la fleur de Florizarre au point qu'elle recouvre désormais tout son corps. Les pétales de la fleur sont extrêmement épais et suffisamment élastiques pour repousser les coups. Pendant le combat, il utilise ces pétales comme un bouclier et balance ses deux épaisses lianes pour attaquer sa cible. La fleur sur son dos libère tellement de pollen qu'elle ressemble à une éruption volcanique. Inhaler ce pollen peut provoquer des crises d'éternuements incontrôlables, et en respirer une quantité excessive peut même provoquer des évanouissements. Cependant, ce pollen stimule également la croissance des plantes. On dit que les endroits où il tombe deviennent remplis de plantes gigantesques.",
    descricaoGigantamaxChn:
      "在战斗中，这只宝可梦围绕着两根粗壮的藤蔓旋转。如果这些藤蔓击中一座 10 层高的建筑，它们可以轻松将其击倒。极巨化形态的力量使得妙蛙花的花朵生长得如此巨大，现在已经覆盖了整个身体。这朵花的花瓣极其厚实，并且具有足够的弹性来抵御攻击。在战斗中，它使用这些花瓣作为盾牌，并挥动两根粗壮的藤蔓攻击目标。宝可梦背上的花释放出大量花粉，看起来就像一场火山喷发。吸入这些花粉可能会引发无法控制的打喷嚏，过量吸入甚至可能导致昏厥。然而，这些花粉也能促进植物的生长。据说，花粉落下的地方都会被巨大的植物覆盖。",
    descricaoGigantamaxEsp:
      "En batalla, este Pokémon gira en torno a dos gruesas lianas. Si estas lianas golpean un edificio de 10 pisos, pueden derribarlo con facilidad. El poder de la forma Gigantamax ha hecho que la flor de Venusaur crezca tanto que ahora cubre todo el cuerpo de este Pokémon. Los pétalos de la flor son extremadamente gruesos y lo suficientemente elásticos como para repeler golpes. Durante la batalla, usa estos pétalos como un escudo y balancea sus dos gruesas lianas para atacar a su objetivo. La flor en su espalda libera tanto polen que parece una erupción volcánica. Inhalar el polen puede causar ataques incontrolables de estornudos, y respirar una cantidad excesiva puede incluso causar desmayos. Sin embargo, el polen también estimula el crecimiento de las plantas. Se dice que los lugares donde cae el polen se llenan de enormes plantas.",
    descricaoMegaEua:
      "When Venusaur becomes Mega Venusaur, the flower on its back grows even more spectacularly than before. The Pokémon’s legs and body become more resilient to support the weight of the giant flower. After Mega Evolution, Venusaur’s ability becomes Thick Fat, which grants it some protection against two of its weaknesses: fire and ice. Its defense and special defense grow stronger with Mega Evolution.",
    descricaoMegaFra:
      "Lorsque Florizarre devient Méga-Florizarre, la fleur sur son dos grandit de façon encore plus spectaculaire qu'avant. Les jambes et le corps du Pokémon deviennent plus robustes pour supporter le poids de la fleur géante. Après sa Méga-Évolution, la capacité de Florizarre devient Isograisse, ce qui lui confère une certaine protection contre deux de ses faiblesses : le feu et la glace. Sa défense et sa défense spéciale deviennent plus fortes avec la Méga-Évolution.",
    descricaoMegaChn:
      "当妙蛙花进化成超级妙蛙花时，它背上的花朵比以前更加壮观地生长。它的腿和身体变得更加坚韧，以支撑巨型花朵的重量。超级进化后，妙蛙花的特性变为厚脂肪，使其在面对火属性和冰属性攻击时获得一定的抗性。超级进化还增强了它的防御和特殊防御能力。",
    descricaoMegaEsp:
      "Cuando Venusaur se convierte en Mega Venusaur, la flor en su espalda crece de manera aún más espectacular que antes. Las piernas y el cuerpo del Pokémon se vuelven más resistentes para soportar el peso de la flor gigante. Tras la Mega Evolución, la habilidad de Venusaur se convierte en Sebo, lo que le otorga cierta protección contra dos de sus debilidades: fuego y hielo. Su defensa y defensa especial se fortalecen con la Mega Evolución.",
    descricao:
      "Venusaur é um Pokémon quadrúpede com pele verde acinzentada, e azulada. Ele tem olhos pequenos e circulares vermelhos, dois dentes pontiagudos em sua mandíbula superior, e quatro dentes pontiagudos em sua mandíbula inferior. Tem três dedos com garras em cada pé. Possui um grande coqueiro em suas costas.",
    descricaoEua:
      "Venusaur is a quadruped Pokémon with gray-green and bluish skin. It has small red circular eyes, two sharp teeth in its upper jaw, and four sharp teeth in its lower jaw. It has three claws on each foot. It has a large coconut tree on its back.",
    descricaoFra:
      "Venusaur est un Pokémon quadrupède avec une peau gris-vert et bleuâtre. Il a de petits yeux rouges et ronds, deux dents pointues dans sa mâchoire supérieure et quatre dents pointues dans sa mâchoire inférieure. Il a trois griffes sur chaque pied. Il a un grand cocotier sur son dos.",
    descricaoChn:
      "Venasaur是一个四足宝可梦，皮肤呈灰绿色和蓝色。它有小而圆的红色眼睛，上颚有两颗锋利的牙齿，下颚有四颗锋利的牙齿。每只脚上有三个爪子。它背上长着一棵大椰子树。",
    descricaoEsp:
      "Venusaur es un Pokémon cuadrúpedo con piel verde grisácea y azulada. Tiene ojos pequeños y circulares rojos, dos dientes afilados en su mandíbula superior y cuatro dientes afilados en su mandíbula inferior. Tiene tres garras en cada pie. Tiene una gran palmera en su espalda.",
  },
  {
    nro: 3,
    som: "./Sons/venusaur.mp3",
    nome: "Venusaur",
    genero: "♀",
    tamanho: 3,
    tamanhoMega: 4,
    tamanhoGigantamax: 5,
    img: "./pokemons/venusaur-f.gif",
    imgShiny: "./pokemons/venusaur-fShiny.gif",
    nomeGigantamax: "Venusaur Gigantamax",
    imgGigantamax: "./pokemons/venusaur-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/venusaur-gigantamaxShiny.gif",
    nomeMega: "Venusaur Mega",
    imgMega: "./pokemons/venusaur-mega.gif",
    imgMegaShiny: "./pokemons/venusaur-megaShiny.gif",
    tipo: ["Planta", "Venenoso"],
    tipoEua: ["Grass", "Poison"],
    tipoFra: ["Plante", "Venimeux"],
    tipoChn: ["植物", "毒"],
    tipoEsp: ["Planta", "Venenoso"],
    tipoMega: ["Planta", "Venenoso"],
    tipoMegaEua: ["Grass", "Poison"],
    tipoMegaFra: ["Plante", "Venimeux"],
    tipoMegaChn: ["植物", "毒"],
    tipoMegaEsp: ["Planta", "Venenoso"],
    descricaoMega:
      "Quando Venusaur se torna Mega Venusaur, a flor que está em suas costas cresce de forma ainda mais fantástica do que antes. As pernas e o corpo do pokémon ficam mais resistentes para suportar o peso da flor gigante. Depois de mega evoluir, a habilidade de Venusaur torna-se Thick Fat, que lhe dá alguma proteção contra duas de suas fraquezas: fogo e gelo. A defesa e defesa especial tornam-se mais fortes com a mega evolução.",
    descricaoGigantamaxEua:
      "In battle, this Pokémon spins around two thick vines. If these vines hit a 10-story building, they can easily knock it down. The power of the Gigantamax form has caused Venusaur's flower to grow so large that it now covers the entire body of this Pokémon. The petals of the flower are extremely thick and elastic enough to repel discouraging blows. During battle, it uses these petals as a shield and swings its two thick vines to attack its target. The flower on the Pokémon's back releases so much pollen that it resembles a volcanic eruption. Inhaling the pollen can cause uncontrollable sneezing fits, and breathing in an excessive amount may even cause fainting. However, the pollen also stimulates plant growth. It is said that places where the pollen falls become filled with enormous plants.",
    descricaoGigantamaxFra:
      "En combat, ce Pokémon tourne autour de deux épaisses lianes. Si ces lianes frappent un bâtiment de 10 étages, elles peuvent facilement le faire tomber. La puissance de la forme Gigantamax a fait pousser la fleur de Florizarre au point qu'elle recouvre désormais tout son corps. Les pétales de la fleur sont extrêmement épais et suffisamment élastiques pour repousser les coups. Pendant le combat, il utilise ces pétales comme un bouclier et balance ses deux épaisses lianes pour attaquer sa cible. La fleur sur son dos libère tellement de pollen qu'elle ressemble à une éruption volcanique. Inhaler ce pollen peut provoquer des crises d'éternuements incontrôlables, et en respirer une quantité excessive peut même provoquer des évanouissements. Cependant, ce pollen stimule également la croissance des plantes. On dit que les endroits où il tombe deviennent remplis de plantes gigantesques.",
    descricaoGigantamaxChn:
      "在战斗中，这只宝可梦围绕着两根粗壮的藤蔓旋转。如果这些藤蔓击中一座 10 层高的建筑，它们可以轻松将其击倒。极巨化形态的力量使得妙蛙花的花朵生长得如此巨大，现在已经覆盖了整个身体。这朵花的花瓣极其厚实，并且具有足够的弹性来抵御攻击。在战斗中，它使用这些花瓣作为盾牌，并挥动两根粗壮的藤蔓攻击目标。宝可梦背上的花释放出大量花粉，看起来就像一场火山喷发。吸入这些花粉可能会引发无法控制的打喷嚏，过量吸入甚至可能导致昏厥。然而，这些花粉也能促进植物的生长。据说，花粉落下的地方都会被巨大的植物覆盖。",
    descricaoGigantamaxEsp:
      "En batalla, este Pokémon gira en torno a dos gruesas lianas. Si estas lianas golpean un edificio de 10 pisos, pueden derribarlo con facilidad. El poder de la forma Gigantamax ha hecho que la flor de Venusaur crezca tanto que ahora cubre todo el cuerpo de este Pokémon. Los pétalos de la flor son extremadamente gruesos y lo suficientemente elásticos como para repeler golpes. Durante la batalla, usa estos pétalos como un escudo y balancea sus dos gruesas lianas para atacar a su objetivo. La flor en su espalda libera tanto polen que parece una erupción volcánica. Inhalar el polen puede causar ataques incontrolables de estornudos, y respirar una cantidad excesiva puede incluso causar desmayos. Sin embargo, el polen también estimula el crecimiento de las plantas. Se dice que los lugares donde cae el polen se llenan de enormes plantas.",
    descricaoMegaEua:
      "When Venusaur becomes Mega Venusaur, the flower on its back grows even more spectacularly than before. The Pokémon’s legs and body become more resilient to support the weight of the giant flower. After Mega Evolution, Venusaur’s ability becomes Thick Fat, which grants it some protection against two of its weaknesses: fire and ice. Its defense and special defense grow stronger with Mega Evolution.",
    descricaoMegaFra:
      "Lorsque Florizarre devient Méga-Florizarre, la fleur sur son dos grandit de façon encore plus spectaculaire qu'avant. Les jambes et le corps du Pokémon deviennent plus robustes pour supporter le poids de la fleur géante. Après sa Méga-Évolution, la capacité de Florizarre devient Isograisse, ce qui lui confère une certaine protection contre deux de ses faiblesses : le feu et la glace. Sa défense et sa défense spéciale deviennent plus fortes avec la Méga-Évolution.",
    descricaoMegaChn:
      "当妙蛙花进化成超级妙蛙花时，它背上的花朵比以前更加壮观地生长。它的腿和身体变得更加坚韧，以支撑巨型花朵的重量。超级进化后，妙蛙花的特性变为厚脂肪，使其在面对火属性和冰属性攻击时获得一定的抗性。超级进化还增强了它的防御和特殊防御能力。",
    descricaoMegaEsp:
      "Cuando Venusaur se convierte en Mega Venusaur, la flor en su espalda crece de manera aún más espectacular que antes. Las piernas y el cuerpo del Pokémon se vuelven más resistentes para soportar el peso de la flor gigante. Tras la Mega Evolución, la habilidad de Venusaur se convierte en Sebo, lo que le otorga cierta protección contra dos de sus debilidades: fuego y hielo. Su defensa y defensa especial se fortalecen con la Mega Evolución.",
    descricao:
      "Venusaur é um Pokémon quadrúpede com pele verde acinzentada, e azulada. Ele tem olhos pequenos e circulares vermelhos, dois dentes pontiagudos em sua mandíbula superior, e quatro dentes pontiagudos em sua mandíbula inferior. Tem três dedos com garras em cada pé. Possui um grande coqueiro em suas costas.",
    descricaoEua:
      "Venusaur is a quadruped Pokémon with gray-green and bluish skin. It has small red circular eyes, two sharp teeth in its upper jaw, and four sharp teeth in its lower jaw. It has three claws on each foot. It has a large coconut tree on its back.",
    descricaoFra:
      "Venusaur est un Pokémon quadrupède avec une peau gris-vert et bleuâtre. Il a de petits yeux rouges et ronds, deux dents pointues dans sa mâchoire supérieure et quatre dents pointues dans sa mâchoire inférieure. Il a trois griffes sur chaque pied. Il a un grand cocotier sur son dos.",
    descricaoChn:
      "Venasaur是一个四足宝可梦，皮肤呈灰绿色和蓝色。它有小而圆的红色眼睛，上颚有两颗锋利的牙齿，下颚有四颗锋利的牙齿。每只脚上有三个爪子。它背上长着一棵大椰子树。",
    descricaoEsp:
      "Venusaur es un Pokémon cuadrúpedo con piel verde grisácea y azulada. Tiene ojos pequeños y circulares rojos, dos dientes afilados en su mandíbula superior y cuatro dientes afilados en su mandíbula inferior. Tiene tres garras en cada pie. Tiene una gran palmera en su espalda.",
  },
  {
    nro: 4,
    som: "./Sons/charmander.mp3",
    nome: "Charmander",
    genero: " ",
    tamanho: 1,
    img: "./pokemons/charmander.gif",
    imgShiny: "./pokemons/charmanderShiny.gif",
    tipo: ["Fogo"],
    tipoEua: ["Fire"],
    tipoFra: ["Feu"],
    tipoChn: ["火"],
    tipoEsp: ["Fuego"],
    descricao:
      "Charmander é um Pokémon pequeno, de corpo laranja e cauda flamejante. Ele se caracteriza pela chama na ponta de sua cauda, que reflete sua saúde e bem-estar.",
    descricaoEua:
      "Charmander is a small Pokémon with an orange body and a fiery tail. Its flame at the tip of its tail reflects its health and well-being.",
    descricaoFra:
      "Charmander est un petit Pokémon avec un corps orange et une queue enflammée. La flamme au bout de sa queue reflète sa santé et son bien-être.",
    descricaoChn:
      "小火龙是一个小型宝可梦，身体呈橙色，尾巴上有火焰。尾巴尖的火焰反映了它的健康和福祉。",
    descricaoEsp:
      "Charmander es un Pokémon pequeño de cuerpo naranja y cola en llamas. La llama en la punta de su cola refleja su salud y bienestar.",
  },
  {
    nro: 5,
    som: "./Sons/charmeleon.mp3",
    nome: "Charmeleon",
    genero: " ",
    tamanho: 2,
    img: "./pokemons/charmeleon.gif",
    imgShiny: "./pokemons/charmeleonShiny.gif",
    tipo: ["Fogo"],
    tipoEua: ["Fire"],
    tipoFra: ["Feu"],
    tipoChn: ["火"],
    tipoEsp: ["Fuego"],
    descricao:
      "Charmeleon tem uma natureza perversa e gosta de lutar contra oponentes fortes. Suas chamas azuis intensas refletem seu temperamento explosivo.",
    descricaoEua:
      "Charmeleon has a wicked nature and enjoys battling strong opponents. Its intense blue flames reflect its explosive temperament.",
    descricaoFra:
      "Charmeleon a une nature perverse et aime se battre contre de puissants adversaires. Ses flammes bleues intenses reflètent son tempérament explosif.",
    descricaoChn:
      "火恐龙有着邪恶的性格，喜欢与强大的对手作战。它那强烈的蓝色火焰反映了它爆炸性的脾气。",
    descricaoEsp:
      "Charmeleon tiene una naturaleza perversa y disfruta luchando contra oponentes fuertes. Sus intensas llamas azules reflejan su temperamento explosivo.",
  },
  {
    nro: 6,
    som: "./Sons/charizard.mp3",
    nome: "Charizard",
    genero: " ",
    tamanho: 5,
    tamanhoMega: 5,
    tamanhoGigantamax: 6,
    img: "./pokemons/charizard.gif",
    imgShiny: "./pokemons/charizardShiny.gif",
    nomeGigantamax: "Charizard Gigantamax",
    imgGigantamax: "./pokemons/charizard-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/charizard-gigantamaxShiny.gif",
    megaX: "true",
    nomeMega: "Charizard Mega",
    imgMegaX: "./pokemons/charizard-megax.gif",
    imgMegaShinyX: "./pokemons/charizard-megaxShiny.gif",
    imgMegaY: "./pokemons/charizard-megay.gif",
    imgMegaShinyY: "./pokemons/charizard-megayShiny.gif",
    tipo: ["Fogo", "Voador"],
    tipoEua: ["Fire", "Flying"],
    tipoFra: ["Feu", "Volant"],
    tipoChn: ["火", "飞行"],
    tipoEsp: ["Fuego", "Volador"],
    tipoMegaX: ["Dragão", "Fogo"],
    tipoMegaEuaX: ["Dragon", "Fire"],
    tipoMegaFraX: ["Dragon", "Feu"],
    tipoMegaChnX: ["龙", "火"],
    tipoMegaEspX: ["Dragón", "Fuego"],
    tipoMegaY: ["Fogo", "Voador"],
    tipoMegaEuaY: ["Fire", "Flying"],
    tipoMegaFraY: ["Feu", "Volant"],
    tipoMegaChnY: ["火", "飞行"],
    tipoMegaEspY: ["Fuego", "Volador"],
    descricaoMegaX:
      "Quando Charizard segura num Charizardite X, pode mega evoluir para Mega Charizard X! Ao contrário de Mega Charizard Y, Mega Charizard X muda de tipo quando mega evolui, tornando-se fogo/dragão. Com esta transformação, o corpo de Mega Charizard X fica preto e as suas chamas tornam-se azuis e mais quentes. O ataque de Charizard aumenta significativamente. A habilidade de Mega Charizard X muda para Tough Claws, que aumenta o poder dos golpes de contato direto.",
    descricaoMegaY:
      "Mega Charizard Y é o resultado da mega evolução de Charizard utilizando Charizardite Y. Os seus chifres pontudos e a sua cauda comprida dão a ele uma imagem precisa e elegante. Mega Charizard Y está a um nível inigualável em termos de capacidade de voo, podendo atingir uma altura incrível. Quando Charizard mega evolui para esta forma, suas asas tornam-se bem maiores. Após mega evoluir, o ataque especial de Mega Charizard Y aumenta significativamente e sua habilidade torna-se Drought, aumentando o poder dos golpes de fogo.",
    descricaoGigantamax:
      "Esta figura colossal com asas de fogo de um Charizard foi produzida pela energia Gigantamax. A chama dentro de seu corpo queima mais de 2.000° C. Quando Charizard ruge, a temperatura sobe ainda mais. As chamas dentro do seu corpo tornaram-se mais fortes e, agora, solta fogo pela boca, pelos chifres e para além da cauda. Parece que a força das chamas aumenta quando o Charizard ruge. As chamas do Charizard tornaram-se mais fortes com o poder Gigantamax e, agora, formam asas nas suas costas. Essas asas são mais quentes que magma e Charizard pode utilizá-las para queimar os seus oponentes!",
    descricaoGigantamaxEua:
      "This colossal, winged figure of a Charizard was produced by Gigantamax energy. The flames within its body burn at over 2,000°C. When Charizard roars, the temperature rises even higher. The flames inside its body have become stronger, and now it spews fire from its mouth, horns, and beyond its tail. It appears that the power of the flames increases when Charizard roars. The flames of Charizard have grown stronger with Gigantamax power, now forming wings on its back. These wings are hotter than magma, and Charizard can use them to burn its opponents!",
    descricaoGigantamaxFra:
      "Cette figure colossale aux ailes de feu de Dracaufeu a été créée par l'énergie Gigantamax. La flamme à l'intérieur de son corps brûle à plus de 2 000°C. Lorsque Dracaufeu rugit, la température augmente encore plus. Les flammes à l'intérieur de son corps sont devenues plus puissantes et, désormais, il crache du feu par la bouche, les cornes et au-delà de la queue. Il semble que la puissance des flammes augmente lorsque Dracaufeu rugit. Les flammes de Dracaufeu se sont intensifiées grâce à l'énergie Gigantamax et forment maintenant des ailes sur son dos. Ces ailes sont plus chaudes que du magma, et Dracaufeu peut les utiliser pour brûler ses adversaires !",
    descricaoGigantamaxChn:
      "这只拥有燃烧翅膀的巨型喷火龙是由极巨化能量产生的。它体内的火焰燃烧温度超过 2000°C。当喷火龙咆哮时，温度会变得更高。它体内的火焰变得更加强大，现在它能从嘴巴、角以及尾巴外喷出火焰。似乎喷火龙的咆哮能增强其火焰的威力。极巨化力量让喷火龙的火焰变得更加强烈，并在背后形成了翅膀。这些翅膀比岩浆还要炽热，喷火龙可以用它们来灼烧对手！",
    descricaoGigantamaxEsp:
      "Esta colosal figura alada de un Charizard fue producida por la energía Gigantamax. Las llamas dentro de su cuerpo arden a más de 2,000°C. Cuando Charizard ruge, la temperatura sube aún más. Las llamas dentro de su cuerpo se han vuelto más fuertes y ahora lanza fuego por la boca, los cuernos y más allá de su cola. Parece que la fuerza de las llamas aumenta cuando Charizard ruge. Las llamas de Charizard se han intensificado con el poder Gigantamax y ahora forman alas en su espalda. Estas alas son más calientes que el magma, y Charizard puede usarlas para quemar a sus oponentes.",
    descricaoMegaEuaX:
      "When Charizard holds a Charizardite X, it can Mega Evolve into Mega Charizard X! Unlike Mega Charizard Y, Mega Charizard X changes its type upon Mega Evolution, becoming a Fire/Dragon-type. With this transformation, Mega Charizard X’s body turns black, and its flames become blue and hotter. Charizard's attack increases significantly. Mega Charizard X's ability changes to Tough Claws, which boosts the power of contact moves.",
    descricaoMegaFraX:
      "Lorsque Dracaufeu tient une Dracaufite X, il peut méga-évoluer en Méga-Dracaufeu X ! Contrairement à Méga-Dracaufeu Y, Méga-Dracaufeu X change de type en méga-évoluant, devenant de type Feu/Dragon. Avec cette transformation, le corps de Méga-Dracaufeu X devient noir et ses flammes deviennent bleues et plus chaudes. L’attaque de Dracaufeu augmente considérablement. La capacité de Méga-Dracaufeu X devient Griffe Dure, qui augmente la puissance des attaques de contact.",
    descricaoMegaChnX:
      "当喷火龙持有喷火龙进化石 X 时，它可以超进化为超级喷火龙 X！与超级喷火龙 Y 不同，超级喷火龙 X 在超进化后会改变属性，变为火/龙属性。超进化后，超级喷火龙 X 的身体变为黑色，火焰变成蓝色且更炽热。喷火龙的攻击力大幅提升。超级喷火龙 X 的特性变为硬爪，可以增强接触类招式的威力。",
    descricaoMegaEspX:
      "Cuando Charizard sostiene una Charizardita X, ¡puede megaevolucionar a Mega Charizard X! A diferencia de Mega Charizard Y, Mega Charizard X cambia de tipo al megaevolucionar, convirtiéndose en tipo Fuego/Dragón. Con esta transformación, el cuerpo de Mega Charizard X se vuelve negro y sus llamas se tornan azules y más calientes. El ataque de Charizard aumenta significativamente. La habilidad de Mega Charizard X cambia a Garra Dura, que aumenta el poder de los movimientos de contacto.",
    descricaoMegaEuaY:
      "Mega Charizard Y is the result of Charizard's Mega Evolution using Charizardite Y. Its sharp horns and long tail give it a precise and elegant appearance. Mega Charizard Y reaches an unparalleled level in terms of flight capability, being able to attain incredible heights. When Charizard Mega Evolves into this form, its wings become significantly larger. After Mega Evolution, Mega Charizard Y's Special Attack increases significantly, and its ability becomes Drought, boosting the power of Fire-type moves.",
    descricaoMegaFraY:
      "Méga-Dracaufeu Y est le résultat de la Méga-Évolution de Dracaufeu en utilisant Dracaufite Y. Ses cornes pointues et sa longue queue lui donnent une apparence précise et élégante. Méga-Dracaufeu Y atteint un niveau inégalé en termes de capacité de vol, pouvant atteindre des hauteurs incroyables. Lorsque Dracaufeu Méga-Évolue sous cette forme, ses ailes deviennent considérablement plus grandes. Après la Méga-Évolution, l’Attaque Spéciale de Méga-Dracaufeu Y augmente considérablement et sa capacité devient Sécheresse, renforçant la puissance des attaques de type Feu.",
    descricaoMegaChnY:
      "超级喷火龙Y是喷火龙使用喷火龙进化石Y进行超级进化的结果。它锋利的角和长长的尾巴赋予它一种精确而优雅的外观。超级喷火龙Y在飞行能力方面达到了无与伦比的水平，能够达到令人难以置信的高度。当喷火龙进化为这种形态时，它的翅膀会变得更大。超级进化后，超级喷火龙Y的特殊攻击大幅提升，并且它的特性变为日照，大大增强了火属性招式的威力。",
    descricaoMegaEspY:
      "Mega Charizard Y es el resultado de la Mega Evolución de Charizard utilizando Charizardita Y. Sus afilados cuernos y su larga cola le dan una apariencia precisa y elegante. Mega Charizard Y alcanza un nivel inigualable en términos de capacidad de vuelo, pudiendo llegar a alturas increíbles. Cuando Charizard Mega Evoluciona a esta forma, sus alas se vuelven significativamente más grandes. Después de la Mega Evolución, el Ataque Especial de Mega Charizard Y aumenta significativamente y su habilidad se convierte en Sequía, aumentando el poder de los movimientos de tipo Fuego.",
    descricao:
      "Charizard é um Pokémon grande e feroz, com uma cauda flamejante. Ele é capaz de causar incêndios com suas poderosas chamas e pode voar grandes distâncias.",
    descricaoEua:
      "Charizard is a large and fierce Pokémon with a fiery tail. It can cause fires with its powerful flames and fly long distances.",
    descricaoFra:
      "Charizard est un grand et féroce Pokémon avec une queue enflammée. Il peut provoquer des incendies avec ses puissantes flammes et voler sur de longues distances.",
    descricaoChn:
      "喷火龙是一个大型且凶猛的宝可梦，尾巴上有火焰。它能够用强大的火焰引发火灾，并飞行长距离。",
    descricaoEsp:
      "Charizard es un Pokémon grande y feroz, con una cola en llamas. Puede causar incendios con sus poderosas llamas y volar grandes distancias.",
  },
  {
    nro: 7,
    som: "./Sons/squirtle.mp3",
    nome: "Squirtle",
    genero: " ",
    tamanho: 1,
    img: "./pokemons/squirtle.gif",
    imgShiny: "./pokemons/squirtleShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Squirtle é um Pokémon aquático, com uma carapaça azul e habilidades de defesa excepcionais. Ele pode lançar água com alta pressão para se defender.",
    descricaoEua:
      "Squirtle is a water-type Pokémon with a blue shell and exceptional defensive abilities. It can shoot water with high pressure to defend itself.",
    descricaoFra:
      "Squirtle est un Pokémon aquatique avec une coquille bleue et des capacités défensives exceptionnelles. Il peut projeter de l'eau sous haute pression pour se défendre.",
    descricaoChn:
      "喷火龙是一个水类型宝可梦，拥有蓝色的壳和卓越的防御能力。它可以用高压水流来保护自己。",
    descricaoEsp:
      "Squirtle es un Pokémon de tipo agua con un caparazón azul y habilidades defensivas excepcionales. Puede lanzar agua con alta presión para defenderse.",
  },
  {
    nro: 8,
    som: "./Sons/wartortle.mp3",
    nome: "Wartortle",
    genero: " ",
    tamanho: 2,
    img: "./pokemons/wartortle.gif",
    imgShiny: "./pokemons/wartortleShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Ele controla habilmente suas orelhas e cauda peludas para manter o equilíbrio enquanto nada. É reconhecido como um símbolo de longevidade. Se a concha tiver algas, esse Wartortle é muito antigo.",
    descricaoEua:
      "It skillfully controls its furry ears and tail to maintain balance while swimming. It is recognized as a symbol of longevity. If the shell has algae, this Wartortle is very old.",
    descricaoFra:
      "Il contrôle habilement ses oreilles et sa queue poilues pour garder l'équilibre pendant qu'il nage. Il est reconnu comme un symbole de longévité. Si la coquille a des algues, ce Wartortle est très vieux.",
    descricaoChn:
      "它熟练地控制着毛茸茸的耳朵和尾巴，以保持游泳时的平衡。如果壳上有藻类，这只Wartortle非常古老。",
    descricaoEsp:
      "Controla hábilmente sus orejas y cola peludas para mantener el equilibrio mientras nada. Es reconocido como un símbolo de longevidad. Si la cáscara tiene algas, este Wartortle es muy viejo.",
  },
  {
    nro: 9,
    som: "./Sons/blastoise.mp3",
    nome: "Blastoise",
    genero: " ",
    tamanho: 3,
    tamanhoMega: 5,
    tamanhoGigantamax: 6,
    nomeGigantamax: "Blastoise Gigantamax",
    imgGigantamax: "./pokemons/blastoise-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/blastoise-gigantamaxShiny.gif",
    img: "./pokemons/blastoise.gif",
    imgShiny: "./pokemons/blastoiseShiny.gif",
    megaX: "false",
    nomeMega: "Blastoise Mega",
    imgMega: "./pokemons/blastoise-mega.gif",
    imgMegaShiny: "./pokemons/blastoise-megaShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    tipoMega: ["Água"],
    tipoMegaEua: ["Water"],
    tipoMegaFra: ["Eau"],
    tipoMegaChn: ["水"],
    tipoMegaEsp: ["Agua"],
    descricaoMega:
      "As duas bazucas nos ombros do Blastoise transformam-se num único e grande canhão quando mega evolui para Mega Blastoise. Este canhão dispõe de um alcance tão grande que consegue atingir alvos a mais de dez quilômetros de distância! Com a sua nova habilidade Mega Launcher, os golpes de pulsação como Water Pulse e Dark Pulse tornam-se ainda mais fortes.",
    descricaoGigantamax:
      "Não é muito bom em tiro de precisão. Ao atacar, ele apenas dispara seus 31 canhões sem parar. A água disparada do canhão principal central deste pokémon tem energia suficiente para abrir um buraco em uma montanha. A carapaça do Blastoise cresceu para acompanhar o seu corpo e tem também novos canhões de grandes dimensões. O Blastoise Gigantamax pode adaptar-se a várias situações, utilizando múltiplas combinações com os seus 31 canhões de diferentes tamanhos. Nas batalhas, não se preocupa em fazer pontaria. Em vez disso, dispara torrentes de água potentes e dinâmicas de vários canhões para deixar os oponentes sem escapatória. O canhão principal no centro do casco do Blastoise é surpreendentemente poderoso. Diz a lenda que este canhão já abriu buracos nas montanhas. Ele também consegue mover os 12 canhões grandes que cercam o canhão central de forma independente, permitindo-lhe direcionar os seus ataques em qualquer direção, seja no solo ou no ar.",
    descricaoMegaEua:
      "The two cannons on Blastoise's shoulders merge into a single large cannon when it mega evolves into Mega Blastoise. This cannon has such a long range that it can hit targets more than ten kilometers away! With its new ability, Mega Launcher, pulse-based moves like Water Pulse and Dark Pulse become even stronger.",
    descricaoGigantamaxEua:
      "It is not very good at precision shooting. When attacking, it just fires all 31 cannons nonstop. The water shot from this Pokémon's main central cannon has enough energy to blast a hole in a mountain. Blastoise’s shell has grown to match its body and now features additional large cannons. Gigantamax Blastoise can adapt to various situations, using multiple combinations of its 31 differently sized cannons. In battles, it does not bother aiming precisely. Instead, it fires powerful and dynamic torrents of water from multiple cannons, leaving opponents with no escape. The main cannon in the center of Blastoise’s shell is surprisingly powerful. Legends say this cannon has already blasted holes in mountains. It can also move the 12 large cannons surrounding the central cannon independently, allowing it to direct its attacks in any direction, whether on the ground or in the air.",

    descricaoMegaFra:
      "Les deux canons sur les épaules de Tortank se fusionnent en un seul grand canon lorsqu'il méga-évolue en Méga-Tortank. Ce canon a une portée si grande qu'il peut atteindre des cibles à plus de dix kilomètres de distance ! Avec sa nouvelle capacité, Méga Blaster, les attaques à pulsation comme Vibraqua et Vibrobscur deviennent encore plus puissantes.",
    descricaoGigantamaxFra:
      "Il n’est pas très doué pour les tirs de précision. Lorsqu’il attaque, il tire simplement ses 31 canons sans interruption. L’eau projetée par le canon central principal de ce Pokémon a assez d’énergie pour percer une montagne. La carapace de Tortank a grandi pour s’adapter à son corps et possède désormais des canons supplémentaires de grande taille. Gigamax Tortank peut s’adapter à diverses situations, en utilisant plusieurs combinaisons avec ses 31 canons de tailles différentes. En combat, il ne se soucie pas de viser précisément. Au lieu de cela, il projette de puissants torrents d’eau dynamiques depuis plusieurs canons pour empêcher ses adversaires de s’échapper. Le canon principal au centre de la carapace de Tortank est étonnamment puissant. La légende raconte que ce canon a déjà perforé des montagnes. Il peut également déplacer indépendamment les 12 grands canons entourant le canon central, lui permettant de diriger ses attaques dans toutes les directions, au sol ou dans les airs.",

    descricaoMegaChn:
      "喷火龙肩上的两门炮在Mega进化为Mega水箭龟后融合成一门巨大的加农炮。这门炮的射程极长，可以击中十公里以外的目标！凭借其新特性“超级发射器”，像水波动和恶波动这样的脉冲类招式变得更加强大。",
    descricaoGigantamaxChn:
      "它并不擅长精确射击。攻击时，它只是不停地发射31门大炮。这个宝可梦的主加农炮发射的水流具有足够的能量，可以击穿一座山。水箭龟的壳随着身体一起成长，现在拥有额外的大型加农炮。超极巨化水箭龟可以适应各种战斗情况，使用31门不同大小的加农炮进行多种组合。在战斗中，它不关心瞄准，而是从多个加农炮中发射强大的水流，让对手无处可逃。水箭龟壳中央的主加农炮异常强大。传说这门炮曾经打穿过山脉。它还可以独立移动包围主加农炮的12门大炮，使其能够在地面或空中朝任何方向发射攻击。",

    descricaoMegaEsp:
      "Los dos cañones en los hombros de Blastoise se fusionan en un solo cañón grande cuando megaevoluciona a Mega Blastoise. Este cañón tiene un alcance tan largo que puede alcanzar objetivos a más de diez kilómetros de distancia. Con su nueva habilidad Mega Launcher, los movimientos de pulso como Pulso Agua y Pulso Umbrío se vuelven aún más fuertes.",
    descricaoGigantamaxEsp:
      "No es muy bueno disparando con precisión. Cuando ataca, simplemente dispara sus 31 cañones sin parar. El agua disparada desde el cañón central principal de este Pokémon tiene suficiente energía para abrir un agujero en una montaña. El caparazón de Blastoise ha crecido para acompañar su cuerpo y ahora cuenta con nuevos cañones de gran tamaño. Gigantamax Blastoise puede adaptarse a varias situaciones, utilizando múltiples combinaciones con sus 31 cañones de diferentes tamaños. En las batallas, no se preocupa por apuntar. En su lugar, lanza poderosas y dinámicas torrentes de agua desde varios cañones para dejar a los oponentes sin escapatoria. El cañón principal en el centro del caparazón de Blastoise es sorprendentemente poderoso. La leyenda dice que este cañón ha perforado montañas. También puede mover los 12 cañones grandes que rodean el cañón central de forma independiente, permitiéndole dirigir sus ataques en cualquier dirección, ya sea en tierra o en el aire.",
    descricao:
      "Os canhões de foguete em seu casco disparam jatos de água capazes de perfurar o aço grosso. Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma patada, ele se retirará dentro de sua concha.",
    descricaoEua:
      "The rocket cannons on its shell shoot jets of water powerful enough to pierce thick steel. It crushes its enemies under its heavy body to cause fainting. In one kick, it retreats into its shell.",
    descricaoFra:
      "Les canons à fusée sur son carapace tirent des jets d'eau capables de percer de l'acier épais. Il écrase ses ennemis sous son corps lourd pour provoquer des évanouissements. En un coup de pied, il se retire dans sa coquille.",
    descricaoChn:
      "它壳上的火箭炮发射的水流足以穿透厚钢。它用沉重的身体压垮敌人，使其昏迷。只要一脚，它就会收回自己的壳里。",
    descricaoEsp:
      "Los cañones de cohete en su caparazón disparan chorros de agua capaces de perforar acero grueso. Aplasta a sus enemigos bajo su cuerpo pesado para causar desmayos. Con una patada, se retira dentro de su caparazón.",
  },
  {
    nro: 10,
    som: "./Sons/caterpie.mp3",
    nome: "Caterpie",
    genero: " ",
    tamanho: 0,
    img: "./pokemons/caterpie.gif",
    imgShiny: "./pokemons/caterpieShiny.gif",
    tipo: ["Inseto"],
    tipoEua: ["Bug"],
    tipoFra: ["Insecte"],
    tipoChn: ["虫"],
    tipoEsp: ["Insecto"],
    descricao:
      "Seus pés curtos possuem ventosas que lhe permitem escalar incansavelmente encostas e paredes. Para proteção, ele libera um cheiro horrível da antena em sua cabeça para afastar os inimigos.",
    descricaoEua:
      "Its short feet have suction cups that allow it to tirelessly climb slopes and walls. For protection, it releases a horrible smell from the antenna on its head to repel enemies.",
    descricaoFra:
      "Ses pieds courts ont des ventouses qui lui permettent de grimper sans relâche les pentes et les murs. Pour se protéger, il libère une odeur horrible de l'antenne sur sa tête pour repousser les ennemis.",
    descricaoChn:
      "它的短脚上有吸盘，可以让它不停地攀爬坡道和墙壁。为了保护自己，它会从头上的天线释放出一种可怕的气味，来驱赶敌人。",
    descricaoEsp:
      "Sus pies cortos tienen ventosas que le permiten trepar sin cesar colinas y paredes. Para protección, libera un olor horrible desde la antena en su cabeza para repeler a los enemigos.",
  },
  {
    nro: 11,
    som: "./Sons/metapod.mp3",
    nome: "Metapod",
    genero: " ",
    tamanho: 1,
    img: "./pokemons/metapod.gif",
    imgShiny: "./pokemons/metapodShiny.gif",
    tipo: ["Inseto"],
    tipoEua: ["Bug"],
    tipoFra: ["Insecte"],
    tipoChn: ["虫"],
    tipoEsp: ["Insecto"],
    descricao:
      "Ele controla habilmente suas orelhas e cauda peludas para manter o equilíbrio enquanto nada. É reconhecido como um símbolo de longevidade. Se a concha tiver algas, esse Wartortle é muito antigo.",
    descricaoEua:
      "It skillfully controls its furry ears and tail to maintain balance while swimming. It is recognized as a symbol of longevity. If the shell has algae, this Wartortle is very old.",
    descricaoFra:
      "Il contrôle habilement ses oreilles et sa queue poilues pour garder l'équilibre pendant qu'il nage. Il est reconnu comme un symbole de longévité. Si la coquille a des algues, ce Wartortle est très vieux.",
    descricaoChn:
      "它熟练地控制着毛茸茸的耳朵和尾巴，以保持游泳时的平衡。如果壳上有藻类，这只Wartortle非常古老。",
    descricaoEsp:
      "Controla hábilmente sus orejas y cola peludas para mantener el equilibrio mientras nada. Es reconocido como un símbolo de longevidad. Si la cáscara tiene algas, este Wartortle es muy viejo.",
  },
  {
    nro: 12,
    som: "./Sons/butterfree.mp3",
    nome: "Butterfree",
    genero: "♂",
    tamanho: 3,
    tamanhoGigantamax: 6,
    nomeGigantamax: "Butterfree Gigantamax",
    imgGigantamax: "./pokemons/butterfree-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/butterfree-gigantamaxShiny.gif",
    img: "./pokemons/butterfree.gif",
    imgShiny: "./pokemons/butterfreeShiny.gif",
    tipo: ["Inseto", "Voador"],
    tipoEua: ["Bug", "Flying"],
    tipoFra: ["Insecte", "Volant"],
    tipoChn: ["虫", "飞行"],
    tipoEsp: ["Insecto", "Volador"],
    descricaoGigantamax:
      "A energia cristalizada do Gigantamax compõe as escamas incrivelmente brilhantes e altamente tóxicas deste pokémon. Depois de ter oponentes presos em um tornado que poderia derrubar um caminhão de 10 toneladas, ele os derrota com suas escamas venenosas. A sua característica mais notável são as asas ofuscantes, que cresceram em proporções gigantescas. A luz das suas asas provém das escamas, que podem provocar paralisia, envenenamento ou sono nos seus adversários. Essas escamas são as armas mais eficazes do Butterfree! As grandes asas dele podem criar um vento com força suficiente para levantar um caminhão de 10 toneladas, simplesmente batendo as asas. Este vento também espalha escamas venenosas na área, sendo muito perigoso estar perto deste pokémon.",
    descricaoGigantamaxEua:
      "The crystallized energy of Gigantamax forms the incredibly bright and highly toxic scales of this Pokémon. After trapping opponents in a tornado strong enough to topple a 10-ton truck, it defeats them with its poisonous scales. Its most remarkable feature is its dazzling wings, which have grown to gigantic proportions. The light from its wings comes from the scales, which can cause paralysis, poisoning, or sleep in its opponents. These scales are Butterfree’s most effective weapons! Its large wings can create a wind strong enough to lift a 10-ton truck just by flapping. This wind also spreads toxic scales in the area, making it very dangerous to be near this Pokémon.",
    descricaoGigantamaxFra:
      "L'énergie cristallisée du Gigamax compose les écailles incroyablement brillantes et hautement toxiques de ce Pokémon. Après avoir piégé ses adversaires dans une tornade assez puissante pour renverser un camion de 10 tonnes, il les achève avec ses écailles empoisonnées. Sa caractéristique la plus remarquable est ses ailes éblouissantes, qui ont grandi jusqu'à des proportions gigantesques. La lumière de ses ailes provient de ses écailles, qui peuvent provoquer la paralysie, l'empoisonnement ou le sommeil chez ses adversaires. Ces écailles sont les armes les plus efficaces de Papilusion ! Ses grandes ailes peuvent créer un vent suffisamment puissant pour soulever un camion de 10 tonnes rien qu'en battant des ailes. Ce vent disperse également des écailles toxiques dans la zone, rendant dangereux tout rapprochement avec ce Pokémon.",
    descricaoGigantamaxChn:
      "超极巨化的结晶能量形成了这只宝可梦令人炫目的高毒性鳞片。在将对手困在足以掀翻10吨卡车的龙卷风后，它用剧毒鳞片击败他们。它最显著的特征是其耀眼的翅膀，这些翅膀已经变得巨大无比。它的翅膀散发的光芒来自鳞片，这些鳞片能够让对手陷入麻痹、中毒或睡眠状态。这些鳞片是巴大蝶最有效的武器！它巨大的翅膀只需轻轻扇动，就能产生足以掀起10吨重卡车的狂风。同时，这股风还会在周围扩散剧毒鳞片，使靠近这只宝可梦变得极其危险。",
    descricaoGigantamaxEsp:
      "La energía cristalizada del Gigantamax forma las escamas increíblemente brillantes y altamente tóxicas de este Pokémon. Después de atrapar a sus oponentes en un tornado lo suficientemente fuerte como para volcar un camión de 10 toneladas, los derrota con sus escamas venenosas. Su característica más notable son sus deslumbrantes alas, que han crecido a proporciones gigantescas. La luz de sus alas proviene de sus escamas, las cuales pueden causar parálisis, envenenamiento o sueño en sus oponentes. ¡Estas escamas son las armas más efectivas de Butterfree! Sus enormes alas pueden generar un viento lo suficientemente fuerte como para levantar un camión de 10 toneladas con solo aletear. Este viento también esparce escamas venenosas por la zona, lo que hace muy peligroso estar cerca de este Pokémon.",
    descricao:
      "Na batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar.Coleta mel todos os dias. Ele esfrega mel nos pelos das pernas para levá-lo de volta ao ninho.",
    descricaoEua:
      "In battle, it beats its wings at high speed to release highly toxic dust into the air. It collects honey every day. It rubs honey on the hairs of its legs to carry it back to the nest.",
    descricaoFra:
      "En bataille, il bat ses ailes à grande vitesse pour libérer de la poussière hautement toxique dans l'air. Il collecte du miel tous les jours. Il frotte du miel sur les poils de ses pattes pour le ramener au nid.",
    descricaoChn:
      "在格斗中，它以高速拍打翅膀，释放出空气中极其有毒的粉尘。它每天都收集蜜蜂。它将蜂蜜擦在腿上的毛发上，带回巢穴。",
    descricaoEsp:
      "En combate, bate sus alas a gran velocidad para liberar polvo altamente tóxico en el aire. Recoge miel todos los días. Frota la miel en los pelos de sus patas para llevarla de regreso al nido.",
  },
  {
    nro: 12,
    som: "./Sons/butterfree.mp3",
    nome: "Butterfree",
    genero: "♀",
    tamanho: 3,
    tamanhoGigantamax: 6,
    img: "./pokemons/butterfree-f.gif",
    imgShiny: "./pokemons/butterfree-fShiny.gif",
    nomeGigantamax: "Butterfree Gigantamax",
    imgGigantamax: "./pokemons/butterfree-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/butterfree-gigantamaxShiny.gif",
    tipo: ["Inseto", "Voador"],
    tipoEua: ["Bug", "Flying"],
    tipoFra: ["Insecte", "Volant"],
    tipoChn: ["虫", "飞行"],
    tipoEsp: ["Insecto", "Volador"],
    descricaoGigantamaxEua:
      "The crystallized energy of Gigantamax forms the incredibly bright and highly toxic scales of this Pokémon. After trapping opponents in a tornado strong enough to topple a 10-ton truck, it defeats them with its poisonous scales. Its most remarkable feature is its dazzling wings, which have grown to gigantic proportions. The light from its wings comes from the scales, which can cause paralysis, poisoning, or sleep in its opponents. These scales are Butterfree’s most effective weapons! Its large wings can create a wind strong enough to lift a 10-ton truck just by flapping. This wind also spreads toxic scales in the area, making it very dangerous to be near this Pokémon.",
    descricaoGigantamaxFra:
      "L'énergie cristallisée du Gigamax compose les écailles incroyablement brillantes et hautement toxiques de ce Pokémon. Après avoir piégé ses adversaires dans une tornade assez puissante pour renverser un camion de 10 tonnes, il les achève avec ses écailles empoisonnées. Sa caractéristique la plus remarquable est ses ailes éblouissantes, qui ont grandi jusqu'à des proportions gigantesques. La lumière de ses ailes provient de ses écailles, qui peuvent provoquer la paralysie, l'empoisonnement ou le sommeil chez ses adversaires. Ces écailles sont les armes les plus efficaces de Papilusion ! Ses grandes ailes peuvent créer un vent suffisamment puissant pour soulever un camion de 10 tonnes rien qu'en battant des ailes. Ce vent disperse également des écailles toxiques dans la zone, rendant dangereux tout rapprochement avec ce Pokémon.",
    descricaoGigantamaxChn:
      "超极巨化的结晶能量形成了这只宝可梦令人炫目的高毒性鳞片。在将对手困在足以掀翻10吨卡车的龙卷风后，它用剧毒鳞片击败他们。它最显著的特征是其耀眼的翅膀，这些翅膀已经变得巨大无比。它的翅膀散发的光芒来自鳞片，这些鳞片能够让对手陷入麻痹、中毒或睡眠状态。这些鳞片是巴大蝶最有效的武器！它巨大的翅膀只需轻轻扇动，就能产生足以掀起10吨重卡车的狂风。同时，这股风还会在周围扩散剧毒鳞片，使靠近这只宝可梦变得极其危险。",
    descricaoGigantamaxEsp:
      "La energía cristalizada del Gigantamax forma las escamas increíblemente brillantes y altamente tóxicas de este Pokémon. Después de atrapar a sus oponentes en un tornado lo suficientemente fuerte como para volcar un camión de 10 toneladas, los derrota con sus escamas venenosas. Su característica más notable son sus deslumbrantes alas, que han crecido a proporciones gigantescas. La luz de sus alas proviene de sus escamas, las cuales pueden causar parálisis, envenenamiento o sueño en sus oponentes. ¡Estas escamas son las armas más efectivas de Butterfree! Sus enormes alas pueden generar un viento lo suficientemente fuerte como para levantar un camión de 10 toneladas con solo aletear. Este viento también esparce escamas venenosas por la zona, lo que hace muy peligroso estar cerca de este Pokémon.",
    descricao:
      "Na batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar.Coleta mel todos os dias. Ele esfrega mel nos pelos das pernas para levá-lo de volta ao ninho.",
    descricaoEua:
      "In battle, it beats its wings at high speed to release highly toxic dust into the air. It collects honey every day. It rubs honey on the hairs of its legs to carry it back to the nest.",
    descricaoFra:
      "En bataille, il bat ses ailes à grande vitesse pour libérer de la poussière hautement toxique dans l'air. Il collecte du miel tous les jours. Il frotte du miel sur les poils de ses pattes pour le ramener au nid.",
    descricaoChn:
      "在格斗中，它以高速拍打翅膀，释放出空气中极其有毒的粉尘。它每天都收集蜜蜂。它将蜂蜜擦在腿上的毛发上，带回巢穴。",
    descricaoEsp:
      "En combate, bate sus alas a gran velocidad para liberar polvo altamente tóxico en el aire. Recoge miel todos los días. Frota la miel en los pelos de sus patas para llevarla de regreso al nido.",
  },
  {
    nro: 13,
    som: "./Sons/weedle.mp3",
    nome: "Weedle",
    genero: " ",
    tamanho: 1,
    img: "./pokemons/weedle.gif",
    imgShiny: "./pokemons/weedleShiny.gif",
    tipo: ["Inseto", "Venenoso"],
    tipoEua: ["Bug", "Poison"],
    tipoFra: ["Insecte", "Venimeux"],
    tipoChn: ["虫", "毒"],
    tipoEsp: ["Insecto", "Veneno"],
    descricao:
      "Weedle é um Pokémon semelhante a uma larva que possui um ferrão venenoso na cabeça. Ele pode atacar quando se sente ameaçado.",
    descricaoEua:
      "Weedle is a Pokémon resembling a larva with a venomous stinger on its head. It can attack when it feels threatened.",
    descricaoFra:
      "Weedle est un Pokémon ressemblant à une larve avec un dard vénéneux sur sa tête. Il peut attaquer lorsqu'il se sent menacé.",
    descricaoChn:
      "蚊香蛙是一种类似于幼虫的宝可梦，头部有一个毒刺。它感到威胁时可以发动攻击。",
    descricaoEsp:
      "Weedle es un Pokémon que se asemeja a una larva con un aguijón venenoso en la cabeza. Puede atacar cuando se siente amenazado.",
  },
  {
    nro: 14,
    som: "./Sons/kakuna.mp3",
    nome: "Kakuna",
    genero: " ",
    tamanho: 2,
    img: "./pokemons/kakuna.gif",
    imgShiny: "./pokemons/kakunaShiny.gif",
    tipo: ["Inseto", "Venenoso"],
    tipoEua: ["Bug", "Poison"],
    tipoFra: ["Insecte", "Venimeux"],
    tipoChn: ["虫", "毒"],
    tipoEsp: ["Insecto", "Veneno"],
    descricao:
      "Kakuna é a forma de casulo de Weedle. Ele permanece imóvel enquanto se prepara para a sua evolução, tornando-se mais resistente.",
    descricaoEua:
      "Kakuna is Weedle's cocoon form. It remains still as it prepares for its evolution, becoming tougher.",
    descricaoFra:
      "Kakuna est la forme de chrysalide de Weedle. Il reste immobile en se préparant pour son évolution, devenant plus résistant.",
    descricaoChn:
      "铁甲蛹是蚊香蛙的蛹形态。在准备进化时，它保持不动，变得更加坚硬。",
    descricaoEsp:
      "Kakuna es la forma de capullo de Weedle. Permanece inmóvil mientras se prepara para su evolución, volviéndose más resistente.",
  },
  {
    nro: 15,
    som: "./Sons/beedrill.mp3",
    nome: "Beedrill",
    genero: " ",
    tamanho: 3,
    tamanhoMega: 5,
    img: "./pokemons/beedrill.gif",
    imgShiny: "./pokemons/beedrillShiny.gif",
    nomeMega: "Beedrill Mega",
    imgMega: "./pokemons/beedrill-mega.gif",
    imgMegaShiny: "./pokemons/beedrill-megaShiny.gif",
    tipo: ["Inseto", "Venenoso"],
    tipoEua: ["Bug", "Poison"],
    tipoFra: ["Insecte", "Venimeux"],
    tipoChn: ["虫", "毒"],
    tipoEsp: ["Insecto", "Veneno"],
    tipoMega: ["Inseto", "Venenoso"],
    tipoMegaEua: ["Bug", "Poison"],
    tipoMegaFra: ["Insecte", "Venimeux"],
    tipoMegaChn: ["虫", "毒"],
    tipoMegaEsp: ["Insecto", "Veneno"],
    descricaoMegaEua:
      "Its legs have become poison stingers. It stabs its prey repeatedly with the stingers on its limbs, dealing the final blow with the stinger on its rear.",
    descricaoMega:
      "Suas pernas se transformaram em ferrões venenosos. Ele apunhala sua presa repetidamente com os ferrões em seus membros, desferindo o golpe final com o ferrão em sua cauda.",
    descricaoMegaEsp:
      "Sus patas se han convertido en aguijones venenosos. Apuñala repetidamente a su presa con los aguijones de sus extremidades, asestando el golpe final con el aguijón de su cola.",
    descricaoMegaChn:
      "它的腿已经变成了毒刺。它用四肢的毒刺反复刺击猎物，并用尾部的毒刺给予最终一击。",
    descricaoMegaFra:
      "Ses pattes se sont transformées en dards venimeux. Il transperce sa proie à plusieurs reprises avec les dards de ses membres, portant le coup de grâce avec celui de sa queue.",
    descricao:
      "Beedrill é a evolução final de Weedle. Ele tem grandes asas e dois ferrões venenosos que usa para atacar qualquer um que ameace seu território.",
    descricaoEua:
      "Beedrill is Weedle's final evolution. It has large wings and two venomous stingers that it uses to attack anyone who threatens its territory.",
    descricaoFra:
      "Beedrill est l'évolution finale de Weedle. Il a de grandes ailes et deux dards venimeux qu'il utilise pour attaquer toute personne menaçant son territoire.",
    descricaoChn:
      "大针蜂是蚊香蛙的最终进化形态。它有着大翅膀和两根毒刺，用来攻击任何威胁它领地面的敌人。",
    descricaoEsp:
      "Beedrill es la evolución final de Weedle. Tiene grandes alas y dos aguijones venenosos que usa para atacar a cualquiera que amenace su territorio.",
  },
  {
    nro: 16,
    som: "./Sons/pidgey.mp3",
    nome: "Pidgey",
    genero: " ",
    tamanho: 2,
    img: "./pokemons/pidgey.gif",
    imgShiny: "./pokemons/pidgeyShiny.gif",
    tipo: ["Normal", "Voador"],
    tipoEua: ["Normal", "Flying"],
    tipoFra: ["Normal", "Volant"],
    tipoChn: ["普通", "飞行"],
    tipoEsp: ["Normal", "Volador"],
    descricao:
      "Pidgey é um Pokémon pequeno, muito comum nas cidades, com grande habilidade de voo. Ele forma grandes bandos e migra para diferentes regiões.",
    descricaoEua:
      "Pidgey is a small Pokémon, very common in cities, with great flying ability. It forms large flocks and migrates to different regions.",
    descricaoFra:
      "Pidgey est un petit Pokémon, très commun dans les villes, avec une grande capacité de vol. Il forme de grands groupes et migre vers différentes régions.",
    descricaoChn:
      "波波是一种小型宝可梦，在城市中非常常见，具有出色的飞行能力。它组成大群，迁移到不同的地区。",
    descricaoEsp:
      "Pidgey es un pequeño Pokémon, muy común en las ciudades, con gran capacidad para volar. Forma grandes bandadas y migra a diferentes regiones.",
  },
  {
    nro: 17,
    som: "./Sons/pidgeotto.mp3",
    nome: "Pidgeotto",
    genero: " ",
    tamanho: 3,
    img: "./pokemons/pidgeotto.gif",
    imgShiny: "./pokemons/pidgeottoShiny.gif",
    tipo: ["Normal", "Voador"],
    tipoEua: ["Normal", "Flying"],
    tipoFra: ["Normal", "Volant"],
    tipoChn: ["普通", "飞行"],
    tipoEsp: ["Normal", "Volador"],
    descricao:
      "Pidgeotto é a evolução de Pidgey, um pássaro com maior força e habilidade de voo. Ele pode voar a grandes altitudes e percorrer longas distâncias.",
    descricaoEua:
      "Pidgeotto is the evolution of Pidgey, a bird with greater strength and flying ability. It can fly at great altitudes and travel long distances.",
    descricaoFra:
      "Pidgeotto est l'évolution de Pidgey, un oiseau avec plus de force et de capacités de vol. Il peut voler à de grandes altitudes et parcourir de longues distances.",
    descricaoChn:
      "比比鸟是波波的进化形态，一只拥有更强力量和飞行能力的鸟类。它可以飞到很高的高度，飞越长距离。",
    descricaoEsp:
      "Pidgeotto es la evolución de Pidgey, un pájaro con mayor fuerza y capacidad de vuelo. Puede volar a grandes altitudes y recorrer largas distancias.",
  },
  {
    nro: 18,
    som: "./Sons/pidgeot.mp3",
    nome: "Pidgeot",
    genero: " ",
    tamanho: 5,
    tamanhoMega: 4,
    img: "./pokemons/pidgeot.gif",
    imgShiny: "./pokemons/pidgeotShiny.gif",
    nomeMega: "Pidgeot Mega",
    imgMega: "./pokemons/pidgeot-mega.gif",
    imgMegaShiny: "./pokemons/pidgeot-megaShiny.gif",
    tipo: ["Normal", "Voador"],
    tipoEua: ["Normal", "Flying"],
    tipoFra: ["Normal", "Volant"],
    tipoChn: ["普通", "飞行"],
    tipoEsp: ["Normal", "Volador"],
    tipoMega: ["Normal", "Voador"],
    tipoMegaEua: ["Normal", "Flying"],
    tipoMegaFra: ["Normal", "Volant"],
    tipoMegaChn: ["普通", "飞行"],
    tipoMegaEsp: ["Normal", "Volador"],
    descricaoMegaEua:
      "With its muscular strength now greatly increased, it can fly continuously for two weeks without resting.",
    descricaoMega:
      "Com sua força muscular agora enormemente aumentada, ele pode voar continuamente por duas semanas sem descansar.",
    descricaoMegaEsp:
      "Con su fuerza muscular ahora enormemente aumentada, puede volar continuamente durante dos semanas sin descansar.",
    descricaoMegaChn: "由于肌肉力量大幅增强，它可以连续飞行两周而不休息。",
    descricaoMegaFra:
      "Avec sa force musculaire maintenant grandement accrue, il peut voler en continu pendant deux semaines sans se reposer.",
    descricao:
      "Pidgeot é a forma final evoluída de Pidgey. Com suas penas impressionantes, ele pode atingir velocidades incríveis durante o voo.",
    descricaoEua:
      "Pidgeot is the final evolved form of Pidgey. With its impressive feathers, it can reach incredible speeds during flight.",
    descricaoFra:
      "Pidgeot est la forme finale évoluée de Pidgey. Avec ses plumes impressionnantes, il peut atteindre des vitesses incroyables en vol.",
    descricaoChn:
      "比雕是比比鸟的最终进化形态。凭借其令人印象深刻的羽毛，它可以在飞行中达到惊人的速度。",
    descricaoEsp:
      "Pidgeot es la forma final evolucionada de Pidgey. Con sus impresionantes plumas, puede alcanzar velocidades increíbles durante el vuelo.",
  },
  {
    nro: 19,
    som: "./Sons/rattata.mp3",
    nome: "Rattata",
    nomeAlola: "Rattata Alola",
    genero: "♂",
    generoAlola: "",
    tamanho: 1,
    img: "./pokemons/rattata.gif",
    imgShiny: "./pokemons/rattataShiny.gif",
    imgAlola: "./pokemons/rattata-alola.gif",
    imgAlolaShiny: "./pokemons/rattata-alolaShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    tipoAlola: ["Normal", "Escuro"],
    tipoAlolaEua: ["Normal", "Dark"],
    tipoAlolaFra: ["Normal", "Sombre"],
    tipoAlolaChn: ["普通", "黑暗"],
    tipoAlolaEsp: ["Normal", "Oscuro"],
    descricaoAlola:
      "Com seus incisivos, mastiga através de portas e se infiltra nas casas das pessoas. E então, com uma torcida dos bigodes, rouba toda comida que encontrar.",
    descricaoAlolaEua:
      "With its incisors, it chews through doors and sneaks into people's houses. And then, with a whisker cheer, it steals all the food it can find.",
    descricaoAlolaFra:
      "Avec ses incisives, il mâche à travers les portes et se faufile dans les maisons des gens. Puis, avec une acclamation de ses moustaches, il vole toute la nourriture qu'il trouve.",
    descricaoAlolaChn:
      "用它的切牙咬穿门，潜入人们的房子。然后，带着胡须的欢呼，它偷走所有能找到的食物。",
    descricaoAlolaEsp:
      "Con sus incisivos, mastica a través de las puertas y se infiltra en las casas de las personas. Y luego, con una ovación de sus bigotes, roba toda la comida que encuentra.",
    descricao:
      "Vai mastigar qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área.",
    descricaoEua:
      "It will chew on anything with its fangs. If you see one, you can be sure there are more than 40 living in the area.",
    descricaoFra:
      "Il mâchera tout ce qui se trouve sur son chemin avec ses crocs. Si vous en voyez un, vous pouvez être sûr qu'il y en a plus de 40 dans la zone.",
    descricaoChn:
      "它会用牙齿咬任何东西。如果你看到一只，可以确定周围有40多只。",
    descricaoEsp:
      "Mastica cualquier cosa con sus colmillos. Si ves uno, puedes estar seguro de que hay más de 40 viviendo en el área.",
  },
  {
    nro: 19,
    som: "./Sons/rattata.mp3",
    nome: "Rattata",
    genero: "♀",
    nomeAlola: "Rattata Alola",
    generoAlola: "",
    imgAlola: "./pokemons/rattata-alola.gif",
    imgAlolaShiny: "./pokemons/rattata-alolaShiny.gif",
    tamanho: 1,
    img: "./pokemons/rattata-f.gif",
    imgShiny: "./pokemons/rattata-fShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    tipoAlola: ["Normal", "Escuro"],
    tipoAlolaEua: ["Normal", "Dark"],
    tipoAlolaFra: ["Normal", "Sombre"],
    tipoAlolaChn: ["普通", "黑暗"],
    tipoAlolaEsp: ["Normal", "Oscuro"],
    descricaoAlola:
      "Com seus incisivos, mastiga através de portas e se infiltra nas casas das pessoas. E então, com uma torcida dos bigodes, rouba toda comida que encontrar.",
    descricaoAlolaEua:
      "With its incisors, it chews through doors and sneaks into people's houses. And then, with a whisker cheer, it steals all the food it can find.",
    descricaoAlolaFra:
      "Avec ses incisives, il mâche à travers les portes et se faufile dans les maisons des gens. Puis, avec une acclamation de ses moustaches, il vole toute la nourriture qu'il trouve.",
    descricaoAlolaChn:
      "用它的切牙咬穿门，潜入人们的房子。然后，带着胡须的欢呼，它偷走所有能找到的食物。",
    descricaoAlolaEsp:
      "Con sus incisivos, mastica a través de las puertas y se infiltra en las casas de las personas. Y luego, con una ovación de sus bigotes, roba toda la comida que encuentra.",
    descricao:
      "Vai mastigar qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área.",
    descricaoEua:
      "It will chew on anything with its fangs. If you see one, you can be sure there are more than 40 living in the area.",
    descricaoFra:
      "Il mâchera tout ce qui se trouve sur son chemin avec ses crocs. Si vous en voyez un, vous pouvez être sûr qu'il y en a plus de 40 dans la zone.",
    descricaoChn:
      "它会用牙齿咬任何东西。如果你看到一只，可以确定周围有40多只。",
    descricaoEsp:
      "Mastica cualquier cosa con sus colmillos. Si ves uno, puedes estar seguro de que hay más de 40 viviendo en el área.",
  },
  {
    nro: 20,
    som: "./Sons/raticate.mp3",
    nome: "Raticate",
    genero: "♂",
    nomeAlola: "Raticate Alola",
    generoAlola: "",
    imgAlola: "./pokemons/raticate-alola.gif",
    imgAlolaShiny: "./pokemons/raticate-alolaShiny.gif",
    tamanho: 2,
    img: "./pokemons/raticate.gif",
    imgShiny: "./pokemons/raticateShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    tipoAlola: ["Normal", "Escuro"],
    tipoAlolaEua: ["Normal", "Dark"],
    tipoAlolaFra: ["Normal", "Sombre"],
    tipoAlolaChn: ["普通", "黑暗"],
    tipoAlolaEsp: ["Normal", "Oscuro"],
    descricaoAlolaEua:
      "It makes its Rattata underlings gather food for it, dining solely on the most nutritious and delicious fare.",
    descricaoAlola:
      "Faz com que seus subordinados Rattata reúnam comida para ele, alimentando-se exclusivamente dos alimentos mais nutritivos e deliciosos.",
    descricaoAlolaEsp:
      "Hace que sus subordinados Rattata recojan comida para él, alimentándose únicamente de los alimentos más nutritivos y deliciosos.",
    descricaoAlolaChn:
      "它让它的下属大鼠为它收集食物，只吃最有营养和美味的食物。",
    descricaoAlolaFra:
      "Il fait en sorte que ses subordonnés Rattata rassemblent de la nourriture pour lui, ne se nourrissant que des aliments les plus nutritifs et délicieux.",
    descricao:
      "Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas.",
    descricaoEua:
      "Its hind legs are webbed. They act as fins so it can swim in rivers and hunt for prey.",
    descricaoFra:
      "Ses pattes arrière sont palmées. Elles agissent comme des nageoires pour lui permettre de nager dans les rivières et de chasser des proies.",
    descricaoChn:
      "它的后腿是有蹼的。它们像鳍一样起作用，让它能在河流中游泳并猎取猎物。",
    descricaoEsp:
      "Sus patas traseras son palmeadas. Actúan como aletas para que pueda nadar en ríos y cazar presas.",
  },
  {
    nro: 20,
    som: "./Sons/raticate.mp3",
    nome: "Raticate",
    genero: "♀",
    nomeAlola: "Raticate Alola Totem",
    generoAlola: "",
    imgAlola: "./pokemons/raticate-totem.gif",
    imgAlolaShiny: "./pokemons/raticate-totemShiny.gif",
    tamanho: 2,
    img: "./pokemons/raticate-f.gif",
    imgShiny: "./pokemons/raticate-fShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    tipoAlola: ["Normal", "Escuro"],
    tipoAlolaEua: ["Normal", "Dark"],
    tipoAlolaFra: ["Normal", "Sombre"],
    tipoAlolaChn: ["普通", "黑暗"],
    tipoAlolaEsp: ["Normal", "Oscuro"],
    descricaoAlolaEua:
      "It makes its Rattata underlings gather food for it, dining solely on the most nutritious and delicious fare.",
    descricaoAlola:
      "Faz com que seus subordinados Rattata reúnam comida para ele, alimentando-se exclusivamente dos alimentos mais nutritivos e deliciosos.",
    descricaoAlolaEsp:
      "Hace que sus subordinados Rattata recojan comida para él, alimentándose únicamente de los alimentos más nutritivos y deliciosos.",
    descricaoAlolaChn:
      "它让它的下属大鼠为它收集食物，只吃最有营养和美味的食物。",
    descricaoAlolaFra:
      "Il fait en sorte que ses subordonnés Rattata rassemblent de la nourriture pour lui, ne se nourrissant que des aliments les plus nutritifs et délicieux.",
    descricao:
      "Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas.",
    descricaoEua:
      "Its hind legs are webbed. They act as fins so it can swim in rivers and hunt for prey.",
    descricaoFra:
      "Ses pattes arrière sont palmées. Elles agissent comme des nageoires pour lui permettre de nager dans les rivières et de chasser des proies.",
    descricaoChn:
      "它的后腿是有蹼的。它们像鳍一样起作用，让它能在河流中游泳并猎取猎物。",
    descricaoEsp:
      "Sus patas traseras son palmeadas. Actúan como aletas para que pueda nadar en ríos y cazar presas.",
  },
  {
    nro: 21,
    som: "./Sons/spearow.mp3",
    nome: "Spearow",
    genero: " ",
    tamanho: 0,
    img: "./pokemons/spearow.gif",
    imgShiny: "./pokemons/spearowShiny.gif",
    tipo: ["Normal", "Voador"],
    tipoEua: ["Normal", "Flying"],
    tipoFra: ["Normal", "Volant"],
    tipoChn: ["普通", "飞行"],
    tipoEsp: ["Normal", "Volador"],
    descricao:
      "Inepto para voar alto. No entanto, ele pode voar muito rápido para proteger seu território.",
    descricaoEua:
      "Inept at flying high, but it can fly very fast to protect its territory.",
    descricaoFra:
      "Inepte à voler haut, mais il peut voler très vite pour protéger son territoire.",
    descricaoChn: "不擅长高飞，但它能飞得非常快以保护自己的领地面。",
    descricaoEsp:
      "Inepto para volar alto. Sin embargo, puede volar muy rápido para proteger su territorio.",
  },
  {
    nro: 22,
    som: "./Sons/fearow.mp3",
    nome: "Fearow",
    genero: " ",
    tamanho: 5,
    img: "./pokemons/fearow.gif",
    imgShiny: "./pokemons/fearowShiny.gif",
    tipo: ["Normal", "Voador"],
    tipoEua: ["Normal", "Flying"],
    tipoFra: ["Normal", "Volant"],
    tipoChn: ["普通", "飞行"],
    tipoEsp: ["Normal", "Volador"],
    descricao:
      "Um Pokémon que remonta a muitos anos. Se ele sentir o perigo, ele voa alto e para longe, instantaneamente",
    descricaoEua:
      "A Pokémon that dates back many years. If it senses danger, it flies high and far away instantly.",
    descricaoFra:
      "Un Pokémon qui remonte à plusieurs années. S'il sent le danger, il vole haut et loin instantanément.",
    descricaoChn:
      "一种有多年历史的宝可梦。如果它感到危险，它会瞬间飞得很高很远。",
    descricaoEsp:
      "Un Pokémon que data de hace muchos años. Si siente el peligro, vuela alto y lejos instantáneamente.",
  },
  {
    nro: 23,
    som: "./Sons/ekans.mp3",
    nome: "Ekans",
    genero: " ",
    tamanho: 0,
    img: "./pokemons/ekans.gif",
    imgShiny: "./pokemons/ekansShiny.gif",
    tipo: ["Venenoso"],
    tipoEua: ["Poison"],
    tipoFra: ["Venimeux"],
    tipoChn: ["毒"],
    tipoEsp: ["Venenoso"],
    descricao:
      "Quanto mais velho fica, mais cresce. À noite, ele envolve seu corpo comprido em galhos de árvores para descansar.",
    descricaoEua:
      "The older it gets, the bigger it grows. At night, it wraps its long body around tree branches to rest.",
    descricaoFra:
      "Plus il vieillit, plus il grandit. La nuit, il enroule son long corps autour des branches des arbres pour se reposer.",
    descricaoChn:
      "它变得越老，长得越大。晚上，它会把长长的身体缠绕在树枝上休息。",
    descricaoEsp:
      "Cuanto más viejo se pone, más crece. Por la noche, envuelve su largo cuerpo en ramas de árboles para descansar.",
  },
  {
    nro: 24,
    som: "./Sons/arbok.mp3",
    nome: "Arbok",
    genero: " ",
    tamanho: 4,
    img: "./pokemons/arbok.gif",
    imgShiny: "./pokemons/arbokShiny.gif",
    tipo: ["Venenoso"],
    tipoEua: ["Poison"],
    tipoFra: ["Venimeux"],
    tipoChn: ["毒"],
    tipoEsp: ["Venenoso"],
    descricao:
      "Os padrões assustadores em sua barriga foram estudados. Seis variações foram confirmadas.",
    descricaoEua:
      "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
    descricaoFra:
      "Les motifs effrayants sur son ventre ont été étudiés. Six variations ont été confirmées.",
    descricaoChn: "它腹部可怕的图案已经被研究过。已确认六种变体。",
    descricaoEsp:
      "Se han estudiado los patrones aterradores en su vientre. Se han confirmado seis variaciones.",
  },
  {
    nro: 25,
    som: "./Sons/pikachu.mp3",
    nome: "Pikachu",
    genero: "♂",
    tamanho: 1,
    nomeGigantamax: "Pikachu Gigantamax",
    imgGigantamax: "./pokemons/pikachu-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/pikachu-gigantamaxShiny.gif",
    img: "./pokemons/pikachu.gif",
    imgShiny: "./pokemons/pikachuShiny.gif",
    tipo: ["Elétrico"],
    tipoEua: ["Electric"],
    tipoFra: ["Électrique"],
    tipoChn: ["电"],
    tipoEsp: ["Eléctrico"],
    descricaoGigantamax:
      "Seu poder Gigantamax se expandiu, formando seu corpo superdimensionado e cauda imponente. Quando ele esmaga seus oponentes com sua cauda em forma de raio, ele fornece uma onda de eletricidade equivalente a um relâmpago. Toda a eletricidade que produz nas bolsas que tem nas bochechas é armazenada na cauda. Em batalha, ataca os adversários com a sua cauda, atravessando-os com raio elétrico tão poderoso como um relâmpago! Tornou-se tão poderoso que agora consegue produzir tanta eletricidade como uma usina elétrica! No entanto, parece difícil utilizar essa eletricidade para abastecer casas, uma vez que o Pikachu apenas consegue ficar na forma Gigantamax por pouco tempo.",
    descricaoGigantamaxEua:
      "Its Gigantamax power has expanded, forming its oversized body and imposing tail. When it crushes its opponents with its lightning-shaped tail, it releases an electric wave as powerful as a lightning strike. All the electricity it generates in the pouches on its cheeks is stored in its tail. In battle, it strikes its foes with its tail, piercing them with an electric blast as powerful as a lightning bolt! It has become so powerful that it can now produce as much electricity as a power plant! However, it seems difficult to use this electricity to power homes, as Pikachu can only maintain its Gigantamax form for a short time.",
    descricaoGigantamaxEsp:
      "Su poder Gigantamax se ha expandido, formando su cuerpo sobredimensionado y su imponente cola. Cuando aplasta a sus oponentes con su cola en forma de rayo, libera una ola de electricidad equivalente a un rayo. Toda la electricidad que genera en las bolsas que tiene en sus mejillas se almacena en su cola. En batalla, ataca a los oponentes con su cola, atravesándolos con un rayo eléctrico tan poderoso como un relámpago. ¡Se ha vuelto tan poderoso que ahora puede generar tanta electricidad como una planta eléctrica! Sin embargo, parece difícil utilizar esta electricidad para abastecer casas, ya que Pikachu solo puede permanecer en su forma Gigantamax por un corto período de tiempo.",
    descricaoGigantamaxChn:
      "它的Gigantamax力量扩大，形成了它超大的身体和雄伟的尾巴。当它用闪电形状的尾巴压碎对手时，会释放出等同于闪电的电波。它在脸颊上的口袋中产生的所有电力都储存在尾巴中。在战斗中，它用尾巴攻击敌人，穿透它们，释放出像闪电一样强大的电流！它变得如此强大，现在能产生像电厂一样多的电力！然而，由于皮卡丘只能短时间保持Gigantamax形态，似乎很难将这种电力用于为房屋供电。",
    descricaoGigantamaxFra:
      "Son pouvoir Gigantamax s'est étendu, formant son corps surdimensionné et sa queue imposante. Lorsqu'il écrase ses adversaires avec sa queue en forme d'éclair, il libère une vague d'électricité aussi puissante qu'un éclair. Toute l'électricité qu'il produit dans les poches de ses joues est stockée dans sa queue. En combat, il attaque ses ennemis avec sa queue, les traversant avec un rayon électrique aussi puissant qu'un éclair! Il est devenu si puissant qu'il peut désormais produire autant d'électricité qu'une centrale électrique! Cependant, il semble difficile d'utiliser cette électricité pour alimenter les maisons, car Pikachu ne peut rester dans sa forme Gigantamax que pendant une courte période.",
    descricao:
      "Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas. Quando Pikachu se encontra, eles tocam suas caudas e trocam eletricidade através delas como uma forma de saudação.",
    descricaoEua:
      "Pikachu that can generate powerful electricity has pouches in its cheeks that are extra soft and super elastic. When Pikachu meet, they touch their tails and exchange electricity through them as a form of greeting.",
    descricaoFra:
      "Pikachu qui peut générer de l'électricité puissante a des poches dans ses joues qui sont extra douces et super élastiques. Lorsque Pikachu se rencontre, ils touchent leurs queues et échangent de l'électricité à travers elles comme une forme de salutation.",
    descricaoChn:
      "皮卡丘可以产生强大的电力，它的脸颊上有非常柔软和超弹性的袋子。当皮卡丘相遇时，它们触碰尾巴并通过尾巴交换电力作为一种问候。",
    descricaoEsp:
      "Pikachu que puede generar electricidad poderosa tiene bolsas en sus mejillas que son extra suaves y súper elásticas. Cuando Pikachu se encuentran, tocan sus colas e intercambian electricidad a través de ellas como una forma de saludo.",
  },
  {
    nro: 25,
    som: "./Sons/pikachu.mp3",
    nome: "Pikachu",
    genero: "♀",
    tamanho: 1,
    nomeGigantamax: "Pikachu Gigantamax",
    imgGigantamax: "./pokemons/pikachu-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/pikachu-gigantamaxShiny.gif",
    img: "./pokemons/pikachu-f.gif",
    imgShiny: "./pokemons/pikachu-fShiny.gif",
    tipo: ["Elétrico"],
    tipoEua: ["Electric"],
    tipoFra: ["Électrique"],
    tipoChn: ["电"],
    tipoEsp: ["Eléctrico"],
    descricaoGigantamax:
      "Seu poder Gigantamax se expandiu, formando seu corpo superdimensionado e cauda imponente. Quando ele esmaga seus oponentes com sua cauda em forma de raio, ele fornece uma onda de eletricidade equivalente a um relâmpago. Toda a eletricidade que produz nas bolsas que tem nas bochechas é armazenada na cauda. Em batalha, ataca os adversários com a sua cauda, atravessando-os com raio elétrico tão poderoso como um relâmpago! Tornou-se tão poderoso que agora consegue produzir tanta eletricidade como uma usina elétrica! No entanto, parece difícil utilizar essa eletricidade para abastecer casas, uma vez que o Pikachu apenas consegue ficar na forma Gigantamax por pouco tempo.",
    descricaoGigantamaxEua:
      "Its Gigantamax power has expanded, forming its oversized body and imposing tail. When it crushes its opponents with its lightning-shaped tail, it releases an electric wave as powerful as a lightning strike. All the electricity it generates in the pouches on its cheeks is stored in its tail. In battle, it strikes its foes with its tail, piercing them with an electric blast as powerful as a lightning bolt! It has become so powerful that it can now produce as much electricity as a power plant! However, it seems difficult to use this electricity to power homes, as Pikachu can only maintain its Gigantamax form for a short time.",
    descricaoGigantamaxEsp:
      "Su poder Gigantamax se ha expandido, formando su cuerpo sobredimensionado y su imponente cola. Cuando aplasta a sus oponentes con su cola en forma de rayo, libera una ola de electricidad equivalente a un rayo. Toda la electricidad que genera en las bolsas que tiene en sus mejillas se almacena en su cola. En batalla, ataca a los oponentes con su cola, atravesándolos con un rayo eléctrico tan poderoso como un relámpago. ¡Se ha vuelto tan poderoso que ahora puede generar tanta electricidad como una planta eléctrica! Sin embargo, parece difícil utilizar esta electricidad para abastecer casas, ya que Pikachu solo puede permanecer en su forma Gigantamax por un corto período de tiempo.",
    descricaoGigantamaxChn:
      "它的Gigantamax力量扩大，形成了它超大的身体和雄伟的尾巴。当它用闪电形状的尾巴压碎对手时，会释放出等同于闪电的电波。它在脸颊上的口袋中产生的所有电力都储存在尾巴中。在战斗中，它用尾巴攻击敌人，穿透它们，释放出像闪电一样强大的电流！它变得如此强大，现在能产生像电厂一样多的电力！然而，由于皮卡丘只能短时间保持Gigantamax形态，似乎很难将这种电力用于为房屋供电。",
    descricaoGigantamaxFra:
      "Son pouvoir Gigantamax s'est étendu, formant son corps surdimensionné et sa queue imposante. Lorsqu'il écrase ses adversaires avec sa queue en forme d'éclair, il libère une vague d'électricité aussi puissante qu'un éclair. Toute l'électricité qu'il produit dans les poches de ses joues est stockée dans sa queue. En combat, il attaque ses ennemis avec sa queue, les traversant avec un rayon électrique aussi puissant qu'un éclair! Il est devenu si puissant qu'il peut désormais produire autant d'électricité qu'une centrale électrique! Cependant, il semble difficile d'utiliser cette électricité pour alimenter les maisons, car Pikachu ne peut rester dans sa forme Gigantamax que pendant une courte période.",
    descricao:
      "Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas. Quando Pikachu se encontra, eles tocam suas caudas e trocam eletricidade através delas como uma forma de saudação.",
    descricaoEua:
      "Pikachu that can generate powerful electricity has pouches in its cheeks that are extra soft and super elastic. When Pikachu meet, they touch their tails and exchange electricity through them as a form of greeting.",
    descricaoFra:
      "Pikachu qui peut générer de l'électricité puissante a des poches dans ses joues qui sont extra douces et super élastiques. Lorsque Pikachu se rencontre, ils touchent leurs queues et échangent de l'électricité à travers elles comme une forme de salutation.",
    descricaoChn:
      "皮卡丘可以产生强大的电力，它的脸颊上有非常柔软和超弹性的袋子。当皮卡丘相遇时，它们触碰尾巴并通过尾巴交换电力作为一种问候。",
    descricaoEsp:
      "Pikachu que puede generar electricidad poderosa tiene bolsas en sus mejillas que son extra suaves y súper elásticas. Cuando Pikachu se encuentran, tocan sus colas e intercambian electricidad a través de ellas como una forma de saludo.",
  },
  {
    nro: 26,
    som: "./Sons/raichu.mp3",
    nome: "Raichu",
    genero: "♂",
    nomeAlola: "Raichu Alola",
    generoAlola: "",
    imgAlola: "./pokemons/raichu-alola.gif",
    imgAlolaShiny: "./pokemons/raichu-alolaShiny.gif",
    tamanho: 3,
    img: "./pokemons/raichu.gif",
    imgShiny: "./pokemons/raichuShiny.gif",
    tipo: ["Elétrico"],
    tipoEua: ["Electric"],
    tipoFra: ["Électrique"],
    tipoChn: ["电"],
    tipoEsp: ["Eléctrico"],
    tipoAlola: ["Elétrico", "Psíquico"],
    tipoAlolaEua: ["Electric", "Psychic"],
    tipoAlolaFra: ["Électrique", "Psy"],
    tipoAlolaChn: ["电", "超能力"],
    tipoAlolaEsp: ["Eléctrico", "Psíquico"],
    descricaoAlolaEua:
      "It’s believed that the weather, climate, and food of the Alola region all play a part in causing Pikachu to evolve into this form of Raichu.",
    descricaoAlola:
      "Acredita-se que o clima, o tempo e a comida da região de Alola desempenham um papel na evolução do Pikachu para essa forma de Raichu.",
    descricaoAlolaEsp:
      "Se cree que el clima, el tiempo y la comida de la región de Alola juegan un papel en la evolución de Pikachu hacia esta forma de Raichu.",
    descricaoAlolaChn:
      "人们认为，阿罗拉地区的天气、气候和食物都在导致皮卡丘进化成这种形态的雷丘中发挥了作用。",
    descricaoAlolaFra:
      "On croit que le temps, le climat et la nourriture de la région d'Alola jouent tous un rôle dans l'évolution de Pikachu en cette forme de Raichu.",
    descricao:
      "Sua longa cauda serve como base para se proteger de sua própria energia de alta tensão. Se suas bolsas elétricas ficarem vazias, ele levanta a cauda para coletar eletricidade da atmosfera.",
    descricaoEua:
      "Its long tail serves as a base to protect itself from its own high-voltage energy. If its electric pouches run out, it raises its tail to collect electricity from the atmosphere.",
    descricaoFra:
      "Sa longue queue sert de base pour se protéger de sa propre énergie à haute tension. Si ses poches électriques sont vides, il lève sa queue pour collecter de l'électricité dans l'atmosphère.",
    descricaoChn:
      "它的长尾巴作为保护自己的高压电能的基础。如果它的电池用尽，它会举起尾巴从空气中收集电力。",
    descricaoEsp:
      "Su larga cola sirve como base para protegerse de su propia energía de alta tensión. Si sus bolsas eléctricas se vacían, levanta su cola para recolectar electricidad de la atmósfera.",
  },
  {
    nro: 26,
    som: "./Sons/raichu.mp3",
    nome: "Raichu",
    genero: "♀",
    nomeAlola: "Raichu Alola",
    generoAlola: "",
    imgAlola: "./pokemons/raichu-alola.gif",
    imgAlolaShiny: "./pokemons/raichu-alolaShiny.gif",
    tamanho: 3,
    img: "./pokemons/raichu-f.gif",
    imgShiny: "./pokemons/raichu-fShiny.gif",
    tipo: ["Elétrico"],
    tipoEua: ["Electric"],
    tipoFra: ["Électrique"],
    tipoChn: ["电"],
    tipoEsp: ["Eléctrico"],
    tipoAlola: ["Elétrico", "Psíquico"],
    tipoAlolaEua: ["Electric", "Psychic"],
    tipoAlolaFra: ["Électrique", "Psy"],
    tipoAlolaChn: ["电", "超能力"],
    tipoAlolaEsp: ["Eléctrico", "Psíquico"],
    descricaoAlolaEua:
      "It’s believed that the weather, climate, and food of the Alola region all play a part in causing Pikachu to evolve into this form of Raichu.",
    descricaoAlola:
      "Acredita-se que o clima, o tempo e a comida da região de Alola desempenham um papel na evolução do Pikachu para essa forma de Raichu.",
    descricaoAlolaEsp:
      "Se cree que el clima, el tiempo y la comida de la región de Alola juegan un papel en la evolución de Pikachu hacia esta forma de Raichu.",
    descricaoAlolaChn:
      "人们认为，阿罗拉地区的天气、气候和食物都在导致皮卡丘进化成这种形态的雷丘中发挥了作用。",
    descricaoAlolaFra:
      "On croit que le temps, le climat et la nourriture de la région d'Alola jouent tous un rôle dans l'évolution de Pikachu en cette forme de Raichu.",
    descricao:
      "Sua longa cauda serve como base para se proteger de sua própria energia de alta tensão. Se suas bolsas elétricas ficarem vazias, ele levanta a cauda para coletar eletricidade da atmosfera.",
    descricaoEua:
      "Its long tail serves as a base to protect itself from its own high-voltage energy. If its electric pouches run out, it raises its tail to collect electricity from the atmosphere.",
    descricaoFra:
      "Sa longue queue sert de base pour se protéger de sa propre énergie à haute tension. Si ses poches électriques sont vides, il lève sa queue pour collecter de l'électricité dans l'atmosphère.",
    descricaoChn:
      "它的长尾巴作为保护自己的高压电能的基础。如果它的电池用尽，它会举起尾巴从空气中收集电力。",
    descricaoEsp:
      "Su larga cola sirve como base para protegerse de su propia energía de alta tensión. Si sus bolsas eléctricas se vacían, levanta su cola para recolectar electricidad de la atmósfera.",
  },
  {
    nro: 27,
    som: "./Sons/sandshrew.mp3",
    nome: "Sandshrew",
    genero: " ",
    nomeAlola: "Sandshrew Alola",
    generoAlola: "",
    imgAlola: "./pokemons/sandshrew-alola.gif",
    imgAlolaShiny: "./pokemons/sandshrew-alolaShiny.gif",
    tamanho: 1,
    img: "./pokemons/sandshrew.gif",
    imgShiny: "./pokemons/sandshrewShiny.gif",
    tipo: ["Terrestre"],
    tipoEua: ["Ground"],
    tipoFra: ["Sol"],
    tipoChn: ["地面"],
    tipoEsp: ["Tierra"],
    tipoAlola: ["Gelo", "Metal"],
    tipoAlolaEua: ["Ice", "Steel"],
    tipoAlolaFra: ["Glace", "Acier"],
    tipoAlolaChn: ["冰", "钢"],
    tipoAlolaEsp: ["Hielo", "Acero"],
    descricaoAlolaEua:
      "It lives on snowy mountains. Its steel shell is very hard—so much so, it can’t roll its body up into a ball.",
    descricaoAlolaPor:
      "Ele vive nas montanhas nevadas. Sua casca de aço é muito dura, tanto que não consegue enrolar seu corpo em uma bola.",
    descricaoAlolaEsp:
      "Vive en montañas nevadas. Su caparazón de acero es muy duro, tanto que no puede enrollar su cuerpo en una bola.",
    descricaoAlolaChn:
      "它生活在雪山上。它的钢壳非常坚硬，甚至不能把身体卷成一个球。",
    descricaoAlolaFra:
      "Il vit sur les montagnes enneigées. Sa coquille en acier est très dure, au point qu'il ne peut pas rouler son corps en boule.",
    descricao:
      "Adora tomar banho na areia das áreas secas e arenosas. Ao tomar banho de areia, o Pokémon se livra da sujeira e da umidade que se agarram ao seu corpo. Ele se enterra no chão para criar seu ninho. Se as pedras duras impedirem o túnel, ele usa suas garras afiadas para despedaçá-las e depois continua cavando.",
    descricaoEua:
      "It loves to take baths in the sand of dry and sandy areas. While sand bathing, the Pokémon gets rid of dirt and moisture that cling to its body. It buries itself in the ground to make its nest. If hard rocks block the tunnel, it uses its sharp claws to shatter them and continues digging.",
    descricaoFra:
      "Il adore prendre des bains de sable dans les zones sèches et sablonneuses. En se baignant dans le sable, le Pokémon se débarrasse de la saleté et de l'humidité qui adhèrent à son corps. Il s'enterre dans le sol pour créer son nid. Si des pierres dures bloquent le tunnel, il utilise ses griffes acérées pour les briser puis continue à creuser.",
    descricaoChn:
      "它喜欢在干燥的沙地和沙漠地区洗沙澡。在沙浴时，宝可梦摆脱附着在身上的污垢和湿气。它会埋在地下建立自己的巢穴。如果坚硬的石块阻挡了隧道，它会用锋利的爪子把它们打碎，然后继续挖掘。",
    descricaoEsp:
      "Le encanta tomar baños de arena en áreas secas y arenosas. Mientras se baña en arena, el Pokémon se deshace de la suciedad y la humedad que se adhieren a su cuerpo. Se entierra en el suelo para hacer su nido. Si las piedras duras bloquean el túnel, usa sus garras afiladas para romperlas y luego sigue cavando.",
  },
  {
    nro: 28,
    som: "./Sons/sandslash.mp3",
    nome: "Sandslash",
    genero: " ",
    nomeAlola: "Sandslash Alola",
    generoAlola: "",
    imgAlola: "./pokemons/sandslash-alola.gif",
    imgAlolaShiny: "./pokemons/sandslash-alolaShiny.gif",
    tamanho: 3,
    tamanhoAlola: 4,
    img: "./pokemons/sandslash.gif",
    imgShiny: "./pokemons/sandslashShiny.gif",
    tipo: ["Terrestre"],
    tipoEua: ["Ground"],
    tipoFra: ["Sol"],
    tipoChn: ["地面"],
    tipoEsp: ["Tierra"],
    tipoAlola: ["Gelo", "Metal"],
    tipoAlolaEua: ["Ice", "Steel"],
    tipoAlolaFra: ["Glace", "Acier"],
    tipoAlolaChn: ["冰", "钢"],
    tipoAlolaEsp: ["Hielo", "Acero"],
    descricaoAlolaEua:
      "It is adept at attacking with the spines on its back and its sharp claws while quickly scurrying about.",
    descricaoAlola:
      "É habilidoso em atacar com os espinhos nas costas e suas garras afiadas enquanto corre rapidamente.",
    descricaoAlolaEsp:
      "Es experto en atacar con las espinas en su espalda y sus garras afiladas mientras corre rápidamente.",
    descricaoAlolaChn: "它擅长用背部的刺和锋利的爪子攻击，同时快速地四处奔跑。",
    descricaoAlolaFra:
      "Il est doué pour attaquer avec les épines sur son dos et ses griffes acérées tout en courant rapidement.",
    descricao:
      "Quanto mais seca a área onde Sandslash vive, mais duros e suaves os espinhos do Pokémon se sentirão quando tocados. Ele sobe em árvores enganchando com suas garras afiadas. Sandslash compartilha as bagas que colhe, deixando-as para Sandshrew esperando embaixo da árvore.",
    descricaoEua:
      "The drier the area where Sandslash lives, the harder and softer its spikes feel when touched. It climbs trees by hooking its sharp claws. Sandslash shares the berries it collects, leaving them for Sandshrew waiting below the tree.",
    descricaoFra:
      "Plus la zone où vit Sandslash est sèche, plus ses épines se sentiront dures et douces au toucher. Il grimpe aux arbres en accrochant ses griffes acérées. Sandslash partage les baies qu'il récolte, les laissant pour Sandshrew qui attend sous l'arbre.",
    descricaoChn:
      "沙刺兽生活的区域越干燥，它的尖刺触感就越硬且柔软。它用锋利的爪子爬树。沙刺兽分享它收集的浆果，把它们留给在树下等待的沙鼠。",
    descricaoEsp:
      "Cuanto más seca es el área donde vive Sandslash, más duras y suaves se sienten sus espinas cuando se tocan. Sube a los árboles enganchando sus garras afiladas. Sandslash comparte las bayas que recoge, dejándolas para Sandshrew que espera debajo del árbol.",
  },
  {
    nro: 29,
    som: "./Sons/nidoran-f.mp3",
    nome: "Nidoran",
    genero: "♀",
    tamanho: 0,
    img: "./pokemons/nidoran_f.gif",
    imgShiny: "./pokemons/nidoran_fShiny.gif",
    tipo: ["Venenoso"],
    tipoEua: ["Poison"],
    tipoFra: ["Venimeux"],
    tipoChn: ["毒"],
    tipoEsp: ["Venenoso"],
    descricao:
      "As fêmeas são mais sensíveis aos cheiros do que os machos. Enquanto forrageiam, eles usam seus bigodes para verificar a direção do vento e ficar a favor do vento dos predadores. Ele usa seus dentes incisivos duros para esmagar e comer frutas. A ponta do chifre de um Nidoran feminino é um pouco mais arredondada do que a ponta do chifre de um macho.",
    descricaoEua:
      "Females are more sensitive to smells than males. While foraging, they use their whiskers to check the wind direction and stay downwind of predators. They use their sharp incisors to crush and eat fruit. The tip of a female Nidoran's horn is a little more rounded than that of a male.",
    descricaoFra:
      "Les femelles sont plus sensibles aux odeurs que les mâles. En fouillant, elles utilisent leurs moustaches pour vérifier la direction du vent et rester sous le vent des prédateurs. Elles utilisent leurs incisives dures pour écraser et manger des fruits. L'extrémité de la corne d'un Nidoran femelle est un peu plus arrondie que celle d'un mâle.",
    descricaoChn:
      "雌性比雄性更敏感于气味。在觅食时，它们使用胡须来检查风向，保持顺风避开捕食者。它们用锋利的门牙压碎并吃水果。雌性尼多兰的角尖比雄性略圆。",
    descricaoEsp:
      "Las hembras son más sensibles a los olores que los machos. Mientras buscan comida, usan sus bigotes para comprobar la dirección del viento y mantenerse a favor del viento de los depredadores. Usan sus dientes incisivos duros para triturar y comer frutas. La punta del cuerno de un Nidoran hembra es un poco más redondeada que la punta del cuerno de un macho.",
  },
  {
    nro: 30,
    som: "./Sons/nidorina.mp3",
    nome: "Nidorina",
    genero: "♀",
    tamanho: 2,
    img: "./pokemons/nidorina.gif",
    imgShiny: "./pokemons/nidorinaShiny.gif",
    tipo: ["Venenoso"],
    tipoEua: ["Poison"],
    tipoFra: ["Venimeux"],
    tipoChn: ["毒"],
    tipoEsp: ["Venenoso"],
    descricao:
      "O chifre em sua cabeça está atrofiado. Acredita-se que isso aconteça para que os filhos de Nidorina não sejam picados enquanto a mãe os alimenta. Se o grupo for ameaçado, esses Pokémon se unirão para atacar os inimigos com um coro de ondas ultrassônicas.",
    descricaoEua:
      "The horn on its head is atrophied. It is believed to be this way so that Nidorina's young aren't stung while the mother feeds them. If the group is threatened, these Pokémon will band together to attack enemies with a chorus of ultrasonic waves.",
    descricaoFra:
      "La corne sur sa tête est atrophiée. On pense que cela est fait pour que les jeunes de Nidorina ne soient pas piqués pendant que la mère les nourrit. Si le groupe est menacé, ces Pokémon se rassembleront pour attaquer les ennemis avec un chœur d'ondes ultrasoniques.",
    descricaoChn:
      "它头上的角已经退化。人们认为这样做是为了让尼多丽娜的幼崽在母亲喂食时不会被刺伤。如果群体受到威胁，这些宝可梦会联合起来，用一阵超声波攻击敌人。",
    descricaoEsp:
      "El cuerno en su cabeza está atrofiado. Se cree que esto ocurre para que los hijos de Nidorina no sean picados mientras la madre los alimenta. Si el grupo es amenazado, estos Pokémon se unirán para atacar a los enemigos con un coro de ondas ultrasónicas.",
  },
  {
    nro: 31,
    som: "./Sons/nidoqueen.mp3",
    nome: "Nidoqueen",
    genero: "♀",
    tamanho: 5,
    img: "./pokemons/nidoqueen.gif",
    imgShiny: "./pokemons/nidoqueenShiny.gif",
    tipo: ["Venenoso", "Terrestre"],
    tipoEua: ["Poison", "Ground"],
    tipoFra: ["Venimeux", "Sol"],
    tipoChn: ["毒", "地面"],
    tipoEsp: ["Venenoso", "Tierra"],
    descricao:
      "Nidoqueen é melhor na defesa do que no ataque. Com escamas como armaduras, este Pokémon protegerá seus filhos de qualquer tipo de ataque. Ele pacifica a prole, colocando-os nos espaços entre os espinhos nas costas. Os espinhos nunca secretarão veneno enquanto os jovens estiverem presentes.",
    descricaoEua:
      "Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will protect its young from any type of attack. It pacifies its young by placing them in the spaces between the spines on its back. The spines will never secrete poison while the young are present.",
    descricaoFra:
      "Nidoqueen est meilleur en défense qu'en attaque. Avec des écailles semblables à une armure, ce Pokémon protégera ses jeunes de tout type d'attaque. Il apaise ses petits en les plaçant dans les espaces entre les épines sur son dos. Les épines ne secrètent jamais de poison tant que les jeunes sont présents.",
    descricaoChn:
      "尼多后比起攻击更擅长防御。它身上的鳞片像盔甲一样，能够保护自己的幼崽免受任何攻击。它将幼崽安置在背部刺之间，这样刺就不会在有幼崽在时分泌毒液。",
    descricaoEsp:
      "Nidoqueen es mejor en defensa que en ataque. Con escamas como armaduras, este Pokémon protegerá a sus hijos de cualquier tipo de ataque. Calma a su prole colocándolos entre las espinas de su espalda. Las espinas nunca secretarán veneno mientras los jóvenes estén presentes.",
  },
  {
    nro: 32,
    som: "./Sons/nidoranm.mp3",
    nome: "Nidoran",
    genero: "♂",
    tamanho: 0,
    img: "./pokemons/nidoran_m.gif",
    imgShiny: "./pokemons/nidoran_mShiny.gif",
    tipo: ["Venenoso"],
    tipoEua: ["Poison"],
    tipoFra: ["Venimeux"],
    tipoChn: ["毒"],
    tipoEsp: ["Venenoso"],
    descricao:
      "O chifre na testa de um Nidoran macho contém um poderoso veneno. Este é um Pokémon muito cauteloso, sempre esticando suas orelhas grandes.",
    descricaoEua:
      "The horn on a male Nidoran's forehead contains a powerful poison. This Pokémon is very cautious, always stretching its large ears.",
    descricaoFra:
      "La corne sur le front d'un Nidoran mâle contient un venin puissant. Ce Pokémon est très prudent, écoutant toujours avec ses grandes oreilles.",
    descricaoChn:
      "雄性尼多兰额头上的角含有强力毒素。这只宝可梦非常谨慎，总是拉伸它那对大耳朵。",
    descricaoEsp:
      "El cuerno en la frente de un Nidoran macho contiene un veneno poderoso. Este Pokémon es muy cauteloso, siempre estirando sus grandes orejas.",
  },
  {
    nro: 33,
    som: "./Sons/nidorino.mp3",
    nome: "Nidorino",
    genero: "♂",
    tamanho: 2,
    img: "./pokemons/nidorino.gif",
    imgShiny: "./pokemons/nidorinoShiny.gif",
    tipo: ["Venenoso"],
    tipoEua: ["Poison"],
    tipoFra: ["Venimeux"],
    tipoChn: ["毒"],
    tipoEsp: ["Venenoso"],
    descricao:
      "Com um chifre que é mais duro que diamante, este Pokémon anda por aí quebrando pedregulhos enquanto procura por uma pedra da lua. É nervoso e rápido para agir de forma agressiva. A potência de seu veneno aumenta junto com o nível de adrenalina presente em seu corpo.",
    descricaoEua:
      "With a horn harder than diamond, this Pokémon walks around breaking rocks while searching for a moon stone. It is nervous and quick to act aggressively. The potency of its poison increases with the level of adrenaline in its body.",
    descricaoFra:
      "Avec une corne plus dure que le diamant, ce Pokémon se promène en brisant des rochers tout en cherchant une pierre de lune. Il est nerveux et réagit rapidement de manière agressive. La puissance de son venin augmente avec le niveau d'adrénaline dans son corps.",
    descricaoChn:
      "它的角比钻石还硬，这只宝可梦到处走动，砸碎岩石，同时寻找月亮石。它很紧张，遇到威胁时会迅速作出攻击反应。它的毒液随着身体中肾上腺素的增加而变得更强。",
    descricaoEsp:
      "Con un cuerno más duro que el diamante, este Pokémon anda por ahí rompiendo piedras mientras busca una piedra lunar. Es nervioso y rápido para actuar de forma agresiva. La potencia de su veneno aumenta con el nivel de adrenalina en su cuerpo.",
  },
  {
    nro: 34,
    som: "./Sons/nidoking.mp3",
    nome: "Nidoking",
    genero: "♂",
    tamanho: 5,
    img: "./pokemons/nidoking.gif",
    imgShiny: "./pokemons/nidokingShiny.gif",
    tipo: ["Venenoso", "Terrestre"],
    tipoEua: ["Poison", "Ground"],
    tipoFra: ["Venimeux", "Sol"],
    tipoChn: ["毒", "地面"],
    tipoEsp: ["Venenoso", "Tierra"],
    descricao:
      "Quando está em fúria, é impossível controlar. Mas na presença de uma Nidoqueen com quem conviveu por muito tempo, Nidoking se acalma. Nidoking se orgulha de sua força. É forte e espirituoso na batalha, fazendo uso de sua cauda grossa e chifre de esmagamento de diamantes.",
    descricaoEua:
      "When in a rage, it is impossible to control. But in the presence of a Nidoqueen it has lived with for a long time, Nidoking calms down. Nidoking prides itself on its strength. It is strong and spirited in battle, using its thick tail and diamond-crushing horn.",
    descricaoFra:
      "Lorsqu'il est enragé, il est impossible à contrôler. Mais en présence d'une Nidoqueen avec laquelle il a vécu pendant longtemps, Nidoking se calme. Nidoking est fier de sa force. Il est fort et spiritueux au combat, utilisant sa queue épaisse et sa corne écrasant les diamants.",
    descricaoChn:
      "当它发怒时，无法控制。但在与其共同生活很长时间的尼多后宫面前，尼多王会冷静下来。尼多王为自己的力量感到骄傲。它在格斗中强大而富有活力，利用其粗壮的尾巴和压碎钻石的角。",
    descricaoEsp:
      "Cuando está en furia, es imposible controlarlo. Pero en presencia de una Nidoqueen con la que ha vivido mucho tiempo, Nidoking se calma. Nidoking se enorgullece de su fuerza. Es fuerte y vivaz en la batalla, utilizando su gruesa cola y cuerno de trituración de diamantes.",
  },
  {
    nro: 35,
    som: "./Sons/clefairy.mp3",
    nome: "Clefairy",
    genero: "",
    tamanho: 2,
    img: "./pokemons/clefairy.gif",
    imgShiny: "./pokemons/clefairyShiny.gif",
    tipo: ["Fada"],
    tipoEua: ["Fairy"],
    tipoFra: ["Fée"],
    tipoChn: ["妖精"],
    tipoEsp: ["Hada"],
    descricao:
      "Diz-se que a felicidade virá para aqueles que virem uma reunião de Clefairy dançando sob a lua cheia. Seu comportamento adorável e choro o tornam altamente popular. No entanto, este Pokémon fofo raramente é encontrado",
    descricaoEua:
      "It is said that happiness will come to those who see a group of Clefairy dancing under the full moon. Its adorable behavior and crying make it highly popular. However, this cute Pokémon is rarely found.",
    descricaoFra:
      "On dit que le bonheur viendra à ceux qui verront un groupe de Clefairy dansant sous la pleine lune. Son comportement adorable et ses pleurs le rendent très populaire. Cependant, ce Pokémon mignon est rarement trouvé.",
    descricaoChn:
      "据说看到一群 Clefairy 在满月下跳舞的人将获得幸福。它可爱的行为和哭泣使它非常受欢迎。然而，这个可爱的宝可梦很少被发现。",
    descricaoEsp:
      "Se dice que la felicidad llegará a aquellos que vean un grupo de Clefairy bailando bajo la luna llena. Su comportamiento adorable y su llanto lo hacen muy popular. Sin embargo, este Pokémon lindo rara vez se encuentra.",
  },
  {
    nro: 36,
    som: "./Sons/clefable.mp3",
    nome: "Clefable",
    genero: "",
    tamanho: 4,
    img: "./pokemons/clefable.gif",
    imgShiny: "./pokemons/clefableShiny.gif",
    tipo: ["Fada"],
    tipoEua: ["Fairy"],
    tipoFra: ["Fée"],
    tipoChn: ["妖精"],
    tipoEsp: ["Hada"],
    descricao:
      "Um Pokémon fada tímido que raramente é visto, ele correrá e se esconderá no momento em que sentir as pessoas. Seus ouvidos são sensíveis o suficiente para ouvir um alfinete cair a mais de um quilômetro de distância, então eles geralmente são encontrados em lugares silenciosos.",
    descricaoEua:
      "A shy fairy Pokémon that is rarely seen, it will run and hide as soon as it senses people. Its ears are sensitive enough to hear a pin drop over a kilometer away, so they are usually found in quiet places.",
    descricaoFra:
      "Un Pokémon fée timide qui est rarement vu, il courra et se cachera dès qu'il sentira les gens. Ses oreilles sont suffisamment sensibles pour entendre une épingle tomber à plus d'un kilomètre de distance, il est donc généralement trouvé dans des endroits calmes.",
    descricaoChn:
      "一个害羞的精灵宝可梦，很少被看到，它会在感到人类的存在时跑开并藏起来。它的耳朵足够敏感，能够听到超过一公里外的别针掉落，因此通常会在安静的地方找到它。",
    descricaoEsp:
      "Un Pokémon hada tímido que rara vez se ve, correrá y se esconderá en cuanto sienta a las personas. Sus orejas son lo suficientemente sensibles como para escuchar una aguja caer a más de un kilómetro de distancia, por lo que generalmente se encuentran en lugares tranquilos.",
  },
  {
    nro: 37,
    som: "./Sons/vulpix.mp3",
    nome: "Vulpix",
    genero: "",
    nomeAlola: "vulpix Alola",
    generoAlola: "",
    imgAlola: "./pokemons/vulpix-alola.gif",
    imgAlolaShiny: "./pokemons/vulpix-alolaShiny.gif",
    tamanho: 2,
    img: "./pokemons/vulpix.gif",
    imgShiny: "./pokemons/vulpixShiny.gif",
    tipo: ["Fogo"],
    tipoEua: ["Fire"],
    tipoFra: ["Feu"],
    tipoChn: ["火"],
    tipoEsp: ["Fuego"],
    tipoAlola: ["Gelo"],
    tipoAlolaEua: ["Ice"],
    tipoAlolaFra: ["Glace"],
    tipoAlolaChn: ["冰"],
    tipoAlolaEsp: ["Hielo"],
    descricaoAlolaEua:
      "They live together in a skulk, helping one another. Before eating their prey, they freeze it solid with their −58 degree Fahrenheit breath.",
    descricaoAlola:
      "Eles vivem juntos em um bando, ajudando uns aos outros. Antes de comerem sua presa, eles a congelam completamente com sua respiração a −58 graus Fahrenheit.",
    descricaoAlolaEsp:
      "Viven juntos en una jauría, ayudándose mutuamente. Antes de comer a su presa, la congelan por completo con su aliento a −58 grados Fahrenheit.",
    descricaoAlolaChn:
      "它们一起生活在一个群体中，互相帮助。在吃掉猎物之前，它们用−58华氏度的呼吸将其完全冻结。",
    descricaoAlolaFra:
      "Ils vivent ensemble en un groupe, s'aidant mutuellement. Avant de manger leur proie, ils la congèlent complètement avec leur souffle à −58 degrés Fahrenheit.",
    descricao:
      "Enquanto jovem, tem seis caudas lindas. Quando cresce, várias novas caudas brotam. À medida que cada cauda cresce, sua pelagem se torna mais brilhante. Quando segurado, ele se sente um pouco quente.",
    descricaoEua:
      "As a young Pokémon, it has six beautiful tails. As it grows, several new tails sprout. As each tail grows, its fur becomes shinier. When held, it feels a little warm.",
    descricaoFra:
      "Quand il est jeune, il a six belles queues. En grandissant, plusieurs nouvelles queues poussent. À mesure que chaque queue grandit, son pelage devient plus brillant. Lorsqu'il est tenu, il se sent un peu chaud.",
    descricaoChn:
      "年轻时，它有六条美丽的尾巴。随着它的成长，几条新的尾巴长出来。随着每条尾巴的生长，它的毛发变得更加光亮。被抱起来时，它感觉有点温暖。",
    descricaoEsp:
      "Cuando es joven, tiene seis hermosas colas. A medida que crece, brotan varias colas nuevas. A medida que cada cola crece, su pelaje se vuelve más brillante. Cuando se sostiene, se siente un poco cálido.",
  },
  {
    nro: 38,
    som: "./Sons/ninetales.mp3",
    nome: "Ninetales",
    genero: "",
    nomeAlola: "Ninetales Alola",
    generoAlola: "",
    imgAlola: "./pokemons/ninetales-alola.gif",
    imgAlolaShiny: "./pokemons/ninetales-alolaShiny.gif",
    tamanho: 4,
    tamanhoAlola: 4,
    img: "./pokemons/ninetales.gif",
    imgShiny: "./pokemons/ninetalesShiny.gif",
    tipo: ["Fogo"],
    tipoEua: ["Fire"],
    tipoFra: ["Feu"],
    tipoChn: ["火"],
    tipoEsp: ["Fuego"],
    tipoAlola: ["Gelo", "Fada"],
    tipoAlolaEua: ["Ice", "Fairy"],
    tipoAlolaFra: ["Glace", "Fée"],
    tipoAlolaChn: ["冰", "妖精"],
    tipoAlolaEsp: ["Hielo", "Hada"],
    descricaoAlolaEua:
      "Possessing a calm demeanor, this Pokémon was revered as a deity incarnate before it was identified as a regional variant of Ninetales.",
    descricaoAlola:
      "Possuindo uma atitude calma, este Pokémon foi reverenciado como uma divindade encarnada antes de ser identificado como uma variante regional de Ninetales.",
    descricaoAlolaEsp:
      "Posee una actitud tranquila, este Pokémon fue reverenciado como una deidad encarnada antes de ser identificado como una variante regional de Ninetales.",
    descricaoAlolaChn:
      "拥有冷静的举止，这只宝可梦在被认定为九尾的地区变种之前，被崇拜为化身的神灵。",
    descricaoAlolaFra:
      "Possédant une attitude calme, ce Pokémon était vénéré comme une déité incarnée avant d'être identifié comme une variante régionale de Ninetales.",
    descricao:
      "Diz-se que vive 1.000 anos, e cada uma de suas caudas é carregada com poderes sobrenaturais. Agarrar uma de suas muitas caudas pode resultar em uma maldição de 1.000 anos",
    descricaoEua:
      "It is said to live for 1,000 years, and each of its tails is imbued with supernatural powers. Grabbing one of its many tails may result in a 1,000-year curse.",
    descricaoFra:
      "On dit qu'il vit pendant 1 000 ans, et chacune de ses queues est imprégnée de pouvoirs surnaturels. Attraper l'une de ses nombreuses queues peut entraîner une malédiction de 1 000 ans.",
    descricaoChn:
      "据说它可以活上千年，每一条尾巴都充满了超自然的力量。抓住它的其中一条尾巴可能会导致1000年的诅咒。",
    descricaoEsp:
      "Se dice que vive 1.000 años, y cada una de sus colas está impregnada de poderes sobrenaturales. Agarrar una de sus muchas colas puede resultar en una maldición de 1.000 años.",
  },
  {
    nro: 39,
    som: "./Sons/jigglypuff.mp3",
    nome: "Jigglypuff",
    genero: "",
    tamanho: 1,
    img: "./pokemons/jigglypuff.gif",
    imgShiny: "./pokemons/jigglypuffShiny.gif",
    tipo: ["Normal", "Fada"],
    tipoEua: ["Normal", "Fairy"],
    tipoFra: ["Normal", "Fée"],
    tipoChn: ["普通", "妖精"],
    tipoEsp: ["Normal", "Hada"],
    descricao:
      "Jigglypuff tem capacidade pulmonar de alto nível, mesmo em comparação com outros Pokémon. Ele não vai parar de cantar suas canções de ninar até que seus inimigos adormeçam. Ao mudar livremente o comprimento de onda de sua voz, Jigglypuff canta uma melodia misteriosa que certamente deixará qualquer ouvinte sonolento.",
    descricaoEua:
      "Jigglypuff has high lung capacity, even compared to other Pokémon. It will not stop singing its lullabies until its enemies fall asleep. By freely changing the wavelength of its voice, Jigglypuff sings a mysterious melody that will surely make anyone who hears it sleepy.",
    descricaoFra:
      "Jigglypuff a une capacité pulmonaire élevée, même par rapport à d'autres Pokémon. Il ne s'arrêtera pas de chanter ses berceuses jusqu'à ce que ses ennemis s'endorment. En changeant librement la longueur d'onde de sa voix, Jigglypuff chante une mélodie mystérieuse qui endormira sûrement quiconque l'entend.",
    descricaoChn:
      "Jigglypuff 具有高肺活量，甚至与其他宝可梦相比。它会一直唱摇篮曲，直到敌人入睡。通过自由改变声音的波长，Jigglypuff 唱出神秘的旋律，肯定会让任何听到的人感到困倦。",
    descricaoEsp:
      "Jigglypuff tiene una alta capacidad pulmonar, incluso en comparación con otros Pokémon. No dejará de cantar sus canciones de cuna hasta que sus enemigos se duerman. Al cambiar libremente la longitud de onda de su voz, Jigglypuff canta una melodía misteriosa que seguramente hará que cualquier oyente se duerma.",
  },
  {
    nro: 40,
    som: "./Sons/wigglytuff.mp3",
    nome: "Wigglytuff",
    genero: "",
    tamanho: 4,
    img: "./pokemons/wigglytuff.gif",
    imgShiny: "./pokemons/wigglytuffShiny.gif",
    tipo: ["Normal", "Fada"],
    tipoEua: ["Normal", "Fairy"],
    tipoFra: ["Normal", "Fée"],
    tipoChn: ["普通", "妖精"],
    tipoEsp: ["Normal", "Hada"],
    descricao:
      "Quanto mais ar aspira, mais infla. Se os oponentes o pegarem de mau humor, ele se inflará a um tamanho enorme para intimidá-los. Orgulha-se da sua pelagem, que é fina e delicada. Em particular, o cacho na testa tem uma textura perfeitamente celestial.",
    descricaoEua:
      "The more air it inhales, the more it inflates. If it gets in a bad mood, it inflates to an enormous size to intimidate opponents. It takes pride in its fine, delicate fur. In particular, the tuft on its head has a perfectly celestial texture.",
    descricaoFra:
      "Plus il inhale d'air, plus il gonfle. S'il se met de mauvaise humeur, il se gonfle à une taille énorme pour intimider ses adversaires. Il est fier de sa fourrure, qui est fine et délicate. En particulier, la touffe sur sa tête a une texture parfaitement céleste.",
    descricaoChn:
      "吸入空气越多，它就越膨胀。如果它心情不好，它会膨胀到巨大的尺寸来吓唬对手。它为自己的毛发感到自豪，毛发细腻而柔软，尤其是头上的一撮毛发有着完美的天国般的质感。",
    descricaoEsp:
      "Cuanto más aire inhala, más se infla. Si se pone de mal humor, se inflará hasta un tamaño enorme para intimidar a los oponentes. Se enorgullece de su pelaje, que es fino y delicado. En particular, el mechón en su frente tiene una textura perfectamente celestial.",
  },
  {
    nro: 41,
    som: "./Sons/zubat.mp3",
    nome: "Zubat",
    genero: "♂",
    tamanho: 3,
    img: "./pokemons/zubat.gif",
    imgShiny: "./pokemons/zubatShiny.gif",
    tipo: ["Venenoso", "Voador"],
    tipoEua: ["Poison", "Flying"],
    tipoFra: ["Venimeux", "Volant"],
    tipoChn: ["毒", "飞行"],
    tipoEsp: ["Venenoso", "Volador"],
    descricao:
      "Ele emite ondas ultrassônicas de sua boca para verificar seus arredores. Mesmo em cavernas apertadas, Zubat voa com habilidade. Zubat vivem em cavernas, onde a luz do sol não chega. De manhã, eles se reúnem para manter um ao outro aquecido enquanto dormem.",
    descricaoEua:
      "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies with skill. Zubat live in caves where sunlight doesn’t reach. In the morning, they gather to keep each other warm while they sleep.",
    descricaoFra:
      "Il émet des ondes ultrasonores de sa bouche pour vérifier ses environs. Même dans les grottes étroites, Zubat vole avec habileté. Zubat vit dans des grottes où la lumière du soleil ne pénètre pas. Le matin, ils se regroupent pour se garder au chaud pendant leur sommeil.",
    descricaoChn:
      "它从嘴里发出超声波来检查周围环境。即使在狭窄的洞穴中，Zubat也能熟练飞行。Zubat生活在阳光无法照射的洞穴里。早晨，它们会聚集在一起，保持彼此温暖，在睡觉时。",
    descricaoEsp:
      "Emite ondas ultrasónicas desde su boca para verificar sus alrededores. Incluso en cavernas estrechas, Zubat vuela hábilmente. Zubat vive en cavernas donde no llega la luz del sol. Por la mañana, se reúnen para mantenerse calientes mientras duermen.",
  },
  {
    nro: 41,
    som: "./Sons/zubat.mp3",
    nome: "Zubat",
    genero: "♀",
    tamanho: 3,
    img: "./pokemons/zubat-f.gif",
    imgShiny: "./pokemons/zubat-fShiny.gif",
    tipo: ["Venenoso", "Voador"],
    tipoEua: ["Poison", "Flying"],
    tipoFra: ["Venimeux", "Volant"],
    tipoChn: ["毒", "飞行"],
    tipoEsp: ["Venenoso", "Volador"],
    descricao:
      "Ele emite ondas ultrassônicas de sua boca para verificar seus arredores. Mesmo em cavernas apertadas, Zubat voa com habilidade. Zubat vivem em cavernas, onde a luz do sol não chega. De manhã, eles se reúnem para manter um ao outro aquecido enquanto dormem.",
    descricaoEua:
      "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies with skill. Zubat live in caves where sunlight doesn’t reach. In the morning, they gather to keep each other warm while they sleep.",
    descricaoFra:
      "Il émet des ondes ultrasonores de sa bouche pour vérifier ses environs. Même dans les grottes étroites, Zubat vole avec habileté. Zubat vit dans des grottes où la lumière du soleil ne pénètre pas. Le matin, ils se regroupent pour se garder au chaud pendant leur sommeil.",
    descricaoChn:
      "它从嘴里发出超声波来检查周围环境。即使在狭窄的洞穴中，Zubat也能熟练飞行。Zubat生活在阳光无法照射的洞穴里。早晨，它们会聚集在一起，保持彼此温暖，在睡觉时。",
    descricaoEsp:
      "Emite ondas ultrasónicas desde su boca para verificar sus alrededores. Incluso en cavernas estrechas, Zubat vuela hábilmente. Zubat vive en cavernas donde no llega la luz del sol. Por la mañana, se reúnen para mantenerse calientes mientras duermen.",
  },
  {
    nro: 42,
    som: "./Sons/golbat.mp3",
    nome: "Golbat",
    genero: "♂",
    tamanho: 5,
    img: "./pokemons/golbat.gif",
    imgShiny: "./pokemons/golbatShiny.gif",
    tipo: ["Venenoso", "Voador"],
    tipoEua: ["Poison", "Flying"],
    tipoFra: ["Venimeux", "Volant"],
    tipoChn: ["毒", "飞行"],
    tipoEsp: ["Venenoso", "Volador"],
    descricao:
      "Adora beber o sangue de outras criaturas. Seus pés são minúsculos, mas este Pokémon anda habilmente. Ele se aproxima de uma presa adormecida antes de afundar em suas presas e sugar o sangue.",
    descricaoEua:
      "It loves to drink the blood of other creatures. Its feet are tiny, but it walks skillfully. It sneaks up on sleeping prey before sinking its fangs and sucking their blood.",
    descricaoFra:
      "Il adore boire le sang d'autres créatures. Ses pieds sont minuscules, mais il marche habilement. Il se faufile sur une proie endormie avant de planter ses crocs et de sucer son sang.",
    descricaoChn:
      "它喜欢喝其他生物的血液。它的脚很小，但它走路很灵活。它悄悄接近熟睡的猎物，然后将牙齿刺入并吸取血液。",
    descricaoEsp:
      "Le encanta beber la sangre de otras criaturas. Sus pies son diminutos, pero camina con destreza. Se acerca sigilosamente a una presa dormida antes de hundir sus colmillos y chupar su sangre.",
  },
  {
    nro: 42,
    som: "./Sons/golbat.mp3",
    nome: "Golbat",
    genero: "♀",
    tamanho: 5,
    img: "./pokemons/golbat-f.gif",
    imgShiny: "./pokemons/golbat-fShiny.gif",
    tipo: ["Venenoso", "Voador"],
    tipoEua: ["Poison", "Flying"],
    tipoFra: ["Venimeux", "Volant"],
    tipoChn: ["毒", "飞行"],
    tipoEsp: ["Venenoso", "Volador"],
    descricao:
      "Adora beber o sangue de outras criaturas. Seus pés são minúsculos, mas este Pokémon anda habilmente. Ele se aproxima de uma presa adormecida antes de afundar em suas presas e sugar o sangue.",
    descricaoEua:
      "It loves to drink the blood of other creatures. Its feet are tiny, but it walks skillfully. It sneaks up on sleeping prey before sinking its fangs and sucking their blood.",
    descricaoFra:
      "Il adore boire le sang d'autres créatures. Ses pieds sont minuscules, mais il marche habilement. Il se faufile sur une proie endormie avant de planter ses crocs et de sucer son sang.",
    descricaoChn:
      "它喜欢喝其他生物的血液。它的脚很小，但它走路很灵活。它悄悄接近熟睡的猎物，然后将牙齿刺入并吸取血液。",
    descricaoEsp:
      "Le encanta beber la sangre de otras criaturas. Sus pies son diminutos, pero camina con destreza. Se acerca sigilosamente a una presa dormida antes de hundir sus colmillos y chupar su sangre.",
  },
  {
    nro: 43,
    som: "./Sons/oddish.mp3",
    nome: "Oddish",
    genero: "",
    tamanho: 1,
    img: "./pokemons/oddish.gif",
    imgShiny: "./pokemons/oddishShiny.gif",
    tipo: ["Planta", "Venenoso"],
    tipoEua: ["Grass", "Poison"],
    tipoFra: ["Plante", "Venimeux"],
    tipoChn: ["植物", "毒"],
    tipoEsp: ["Planta", "Venenoso"],
    descricao:
      "Se exposto ao luar, ele começa a se mover. Ele vaga por toda parte à noite para espalhar suas sementes. Durante o dia, fica no subsolo frio para evitar o sol. Cresce banhando-se ao luar.",
    descricaoEua:
      "If exposed to moonlight, it starts moving. It wanders everywhere at night to spread its seeds. During the day, it stays underground to avoid the sun. It grows by bathing in moonlight.",
    descricaoFra:
      "Exposé à la lumière de la lune, il commence à bouger. Il erre partout la nuit pour disperser ses graines. Pendant la journée, il reste sous terre pour éviter le soleil. Il grandit en se baignant à la lumière de la lune.",
    descricaoChn:
      "如果暴露在月光下，它开始移动。它整晚徘徊，四处散播种子。白天，它呆在地下避免阳光。通过沐浴在月光下生长。",
    descricaoEsp:
      "Si se expone a la luz de la luna, comienza a moverse. Vaga por todas partes por la noche para esparcir sus semillas. Durante el día, se queda bajo tierra para evitar el sol. Crece bañándose en la luz de la luna.",
  },
  {
    nro: 44,
    som: "./Sons/gloom.mp3",
    nome: "Gloom",
    genero: "♂",
    tamanho: 2,
    img: "./pokemons/gloom.gif",
    imgShiny: "./pokemons/gloomShiny.gif",
    tipo: ["Planta", "Venenoso"],
    tipoEua: ["Grass", "Poison"],
    tipoFra: ["Plante", "Venimeux"],
    tipoChn: ["植物", "毒"],
    tipoEsp: ["Planta", "Venenoso"],
    descricao:
      "Seus pistilos exalam um odor incrivelmente fétido. O cheiro horrível pode causar desmaios a uma distância de 1,25 milhas. O que parece ser baba é na verdade mel doce. É muito pegajoso e agarra-se teimosamente se tocado.",
    descricaoEua:
      "Its pistils exude an incredibly foul odor. The horrible smell can cause fainting from a distance of 1.25 miles. What seems to be mucus is actually sweet honey. It's very sticky and stubbornly clings when touched.",
    descricaoFra:
      "Ses pistils exhalent une odeur incroyablement nauséabonde. L'odeur horrible peut provoquer des évanouissements à une distance de 1,25 miles. Ce qui semble être du mucus est en réalité du miel sucré. Il est très collant et s'accroche tenacement lorsqu'il est touché.",
    descricaoChn:
      "它的花蕊散发出一种令人难闻的气味。这股可怕的气味能在1.25英里的范围内让人昏倒。看似粘液的东西实际上是甜蜜的蜂蜜。它非常粘，触碰时会顽固地粘住。",
    descricaoEsp:
      "Sus pistilos exhalan un olor increíblemente fétido. El olor horrible puede causar desmayos a una distancia de 1,25 millas. Lo que parece ser baba en realidad es miel dulce. Es muy pegajoso y se adhiere tenazmente cuando se toca.",
  },
  {
    nro: 44,
    som: "./Sons/gloom.mp3",
    nome: "Gloom",
    genero: "♀",
    tamanho: 2,
    img: "./pokemons/gloom-f.gif",
    imgShiny: "./pokemons/gloom-fShiny.gif",
    tipo: ["Planta", "Venenoso"],
    tipoEua: ["Grass", "Poison"],
    tipoFra: ["Plante", "Venimeux"],
    tipoChn: ["植物", "毒"],
    tipoEsp: ["Planta", "Venenoso"],
    descricao:
      "Seus pistilos exalam um odor incrivelmente fétido. O cheiro horrível pode causar desmaios a uma distância de 1,25 milhas. O que parece ser baba é na verdade mel doce. É muito pegajoso e agarra-se teimosamente se tocado.",
    descricaoEua:
      "Its pistils exude an incredibly foul odor. The horrible smell can cause fainting from a distance of 1.25 miles. What seems to be mucus is actually sweet honey. It's very sticky and stubbornly clings when touched.",
    descricaoFra:
      "Ses pistils exhalent une odeur incroyablement nauséabonde. L'odeur horrible peut provoquer des évanouissements à une distance de 1,25 miles. Ce qui semble être du mucus est en réalité du miel sucré. Il est très collant et s'accroche tenacement lorsqu'il est touché.",
    descricaoChn:
      "它的花蕊散发出一种令人难闻的气味。这股可怕的气味能在1.25英里的范围内让人昏倒。看似粘液的东西实际上是甜蜜的蜂蜜。它非常粘，触碰时会顽固地粘住。",
    descricaoEsp:
      "Sus pistilos exhalan un olor increíblemente fétido. El olor horrible puede causar desmayos a una distancia de 1,25 millas. Lo que parece ser baba en realidad es miel dulce. Es muy pegajoso y se adhiere tenazmente cuando se toca.",
  },
  {
    nro: 45,
    som: "./Sons/vileplume.mp3",
    nome: "Vileplume",
    genero: "♂",
    tamanho: 3,
    img: "./pokemons/vileplume.gif",
    imgShiny: "./pokemons/vileplumeShiny.gif",
    tipo: ["Planta", "Venenoso"],
    tipoEua: ["Grass", "Poison"],
    tipoFra: ["Plante", "Venimeux"],
    tipoChn: ["植物", "毒"],
    tipoEsp: ["Planta", "Venenoso"],
    descricao:
      "Tem as maiores pétalas do mundo. A cada passo, as pétalas sacodem nuvens pesadas de pólen tóxico. Quanto maiores suas pétalas, mais pólen tóxico ele contém. Sua cabeça grande é pesada e difícil de segurar.",
    descricaoEua:
      "It has the largest petals in the world. With every step, the petals shake heavy clouds of toxic pollen. The larger its petals, the more toxic pollen it contains. Its large head is heavy and hard to hold.",
    descricaoFra:
      "Il a les plus grandes pétales du monde. À chaque pas, les pétales secouent de lourdes nuages de pollen toxique. Plus ses pétales sont grands, plus il contient de pollen toxique. Sa grande tête est lourde et difficile à tenir.",
    descricaoChn:
      "它有世界上最大的花瓣。每走一步，花瓣都会摇动沉重的毒花粉云。花瓣越大，它所含的毒花粉就越多。它的大头很重，难以掌控。",
    descricaoEsp:
      "Tiene los pétalos más grandes del mundo. Con cada paso, los pétalos sacuden nubes pesadas de polen tóxico. Cuanto más grandes son sus pétalos, más polen tóxico contiene. Su gran cabeza es pesada y difícil de sostener.",
  },
  {
    nro: 45,
    som: "./Sons/vileplume.mp3",
    nome: "Vileplume",
    genero: "♀",
    tamanho: 3,
    img: "./pokemons/vileplume-f.gif",
    imgShiny: "./pokemons/vileplume-fShiny.gif",
    tipo: ["Planta", "Venenoso"],
    tipoEua: ["Grass", "Poison"],
    tipoFra: ["Plante", "Venimeux"],
    tipoChn: ["植物", "毒"],
    tipoEsp: ["Planta", "Venenoso"],
    descricao:
      "Tem as maiores pétalas do mundo. A cada passo, as pétalas sacodem nuvens pesadas de pólen tóxico. Quanto maiores suas pétalas, mais pólen tóxico ele contém. Sua cabeça grande é pesada e difícil de segurar.",
    descricaoEua:
      "It has the largest petals in the world. With every step, the petals shake heavy clouds of toxic pollen. The larger its petals, the more toxic pollen it contains. Its large head is heavy and hard to hold.",
    descricaoFra:
      "Il a les plus grandes pétales du monde. À chaque pas, les pétales secouent de lourdes nuages de pollen toxique. Plus ses pétales sont grands, plus il contient de pollen toxique. Sa grande tête est lourde et difficile à tenir.",
    descricaoChn:
      "它有世界上最大的花瓣。每走一步，花瓣都会摇动沉重的毒花粉云。花瓣越大，它所含的毒花粉就越多。它的大头很重，难以掌控。",
    descricaoEsp:
      "Tiene los pétalos más grandes del mundo. Con cada paso, los pétalos sacuden nubes pesadas de polen tóxico. Cuanto más grandes son sus pétalos, más polen tóxico contiene. Su gran cabeza es pesada y difícil de sostener.",
  },
  {
    nro: 46,
    som: "./Sons/paras.mp3",
    nome: "Paras",
    genero: " ",
    tamanho: 0,
    img: "./pokemons/paras.gif",
    imgShiny: "./pokemons/parasShiny.gif",
    tipo: ["Inseto", "Planta"],
    tipoEua: ["Bug", "Grass"],
    tipoFra: ["Insecte", "Plante"],
    tipoChn: ["虫", "植物"],
    tipoEsp: ["Insecto", "Planta"],
    descricao:
      "Tocas sob o solo para roer as raízes das árvores. Os cogumelos nas costas absorvem a maior parte da nutrição.",
    descricaoEua:
      "Digs underground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.",
    descricaoFra:
      "Creuse sous terre pour ronger les racines des arbres. Les champignons sur son dos absorbent la majeure partie de la nutrition.",
    descricaoChn: "在地下挖掘，啃食树根。背上的蘑菇吸收了大部分的营养。",
    descricaoEsp:
      "Cava bajo tierra para roer las raíces de los árboles. Los hongos en su espalda absorben la mayor parte de la nutrición.",
  },
  {
    nro: 47,
    som: "./Sons/parasect.mp3",
    nome: "Parasect",
    genero: " ",
    tamanho: 3,
    img: "./pokemons/parasect.gif",
    imgShiny: "./pokemons/parasectShiny.gif",
    tipo: ["Inseto", "Planta"],
    tipoEua: ["Bug", "Grass"],
    tipoFra: ["Insecte", "Plante"],
    tipoChn: ["虫", "植物"],
    tipoEsp: ["Insecto", "Planta"],
    descricao:
      "O hospedeiro do inseto é drenado de energia pelo cogumelo em suas costas. O cogumelo parece fazer todo o pensamento.",
    descricaoEua:
      "The insect's host is drained of energy by the mushroom on its back. The mushroom seems to do all the thinking.",
    descricaoFra:
      "L'hôte de l'insecte est drainé de son énergie par le champignon sur son dos. Le champignon semble faire toute la réflexion.",
    descricaoChn: "昆虫的宿主被背上的蘑菇吸取能量。蘑菇似乎在思考一切。",
    descricaoEsp:
      "El anfitrión del insecto es drenado de energía por el hongo en su espalda. El hongo parece hacer todo el pensamiento.",
  },
  {
    nro: 48,
    som: "./Sons/venonat.mp3",
    nome: "Venonat",
    genero: " ",
    tamanho: 3,
    img: "./pokemons/venonat.gif",
    imgShiny: "./pokemons/venonatShiny.gif",
    tipo: ["Inseto", "Venenoso"],
    tipoEua: ["Bug", "Poison"],
    tipoFra: ["Insecte", "Venimeux"],
    tipoChn: ["虫", "毒"],
    tipoEsp: ["Insecto", "Veneno"],
    descricao:
      "Seus grandes olhos atuam como radar. Em um lugar claro, você pode ver que eles são aglomerados de muitos olhos minúsculos.",
    descricaoEua:
      "Its large eyes function as radar. In bright places, you can see they are clusters of many tiny eyes.",
    descricaoFra:
      "Ses grands yeux fonctionnent comme un radar. Dans les endroits clairs, vous pouvez voir qu'ils sont des grappes de nombreux petits yeux.",
    descricaoChn:
      "它的大眼睛作为雷达使用。在明亮的地方，你可以看到它们是由许多微小的眼睛聚集而成的。",
    descricaoEsp:
      "Sus grandes ojos funcionan como radar. En lugares brillantes, puedes ver que son grupos de muchos ojos diminutos.",
  },
  {
    nro: 49,
    som: "./Sons/venomoth.mp3",
    nome: "Venomoth",
    genero: " ",
    tamanho: 4,
    img: "./pokemons/venomoth.gif",
    imgShiny: "./pokemons/venomothShiny.gif",
    tipo: ["Inseto", "Venenoso"],
    tipoEua: ["Bug", "Poison"],
    tipoFra: ["Insecte", "Venimeux"],
    tipoChn: ["虫", "毒"],
    tipoEsp: ["Insecto", "Veneno"],
    descricao:
      "As escamas em pó em suas asas são difíceis de remover da pele. Eles também contêm veneno que vaza em contato.",
    descricaoEua:
      "The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks upon contact.",
    descricaoFra:
      "Les écailles poudreuses sur ses ailes sont difficiles à enlever de la peau. Elles contiennent également du poison qui fuit au contact.",
    descricaoChn:
      "它翅膀上的粉状鳞片很难从皮肤上去除。它们还包含接触时泄漏的毒液。",
    descricaoEsp:
      "Las escamas polvorientas en sus alas son difíciles de quitar de la piel. También contienen veneno que se filtra al contacto.",
  },
  {
    nro: 50,
    som: "./Sons/diglett.mp3",
    nome: "Diglett",
    genero: " ",
    nomeAlola: "diglett Alola",
    generoAlola: "",
    imgAlola: "./pokemons/diglett-alola.gif",
    imgAlolaShiny: "./pokemons/diglett-alolaShiny.gif",
    tamanho: 0,
    tamanhoAlola: 0,
    img: "./pokemons/diglett.gif",
    imgShiny: "./pokemons/diglettShiny.gif",
    tipo: ["Terrestre"],
    tipoEua: ["Ground"],
    tipoFra: ["Sol"],
    tipoChn: ["地面"],
    tipoEsp: ["Tierra"],
    tipoAlola: ["Terrestre", "Metal"],
    tipoAlolaEua: ["Ground", "Steel"],
    tipoAlolaFra: ["Sol", "Acier"],
    tipoAlolaChn: ["地面", "钢"],
    tipoAlolaEsp: ["Tierra", "Acero"],
    descricaoAlolaEua:
      "The things growing from its head are whiskers that have become metallic. Diglett communicates with its comrades by waving them.",
    descricaoAlola:
      "As coisas que crescem em sua cabeça são bigodes que se tornaram metálicos. Diglett se comunica com seus companheiros acenando com eles.",
    descricaoAlolaEsp:
      "Las cosas que crecen de su cabeza son bigotes que se han vuelto metálicos. Diglett se comunica con sus compañeros moviéndolos.",
    descricaoAlolaChn:
      "从它头部生长出来的是变得金属化的胡须。Diglett通过摆动胡须与同伴沟通。",
    descricaoAlolaFra:
      "Les choses qui poussent de sa tête sont des moustaches devenues métalliques. Diglett communique avec ses camarades en les agitant.",
    descricao:
      "Se um Diglett cava através de um campo, deixa o solo perfeitamente arado e ideal para plantar.",
    descricaoEua:
      "When a Diglett digs through a field, it leaves the soil perfectly plowed and ideal for planting.",
    descricaoFra:
      "Lorsqu'un Diglett creuse à travers un champ, il laisse le sol parfaitement labouré et idéal pour la plantation.",
    descricaoChn:
      "当Diglett穿过田地时，它会把地面壤翻得非常整齐，非常适合种植。",
    descricaoEsp:
      "Cuando un Diglett cava a través de un campo, deja la tierra perfectamente arada e ideal para plantar.",
  },
  {
    nro: 51,
    som: "./Sons/dugtrio.mp3",
    nome: "Dugtrio",
    genero: "",
    nomeAlola: "Dugtrio Alola",
    generoAlola: "",
    imgAlola: "./pokemons/dugtrio-alola.gif",
    imgAlolaShiny: "./pokemons/dugtrio-alolaShiny.gif",
    tamanho: 2,
    tamanhoAlola: 2,
    img: "./pokemons/dugtrio.gif",
    imgShiny: "./pokemons/dugtrioShiny.gif",
    tipo: ["Terrestre"],
    tipoEua: ["Ground"],
    tipoFra: ["Sol"],
    tipoChn: ["地面"],
    tipoEsp: ["Tierra"],
    tipoAlola: ["Terrestre", "Metal"],
    tipoAlolaEua: ["Ground", "Steel"],
    tipoAlolaFra: ["Sol", "Acier"],
    tipoAlolaChn: ["地面", "钢"],
    tipoAlolaEsp: ["Tierra", "Acero"],
    descricaoAlolaEua:
      "The things growing from its head are whiskers that have become metallic. Diglett communicates with its comrades by waving them.",
    descricaoAlolaPor:
      "As coisas que crescem em sua cabeça são bigodes que se tornaram metálicos. Diglett se comunica com seus companheiros acenando com eles.",
    descricaoAlolaEsp:
      "Las cosas que crecen de su cabeza son bigotes que se han vuelto metálicos. Diglett se comunica con sus compañeros moviéndolos.",
    descricaoAlolaChn:
      "从它头部生长出来的是变得金属化的胡须。Diglett通过摆动胡须与同伴沟通。",
    descricaoAlolaFra:
      "Les choses qui poussent de sa tête sont des moustaches devenues métalliques. Diglett communique avec ses camarades en les agitant.",
    descricao:
      "Uma equipe de trigêmeos Diglett. Ele desencadeia enormes terremotos cavando 60 milhas no subsolo.",
    descricaoEua:
      "A team of three Digletts. It triggers massive earthquakes by burrowing 60 miles underground.",
    descricaoFra:
      "Une équipe de triplés Diglett. Il déclenche d'énormes tremblements de terre en creusant à 60 miles sous terre.",
    descricaoChn:
      "由三只Diglett组成的团队。通过在地下挖掘60英里，它会引发巨大的地震。",
    descricaoEsp:
      "Un equipo de trillizos Diglett. Provoca enormes terremotos al cavar 60 millas bajo tierra.",
  },
  {
    nro: 52,
    som: "./Sons/meowth.mp3",
    nome: "Meowth",
    genero: "",
    nomeAlola: "Meowth Alola",
    generoAlola: "",
    nomeGigantamax: "Meowth Gigantamax",
    genero: "",
    imgGigantamax: "./pokemons/meowth-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/meowth-gigantamaxShiny.gif",
    nomeGalar: "Meowth Galar",
    generoGalar: "",
    imgAlola: "./pokemons/meowth-alola.gif",
    imgAlolaShiny: "./pokemons/meowth-alolaShiny.gif",
    imgGalar: "./pokemons/meowth-galar.gif",
    imgGalarShiny: "./pokemons/meowth-galarShiny.gif",
    tamanho: 2,
    tamanhoAlola: 2,
    tamanhoGalar: 2,
    tamanhoGigantamax: 6,
    img: "./pokemons/meowth.gif",
    imgShiny: "./pokemons/meowthShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    tipoAlola: ["Escuro"],
    tipoAlolaEua: ["Dark"],
    tipoAlolaFra: ["Sombre"],
    tipoAlolaChn: ["黑暗"],
    tipoAlolaEsp: ["Oscuro"],
    tipoGalar: ["Metal"],
    tipoGalarEua: ["Steel"],
    tipoGalarFra: ["Acier"],
    tipoGalarChn: ["钢"],
    tipoGalarEsp: ["Acero"],
    tipoGigantamax: ["Normal"],
    tipoGigantamaxEua: ["Normal"],
    tipoGigantamaxFra: ["Normal"],
    tipoGigantamaxChn: ["普通"],
    tipoGigantamaxEsp: ["Normal"],
    descricaoGigantamax:
      "A marca que apareceu em sua moeda gigante é considerada a chave para desvendar os segredos do fenômeno Dynamax. O Gigantamaxing fez esticar o corpo do Meowth até um comprimento incrível e a moeda na sua cabeça também se tornou enorme. A moeda gigante pode lançar uma torrente de poder Gigantamax, enchendo a área ao redor com um poderoso brilho dourado. Meowth adora objetos brilhantes e quando vê arranha-céus revestidos a vidro não consegue resistir à tentação de os usar para afiar as suas garras. Este comportamento pode causar danos consideráveis, como desgastar as paredes exteriores e quebrar vidros.",
    descricaoGigantamaxEua:
      "The mark that appeared on its gigantic coin is thought to be the key to unlocking the secrets of the Dynamax phenomenon. Gigantamaxing stretched Meowth’s body to incredible lengths, and the coin on its head also grew enormous. The giant coin can fire off a torrent of Gigantamax power, filling the area around it with a powerful golden glow. Meowth loves shiny objects, and when it sees glass-covered skyscrapers, it can't resist sharpening its claws on them. This behavior can cause considerable damage, such as wearing down exterior walls and shattering glass.",
    descricaoGigantamaxEsp:
      "La marca que apareció en su moneda gigante se considera la clave para desentrañar los secretos del fenómeno Dinamax. El Gigamax hizo que el cuerpo de Meowth se estirara hasta longitudes increíbles, y la moneda en su cabeza también se hizo enorme. La moneda gigante puede lanzar una torrente de poder Gigamax, llenando el área a su alrededor con un poderoso brillo dorado. A Meowth le encantan los objetos brillantes y, cuando ve rascacielos cubiertos de vidrio, no puede resistir la tentación de afilar sus garras en ellos. Este comportamiento puede causar daños considerables, como desgastar las paredes exteriores y romper vidrios.",
    descricaoGigantamaxChn:
      "出现在它巨大硬币上的标记被认为是解开极巨化现象秘密的关键。极巨化使喵喵的身体被拉长至惊人的长度，头上的硬币也变得巨大。巨大硬币可以释放出一股极巨化能量，使周围区域充满强大的金色光辉。喵喵喜爱闪亮的物品，当它看到玻璃覆盖的摩天大楼时，无法抗拒用其来磨利爪子。这种行为可能会造成相当大的损害，比如磨损外墙和破坏玻璃。",
    descricaoGigantamaxFra:
      "La marque apparue sur sa gigantesque pièce est considérée comme la clé permettant de percer les secrets du phénomène Dynamax. Le Gigamax a étiré le corps de Miaouss à des longueurs incroyables, et la pièce sur sa tête est également devenue énorme. La pièce géante peut déchaîner un torrent d’énergie Gigamax, remplissant la zone environnante d’une puissante lueur dorée. Miaouss adore les objets brillants et, lorsqu'il voit des gratte-ciels recouverts de verre, il ne peut s'empêcher d’aiguiser ses griffes dessus. Ce comportement peut causer des dégâts considérables, comme l'usure des murs extérieurs et la casse de vitres.",
    descricaoGalarEua:
      "Living with a savage, seafaring people has toughened this Pokémon’s body so much that parts of it have turned to iron.",
    descricaoGalar:
      "Viver com um povo selvagem e marítimo endureceu tanto o corpo deste Pokémon que partes dele se transformaram em ferro.",
    descricaoGalarEsp:
      "Vivir con un pueblo salvaje y marinero ha endurecido tanto el cuerpo de este Pokémon que partes de él se han convertido en hierro.",
    descricaoGalarChn:
      "与野蛮的海洋民族一起生活，使这个宝可梦的身体变得如此坚硬，以至于部分变成了铁。",
    descricaoGalarFra:
      "Vivant avec un peuple marin sauvage, le corps de ce Pokémon s'est tellement durci que certaines parties sont devenues du fer.",
    descricaoAlolaEua:
      "It’s accustomed to luxury because it used to live with Alolan royalty. As a result, it’s very picky about food.",
    descricaoAlola:
      "Está acostumado ao luxo porque costumava viver com a realeza de Alola. Como resultado, é muito exigente com comida.",
    descricaoAlolaEsp:
      "Está acostumbrado al lujo porque solía vivir con la realeza de Alola. Como resultado, es muy exigente con la comida.",
    descricaoAlolaChn:
      "它习惯了奢华，因为它曾与阿罗拉的皇室一起生活。因此，它对食物非常挑剔。",
    descricaoAlolaFra:
      "Habitué au luxe, il vivait autrefois avec la royauté d'Alola. En conséquence, il est très difficile en matière de nourriture.",
    descricao:
      "Adora colecionar coisas brilhantes. Se estiver de bom humor, pode até deixar seu Treinador dar uma olhada em seu tesouro de tesouros.",
    descricaoEua:
      "It loves collecting shiny things. If it’s in a good mood, it might even let its Trainer take a peek at its treasure hoard.",
    descricaoFra:
      "Il adore collectionner des objets brillants. S'il est de bonne humeur, il pourrait même laisser son Dresseur jeter un coup d'œil à son trésor.",
    descricaoChn:
      "它喜欢收集闪亮的东西。如果心情好，甚至可能让训练家看看它的宝藏。",
    descricaoEsp:
      "Le encanta coleccionar cosas brillantes. Si está de buen humor, incluso puede dejar que su Entrenador eche un vistazo a su tesoro.",
  },
  {
    nro: 53,
    som: "./Sons/persian.mp3",
    nome: "Persian",
    genero: "",
    nomeAlola: "Persian Alola",
    generoAlola: "",
    nomeGalar: "Perrserker",
    generoGalar: "",
    imgAlola: "./pokemons/persian-alola.gif",
    imgAlolaShiny: "./pokemons/persian-alolaShiny.gif",
    imgGalar: "./pokemons/perrserker.gif",
    imgGalarShiny: "./pokemons/perrserkerShiny.gif",
    tamanho: 3,
    tamanhoAlola: 3,
    tamanhoGalar: 3,
    img: "./pokemons/persian.gif",
    imgShiny: "./pokemons/persianShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    tipoAlola: ["Escuro"],
    tipoAlolaEua: ["Dark"],
    tipoAlolaFra: ["Sombre"],
    tipoAlolaChn: ["黑暗"],
    tipoAlolaEsp: ["Oscuro"],
    tipoGalar: ["Metal"],
    tipoGalarEua: ["Steel"],
    tipoGalarFra: ["Acier"],
    tipoGalarChn: ["钢"],
    tipoGalarEsp: ["Acero"],
    descricaoGalarEua:
      "What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle.",
    descricaoGalar:
      "O que parece ser um capacete de ferro é, na verdade, cabelo endurecido. Este Pokémon vive pela emoção da batalha.",
    descricaoEsp:
      "Lo que parece ser un casco de hierro es en realidad cabello endurecido. Este Pokémon vive por la emoción de la batalla.",
    descricaoFra:
      "Ce qui semble être un casque en fer est en réalité des cheveux durcis. Ce Pokémon vit pour l'excitation du combat.",
    descricaoChn:
      "看起来像铁盔的实际上是硬化的毛发。这只宝可梦以战斗的刺激为生。",
    descricaoAlolaEua:
      "The round face of Alolan Persian is considered to be a symbol of prosperity in the Alola region, so these Pokémon are very well cared for.",
    descricaoAlola:
      "O rosto arredondado do Persian de Alola é considerado um símbolo de prosperidade na região de Alola, por isso esses Pokémon são muito bem cuidados.",
    descricaoAlolaEsp:
      "El rostro redondo de Persian de Alola es considerado un símbolo de prosperidad en la región de Alola, por lo que estos Pokémon son muy bien cuidados.",
    descricaoAlolaFra:
      "Le visage rond de Persian d'Alola est considéré comme un symbole de prospérité dans la région d'Alola, c'est pourquoi ces Pokémon sont très bien traités.",
    descricaoAlolaChn:
      "阿罗拉地区的猫老大的圆脸被认为是繁荣的象征，因此这些宝可梦受到精心照料。",
    descricao:
      "Fazer com que este Pokémon orgulhoso se aqueça com você exige muito esforço, e ele vai arranhar você no momento em que ficar irritado.",
    descricaoEua:
      "Getting this proud Pokémon to warm up to you takes a lot of effort, and it will scratch you the moment it gets annoyed.",
    descricaoFra:
      "Obtenir que ce Pokémon fier s'attache à vous demande beaucoup d'efforts, et il vous griffera dès qu'il sera irrité.",
    descricaoChn:
      "让这只高傲的宝可梦对你产生好感需要很多努力，一旦惹怒它，它会立刻抓伤你。",
    descricaoEsp:
      "Lograr que este orgulloso Pokémon se encariñe contigo requiere mucho esfuerzo, y te arañará en el momento en que se irrite.",
  },
  {
    nro: 54,
    som: "./Sons/psyduck.mp3",
    nome: "Psyduck",
    genero: "",
    tamanho: 2,
    img: "./pokemons/psyduck.gif",
    imgShiny: "./pokemons/psyduckShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Psyduck é constantemente assolado por dores de cabeça. Se o Pokémon deixar seu estranho poder entrar em erupção, aparentemente a dor diminui por um tempo.",
    descricaoEua:
      "Psyduck is constantly plagued by headaches. If the Pokémon allows its strange power to erupt, the pain seems to subside for a while.",
    descricaoFra:
      "Psyduck est constamment tourmenté par des maux de tête. Si le Pokémon laisse son étrange pouvoir éclater, la douleur semble diminuer pendant un certain temps.",
    descricaoChn:
      "可达鸭经常被头痛困扰。如果它释放出奇怪的力量，疼痛似乎会暂时减轻。",
    descricaoEsp:
      "Psyduck está constantemente acosado por dolores de cabeza. Si permite que su extraño poder estalle, el dolor aparentemente disminuye por un tiempo.",
  },
  {
    nro: 55,
    som: "./Sons/golduck.mp3",
    nome: "Golduck",
    genero: "",
    tamanho: 4,
    img: "./pokemons/golduck.gif",
    imgShiny: "./pokemons/golduckShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Este Pokémon vive em rios que fluem suavemente. Ele rema pela água com seus longos membros, exibindo suas graciosas habilidades de natação.",
    descricaoEua:
      "This Pokémon lives in gently flowing rivers. It paddles through the water with its long limbs, showing off its graceful swimming skills.",
    descricaoFra:
      "Ce Pokémon vit dans des rivières au courant doux. Il nage à travers l'eau avec ses longs membres, exhibant ses gracieuses compétences de nage.",
    descricaoChn:
      "这种宝可梦生活在流水缓慢的河流中。它用长长的四肢划水，展现优雅的游泳技巧。",
    descricaoEsp:
      "Este Pokémon vive en ríos de flujo suave. Rema por el agua con sus largos miembros, mostrando sus gráciles habilidades de natación.",
  },
  {
    nro: 56,
    som: "./Sons/mankey.mp3",
    nome: "Mankey",
    genero: "",
    tamanho: 3,
    img: "./pokemons/mankey.gif",
    imgShiny: "./pokemons/mankeyShiny.gif",
    tipo: ["Lutador"],
    tipoEua: ["Fighting"],
    tipoFra: ["Combat"],
    tipoChn: ["格斗"],
    tipoEsp: ["Lucha"],
    descricao:
      "Um Pokémon ágil que vive em árvores. Ele se irrita facilmente e não hesitará em atacar qualquer coisa.",
    descricaoEua:
      "An agile Pokémon that lives in trees. It gets angry easily and won't hesitate to attack anything.",
    descricaoFra:
      "Un Pokémon agile qui vit dans les arbres. Il se met facilement en colère et n'hésitera pas à attaquer quoi que ce soit.",
    descricaoChn:
      "这种敏捷的宝可梦生活在树上。它很容易生气，毫不犹豫地攻击任何东西。",
    descricaoEsp:
      "Un Pokémon ágil que vive en los árboles. Se irrita fácilmente y no dudará en atacar cualquier cosa.",
  },
  {
    nro: 57,
    som: "./Sons/primeape.mp3",
    nome: "Primeape",
    genero: "",
    tamanho: 4,
    img: "./pokemons/primeape.gif",
    imgShiny: "./pokemons/primeapeShiny.gif",
    tipo: ["Lutador"],
    tipoEua: ["Fighting"],
    tipoFra: ["Combat"],
    tipoChn: ["格斗"],
    tipoEsp: ["Lucha"],
    descricao:
      "Só deixa de ficar com raiva quando ninguém mais está por perto. Ver este momento é muito difícil.",
    descricaoEua:
      "It only stops being angry when no one else is around. Witnessing this moment is very difficult.",
    descricaoFra:
      "Il ne cesse d'être en colère que lorsque personne n'est là. Voir ce moment est très difficile.",
    descricaoChn:
      "只有当周围没有其他人时，它才会停止生气。目睹这一刻非常困难。",
    descricaoEsp:
      "Solo deja de estar enojado cuando no hay nadie más cerca. Presenciar este momento es muy difícil.",
  },
  {
    nro: 58,
    som: "./Sons/growlithe.mp3",
    nome: "Growlithe",
    genero: "",
    tamanho: 3,
    img: "./pokemons/growlithe.gif",
    imgShiny: "./pokemons/growlitheShiny.gif",
    tipo: ["Fogo"],
    tipoEua: ["Fire"],
    tipoFra: ["Feu"],
    tipoChn: ["火"],
    tipoEsp: ["Fuego"],
    descricao:
      "Tem uma natureza corajosa e confiável. Ele enfrenta sem medo inimigos maiores e mais fortes.",
    descricaoEua:
      "It has a brave and trustworthy nature. It fearlessly faces opponents larger and stronger than itself.",
    descricaoFra:
      "Il a une nature courageuse et digne de confiance. Il affronte sans peur des adversaires plus grands et plus forts.",
    descricaoChn: "它有着勇敢可靠的天性。它会无畏地面对比自己更大更强的对手。",
    descricaoEsp:
      "Tiene una naturaleza valiente y confiable. Enfrenta sin miedo a oponentes más grandes y fuertes que él.",
  },
  {
    nro: 59,
    som: "./Sons/arcanine.mp3",
    nome: "Arcanine",
    genero: "",
    tamanho: 5,
    img: "./pokemons/arcanine.gif",
    imgShiny: "./pokemons/arcanineShiny.gif",
    tipo: ["Fogo"],
    tipoEua: ["Fire"],
    tipoFra: ["Feu"],
    tipoChn: ["火"],
    tipoEsp: ["Fuego"],
    descricao:
      "A visão dele correndo mais de 6.200 milhas em um único dia e noite cativou muitas pessoas.",
    descricaoEua:
      "The sight of it running over 6,200 miles in a single day and night has captivated many people.",
    descricaoFra:
      "Le voir courir plus de 10 000 kilomètres en une seule journée et nuit a captivé de nombreuses personnes.",
    descricaoChn: "它在一天一夜之间奔跑超过6200英里的景象吸引了许多人。",
    descricaoEsp:
      "La visión de él corriendo más de 6,200 millas en un solo día y noche ha cautivado a muchas personas.",
  },
  {
    nro: 60,
    som: "./Sons/poliwag.mp3",
    nome: "Poliwag",
    genero: "",
    tamanho: 1,
    img: "./pokemons/poliwag.gif",
    imgShiny: "./pokemons/poliwagShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Para Poliwag, nadar é mais fácil do que caminhar. O padrão de redemoinho em sua barriga é, na verdade, parte das entranhas do Pokémon que aparecem através da pele.",
    descricaoEua:
      "For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of its internal organs showing through its skin.",
    descricaoFra:
      "Pour Poliwag, nager est plus facile que marcher. Le motif en spirale sur son ventre est en fait une partie de ses organes internes visible à travers sa peau.",
    descricaoChn:
      "对Poliwag来说，游泳比走路更容易。它肚子上的漩涡图案实际上是它内部器官通过皮肤显现出来的部分。",
    descricaoEsp:
      "Para Poliwag, nadar es más fácil que caminar. El patrón de espiral en su vientre es en realidad parte de sus órganos internos que se ven a través de su piel.",
  },
  {
    nro: 61,
    som: "./Sons/poliwhirl.mp3",
    nome: "Poliwhirl",
    genero: "",
    tamanho: 2,
    img: "./pokemons/poliwhirl.gif",
    imgShiny: "./pokemons/poliwhirlShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Olhar para o redemoinho em sua barriga causa sonolência. Esse traço de Poliwhirl tem sido usado no lugar de canções de ninar para fazer as crianças dormirem.",
    descricaoEua:
      "Looking at the swirl on its belly induces drowsiness. This Poliwhirl trait has been used in place of lullabies to get children to sleep.",
    descricaoFra:
      "Regarder le tourbillon sur son ventre provoque de la somnolence. Ce trait de Poliwhirl a été utilisé à la place des berceuses pour endormir les enfants.",
    descricaoChn:
      "看着它肚子上的漩涡会让人昏昏欲睡。Poliwhirl的这一特性被用来代替摇篮曲哄孩子入睡。",
    descricaoEsp:
      "Mirar el remolino en su vientre induce somnolencia. Este rasgo de Poliwhirl se ha utilizado en lugar de nanas para dormir a los niños.",
  },
  {
    nro: 62,
    som: "./Sons/poliwrath.mp3",
    nome: "Poliwrath",
    genero: "",
    tamanho: 4,
    img: "./pokemons/poliwrath.gif",
    imgShiny: "./pokemons/poliwrathShiny.gif",
    tipo: ["Água", "Lutador"],
    tipoEua: ["Water", "Fighting"],
    tipoFra: ["Eau", "Combat"],
    tipoChn: ["水", "格斗"],
    tipoEsp: ["Agua", "Lucha"],
    descricao:
      "Seu corpo é músculo sólido. Ao nadar em mares frios, Poliwrath usa seus braços impressionantes para esmagar o gelo à deriva e avançar.",
    descricaoEua:
      "Its body is solid muscle. While swimming in frigid seas, Poliwrath uses its impressive arms to smash through drifting ice and forge ahead.",
    descricaoFra:
      "Son corps est fait de muscle solide. En nageant dans des mers glacées, Poliwrath utilise ses bras impressionnants pour briser la glace dérivante et avancer.",
    descricaoChn:
      "它的身体是坚实的肌肉。在寒冷的海洋中游泳时，Poliwrath 用其强壮的手臂击碎漂浮的冰块并继续前进。",
    descricaoEsp:
      "Su cuerpo es músculo sólido. Al nadar en mares fríos, Poliwrath usa sus impresionantes brazos para romper el hielo a la deriva y avanzar.",
  },
  {
    nro: 63,
    som: "./Sons/abra.mp3",
    nome: "Abra",
    genero: "",
    tamanho: 2,
    img: "./pokemons/abra.gif",
    imgShiny: "./pokemons/abraShiny.gif",
    tipo: ["Psíquico"],
    tipoEua: ["Psychic"],
    tipoFra: ["Psy"],
    tipoChn: ["超能力"],
    tipoEsp: ["Psíquico"],
    descricao:
      "Este Pokémon usa seus poderes psíquicos enquanto dorme. O conteúdo dos sonhos de Abra afeta os poderes que o Pokémon exerce.",
    descricaoEua:
      "This Pokémon uses its psychic powers while it sleeps. The contents of Abra's dreams affect the powers that the Pokémon wields.",
    descricaoFra:
      "Ce Pokémon utilise ses pouvoirs psychiques pendant qu'il dort. Le contenu des rêves d'Abra influence les pouvoirs qu'il exerce.",
    descricaoChn:
      "这只宝可梦在睡觉时使用其超能力。Abra梦境的内容会影响它所施展的力量。",
    descricaoEsp:
      "Este Pokémon usa sus poderes psíquicos mientras duerme. El contenido de los sueños de Abra afecta los poderes que ejerce.",
  },
  {
    nro: 64,
    som: "./Sons/kadabra.mp3",
    nome: "Kadabra",
    genero: "",
    tamanho: 3,
    img: "./pokemons/kadabra.gif",
    imgShiny: "./pokemons/kadabraShiny.gif",
    tipo: ["Psíquico"],
    tipoEua: ["Psychic"],
    tipoFra: ["Psy"],
    tipoChn: ["超能力"],
    tipoEsp: ["Psíquico"],
    descricao:
      "Usando seu poder psíquico, Kadabra levita enquanto dorme. Ele usa sua cauda elástica como travesseiro.",
    descricaoEua:
      "Using its psychic power, Kadabra levitates while it sleeps. It uses its springy tail as a pillow.",
    descricaoFra:
      "En utilisant son pouvoir psychique, Kadabra lévite pendant son sommeil. Il utilise sa queue élastique comme oreiller.",
    descricaoChn:
      "使用其超能力，Kadabra在睡觉时会漂浮起来。它用富有弹性的尾巴当枕头。",
    descricaoEsp:
      "Usando su poder psíquico, Kadabra levita mientras duerme. Usa su cola elástica como almohada.",
  },
  {
    nro: 65,
    som: "./Sons/alakazam.mp3",
    nome: "Alakazam",
    genero: "",
    tamanho: 4,
    tamanhoMega: 5,
    img: "./pokemons/alakazam.gif",
    imgShiny: "./pokemons/alakazamShiny.gif",
    nomeMega: "Alakazam Mega",
    imgMega: "./pokemons/alakazam-mega.gif",
    imgMegaShiny: "./pokemons/alakazam-megaShiny.gif",
    tipo: ["Psíquico"],
    tipoEua: ["Psychic"],
    tipoFra: ["Psy"],
    tipoChn: ["超能力"],
    tipoEsp: ["Psíquico"],
    tipoMega: ["Psíquico"],
    tipoMegaEua: ["Psychic"],
    tipoMegaFra: ["Psy"],
    tipoMegaChn: ["超能力"],
    tipoMegaEsp: ["Psíquico"],
    descricaoMega:
      "A velocidade e o ataque especial de Alakazam estão altamente desenvolvidos e ficam ainda mais reforçados depois de mega evoluir. Uma vez que gasta toda a sua energia nos seus poderes psíquicos, mantém uma postura permanentemente meditativa, flutuando no ar. Na testa de Mega Alakazam surge um órgão vermelho que dizem emitir poderes psíquicos. Os golpes de Alakazam tornam-se ainda mais precisos depois de mega evoluir, sendo capaz de terminar batalhas num piscar de olhos.",
    descricaoMegaEua:
      "Alakazam's speed and special attack are highly developed and become even more reinforced after mega evolution. Once it expends all of its energy on its psychic powers, it maintains a permanently meditative posture, floating in the air. A red organ appears on Mega Alakazam's forehead, said to emit psychic powers. Alakazam's attacks become even more precise after mega evolving, capable of ending battles in the blink of an eye.",
    descricaoMegaEsp:
      "La velocidad y el ataque especial de Alakazam están altamente desarrollados y se refuerzan aún más después de la megaevolución. Una vez que gasta toda su energía en sus poderes psíquicos, mantiene una postura permanentemente meditativa, flotando en el aire. En la frente de Mega Alakazam aparece un órgano rojo que se dice emite poderes psíquicos. Los golpes de Alakazam se vuelven aún más precisos después de megaevolucionar, siendo capaz de terminar batallas en un abrir y cerrar de ojos.",
    descricaoMegaChn:
      "阿拉卡扎姆的速度和特攻得到了高度发展，经过超级进化后，进一步增强。 一旦它将所有精力用于其超能力，它就会保持一种永久冥想的姿势，漂浮在空中。超级阿拉卡扎姆的额头上出现了一个红色器官，据说它发出超能力。阿拉卡扎姆的攻击在超级进化后变得更加精确，能够在眨眼间结束战斗。",
    descricaoMegaFra:
      "La vitesse et l'attaque spéciale d'Alakazam sont hautement développées et sont encore renforcées après la méga-évolution. Une fois qu'il a épuisé toute son énergie dans ses pouvoirs psychiques, il adopte une posture méditative permanente, flottant dans les airs. Un organe rouge apparaît sur le front de Mega Alakazam, qui, dit-on, émet des pouvoirs psychiques. Les attaques d'Alakazam deviennent encore plus précises après la méga-évolution, capable de terminer les batailles en un clin d'œil.",
    descricao:
      "Tem um nível incrivelmente alto de inteligência. Alguns dizem que Alakazam se lembra de tudo o que aconteceu com ele, desde o nascimento até a morte.",
    descricaoEua:
      "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happened to it, from birth to death.",
    descricaoFra:
      "Il possède un niveau d'intelligence incroyablement élevé. Certains disent qu'Alakazam se souvient de tout ce qui lui est arrivé, de la naissance à la mort.",
    descricaoChn:
      "它拥有极高的智力水平。据说Alakazam能记得从出生到死亡发生过的一切。",
    descricaoEsp:
      "Tiene un nivel increíblemente alto de inteligencia. Algunos dicen que Alakazam recuerda todo lo que le ha sucedido, desde su nacimiento hasta su muerte.",
  },
  {
    nro: 66,
    som: "./Sons/machop.mp3",
    nome: "Machop",
    genero: "",
    tamanho: 2,
    img: "./pokemons/machop.gif",
    imgShiny: "./pokemons/machopShiny.gif",
    tipo: ["Lutador"],
    tipoEua: ["Fighting"],
    tipoFra: ["Combat"],
    tipoChn: ["格斗"],
    tipoEsp: ["Lucha"],
    descricao:
      "Todo o seu corpo é composto por músculos. Mesmo sendo do tamanho de uma criança humana, pode arremessar 100 adultos.",
    descricaoEua:
      "Its whole body is composed of muscles. Even though it's the size of a human child, it can throw 100 adults.",
    descricaoFra:
      "Tout son corps est composé de muscles. Bien qu'il ait la taille d'un enfant humain, il peut lancer 100 adultes.",
    descricaoChn:
      "它全身都是肌肉。即便它的体型和人类儿童一样大，也能扔飞100个成年人。",
    descricaoEsp:
      "Todo su cuerpo está compuesto de músculos. Aunque tiene el tamaño de un niño humano, puede lanzar a 100 adultos.",
  },
  {
    nro: 67,
    som: "./Sons/machoke.mp3",
    nome: "Machoke",
    genero: "",
    tamanho: 4,
    img: "./pokemons/machoke.gif",
    imgShiny: "./pokemons/machokeShiny.gif",
    tipo: ["Lutador"],
    tipoEua: ["Fighting"],
    tipoFra: ["Combat"],
    tipoChn: ["格斗"],
    tipoEsp: ["Lucha"],
    descricao:
      "Seu corpo musculoso é tão poderoso que deve usar um cinto de economia de energia para poder regular seus movimentos.",
    descricaoEua:
      "Its muscular body is so powerful that it must wear a power-save belt to regulate its movements.",
    descricaoFra:
      "Son corps musclé est si puissant qu'il doit porter une ceinture d'économie d'énergie pour réguler ses mouvements.",
    descricaoChn: "它强壮的肌肉身体非常有力，必须戴上节能腰带来调节动作。",
    descricaoEsp:
      "Su cuerpo musculoso es tan poderoso que debe usar un cinturón de ahorro de energía para regular sus movimientos.",
  },
  {
    nro: 68,
    som: "./Sons/machamp.mp3",
    nome: "Machamp",
    genero: "",
    tamanho: 5,
    img: "./pokemons/machamp.gif",
    imgShiny: "./pokemons/machampShiny.gif",
    nomeGigantamax: "Machamp Gigantamax",
    imgGigantamax: "./pokemons/machamp-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/machamp-gigantamaxShiny.gif",
    tipo: ["Lutador"],
    tipoEua: ["Fighting"],
    tipoFra: ["Combat"],
    tipoChn: ["格斗"],
    tipoEsp: ["Lucha"],
    tipoGigantamax: ["Lutador"],
    tipoGigantamaxEua: ["Fighting"],
    tipoGigantamaxFra: ["Combat"],
    tipoGigantamaxChn: ["格斗"],
    tipoGigantamaxEsp: ["Lucha"],
    descricaoGigantamax:
      "A energia Gigantamax fluindo por seus braços faz com que seus golpes sejam tão fortes quanto explosões de bombas. Um desses Machamps certa vez usou sua força incomensurável para erguer um grande navio que estava com problemas. Em seguida, carregou o navio para o porto.",
    descricaoGigantamaxEua:
      "The Gigantamax energy flowing through its arms makes its punches as powerful as bomb explosions. One of these Machamps once used its immeasurable strength to lift a large ship that was having trouble. It then carried the ship to the port.",
    descricaoGigantamaxEsp:
      "La energía Gigantamax fluyendo a través de sus brazos hace que sus golpes sean tan fuertes como explosiones de bombas. Uno de estos Machamps una vez usó su fuerza inconmensurable para levantar un gran barco que tenía problemas. Luego, cargó el barco al puerto.",
    descricaoGigantamaxChn:
      "流动在它手臂中的Gigantamax能量使得它的拳头像炸弹爆炸一样强大。曾经有一只Machamp用它无与伦比的力量举起了一艘遇到问题的大船。然后，它把船运送到了港口。",
    descricaoGigantamaxFra:
      "L'énergie Gigantamax qui circule dans ses bras rend ses coups aussi puissants que des explosions de bombes. Un de ces Machamps a un jour utilisé sa force incommensurable pour soulever un grand navire en difficulté. Ensuite, il a transporté le navire jusqu'au port.",
    descricao:
      "Ele rapidamente balança seus quatro braços para balançar seus oponentes com socos e golpes incessantes de todos os ângulos.",
    descricaoEua:
      "It quickly swings its four arms to pummel its opponents with relentless punches and strikes from all angles.",
    descricaoFra:
      "Il balance rapidement ses quatre bras pour frapper ses adversaires avec des coups incessants de tous les angles.",
    descricaoChn: "它迅速挥动四条手臂，从各个角度不断猛击对手。",
    descricaoEsp:
      "Rápidamente mueve sus cuatro brazos para golpear a sus oponentes con puñetazos y golpes implacables desde todos los ángulos.",
  },
  {
    nro: 69,
    som: "./Sons/bellsprout.mp3",
    nome: "Bellsprout",
    genero: "",
    tamanho: 1,
    img: "./pokemons/bellsprout.gif",
    imgShiny: "./pokemons/bellsproutShiny.gif",
    tipo: ["Planta", "Venenoso"],
    tipoEua: ["Grass", "Poison"],
    tipoFra: ["Plante", "Venimeux"],
    tipoChn: ["植物", "毒"],
    tipoEsp: ["Planta", "Veneno"],
    descricao:
      "Prefere lugares quentes e úmidos. Ele captura pequenos insetos com suas videiras e os devora.",
    descricaoEua:
      "Prefers hot and humid places. It captures small insects with its vines and devours them.",
    descricaoFra:
      "Préfère les endroits chauds et humides. Il capture de petits insectes avec ses lianes et les dévore.",
    descricaoChn: "它喜欢温暖潮湿的地方。用藤蔓捕捉小昆虫并将其吞食。",
    descricaoEsp:
      "Prefiere lugares cálidos y húmedos. Captura pequeños insectos con sus lianas y se los devora.",
  },
  {
    nro: 70,
    som: "./Sons/weepinbell.mp3",
    nome: "Weepinbell",
    genero: "",
    tamanho: 2,
    img: "./pokemons/weepinbell.gif",
    imgShiny: "./pokemons/weepinbellShiny.gif",
    tipo: ["Planta", "Venenoso"],
    tipoEua: ["Grass", "Poison"],
    tipoFra: ["Plante", "Venimeux"],
    tipoChn: ["植物", "毒"],
    tipoEsp: ["Planta", "Veneno"],
    descricao:
      "Quando está com fome, engole qualquer coisa que se mova. Sua presa infeliz é dissolvida por ácidos fortes.",
    descricaoEua:
      "When hungry, it swallows anything that moves. Its unfortunate prey is dissolved by strong acids.",
    descricaoFra:
      "Quand il a faim, il avale tout ce qui bouge. Ses proies malheureuses sont dissoutes par des acides puissants.",
    descricaoChn: "饥饿时会吞下任何会动的东西。不幸的猎物会被强酸溶解。",
    descricaoEsp:
      "Cuando tiene hambre, se traga cualquier cosa que se mueva. Su desafortunada presa es disuelta por ácidos fuertes.",
  },
  { 
    nro: 71,
    som: "./Sons/victreebel.mp3",
    nome: "Victreebel",
    genero: "",
    tamanho: 4,
    img: "./pokemons/victreebel.gif",
    imgShiny: "./pokemons/victreebelShiny.gif",
    tipo: ["Planta", "Venenoso"],
    tipoEua: ["Grass", "Poison"],
    tipoFra: ["Plante", "Venimeux"],
    tipoChn: ["植物", "毒"],
    tipoEsp: ["Planta", "Veneno"],
    descricao:
      "Atrai a presa com o doce aroma do mel. Engolida inteira, a presa é dissolvida em um dia, com ossos e tudo.",
    descricaoEua:
      "It attracts prey with the sweet scent of honey. Once swallowed whole, the prey is dissolved in a day, bones and all.",
    descricaoFra:
      "Il attire ses proies avec le doux parfum du miel. Une fois avalée entière, la proie est dissoute en un jour, os et tout.",
    descricaoChn:
      "它通过甜美的蜂蜜香气吸引猎物。一旦被吞下，猎物会在一天内被溶解，连骨头一起。",
    descricaoEsp:
      "Atrae a sus presas con el dulce aroma de la miel. Una vez tragada entera, la presa se disuelve en un día, huesos y todo.",
  },
  {
    nro: 72,
    som: "./Sons/tentacool.mp3",
    nome: "Tentacool",
    genero: "",
    tamanho: 2,
    img: "./pokemons/tentacool.gif",
    imgShiny: "./pokemons/tentacoolShiny.gif",
    tipo: ["Água", "Venenoso"],
    tipoEua: ["Water", "Poison"],
    tipoFra: ["Eau", "Venimeux"],
    tipoChn: ["水", "毒"],
    tipoEsp: ["Agua", "Veneno"],
    descricao:
      "Tentacool não é um nadador particularmente forte. Ele flutua pela superfície de mares rasos enquanto procura por presas.",
    descricaoEua:
      "Tentacool isn't a particularly strong swimmer. It floats along the surface of shallow seas while searching for prey.",
    descricaoFra:
      "Tentacool n'est pas un nageur particulièrement fort. Il flotte à la surface des mers peu profondes en cherchant sa proie.",
    descricaoChn:
      "Tentacool 不是一个特别强壮的游泳者。它在浅海的水面上漂浮，寻找猎物。",
    descricaoEsp:
      "Tentacool no es un nadador particularmente fuerte. Flota por la superficie de mares poco profundos mientras busca presas.",
  },
  {
    nro: 73,
    som: "./Sons/tentacruel.mp3",
    nome: "Tentacruel",
    genero: "",
    tamanho: 4,
    img: "./pokemons/tentacruel.gif",
    imgShiny: "./pokemons/tentacruelShiny.gif",
    tipo: ["Água", "Venenoso"],
    tipoEua: ["Water", "Poison"],
    tipoFra: ["Eau", "Venimeux"],
    tipoChn: ["水", "毒"],
    tipoEsp: ["Agua", "Veneno"],
    descricao:
      "Quando as esferas vermelhas na cabeça de Tentacruel brilharem, cuidado. O Pokémon está prestes a disparar uma explosão de ondas ultrassônicas.",
    descricaoEua:
      "When the red spheres on Tentacruel's head glow, beware. The Pokémon is about to unleash an explosion of ultrasonic waves.",
    descricaoFra:
      "Lorsque les sphères rouges sur la tête de Tentacruel brillent, attention. Le Pokémon est sur le point de libérer une explosion d'ondes ultrasonores.",
    descricaoChn:
      "当 Tentacruel 头上的红色球体发光时，要小心。这个宝可梦即将释放出一波超声波爆炸。",
    descricaoEsp:
      "Cuando las esferas rojas en la cabeza de Tentacruel brillen, ten cuidado. El Pokémon está a punto de disparar una explosión de ondas ultrasónicas.",
  },
  {
    nro: 74,
    som: "./Sons/geodude.mp3",
    nome: "Geodude",
    genero: "",
    nomeAlola: "Geodude Alola",
    generoAlola: "",
    imgAlola: "./pokemons/geodude-alola.gif",
    imgAlolaShiny: "./pokemons/geodude-alolaShiny.gif",
    tamanho: 2,
    img: "./pokemons/geodude.gif",
    imgShiny: "./pokemons/geodudeShiny.gif",
    tipo: ["Rochoso", "Terrestre"],
    tipoEua: ["Rock", "Ground"],
    tipoFra: ["Roche", "Sol"],
    tipoChn: ["岩石", "地面"],
    tipoEsp: ["Roca", "Terrestre"],
    tipoAlola: ["Rochoso", "Elétrico"],
    tipoAlolaEua: ["Rock", "Electric"],
    tipoAlolaFra: ["Roche", "Électrique"],
    tipoAlolaChn: ["岩石", "电"],
    tipoAlolaEsp: ["Roca", "Eléctrico"],
    descricaoAlolaEua:
      "Its body is a magnetic stone. Iron sand attaches firmly to the portions of its body that are particularly magnetic.",
    descricaoAlolaPor:
      "Seu corpo é uma pedra magnética. Areia de ferro se prende firmemente às partes de seu corpo que são particularmente magnéticas.",
    descricaoAlolaEsp:
      "Su cuerpo es una piedra magnética. La arena de hierro se adhiere firmemente a las partes de su cuerpo que son especialmente magnéticas.",
    descricaoAlolaChn:
      "它的身体是一个磁石。铁砂紧密地附着在它身体中特别有磁性的部分。",
    descricaoAlolaFra:
      "Son corps est une pierre magnétique. Du sable de fer s'attache fermement aux parties de son corps qui sont particulièrement magnétiques.",
    descricao:
      "Comumente encontrado perto de trilhas de montanha e similares. Se você pisar em um por acidente, ele fica com raiva.",
    descricaoEua:
      "Commonly found near mountain trails and similar areas. If you step on one by accident, it gets angry.",
    descricaoFra:
      "Souvent trouvé près des sentiers de montagne et dans des zones similaires. Si vous marchez accidentellement sur l'un d'eux, il se fâche.",
    descricaoChn: "通常在山路等类似地方发现。如果你不小心踩到它，它会生气。",
    descricaoEsp:
      "Comúnmente se encuentra cerca de senderos de montaña y lugares similares. Si accidentalmente pisas uno, se enoja.",
  },
  {
    nro: 75,
    som: "./Sons/graveler.mp3",
    nome: "Graveler",
    genero: "",
    nomeAlola: "Graveler Alola",
    generoAlola: "",
    imgAlola: "./pokemons/graveler-alola.gif",
    imgAlolaShiny: "./pokemons/graveler-alolaShiny.gif",
    tamanho: 3,
    img: "./pokemons/graveler.gif",
    imgShiny: "./pokemons/gravelerShiny.gif",
    tipo: ["Rochoso", "Terrestre"],
    tipoEua: ["Rock", "Ground"],
    tipoFra: ["Roche", "Sol"],
    tipoChn: ["岩石", "地面"],
    tipoEsp: ["Roca", "Terrestre"],
    tipoAlola: ["Rochoso", "Elétrico"],
    tipoAlolaEua: ["Rock", "Electric"],
    tipoAlolaFra: ["Roche", "Électrique"],
    tipoAlolaChn: ["岩石", "电"],
    tipoAlolaEsp: ["Roca", "Eléctrico"],
    descricaoAlolaEua:
      "They eat rocks and often get into a scrap over them. The impact of Graveler smashing together causes a flash of light and a booming noise.",
    descricaoAlola:
      "Eles comem pedras e frequentemente brigam por elas. O impacto dos Graveler se chocando causa um clarão de luz e um estrondo.",
    descricaoAlolaEsp:
      "Comen rocas y a menudo pelean por ellas. El impacto de los Graveler chocando entre sí provoca un destello de luz y un estruendo.",
    descricaoAlolaChn:
      "它们吃岩石，并经常为此争斗。Graveler 相互碰撞时会产生闪光和巨响。",
    descricaoAlolaFra:
      "Ils mangent des roches et se disputent souvent pour elles. L'impact des Graveler s'entrechoquant provoque un éclair de lumière et un bruit retentissant.",
    descricao:
      "Muitas vezes visto rolando por trilhas de montanha. Obstáculos são apenas coisas para passar direto, não para evitar.",
    descricaoEua:
      "Often seen rolling along mountain trails. Obstacles are just things to roll right through, not to avoid.",
    descricaoFra:
      "Souvent vu en train de rouler sur les sentiers de montagne. Les obstacles sont juste des choses à traverser, pas à éviter.",
    descricaoChn:
      "经常看到它在山路上滚动。障碍物只是用来直接通过的东西，而不是避开的。",
    descricaoEsp:
      "A menudo se ve rodando por los senderos de montaña. Los obstáculos son solo cosas por las que pasar, no para evitar.",
  },
  {
    nro: 76,
    som: "./Sons/golem.mp3",
    nome: "Golem",
    genero: "",
    nomeAlola: "Golem Alola",
    generoAlola: "",
    imgAlola: "./pokemons/golem-alola.gif",
    imgAlolaShiny: "./pokemons/golem-alolaShiny.gif",
    tamanho: 4,
    tamanhoAlola: 4,
    img: "./pokemons/golem.gif",
    imgShiny: "./pokemons/golemShiny.gif",
    tipo: ["Rochoso", "Terrestre"],
    tipoEua: ["Rock", "Ground"],
    tipoFra: ["Roche", "Sol"],
    tipoChn: ["岩石", "地面"],
    tipoEsp: ["Roca", "Terrestre"],
    tipoAlola: ["Rochoso", "Elétrico"],
    tipoAlolaEua: ["Rock", "Electric"],
    tipoAlolaFra: ["Roche", "Électrique"],
    tipoAlolaChn: ["岩石", "电"],
    tipoAlolaEsp: ["Roca", "Eléctrico"],
    descricaoAlolaEua:
      "It’s grumpy and stubborn. If you upset it, it discharges electricity from the surface of its body and growls with a voice like thunder.",
    descricaoAlola:
      "É mal-humorado e teimoso. Se você o irritar, ele descarrega eletricidade da superfície do seu corpo e rosna com uma voz parecida com um trovão.",
    descricaoAlolaEsp:
      "Es gruñón y terco. Si lo molestas, descarga electricidad desde la superficie de su cuerpo y gruñe con una voz similar a un trueno.",
    descricaoAlolaChn:
      "它脾气暴躁又固执。如果你惹怒它，它会从身体表面释放电流，并发出雷鸣般的咆哮。",
    descricaoAlolaFra:
      "Il est grincheux et têtu. Si vous l'énervez, il décharge de l'électricité depuis la surface de son corps et grogne d'une voix semblable à un coup de tonnerre.",
    descricao:
      "Uma vez que ele muda de pele, seu corpo fica macio e esbranquiçado. Sua pele endurece quando exposta ao ar.",
    descricaoEua:
      "Once it sheds its skin, its body becomes soft and whitish. Its skin hardens when exposed to air.",
    descricaoFra:
      "Une fois qu'il mue, son corps devient mou et blanchâtre. Sa peau durcit lorsqu'elle est exposée à l'air.",
    descricaoChn:
      "一旦它脱皮，身体变得柔软且发白。皮肤在暴露于空气中时会变硬。",
    descricaoEsp:
      "Una vez que muda de piel, su cuerpo se vuelve blando y blanquecino. Su piel se endurece cuando se expone al aire.",
  },
  {
    nro: 77,
    som: "./Sons/ponyta.mp3",
    nome: "Ponyta",
    genero: "",
    nomeGalar: "Ponyta Galar",
    generoGalar: "",
    tamanho: 3,
    tamanhoGalar: 3,
    img: "./pokemons/ponyta.gif",
    imgShiny: "./pokemons/ponytaShiny.gif",
    imgGalar: "./pokemons/ponyta-galar.gif",
    imgGalarShiny: "./pokemons/ponyta-galarShiny.gif",
    tipo: ["Fogo"],
    tipoEua: ["Fire"],
    tipoFra: ["Feu"],
    tipoChn: ["火"],
    tipoEsp: ["Fuego"],
    tipoGalar: ["Psíquico"],
    tipoGalarEua: ["Psychic"],
    tipoGalarFra: ["Psy"],
    tipoGalarChn: ["超能力"],
    tipoGalarEsp: ["Psíquico"],
    descricaoGalarEua:
      "Its small horn hides a healing power. With a few rubs from this Pokémon’s horn, any slight wound you have will be healed.",
    descricaoGalar:
      "Seu pequeno chifre esconde um poder de cura. Com algumas esfregadas do chifre deste Pokémon, qualquer ferimento leve será curado.",
    descricaoGalarEsp:
      "Su pequeño cuerno oculta un poder curativo. Con unas pocas friegas de su cuerno, cualquier herida leve que tengas sanará.",
    descricaoGalarChn:
      "它的小角隐藏着治愈的力量。只需用它的角轻轻摩擦几下，任何小伤口都会愈合。",
    descricaoGalarFra:
      "Sa petite corne cache un pouvoir de guérison. Quelques frottements de cette corne suffisent à guérir une légère blessure.",
    descricao:
      "Ele não pode funcionar corretamente quando é recém-nascido. À medida que corre com outros de sua espécie, suas pernas ficam mais fortes.",
    descricaoEua:
      "It cannot function properly when it is newborn. As it runs with others of its species, its legs become stronger.",
    descricaoFra:
      "Il ne peut pas fonctionner correctement lorsqu'il est nouveau-né. Au fur et à mesure qu'il court avec d'autres de sa espèce, ses jambes deviennent plus fortes.",
    descricaoChn:
      "它在新生时无法正常运作。当它与同种的其他马一起奔跑时，它的腿会变得更强壮。",
    descricaoEsp:
      "No puede funcionar correctamente cuando es recién nacido. A medida que corre con otros de su especie, sus piernas se hacen más fuertes.",
  },
  {
    nro: 78,
    som: "./Sons/rapidash.mp3",
    nome: "Rapidash",
    genero: "",
    nomeGalar: "Rapidash Galar",
    generoGalar: "",
    tamanho: 5,
    tamanhoGalar: 5,
    img: "./pokemons/rapidash.gif",
    imgShiny: "./pokemons/rapidashShiny.gif",
    imgGalar: "./pokemons/rapidash-galar.gif",
    imgGalarShiny: "./pokemons/rapidash-galarShiny.gif",
    tipo: ["Fogo"],
    tipoEua: ["Fire"],
    tipoFra: ["Feu"],
    tipoChn: ["火"],
    tipoEsp: ["Fuego"],
    tipoGalar: ["Psíquico", "Fada"],
    tipoGalarEua: ["Psychic", "Fairy"],
    tipoGalarFra: ["Psy", "Fée"],
    tipoGalarChn: ["超能力", "妖精"],
    tipoGalarEsp: ["Psíquico", "Hada"],
    descricaoGalarEua:
      "Little can stand up to its psycho cut. Unleashed from this Pokémon’s horn, the move will punch a hole right through a thick metal sheet.",
    descricaoGalar:
      "Poucas coisas conseguem resistir ao seu Corte Psíquico. Quando liberado do chifre deste Pokémon, o golpe perfura até mesmo uma chapa grossa de metal.",
    descricaoGalarEsp:
      "Pocas cosas pueden resistir su Corte Psíquico. Liberado desde el cuerno de este Pokémon, el movimiento perforará una gruesa lámina de metal.",
    descricaoGalarChn:
      "很少有东西能抵挡它的精神利刃。从这只宝可梦的角发出的招式能够直接穿透厚厚的金属板。",
    descricaoGalarFra:
      "Peu de choses peuvent résister à sa Tranche Psychique. Lancée depuis la corne de ce Pokémon, cette attaque peut transpercer une épaisse plaque de métal.",
    descricao:
      "Este Pokémon pode ser visto galopando pelos campos a velocidades de até 150 mph, sua juba de fogo tremulando ao vento.",
    descricaoEua:
      "This Pokémon can be seen galloping across fields at speeds of up to 150 mph, its fiery mane streaming in the wind.",
    descricaoFra:
      "Ce Pokémon peut être vu galopant à travers les champs à des vitesses allant jusqu'à 150 mph, sa crinière enflammée flottant dans le vent.",
    descricaoChn:
      "这个宝可梦可以以每小时150英里的速度在田野上奔跑，火焰的鬃毛在风中飘动。",
    descricaoEsp:
      "Este Pokémon puede verse galopando por los campos a velocidades de hasta 150 mph, su melena de fuego ondeando al viento.",
  },
  {
    nro: 79,
    som: "./Sons/slowpoke.mp3",
    nome: "Slowpoke",
    genero: "",
    nomeGalar: "Slowpoke Galar",
    generoGalar: "",
    tamanho: 3,
    tamanhoGalar: 1,
    img: "./pokemons/slowpoke.gif",
    imgShiny: "./pokemons/slowpokeShiny.gif",
    imgGalar: "./pokemons/slowpoke-galar.gif",
    imgGalarShiny: "./pokemons/slowpoke-galarShiny.gif",
    tipo: ["Água", "Psíquico"],
    tipoEua: ["Water", "Psychic"],
    tipoFra: ["Eau", "Psy"],
    tipoChn: ["水", "超能力"],
    tipoEsp: ["Agua", "Psíquico"],
    tipoGalar: ["Psíquico"],
    tipoGalarEua: ["Psychic"],
    tipoGalarFra: ["Psy"],
    tipoGalarChn: ["超能力"],
    tipoGalarEsp: ["Psíquico"],
    descricaoGalarEua:
      "It gives off a stimulating scent because of chemicals that have seeped into its body from the spice that it eats as its staple food.",
    descricaoGalarPor:
      "Ele exala um aroma estimulante devido aos produtos químicos que se infiltraram em seu corpo a partir das especiarias que come como alimento básico.",
    descricaoGalarEsp:
      "Emite un aroma estimulante debido a los químicos que se han filtrado en su cuerpo a partir de las especias que consume como alimento básico.",
    descricaoGalarChn: "由于主食中的香料渗入其体内，它散发出一种刺激性的香气。",
    descricaoGalarFra:
      "Il dégage une odeur stimulante à cause des substances chimiques qui ont imprégné son corps à partir des épices qu’il consomme comme aliment de base.",
    descricao:
      "De raciocínio lento e alheio, este Pokémon não sentirá nenhuma dor se sua cauda for comida. Ele também não notará quando sua cauda crescer novamente.",
    descricaoEua:
      "With slow and absent-minded reasoning, this Pokémon won’t feel pain if its tail is eaten. It also won’t notice when its tail grows back.",
    descricaoFra:
      "Avec un raisonnement lent et indifférent, ce Pokémon ne ressentira aucune douleur si sa queue est mangée. Il ne remarquera pas non plus quand sa queue repoussera.",
    descricaoChn:
      "这个宝可梦思维缓慢而且心不在焉，如果它的尾巴被吃掉，它也不会感觉到疼痛。它也不会注意到尾巴何时再生。",
    descricaoEsp:
      "Con un razonamiento lento y ausente, este Pokémon no sentirá dolor si su cola es comida. Tampoco notará cuando su cola crezca de nuevo.",
  },
  {
    nro: 80,
    som: "./Sons/slowbro.mp3",
    nome: "Slowbro",
    genero: "",
    nomeGalar: "Slowbro Galar",
    generoGalar: "",
    tamanho: 4,
    tamanhoMega: 5,
    tamanhoGalar: 4,
    img: "./pokemons/slowbro.gif",
    imgShiny: "./pokemons/slowbroShiny.gif",
    imgGalar: "./pokemons/slowbro-galar.gif",
    imgGalarShiny: "./pokemons/slowbro-galarShiny.gif",
    nomeMega: "Slowbro Mega",
    imgMega: "./pokemons/slowbro-mega.gif",
    imgMegaShiny: "./pokemons/slowbro-megaShiny.gif",
    tipo: ["Água", "Psíquico"],
    tipoEua: ["Water", "Psychic"],
    tipoFra: ["Eau", "Psy"],
    tipoChn: ["水", "超能力"],
    tipoEsp: ["Agua", "Psíquico"],
    tipoMega: ["Água", "Psíquico"],
    tipoMegaEua: ["Water", "Psychic"],
    tipoMegaFra: ["Eau", "Psy"],
    tipoMegaChn: ["水", "超能力"],
    tipoMegaEsp: ["Agua", "Psíquico"],
    tipoGalar: ["Veneno", "Psíquico"],
    tipoGalarEua: ["Poison", "Psychic"],
    tipoGalarFra: ["Venimeux", "Psy"],
    tipoGalarChn: ["毒", "超能力"],
    tipoGalarEsp: ["Veneno", "Psíquico"],
    descricaoGalarEua:
      "Shellder seems blissful over the taste of Slowbro even though the toxins seeping from the bite have caused Shellder to faint.",
    descricaoGalar:
      "Shellder parece estar em êxtase com o sabor de Slowbro, mesmo que as toxinas que vazam da mordida tenham feito Shellder desmaiar.",
    descricaoEsp:
      "Shellder parece estar extasiado por el sabor de Slowbro, aunque las toxinas que se filtran de la mordida hayan hecho que Shellder se desmaye.",
    descricaoFra:
      "Kokiyas semble ravi par le goût de Flagadoss, même si les toxines s'infiltrant de la morsure l'ont fait s'évanouir.",
    descricaoChn:
      "大舌贝似乎陶醉于呆壳兽的味道，尽管从咬痕渗出的毒素已经让它昏厥。",
    descricaoMegaEua:
      "All the energy from Mega Evolution poured into the Shellder on its tail, leaving Slowpoke to be swallowed whole.",
    descricaoMega:
      "Toda a energia da Mega Evolução foi transferida para o Shellder em sua cauda, deixando Slowpoke ser engolido por inteiro.",
    descricaoEsp:
      "Toda la energía de la Megaevolución se vertió en el Shellder de su cola, dejando que Slowpoke fuera tragado por completo.",
    descricaoFra:
      "Toute l'énergie de la Méga-Évolution a été absorbée par le Kokiyas sur sa queue, laissant Ramoloss se faire avaler entièrement.",
    descricaoChn:
      "所有的超级进化能量都涌入了它尾巴上的大舌贝，使呆呆兽被整个吞噬。",
    descricao:
      "Slowpoke se tornou Slowbro quando um Shellder mordeu sua cauda. Sabores doces que escorrem da cauda fazem com que o Shellder se sinta como se sua vida fosse um sonho.",
    descricaoEua:
      "Slowpoke became Slowbro when a Shellder bit its tail. The sweet flavors dripping from the tail make the Shellder feel like its life is a dream.",
    descricaoFra:
      "Slowpoke est devenu Slowbro lorsqu'un Shellder a mordu sa queue. Les saveurs sucrées qui s'écoulent de la queue font en sorte que Shellder se sente comme si sa vie était un rêve.",
    descricaoChn:
      "Slowpoke变成Slowbro是因为一个Shellder咬了它的尾巴。尾巴上滴下的甜美味道让Shellder感觉自己的生活就像是梦一样。",
    descricaoEsp:
      "Slowpoke se convirtió en Slowbro cuando un Shellder mordió su cola. Los sabores dulces que gotean de la cola hacen que el Shellder se sienta como si su vida fuera un sueño.",
  },
  {
    nro: 81,
    som: "./Sons/magnemite.mp3",
    nome: "Magnemite",
    genero: "",
    tamanho: 2,
    img: "./pokemons/magnemite.gif",
    imgShiny: "./pokemons/magnemiteShiny.gif",
    tipo: ["Elétrico", "Metal"],
    tipoEua: ["Electric", "Steel"],
    tipoFra: ["Électrique", "Acier"],
    tipoChn: ["电", "钢"],
    tipoEsp: ["Eléctrico", "Acero"],
    descricao:
      "Às vezes, o Magnemite fica sem eletricidade e acaba no chão. Se você der baterias a um Magnemite aterrado, ele começará a se mover novamente.",
    descricaoEua:
      "Sometimes, Magnemite runs out of electricity and ends up on the ground. If you give a grounded Magnemite some batteries, it will start moving again.",
    descricaoFra:
      "Parfois, Magnemite manque d'électricité et finit par tomber au sol. Si vous donnez des piles à un Magnemite au sol, il recommencera à bouger.",
    descricaoChn:
      "有时，Magnetite 会没有电力而掉到地上。如果你给一个掉落的 Magnetite 电池，它就会重新开始移动。",
    descricaoEsp:
      "A veces, Magnemite se queda sin electricidad y termina en el suelo. Si le das baterías a un Magnemite caído, comenzará a moverse nuevamente.",
  },
  {
    nro: 82,
    som: "./Sons/magneton.mp3",
    nome: "Magneton",
    genero: "",
    tamanho: 3,
    img: "./pokemons/magneton.gif",
    imgShiny: "./pokemons/magnetonShiny.gif",
    tipo: ["Elétrico", "Metal"],
    tipoEua: ["Electric", "Steel"],
    tipoFra: ["Électrique", "Acier"],
    tipoChn: ["电", "钢"],
    tipoEsp: ["Eléctrico", "Acero"],
    descricao:
      "Este Pokémon são três Magnemite que se ligaram. Magneton envia poderosas ondas de rádio para estudar seus arredores.",
    descricaoEua:
      "This Pokémon is made up of three Magnemite that joined together. Magneton sends out powerful radio waves to study its surroundings.",
    descricaoFra:
      "Ce Pokémon est composé de trois Magnemite qui se sont réunis. Magneton émet de puissantes ondes radio pour étudier ses environs.",
    descricaoChn:
      "这个宝可梦由三个 Magnemite 组合而成。Magneton 发出强大的无线电波来研究周围环境。",
    descricaoEsp:
      "Este Pokémon está formado por tres Magnemite que se unieron. Magneton emite poderosas ondas de radio para estudiar su entorno.",
  },
  {
    nro: 83,
    som: "./Sons/farfetchd.mp3",
    nome: "Farfetch’d",
    genero: "",
    nomeGalar: "Farfetch’d Galar",
    generoGalar: "",
    tamanho: 2,
    tamanhoGalar: 2,
    img: "./pokemons/farfetchd.gif",
    imgShiny: "./pokemons/farfetchdShiny.gif",
    imgGalar: "./pokemons/farfetchd-galar.gif",
    imgGalarShiny: "./pokemons/farfetchd-galarShiny.gif",
    tipo: ["Normal", "Voador"],
    tipoEua: ["Normal", "Flying"],
    tipoFra: ["Normal", "Volant"],
    tipoChn: ["普通", "飞行"],
    tipoEsp: ["Normal", "Volador"],
    tipoGalar: ["Lutador"],
    tipoGalarEua: ["Fighting"],
    tipoGalarFra: ["Combat"],
    tipoGalarChn: ["格斗"],
    tipoGalarEsp: ["Lucha"],
    descricaoGalar:  
  "Os Farfetch’d da região de Galar são guerreiros corajosos e empunham alhos-porós grossos e resistentes em batalha.",  
descricaoGalarEua:  
  "The Farfetch’d of the Galar region are brave warriors, and they wield thick, tough leeks in battle.",  
descricaoGalarFra:  
  "Les Canarticho de la région de Galar sont de courageux guerriers et manient des poireaux épais et robustes au combat.",  
descricaoGalarChn:  
  "伽勒尔地区的大葱鸭是勇敢的战士，他们在战斗中挥舞着厚实而坚韧的大葱。",  
descricaoGalarEsp:  
  "Los Farfetch’d de la región de Galar son valientes guerreros y blanden puerros gruesos y resistentes en la batalla."  ,
 descricao:
      "O talo que este Pokémon carrega em suas asas serve como uma espada para derrubar os oponentes. Em uma situação terrível, o talo também pode servir como alimento.",
    descricaoEua:
      "The stalk that this Pokémon carries in its wings serves as a sword to strike down opponents. In a dire situation, the stalk can also serve as food.",
    descricaoFra:
      "La tige que ce Pokémon porte dans ses ailes sert d'épée pour abattre ses adversaires. En cas de situation désastreuse, la tige peut aussi servir de nourriture.",
    descricaoChn:
      "这个宝可梦带着的茎在它的翅膀中像剑一样用来击倒对手。在极端的情况下，茎也可以作为食物。",
    descricaoEsp:
      "El tallo que este Pokémon lleva en sus alas sirve como una espada para derribar a los oponentes. En una situación terrible, el tallo también puede servir como alimento.",
  },
  {
    nro: 84,
    som: "./Sons/doduo.mp3",
    nome: "Doduo",
    genero: "",
    tamanho: 3,
    img: "./pokemons/doduo.gif",
    imgShiny: "./pokemons/doduoShiny.gif",
    tipo: ["Normal", "Voador"],
    tipoEua: ["Normal", "Flying"],
    tipoFra: ["Normal", "Volant"],
    tipoChn: ["普通", "飞行"],
    tipoEsp: ["Normal", "Volador"],
    descricao:
      "Suas asas curtas dificultam o vôo. Em vez disso, este Pokémon corre em alta velocidade nas pernas desenvolvidas.",
    descricaoEua:
      "Its short wings make flight difficult. Instead, this Pokémon runs at high speed on its developed legs.",
    descricaoFra:
      "Ses ailes courtes rendent le vol difficile. Au lieu de cela, ce Pokémon court à grande vitesse sur ses jambes développées.",
    descricaoChn:
      "它的短翅膀使飞行变得困难。相反，这个宝可梦在发达的双腿上以高速奔跑。",
    descricaoEsp:
      "Sus alas cortas dificultan el vuelo. En su lugar, este Pokémon corre a alta velocidad sobre sus patas desarrolladas.",
  },
  {
    nro: 85,
    som: "./Sons/dodrio.mp3",
    nome: "Dodrio",
    genero: "",
    tamanho: 5,
    img: "./pokemons/dodrio.gif",
    imgShiny: "./pokemons/dodrioShiny.gif",
    tipo: ["Normal", "Voador"],
    tipoEua: ["Normal", "Flying"],
    tipoFra: ["Normal", "Volant"],
    tipoChn: ["普通", "飞行"],
    tipoEsp: ["Normal", "Volador"],
    descricao:
      "Uma das duas cabeças de Doduo se divide para formar uma espécie única. Ele corre perto de 40 mph em pradarias.",
    descricaoEua:
      "One of Doduo's two heads splits to form a unique species. It runs at nearly 40 mph across prairies.",
    descricaoFra:
      "Une des deux têtes de Doduo se divise pour former une espèce unique. Il court à près de 40 mph à travers les prairies.",
    descricaoChn:
      "Doduo的两个头中的一个分裂，形成了一个独特的物种。它在植物原上以近40英里/小时的速度奔跑。",
    descricaoEsp:
      "Una de las dos cabezas de Doduo se divide para formar una especie única. Corre a casi 40 mph por las praderas.",
  },
  {
    nro: 86,
    som: "./Sons/seel.mp3",
    nome: "Seel",
    genero: "",
    tamanho: 2,
    img: "./pokemons/seel.gif",
    imgShiny: "./pokemons/seelShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Adora condições de frio congelante. Aprecia nadar em um clima frio de cerca de 14 graus Fahrenheit.",
    descricaoEua:
      "Loves freezing cold conditions. It enjoys swimming in cold temperatures of about 14 degrees Fahrenheit.",
    descricaoFra:
      "Il adore les conditions de froid glacial. Il aime nager dans des températures froides d'environ 14 degrés Fahrenheit.",
    descricaoChn: "喜欢极冷的环境。它喜欢在大约14华氏度的冷水中游泳。",
    descricaoEsp:
      "Le encanta el frío congelante. Disfruta nadar en temperaturas frías de alrededor de 14 grados Fahrenheit.",
  },
  {
    nro: 87,
    som: "./Sons/dewgong.mp3",
    nome: "Dewgong",
    genero: "",
    tamanho: 4,
    img: "./pokemons/dewgong.gif",
    imgShiny: "./pokemons/dewgongShiny.gif",
    tipo: ["Água", "Gelo"],
    tipoEua: ["Water", "Ice"],
    tipoFra: ["Eau", "Glace"],
    tipoChn: ["水", "冰"],
    tipoEsp: ["Agua", "Hielo"],
    descricao:
      "Todo o seu corpo é branco como a neve. Incólume mesmo pelo frio intenso, nada poderosamente em águas geladas.",
    descricaoEua:
      "Its entire body is as white as snow. Unscathed even by intense cold, it swims powerfully in icy waters.",
    descricaoFra:
      "Tout son corps est blanc comme la neige. Indemne même par un froid intense, il nage puissamment dans les eaux glacées.",
    descricaoChn:
      "它的整个身体像雪一样白。即使在极度寒冷中也不受伤，它在冰冷的水中有力地游泳。",
    descricaoEsp:
      "Todo su cuerpo es blanco como la nieve. Indemne incluso por el frío intenso, nada poderosamente en aguas heladas.",
  },
  {
    nro: 88,
    som: "./Sons/grimer.mp3",
    nome: "Grimer",
    genero: "",
    nomeAlola: "Grimer Alola",
    generoAlola: "",
    imgAlola: "./pokemons/grimer-alola.gif",
    imgAlolaShiny: "./pokemons/grimer-alolaShiny.gif",
    tamanho: 2,
    tamanhoAlola: 2,
    img: "./pokemons/grimer.gif",
    imgShiny: "./pokemons/grimerShiny.gif",
    tipo: ["Veneno"],
    tipoEua: ["Poison"],
    tipoFra: ["Venimeux"],
    tipoChn: ["毒"],
    tipoEsp: ["Veneno"],
    tipoAlola: ["Veneno", "Escuro"],
    tipoAlolaEua: ["Poison", "Dark"],
    tipoAlolaFra: ["Venimeux", "Sombre"],
    tipoAlolaChn: ["毒", "黑暗"],
    tipoAlolaEsp: ["Veneno", "Oscuro"],
    descricaoAlolaEua:
      "They store their toxins inside their bodies, so unlike Grimer from other regions, they don’t smell bad even up close.",
    descricaoAlola:
      "Eles armazenam suas toxinas dentro de seus corpos, então, ao contrário dos Grimer de outras regiões, eles não têm um cheiro ruim, mesmo de perto.",
    descricaoAlolaEsp:
      "Almacenan sus toxinas dentro de sus cuerpos, por lo que, a diferencia de los Grimer de otras regiones, no huelen mal ni siquiera de cerca.",
    descricaoAlolaChn:
      "它们将毒素储存在体内，因此与其他地区的Grimer不同，即使靠近也不会有难闻的气味。",
    descricaoAlolaFra:
      "Ils stockent leurs toxines à l'intérieur de leur corps, donc, contrairement aux Grimer des autres régions, ils ne dégagent pas de mauvaise odeur, même de près.",
    descricao:
      "Feito de lodo congelado. Cheira muito pútrido ao toque. Mesmo as ervas daninhas não crescerão em seu caminho.",
    descricaoEua:
      "Made of frozen sludge. It smells extremely foul to the touch. Even weeds won't grow on its path.",
    descricaoFra:
      "Fait de boue congelée. Il sent extrêmement mauvais au toucher. Même les mauvaises herbes ne pousseront pas sur son chemin.",
    descricaoChn:
      "由冻结的淤泥组成。接触时闻起来非常臭。即使是杂植物也不会在它的路径上生长。",
    descricaoEsp:
      "Hecho de lodo congelado. Huele extremadamente mal al tocarlo. Incluso las malas hierbas no crecerán en su camino.",
  },
  {
    nro: 89,
    som: "./Sons/muk.mp3",
    nome: "Muk",
    genero: "",
    nomeAlola: "Muk Alola",
    generoAlola: "",
    imgAlola: "./pokemons/muk-alola.gif",
    imgAlolaShiny: "./pokemons/muk-alolaShiny.gif",
    tamanho: 4,
    tamanhoAlola: 4,
    img: "./pokemons/muk.gif",
    imgShiny: "./pokemons/mukShiny.gif",
    tipo: ["Veneno"],
    tipoEua: ["Poison"],
    tipoFra: ["Venimeux"],
    tipoChn: ["毒"],
    tipoEsp: ["Veneno"],
    tipoAlola: ["Veneno", "Escuro"],
    tipoAlolaEua: ["Poison", "Dark"],
    tipoAlolaFra: ["Venimeux", "Sombre"],
    tipoAlolaChn: ["毒", "黑暗"],
    tipoAlolaEsp: ["Veneno", "Oscuro"],
    descricaoAlolaEua:
      "There are over a hundred kinds of poison inside its body. Chemical reactions between different poisons are the source of its vitality.",
    descricaoAlolaPor:
      "Existem mais de cem tipos de veneno dentro do seu corpo. As reações químicas entre os diferentes venenos são a fonte de sua vitalidade.",
    descricaoAlolaEsp:
      "Hay más de cien tipos de veneno dentro de su cuerpo. Las reacciones químicas entre los diferentes venenos son la fuente de su vitalidad.",
    descricaoAlolaChn:
      "它体内有一百多种毒素。不同毒素之间的化学反应是其活力的来源。",
    descricaoAlolaFra:
      "Il y a plus d'une centaine de types de poison dans son corps. Les réactions chimiques entre ces poisons sont la source de sa vitalité.",
    descricao:
      "O cheiro é tão horrível que pode causar desmaios. Através da degeneração do nariz, perdeu o olfato.",
    descricaoEua:
      "The smell is so horrible it can cause fainting. Through nose degeneration, it has lost its sense of smell.",
    descricaoFra:
      "L'odeur est si horrible qu'elle peut provoquer des évanouissements. Par la dégénérescence du nez, il a perdu son sens de l'odorat.",
    descricaoChn: "气味难闻到可以导致昏厥。由于鼻子的退化，它失去了嗅觉。",
    descricaoEsp:
      "El olor es tan horrible que puede causar desmayos. A través de la degeneración de la nariz, perdió su sentido del olfato.",
  },
  {
    nro: 90,
    som: "./Sons/shellder.mp3",
    nome: "Shellder",
    genero: "",
    tamanho: 1,
    img: "./pokemons/shellder.gif",
    imgShiny: "./pokemons/shellderShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Ele nada voltado para trás abrindo e fechando sua concha de duas peças. É surpreendentemente rápido.",
    descricaoEua:
      "It swims backward, opening and closing its two-part shell. It is surprisingly fast.",
    descricaoFra:
      "Il nage en arrière, ouvrant et fermant sa coquille à deux parties. Il est étonnamment rapide.",
    descricaoChn: "它倒着游泳，开关着它的双片贝壳。它非常快速。",
    descricaoEsp:
      "Nada hacia atrás, abriendo y cerrando su concha de dos piezas. Es sorprendentemente rápido.",
  },
  {
    nro: 91,
    som: "./Sons/cloyster.mp3",
    nome: "Cloyster",
    genero: "",
    tamanho: 5,
    img: "./pokemons/cloyster.gif",
    imgShiny: "./pokemons/cloysterShiny.gif",
    tipo: ["Água", "Gelo"],
    tipoEua: ["Water", "Ice"],
    tipoFra: ["Eau", "Glace"],
    tipoChn: ["水", "黑暗"],
    tipoEsp: ["Agua", "Hielo"],
    descricao:
      "Sua casca é extremamente dura. Não pode ser quebrado, mesmo com uma bomba. A concha abre apenas quando está atacando.",
    descricaoEua:
      "Its shell is extremely hard. It can't be broken, even by a bomb. The shell opens only when it is attacking.",
    descricaoFra:
      "Sa coquille est extrêmement dure. Elle ne peut pas être brisée, même par une bombe. La coquille ne s'ouvre que lorsqu'il attaque.",
    descricaoChn:
      "它的外壳极其坚硬，甚至炸弹也无法破坏。外壳只有在攻击时才会打开。",
    descricaoEsp:
      "Su concha es extremadamente dura. No puede ser rota, ni siquiera por una bomba. La concha solo se abre cuando está atacando.",
  },
  {
    nro: 92,
    som: "./Sons/gastly.mp3",
    nome: "Gastly",
    genero: "",
    tamanho: 3,
    img: "./pokemons/gastly.gif",
    imgShiny: "./pokemons/gastlyShiny.gif",
    tipo: ["Fantasma", "Veneno"],
    tipoEua: ["Ghost", "Poison"],
    tipoFra: ["Fantôme", "Venimeux"],
    tipoChn: ["幽灵", "毒"],
    tipoEsp: ["Fantasma", "Veneno"],
    descricao:
      "Nascido de gases, qualquer um desmaiaria se engolido por seu corpo gasoso, que contém veneno.",
    descricaoEua:
      "Born of gases, anyone would faint if swallowed by its gaseous body, which contains poison.",
    descricaoFra:
      "Né de gaz, toute personne s'évanouirait si elle était avalée par son corps gazeux, qui contient du poison.",
    descricaoChn:
      "由气体组成，任何人如果吞下它的气体身体都会昏迷，它包含毒素。",
    descricaoEsp:
      "Nacido de gases, cualquiera se desmayaría si es tragado por su cuerpo gaseoso, que contiene veneno.",
  },
  {
    nro: 93,
    som: "./Sons/haunter.mp3",
    nome: "Haunter",
    genero: "",
    tamanho: 3,
    img: "./pokemons/haunter.gif",
    imgShiny: "./pokemons/haunterShiny.gif",
    tipo: ["Fantasma", "Venenoso"],
    tipoEua: ["Ghost", "Poison"],
    tipoFra: ["Fantôme", "Venimeux"],
    tipoChn: ["幽灵", "毒"],
    tipoEsp: ["Fantasma", "Venenoso"],
    descricao:
      "Sua língua é feita de gás. Se lambido, sua vítima começa a tremer constantemente até que a morte finalmente chegue.",
    descricaoEua:
      "Its tongue is made of gas. If licked, its victim starts to shake constantly until death finally arrives.",
    descricaoFra:
      "Sa langue est faite de gaz. Si léchée, sa victime commence à trembler constamment jusqu'à ce que la mort arrive enfin.",
    descricaoChn:
      "它的舌头是由气体组成的。如果被舔，它的受害者开始不断地颤抖，直到死亡最终到来。",
    descricaoEsp:
      "Su lengua está hecha de gas. Si es lamido, su víctima comienza a temblar constantemente hasta que finalmente llega la muerte.",
  },
  {
    nro: 94,
    som: "./Sons/gengar.mp3",
    nome: "Gengar",
    genero: "",
    tamanho: 5,
    tamanhoMega: 5,
    tamanhoGigantamax: 6,
    img: "./pokemons/gengar.gif",
    imgShiny: "./pokemons/gengarShiny.gif",
    nomeGigantamax: "Gengar Gigantamax",
    imgGigantamax: "./pokemons/gengar-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/gengar-gigantamaxShiny.gif",
    nomeMega: "Gengar Mega",
    imgMega: "./pokemons/gengar-mega.gif",
    imgMegaShiny: "./pokemons/gengar-megaShiny.gif",
    tipo: ["Fantasma", "Venenoso"],
    tipoEua: ["Ghost", "Poison"],
    tipoFra: ["Fantôme", "Venimeux"],
    tipoChn: ["幽灵", "毒"],
    tipoEsp: ["Fantasma", "Venenoso"],
    tipoMega: ["Fantasma", "Venenoso"],
    tipoMegaEua: ["Ghost", "Poison"],
    tipoMegaFra: ["Fantôme", "Venimeux"],
    tipoMegaChn: ["幽灵", "毒"],
    tipoMegaEsp: ["Fantasma", "Venenoso"],
    tipoGigantamax: ["Fantasma", "Venenoso"],
    tipoGigantamaxEua: ["Ghost", "Poison"],
    tipoGigantamaxFra: ["Fantôme", "Venimeux"],
    tipoGigantamaxChn: ["幽灵", "毒"],
    tipoGigantamaxEsp: ["Fantasma", "Venenoso"],
    descricaoMegaEua:
      "It can pass through other dimensions and appear anywhere. It caused a stir one time when it stuck just one leg out of a wall.",
    descricaoMega:
      "Ele pode atravessar outras dimensões e aparecer em qualquer lugar. Causou alvoroço uma vez quando colocou apenas uma perna para fora de uma parede.",
    descricaoEsp:
      "Puede atravesar otras dimensiones y aparecer en cualquier lugar. Causó un revuelo una vez cuando sacó solo una pierna de una pared.",
    descricaoFra:
      "Il peut traverser d'autres dimensions et apparaître n'importe où. Il a fait sensation une fois lorsqu'il a sorti une seule jambe d'un mur.",
    descricaoChn:
      "它可以穿越其他维度，出现在任何地方。有一次，它只把一条腿从墙里伸了出来，造成了一阵轰动。",
    descricaoGigantamax:
      "Rumores dizem que sua boca gigantesca leva não para o seu corpo, cheio de energia amaldiçoada, mas diretamente para a vida após a morte. Ele lança armadilhas, na esperança de roubar a vida daqueles que captura. Se você ficar diante de sua boca, ouvirá as vozes de seus entes queridos chamando por você.",
    descricaoGigantamaxEua:
      "Rumors say that its giant mouth leads not to its body, filled with cursed energy, but directly to the afterlife. It sets traps in hopes of stealing the life of those it captures. If you stand before its mouth, you'll hear the voices of your loved ones calling for you.",
    descricaoGigantamaxEsp:
      "Se dice que su enorme boca no lleva a su cuerpo, lleno de energía maldita, sino directamente al más allá. Tiende trampas con la esperanza de robar la vida de aquellos que captura. Si te pones frente a su boca, escucharás las voces de tus seres queridos llamándote.",
    descricaoGigantamaxFra:
      "On dit que sa grande bouche ne mène pas à son corps, rempli d'énergie maudite, mais directement à l'au-delà. Il tend des pièges dans l'espoir de voler la vie de ceux qu'il capture. Si vous vous tenez devant sa bouche, vous entendrez les voix de vos proches vous appeler.",
    descricaoGigantamaxChn:
      "有传言说它的巨大嘴巴并不通向它充满诅咒能量的身体，而是直接通向来世。它设下陷阱，希望偷取那些它捕获的生命。如果你站在它的嘴前，你会听到你亲人的声音在呼唤你。",
    descricao:
      "Na noite de lua cheia, se as sombras se movem sozinhas e riem, deve ser culpa de Gengar.",
    descricaoEua:
      "On a full moon night, if shadows move on their own and laugh, it must be Gengar's fault.",
    descricaoFra:
      "Lors d'une nuit de pleine lune, si les ombres bougent toutes seules et rient, cela doit être de la faute de Gengar.",
    descricaoChn: "在满月的夜晚，如果影子自己动起来并笑，那一定是冥王的错。",
    descricaoEsp:
      "En la noche de luna llena, si las sombras se mueven solas y se ríen, debe ser culpa de Gengar.",
  },
  {
    nro: 95,
    som: "./Sons/onix.mp3",
    nome: "Onix",
    genero: "",
    tamanho: 6,
    img: "./pokemons/onix.gif",
    imgShiny: "./pokemons/onixShiny.gif",
    tipo: ["Rochoso", "Terrestre"],
    tipoEua: ["Rock", "Ground"],
    tipoFra: ["Roche", "Sol"],
    tipoChn: ["岩石", "地面"],
    tipoEsp: ["Roca", "Tierra"],
    descricao:
      "À medida que escava o solo, absorve muitos objetos duros. Isso é o que torna seu corpo tão sólido.",
    descricaoEua:
      "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.",
    descricaoFra:
      "Au fur et à mesure qu'il creuse le sol, il absorbe de nombreux objets durs. Cela rend son corps si solide.",
    descricaoChn:
      "它在挖掘地下时吸收了许多坚硬的物体。这就是它的身体如此坚固的原因。",
    descricaoEsp:
      "A medida que excava el suelo, absorbe muchos objetos duros. Esto es lo que hace que su cuerpo sea tan sólido.",
  },
  {
    nro: 96,
    som: "./Sons/drowzee.mp3",
    nome: "Drowzee",
    genero: "",
    tamanho: 3,
    img: "./pokemons/drowzee.gif",
    imgShiny: "./pokemons/drowzeeShiny.gif",
    tipo: ["Psíquico"],
    tipoEua: ["Psychic"],
    tipoFra: ["Psy"],
    tipoChn: ["超能力"],
    tipoEsp: ["Psíquico"],
    descricao:
      "Se você dormir com ele o tempo todo, às vezes ele mostrará sonhos que comeu no passado.",
    descricaoEua:
      "If you sleep with it all the time, sometimes it will show dreams that it ate in the past.",
    descricaoFra:
      "Si vous dormez avec lui tout le temps, parfois il montrera des rêves qu'il a mangés dans le passé.",
    descricaoChn: "如果你一直和它一起睡觉，有时它会展示它曾经吃过的梦。",
    descricaoEsp:
      "Si duermes con él todo el tiempo, a veces mostrará sueños que comió en el pasado.",
  },
  {
    nro: 97,
    som: "./Sons/hypno.mp3",
    nome: "Hypno",
    genero: "♂",
    tamanho: 5,
    img: "./pokemons/hypno.gif",
    imgShiny: "./pokemons/hypnoShiny.gif",
    tipo: ["Psíquico"],
    tipoEua: ["Psychic"],
    tipoFra: ["Psy"],
    tipoChn: ["超能力"],
    tipoEsp: ["Psíquico"],
    descricao:
      "Evite o contato visual se encontrar um. Ele tentará colocá-lo para dormir usando seu pêndulo.",
    descricaoEua:
      "Avoid eye contact if you encounter one. It will try to put you to sleep using its pendulum.",
    descricaoFra:
      "Évitez le contact visuel si vous en rencontrez un. Il tentera de vous endormir en utilisant son pendule.",
    descricaoChn: "如果遇到它，请避免眼神接触。它会试图用摆锤让你入睡。",
    descricaoEsp:
      "Evita el contacto visual si encuentras uno. Intentará ponerlo a dormir usando su péndulo.",
  },
  {
    nro: 97,
    som: "./Sons/hypno.mp3",
    nome: "Hypno",
    genero: "♀",
    tamanho: 5,
    img: "./pokemons/hypno-f.gif",
    imgShiny: "./pokemons/hypno-fShiny.gif",
    tipo: ["Psíquico"],
    tipoEua: ["Psychic"],
    tipoFra: ["Psy"],
    tipoChn: ["超能力"],
    tipoEsp: ["Psíquico"],
    descricao:
      "Evite o contato visual se encontrar um. Ele tentará colocá-lo para dormir usando seu pêndulo.",
    descricaoEua:
      "Avoid eye contact if you encounter one. It will try to put you to sleep using its pendulum.",
    descricaoFra:
      "Évitez le contact visuel si vous en rencontrez un. Il tentera de vous endormir en utilisant son pendule.",
    descricaoChn: "如果遇到它，请避免眼神接触。它会试图用摆锤让你入睡。",
    descricaoEsp:
      "Evita el contacto visual si encuentras uno. Intentará ponerlo a dormir usando su péndulo.",
  },
  {
    nro: 98,
    som: "./Sons/krabby.mp3",
    nome: "Krabby",
    genero: "",
    tamanho: 2,
    img: "./pokemons/krabby.gif",
    imgShiny: "./pokemons/krabbyShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Pode ser encontrado perto do mar. As pinças grandes voltam a crescer se forem arrancadas de seus soquetes.",
    descricaoEua:
      "It can be found near the sea. Its large pincers grow back if they are pulled off their sockets.",
    descricaoFra:
      "On peut le trouver près de la mer. Ses grosses pinces repoussent si elles sont arrachées de leurs sockets.",
    descricaoChn: "可以在海边找到。如果大钳子被拔掉，它们会重新长出来。",
    descricaoEsp:
      "Se puede encontrar cerca del mar. Sus grandes pinzas vuelven a crecer si se arrancan de sus enchufes.",
  },
  {
    nro: 99,
    som: "./Sons/kingler.mp3",
    nome: "Kingler",
    genero: "",
    tamanho: 5,
    img: "./pokemons/kingler.gif",
    imgShiny: "./pokemons/kinglerShiny.gif",
    nomeGigantamax: "Kingler Gigantamax",
    imgGigantamax: "./pokemons/kingler-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/kingler-gigantamaxShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    tipoGigantamax: ["Água"],
    tipoGigantamaxEua: ["Water"],
    tipoGigantamaxFra: ["Eau"],
    tipoGigantamaxChn: ["水"],
    tipoGigantamaxEsp: ["Agua"],
    descricaoGigantamaxEua:
      "The flow of Gigantamax energy has stimulated this Pokémon’s left pincer to grow to an enormous size. This claw can pulverize anything. The bubbles it expels are highly alkaline. Any opponent hit by them will have their bodies quickly melted.",
    descricaoGigantamax:
      "O fluxo de energia Gigantamax estimulou a pinça esquerda deste Pokémon a crescer até um tamanho enorme. Essa garra pode pulverizar qualquer coisa. As bolhas que ele expele são fortemente alcalinas. Qualquer oponente atingido por elas terá seus corpos rapidamente derretidos.",
    descricaoGigantamaxEsp:
      "El flujo de energía Gigantamax ha estimulado la pinza izquierda de este Pokémon a crecer hasta un tamaño enorme. Esta garra puede pulverizar cualquier cosa. Las burbujas que expulsa son altamente alcalinas. Cualquier oponente alcanzado por ellas verá su cuerpo derretirse rápidamente.",
    descricaoGigantamaxChn:
      "极巨化能量的流动促使这只宝可梦的左螯生长到巨大尺寸。这只钳子能粉碎任何东西。它喷出的气泡具有强碱性。任何被气泡击中的对手都会迅速融化。",
    descricaoGigantamaxFra:
      "Le flux d’énergie Gigantamax a stimulé la pince gauche de ce Pokémon, la faisant grandir à une taille énorme. Cette pince peut pulvériser n'importe quoi. Les bulles qu'il expulse sont fortement alcalines. Tout adversaire touché par celles-ci verra son corps fondre rapidement.",
    descricao:
      "Sua pinça grande e dura tem força de 10.000 cavalos de potência. No entanto, sendo tão grande, é difícil de se mover.",
    descricaoEua:
      "Its large, hard claw has the strength of 10,000 horsepower. However, being so large, it is difficult to move.",
    descricaoFra:
      "Sa grande pince dure a la force de 10 000 chevaux-vapeur. Cependant, étant si grande, elle est difficile à déplacer.",
    descricaoChn:
      "它的大钳子硬如铁，具有10000马力的力量。然而，由于太大，移动起来非常困难。",
    descricaoEsp:
      "Su pinza grande y dura tiene la fuerza de 10.000 caballos de fuerza. Sin embargo, siendo tan grande, es difícil de mover.",
  },
  {
    nro: 100,
    som: "./Sons/voltorb.mp3",
    nome: "Voltorb",
    genero: "",
    tamanho: 2,
    img: "./pokemons/voltorb.gif",
    imgShiny: "./pokemons/voltorbShiny.gif",
    tipo: ["Elétrico"],
    tipoEua: ["Electric"],
    tipoFra: ["Électrique"],
    tipoChn: ["电"],
    tipoEsp: ["Eléctrico"],
    descricao:
      "Diz-se que se camufla como uma Pokébola. Ele se autodestruirá com muito pouco estímulo.",
    descricaoEua:
      "It is said to camouflage itself as a Poké Ball. It will self-destruct with very little provocation.",
    descricaoFra:
      "On dit qu'il se camoufle en tant que Pokéball. Il se détruit lui-même avec très peu de provocation.",
    descricaoChn: "据说它伪装成一个精灵球。它会在很少的刺激下自爆。",
    descricaoEsp:
      "Se dice que se camufla como una Pokébola. Se autodestruirá con muy poco estímulo.",
  },
  {
    nro: 101,
    som: "./Sons/electrode.mp3",
    nome: "Electrode",
    genero: "",
    tamanho: 3,
    img: "./pokemons/electrode.gif",
    imgShiny: "./pokemons/electrodeShiny.gif",
    tipo: ["Elétrico"],
    tipoEua: ["Electric"],
    tipoFra: ["Électrique"],
    tipoChn: ["电"],
    tipoEsp: ["Eléctrico"],
    descricao:
      "Armazena energia elétrica dentro de seu corpo. Mesmo o menor choque pode desencadear uma enorme explosão.",
    descricaoEua:
      "It stores electric energy inside its body. Even the smallest shock can trigger a huge explosion.",
    descricaoFra:
      "Il stocke de l'énergie électrique dans son corps. Même le moindre choc peut déclencher une énorme explosion.",
    descricaoChn: "它将电能存储在体内。即使是最小的冲击也能引发巨大的爆炸。",
    descricaoEsp:
      "Almacena energía eléctrica dentro de su cuerpo. Incluso el menor choque puede desencadenar una enorme explosión.",
  },
  {
    nro: 102,
    som: "./Sons/exeggcute.mp3",
    nome: "Exeggcute",
    genero: "",
    tamanho: 1,
    img: "./pokemons/exeggcute.gif",
    imgShiny: "./pokemons/exeggcuteShiny.gif",
    tipo: ["Planta", "Psíquico"],
    tipoEua: ["Grass", "Psychic"],
    tipoFra: ["Plante", "Psy"],
    tipoChn: ["植物", "超能力"],
    tipoEsp: ["Planta", "Psíquico"],
    descricao:
      "Embora possa parecer apenas um monte de ovos, é um Pokémon adequado. Exeggcute se comunica com outros de seu tipo via telepatia, aparentemente.",
    descricaoEua:
      "Although it may just look like a bunch of eggs, it is a proper Pokémon. Exeggcute apparently communicates with others of its kind through telepathy.",
    descricaoFra:
      "Bien qu'il ressemble à un tas d'œufs, c'est un Pokémon convenable. Exeggcute semble communiquer avec d'autres de son espèce par télépathie.",
    descricaoChn:
      "虽然它看起来像一堆鸡蛋，但它是一个合适的宝可梦。Exeggcute显然通过心灵感应与同类沟通。",
    descricaoEsp:
      "Aunque pueda parecer solo un montón de huevos, es un Pokémon adecuado. Exeggcute aparentemente se comunica con otros de su especie por telepatía.",
  },
  {
    nro: 103,
    som: "./Sons/exeggutor.mp3",
    nome: "Exeggutor",
    genero: "",
    nomeAlola: "Exeggutor Alola",
    generoAlola: "",
    imgAlola: "./pokemons/exeggutor-alola.gif",
    imgAlolaShiny: "./pokemons/exeggutor-alolaShiny.gif",
    tamanho: 5,
    tamanhoAlola: 6,
    img: "./pokemons/exeggutor.gif",
    imgShiny: "./pokemons/exeggutorShiny.gif",
    tipo: ["Planta", "Psíquico"],
    tipoEua: ["Grass", "Psychic"],
    tipoFra: ["Plante", "Psy"],
    tipoChn: ["植物", "超能力"],
    tipoEsp: ["Planta", "Psíquico"],
    tipoAlola: ["Planta", "Dragão"],
    tipoAlolaEua: ["Grass", "Dragon"],
    tipoAlolaFra: ["Plante", "Dragon"],
    tipoAlolaChn: ["植物", "龙"],
    tipoAlolaEsp: ["Planta", "Dragón"],
    descricaoAlolaEua:
      "It swings its long neck like a whip and smacks its head into opponents. This makes Exeggutor itself a little dizzy too.",
    descricaoAlola:
      "Ele balança seu longo pescoço como um chicote e bate com a cabeça nos oponentes. Isso também deixa o próprio Exeggutor um pouco tonto.",
    descricaoAlolaEsp:
      "Mueve su largo cuello como un látigo y golpea a sus oponentes con la cabeza. Esto también hace que Exeggutor se maree un poco.",
    descricaoAlolaChn:
      "它像鞭子一样挥舞着长脖子，用头撞击对手。这也会让椰蛋树自己有点头晕。",
    descricaoAlolaFra:
      "Il balance son long cou comme un fouet et assène des coups de tête à ses adversaires. Cela donne également un peu le vertige à Exeggutor.",
    descricao:
      "Cada uma das três cabeças de Exeggutor está pensando em pensamentos diferentes. Os três não parecem estar muito interessados um no outro.",
    descricaoEua:
      "Each of Exeggutor's three heads is thinking different thoughts. The three don't seem very interested in each other.",
    descricaoFra:
      "Chacune des trois têtes d'Exeggutor pense à des pensées différentes. Les trois ne semblent pas très intéressés les uns par les autres.",
    descricaoChn:
      "Exeggutor的三颗头脑正在思考不同的事情。它们似乎彼此不太感兴趣。",
    descricaoEsp:
      "Cada una de las tres cabezas de Exeggutor está pensando en pensamientos diferentes. Los tres no parecen estar muy interesados entre sí.",
  },
  {
    nro: 104,
    som: "./Sons/cubone.mp3",
    nome: "Cubone",
    genero: "",
    tamanho: 2,
    img: "./pokemons/cubone.gif",
    imgShiny: "./pokemons/cuboneShiny.gif",
    tipo: ["Terrestre"],
    tipoEua: ["Ground"],
    tipoFra: ["Sol"],
    tipoChn: ["地面"],
    tipoEsp: ["Tierra"],
    descricao:
      "Quando a memória de sua mãe falecida o leva às lágrimas, seus gritos ecoam tristemente dentro do crânio que ele usa em sua cabeça.",
    descricaoEua:
      "When the memory of his deceased mother brings him to tears, his cries echo sadly within the skull he wears on his head.",
    descricaoFra:
      "Lorsque le souvenir de sa mère décédée le conduit aux larmes, ses cris résonnent tristement dans le crâne qu'il porte sur sa tête.",
    descricaoChn:
      "当他回忆起已故的母亲而泪流满面时，他的哭声悲伤地在他头上戴着的骷髅中回荡。",
    descricaoEsp:
      "Cuando el recuerdo de su madre fallecida lo lleva a las lágrimas, sus gritos resuenan tristemente dentro del cráneo que usa en su cabeza.",
  },
  {
    nro: 105,
    som: "./Sons/marowak.mp3",
    nome: "Marowak",
    genero: "",
    nomeAlola: "Marowak Alola",
    generoAlola: "",
    imgAlola: "./pokemons/marowak-alola.gif",
    imgAlolaShiny: "./pokemons/marowak-alolaShiny.gif",
    tamanho: 4,
    tamanhoAlola: 5,
    img: "./pokemons/marowak.gif",
    imgShiny: "./pokemons/marowakShiny.gif",
    tipo: ["Terrestre"],
    tipoEua: ["Ground"],
    tipoFra: ["Sol"],
    tipoChn: ["地面"],
    tipoEsp: ["Tierra"],
    tipoAlola: ["Fogo", "Fantasma"],
    tipoAlolaEua: ["Fire", "Ghost"],
    tipoAlolaFra: ["Feu", "Fantôme"],
    tipoAlolaChn: ["火", "幽灵"],
    tipoAlolaEsp: ["Fuego", "Fantasma"],
    descricaoAlolaEua:
      "This Pokémon sets the bone it holds on fire and dances through the night as a way to mourn its fallen allies.",
    descricaoAlolaPor:
      "Este Pokémon incendeia o osso que segura e dança pela noite como uma forma de lamentar seus aliados caídos.",
    descricaoAlolaEsp:
      "Este Pokémon prende fuego al hueso que sostiene y baila durante la noche como una forma de llorar a sus aliados caídos.",
    descricaoAlolaChn:
      "这只宝可梦点燃自己持有的骨头，并在夜晚跳舞，以哀悼它倒下的伙伴。",
    descricaoAlolaFra:
      "Ce Pokémon enflamme l’os qu’il tient et danse toute la nuit pour pleurer ses alliés disparus.",
    descricao:
      "Este Pokémon superou sua tristeza para evoluir um novo corpo robusto. Marowak enfrenta seus oponentes com bravura, usando um osso como arma.",
    descricaoEua:
      "This Pokémon overcame its sadness to evolve into a sturdy new body. Marowak bravely faces its opponents using a bone as a weapon.",
    descricaoFra:
      "Ce Pokémon a surmonté sa tristesse pour évoluer en un nouveau corps robuste. Marowak fait face à ses adversaires avec bravoure en utilisant un os comme arme.",
    descricaoChn:
      "这个宝可梦克服了悲伤，进化成一个坚固的新身体。Marowak 勇敢地面对它的对手，使用一根骨头作为武器。",
    descricaoEsp:
      "Este Pokémon superó su tristeza para evolucionar a un cuerpo robusto. Marowak enfrenta a sus oponentes con valentía, usando un hueso como arma.",
  },
  {
    nro: 106,
    som: "./Sons/hitmonlee.mp3",
    nome: "Hitmonlee",
    genero: "",
    tamanho: 4,
    img: "./pokemons/hitmonlee.gif",
    imgShiny: "./pokemons/hitmonleeShiny.gif",
    tipo: ["Lutador"],
    tipoEua: ["Fighting"],
    tipoFra: ["Combat"],
    tipoChn: ["格斗"],
    tipoEsp: ["Lucha"],
    descricao:
      "Este incrível Pokémon tem um incrível senso de equilíbrio. Pode chutar sucessivamente de qualquer posição.",
    descricaoEua:
      "This amazing Pokémon has an incredible sense of balance. It can kick repeatedly from any position.",
    descricaoFra:
      "Ce Pokémon incroyable a un sens de l'équilibre incroyable. Il peut donner des coups de pied successivement depuis n'importe quelle position.",
    descricaoChn:
      "这个惊人的宝可梦拥有令人难以置信的平衡感。它可以从任何位置连续踢腿。",
    descricaoEsp:
      "Este increíble Pokémon tiene un increíble sentido del equilibrio. Puede patear sucesivamente desde cualquier posición.",
  },
  {
    nro: 107,
    som: "./Sons/hitmonchan.mp3",
    nome: "Hitmonchan",
    genero: "",
    tamanho: 4,
    img: "./pokemons/hitmonchan.gif",
    imgShiny: "./pokemons/hitmonchanShiny.gif",
    tipo: ["Lutador"],
    tipoEua: ["Fighting"],
    tipoFra: ["Combat"],
    tipoChn: ["格斗"],
    tipoEsp: ["Lucha"],
    descricao:
      "Seus socos cortam o ar. Eles são lançados a uma velocidade tão alta que até um leve arranhão pode causar uma queimadura.",
    descricaoEua:
      "Its punches cut through the air. They are thrown at such high speed that even a slight scratch can cause a burn.",
    descricaoFra:
      "Ses poings tranchent l'air. Ils sont lancés à une vitesse si élevée qu'une légère égratignure peut causer une brûlure.",
    descricaoChn:
      "它的拳头划破空气。它们以如此高的速度投掷，甚至轻微的擦伤也可能引起烧伤。",
    descricaoEsp:
      "Sus puños cortan el aire. Se lanzan a tal velocidad que incluso un leve rasguño puede causar una quemadura.",
  },
  {
    nro: 108,
    som: "./Sons/lickitung.mp3",
    nome: "Lickitung",
    genero: "",
    tamanho: 4,
    img: "./pokemons/lickitung.gif",
    imgShiny: "./pokemons/lickitungShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    descricao:
      "Se a saliva pegajosa deste Pokémon entrar em contato com você e você não a limpar, uma coceira intensa se instalará. A coceira também não desaparecerá.",
    descricaoEua:
      "If this Pokémon's sticky saliva contacts you and you don't clean it off, intense itching will set in. The itching will not go away.",
    descricaoFra:
      "Si la salive collante de ce Pokémon entre en contact avec vous et que vous ne la nettoyez pas, une démangeaison intense s'installera. Les démangeaisons ne disparaîtront pas.",
    descricaoChn:
      "如果这个宝可梦的粘液与您接触且您没有清洁它，强烈的瘙痒将开始。瘙痒不会消失。",
    descricaoEsp:
      "Si la saliva pegajosa de este Pokémon entra en contacto contigo y no la limpias, comenzará una picazón intensa. La picazón no desaparecerá.",
  },
  {
    nro: 109,
    som: "./Sons/koffing.mp3",
    nome: "Koffing",
    genero: "",
    tamanho: 4,
    img: "./pokemons/koffing.gif",
    imgShiny: "./pokemons/koffingShiny.gif",
    tipo: ["Venenoso"],
    tipoEua: ["Poison"],
    tipoFra: ["Venimeux"],
    tipoChn: ["毒"],
    tipoEsp: ["Veneno"],
    descricao:
      "Seu corpo está cheio de gás venenoso. Ele flutua em lixões, procurando a fumaça do lixo cru e apodrecido.",
    descricaoEua:
      "Its body is filled with poisonous gas. It floats in garbage dumps, searching for the smoke of raw and decaying garbage.",
    descricaoFra:
      "Son corps est rempli de gaz toxiques. Il flotte dans les décharges, recherchant la fumée des ordures crues et en décomposition.",
    descricaoChn:
      "它的身体充满了有毒气体。它在垃圾场中漂浮，寻找生垃圾和腐烂垃圾的烟雾。",
    descricaoEsp:
      "Su cuerpo está lleno de gas venenoso. Flota en basureros, buscando el humo de la basura cruda y en descomposición.",
  },
  {
    nro: 110,
    som: "./Sons/weezing.mp3",
    nome: "Weezing",
    genero: "",
    nomeGalar: "Weezing Galar",
    generoGalar: "",
    tamanho: 5,
    tamanhoGalar: 6,
    img: "./pokemons/weezing.gif",
    imgShiny: "./pokemons/weezingShiny.gif",
    imgGalar: "./pokemons/weezing-galar.gif",
    imgGalarShiny: "./pokemons/weezing-galarShiny.gif",
    tipo: ["Venenoso"],
    tipoEua: ["Poison"],
    tipoFra: ["Venimeux"],
    tipoChn: ["毒"],
    tipoEsp: ["Veneno"],
    tipoGalar: ["Venenoso", "Fada"],
    tipoGalarEua: ["Poison", "Fairy"],
    tipoGalarFra: ["Venimeux", "Fée"],
    tipoGalarChn: ["毒", "妖精"],
    tipoGalarEsp: ["Veneno", "Hada"],
    descricaoGalarEua:
      "This Pokémon consumes particles that contaminate the air. Instead of leaving droppings, it expels clean air.",
    descricaoGalarEua:
      "Este Pokémon consome partículas que contaminam o ar. Em vez de deixar excrementos, ele expulsa ar limpo.",
    descricaoGalarEuaEsp:
      "Este Pokémon consume partículas que contaminan el aire. En lugar de dejar excrementos, expulsa aire limpio.",
    descricaoGalarEuaFra:
      "Ce Pokémon consomme des particules qui contaminent l'air. Au lieu de laisser des excréments, il expulse de l'air pur.",
    descricaoGalarEuaChn:
      "这个宝可梦吞噬污染空气的颗粒。它不是留下排泄物，而是排出洁净的空气。",
    descricao:
      "Mistura gases entre seus dois corpos. Dizem que esses Pokémon foram vistos em toda a região de Galar no passado.",
    descricaoEua:
      "It mixes gases between its two bodies. These Pokémon are said to have been seen throughout the Galar region in the past.",
    descricaoFra:
      "Il mélange des gaz entre ses deux corps. On dit que ces Pokémon ont été vus dans toute la région de Galar par le passé.",
    descricaoChn:
      "它在两个身体之间混合气体。据说这些宝可梦曾在过去出现在加拉尔地区。",
    descricaoEsp:
      "Mezcla gases entre sus dos cuerpos. Se dice que estos Pokémon fueron vistos en toda la región de Galar en el pasado.",
  },
  {
    nro: 111,
    som: "./Sons/rhyhorn.mp3",
    nome: "Rhyhorn",
    genero: "♂",
    tamanho: 3,
    img: "./pokemons/rhyhorn.gif",
    imgShiny: "./pokemons/rhyhornShiny.gif",
    tipo: ["Terrestre", "Rochoso"],
    tipoEua: ["Ground", "Rock"],
    tipoFra: ["Sol", "Roche"],
    tipoChn: ["地面", "岩石"],
    tipoEsp: ["Tierra", "Roca"],
    descricao:
      "Forte, mas não muito brilhante, este Pokémon pode destruir até um arranha-céu com seus ataques de ataque.",
    descricaoEua:
      "Strong but not very bright, this Pokémon can destroy even a skyscraper with its attacks.",
    descricaoFra:
      "Fort mais pas très brillant, ce Pokémon peut détruire jusqu'à un gratte-ciel avec ses attaques.",
    descricaoChn: "强大但不太聪明，这只宝可梦能用攻击摧毁甚至一座摩天大楼。",
    descricaoEsp:
      "Fuerte, pero no muy brillante, este Pokémon puede destruir incluso un rascacielos con sus ataques.",
  },
  {
    nro: 111,
    som: "./Sons/rhyhorn.mp3",
    nome: "Rhyhorn",
    genero: "♀",
    tamanho: 3,
    img: "./pokemons/rhyhorn-f.gif",
    imgShiny: "./pokemons/rhyhorn-fShiny.gif",
    tipo: ["Terrestre", "Rochoso"],
    tipoEua: ["Ground", "Rock"],
    tipoFra: ["Sol", "Roche"],
    tipoChn: ["地面", "岩石"],
    tipoEsp: ["Tierra", "Roca"],
    descricao:
      "Forte, mas não muito brilhante, este Pokémon pode destruir até um arranha-céu com seus ataques de ataque.",
    descricaoEua:
      "Strong but not very bright, this Pokémon can destroy even a skyscraper with its attacks.",
    descricaoFra:
      "Fort mais pas très brillant, ce Pokémon peut détruire jusqu'à un gratte-ciel avec ses attaques.",
    descricaoChn: "强大但不太聪明，这只宝可梦能用攻击摧毁甚至一座摩天大楼。",
    descricaoEsp:
      "Fuerte, pero no muy brillante, este Pokémon puede destruir incluso un rascacielos con sus ataques.",
  },
  {
    nro: 112,
    som: "./Sons/rhydon.mp3",
    nome: "Rhydon",
    genero: "♂",
    tamanho: 5,
    img: "./pokemons/rhydon.gif",
    imgShiny: "./pokemons/rhydonShiny.gif",
    tipo: ["Terrestre", "Rochoso"],
    tipoEua: ["Ground", "Rock"],
    tipoFra: ["Sol", "Roche"],
    tipoChn: ["地面", "岩石"],
    tipoEsp: ["Tierra", "Roca"],
    descricao:
      "Ele começa a andar nas patas traseiras após a evolução. Ele pode fazer buracos através de pedregulhos com seu chifre.",
    descricaoEua:
      "It starts walking on its hind legs after evolution. It can dig through rubble with its horn.",
    descricaoFra:
      "Il commence à marcher sur ses pattes arrière après l'évolution. Il peut creuser à travers les gravats avec sa corne.",
    descricaoChn: "它在进化后开始用后腿走路。它可以用角在瓦砾中挖掘。",
    descricaoEsp:
      "Comienza a caminar sobre sus patas traseras después de la evolución. Puede hacer agujeros a través de los escombros con su cuerno.",
  },
  {
    nro: 112,
    som: "./Sons/rhydon.mp3",
    nome: "Rhydon",
    genero: "♀",
    tamanho: 5,
    img: "./pokemons/rhydon-f.gif",
    imgShiny: "./pokemons/rhydon-fShiny.gif",
    tipo: ["Terrestre", "Rochoso"],
    tipoEua: ["Ground", "Rock"],
    tipoFra: ["Sol", "Roche"],
    tipoChn: ["地面", "岩石"],
    tipoEsp: ["Tierra", "Roca"],
    descricao:
      "Ele começa a andar nas patas traseiras após a evolução. Ele pode fazer buracos através de pedregulhos com seu chifre.",
    descricaoEua:
      "It starts walking on its hind legs after evolution. It can dig through rubble with its horn.",
    descricaoFra:
      "Il commence à marcher sur ses pattes arrière après l'évolution. Il peut creuser à travers les gravats avec sa corne.",
    descricaoChn: "它在进化后开始用后腿走路。它可以用角在瓦砾中挖掘。",
    descricaoEsp:
      "Comienza a caminar sobre sus patas traseras después de la evolución. Puede hacer agujeros a través de los escombros con su cuerno.",
  },
  {
    nro: 113,
    som: "./Sons/chansey.mp3",
    nome: "Chansey",
    genero: "",
    tamanho: 3,
    img: "./pokemons/chansey.gif",
    imgShiny: "./pokemons/chanseyShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    descricao:
      "O ovo que Chansey carrega não é apenas delicioso, mas também repleto de nutrição. É usado como um ingrediente culinário de alta classe.",
    descricaoEua:
      "The egg that Chansey carries is not only delicious, but also packed with nutrition. It's used as a high-class culinary ingredient.",
    descricaoFra:
      "L'œuf que porte Chansey n'est pas seulement délicieux, mais aussi plein de nutrition. Il est utilisé comme un ingrédient culinaire de haute classe.",
    descricaoChn:
      "奇诺比携带的蛋不仅美味，而且充满营养。它被用作高级烹饪食材。",
    descricaoEsp:
      "El huevo que lleva Chansey no solo es delicioso, sino también lleno de nutrientes. Se utiliza como un ingrediente culinario de alta gama.",
  },
  {
    nro: 114,
    som: "./Sons/tangela.mp3",
    nome: "Tangela",
    genero: "",
    tamanho: 3,
    img: "./pokemons/tangela.gif",
    imgShiny: "./pokemons/tangelaShiny.gif",
    tipo: ["Planta"],
    tipoEua: ["Grass"],
    tipoFra: ["Plante"],
    tipoChn: ["植物"],
    tipoEsp: ["Planta"],
    descricao:
      "Escondido sob um emaranhado de trepadeiras que cresce sem parar, mesmo que as trepadeiras sejam arrancadas, a verdadeira aparência deste Pokémon permanece um mistério.",
    descricaoEua:
      "Hidden under a tangle of vines that grows continuously, even if the vines are torn off, this Pokémon's true appearance remains a mystery.",
    descricaoFra:
      "Caché sous un enchevêtrement de lianes qui pousse sans arrêt, même si les lianes sont arrachées, l'apparence réelle de ce Pokémon reste un mystère.",
    descricaoChn:
      "隐藏在不断生长的藤蔓中，即使藤蔓被拔除，这个宝可梦的真实外貌依然是个谜。",
    descricaoEsp:
      "Escondido bajo un enredo de enredaderas que crece sin cesar, incluso si se arrancan las enredaderas, la verdadera apariencia de este Pokémon sigue siendo un misterio.",
  },
  {
    nro: 115,
    som: "./Sons/kangaskhan.mp3",
    nome: "Kangaskhan",
    genero: "",
    tamanho: 5,
    img: "./pokemons/kangaskhan.gif",
    imgShiny: "./pokemons/kangaskhanShiny.gif",
    nomeMega: "Kangaskhan Mega",
    imgMega: "./pokemons/kangaskhan-mega.gif",
    imgMegaShiny: "./pokemons/kangaskhan-megaShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    tipoMega: ["Normal"],
    tipoMegaEua: ["Normal"],
    tipoMegaFra: ["Normal"],
    tipoMegaChn: ["普通"],
    tipoMegaEsp: ["Normal"],
    descricaoMega:
      "Incrivelmente, o filhote que transporta na sua bolsa pode saltar para fora e participar na batalha! Este jovem pokémon é enérgico e detesta perder. Para proteger a mãe, o filhote pode desafiar corajosamente pokémons muito maiores que ele! Após a mega evolução, a habilidade de Kangaskhan muda para Parental Bond, que permite que a mãe e o filhote ataquem, atacando duas vezes por turno.",
    descricaoMegaEua:
      "Incredibly, the young one it carries in its pouch can jump out and participate in the battle! This energetic Pokémon hates to lose. To protect its mother, the young one can bravely challenge much larger Pokémon! After Mega Evolution, Kangaskhan's ability changes to Parental Bond, allowing both the mother and the young one to attack, striking twice per turn.",
    descricaoMegaEsp:
      "¡Increíblemente, el joven que transporta en su bolsa puede saltar y participar en la batalla! ¡Este Pokémon enérgico odia perder! Para proteger a su madre, el joven puede desafiar valientemente a Pokémon mucho más grandes que él. Después de la megaevolución, la habilidad de Kangaskhan cambia a Vínculo Parental, lo que permite que tanto la madre como el joven ataquen, golpeando dos veces por turno.",
    descricaoMegaFra:
      "Incroyablement, le jeune qu'il porte dans sa poche peut sauter et participer au combat ! Ce Pokémon énergique déteste perdre. Pour protéger sa mère, le jeune peut courageusement défier des Pokémon beaucoup plus grands que lui ! Après la Méga-évolution, l'aptitude de Kangaskhan change pour Lien Parental, permettant à la mère et au jeune d'attaquer, frappant deux fois par tour.",
    descricaoMegaChn:
      "令人难以置信的是，它袋子里携带的小宝宝可以跳出来参与战斗！这个充满活力的宝可梦讨厌失败。为了保护妈妈，小宝宝可以勇敢地挑战比自己大的宝可梦！在超级进化后，肯泰罗的能力变为亲子纽带，允许妈妈和宝宝一起攻击，每回合攻击两次。",
    descricao:
      "Embora esteja carregando seu bebê em uma bolsa na barriga, Kangaskhan é rápido em seus pés. Ele intimida seus oponentes com jabs rápidos.",
    descricaoEua:
      "Although carrying its baby in a pouch on its belly, Kangaskhan is quick on its feet. It intimidates opponents with fast jabs.",
    descricaoFra:
      "Bien qu'il porte son bébé dans une poche sur son ventre, Kangaskhan est rapide sur ses pieds. Il intimide ses adversaires avec des jabs rapides.",
    descricaoChn:
      "虽然把宝宝抱在腹部的袋子里，Kangaskhan 依然步伐迅速。它用快速的刺拳来威吓对手。",
    descricaoEsp:
      "Aunque lleva a su bebé en una bolsa en su barriga, Kangaskhan es rápido en sus pies. Intimida a sus oponentes con golpes rápidos.",
  },
  {
    nro: 116,
    som: "./Sons/horsea.mp3",
    nome: "Horsea",
    genero: "",
    tamanho: 3,
    img: "./pokemons/horsea.gif",
    imgShiny: "./pokemons/horseaShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Horsea faz sua casa em oceanos com correntes suaves. Se este Pokémon estiver sob ataque, ele cospe tinta preta e escapa.",
    descricaoEua:
      "Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits black ink and escapes.",
    descricaoFra:
      "Horsea fait sa maison dans des océans avec des courants doux. Si ce Pokémon est attaqué, il crache de l'encre noire et s'échappe.",
    descricaoChn:
      "海马在水流平缓的海洋中建立家园。如果这个宝可梦受到攻击，它会喷出黑色的墨水并逃跑。",
    descricaoEsp:
      "Horsea hace su hogar en océanos con corrientes suaves. Si este Pokémon es atacado, escupe tinta negra y escapa.",
  },
  {
    nro: 117,
    som: "./Sons/seadra.mp3",
    nome: "Seadra",
    genero: "",
    tamanho: 5,
    img: "./pokemons/seadra.gif",
    imgShiny: "./pokemons/seadraShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "São os machos que criam a prole. Enquanto Seadra está criando filhotes, os espinhos em suas costas secretam um veneno mais espesso e forte.",
    descricaoEua:
      "The males raise the offspring. While Seadra is caring for its young, the spikes on its back secrete a thicker and stronger venom.",
    descricaoFra:
      "Ce sont les mâles qui élèvent la progéniture. Pendant que Seadra prend soin de ses petits, les épines sur son dos sécrètent un venin plus épais et plus fort.",
    descricaoChn:
      "雄性抚养后代。当 Seadra 正在照顾小宝宝时，它背上的刺会分泌出更浓更强的毒液。",
    descricaoEsp:
      "Son los machos los que crían a la descendencia. Mientras Seadra cuida a sus crías, las espinas en su espalda secretan un veneno más espeso y fuerte.",
  },
  {
    nro: 118,
    som: "./Sons/goldeen.mp3",
    nome: "Goldeen",
    genero: "♂",
    tamanho: 3,
    img: "./pokemons/goldeen.gif",
    imgShiny: "./pokemons/goldeenShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Suas barbatanas dorsais, peitorais e caudais ondulam elegantemente na água. É por isso que é conhecido como o Dançarino da Água.",
    descricaoEua:
      "Its dorsal, pectoral, and caudal fins ripple elegantly in the water. That is why it is known as the Water Dancer.",
    descricaoFra:
      "Ses nageoires dorsale, pectorale et caudale ondulent élégamment dans l'eau. C'est pourquoi il est connu sous le nom de Danseur de l'Eau.",
    descricaoChn:
      "它的背鳍、胸鳍和尾鳍在水中优雅地波动。因此，它被称为水之舞者。",
    descricaoEsp:
      "Sus aletas dorsales, pectorales y caudales ondulan elegantemente en el agua. Es por eso que se le conoce como el Bailarín del Agua.",
  },
  {
    nro: 118,
    som: "./Sons/goldeen.mp3",
    nome: "Goldeen",
    genero: "♀",
    tamanho: 3,
    img: "./pokemons/goldeen-f.gif",
    imgShiny: "./pokemons/goldeen-fShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Suas barbatanas dorsais, peitorais e caudais ondulam elegantemente na água. É por isso que é conhecido como o Dançarino da Água.",
    descricaoEua:
      "Its dorsal, pectoral, and caudal fins ripple elegantly in the water. That is why it is known as the Water Dancer.",
    descricaoFra:
      "Ses nageoires dorsale, pectorale et caudale ondulent élégamment dans l'eau. C'est pourquoi il est connu sous le nom de Danseur de l'Eau.",
    descricaoChn:
      "它的背鳍、胸鳍和尾鳍在水中优雅地波动。因此，它被称为水之舞者。",
    descricaoEsp:
      "Sus aletas dorsales, pectorales y caudales ondulan elegantemente en el agua. Es por eso que se le conoce como el Bailarín del Agua.",
  },
  {
    nro: 119,
    som: "./Sons/seaking.mp3",
    nome: "Seaking",
    genero: "♂",
    tamanho: 4,
    img: "./pokemons/seaking.gif",
    imgShiny: "./pokemons/seakingShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "No outono, seu corpo fica mais gorduroso ao se preparar para propor a um companheiro. Adquire cores bonitas.",
    descricaoEua:
      "In the fall, its body becomes fattier as it prepares to court a mate. It acquires beautiful colors.",
    descricaoFra:
      "En automne, son corps devient plus gras lorsqu'il se prépare à courtiser un partenaire. Il acquiert de belles couleurs.",
    descricaoChn:
      "在秋天，它的身体变得更胖，为了准备向伴侣求偶。它获得了美丽的颜色。",
    descricaoEsp:
      "En otoño, su cuerpo se vuelve más graso mientras se prepara para cortejar a una pareja. Adquiere hermosos colores.",
  },
  {
    nro: 119,
    som: "./Sons/seaking.mp3",
    nome: "Seaking",
    genero: "♀",
    tamanho: 4,
    img: "./pokemons/seaking-f.gif",
    imgShiny: "./pokemons/seaking-fShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "No outono, seu corpo fica mais gorduroso ao se preparar para propor a um companheiro. Adquire cores bonitas.",
    descricaoEua:
      "In the fall, its body becomes fattier as it prepares to court a mate. It acquires beautiful colors.",
    descricaoFra:
      "En automne, son corps devient plus gras lorsqu'il se prépare à courtiser un partenaire. Il acquiert de belles couleurs.",
    descricaoChn:
      "在秋天，它的身体变得更胖，为了准备向伴侣求偶。它获得了美丽的颜色。",
    descricaoEsp:
      "En otoño, su cuerpo se vuelve más graso mientras se prepara para cortejar a una pareja. Adquiere hermosos colores.",
  },
  {
    nro: 120,
    som: "./Sons/staryu.mp3",
    nome: "Staryu",
    genero: "",
    tamanho: 3,
    img: "./pokemons/staryu.gif",
    imgShiny: "./pokemons/staryuShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Se você visitar uma praia no final do verão, poderá ver grupos de Staryus se iluminando em um ritmo constante.",
    descricaoEua:
      "If you visit a beach at the end of summer, you may see groups of Staryus lighting up at a steady rhythm.",
    descricaoFra:
      "Si vous visitez une plage à la fin de l'été, vous pourrez voir des groupes de Staryus s'illuminant à un rythme constant.",
    descricaoChn:
      "如果你在夏末拜访一个海滩，你可能会看到一群Staryus以稳定的节奏发光。",
    descricaoEsp:
      "Si visitas una playa a finales del verano, podrías ver grupos de Staryus iluminándose a un ritmo constante.",
  },
  {
    nro: 121,
    som: "./Sons/starmie.mp3",
    nome: "Starmie",
    genero: "",
    tamanho: 4,
    img: "./pokemons/starmie.gif",
    imgShiny: "./pokemons/starmieShiny.gif",
    tipo: ["Água", "Psíquico"],
    tipoEua: ["Water", "Psychic"],
    tipoFra: ["Eau", "Psy"],
    tipoChn: ["水", "超能力"],
    tipoEsp: ["Agua", "Psíquico"],
    descricao:
      "Este Pokémon tem um órgão conhecido como núcleo. O órgão brilha em sete cores quando Starmie está liberando seus poderosos poderes psíquicos.",
    descricaoEua:
      "This Pokémon has an organ known as a core. The organ glows in seven colors when Starmie is releasing its powerful psychic abilities.",
    descricaoFra:
      "Ce Pokémon possède un organe appelé noyau. L'organe brille de sept couleurs lorsque Starmie libère ses puissantes capacités psychiques.",
    descricaoChn:
      "这个宝可梦有一个被称为核心的器官。当Starmie释放其强大的超能力能力时，核心会发出七种颜色的光。",
    descricaoEsp:
      "Este Pokémon tiene un órgano conocido como núcleo. El órgano brilla en siete colores cuando Starmie está liberando sus poderosas habilidades psíquicas.",
  },
  {
    nro: 122,
    som: "./Sons/mrmime.mp3",
    nome: "Mr. Mime",
    genero: "",
    nomeGalar: "Mr.Mime Galar",
    generoGalar: "",
    tamanho: 5,
    tamanhoGalar: 5,
    img: "./pokemons/mr.mime.gif",
    imgShiny: "./pokemons/mrmimeShiny.gif",
    imgGalar: "./pokemons/mr.mime-galar.gif",
    imgGalarShiny: "./pokemons/mr.mime-galarShiny.gif",
    tipo: ["Psíquico", "Fada"],
    tipoEua: ["Psychic", "Fairy"],
    tipoFra: ["Psy", "Fée"],
    tipoChn: ["超能力", "妖精"],
    tipoEsp: ["Psíquico", "Hada"],
    tipoGalar: ["Psíquico", "Fada"],
    tipoGalarEua: ["Psychic", "Fairy"],
    tipoGalarFra: ["Psy", "Fée"],
    tipoGalarChn: ["超能力", "妖精"],
    tipoGalarEsp: ["Psíquico", "Hada"],
    descricaoGalarEua:
      "Its talent is tap-dancing. It can also manipulate temperatures to create a floor of ice, which this Pokémon can kick up to use as a barrier.",
    descricaoGalarEsp:
      "Su talento es el baile de claqué. También puede manipular las temperaturas para crear un suelo de hielo, que este Pokémon puede levantar para usar como barrera.",
    descricaoGalarFra:
      "Son talent est la danse claquée. Il peut également manipuler les températures pour créer un sol de glace, qu'il peut projeter pour l'utiliser comme barrière.",
    descricaoGalarChn:
      "它的特长是踢踏舞。它还能够操控温度，创造一层冰面，然后将其踢起作为障碍物使用。",
    descricaoGalar:
      "Seu talento é o sapateado. Ele também pode manipular temperaturas para criar um piso de gelo, que esse Pokémon pode chutar para usar como uma barreira.",
    descricao:
      "A largura de suas mãos pode não ser coincidência – muitos cientistas acreditam que suas palmas se tornaram maiores especificamente para a mímica.",
    descricaoEua:
      "The width of its hands may not be a coincidence – many scientists believe its palms became larger specifically for miming.",
    descricaoFra:
      "La largeur de ses mains n'est peut-être pas une coïncidence - de nombreux scientifiques pensent que ses paumes sont devenues plus grandes spécifiquement pour le mime.",
    descricaoChn:
      "它的手掌宽度可能不是巧合——许多科学家认为它的手掌专门变大是为了模仿。",
    descricaoEsp:
      "El ancho de sus manos puede no ser una coincidencia: muchos científicos creen que sus palmas se hicieron más grandes específicamente para la mímica.",
  },
  {
    nro: 123,
    som: "./Sons/scyther.mp3",
    nome: "Scyther",
    genero: "♂",
    tamanho: 5,
    img: "./pokemons/scyther.gif",
    imgShiny: "./pokemons/scytherShiny.gif",
    tipo: ["Inseto", "Voador"],
    tipoEua: ["Bug", "Flying"],
    tipoFra: ["Insecte", "Volant"],
    tipoChn: ["虫", "飞行"],
    tipoEsp: ["Insecto", "Volador"],
    descricao:
      "À medida que Scyther luta mais e mais batalhas, suas foices ficam cada vez mais afiadas. Com um único corte, Scyther pode derrubar uma árvore enorme.",
    descricaoEua:
      "As Scyther fights more and more battles, its scythes get sharper and sharper. With a single cut, Scyther can knock down a huge tree.",
    descricaoFra:
      "À mesure que Scyther lutte de plus en plus de batailles, ses faucilles deviennent de plus en plus aiguisées. Avec une seule coupe, Scyther peut abattre un énorme arbre.",
    descricaoChn:
      "随着Scyther参加更多格斗，它的镰刀变得越来越锋利。只需一次切割，Scyther就能砍倒一棵大树。",
    descricaoEsp:
      "A medida que Scyther lucha más y más batallas, sus guadañas se vuelven cada vez más afiladas. Con un solo corte, Scyther puede derribar un árbol enorme.",
  },
  {
    nro: 123,
    som: "./Sons/scyther.mp3",
    nome: "Scyther",
    genero: "♀",
    tamanho: 5,
    img: "./pokemons/scyther-f.gif",
    imgShiny: "./pokemons/scyther-fShiny.gif",
    tipo: ["Inseto", "Voador"],
    tipoEua: ["Bug", "Flying"],
    tipoFra: ["Insecte", "Volant"],
    tipoChn: ["虫", "飞行"],
    tipoEsp: ["Insecto", "Volador"],
    descricao:
      "À medida que Scyther luta mais e mais batalhas, suas foices ficam cada vez mais afiadas. Com um único corte, Scyther pode derrubar uma árvore enorme.",
    descricaoEua:
      "As Scyther fights more and more battles, its scythes get sharper and sharper. With a single cut, Scyther can knock down a huge tree.",
    descricaoFra:
      "À mesure que Scyther lutte de plus en plus de batailles, ses faucilles deviennent de plus en plus aiguisées. Avec une seule coupe, Scyther peut abattre un énorme arbre.",
    descricaoChn:
      "随着Scyther参加更多格斗，它的镰刀变得越来越锋利。只需一次切割，Scyther就能砍倒一棵大树。",
    descricaoEsp:
      "A medida que Scyther lucha más y más batallas, sus guadañas se vuelven cada vez más afiladas. Con un solo corte, Scyther puede derribar un árbol enorme.",
  },
  {
    nro: 124,
    som: "./Sons/jynx.mp3",
    nome: "Jynx",
    genero: "",
    tamanho: 4,
    img: "./pokemons/jynx.gif",
    imgShiny: "./pokemons/jynxShiny.gif",
    tipo: ["Gelo", "Psíquico"],
    tipoEua: ["Ice", "Psychic"],
    tipoFra: ["Glace", "Psy"],
    tipoChn: ["冰", "超能力"],
    tipoEsp: ["Hielo", "Psíquico"],
    descricao:
      "Em certas partes de Galar, Jynx já foi temida e adorada como a Rainha do Gelo.",
    descricaoEua:
      "In certain parts of Galar, Jynx was once feared and worshiped as the Ice Queen.",
    descricaoFra:
      "Dans certaines parties de Galar, Jynx a autrefois été crainte et adorée comme la Reine de Glace.",
    descricaoChn: "在加拉尔的某些地方，Jynx曾被视为冰雪女王，既害怕又崇拜。",
    descricaoEsp:
      "En algunas partes de Galar, Jynx fue temida y adorada como la Reina del Hielo.",
  },
  {
    nro: 125,
    som: "./Sons/electabuzz.mp3",
    nome: "Electabuzz",
    genero: "",
    tamanho: 4,
    img: "./pokemons/electabuzz.gif",
    imgShiny: "./pokemons/electabuzzShiny.gif",
    tipo: ["Elétrico"],
    tipoEua: ["Electric"],
    tipoFra: ["Électrique"],
    tipoChn: ["电"],
    tipoEsp: ["Eléctrico"],
    descricao:
      "Muitas usinas de energia mantêm Pokémon do tipo terra por perto como uma defesa contra Electabuzz que vem em busca de eletricidade.",
    descricaoEua:
      "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz searching for electricity.",
    descricaoFra:
      "De nombreuses centrales électriques gardent des Pokémon de type Sol à proximité comme défense contre Electabuzz à la recherche d'électricité.",
    descricaoChn:
      "许多电厂会把地面系宝可梦放在附近，以防止Electabuzz寻找电力。",
    descricaoEsp:
      "Muchas plantas de energía mantienen Pokémon de tipo Tierra cerca como defensa contra Electabuzz, que busca electricidad.",
  },
  {
    nro: 126,
    som: "./Sons/magmar.mp3",
    nome: "Magmar",
    genero: "",
    tamanho: 4,
    img: "./pokemons/magmar.gif",
    imgShiny: "./pokemons/magmarShiny.gif",
    tipo: ["Fogo"],
    tipoEua: ["Fire"],
    tipoFra: ["Feu"],
    tipoChn: ["火"],
    tipoEsp: ["Fuego"],
    descricao:
      "Magmar despacha sua presa com fogo. Mas ele se arrepende desse hábito quando percebe que queimou sua presa pretendida em uma batata frita carbonizada.",
    descricaoEua:
      "Magmar deals with its prey by fire. But it regrets this habit when it realizes it has burned its intended prey into a charred fry.",
    descricaoFra:
      "Magmar traite sa proie avec le feu. Mais il regrette cette habitude lorsqu'il se rend compte qu'il a brûlé sa proie dans une frite carbonisée.",
    descricaoChn:
      "Magmar 用火处理猎物。但它在意识到把猎物烧成了焦化的炸薯条后感到后悔。",
    descricaoEsp:
      "Magmar despacha a su presa con fuego. Pero se arrepiente de este hábito cuando se da cuenta de que ha quemado a su presa en una papa frita carbonizada.",
  },
  {
    nro: 127,
    som: "./Sons/pinsir.mp3",
    nome: "Pinsir",
    genero: "",
    tamanho: 4,
    tamanhoMega: 5,
    img: "./pokemons/pinsir.gif",
    imgShiny: "./pokemons/pinsirShiny.gif",
    nomeMega: "Pinsir Mega",
    imgMega: "./pokemons/pinsir-mega.gif",
    imgMegaShiny: "./pokemons/pinsir-megaShiny.gif",
    tipo: ["Inseto"],
    tipoEua: ["Bug"],
    tipoFra: ["Insecte"],
    tipoChn: ["虫"],
    tipoEsp: ["Insecto"],
    tipoMega: ["Inseto", "Voador"],
    tipoMegaEua: ["Bug", "Flying"],
    tipoMegaFra: ["Insecte", "Volant"],
    tipoMegaChn: ["虫", "飞行"],
    tipoMegaEsp: ["Insecto", "Volador"],
    descricaoMega:
      "Quando mega evolui, o ataque e a velocidade de Pinsir aumentam, e ele ganha o tipo voador. Mega Pinsir ganha asas e consegue voar pelos céus. A habilidade Aerilate transforma os golpes do tipo normal em golpes de tipo voador, que são fortalecidos pelo tipo voador de Mega Pinsir.",
    descricaoMegaEua:
      "When Mega evolves, Pinsir's attack and speed increase, and it gains the flying type. Mega Pinsir grows wings and can fly through the skies. The Aerilate ability turns normal-type moves into flying-type moves, which are boosted by Mega Pinsir's flying type.",
    descricaoMegaEsp:
      "Cuando mega evoluciona, el ataque y la velocidad de Pinsir aumentan, y gana el tipo volador. Mega Pinsir obtiene alas y puede volar por los cielos. La habilidad Aerilate convierte los movimientos de tipo normal en movimientos de tipo volador, que se potencian por el tipo volador de Mega Pinsir.",
    descricaoMegaFra:
      "Lorsqu'il méga-évolue, l'attaque et la vitesse de Pinsir augmentent, et il gagne le type vol. Mega Pinsir gagne des ailes et peut voler dans les cieux. La capacité Aerilate transforme les attaques de type normal en attaques de type vol, qui sont renforcées par le type vol de Mega Pinsir.",
    descricaoMegaChn:
      "当Mega进化时，Pinsir的攻击和速度增加，并获得飞行类型。Mega Pinsir长出翅膀，能够飞翔在天空中。Aerilate技能将普通系技能转化为飞行系技能，这些技能受到Mega Pinsir飞行系类型的强化。",
    descricao:
      "Esses Pokémon julgam uns aos outros com base em pinças. Pinças mais grossas e impressionantes aumentam a popularidade com o sexo oposto.",
    descricaoEua:
      "These Pokémon judge each other based on their pincers. Thicker and more impressive pincers increase popularity with the opposite sex.",
    descricaoFra:
      "Ces Pokémon se jugent les uns les autres en fonction de leurs pinces. Des pinces plus épaisses et plus impressionnantes augmentent leur popularité auprès du sexe opposé.",
    descricaoChn:
      "这些宝可梦根据钳子互相评判。更厚、更引人注目的钳子能提高与异性之间的受欢迎度。",
    descricaoEsp:
      "Estos Pokémon se juzgan entre sí en función de sus pinzas. Las pinzas más gruesas e impresionantes aumentan la popularidad con el sexo opuesto.",
  },
  {
    nro: 128,
    som: "./Sons/tauros.mp3",
    nome: "Tauros",
    genero: "",
    tamanho: 5,
    img: "./pokemons/tauros.gif",
    imgShiny: "./pokemons/taurosShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    descricao:
      "Quando Tauros começa a se chicotear com suas caudas, é um aviso de que o Pokémon está prestes a atacar com uma velocidade impressionante.",
    descricaoEua:
      "When Tauros starts whipping its tails, it's a warning that the Pokémon is about to attack with impressive speed.",
    descricaoFra:
      "Lorsque Tauros commence à fouetter ses queues, c'est un avertissement que le Pokémon va attaquer avec une vitesse impressionnante.",
    descricaoChn:
      "当Tauros开始甩动尾巴时，这是警告，宝可梦即将以令人印象深刻的速度发动攻击。",
    descricaoEsp:
      "Cuando Tauros comienza a azotar con sus colas, es una advertencia de que el Pokémon está a punto de atacar con una velocidad impresionante.",
  },
  {
    nro: 129,
    som: "./Sons/magikarp.mp3",
    nome: "Magikarp",
    genero: "♂",
    tamanho: 3,
    img: "./pokemons/magikarp.gif",
    imgShiny: "./pokemons/magikarpShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "É praticamente inútil em termos de potência e velocidade. É o Pokémon mais fraco e patético do mundo.",
    descricaoEua:
      "It's practically useless in terms of power and speed. It's the weakest and most pathetic Pokémon in the world.",
    descricaoFra:
      "Il est pratiquement inutile en termes de puissance et de vitesse. C'est le Pokémon le plus faible et le plus pathétique du monde.",
    descricaoChn: "在力量和速度方面几乎没用。它是世界上最弱、最可悲的宝可梦。",
    descricaoEsp:
      "Es prácticamente inútil en términos de poder y velocidad. Es el Pokémon más débil y patético del mundo.",
  },
  {
    nro: 129,
    som: "./Sons/magikarp.mp3",
    nome: "Magikarp",
    genero: "♀",
    tamanho: 3,
    img: "./pokemons/magikarp-f.gif",
    imgShiny: "./pokemons/magikarp-fShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "É praticamente inútil em termos de potência e velocidade. É o Pokémon mais fraco e patético do mundo.",
    descricaoEua:
      "It's practically useless in terms of power and speed. It's the weakest and most pathetic Pokémon in the world.",
    descricaoFra:
      "Il est pratiquement inutile en termes de puissance et de vitesse. C'est le Pokémon le plus faible et le plus pathétique du monde.",
    descricaoChn: "在力量和速度方面几乎没用。它是世界上最弱、最可悲的宝可梦。",
    descricaoEsp:
      "Es prácticamente inútil en términos de poder y velocidad. Es el Pokémon más débil y patético del mundo.",
  },
  {
    nro: 130,
    som: "./Sons/gyarados.mp3",
    nome: "Gyarados",
    genero: "♂",
    tamanho: 5,
    tamanhoMega: 6,
    img: "./pokemons/gyarados.gif",
    imgShiny: "./pokemons/gyaradosShiny.gif",
    nomeMega: "Gyarados Mega",
    imgMega: "./pokemons/gyarados-mega.gif",
    imgMegaShiny: "./pokemons/gyarados-megaShiny.gif",
    tipo: ["Água", "Voador"],
    tipoEua: ["Water", "Flying"],
    tipoFra: ["Eau", "Volant"],
    tipoChn: ["水", "飞行"],
    tipoEsp: ["Agua", "Volador"],
    tipoMega: ["Água", "Escuro"],
    tipoMegaEua: ["Water", "Dark"],
    tipoMegaFra: ["Eau", "Sombre"],
    tipoMegaChn: ["水", "黑暗"],
    tipoMegaEsp: ["Agua", "Oscuro"],
    descricaoMega:
      "Após a mega evolução, Gyarados torna-se mais agressivo do que nunca e muda para um tipo água/noturno. Isto altera as suas fraquezas, o que lhe permite lutar eficazmente contra vários pokémons diferentes. Só um treinador com um vínculo muito próximo a Gyarados poderá batalhar com o Mega Gyarados. Com o enorme aumento de suas estatísticas de ataque, defesa e defesa especial, este pokémon ficará com fortes capacidades ofensivas e defensivas.",
    descricaoMegaEua:
      "After Mega Evolution, Gyarados becomes more aggressive than ever and changes to a Water/Dark type. This alters its weaknesses, allowing it to fight effectively against many different Pokémon. Only a trainer with a very close bond with Gyarados can battle with Mega Gyarados. With a huge increase in its attack, defense, and special defense stats, this Pokémon will have strong offensive and defensive capabilities.",
    descricaoMegaEsp:
      "Después de la mega evolución, Gyarados se vuelve más agresivo que nunca y cambia a un tipo agua/siniestro. Esto cambia sus debilidades, lo que le permite luchar eficazmente contra varios pokémon diferentes. Solo un entrenador con un vínculo muy cercano con Gyarados podrá luchar con Mega Gyarados. Con un gran aumento en sus estadísticas de ataque, defensa y defensa especial, este pokémon tendrá fuertes capacidades ofensivas y defensivas.",
    descricaoMegaFra:
      "Après la méga-évolution, Gyarados devient plus agressif que jamais et change pour un type Eau/Ténèbres. Cela modifie ses faiblesses, ce qui lui permet de combattre efficacement contre plusieurs types de Pokémon. Seul un dresseur ayant un lien très proche avec Gyarados pourra se battre avec Mega Gyarados. Avec une énorme augmentation de ses statistiques d'attaque, de défense et de défense spéciale, ce Pokémon disposera de puissantes capacités offensives et défensives.",
    descricaoMegaChn:
      "在Mega进化后，Gyarados变得比以往更具攻击性，并转变为水/黑暗类型。这改变了它的弱点，使它能够有效地与多种不同的宝可梦作战。只有与Gyarados有着非常紧密联系的训练师才能与Mega Gyarados对战。通过巨大的攻击、防御和特殊防御统计数据的提升，这只宝可梦将具备强大的进攻和防守能力。",
    descricao:
      "Tem uma natureza extremamente agressiva. O Hyper Beam que dispara de sua boca incinera totalmente todos os alvos.",
    descricaoEua:
      "It has an extremely aggressive nature. The Hyper Beam it fires from its mouth completely incinerates all targets.",
    descricaoFra:
      "Il a une nature extrêmement agressive. Le Hyper Beam qu'il tire de sa bouche incinère complètement toutes les cibles.",
    descricaoChn:
      "它有着极其攻击性的天性。它从嘴里发射的超级光束完全焚毁所有目标。",
    descricaoEsp:
      "Tiene una naturaleza extremadamente agresiva. El Hyper Beam que dispara de su boca incinera completamente todos los objetivos.",
  },
  {
    nro: 130,
    som: "./Sons/gyarados.mp3",
    nome: "Gyarados",
    genero: "♀",
    tamanho: 5,
    tamanhoMega: 6,
    img: "./pokemons/gyarados-f.gif",
    imgShiny: "./pokemons/gyarados-fShiny.gif",
    nomeMega: "Gyarados Mega",
    imgMega: "./pokemons/gyarados-mega.gif",
    imgMegaShiny: "./pokemons/gyarados-megaShiny.gif",
    tipo: ["Água", "Voador"],
    tipoEua: ["Water", "Flying"],
    tipoFra: ["Eau", "Volant"],
    tipoChn: ["水", "飞行"],
    tipoEsp: ["Agua", "Volador"],
    tipoMega: ["Água", "Escuro"],
    tipoMegaEua: ["Water", "Dark"],
    tipoMegaFra: ["Eau", "Sombre"],
    tipoMegaChn: ["水", "黑暗"],
    tipoMegaEsp: ["Agua", "Oscuro"],
    descricaoMega:
      "Após a mega evolução, Gyarados torna-se mais agressivo do que nunca e muda para um tipo água/noturno. Isto altera as suas fraquezas, o que lhe permite lutar eficazmente contra vários pokémons diferentes. Só um treinador com um vínculo muito próximo a Gyarados poderá batalhar com o Mega Gyarados. Com o enorme aumento de suas estatísticas de ataque, defesa e defesa especial, este pokémon ficará com fortes capacidades ofensivas e defensivas.",
    descricaoMegaEua:
      "After Mega Evolution, Gyarados becomes more aggressive than ever and changes to a Water/Dark type. This alters its weaknesses, allowing it to fight effectively against many different Pokémon. Only a trainer with a very close bond with Gyarados can battle with Mega Gyarados. With a huge increase in its attack, defense, and special defense stats, this Pokémon will have strong offensive and defensive capabilities.",
    descricaoMegaEsp:
      "Después de la mega evolución, Gyarados se vuelve más agresivo que nunca y cambia a un tipo agua/siniestro. Esto cambia sus debilidades, lo que le permite luchar eficazmente contra varios pokémon diferentes. Solo un entrenador con un vínculo muy cercano con Gyarados podrá luchar con Mega Gyarados. Con un gran aumento en sus estadísticas de ataque, defensa y defensa especial, este pokémon tendrá fuertes capacidades ofensivas y defensivas.",
    descricaoMegaFra:
      "Après la méga-évolution, Gyarados devient plus agressif que jamais et change pour un type Eau/Ténèbres. Cela modifie ses faiblesses, ce qui lui permet de combattre efficacement contre plusieurs types de Pokémon. Seul un dresseur ayant un lien très proche avec Gyarados pourra se battre avec Mega Gyarados. Avec une énorme augmentation de ses statistiques d'attaque, de défense et de défense spéciale, ce Pokémon disposera de puissantes capacités offensives et défensives.",
    descricaoMegaChn:
      "在Mega进化后，Gyarados变得比以往更具攻击性，并转变为水/黑暗类型。这改变了它的弱点，使它能够有效地与多种不同的宝可梦作战。只有与Gyarados有着非常紧密联系的训练师才能与Mega Gyarados对战。通过巨大的攻击、防御和特殊防御统计数据的提升，这只宝可梦将具备强大的进攻和防守能力。",
    descricao:
      "Tem uma natureza extremamente agressiva. O Hyper Beam que dispara de sua boca incinera totalmente todos os alvos.",
    descricaoEua:
      "It has an extremely aggressive nature. The Hyper Beam it fires from its mouth completely incinerates all targets.",
    descricaoFra:
      "Il a une nature extrêmement agressive. Le Hyper Beam qu'il tire de sa bouche incinère complètement toutes les cibles.",
    descricaoChn:
      "它有着极其攻击性的天性。它从嘴里发射的超级光束完全焚毁所有目标。",
    descricaoEsp:
      "Tiene una naturaleza extremadamente agresiva. El Hyper Beam que dispara de su boca incinera completamente todos los objetivos.",
  },
  {
    nro: 131,
    som: "./Sons/lapras.mp3",
    nome: "Lapras",
    tamanho: 5,
    genero: "",
    img: "./pokemons/lapras.gif",
    imgShiny: "./pokemons/laprasShiny.gif",
    nomeGigantamax: "Lapras Gigantamax",
    imgGigantamax: "./pokemons/lapras-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/lapras-gigantamaxShiny.gif",
    tipo: ["Água", "Gelo"],
    tipoEua: ["Water", "Ice"],
    tipoFra: ["Eau", "Glace"],
    tipoChn: ["水", "冰"],
    tipoEsp: ["Agua", "Hielo"],
    tipoGigantamax: ["Água", "Gelo"],
    tipoGigantamaxEua: ["Water", "Ice"],
    tipoGigantamaxFra: ["Eau", "Glace"],
    tipoGigantamaxChn: ["水", "冰"],
    tipoGigantamaxEsp: ["Agua", "Hielo"],
    descricaoGigantamax:
      "Mais de 5.000 pessoas podem viajar em sua concha ao mesmo tempo. E é um passeio muito confortável, sem o mais leve tremor ou balanço. Ele se envolve com um enorme anel de partículas de gelo acumuladas. Ele usa o anel para esmagar qualquer iceberg que possa impedir sua natação graciosa.",
    descricaoGigantamaxEua:
      "Over 5,000 people can travel in its shell at the same time. And it’s a very comfortable ride, without the slightest shake or sway. It is surrounded by a huge ring of accumulated ice particles. It uses the ring to crush any iceberg that might impede its graceful swimming.",
    descricaoGigantamaxEsp:
      "Más de 5,000 personas pueden viajar en su concha al mismo tiempo. Y es un paseo muy cómodo, sin el más leve temblor o balanceo. Está rodeado por un enorme anillo de partículas de hielo acumuladas. Usa el anillo para aplastar cualquier iceberg que pueda impedir su nado gracioso.",
    descricaoGigantamaxFra:
      "Plus de 5 000 personnes peuvent voyager dans sa coquille en même temps. Et c'est un voyage très confortable, sans le moindre tremblement ou balancement. Il est entouré d'un énorme anneau de particules de glace accumulées. Il utilise cet anneau pour écraser tout iceberg qui pourrait entraver sa nage gracieuse.",
    descricaoGigantamaxChn:
      "超过5,000人可以同时乘坐它的贝壳旅行。而且这是一次非常舒适的旅行，丝毫没有颤抖或摇晃。它被大量积聚的冰粒环绕。它用这个环来压碎任何可能妨碍它优雅游泳的冰山。",
    descricao:
      "Um Pokémon inteligente e bondoso, ele desliza pela superfície do mar enquanto sua bela música ecoa ao seu redor.",
    descricaoEua:
      "A smart and kind Pokémon, it glides across the surface of the sea while its beautiful music echoes around it.",
    descricaoFra:
      "Un Pokémon intelligent et gentil, il glisse à la surface de la mer pendant que sa belle musique résonne autour de lui.",
    descricaoChn:
      "一个聪明且善良的宝可梦，它在海面上滑行，同时它美丽的音乐在周围回响。",
    descricaoEsp:
      "Un Pokémon inteligente y amable, se desliza sobre la superficie del mar mientras su hermosa música resuena a su alrededor.",
  },
  {
    nro: 132,
    tamanho: 2,
    som: "./Sons/ditto.mp3",
    nome: "Ditto",
    genero: "",
    img: "./pokemons/ditto.gif",
    imgShiny: "./pokemons/dittoShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    descricao:
      "Ele pode reconstituir toda a sua estrutura celular para se transformar no que vê, mas volta ao normal quando relaxa.",
    descricaoEua:
      "It can reconstitute its entire cellular structure to transform into what it sees, but returns to normal when it relaxes.",
    descricaoFra:
      "Il peut reconstituer toute sa structure cellulaire pour se transformer en ce qu'il voit, mais revient à la normale lorsqu'il se détend.",
    descricaoChn:
      "它可以重组整个细胞结构，变成它看到的任何东西，但在放松时会恢复正常。",
    descricaoEsp:
      "Puede reconstruir toda su estructura celular para transformarse en lo que ve, pero vuelve a la normalidad cuando se relaja.",
  },
  {
    nro: 133,
    som: "./Sons/eevee.mp3",
    nome: "Eevee",
    genero: "",
    tamanho: 2,
    tamanhoGigantamax: 6,
    img: "./pokemons/eevee.gif",
    imgShiny: "./pokemons/eeveeShiny.gif",
    nomeGigantamax: "Eevee Gigantamax",
    imgGigantamax: "./pokemons/eevee-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/eevee-gigantamaxShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    tipoGigantamax: ["Normal"],
    tipoGigantamaxEua: ["Normal"],
    tipoGigantamaxFra: ["Normal"],
    tipoGigantamaxChn: ["普通"],
    tipoGigantamaxEsp: ["Normal"],
    descricaoGigantamax:
      "A energia Gigantamax aumentou a fofura do pelo em volta do pescoço de Eevee, tornando-se extremamente macio e exuberante. A pele envolverá um inimigo, capturando seu corpo e cativando sua mente. Qualquer adversário pego por este pelo é seduzido pelo Eevee e perde a vontade de lutar. Tendo ficado ainda mais amigável e mais inocente, Eevee tenta brincar com qualquer um, mas acaba esmagando os outros com seu corpo imenso.",
    descricaoGigantamaxEua:
      "The Gigantamax energy increased the fluffiness of the fur around Eevee's neck, making it extremely soft and lush. The fur will wrap around an enemy, capturing their body and captivating their mind. Any opponent caught by this fur is seduced by Eevee and loses the will to fight. Having become even friendlier and more innocent, Eevee tries to play with anyone but ends up crushing others with its massive body.",
    descricaoGigantamaxEsp:
      "La energía Gigantamax aumentó la suavidad del pelaje alrededor del cuello de Eevee, haciéndolo extremadamente suave y exuberante. El pelaje envolverá a un enemigo, atrapando su cuerpo y cautivando su mente. Cualquier oponente atrapado por este pelaje es seducido por Eevee y pierde la voluntad de luchar. Habiéndose vuelto aún más amigable e inocente, Eevee intenta jugar con cualquiera, pero termina aplastando a los demás con su enorme cuerpo.",
    descricaoGigantamaxFra:
      "L'énergie Gigantamax a augmenté la douceur de la fourrure autour du cou d'Eevee, la rendant extrêmement douce et luxuriante. La fourrure enveloppe un ennemi, capturant son corps et captivant son esprit. Tout adversaire attrapé par cette fourrure est séduit par Eevee et perdra la volonté de se battre. Devenu encore plus amical et innocent, Eevee essaie de jouer avec n'importe qui, mais finit par écraser les autres avec son corps massif.",
    descricaoGigantamaxChn:
      "巨化能量增强了伊布脖部周围毛发的柔软度，使其变得极为柔软和丰盈。毛发会缠绕住敌人，捕获其身体并吸引其心灵。任何被这些毛发抓住的对手都会被伊布诱惑，失去战斗的意志。伊布变得更加友好和天真，试图与任何人玩耍，但最终用自己巨大的身体压垮其他人。",
    descricao:
      "Tem a capacidade de alterar a composição do seu corpo para se adequar ao ambiente circundante.",
    descricaoEua:
      "It has the ability to alter the composition of its body to adapt to the surrounding environment.",
    descricaoFra:
      "Il a la capacité de modifier la composition de son corps pour s'adapter à l'environnement qui l'entoure.",
    descricaoChn: "它有能力改变身体的组成，以适应周围的环境。",
    descricaoEsp:
      "Tiene la capacidad de alterar la composición de su cuerpo para adaptarse al entorno circundante.",
  },
  {
    nro: 134,
    tamanho: 4,
    som: "./Sons/vaporeon.mp3",
    nome: "Vaporeon",
    genero: "",
    img: "./pokemons/vaporeon.gif",
    imgShiny: "./pokemons/vaporeonShiny.gif",
    tipo: ["Água"],
    tipoEua: ["Water"],
    tipoFra: ["Eau"],
    tipoChn: ["水"],
    tipoEsp: ["Agua"],
    descricao:
      "Quando as barbatanas do Vaporeon começam a vibrar, é sinal de que a chuva virá dentro de algumas horas.",
    descricaoEua:
      "When Vaporeon's fins start to vibrate, it is a sign that rain will come within a few hours.",
    descricaoFra:
      "Lorsque les nageoires de Vaporeon commencent à vibrer, c'est un signe que la pluie viendra dans quelques heures.",
    descricaoChn: "当Vaporeon的鳍开始振动时，意味着几小时内将下雨。",
    descricaoEsp:
      "Cuando las aletas de Vaporeon comienzan a vibrar, es señal de que la lluvia vendrá en pocas horas.",
  },
  {
    nro: 135,
    tamanho: 4,
    som: "./Sons/jolteon.mp3",
    nome: "Jolteon",
    genero: "",
    img: "./pokemons/jolteon.gif",
    imgShiny: "./pokemons/jolteonShiny.gif",
    tipo: ["Elétrico"],
    tipoEua: ["Electric"],
    tipoFra: ["Électrique"],
    tipoChn: ["电"],
    tipoEsp: ["Eléctrico"],
    descricao:
      "Se estiver irritado ou assustado, a pele por todo o corpo se eriça como agulhas afiadas que perfuram os inimigos.",
    descricaoEua:
      "When it is angry or frightened, the skin all over its body bristles like sharp needles that pierce its enemies.",
    descricaoFra:
      "Lorsqu'il est en colère ou effrayé, la peau de tout son corps se hérisse comme des aiguilles acérées qui transpercent ses ennemis.",
    descricaoChn:
      "当它生气或害怕时，整个身体的皮肤会像锋利的针一样竖起来，刺穿敌人。",
    descricaoEsp:
      "Cuando está enojado o asustado, la piel de todo su cuerpo se eriza como agujas afiladas que perforan a los enemigos.",
  },
  {
    nro: 136,
    tamanho: 4,
    som: "./Sons/flareon.mp3",
    nome: "Flareon",
    genero: "",
    img: "./pokemons/flareon.gif",
    imgShiny: "./pokemons/flareonShiny.gif",
    tipo: ["Fogo"],
    tipoEua: ["Fire"],
    tipoFra: ["Feu"],
    tipoChn: ["火"],
    tipoEsp: ["Fuego"],
    descricao:
      "Depois de armazenar calor suficiente, a temperatura corporal deste Pokémon pode atingir até 1.700 graus Fahrenheit.",
    descricaoEua:
      "After storing enough heat, this Pokémon's body temperature can reach up to 1,700 degrees Fahrenheit.",
    descricaoFra:
      "Après avoir emmagasiné suffisamment de chaleur, la température corporelle de ce Pokémon peut atteindre jusqu'à 1 700 degrés Fahrenheit.",
    descricaoChn: "在储存足够的热量后，这只宝可梦的体温可以达到1700华氏度。",
    descricaoEsp:
      "Después de almacenar suficiente calor, la temperatura corporal de este Pokémon puede alcanzar hasta 1.700 grados Fahrenheit.",
  },
  {
    nro: 137,
    som: "./Sons/porygon.mp3",
    nome: "Porygon",
    tamanho: 4,
    genero: "",
    img: "./pokemons/porygon.gif",
    imgShiny: "./pokemons/porygonShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    descricao:
      "Tecnologia de ponta foi usada para criar Porygon. Foi o primeiro Pokémon artificial a ser criado via programação de computador.",
    descricaoEua:
      "Cutting-edge technology was used to create Porygon. It was the first artificial Pokémon to be created through computer programming.",
    descricaoFra:
      "La technologie de pointe a été utilisée pour créer Porygon. C'était le premier Pokémon artificiel créé par programmation informatique.",
    descricaoChn:
      "使用尖端技术创建了Porygon。它是第一个通过计算机编程创建的人工宝可梦。",
    descricaoEsp:
      "Se utilizó tecnología avanzada para crear a Porygon. Fue el primer Pokémon artificial creado mediante programación de computadora.",
  },
  {
    nro: 138,
    som: "./Sons/omanyte.mp3",
    nome: "Omanyte",
    tamanho: 2,
    genero: "",
    img: "./pokemons/omanyte.gif",
    imgShiny: "./pokemons/omanyteShiny.gif",
    tipo: ["Rochoso", "Água"],
    tipoEua: ["Rock", "Water"],
    tipoFra: ["Roche", "Eau"],
    tipoChn: ["岩石", "水"],
    tipoEsp: ["Roca", "Agua"],
    descricao:
      "Como alguns omanitas conseguem escapar após serem restaurados ou são soltos na natureza por pessoas, essa espécie está se tornando um problema.",
    descricaoEua:
      "As some Omanytes are able to escape after being restored or are released into the wild by people, this species is becoming a problem.",
    descricaoFra:
      "Comme certains Omanytes réussissent à s'échapper après avoir été restaurés ou sont relâchés dans la nature par les gens, cette espèce devient un problème.",
    descricaoChn:
      "由于一些Omanytes在恢复后能够逃脱或被人们释放到野外，这个物种正成为一个问题。",
    descricaoEsp:
      "Como algunos Omanytes logran escapar después de ser restaurados o son liberados en la naturaleza por personas, esta especie se está convirtiendo en un problema.",
  },
  {
    nro: 139,
    tamanho: 4,
    som: "./Sons/omastar.mp3",
    nome: "Omastar",
    genero: "",
    img: "./pokemons/omastar.gif",
    imgShiny: "./pokemons/omastarShiny.gif",
    tipo: ["Rochoso", "Água"],
    tipoEua: ["Rock", "Water"],
    tipoFra: ["Roche", "Eau"],
    tipoChn: ["岩石", "水"],
    tipoEsp: ["Roca", "Agua"],
    descricao:
      "Pesado por uma concha grande e pesada, Omastar não conseguia se mover muito rápido. Alguns dizem que foi extinto porque não conseguia pegar comida.",
    descricaoEua:
      "Weighed down by a large and heavy shell, Omastar couldn’t move very quickly. Some say it became extinct because it couldn’t catch food.",
    descricaoFra:
      "Alourdi par une coquille grande et lourde, Omastar ne pouvait pas se déplacer très rapidement. Certains disent qu'il s'est éteint parce qu'il ne pouvait pas attraper de nourriture.",
    descricaoChn:
      "由于一个大而沉重的壳，Omastar无法快速移动。有人说它已经灭绝，因为它无法捕捉食物。",
    descricaoEsp:
      "Pesado por una concha grande y pesada, Omastar no podía moverse muy rápido. Algunos dicen que se extinguió porque no podía atrapar comida.",
  },
  {
    nro: 140,
    tamanho: 1,
    som: "./Sons/kabuto.mp3",
    nome: "Kabuto",
    genero: "",
    img: "./pokemons/kabuto.gif",
    imgShiny: "./pokemons/kabutoShiny.gif",
    tipo: ["Rochoso", "Água"],
    tipoEua: ["Rock", "Water"],
    tipoFra: ["Roche", "Eau"],
    tipoChn: ["岩石", "水"],
    tipoEsp: ["Roca", "Agua"],
    descricao:
      "Esta espécie está quase totalmente extinta. Kabuto muda a cada três dias, tornando suas conchas cada vez mais duras.",
    descricaoEua:
      "This species is nearly completely extinct. Kabuto changes every three days, making its shell harder each time.",
    descricaoFra:
      "Cette espèce est presque complètement éteinte. Kabuto change tous les trois jours, rendant sa coquille de plus en plus dure.",
    descricaoChn:
      "这个物种几乎完全灭绝。Kabuto每三天就会变化一次，使它的壳越来越坚硬。",
    descricaoEsp:
      "Esta especie está casi completamente extinta. Kabuto cambia cada tres días, haciendo que su caparazón se vuelva más duro cada vez.",
  },
  {
    nro: 141,
    tamanho: 5,
    som: "./Sons/kabutops.mp3",
    nome: "Kabutops",
    genero: "",
    img: "./pokemons/kabutops.gif",
    imgShiny: "./pokemons/kabutopsShiny.gif",
    tipo: ["Rochoso", "Água"],
    tipoEua: ["Rock", "Water"],
    tipoFra: ["Roche", "Eau"],
    tipoChn: ["岩石", "水"],
    tipoEsp: ["Roca", "Agua"],
    descricao:
      "Kabutops corta sua presa e suga os fluidos. As partes do corpo descartadas se tornam comida para outros Pokémon.",
    descricaoEua:
      "Kabutops cuts its prey and sucks its fluids. The discarded body parts become food for other Pokémon.",
    descricaoFra:
      "Kabutops coupe sa proie et aspire ses fluides. Les parties du corps jetées deviennent de la nourriture pour d'autres Pokémon.",
    descricaoChn:
      "Kabutops切割猎物并吸取其液体。丢弃的身体部位成了其他宝可梦的食物。",
    descricaoEsp:
      "Kabutops corta a su presa y succiona sus fluidos. Las partes del cuerpo descartadas se convierten en comida para otros Pokémon.",
  },
  {
    nro: 142,
    tamanho:6,
    tamanhoMega:6,
    som: "./Sons/aerodactyl.mp3",
    nome: "Aerodactyl",
    genero: "",
    img: "./pokemons/aerodactyl.gif",
    imgShiny: "./pokemons/aerodactylShiny.gif",
    nomeMega: "Aerodactyl Mega",
    imgMega: "./pokemons/aerodactyl-mega.gif",
    imgMegaShiny: "./pokemons/aerodactyl-megaShiny.gif",
    tipo: ["Rochoso", "Voador"],
    tipoEua: ["Rock", "Flying"],
    tipoFra: ["Roche", "Volant"],
    tipoChn: ["岩石", "飞行"],
    tipoEsp: ["Roca", "Volador"],
    tipoMega: ["Rochoso", "Voador"],
    tipoMegaEua: ["Rock", "Flying"],
    tipoMegaFra: ["Roche", "Volant"],
    tipoMegaChn: ["岩石", "飞行"],
    tipoMegaEsp: ["Roca", "Volador"],
    descricaoMega:
      "Aerodactyl é um pokémon restaurado de um fóssil e alguns pesquisadores insistem que a sua imagem mega evoluída é o verdadeiro aspecto que Aerodactyl tinha antes de ser fossilizado. A mega evolução de Aerodactyl faz com que seu corpo comece a se transformar em pedra. Aerodactyl sempre foi um pokémon rápido, mas a mega evolução torna-o ainda mais veloz. Além disso, seu ataque também aumenta.",
    descricaoMegaEua:
      "Aerodactyl is a Pokémon restored from a fossil, and some researchers insist that its mega evolved form is the true appearance it had before being fossilized. The mega evolution of Aerodactyl causes its body to begin transforming into stone. Aerodactyl has always been a fast Pokémon, but mega evolution makes it even faster. Additionally, its attack also increases.",
    descricaoMegaEsp:
      "Aerodactyl es un Pokémon restaurado de un fósil, y algunos investigadores insisten en que su imagen mega evolucionada es el verdadero aspecto que Aerodactyl tenía antes de ser fosilizado. La mega evolución de Aerodactyl hace que su cuerpo comience a transformarse en piedra. Aerodactyl siempre ha sido un Pokémon rápido, pero la mega evolución lo hace aún más veloz. Además, su ataque también aumenta.",
    descricaoMegaFra:
      "Aerodactyl est un Pokémon restauré à partir d'un fossile, et certains chercheurs insistent sur le fait que sa forme méga-évoluée est l'apparence réelle qu'Aerodactyl avait avant d'être fossilisé. La méga-évolution d'Aerodactyl fait commencer la transformation de son corps en pierre. Aerodactyl a toujours été un Pokémon rapide, mais la méga-évolution le rend encore plus rapide. De plus, son attaque augmente également.",
    descricaoMegaChn:
      "化石恢复的化石翼龙，有些研究人员坚持认为，它的超级进化形态才是化石翼龙在被化石化之前的真实模样。化石翼龙的超级进化使它的身体开始变成石质。化石翼龙一直是个快速的宝可梦，但超级进化让它变得更快。而且，它的攻击力也大幅提升。",
    descricao:
      "Este é um Pokémon feroz dos tempos antigos. Aparentemente, mesmo a tecnologia moderna é incapaz de produzir um espécime perfeitamente restaurado.",
    descricaoEua:
      "This is a fierce Pokémon from ancient times. Apparently, even modern technology is unable to produce a perfectly restored specimen.",
    descricaoFra:
      "C'est un Pokémon féroce des temps anciens. Apparemment, même la technologie moderne est incapable de produire un spécimen parfaitement restauré.",
    descricaoChn:
      "这是一个来自古代的凶猛宝可梦。显然，现代技术无法生产完美恢复的标本。",
    descricaoEsp:
      "Este es un Pokémon feroz de tiempos antiguos. Aparentemente, incluso la tecnología moderna no puede producir un espécimen perfectamente restaurado.",
  },
  {
    nro: 143,
    tamanho:5,
    som: "./Sons/snorlax.mp3",
    nome: "Snorlax",
    genero: "",
    img: "./pokemons/snorlax.gif",
    imgShiny: "./pokemons/snorlaxShiny.gif",
    nomeGigantamax: "Snorlax Gigantamax",
    imgGigantamax: "./pokemons/Snorlax-gigantamax.gif",
    imgGigantamaxShiny: "./pokemons/Snorlax-gigantamaxShiny.gif",
    tipo: ["Normal"],
    tipoEua: ["Normal"],
    tipoFra: ["Normal"],
    tipoChn: ["普通"],
    tipoEsp: ["Normal"],
    tipoGigantamax: ["Normal"],
    tipoGigantamaxEua: ["Normal"],
    tipoGigantamaxFra: ["Normal"],
    tipoGigantamaxChn: ["普通"],
    tipoGigantamaxEsp: ["Normal"],
    descricaoGigantamax:
      "A energia Gigantamax afetou sementes perdidas e até mesmo pequenas pedras que grudaram no corpo de Snorlax, fazendo-os crescer até um tamanho enorme. Sendo terrivelmente forte, este pokémon é do tamanho de uma montanha, e se move tanto quanto uma também.",
    descricaoGigantamaxEua:
      "The Gigantamax energy affected lost seeds and even small rocks that stuck to Snorlax's body, making them grow to an enormous size. Terribly strong, this Pokémon is as big as a mountain and moves as much as one too.",
    descricaoGigantamaxEsp:
      "La energía Gigantamax afectó semillas perdidas e incluso pequeñas piedras que se pegaron al cuerpo de Snorlax, haciendo que crecieran hasta un tamaño enorme. Terriblemente fuerte, este Pokémon es del tamaño de una montaña y se mueve tanto como una.",
    descricaoGigantamaxFra:
      "L'énergie Gigantamax a affecté des graines perdues et même de petites pierres qui se sont collées au corps de Snorlax, les faisant grandir jusqu'à une taille énorme. Terriblement fort, ce Pokémon est aussi grand qu'une montagne et se déplace autant qu'une.",
    descricaoGigantamaxChn:
      "Gigantamax的能量影响了遗失的种子，甚至是粘在巨钳鱼身体上的小石头，使它们增长到巨大的尺寸。这个宝可梦强大无比，像一座山一样大，移动起来也像山一样缓慢。",
    descricao:
      "Ele não fica satisfeito a menos que coma mais de 880 quilos de comida todos os dias. Quando termina de comer, ele adormece prontamente.",
    descricaoEua:
      "It is not satisfied unless it eats over 880 kilograms of food every day. When it finishes eating, it promptly falls asleep.",
    descricaoFra:
      "Il n'est pas satisfait à moins de manger plus de 880 kilos de nourriture chaque jour. Lorsqu'il a fini de manger, il s'endort immédiatement.",
    descricaoChn:
      "除非每天吃超过880公斤的食物，否则它不会满足。吃完后，它会立刻进入睡眠。",
    descricaoEsp:
      "No está satisfecho a menos que coma más de 880 kilogramos de comida todos los días. Cuando termina de comer, se duerme rápidamente.",
  },
  {
    nro: 144,
    tamanho:6,
    som: "./Sons/articuno.mp3",
    nome: "Articuno",
    genero: "",
    img: "./pokemons/articuno.gif",
    imgShiny: "./pokemons/articunoShiny.gif",
    tipo: ["Gelo", "Voador"],
    tipoEua: ["Ice", "Flying"],
    tipoFra: ["Glace", "Volant"],
    tipoChn: ["冰", "飞行"],
    tipoEsp: ["Hielo", "Volador"],
    descricao:
      "Dizem que as belas asas azuis deste Pokémon são feitas de gelo. Articuno voa sobre montanhas nevadas, sua longa cauda esvoaçando atrás dele.",
    descricaoEua:
      "It is said that the beautiful blue wings of this Pokémon are made of ice. Articuno flies over snowy mountains, its long tail fluttering behind it.",
    descricaoFra:
      "On dit que les magnifiques ailes bleues de ce Pokémon sont faites de glace. Articuno vole au-dessus des montagnes enneigées, sa longue queue flottant derrière lui.",
    descricaoChn:
      "据说这个宝可梦美丽的蓝色翅膀是由冰做成的。Articuno飞翔在雪山上，长尾巴在它后面飘动。",
    descricaoEsp:
      "Se dice que las hermosas alas azules de este Pokémon están hechas de hielo. Articuno vuela sobre montañas nevadas, su larga cola ondeando detrás de él.",
  },
  {
    nro: 145,
    tamanho:5,
    som: "./Sons/zapdos.mp3",
    nome: "Zapdos",
    genero: "",
    img: "./pokemons/zapdos.gif",
    imgShiny: "./pokemons/zapdosShiny.gif",
    tipo: ["Elétrico", "Voador"],
    tipoEua: ["Electric", "Flying"],
    tipoFra: ["Électrique", "Volant"],
    tipoChn: ["电", "飞行"],
    tipoEsp: ["Eléctrico", "Volador"],
    descricao:
      "Este Pokémon tem controle total sobre a eletricidade. Há histórias de Zapdos aninhando-se nas profundezas escuras de nuvens negras como breu.",
    descricaoEua:
      "This Pokémon has full control over electricity. There are stories of Zapdos nesting in the dark depths of pitch-black clouds.",
    descricaoFra:
      "Ce Pokémon a un contrôle total sur l'électricité. Il existe des histoires de Zapdos nichant dans les profondeurs sombres de nuages noirs comme du charbon.",
    descricaoChn:
      "这个宝可梦完全控制电力。有传闻称Zapdos栖息在漆黑的云层深处。",
    descricaoEsp:
      "Este Pokémon tiene control total sobre la electricidad. Hay historias de Zapdos anidando en las oscuras profundidades de nubes negras como la brea.",
  },
  {
    nro: 146,
    tamanho: 6,
    som: "./Sons/moltres.mp3",
    nome: "Moltres",
    genero: "",
    img: "./pokemons/moltres.gif",
    imgShiny: "./pokemons/moltresShiny.gif",
    tipo: ["Fogo", "Voador"],
    tipoEua: ["Fire", "Flying"],
    tipoFra: ["Feu", "Volant"],
    tipoChn: ["火", "飞行"],
    tipoEsp: ["Fuego", "Volador"],
    descricao:
      "É um dos Pokémon pássaros lendários. Quando Moltres bate suas asas flamejantes, elas brilham com um brilho vermelho deslumbrante.",
    descricaoEua:
      "It is one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they shine with a dazzling red glow.",
    descricaoFra:
      "C'est l'un des Pokémon oiseaux légendaires. Lorsque Moltres bat de ses ailes enflammées, elles brillent d'une éclatante lueur rouge.",
    descricaoChn:
      "它是传说中的鸟类宝可梦之一。当Moltres拍动它那火焰般的翅膀时，它们闪耀着令人炫目的红色光芒。",
    descricaoEsp:
      "Es uno de los Pokémon pájaros legendarios. Cuando Moltres bate sus alas flamígeras, brillan con un resplandor rojo deslumbrante.",
  },
  {
    nro: 147,
    tamanho: 2,
    som: "./Sons/dratini.mp3",
    nome: "Dratini",
    genero: "",
    img: "./pokemons/dratini.gif",
    imgShiny: "./pokemons/dratiniShiny.gif",
    tipo: ["Dragão"],
    tipoEua: ["Dragon"],
    tipoFra: ["Dragon"],
    tipoChn: ["龙"],
    tipoEsp: ["Dragón"],
    descricao:
      "Dratini mora perto de corpos de água que fluem rapidamente, como as piscinas de cachoeiras. À medida que cresce, Dratini muda de pele muitas vezes.",
    descricaoEua:
      "Dratini lives near bodies of water that flow quickly, like waterfall pools. As it grows, Dratini molts its skin many times.",
    descricaoFra:
      "Dratini vit près des cours d'eau qui coulent rapidement, comme les piscines de chutes d'eau. En grandissant, Dratini mue plusieurs fois.",
    descricaoChn:
      "Dratini生活在快速流动的水域附近，如瀑布池。随着成长，Dratini会多次脱皮。",
    descricaoEsp:
      "Dratini vive cerca de cuerpos de agua que fluyen rápidamente, como las piscinas de cascadas. A medida que crece, Dratini cambia de piel muchas veces.",
  },
  {
    nro: 148,
    tamanho:4,
    som: "./Sons/dragonair.mp3",
    nome: "Dragonair",
    genero: "",
    img: "./pokemons/dragonair.gif",
    imgShiny: "./pokemons/dragonairShiny.gif",
    tipo: ["Dragão"],
    tipoEua: ["Dragon"],
    tipoFra: ["Dragon"],
    tipoChn: ["龙"],
    tipoEsp: ["Dragón"],
    descricao:
      "Este Pokémon vive em oceanos e lagos intocados. Ele pode controlar o clima e usa esse poder para voar no céu, cavalgando no vento.",
    descricaoEua:
      "This Pokémon lives in untouched oceans and lakes. It can control the weather and uses this power to fly in the sky, riding the wind.",
    descricaoFra:
      "Ce Pokémon vit dans des océans et des lacs intacts. Il peut contrôler le climat et utilise ce pouvoir pour voler dans le ciel, chevauchant le vent.",
    descricaoChn:
      "这个宝可梦生活在未被打扰的海洋和湖泊中。它能控制气候，并利用这一能力在天空中飞翔，乘风而行。",
    descricaoEsp:
      "Este Pokémon vive en océanos y lagos intactos. Puede controlar el clima y usa este poder para volar en el cielo, cabalgando sobre el viento.",
  },
  {
    nro: 149,
    tamanho:5,
    som: "./Sons/dragonite.mp3",
    nome: "Dragonite",
    genero: "",
    img: "./pokemons/dragonite.gif",
    imgShiny: "./pokemons/dragoniteShiny.gif",
    tipo: ["Dragão", "Voador"],
    tipoEua: ["Dragon", "Flying"],
    tipoFra: ["Dragon", "Volant"],
    tipoChn: ["龙", "飞行"],
    tipoEsp: ["Dragón", "Volador"],
    descricao:
      "É um Pokémon de bom coração. Se detectar uma pessoa ou Pokémon se afogando, Dragonite simplesmente deve ajudá-los.",
    descricaoEua:
      "It is a kind-hearted Pokémon. If it detects a person or Pokémon drowning, Dragonite simply must help them.",
    descricaoFra:
      "C'est un Pokémon au cœur pur. S'il détecte une personne ou un Pokémon en train de se noyer, Dragonite doit simplement les aider.",
    descricaoChn:
      "这是一个心地善良的宝可梦。如果它发现有人或宝可梦溺水，Dragonite一定会去帮助他们。",
    descricaoEsp:
      "Es un Pokémon de buen corazón. Si detecta a una persona o Pokémon ahogándose, Dragonite simplemente debe ayudarlos.",
  },
  {
    nro: 150,
    tamanho:5,
    tamanhoMega:5,
    som: "./Sons/mewtwo.mp3",
    nome: "Mewtwo",
    genero: "",
    img: "./pokemons/mewtwo.gif",
    imgShiny: "./pokemons/mewtwoShiny.gif",
    nomeMega: "Mewtwo Mega",
    imgMegaX: "./pokemons/mewtwo-megax.gif",
    imgMegaShinyX: "./pokemons/mewtwo-megaxShiny.gif",
    imgMegaY: "./pokemons/mewtwo-megay.gif",
    imgMegaShinyY: "./pokemons/mewtwo-megayShiny.gif",
    tipo: ["Psíquico"],
    tipoEua: ["Psychic"],
    tipoFra: ["Psy"],
    tipoChn: ["超能力"],
    tipoEsp: ["Psíquico"],
    tipoMegaX: ["Psíquico", "Lutador"],
    tipoMegaEuaX: ["Psychic", "Fighting"],
    tipoMegaFraX: ["Psy", "Combat"],
    tipoMegaChnX: ["超能力", "格斗"],
    tipoMegaEspX: ["Psíquico", "Lucha"],
    tipoMegaY: ["Psíquico"],
    tipoMegaEuaY: ["Psychic"],
    tipoMegaFraY: ["Psy"],
    tipoMegaChnY: ["超能力"],
    tipoMegaEspY: ["Psíquico"],
    descricaoMegaY:
      "O seu corpo aerodinâmico parece sempre estar flutuando no ar. Mewtwo, por si só, já possui a estatística de ataque especial bem alta. Com a concentração extra obtida graças à mega evolução, o ataque especial do Mega Mewtwo Y com certeza irá derrotar os outros pokémons.",
    descricaoMegaEuaY:
      "Its aerodynamic body always seems to be floating in the air. Mewtwo, by itself, already has a very high Special Attack stat. With the extra focus gained through Mega Evolution, Mega Mewtwo Y's Special Attack will surely defeat other Pokémon.",
    descricaoMegaEspY:
      "Su cuerpo aerodinámico siempre parece estar flotando en el aire. Mewtwo, por sí mismo, ya tiene una estadística de ataque especial muy alta. Con la concentración extra obtenida gracias a la mega evolución, el ataque especial de Mega Mewtwo Y seguramente derrotará a otros Pokémon.",
    descricaoMegaFraY:
      "Son corps aérodynamique semble toujours flotter dans les airs. Mewtwo, à lui seul, possède déjà une statistique d'attaque spéciale très élevée. Grâce à la concentration supplémentaire obtenue grâce à la Méga-Évolution, l'attaque spéciale de Mega Mewtwo Y vaincra sûrement d'autres Pokémon.",
    descricaoMegaChnY:
      "它的空气动力学身体似乎总是漂浮在空中。梦幻本身的特殊攻击已经很高。通过超进化获得的额外专注，超级梦幻Y的特殊攻击一定会击败其他宝可梦。",
    descricaoMegaX:
      "O Mega Mewtwo X é um pokémon ainda maior que Mewtwo, com grandes músculos nos braços e pernas. O Mega Mewtwo X ganha o tipo lutador e sua estatística de ataque apresenta um crescimento extraordinário. O Mega Mewtwo X terá capacidade para atacar com golpes poderosos, tanto especiais como físicos.",
    descricaoMegaEuaX:
      "Mega Mewtwo X is an even larger Pokémon than Mewtwo, with large muscles on its arms and legs. Mega Mewtwo X gains the Fighting type, and its Attack stat shows an extraordinary growth. Mega Mewtwo X will be capable of striking with powerful moves, both special and physical.",
    descricaoMegaEspX:
      "Mega Mewtwo X es un Pokémon aún más grande que Mewtwo, con grandes músculos en sus brazos y piernas. Mega Mewtwo X gana el tipo luchador y su estadística de ataque muestra un crecimiento extraordinario. Mega Mewtwo X podrá atacar con golpes poderosos, tanto especiales como físicos.",
    descricaoMegaFraX:
      "Mega Mewtwo X est un Pokémon encore plus grand que Mewtwo, avec de grands muscles dans ses bras et ses jambes. Mega Mewtwo X gagne le type Combat, et sa statistique d'Attaque connaît une croissance extraordinaire. Mega Mewtwo X sera capable de frapper avec des attaques puissantes, à la fois spéciales et physiques.",
    descricaoMegaChnX:
      "超级梦幻X是比梦幻更大的宝可梦，手臂和腿部肌肉强壮。超级梦幻X获得了格斗属性，并且它的攻击力统计有了显著增长。超级梦幻X能够使用强力的攻击招式，无论是特殊攻击还是物理攻击。",
    descricao:
      "Seu DNA é quase o mesmo do Mew. No entanto, seu tamanho e disposição são muito diferentes.",
    descricaoEua:
      "Its DNA is almost the same as Mew's. However, its size and disposition are very different.",
    descricaoFra:
      "Son ADN est presque identique à celui de Mew. Cependant, sa taille et son tempérament sont très différents.",
    descricaoChn: "它的DNA几乎与Mew相同。然而，它的体型和性格非常不同。",
    descricaoEsp:
      "Su ADN es casi el mismo que el de Mew. Sin embargo, su tamaño y disposición son muy diferentes.",
  },
  {
    nro: 151,
    tamanho:3,
    som: "./Sons/mew.mp3",
    nome: "Mew",
    genero: "",
    img: "./pokemons/mew.gif",
    imgShiny: "./pokemons/mewShiny.gif",
    tipo: ["Psíquico"],
    tipoEua: ["Psychic"],
    tipoFra: ["Psy"],
    tipoChn: ["超能力"],
    tipoEsp: ["Psíquico"],
    descricao:
      "Quando visto através de um microscópio, o cabelo curto, fino e delicado deste Pokémon pode ser visto.",
    descricaoEua:
      "When viewed through a microscope, the short, fine, and delicate hair of this Pokémon can be seen.",
    descricaoFra:
      "Lorsqu'il est observé à travers un microscope, les cheveux courts, fins et délicats de ce Pokémon peuvent être vus.",
    descricaoChn:
      "通过显微镜观察时，可以看到这个宝可梦短小、细致且精致的毛发。",
    descricaoEsp:
      "Cuando se ve a través de un microscopio, se puede ver el cabello corto, fino y delicado de este Pokémon.",
  },
];
