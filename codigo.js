Jogo de simulação de academia
let nomeJogo = "Bebezinho Gym simulator";

let nome = prompt("Bem vindo a " + nomeJogo + "!\nDigite o nome do seu personagem:");

class novojogador {
    constructor(nome, energia, costas, peito, ombro, triceps, biceps, antebraco, abdomen, quadriceps, posterior, gluteo, panturilha) {
        this.nome = nome;
        this.energia = energia;
        this.costas = costas;
        this.peito = peito;
        this.ombro = ombro;
        this.triceps = triceps;
        this.biceps = biceps;
        this.antebraco = antebraco;
        this.abdomen = abdomen;
        this.quadriceps = quadriceps;
        this.posterior = posterior;
        this.gluteo = gluteo;
        this.panturilha = panturilha;
    }
}
class Meutreino {

    menucostas() {
        let exercicio = prompt(
            "Escolha seu exercicio para as costas\n" +
            "1 - Puxada alta\n" +
            "2 - Barra fixa\n" +
            "3 - Remada baixa\n" +
            "4 - Pulldown\n"
        );
        if (exercicio == "1") {
            treinarcostas("Puxada alta");
        } else if (exercicio == "2") {
            treinarcostas("Barra fixa");
        } else if (exercicio == "3") {
            treinarcostas("Remada baixa");
        } else if (exercicio == "4") {
            treinarcostas("Pulldown");
        } else {
            console.log("Exercicio invalido!");
        }
    }
    menupeito() {
        let exercicio = prompt(
            "Escolha seu exercicio para o peiot\n" +
            "1 - Supino reto\n" +
            "2 - Supino inclinado\n" +
            "3 - Supino declinado\n" +
            "4 - Voador\n" +
            "5 - Crossover\n"
        );
        if (exercicio == "1") {
            treinarpeito("Supino reto");
        } else if (exercicio == "2") {
            treinarpeito("Supino inclinado");
        } else if (exercicio == "3") {
            treinarpeito("Supino declinado");
        } else if (exercicio == "4") {
            treinarpeito("Voador");
        } else if (exercicio == "5") {
            treinarpeito("Crossover")
        } else {
            console.log("Exercicio invalido!");
        }
    }
    menuombro() {
        let exercicio = prompt(
            "Escolha seu exercicio para o ombro!\n" +
            "1 - Elevação lateral\n" +
            "2 - Desenvolvimento\n" +
            "3 - Voador inverso\n"
        );
        if (exercicio == "1") {
            treinarombro("Elevação lateral");
        } else if (exercicio == "2") {
            treinarombro("Desenvolvimento");
        } else if (exercicio == "3") {
            treinarombro("Voador inverso");
        } else {
            console.log("Exercicio invalido!");
        }
    }
    menutriceps() {
        let exercicio = prompt(
            "Escolha seu exercicio para o triceps!\n" +
            "1 - Triceps puley\n" +
            "2 - Triceps Francês\n" +
            "3 - Triceps testa\n"
        );
        if (exercicio == "1") {
            treinartriceps("Triceps puley");
        } else if (exercicio == "2") {
            treinartriceps("Triceps Francês");
        } else if (exercicio == "3") {
            treinartriceps("Triceps testa");
        } else {
            console.log("Exercicio invalido!");
        }
    }
    menubiceps() {
        let exercicio = prompt(
            "Escolha seu exercicio para o biceps!\n" +
            "1 - Rosca direta\n" +
            "2 - Rosca scott\n" +
            "3 - Rosca spider\n"
        );
        if (exercicio == "1") {
            treinarbiceps("Rosca direta");
        } else if (exercicio == "2") {
            treinarbiceps("Rosca scott");
        } else if (exercicio == "3") {
            treinarbiceps("Rosca spider");
        } else {
            console.log("Exercicio invalido!");
        }
    }
    menuantebraco() {
        let exercicio = prompt(
            "Escolha seu exercicio para o antebraco!\n" +
            "1 - Rosca inversa\n" +
            "2 - Rosca martelo\n" +
            "3 - Rosca punho\n"
        );
        if (exercicio == "1") {
            treinarantebraco("Rosca inversa");
        } else if (exercicio == "2") {
            treinarantebraco("Rosca martelo");
        } else if (exercicio == "3") {
            treinarantebraco("Rosca punho");
        } else {
            console.log("Exercicio invalido!");
        }
    }
    menuabdomen() {
        let exercicio = prompt(
            "Escolha seu exercicio para o abdomen!\n" +
            "1 - Abdominal supra\n" +
            "2 - Abdominal infra\n" +
            "3 - O bliquo\n"
        );
        if (exercicio == "1") {
            treinarabdomen("Abdominal supra");
        } else if (exercicio == "2") {
            treinarabdomen("Abdominal infra");
        } else if (exercicio == "3") {
            treinarabdomen("Obliquo");
        } else {
            console.log("Exercicio invalido!");
        }
    }
    menugluteo() {
        let exercicio = prompt(
            "Escolha seu exercicio para o gluteo!\n" +
            "1 - Bulgaro\n" +
            "2 - Afundo\n" +
            "3 - Elevação pélvica\n"
        );
        if (exercicio == "1") {
            treinargluteo("Bulgaro");
        } else if (exercicio == "2") {
            treinargluteo("Afundo");
        } else if (exercicio == "3") {
            treinargluteo("Elevação pélvica");
        } else {
            console.log("Exercicio invalido!");
        }
    }
    menupanturilha() {
        let exercicio = prompt(
            "Escolha seu exercicio para a panturilha!\n" +
            "1 - Panturilha em pé no hack\n" +
            "2 - Panturilha sentado\n" +
            "3 - Panturilha em pé no legg 45\n"
        );
        if (exercicio == "1") {
            treinarpanturilha("Panturilha em pé no hack");
        } else if (exercicio == "2") {
            treinarpanturilha("Panturilha sentado");
        } else if (exercicio == "3") {
            treinarpanturilha("Panturilha em pé no legg 45");
        } else {
            console.log("Exercicio invalido!");
        }
    }
    menuquadriceps() {
        let exercicio = prompt(
            "Escolha seu exercicio para o quadriceps!\n" +
            "1 -  Agachamento no hack pendulo\n" +
            "2 - Legg 45 \n" +
            "3 - Cadeira extensora\n"
        );
        if (exercicio == "1") {
            treinarquadriceps("Agachamento no hack pendulo");
        } else if (exercicio == "2") {
            treinarquadriceps("Legg 45");
        } else if (exercicio == "3") {
            treinarquadriceps("Cadeira extensora");
        } else {
            console.log("Exercicio invalido!");
        }
    }
    menuposterior() {
        let exercicio = prompt(
            "Escolha seu exercicio para o posterior!\n" +
            "1 -  Stiff\n" +
            "2 - Mesa flexora em pé\n" +
            "3 - Levantamento terra\n"
        );
        if (exercicio == "1") {
            treinarposterior("Stiff");
        } else if (exercicio == "2") {
            treinarposterior("Mesa flexora em pé");
        } else if (exercicio == "3") {
            treinarposterior("Levantamento terra");
        } else {
            console.log("Exercicio invalido!");
        }
    }
}

