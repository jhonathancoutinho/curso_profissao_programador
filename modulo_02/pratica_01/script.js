function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade
}

const pessoa1 = new Pessoa ('Jhonathan', 32);

const pessoa2 = new Pessoa ('Beatriz', 23);

// Prototype

function Game (){
    this.pulou = () => alert('pulou');
    this.deitou = () => alert('deitou');
}

Game.prototype.correu = () => alert('correu');

const novoJogo = new Game ('Fifa');

// Classes

class Cidadao {
    constructor (name, idade){
        this.name = name
        this.idade = idade
    }

    andou(){
        alert(`${this.name} andou`)
    }
}

const cidadao1 = new Cidadao ('Jhonathan', 32);


// Rest e Spred

function estados(...estados) {
    console.log (estados)
}

estados ('CE', 'RJ', 'SP', 'RR', 'SC');