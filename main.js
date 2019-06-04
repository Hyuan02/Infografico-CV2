var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
var alternativas = [1, -1, 2, -2];
var paredesD, paredesE, portas;
var porta;

function preload() {
    game.load.image('teste', 'SpriteTeste.png');
    game.load.image('pd', 'parededireita.png');
    game.load.image('pe', 'paredeesquerda.png');
    console.log('dei load');
}

function create() {
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

}

function update() {
    controles();
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