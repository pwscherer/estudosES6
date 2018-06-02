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
/*
var objeto = {};	//	objeto
var numero = 1;	//	numero
var nome = "Chaves";	//	string
var lista = [1, 2, 3];	//	lista
*/

var texto = 'texto ';
var idade = 10;

console.log(texto + idade);

 // 8.1	CONSTANTES	COM	CONST
