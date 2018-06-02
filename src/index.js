/* var map = new Map();
function funcao() {}
var objeto = {};

map.set("string", "sou uma string");
map.set(objeto, "sou um objeto");
map.set(funcao, "sou umna funcao");

console.log(map.get("string"));
console.log(map.get(objeto));
console.log(map.get(funcao));

console.log ("tamanho: " + map.size);
console.log(map.has("string"));
console.log(map.has("abc"));
map.delete("string");
console.log("has string: " + map.has("string"));
map.clear;
console.log("tamanho: " + map.size);

// map é iteravel

var mapa = new Map();
mapa.set('um', 1);
mapa.set('dois',2);
mapa.set('tres', 3);

for (var chave of mapa.keys()){
  console.log(chave);
}

for (var valor of mapa.values()){
  console.log(valor)
}

for (var entrada of mapa.entries()){
  console.log(entrada)
}
*/
// 6.2 weakmap

//var weakMap = new WeakMap();
//var elemento1 = window;
//var elemento2 = document.querySelector('body');
//weakMap.set(elemento1,'sou elemento1');
//weakMap.set(elemento2, 'sou elemento2');
//console.log(weakMap.get(elemento1));
//console.log(weakMap.get(elemento2));

// elemento2.parentNode.removeChild(elemento2);
// elemento2 =null;
// console.log(weakMap.get(elemento2));
/*
var weakMap = new WeakMap();
function funcao(){};
var objeto = {};
//weakMap.set("string", "isso é uma string");
weakMap.set(funcao, "isso é uma funcao");
weakMap.set(objeto, "isso é um objeto");
// exemplos

function Pessoa(nome) {
  this._nome = nome;
}

Pessoa.prototype.getNome = function() {
  return this._nome;
};

var robert = new Pessoa("Robert");
console.log(robert.getNome());
console.log(robert._nome);

// agora com Weakmap

var pessoa = function() {
  var dadosPrivados = new WeakMap();

  function pessoa(nome) {
    dadosPrivados.set(this, { nome: nome });
  }
  Pessoa.prototype.getNome = function() {
    return dadosPrivados.get(this).nome;
  };
  return Pessoa;
};

var rafael = new Pessoa("rafael");
console.log(rafael.getNome());
console.log(rafael.nome);
*/
// ADMINISTRANDO	UMA	BIBLIOTECA
/*
var livros = [
  { titulo: "pinoquio", estante: 2 },
  { titulo: "pinoquio", estante: 2 }
];

var estantes = new Map();
for (var livro of livros) {
  estantes.set(livro.getTitulo(), livro.getEstante());
}

function getLocalizacaoDoLivro(tituloDolivro) {
  var estante = estantes.get(tituloDolivro);
  if (estante === undefined) {
    return "Livro não encontrado no acervo";
  }
}
*/
/*
function Set() {
  var array = [];
  (this.add = function(valor) {
    if (array.indexOf(valor) === -1) {
      array.push(valor);
    }
  }),
    (this.mostraValores = function() {
      console.log(array);
    });
}

var set = new Set();
set.add(2);
set.add(1);
set.add(2);
set.mostraValores();
*/

// 7.1 SET

// 7.2 Weakset
/*
var musica = {
  titulo: "o amor nao tem rollback",
  autor: 'sql'
}
var musicas = new WeakSet([musica]);

console.log(musicas)
musica = null;
console.log(musicas)

// DECLARAÇÃO	DE  VARIÁVEIS	COM	CONST	E LET
//	exemplos

var objeto = {};	//	objeto
var numero = 1;	//	numero
var nome = "Chaves";	//	string
var lista = [1, 2, 3];	//	lista


var texto = 'texto ';
var idade = 10;

console.log(texto + idade);

 // 8.1	CONSTANTES	COM	CONST

//const dataNascimento = '21/07/1992';

// dataNascimento = '25/08/1993'; // erro

const pessoa = { nome: 'joao'};
pessoa.idade = 12;
console.log(pessoa);

const novaPessoa = {nome: 'maria'};

pessoa = novaPessoa; //erro 



// 8.2	LET	É	O	NOVO	VAR

function soma(a,b){
  return a + b;
}
let resultado = 0;
resultado = soma(2, 3);

console.log(resultado);

var id = 1;
var id = 2 ;
console.log(id);

// let id = 1; // erro o let ve que tem a vairaiavel ja declarada
// const id = 1; // mesmco com o let



// 8.3	 QUAL	 A	 DIFERENÇA, NO	 FINAL	 DAS CONTAS ?

// diferencas de escope entre var  let / const

var mensagem = "ola";
{
  var mensagem = "adeus";
}
console.log(mensagem); // adeus

// para mudar é necessario cirar uma funcao que delimita o contexto da segunda variavel

var mensagem = "ola";
function mensagem() {
  var mensagem = "adeus";
}
console.log(mensagem); // olá

// No ES6

const arrayVar = [];

for (var i = 1; i < 5; i++) {
  arrayVar.push(function() {
    console.log("var " + i);
  });
}

const arrayLet = [];

for (let i = 1; i < 5; i++) {
  arrayLet.push(function() {
    console.log("let " + i);
  });
}
// i=10; //bizarro!!! atribui um novo valor
arrayVar.forEach(function(funcao) {
  funcao();
});

arrayLet.forEach(function(funcao) {
  funcao();
});



// Hoisting - nome dado ao comportamento de mover declaracoes para o topo de um escopo (global ou nao)
// -- signica usar uma variavel ou funcao antes mesmo de decalralas no codigo

imprimirNome('tabata');

function imprimirNome(nome) {
  console.log(nome)
}

// no ES6 exizte TEMPORAL DEAD ZONE 

let valor = 0;

if (true) {
  // novo escopo, tdz do valor comoca

  // ao acessa variavel reference error pq ela e uma variavel que nao foi inicializada

  console.log(valor); // reference error

  let valor; // undefined
   console.log(valor);//undefined

   valor=1;
   console.log(valor); //1
}
console.log(valor); // 0
// let e const sao sempre escopados aos blocos mais proximos
*/

