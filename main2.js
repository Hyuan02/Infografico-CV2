var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
let personagem, personagemMovimento = true, limitesCenario, bounds, composicaoCenario, porta1, porta2, porta3, porta4, bot1, bot2, bot3, bot4, scene, caixaTexto, texto, alternativas, left, right;
var indiceSelecionado = 0, perguntaAtual = [], dialogoAtual, dialogoAnn = 0;
var checaLivros = false, livros;
var checaGenericos = false, genericos, segundoDialogoGenerico = false;
var placeholders;




function preload() {
    game.load.spritesheet('personagemTop', './img/spritesheet.png', 100, 199);
    game.load.image('imgCenario', './img/cenario_01.png');
    game.load.image('imgCenario2', './img/cenario_02.png');
    game.load.image('imgCenario3', './img/cenario_03.png');
    game.load.image('portaV', './portaVertical.png');
    game.load.image('portaH', './portaHorizontal.png');
    game.load.image('bot', './bot.png');
    game.load.image('livro', './livro_teste.png');
    game.load.image('generico', './generico.png');

}

function create() {
    composicaoCenario = game.add.group();
    placeholders = game.add.group();
    personagem = game.add.sprite(590, 400, 'personagemTop', 1);
    personagem.animations.add('down', [0, 1, 2], 18, true);
    left = personagem.animations.add('left', [3, 4, 5], 18, true);
    personagem.animations.add('up', [6, 7, 8], 18, true);
    right = personagem.animations.add('right', [9, 10, 11], 18, true);
    personagem.smoothed = false;


    game.physics.enable(personagem, Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();
    alternativas = game.add.group();
    texto = game.add.text(100, 100, 'Testando texto', {
        font: "32px Roboto Mono",
        fill: "#ffffff",
        align: "left",
        wordWrap: true,
        wordWrapWidth: 450
    });
    texto.visible = false;
    scene = 1;
    cenario1();
}

function update() {
    controles();
    checarColisao();
    game.input.onDown.add(unpause, self);
    game.physics.enable(placeholders, Phaser.Physics.ARCADE);
    game.physics.arcade.collide(personagem, placeholders);

}

function controles() {
    if (personagemMovimento) {
        personagem.body.velocity.set(0);

        if (cursors.left.isDown) {
            if (personagem.x > 10) {
                personagem.body.velocity.x = -300;
                personagem.play('left');
            }
        }
        else if (cursors.right.isDown) {
            if (personagem.x < 1300 - personagem.width) {
                personagem.body.velocity.x = 300;
                personagem.play('right');
            }
        }
        else if (cursors.up.isDown) {
            if (personagem.y > 0) {
                personagem.body.velocity.y = -300;
                personagem.play('up');
            }
        }
        else if (cursors.down.isDown) {
            if (personagem.y < 720 - personagem.height) {
                personagem.body.velocity.y = 300;
                personagem.play('down');
            }
        }
        else {
            personagem.animations.stop();
        }
    }
    else {
        if (alternativas.length > 1) { //alternativas estando cheio significa que a pessoa esta em uma pergunta, logo entra em modo de selecao
            selecionaOpcao();
            if (game.input.keyboard.justPressed(Phaser.Keyboard.DOWN)) {
                if (indiceSelecionado < 3) {
                    indiceSelecionado++;

                }

            }
            if (game.input.keyboard.justPressed(Phaser.Keyboard.UP)) {
                if (indiceSelecionado > 0) {
                    indiceSelecionado--;

                }

            }
            if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
                perguntaAtual[indiceSelecionado].selecionado = true; //armazena a resposta la no objeto do dialogo
                console.log("selecionado");
                encerraOpcoes(dialogoAtual); //fecha a caixa de respostas
            }
        }
    }

}

function unpause(event) {
    if (game.paused) {
        texto.visible = false;
        game.paused = false;
    }
}

