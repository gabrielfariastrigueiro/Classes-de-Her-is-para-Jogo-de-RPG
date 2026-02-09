 Classes-de-Herois-para-Jogo-de-RPG
 🎮 Heroi RPG - Sistema de Classes para Jogos

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-✨_Funcional-brightgreen?style=for-the-badge)

**Uma biblioteca simples e poderosa para criar heróis de RPG em JavaScript**

[✨ Demonstração](#-demonstração) • [🚀 Começando](#-começando) • [🎮 Como Usar](#-como-usar) • [🛡️ Tipos de Heróis](#️-tipos-de-heróis) • [🤝 Contribuindo](#-contribuindo)

</div>

 📖 Sobre o Projeto

**Heroi RPG** é uma implementação elegante em JavaScript do desafio proposto pelo bootcamp da DIO. Transformamos um simples exercício em uma biblioteca reutilizável e extensível para criação de sistemas de RPG.

 ✨ Características Principais

- ✅ Sistema de classes orientado a objetos
- ✅ 4 tipos de heróis com ataques únicos
- ✅ Código limpo e bem documentado
- ✅ *Fácil extensão para novos tipos
- ✅ Zero dependências - puro JavaScript
- ✅ Pronto para produção

</div>

## 🚀 Começando

 📦 Instalação Rápida

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/herois-rpg.git

# 2. Entre na pasta
cd herois-rpg

# 3. Execute o exemplo
npm start
```

 ⚡ Uso Direto (sem instalação)

```bash
# Baixe apenas o arquivo principal
wget https://raw.githubusercontent.com/seu-usuario/herois-rpg/main/Heroi.js

# Use imediatamente no seu projeto
```

 🎮 Como Usar

 📝 Exemplo Básico

```javascript
const Heroi = require('./Heroi.js');

// Crie seu herói
const meuHeroi = new Heroi("Aragorn", 87, "guerreiro");

// Faça-o atacar
meuHeroi.atacar();
// Saída: ⚔️ "o guerreiro atacou usando usou espada"
```

 ⚔️ Crie uma Equipe Completa

```javascript
// Equipe lendária
const fellowship = [
    new Heroi("Gandalf", 2019, "mago"),
    new Heroi("Aragorn", 87, "guerreiro"),
    new Heroi("Legolas", 2931, "ninja"), // Elfo como ninja!
    new Heroi("Gimli", 139, "guerreiro")
];

// Batalha épica!
fellowship.forEach(heroi => {
    console.log(`⚡ ${heroi.nome} entra em ação!`);
    heroi.atacar();
});
```

🎯 Saída da Batalha

```
⚡ Gandalf entra em ação!
🧙‍♂️ o mago atacou usando usou magia

⚡ Aragorn entra em ação!
⚔️ o guerreiro atacou usando usou espada

⚡ Legolas entra em ação!
🥷 o ninja atacou usando usou shuriken

⚡ Gimli entra em ação!
⚔️ o guerreiro atacou usando usou espada
```

 🛡️ Tipos de Heróis

<div align="center">

| Tipo | Ícone | Ataque | Exemplo | Dano (💥) |
|------|-------|---------|---------|-----------|
| Mago | 🧙‍♂️ | `usou magia` | `new Heroi("Merlin", 150, "mago")` | Alta (✨) |
| Guerreiro | ⚔️ | `usou espada` | `new Heroi("Conan", 30, "guerreiro")` | Média (⚔️) |
| Monge | 🧘‍♂️ | `usou artes marciais` | `new Heroi("Bruce", 32, "monge")` | Alta (🥋) |
| Ninja | 🥷 | `usou shuriken` | `new Heroi("Naruto", 16, "ninja")` | Média (🌟) |

</div>

 🚀 Exemplos Avançados

 🔄 Sistema de Batalha por Turnos

```javascript
class Batalha {
    constructor(heroi1, heroi2) {
        this.heroi1 = heroi1;
        this.heroi2 = heroi2;
        this.turno = 1;
    }

    iniciar() {
        console.log(`🏰 BATALHA: ${this.heroi1.nome} vs ${this.heroi2.nome}\n`);
        
        while(this.turno <= 3) {
            console.log(`🎯 TURNO ${this.turno}:`);
            this.heroi1.atacar();
            this.heroi2.atacar();
            console.log("---");
            this.turno++;
        }
        
        console.log("🏆 Batalha concluída!");
    }
}

// Use a batalha
const batalha = new Batalha(
    new Heroi("Mago Negro", 150, "mago"),
    new Heroi("Samurai", 45, "guerreiro")
);

batalha.iniciar();
```

 🎨 Personalize Seus Heróis

```javascript
// Adicione novos tipos facilmente
const HeroiPersonalizado = class extends require('./Heroi.js') {
    constructor(nome, idade, tipo) {
        super(nome, idade, tipo);
        
        // Adicione habilidades especiais
        this.ataques = {
            "mago": "lançou uma bola de fogo 🔥",
            "guerreiro": "desferiu um golpe crítico 💥",
            "monge": "executou um combo de 10 golpes 👊",
            "ninja": "lançou shurikens envenenados ☠️",
            "arqueiro": "disparou uma flecha precisa 🎯", // Novo!
            "druida": "invocou os espíritos da natureza 🌿" // Novo!
        };
    }
};
```

## 📁 Estrutura do Projeto

```
herois-rpg/
├── Heroi.js          # 🏗️  Classe principal do herói
├── exemplo.js        # 🎮  Exemplos de uso prático
├── package.json      # 📦  Configuração do projeto
├── README.md         # 📖  Esta documentação
└── .gitignore        # 👻  Arquivos ignorados pelo Git
```

 🛠️ API Reference

  ### `Heroi` Classe

 Construtor
```javascript
new Heroi(nome: string, idade: number, tipo: string)
```

 Métodos
| Método | Descrição | Retorno |
|--------|-----------|---------|
| `atacar()` | Executa o ataque do herói | `string` (mensagem) |

 Propriedades
| Propriedade | Tipo | Descrição |
|-------------|------|-----------|
| `nome` | `string` | Nome do herói |
| `idade` | `number` | Idade em anos |
| `tipo` | `string` | Tipo (mago, guerreiro, monge, ninja) |

## 🤝 Contribuindo

Quer tornar este projeto ainda mais épico? Siga estes passos:

1. Fork o projeto 🍴
2. Crie sua feature branch (`git checkout -b feature/ClasseNova`)
3. Commit suas mudanças (`git commit -m 'Adiciona classe de Arqueiro 🎯'`)
4. Push para a branch (`git push origin feature/ClasseNova`)
5. Abra um Pull Request 🚀



 🏆 Projeto do Bootcamp DIO

Este projeto foi inspirado no desafio do **Bootcamp da Digital Innovation One**


 ⭐ Gostou do projeto?

Deixe uma estrela no GitHub! Isso ajuda muito! ⭐



Feito com ❤️ e muito café ☕



</div>
