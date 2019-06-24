//Arquivo responsável pelo armazenamento dos dialogos no jogo, funcionando da seguinte forma:
//Cada dialogo possui um indice, seu conteudo e uma variavel informando se ele ocorreu ou nao
// o indice serve para percorrer o conteudo do dialogo andando nos textos e conteudos subsequentes como alternativas ou listas
//aconteceu verifica se o jogador ja passou pelo dialogo, portanto quando o dialogo e completado, essa variavel fica como true
//e quando ela esta true, o personagem so ira mostrar o ultimo dialogo na hora de falar.
//na funcao que lê esse objeto, ela detecta se o conteudo sera um dialogo ou uma pergunta, e se for uma pergunta
// e redirecionado para outra funcao que ira exibir o seletor.



dialogo1 = {"indiceDialogo":0, "conteudo": [
    {"nome": "Ann, a Estalajadeira", "texto":"Seja bem-vindo a Taverna das Inspirações caro viajante! O que procura?"},
    {"nome": "Jogador", "texto":"..."},
    {"nome": "Ann, a Estalajadeira", "texto":"Uma Experiência? Claro, claro, nós temos alguns mapas que podem ajudá-lo a encontrar, mas primeiro gostaria de ver o seu Jogo. Estou curiosa para saber que tipo de Experiência você procura he he."},
    {"nome": "Jogador", "texto":"..."},
    {"nome": "Ann, a Estalajadeira", "texto":" Hum?! O que ... é um Jogo? Espera! Você não sabe o que é um Jogo?! E ainda quer uma Experiência sem um?!"},
    {"nome": "Jogador", "texto":"..."},
    {"nome": "Ann, a Estalajadeira", "texto":"Entendo... Então você não é deste reino não é? Certo ! Vou lhe explicar. Um Jogo é uma relíquia bastante preciosa nesse reino e através dela você consegue chegar no tesouro da Experiência. Cada Jogo tem seus próprios princípios que são utilizados para sua construção."},
    {"nome": "Ann, a Estalajadeira", "texto":"Eles variam de acordo com cada um que os constroem, como por exemplo regras, objetivos, valor endógeno, imersão, interação entre outros. Com esses princípios, cada Jogo pode chegar na Experiência."},
    {"nome": "Ann, a Estalajadeira", "texto":"A Experiência é uma magia muito poderosa, capaz de mexer com as pessoas e é considerada o maior tesouro para todos os usuários de Jogos. Ela é capaz de nos proporcionar várias sensações e por isso é tão almejada nesse reino."},
    {"nome": "Ann, a Estalajadeira", "texto":"Algumas experiências podem nos proporcionar diversão, umas podem nos fazer fugir de nossa realidade e outras permitem que façamos o que desejarmos. São muitas as Experiências que podemos buscar."},
    {"nome": "Ann, a Estalajadeira", "texto":"Agora que você já sabe o que é um Jogo, deve construir um para conseguir sua Experiência. Você tem que planejar como quer que ele seja, essa etapa se chama Projeto. Com o Projeto feito e documentado, poderá construir seu Jogo através da Prototipação."},
    {"nome": "Ann, a Estalajadeira", "texto":"Primeiro, vamos definir que tipo de Experiência você quer conseguir com seu Jogo. Existem jogos específicos para cada Experiência que se deseja conseguir, então escolha com sabedoria o que você deseja e eu lhe darei um mapa para ela!"},
    {"pergunta":"Escolha com sabedoria o que você deseja e eu lhe darei um mapa para ela!","alternativas":[{"valor":"Diversão", "selecionado":false}, {"valor":"Fuga", "selecionado":false}, {"valor":"Prazer", "selecionado":false}, {"valor":"Livre Escolha", "selecionado":false}]},
    {"nome": "Ann, a Estalajadeira", "texto":"Perfeito! Vamos começar os preparativos para a construção do seu Jogo. Agora você precisa dos Elementos para construir o Jogo, fale com o Rudolph, o Mago. Ele saberá como te ajudar."}
],"aconteceu": false};

