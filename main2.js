var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
let personagem, personagemMovimento = true, limitesCenario, bounds, composicaoCenario, porta1, porta2,porta3,porta4,bot1, bot2, bot3,bot4,bot5,caixaTexto, texto, alternativas;
var indiceSelecionado = 0, perguntaAtual = [], dialogoAtual, dialogoAnn = 0;
var checaLivros = false,livros;
var checaGenericos = false, genericos, segundoDialogoGenerico = false;




function preload() {
    game.load.image('personagemTop', './personagemTop.png');
    game.load.spritesheet('personagemBaixo','./sprites/player/andando_frente.png',100,200,3);
    game.load.spritesheet('personagemCima','./sprites/player/andando_tras.png',100,200,3);
    game.load.spritesheet('personagemEsquerda','./sprites/player/andando_esquerda.png',100,200,3);
    game.load.spritesheet('personagemDireita','./sprites/player/andando_direita.png',100,200,3);
    game.load.image('imgCenario', './imgCenario.png');
    game.load.image('imgCenario2', './cenario2.png');
    game.load.image('imgCenario3', './cenario3.png');
    game.load.image('porta', './porta.png');
    game.load.image('bot', './bot.png');
    game.load.image('livro','./livro_teste.png');
    game.load.image('generico','./generico.png');
}