let menu = new Meutreino()
let jogador = new novojogador(nome, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
let escolha = "";
while (escolha != "0") {

    escolha = prompt("Bem vindo a escolha de músculos!\n" +
        "1 - treinar costas!\n" +
        "2 - treinar peito!\n" +
        "3 - treinar ombro!\n" +
        "4 - treinar triceps!\n" +
        "5 - treinar biceps!\n" +
        "6 - treinar antebraco!\n" +
        "7 - treinar abdomen!\n" +
        "8 - treinar quadriceps!\n" +
        "9 - treinar posterior!\n" +
        "10 - treinar gluteo!\n" +
        "11 - treinar panturilha!\n" +
        "0 - sair\n" +
        "12 - descansar\n" +
        "Digite o número de qual músculo você gostaria de começar:"
    );

    if (typeof escolha == "string") {
        escolha = escolha.toLowerCase()
    }
    if (escolha == "1") {
        menu.menucostas();
    } else if (escolha == "2") {
        menu.menupeito();
    } else if (escolha == "3") {
        menu.menuombro();
    } else if (escolha == "4") {
        menu.menutriceps();
    } else if (escolha == "5") {
        menu.menubiceps();
    } else if (escolha == "6") {
        menu.menuantebraco();
    } else if (escolha == "7") {
        menu.menuabdomen();
    } else if (escolha == "8") {
        menu.menuquadriceps();
    } else if (escolha == "9") {
        menu.menuposterior();
    } else if (escolha == "10") {
        menu.menugluteo();
    } else if (escolha == "11") {
        menu.menupanturilha();
    } else if (escolha == "12") {
        descansar();
    } else if (escolha == "0") {
        console.log("Saindo do jogo!")
    } else {
        console.log("Opção invalida!")
    }

    console.clear();
    console.log("nome", jogador.nome);
    console.log("costas", jogador.costas);
    console.log("peito", jogador.peito);
    console.log("ombro", jogador.ombro);
    console.log("tricipes", jogador.triceps);
    console.log("bicepes", jogador.biceps);
    console.log("antebraco", jogador.antebraco);
    console.log("abdomen", jogador.abdomen);
    console.log("quadriceps", jogador.quadriceps);
    console.log("posterior", jogador.posterior);
    console.log("gluteo", jogador.gluteo);
    console.log("panturilha", jogador.panturilha);
    console.log("energia", jogador.energia);
}

function treinarcostas(nomeExercicio) {
    if (jogador.energia >= 10) {
        jogador.costas++;
        jogador.biceps += 0.5;
        jogador.antebraco += 0.5;
        jogador.energia -= 10;
        console.log("Exercício realizado:", nomeExercicio);
        console.log("Treino concluído");
    } else {
        console.log("Não pode treinar: energia insuficiente!");
    }
}

function treinarpeito(nomeExercicio) {
    if (jogador.energia >= 10) {
        jogador.peito++;
        jogador.triceps += 0.5;
        jogador.ombro += 0.5;
        jogador.energia -= 10;
        console.log("Exercício realizado:", nomeExercicio);
        console.log("Treino concluído");
    } else {
        console.log("Não pode treinar: energia insuficiente!");
    }
}

function treinarquadriceps(nomeExercicio) {
    if (jogador.energia >= 10) {
        jogador.quadriceps++;
        jogador.panturilha += 0.5;
        jogador.energia -= 10;
        console.log("Exercício realizado:", nomeExercicio);
        console.log("Treino concluído");
    } else {
        console.log("Não pode treinar: energia insuficiente!");
    }
}

function treinarposterior(nomeExercicio) {
    if (jogador.energia >= 10) {
        jogador.posterior++;
        jogador.gluteo += 0.5;
        jogador.energia -= 10;
        console.log("Exercício realizado:", nomeExercicio);
        console.log("Treino concluído");
    } else {
        console.log("Não pode treinar: energia insuficiente!");
    }
}

function treinarombro(nomeExercicio) {
    if (jogador.energia >= 5) {
        jogador.ombro++;
        jogador.energia -= 5;
        console.log("Exercício realizado:", nomeExercicio);
        console.log("Treino concluído");
    } else {
        console.log("Não pode treinar: energia insuficiente!");
    }
}

function treinartriceps(nomeExercicio) {
    if (jogador.energia >= 5) {
        jogador.triceps++;
        jogador.energia -= 5;
        console.log("Exercício realizado:", nomeExercicio);
        console.log("Treino concluído");
    } else {
        console.log("Não pode treinar: energia insuficiente!");
    }
}

function treinarbiceps(nomeExercicio) {
    if (jogador.energia >= 5) {
        jogador.biceps++;
        jogador.energia -= 5;
        console.log("Exercício realizado:", nomeExercicio);
        console.log("Treino concluído");
    } else {
        console.log("Não pode treinar: energia insuficiente!");
    }
}

function treinarantebraco(nomeExercicio) {
    if (jogador.energia >= 5) {
        jogador.antebraco++;
        jogador.biceps += 0.5;
        jogador.energia -= 5;
        console.log("Exercício realizado:", nomeExercicio);
        console.log("Treino concluído");
    } else {
        console.log("Não pode treinar: energia insuficiente!");
    }
}

function treinargluteo(nomeExercicio) {
    if (jogador.energia >= 10) {
        jogador.gluteo++;
        jogador.energia -= 10;
        console.log("Exercício realizado:", nomeExercicio);
        console.log("Treino concluído");
    } else {
        console.log("Não pode treinar: energia insuficiente!");
    }
}

function treinarpanturilha(nomeExercicio) {
    if (jogador.energia >= 5) {
        jogador.panturilha++;
        jogador.energia -= 5;
        console.log("Exercício realizado:", nomeExercicio);
        console.log("Treino concluído");
    } else {
        console.log("Não pode treinar: energia insuficiente!");
    }
}

function treinarabdomen(nomeExercicio) {
    if (jogador.energia >= 5) {
        jogador.abdomen++;
        jogador.energia -= 5;
        console.log("Exercício realizado:", nomeExercicio);
        console.log("Treino concluído");
    } else {
        console.log("Não pode treinar: energia insuficiente!");
    }
}

function descansar() {
    if (jogador.energia < 100) {
        jogador.energia = jogador.energia + 10;
        if (jogador.energia > 100) {
            jogador.energia = 100;
        }
        console.log("Você descansou!")
    } else {
        console.log("Sua energia está no máximo!")
    }
}
