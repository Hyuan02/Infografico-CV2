var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
let personagem, limitesCenario, bounds;

function preload(){
    game.load.image('personagemTop','./personagemTop.png');
    game.load.image('imgCenario','./imgCenario.png');
}


function create(){
    limitesCenario = game.add.image(400,300,'imgCenario');
    limitesCenario.anchor.x = 0.5;
    limitesCenario.anchor.y = 0.5;
    limitesCenario.width = limitesCenario.width/2;
    limitesCenario.height = limitesCenario.height/2;
    personagem = game.add.sprite(400,300,'personagemTop');
    personagem.scale.x = 0.3;
    personagem.scale.y = 0.3;

}


function update(){
   controles();
}


function checkCollision(x1, y1, x2, y2) {
     //calcular colisão e retornar true ou false (talvez já tenha no framework, mas não sei)
}

function displayText(text) {
    // mostrar balão de fala e esperar interação
}

function nextLevel() {
    // função pra passar de uma fase para outra (nem sei se precisa)
}


function controles() {
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        if(personagem.y>80)
        personagem.y -= 5;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
        if(personagem.y<480)
            personagem.y += 5;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
        if(personagem.x>0)
        personagem.x -= 5;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        if(personagem.x<800-personagem.width)
            personagem.x += 5;
    }
}