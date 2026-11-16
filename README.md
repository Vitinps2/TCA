# TCA
Jogo de simulação de academia
let nomeJogo = "Bebezinho Gym simulator";

let nome = prompt("Bem vindo a " + nomeJogo + "!\nDigite o nome do seu personagem:");

class novojogador {
  constructor(nome,energia,costas,peito,ombro,triceps,biceps,antibraco,abdomen,quadricipes,posterior,gluteo,panturilha){
  this.nome = nome;
  this.energia = energia;
  this.costas = costas;
	this.peito=  peito;
	this.ombro = ombro;
	this.triceps = triceps;
	this.biceps =  biceps;
	this.antibraco = antibraco;
	this.abdomen =  abdomen;
	this.quadricipes = quadricipes;
	this.posterior =  posterior;
	this.gluteo =  gluteo;
	this.panturilha = panturilha;
	}
}
class Meutreino{

  menucostas(){
    let exercicio = prompt( 
      "Escolha seu exercicio para as costas\n" +
      "1 - Puxada alta\n" +
      "2 - Barra fixa\n" +
      "3 - Remada baixa\n" +
      "4 - Pulldown\n"
    );
    if(exercicio == "1"){
      treinarcostas("Puxada alta");
    }
    else if(exercicio == "2"){
      treinarcostas("Barra fixa");
    }
    else if(exercicio == "3"){
      treinarcostas("Remada baixa");
    }
    else if(exercicio == "4"){
      treinarcostas("Pulldown");
    } 
	else{
	console.log("Exercicio invalido!");
	}
  }
menupeito(){
    let exercicio = prompt( 
      "Escolha seu exercicio para o peiot\n" +
      "1 - Supino reto\n" +
      "2 - Supino inclinado\n" +
      "3 - Supino declinado\n" +
      "4 - Voador\n" +
      "5 - Crossover\n"
    );
    if(exercicio == "1"){
      treinarpeito("Supino reto");
    }
    else if(exercicio == "2"){
      treinarpeito("Supino inclinado");
    }
    else if(exercicio == "3"){
      treinarpeito("Supino declinado");
    }
    else if(exercicio == "4"){
      treinarpeito("Voador");
    }
    else if(exercicio == "5"){
      treinarpeito("Crossover")
    }
    else{
	console.log("Exercicio invalido!");
      } 
    }
	 menuombro(){
      let exercicio = prompt( 
        "Escolha seu exercicio para o ombro!\n" +
        "1 - Elevação lateral\n" +
        "2 - Desenvolvimento\n" +
        "3 - Voador inverso\n" 
      );
      if(exercicio == "1"){
        treinarombro("Elevação lateral");
      }
      else if(exercicio == "2"){
        treinarombro("Desenvolvimento");
      }
      else if(exercicio == "3"){
        treinarombro("Voador inverso");
      }
      else{
	console.log("Exercicio invalido!");
        } 
      }
	   menutriceps(){
        let exercicio = prompt( 
          "Escolha seu exercicio para o triceps!\n" +
          "1 - Triceps puley\n" +
          "2 - Triceps Francês\n" +
          "3 - Triceps testa\n" 
        );
        if(exercicio == "1"){
          treinartriceps("Triceps puley");
        }
        else if(exercicio == "2"){
          treinartriceps("Triceps Francês");
        }
        else if(exercicio == "3"){
          treinartriceps("Triceps testa");
        }
        else{
	console.log("Exercicio invalido!");
          } 
        }
  }
  
