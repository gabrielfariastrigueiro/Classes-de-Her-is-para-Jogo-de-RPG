/*
  Classe Heroi para RPG
  Atributos: nome, idade, tipo
  Método: atacar() - exibe o ataque conforme o tipo
*/

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    atacar() {
        const ataques = {
            "mago": "usou magia",
            "guerreiro": "usou espada",
            "monge": "usou artes marciais",
            "ninja": "usou shuriken"
        };

        const ataque = ataques[this.tipo] || "usou um ataque desconhecido";
        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
        
        console.log(mensagem);
        return mensagem;
    }
}

module.exports = Heroi;