function checarColisao() {
    if (personagem.alive) {
        if ((game.physics.arcade.overlap(personagem, bot1)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR))) {
            if (dialogoAnn == 0) {
                entraDialogo(dialogo1);
            }

            else if (dialogoAnn == 1) {
                entraDialogo(dialogo7);
                segundoDialogoGenerico = true;
            }

            else if (dialogoAnn == 2) {
                entraDialogo(dialogo8);
            }
        }
    }
    if ((porta1) && (scene == 1)) {
        if (checkOverlap(personagem, porta1)) {
            scene = 2;
            personagem.x = 125;
            personagem.y = 450;
            cenario2();
        }
    }
    if ((porta2) && (scene == 2)) {
        if (checkOverlap(personagem, porta2)) {
            scene = 1;
            personagem.x = 125;
            personagem.y = 320;
            cenario1();
        }

    }
    if ((porta3) && (scene == 2)) {
        if (checkOverlap(personagem, porta3)) {
            personagem.x = 100;
            personagem.y = 130;
            scene = 3;
            cenario3();
        }
    }

    if (scene == 2) {
        if ((checkOverlap(personagem, bot2)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR))) {
            entraDialogo(dialogo2);
        }

        if ((checkOverlap(personagem, bot4)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR))) {
            if (!checaGenericos)
                entraDialogo(dialogo5);
            else {
                entraDialogo(dialogo6);
                dialogoAnn = 1;
            }

        }
        checaColisaoGenericos();
    }

    if (scene == 3) {
        if ((checkOverlap(personagem, bot3)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR))) {
                if(!checaLivros)
                    entraDialogo(dialogo3);
                else
                    entraDialogo(dialogo4);
            }
            checaColisaoLivros();
    }

    if ((porta4) && (scene == 3)) {
        if (checkOverlap(personagem, porta4)) {
            personagem.x = 1100;
            personagem.y = 240;
            scene = 2;
            cenario2();
        }
    }
}

function cenario1() {
    composicaoCenario.removeAll(true); //limpa todos os elementos do cenario antes de compor o outro
    limitesCenario = composicaoCenario.create(640, 360, 'imgCenario');
    limitesCenario.anchor.x = 0.5;
    limitesCenario.anchor.y = 0.5;
    limitesCenario.width = 1280;
    limitesCenario.height = 720;
    porta1 = composicaoCenario.create(125, 260, 'portaH');
    porta1.visible = false;
    bot1 = composicaoCenario.create(620, 350, 'bot');
    game.physics.enable(bot1, Phaser.Physics.ARCADE);
    bot1.body.immovable = true;
    criarPlaceholders();
}

function cenario2() {
    composicaoCenario.removeAll(true); //limpa todos os elementos do cenario antes de compor o outro
    criarPlaceholders();
    limitesCenario = composicaoCenario.create(640, 360, 'imgCenario2');
    limitesCenario.anchor.x = 0.5;
    limitesCenario.anchor.y = 0.5;
    limitesCenario.width = 1280;
    limitesCenario.height = 720;
    genericos = game.add.group();
    genericos.create(1050, 300, "generico");
    genericos.create(750, 600, "generico");
    genericos.create(900, 300, "generico");
    genericos.create(1100, 600, "generico");
    porta2 = composicaoCenario.create(125, 660, 'portaH');
    porta2.visible = false;
    porta3 = composicaoCenario.create(1230, 240, 'portaV');
    porta3.visible = false;
    bot2 = composicaoCenario.create(770, 130, "bot");
    bot4 = composicaoCenario.create(230, 250, 'bot');
    composicaoCenario.add(genericos);
    genericos.visible = false;
}

function cenario3() {
    composicaoCenario.removeAll(true); //limpa todos os elementos do cenario antes de compor o outro
    criarPlaceholders();
    limitesCenario = composicaoCenario.create(640, 360, 'imgCenario3');
    livros = game.add.group();
    limitesCenario.anchor.x = 0.5;
    limitesCenario.anchor.y = 0.5;
    limitesCenario.width = 1280;
    limitesCenario.height = 720;
    bot3 = composicaoCenario.create(300, 400, "bot");
    bot3.visible = false;
    porta4 = composicaoCenario.create(0, 240, 'portaV');
    porta4.visible = false;
    livros.create(450,100,"bot");
    livros.create(800,50,"bot");
    livros.create(1050,50,"bot");
    livros.create(600,500,"bot");
    livros.create(850,500,"bot");
    livros.create(1050,500,"bot");
    livros.visible = false;
    composicaoCenario.add(livros);
}

function checkOverlap(spriteA, spriteB) {
    if (spriteA.exists && spriteB.exists) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
}

