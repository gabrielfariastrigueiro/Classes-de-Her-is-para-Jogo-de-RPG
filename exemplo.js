const Heroi = require('./Heroi.js');

console.log("🎮 HERÓIS EM AÇÃO!\n");

// Criando heróis
const herois = [
    new Heroi("Merlin", 150, "mago"),
    new Heroi("Arthur", 35, "guerreiro"),
    new Heroi("Li", 40, "monge"),
    new Heroi("Hanzo", 28, "ninja"),
    new Heroi("Desconhecido", 100, "elfo") // Tipo inválido
];

// Cada herói ataca
herois.forEach((heroi, index) => {
    console.log(`Heroi ${index + 1}: ${heroi.nome}`);
    heroi.atacar();
    console.log("---");
});

console.log("\n⚔️  BATALHA EPICA!");
console.log("==================");
herois[0].atacar(); // Mago ataca
herois[1].atacar(); // Guerreiro ataca
