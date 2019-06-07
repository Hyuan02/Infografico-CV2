var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
var alternativas = [1, -1, 2, -2];
var paredesD, paredesE, portas;
var porta;
var listaQuiz = new Array();


function preload() {
    game.load.image('teste', 'SpriteTeste.png');
    game.load.image('pd', 'parededireita.png');
    game.load.image('pe', 'paredeesquerda.png');
    console.log('dei load');
    
}

var test1;

function create() {
    var graphics = game.add.graphics(0, 0);
    graphics.beginFill(0x000000);
    graphics.lineStyle(10, 0xffffff, 1);
    graphics.drawRect(6, 450, 790, 145);
    window.graphics = graphics;
    paredesD = game.add.group();
    paredesE = game.add.group();
    paredesD.create(500, 40, 'pd');
    paredesD.create(350, 140, 'pd');
    paredesD.getChildAt(1).height = 310;

    // let imgD = game.add.image(350,140,'pd');
    // imgD.height = 310;

    paredesE.create(-100, 0, 'pe');
    porta = game.add.image(260, 240, 'teste');
    porta.scale.x = 0.3;
    porta.scale.y = 0.3;
    porta.anchor.x = 0.5;
    porta.anchor.y = 0.5;
    for (var i = 0; i < 10; i++) {
        listaQuiz.push(new Quiz("aaa","aaa",1)); //lista com todas as perguntas do quiz
    }
    
}


function update() {
    displayText("- You have clicked -\n0 times !");
    controles();
}


function Quiz(pergunta, respostas) {
    this.pergunta = pergunta;
    this.respostas = respostas;
    //classe para facilitar o acesso ao par pergunta/resposta
}


function QuizResult() {
    this.resultados = new Array(); //associa escolha do jogador a cada par pergunta/resposta

    function calcularPerfil() {
        //calcular perfil de jogador com base nos resultados
    }
}


function displayText(text) {
     text = game.add.text(30, 485, text, {
        font: "32px Roboto Mono",
        fill: "#ffffff",
        align: "left"
    });
}

function nextQuiz() {
    // melhor colocar separado a etapa entre uma pergunta e outra
}


function controles(){
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        porta.scale.x += 0.01;
        porta.scale.y += 0.01;

        for(let i = 0; i<paredesD.length; i++){
            paredesD.getChildAt(i).x += 10;
        }

        for(let j = 0; j<paredesE.length; j++){
            paredesE.getChildAt(j).x -= 10;
        }
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
        porta.scale.x -= 0.01;
        porta.scale.y -= 0.01;

        for(let i = 0; i<paredesD.length; i++){
            paredesD.getChildAt(i).x -= 5;
        }

        for(let j = 0; j<paredesE.length; j++){
            paredesE.getChildAt(j).x += 5;
        }
    }
}