//Variáveis
let nomeAluno;
let sobrenomeAluno;
let anoNacimentoAluno;
let idadeAluno;

//Constantes
const NOME_ESCOLA = "Senai";
const ANO_ATUAL = 2023;

// Receber informações do usuario
nomeAluno = prompt("Digite o seu primeiro nome:");
sobrenomeAluno = prompt("Digite o seu sobrenome:");
let nomeAlunoCompleto = nomeAluno + " " + sobrenomeAluno;
anoNacimentoAluno =  parseInt(prompt("Digite o ano do seu nascimento:"));
idadeAluno = ANO_ATUAL - anoNacimentoAluno;

alert("Seu nome é " + nomeAlunoCompleto + " e você estuda no " + NOME_ESCOLA + ", sua idade é " + idadeAluno + "ano(s).");