function entraDialogo(dialogo) { //funcao de ler os dialogos
    console.log(dialogo.indiceDialogo);
    dialogoAtual = dialogo;
    if (!dialogo.aconteceu) {
        texto.visible = true;
        personagemMovimento = false;
        if (dialogo.indiceDialogo < dialogo.conteudo.length) {
            if ('alternativas' in dialogo.conteudo[dialogo.indiceDialogo]) { //quando e pergunta
                // personagemMovimento = true;
                let i = 0;
                perguntaAtual = dialogo.conteudo[dialogo.indiceDialogo].alternativas; // a pergunta em que a pessoa esta
                for (alternativa of perguntaAtual) {
                    i++;
                    let alt = game.add.text(100, 120 + (50 * i), alternativa.valor); //renderiza o texto de perguntas
                    alternativas.add(alt);
                }
                texto.visible = false;
            }
            else if ('texto' in dialogo.conteudo[dialogo.indiceDialogo]) { //quando e texto
                texto.visible = true;
                texto.setText(dialogo.conteudo[dialogo.indiceDialogo].texto);
                dialogo.indiceDialogo++;
            }
            else if ('lista' in dialogo.conteudo[dialogo.indiceDialogo]) { //quando e lista
                texto.visible = true;
                let textString = "";
                for (item of dialogo.conteudo[dialogo.indiceDialogo].lista) {
                    textString += item + "\n";
                }
                texto.setText(textString);
                dialogo.indiceDialogo++;
            }
        }
        else {
            texto.visible = false;
            dialogo.aconteceu = true;
            personagemMovimento = true;
        }


    }
    else {
        texto.setText(dialogo.conteudo[dialogo.indiceDialogo - 1].texto);
        texto.visible = !texto.visible;
        personagemMovimento = !personagemMovimento;
    }
}


function selecionaOpcao() { //funcao responsavel por ficar trocando o cursor
    if (!personagemMovimento) {
        if (alternativas.length > 1) {
            let textoSelecionado = alternativas.getAt(indiceSelecionado);
            textoSelecionado.fill = "red";
            for (let i = 0; i < alternativas.length; i++) {
                if (i != indiceSelecionado) {
                    alternativas.getAt(i).fill = "black";
                }
            }
        }
    }

}

function encerraOpcoes(dialogo) {
    alternativas.removeAll(true);
    dialogo.indiceDialogo++;
    perguntaAtual = [];
}

function checaColisaoLivros() {
    if ((checkOverlap(personagem, livros.getAt(0)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))) {
        checaLivros = true;
        entraDialogo(dialogoLivro1);
    }
    if ((checkOverlap(personagem, livros.getAt(1)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))) {
        checaLivros = true;
        entraDialogo(dialogoLivro2);
    }
    if ((checkOverlap(personagem, livros.getAt(2)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))) {
        checaLivros = true;
        entraDialogo(dialogoLivro3);
    }
    if ((checkOverlap(personagem, livros.getAt(3)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))) {
        checaLivros = true;
        entraDialogo(dialogoLivro4);
    }
    if ((checkOverlap(personagem, livros.getAt(4)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))) {
        checaLivros = true;
        entraDialogo(dialogoLivro5);
    }
    if ((checkOverlap(personagem, livros.getAt(5)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))) {
        checaLivros = true;
        entraDialogo(dialogoLivro6);
    }
}

function checaColisaoGenericos() {
    if ((checkOverlap(personagem, genericos.getAt(0)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))) {
        checaGenericos = true;
        if (!segundoDialogoGenerico)
            entraDialogo(dialogoGenerico1);
        else {
            dialogoAnn = 2;
            entraDialogo(dialogoGenerico5);
        }


    }
    if ((checkOverlap(personagem, genericos.getAt(1)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))) {
        checaGenericos = true;
        if (!segundoDialogoGenerico)
            entraDialogo(dialogoGenerico2);
        else {
            dialogoAnn = 2;
            entraDialogo(dialogoGenerico6);
        }

    }
    if ((checkOverlap(personagem, genericos.getAt(2)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))) {
        checaGenericos = true;
        if (!segundoDialogoGenerico)
            entraDialogo(dialogoGenerico3);
        else {
            dialogoAnn = 2;
            entraDialogo(dialogoGenerico7);
        }

    }
    if ((checkOverlap(personagem, genericos.getAt(3)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))) {
        checaGenericos = true;
        if (!segundoDialogoGenerico)
            entraDialogo(dialogoGenerico4);
        else {
            dialogoAnn = 2;
            entraDialogo(dialogoGenerico8);
        }

    }
}

