class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch(this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = '';
        }

        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

// Exemplo de uso
let heroi = new Heroi('John', 25, 'mago');
console.log(heroi.atacar());  // Saída: "O mago atacou usando usou magia"