dialogo2 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Rudolph, o Mago", "texto":"Olá jovem aventureiro, o que deseja?"},
    {"nome": "Jogador", "texto":"..."},
    {"nome": "Rudolph, o Mago", "texto":"Entendo... Então você deseja construir um Jogo para conseguir a Experiência (colocar o nome da Experiência escolhida)? Muito bem. Não pode construir um Jogo sem antes escolher os seus Elementos."},
    {"nome": "Jogador", "texto":"..."},
    {"nome": "Rudolph, o Mago", "texto":"O que? Você quer o Elemento Fogo? Ha ha ha... Não meu jovem, aqui os Elementos são diferentes. Os 4 Elementos são cruciais para a construção do Jogo, pois funcionam como o esqueleto do Jogo. Eles são: Mecânica, Narrativa, Estética e Tecnologia. E estão sempre interligados, sendo um deles o principal núcleo do seu Jogo."},
    {"nome": "Jogador", "texto":"...."},
    {"nome": "Rudolph, o Mago", "texto":"A Mecânica é o Elemento do objetivo, das regras e possibilidades. É ela que define o Jogo em si. A Narrativa é o Elemento da história e dos eventos. Um jogo poderá conter ou não uma história. Caberá a você decidir se ela será relevante ou não."},
    {"nome": "Rudolph, o Mago", "texto":"A Estética é o Elemento responsável pela aparência, sensações, sons, cheiros e sabores do Jogo. Sendo ela, o Elemento mais ligado à Experiência. Por fim, a Tecnologia é o Elemento dos materiais e interações que tornaram seu Jogo possível."},
    {"nome": "Rudolph, o Mago", "texto":"Ao escolher um desses elementos como núcleo, os outros três serão utilizados para reforçar as características do núcleo do seu Jogo. Agora meu jovem, você me parece um aventureiro bastante promissor e por isso lhe darei um dos núcleos como um presente para sua jornada. Qual você deseja escolher?"},
    {"nome": "Jogador", "texto":"..."},
    {"pergunta":"Qual você deseja escolher?", "alternativas":[{"valor":"Núcleo da Mecânica", "selecionado":false}, {"valor":"Núcleo da Narrativa", "selecionado":false}, {"valor":"Núcleo da Estética", "selecionado":false}, {"valor":"Núcleo da Tecnologia", "selecionado":false}]},
    {"nome": "Rudolph, o Mago", "texto":"Boa escolha, agora deverá escolher um Tema. Creio que Amathea, a Aventureira poderá lhe guiar nisso, ela possui excelentes histórias. Você pode encontrá-la na biblioteca."}
], "aconteceu":false};

dialogo3 = { "indiceDialogo":0, "conteudo":[
    {"nome":"Amathea, a Aventureira", "texto":"Olá caro aventureiro, procurando dicas de aventura?"},
    {"nome":"Jogador", "texto":"..."},
    {"nome":"Amathea, a Aventureira", "texto":"O que é um Tema? Ora, é aquilo que o jogo é. Uma ideia que interliga todo o jogo, capaz de envolver mais as pessoas. Você pode criar Jogos com nenhum Tema ou contendo Temas frágeis, mas Jogos com Temas unificadores e ressonantes conseguiram Experiências mais intensas."},
    {"nome":"Amathea, a Aventureira", "texto":"Um Tema unificador foca os recursos do seu jogo na direção de um objetivo e um Tema ressonante é aquele que toca profundamente as pessoas. Nem todo Jogo precisa ter um Tema ressonante, pois mesmo que não tenha um ainda será reforçado por um Tema unificador."},
    {"nome":"Jogador", "texto":"..."},
    {"nome":"Amathea, a Aventureira", "texto":"Como escolher um Tema? Bom, você pode fazer um Jogo sobre tudo, qualquer história. Histórias, objetos, memórias, tudo pode ajudar você na escolha do seu Tema. Como uma vez em que derrotei uma tripulação de piratas e como recompensa recebi um baú cheio de tesouros. Ou outra em que achei um tesouro muito antigo num templo escondido por uma imensa floresta."},
    {"nome":"Amathea, a Aventureira", "texto":"Já sei! Por que não dá uma olhada nos livros da biblioteca e depois vem falar comigo? Assim, poderemos ter algumas ideias sobre o seu tema."},
],
"aconteceu" : false
};

