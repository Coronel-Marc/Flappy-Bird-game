
//Cria o estado principal que irá conter o game
var mainState = {
    preload: function() {
        //Função que será executada ao iniciar
        //Todos os arquivos de media serão carregados aqui

        
        game.load.image('bird', 'media/bird.png'); //Carrega o sprite do passaro
    },

    create: function(){
        //Função chamad após a função preload()
        //Configuração do game, display sprites, etc

        game.state.backgroundColor = '#71c5cf'; //define a cor de fundo para azul

        game.physics.startSystem(Phaser.physics.ARCADE); //cria o sistema de física no game

        this.bird = game.add.sprite(100, 245, 'bird'); // Posiciona o passaro na tela nos eixos x=100 e y=245


        //Adicionando física ao pássaro, necessário para movimentação, gravidade, colisões, etc.
        game.physics.arcade.enable(this.bird);

        this.bird.body.gravity.y = 1000; //Adiciona gravidade ao pássaro

        //chama a função 'jump()' quando a barra de espaço é pressionada
        var spaceKey = game.input.keyboard.addkey(
            Phaser.keyboard.SPACEBAR
        
        );
        spaceKey.onDown.add(this.jump, this);

    },

    update: function() {
        //Função chamada 60 vezes por segundo, dando o efeito de movimento no game
        //Também contém toda a lógica do game



        //Se o pássaro sair da tela(muito alto ou muito baixo) é chamada a função 'restartGame()'
        if(this.bird,y < 0 || this.bird.y > 490)
            this.restartGame();

    },

    jump: function(){
        //Função que faz o pássaro pular

        this.bird.body.velocity.y = -350; //Adiciona uma velocidade vertical ao pássaro
    },

    restartGame: function (){
        //Reseta o game

        game.state.start('main'); //Inicia o estado inicial da aplicação, que reinicia o game
    },
};

//Inicializa o Phaser, e cria um box de 400px por 490px
const game = new Phaser.Game(400, 490);

//Adiciona o 'mainState' e chama o 'main' dentro do game
game.state.add('main', mainState);

//Inicia o game
game.state.start('main');