function zerarVelocidadePlayer(){
    personagem.body.velocity.x = 0;
    personagem.body.velocity.y = 0;
}

function criarPlaceholders(){
    placeholders.removeAll(true);
    if (scene == 1){
        console.log('entrou');
        let retangulo1, retangulo2;
        retangulo1 = placeholders.create(350,250,'livro');
        retangulo1.width = 550;
        retangulo1.height = 200;
        retangulo1.anchor.y = 0.5;
        retangulo2 = placeholders.create(900,200,'livro');
        retangulo2.width = 350;
        retangulo2.height = 200;
        retangulo2.anchor.y = 0.5;
        game.physics.enable(retangulo1, Phaser.Physics.ARCADE);
        game.physics.enable(retangulo2,Phaser.Physics.ARCADE);
        retangulo1.body.immovable = true;
        retangulo2.body.immovable = true;
        game.physics.arcade.collide(personagem, retangulo1);
        game.physics.arcade.collide(personagem, retangulo2);
    }

    if(scene == 2){
        let retangulo1, retangulo2, retangulo3;
        retangulo1 = placeholders.create(530,500,'livro');
        retangulo1.width = 200;
        retangulo1.height = 120;
        retangulo1.anchor.y = 0.5;
        retangulo2 = placeholders.create(840,500,'livro');
        retangulo2.width = 250;
        retangulo2.height = 200;
        retangulo2.anchor.y = 0.3;
        retangulo3 = placeholders.create(500,100,'livro');
        retangulo3.width = 500;
        retangulo3.height = 100;
        retangulo3.anchor.y = 0.3;
        game.physics.enable(retangulo1, Phaser.Physics.ARCADE);
        game.physics.enable(retangulo2,Phaser.Physics.ARCADE);
        game.physics.enable(retangulo3,Phaser.Physics.ARCADE);
        retangulo1.body.immovable = true;
        retangulo2.body.immovable = true;
        retangulo3.body.immovable = true;
    }

    if(scene == 3){
        let retangulo1, retangulo2, retangulo3,retangulo4, retangulo5, retangulo6,retangulo7;
        retangulo1 = placeholders.create(90,50,'livro');
        retangulo1.width = 200;
        retangulo1.height = 120;
        retangulo1.anchor.y = 0.5;
        retangulo2 = placeholders.create(350,50,'livro');
        retangulo2.width = 350;
        retangulo2.height = 120;
        retangulo2.anchor.y = 0.5;
        retangulo3 = placeholders.create(760,50,'livro');
        retangulo3.width = 170;
        retangulo3.height = 120;
        retangulo3.anchor.y = 0.5;
        retangulo4 = placeholders.create(1000,50,'livro');
        retangulo4.width = 170;
        retangulo4.height = 120;
        retangulo4.anchor.y = 0.5;
        retangulo5 = placeholders.create(1000,310,'livro');
        retangulo5.width = 170;
        retangulo5.height = 110;
        retangulo6 = placeholders.create(790,310,'livro');
        retangulo6.width = 170;
        retangulo6.height = 110;
        retangulo7 = placeholders.create(570,310,'livro');
        retangulo7.width = 170;
        retangulo7.height = 110;
        game.physics.enable(retangulo1, Phaser.Physics.ARCADE);
        game.physics.enable(retangulo2, Phaser.Physics.ARCADE);
        game.physics.enable(retangulo3, Phaser.Physics.ARCADE);
        game.physics.enable(retangulo4, Phaser.Physics.ARCADE);
        game.physics.enable(retangulo5, Phaser.Physics.ARCADE);
        game.physics.enable(retangulo6, Phaser.Physics.ARCADE);
        game.physics.enable(retangulo7, Phaser.Physics.ARCADE);
        retangulo1.body.immovable = true;
        retangulo2.body.immovable = true;
        retangulo3.body.immovable = true;
        retangulo4.body.immovable = true;
        retangulo5.body.immovable = true;
        retangulo6.body.immovable = true;
        retangulo7.body.immovable = true;
    }
    placeholders.visible = false;
}