dialogo4 = {"indiceDialogo":0, "conteudo":[
    {"pergunta":"Qual Tema você gostaria de escolher?", "alternativas":[{"valor":"Tema Pirata", "selecionado":false },{"valor":"Tema Mitológico", "selecionado":false },{"valor":"Tema Espacial", "selecionado":false },{"valor":"Tema Culinário", "selecionado":false}]},
    {"nome":"Amathea, a Aventureira", "texto":"Que maravilhoso! Seu Jogo vai ser incrível! Agora que você tem um Tema, poderá desenvolver a Ideia do seu Jogo. Vá para o bar falar com Mary, a Bartender. Ela é ótima para se debater algumas ideias."},

], "aconteceu": false};

dialogo5 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Mary, a Bartender", "texto":"Soube pela Ann, a Estalajadeira que você está querendo construir um Jogo. Do que precisa?"},
    {"nome": "Jogador", "texto":"..."},
    {"nome": "Mary, a Bartender", "texto":"Então você precisa de uma Ideia para construir seu Jogo. Bom, ideias em sua maioria não surgem do nada, é necessário pensar bastante. Uma sugestão é formular um problema. Formulando um problema deixará mais claro qual o objetivo do seu Jogo e as limitações que ele terá."},
    {"nome": "Mary, a Bartender", "texto":"Tendo seu problema você terá que pensar numa solução. Para isso é só seguir o processo de Brainstorming. Nesse processo você irá discutir e pensar em novas ideias com outras pessoas, sem críticas apenas produzindo o máximo de ideias que conseguirem. Terminado esse processo, você poderá filtrar as ideias produzidas e escolher as que parecem melhores para o seu Jogo."},
    {"nome": "Mary, a Bartender", "texto":"Você pode anotar ideias, desenhar, brincar, se concentrar, fazer qualquer coisa que lhe deixe confortável para torná-lo mais produtivo. Por que não conversa com algumas moradores que estão pelo bar para debater algumas ideias? Eles adoram saber sobre os Jogos que os aventureiros estão planejando construir. Quando terminar venha falar comigo."}
], "aconteceu": false};

dialogo6 = {"indiceDialogo":0, "conteudo":[
    {"pergunta":"Qual ideia você gostaria de escolher?", "alternativas":[{"valor":"Coletar Itens", "selecionado":false },{"valor":"Derrotar Monstros", "selecionado":false },{"valor":"Caverna de Misterios", "selecionado":false },{"valor":"Criar coisas", "selecionado":false}]},
    {"nome": "Mary a Bartender", "texto":"Agora você tem bastante coisa não? Não esqueça de documentar para não perder."},
    {"nome": "Jogador", "texto":"...."},
    {"nome": "Mary a Bartender", "texto":"Você não sabe o que é documentar?! Documentar é registrar tudo o que você produziu e pensou a respeito do seu Jogo. Para isso criamos o GDD ou Game Design Document. No GDD estará constado tudo sobre o seu Jogo, desde a Ideia, Tema, Narrativa, Fases produzidas, Mecânicas, tudo. Para que no futuro você não esqueça o que estava sendo feito no seu Jogo."},
    {"nome": "Mary a Bartender", "texto":"Ele servirá também como meio de comunicação para que outras pessoas possam saber como é o seu Jogo. Você pode criar seu GDD com a Ann, a Estalajadeira. Basta escrever no papel que está em cima do seu balcão. Depois de documentar seu Jogo fale com a Ann, a Estalajadeira, ela saberá como lhe guiar."}
], "aconteceu":false};

