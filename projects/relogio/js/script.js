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
    [1117, 733], [1352, 86], [92, 798]
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
