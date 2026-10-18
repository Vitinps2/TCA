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