dialogo7 = {"indiceDialogo":0, "conteudo":[
    {"nome":"Ann, a Estalajadeira", "texto":"Ah! Já conseguiu tudo isso? Que notícia maravilhosa, está mais perto de criar seu Jogo. Antes de produzir seu Protótipo, vamos verificar alguns passos. Afinal, você deverá se preparar para os Jogadores."},
    {"nome":"Jogador", "texto":"..."},
    {"nome":"Ann, a Estalajadeira", "texto":"Ah! Os Jogadores são os guardiões da Experiência. É através deles que você conseguirá chegar no tão esperado tesouro que é a Experiência. Você deve conhecer bem cada tipo de Jogador, para saber se o seu Jogo consegue se encaixar nos perfis deles. Que tal falar com os aprendizes novamente?"},
]};

dialogo8 = {"indiceDialogo":0, "conteudo":[
    {"nome":"Ann, a Estalajadeira", "texto":" Agora que já sabe sobre os Jogadores, vamos dar uma olhada nas Mecânicas. Que tal relembrar? As Mecânicas são comportamentos, regras ou módulos que podem mudar o estado do Jogo. Elas podem ser primárias, quando usadas diretamente, ou secundárias, quando são usadas esporadicamente. Vejo que escolheu boas Mecânicas, por que não escolhe mais uma para deixar seu Jogo mais forte?"},
    {"pergunta":"Por que não escolhe mais uma para deixar seu Jogo mais forte?", "alternativas":[{"valor":"Administração de Recursos", "selecionado":false },{"valor":"Memória", "selecionado":false },{"valor":"Coleta de Itens", "selecionado":false },{"valor":"Negociação", "selecionado":false}]},
    {"nome":"Ann, a Estalajadeira", "texto":"Perfeito! Agora podemos construir seu Protótipo. O Protótipo é o que virá a ser seu Jogo finalizado. Ao montarmos o Protótipo, você poderá testar todos os elementos que escolheu para construir seu Jogo. Caso ocorra algum problema ou impedimento, você poderá sempre voltar para a etapa de Brainstorming para ver como poderá corrigir tais problemas."},
    {"nome":"Ann, a Estalajadeira", "texto":"O processo a ser realizado no seu Protótipo para a correção desses problemas é o Balanceamento. Através do Balanceamento problemas como pontuações altas demais, desafios impossíveis, habilidades desiguais, inimigos muito fortes ou fracos podem ser resolvidos. Existem vários tipos de Balanceamento, mas os mais comuns são os seguintes:"},
    {"lista":["Equidade, que diz respeito às vantagens e desvantagens dentro de um Jogo","Desafio e Sucesso, que diz respeito a quantidade de desafios e sucessos dos mesmos dentro de um Jogo;","Escolhas significativas, que diz respeito sobre as escolhas que podem ser tomadas dentro de um Jogo;","Habilidade e Probabilidade, que diz respeito sobre o quanto de habilidade ou probabilidade será utilizado dentro de um Jogo;","Corpo e Mente, que diz respeito sobre o quanto de habilidade física ou mental deverá ser utilizado dentro de um Jogo;", "Competição e Cooperação, que diz respeito se o Jogo será competitivo, cooperativo ou uma mistura de ambos;","Curto e Longo, que diz respeito ao tempo de duração da partida de um Jogo;","Recompensas, que diz respeito sobre como o jogador teve um bom desempenho dentro de um Jogo e como irá recompensá-lo por isso;","Punição, que diz respeito sobre como o jogador deverá ser castigado por adotar tal comportamento;","Liberdade e Experiência Controlada, que diz respeito ao quanto de controle será dado ao jogador dentro de um Jogo;","Simples e Complexo, que diz respeito ao nível de complexidade dentro de um Jogo;","Detalhe e Imaginação, que diz respeito ao equilíbrio entre esses dois aspectos para a experiência do jogador;"]},
    {"nome":"Ann, a Estalajadeira","texto":"O Balanceamento é extremamente importante para que o Jogo não se torne desagradável. Tudo checado, agora finalmente você tem seu Jogo e já pode sair para buscar o grande tesouro da Experiência. Não esqueça de documentar antes de sair!"}
]};