function create() {
    composicaoCenario = game.add.group();
    personagem = game.add.sprite(400, 300, 'personagemBaixo');
    personagem.scale.x = 0.3;
    personagem.scale.y = 0.3;
    alternativas = game.add.group();
    texto = game.add.text(100, 100, 'Testando texto', {
        font: "32px Roboto Mono",
        fill: "#ffffff",
        align: "left",
        wordWrap: true,
        wordWrapWidth: 450
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
    if(personagemMovimento){
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            if (personagem.y > 10){
                personagem.y -= 5;
            }

        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            if (personagem.y < 680){
                personagem.y += 5;
            } 
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            if (personagem.x > 0)
            {
                personagem.x -= 5;
            }
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            if (personagem.x < 1280 - personagem.width)
            {
                personagem.x += 5;
            }              
            
        }

    }
    else{
        if(alternativas.length>1){
            selecionaOpcao();
            if(game.input.keyboard.justPressed(Phaser.Keyboard.DOWN)){
                if(indiceSelecionado < 3){
                    indiceSelecionado++;
                    
                }
                    
            }
            if(game.input.keyboard.justPressed(Phaser.Keyboard.UP)){
                if(indiceSelecionado > 0){
                    indiceSelecionado--;
                    
                }
                    
            }
            if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)){
                perguntaAtual[indiceSelecionado].selecionado = true;
                console.log("selecionado");
                encerraOpcoes(dialogoAtual);
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

function hideBox() {
    texto.visible = false;
    console.log("cabou o tempo");
}

function checarColisao() {
    if (personagem.alive) {
        if(porta1){
            if (checkOverlap(personagem, porta1)) {
                cenario2();
            }
    
            if ((checkOverlap(personagem, bot1)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR))) {
                if(dialogoAnn ==0){
                    entraDialogo(dialogo1);
                }
                
                else if(dialogoAnn == 1){
                    entraDialogo(dialogo7);
                    segundoDialogoGenerico = true;
                }
                   
                else if(dialogoAnn == 2){
                    entraDialogo(dialogo8);
                }
            }
        }

        if(porta2){

            if (checkOverlap(personagem, porta2)) {
                cenario3();
            }
            if (checkOverlap(personagem, porta4)) {
                cenario1();
            }
            if ((checkOverlap(personagem, bot2)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR))) {
                entraDialogo(dialogo2);
            }

            if ((checkOverlap(personagem, bot4)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR))) {
                if(!checaGenericos)
                    entraDialogo(dialogo5);
                else{
                    entraDialogo(dialogo6);
                    dialogoAnn = 1;
                }
                    
            }

            checaColisaoGenericos();
        }

        if (porta3) {
            if (checkOverlap(personagem, porta3)) {
                cenario2();
            }
            if ((checkOverlap(personagem, bot3)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR))) {
                if(!checaLivros)
                    entraDialogo(dialogo3);
                else
                    entraDialogo(dialogo4);
            }
            checaColisaoLivros();
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
    porta1 = composicaoCenario.create(400, 0, 'porta');
    bot1 = composicaoCenario.create(1220, 400, 'bot');
}

function cenario2() {
    composicaoCenario.removeAll(true); //limpa todos os elementos do cenario antes de compor o outro
    limitesCenario = composicaoCenario.create(640, 360, 'imgCenario3');
    limitesCenario.anchor.x = 0.5;
    limitesCenario.anchor.y = 0.5;
    limitesCenario.width = 1280;
    limitesCenario.height = 720;
    genericos = game.add.group();
    for(let i=0; i<4; i++){
        if(i%2 == 0)
        genericos.create(100 + (50*i), 100, "generico");
        else
        genericos.create(100, 100 + (50*i), "generico");
    }
    porta2 = composicaoCenario.create(1100, 200, 'porta');
    porta4 = composicaoCenario.create(50,500,'porta');
    bot2 = composicaoCenario.create(800,650,"bot");
    bot4 = composicaoCenario.create(300,650,'bot');
    composicaoCenario.add(genericos);

}

function cenario3(){
    composicaoCenario.removeAll(true); //limpa todos os elementos do cenario antes de compor o outro
    livros = game.add.group();
    limitesCenario = composicaoCenario.create(640, 360, 'imgCenario2');
    limitesCenario.anchor.x = 0.5;
    limitesCenario.anchor.y = 0.5;
    limitesCenario.width = 1280;
    limitesCenario.height = 720;
    porta3 = composicaoCenario.create(400, 450, 'porta');
    bot3 = composicaoCenario.create(200,100,"bot");
    for(let i= 0; i<6; i++){
        livros.create(1000,100+(50*i), "livro");
    }
    composicaoCenario.add(livros);
    
}

function checkOverlap(spriteA, spriteB) {

    if(spriteA.exists && spriteB.exists){
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
    

}

function entraDialogo(dialogo){
    console.log(dialogo.indiceDialogo);
    dialogoAtual = dialogo;
    if(!dialogo.aconteceu){
        texto.visible = true;
        personagemMovimento = false;
        if(dialogo.indiceDialogo < dialogo.conteudo.length){
            if('alternativas' in dialogo.conteudo[dialogo.indiceDialogo]){
                // personagemMovimento = true;
                let i = 0;
                perguntaAtual = dialogo.conteudo[dialogo.indiceDialogo].alternativas;
                for(alternativa of perguntaAtual){
                    i++;
                    let alt = game.add.text(100,120+(50*i), alternativa.valor);
                    alternativas.add(alt);
                } 
                texto.visible = false;
            }
            else if ('texto' in dialogo.conteudo[dialogo.indiceDialogo]){
                texto.visible = true;
                texto.setText(dialogo.conteudo[dialogo.indiceDialogo].texto);
                dialogo.indiceDialogo++;
            }
            else if('lista' in dialogo.conteudo[dialogo.indiceDialogo]){
                texto.visible = true;
                let textString = "";
                for(item of dialogo.conteudo[dialogo.indiceDialogo].lista){
                    textString+= item+"\n";
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
    else{
        texto.setText(dialogo.conteudo[dialogo.indiceDialogo - 1].texto);
        texto.visible = !texto.visible;
        personagemMovimento = !personagemMovimento;
    }
    


}


function selecionaOpcao(){
    if(!personagemMovimento){
        if(alternativas.length > 1){
            let textoSelecionado =  alternativas.getAt(indiceSelecionado);
            textoSelecionado.fill = "red";
            for(let i=0; i<alternativas.length; i++){
                if(i != indiceSelecionado){
                    alternativas.getAt(i).fill = "black";
                }
            }
        }
    }
    
}

function encerraOpcoes(dialogo){
    alternativas.removeAll(true);
    dialogo.indiceDialogo++;
    perguntaAtual = [];
}

function checaColisaoLivros(){
    if((checkOverlap(personagem, livros.getAt(0)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))){
        checaLivros = true;
        entraDialogo(dialogoLivro1);
    }
    if((checkOverlap(personagem, livros.getAt(1)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))){
        checaLivros = true;
        entraDialogo(dialogoLivro2);
    }
    if((checkOverlap(personagem, livros.getAt(2)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))){
        checaLivros = true;
        entraDialogo(dialogoLivro3);
    }
    if((checkOverlap(personagem, livros.getAt(3)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))){
        checaLivros = true;
        entraDialogo(dialogoLivro4);
    }
    if((checkOverlap(personagem, livros.getAt(4)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))){
        checaLivros = true;
        entraDialogo(dialogoLivro5);
    }
    if((checkOverlap(personagem, livros.getAt(5)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))){
        checaLivros = true;
        entraDialogo(dialogoLivro6);
    }
}

function checaColisaoGenericos(){
    if((checkOverlap(personagem, genericos.getAt(0)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))){
        checaGenericos = true;
        if(!segundoDialogoGenerico)
            entraDialogo(dialogoGenerico1);
        else{
            dialogoAnn = 2;
            entraDialogo(dialogoGenerico5);
        }
            
        
    }
    if((checkOverlap(personagem, genericos.getAt(1)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))){
        checaGenericos = true;
        if(!segundoDialogoGenerico)
            entraDialogo(dialogoGenerico2);
        else{
            dialogoAnn = 2;
            entraDialogo(dialogoGenerico6);
        }
            
    }
    if((checkOverlap(personagem, genericos.getAt(2)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))){
        checaGenericos = true;
        if(!segundoDialogoGenerico)        
            entraDialogo(dialogoGenerico3);
        else{
            dialogoAnn = 2;
            entraDialogo(dialogoGenerico7);
        }
            
    }
    if((checkOverlap(personagem, genericos.getAt(3)) && (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)))){
        checaGenericos = true;
        if(!segundoDialogoGenerico)        
            entraDialogo(dialogoGenerico4);
        else{
            dialogoAnn = 2;
            entraDialogo(dialogoGenerico8);
        }
            
    }
}