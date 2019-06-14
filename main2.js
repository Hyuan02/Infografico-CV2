var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
let personagem, limitesCenario, bounds, composicaoCenario, porta1, porta2, bot1, caixaTexto, texto;

function preload() {
    game.load.image('personagemTop', './personagemTop.png');
    game.load.image('imgCenario', './imgCenario.png');
    game.load.image('imgCenario2', './cenario2.png');
    game.load.image('porta', './porta.png');
    game.load.image('bot', './bot.png');

}

function create() {
    composicaoCenario = game.add.group();
    personagem = game.add.sprite(400, 300, 'personagemTop');
    personagem.scale.x = 0.3;
    personagem.scale.y = 0.3;
    texto = game.add.text(100, 100, 'Testando texto', {
        font: "32px Roboto Mono",
        fill: "#ffffff",
        align: "left"
    });
    texto.visible = false;
    cenario1();

}

function update() {
    controles();
    checarColisao();
    game.input.onDown.add(unpause, self);
}

function controles() {
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        if (personagem.y > 10)
            personagem.y -= 5;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        if (personagem.y < 680)
            personagem.y += 5;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        if (personagem.x > 0)
            personagem.x -= 5;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        if (personagem.x < 1280 - personagem.width)
            personagem.x += 5;
    }

}

function unpause(event) {
    if (game.paused) {
        texto.visible = false;
        game.paused = false;
    }
}

function hideBox() {
    texto.visible = false;
    console.log("cabou o tempo");
}

function checarColisao() {
    if (personagem.alive) {
        if (checkOverlap(personagem, porta1)) {
            cenario2();
        }

        if ((checkOverlap(personagem, bot1)) && (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))) {
            game.paused = true;
            texto.visible = true;

        }
        else {
            texto.visible = false;
        }
    }
    if (porta2) {
        if (checkOverlap(personagem, porta2)) {
            cenario1();
        }
    }
}

function cenario1() {
    composicaoCenario.removeAll(); //limpa todos os elementos do cenario antes de compor o outro
    limitesCenario = composicaoCenario.create(640, 360, 'imgCenario');
    limitesCenario.anchor.x = 0.5;
    limitesCenario.anchor.y = 0.5;
    limitesCenario.width = 1280;
    limitesCenario.height = 720;
    porta1 = composicaoCenario.create(400, 0, 'porta');
    bot1 = composicaoCenario.create(1220, 400, 'bot');
}

function cenario2() {
    composicaoCenario.removeAll(); //limpa todos os elementos do cenario antes de compor o outro
    limitesCenario = composicaoCenario.create(640, 360, 'imgCenario2');
    limitesCenario.anchor.x = 0.5;
    limitesCenario.anchor.y = 0.5;
    limitesCenario.width = 1280;
    limitesCenario.height = 720;
    porta2 = composicaoCenario.create(400, 450, 'porta');
}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}
