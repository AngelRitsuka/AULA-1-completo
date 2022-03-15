//criar as variaveis
var trex;
var trexAnimation;


//função para precarregar imagens, sons e animações
function preload()
{
 trexAnimation = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}


//função para criação de tela, personagens e outros
function setup()
{
 //criar a tela
 createCanvas(600,200);

 //criar trex
 trex = createSprite(25,170,20,20);
 trex.addAnimation("trexCorrendo", trexAnimation);
 //redimencionando a animação
 trex.scale = 0.5;

}


//função para fazer as coisas funcionarem dentro da tela
function draw()
{
//fundo
background("black");

drawSprites();
}