let  menu = new Meutreino()
let jogador = new novojogador(nome, 100, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0)
let escolha = "";
while( escolha != "0"){

escolha = prompt( "Bem vindo a escolha de músculos!\n" +
 "1 - treinar costas!\n"+
 "2 - treinar peito!\n" + 
"3 - treinar ombro!\n" +
 "4 - treinar tricips!\n" +
 "5 - treinar biceps!\n" + 
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

if(typeof escolha == "string"){
  escolha = escolha.toLowerCase()}
if(escolha == "1"){
	menu.menucostas();
}else if(escolha == "2"){
	menu.menupeito();
}else if(escolha == "3"){
	menu.menuombro();
}else if(escolha == "4"){
	menu.menutriceps();
}else if(escolha == "5"){
	treinarbiceps();
}else if(escolha == "6"){
	treinarantibraco();
}else if(escolha == "7"){
	treinarabdomen();
}else if(escolha == "8"){
	treinarquadricipes();
}else if(escolha == "9"){
	treinarposterior();
}else if(escolha == "10"){
	treinargluteo();
}else if(escolha == "11"){	
	treinarpanturilha();
}else if( escolha == "12"){
  descansar();
}else if ( escolha == "0"){
console.log("Obrigado por jogar!")
}else{
console.log("Opção invalida!")
}

console.clear();
console.log("nome", jogador.nome);
console.log("costas", jogador.costas);
console.log("peito", jogador.peito);
console.log("ombro", jogador.ombro);
console.log("tricipes", jogador.triceps);
console.log("bicepes", jogador.biceps);
console.log("antibraco", jogador.antibraco);
console.log("abdomen", jogador.abdomen);
console.log("quadricipes", jogador.quadricipes);
console.log("posterior", jogador.posterior);
console.log("gluteo", jogador.gluteo);
console.log("panturilha", jogador.panturilha);
console.log("energia", jogador.energia);
}
function treinarcostas(nomeExercicio){
if( jogador.energia >= 10){
jogador.costas ++;
jogador.biceps +=0.5;
jogador.antibraco +=0.5;
jogador.energia -=10;
console.log( "Exercício realizado:", nomeExercicio);
console.log("Treino concluído");
}else{
console.log("Não pode treinar: energia insuficiente!");
	}
}
function treinarpeito(nomeExercicio){
if( jogador.energia >= 10){
jogador.peito ++; 
  jogador.triceps += 0.5;
  jogador.ombro += 0.5;
  jogador.energia -= 10;
  console.log( "Exercício realizado:", nomeExercicio);
  console.log("Treino concluído");
  }else{
  console.log("Não pode treinar: energia insuficiente!");
    }
  }
function treinarquadricipes(){
if( jogador.energia >= 10){
jogador.quadricipes ++;
jogador.energia -=10;
console.log( "Pode treinar")
}else{
console.log("Não pode treinar")
	}
}
function treinarposterior(){
if( jogador.energia >= 10){
jogador.posterior ++;
jogador.energia -=10;
console.log( "Pode treinar")
}else{
console.log("Não pode treinar")
	}
}
function treinarombro(nomeExercicio){
if( jogador.energia >= 5){
jogador.ombro ++;
jogador.energia -=5;
 console.log( "Exercício realizado:", nomeExercicio);
  console.log("Treino concluído");
  }else{
  console.log("Não pode treinar: energia insuficiente!");
    }
  }
function treinartriceps(nomeExercicio){
if( jogador.energia >= 5 ){
jogador.triceps ++;
jogador.energia -=5;
console.log( "Exercício realizado:", nomeExercicio);
  console.log("Treino concluído");
  }else{
  console.log("Não pode treinar: energia insuficiente!");
    }
  }
function treinarbiceps(){
if( jogador.energia >= 5){
jogador.biceps ++;
jogador.energia -=5;
console.log( "Pode treinar")
}else{
console.log("Não pode treinar")
	}
}
function treinarantibraco(){
if( jogador.energia >= 5){
jogador.antibraco ++;
jogador.energia -=5;
console.log( "Pode treinar")
}else{
console.log("Não pode treinar")
	}
}
function treinargluteo(){
if( jogador.energia >= 10){
jogador.gluteo ++;
jogador.energia -=10;
console.log( "Pode treinar")
}else{
console.log("Não pode treinar")
	}
}
function treinarpanturilha(){
if( jogador.energia >= 5){
jogador.panturilha ++;
jogador.energia -=5;
console.log( "Pode treinar")
}else{
console.log("Não pode treinar")
	}
}
function treinarabdomen(){
if( jogador.energia >= 5){
jogador.abdomen ++;
jogador.energia -=5;
console.log( "Pode treinar")
}else{
console.log("Não pode treinar")
	}
}

function descansar(){
  if(jogador.energia < 100){
    jogador.energia = jogador.energia +10;
    if(jogador.energia > 100){
      jogador.energia = 100;
    }
    console.log("Você descansou!")
  }else{
    console.log("Sua energia está no máximo!")
  }
}