dialogoSave = {"indiceDialogo":0, "conteudo":[
    {"nome": "Tinta", "texto":"Você documentou seu jogo."}
], "aconteceu" : false};


dialogoLivro1 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Estante 1", "texto":" Aqui contém alguns livros sobre receitas e poções"}
], "aconteceu" : false};
dialogoLivro2 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Estante 2", "texto":"Uma bela epopéia sobre um guerreiro Llama em busca de sua amada Alpaca"}
], "aconteceu" : false};
dialogoLivro3 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Estante 3", "texto":" \"Administrando sua fazenda de lesmas: Tudo o que você precisa saber e o que não precisa saber para administrar uma fazenda de lesmas, vol. 1 a 25\""}
], "aconteceu" : false};
dialogoLivro4 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Estante 4", "texto":" \"As faces do blefe: como consegui ser o maior jogador de poker\" escrito por João Duas Caras"}
], "aconteceu" : false};
dialogoLivro5 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Estante 5", "texto":"\"Kraken e eu\", uma linda história de amor e intrigas sobre um pirata que se apaixona por um Kraken, um clássico"},
], "aconteceu" : false};
dialogoLivro6 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Estante 6", "texto":"\"Jornada dos céus\", uma história divertida sobre duas amigas estrelas visitando outros planetas"},
], "aconteceu" : false};


dialogoGenerico1 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Aprendiz", "texto":"Um Jogo em que eu tenha que correr pra coletar itens seria o que eu faria"},
], "aconteceu" : false};
dialogoGenerico2 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Aprendiz", "texto":"Derrotar monstros gigantes para ficar mais poderoso e ganhar mais tesouros"},
], "aconteceu" : false};
dialogoGenerico3 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Aprendiz", "texto":"Eu criaria meu Jogo para explorar uma caverna cheia de mistérios em busca de um tesouro muito raro"},
], "aconteceu" : false};
dialogoGenerico4 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Aprendiz", "texto":"Com meu Jogo eu criaria armas, feitiços e poções incríveis e muito poderosas"},
], "aconteceu" : false};

dialogoGenerico5 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Aprendiz", "texto":"Os Realizadores são um tipo de Jogador que gosta de alcançar objetivos e de resolverem desafios."},
], "aconteceu" : false};
dialogoGenerico6 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Aprendiz", "texto":"Os Exploradores são um tipo de Jogador que gosta de explorar todo o jogo ou seu mapa para descobrir novas coisas. Jogos que permitam a exploração de áreas irá agradar bastante esse perfil."},
], "aconteceu" : false};
dialogoGenerico7 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Aprendiz", "texto":"Os Socializadores são um tipo de Jogador que gosta de se relacionar com outras pessoas. O companheirismo é importante para esse tipo de Jogador. Jogos com o quesito de cooperatividade irá agradar bastante esse perfil."},
], "aconteceu" : false};
dialogoGenerico8 = {"indiceDialogo":0, "conteudo":[
    {"nome": "Aprendiz", "texto":"Os Predadores são um tipo de Jogador que gostam de competir com outras pessoas. Também gostam de destruir coisas e serem bastante influenciadores. Jogos que estimulem a competição ou que permita influência do jogo ou de jogadores irão agradar bastante esse perfil."},
], "aconteceu" : false};



