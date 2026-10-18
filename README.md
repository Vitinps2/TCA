# TCA
Jogo de simulação de academia
let nomeJogo = "Bebezinho Gym simulator";

let nome = prompt("Bem vindo a " + nomeJogo + "!\nDigite o nome do seu personagem:");

let jogador = {
	nome:nome,
	dinheiro: 0,
	energia: 100,
	costas: 0,
	peito:0,
	ombro:0,
	tricipes:0,
	bicepes:0,
	antibraco:0,
	abdomen:0,
	quadricipes:0,
	posterior:0,
	gluteo:0,
	panturilha:0
	};
let escolha = "";
while( escolha != "0"){

escolha = prompt( "Bem vindo a escolha de músculos!\n" +
 "1 - treinar costas!\n"+
 "2 - treinar peito!\n" + 
"3 - treinar ombro!\n" +
 "4 - treinar tricipes!\n" +
 "5 - treinar bicepes!\n" + 
"6 - treinar antibraco!\n" + 
"7 - treinar abdomen!\n" + 
"8 - treinar quadricipes!\n" + 
"9 - treinar posterior!\n" + 
"10 - treinar gluteo!\n" + 
"11 - treinar panturilha!\n" +
"0 - sair\n" +
"12 - descansar\n" +
"Digite o número de qual músculo você gostaria de começar:"
);

