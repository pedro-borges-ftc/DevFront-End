# Arquitetos da Lógica: O Mapa do JavaScript

> **Objetivo:** consolidar o entendimento sobre variáveis, tipos de dados, regras de identificadores e conversão de tipos.

**Tempo estimado:** 60 minutos

---

## Roteiro da Atividade

| Etapa | Tema | Duração |
| --- | --- | --- |
| Parte 1 | Painel de Conceitos | 20 minutos |
| Parte 2 | O Desafio do Código Quebrado | 25 minutos |
| Parte 3 | Quiz Interativo entre Grupos | 15 minutos |

---

## Parte 1: Painel de Conceitos

Cada grupo deverá explicar e exemplificar, em um cartaz ou folha A3, os principais pilares do **Tema 05**.

### 1. Regras de Identificadores

Liste o que é permitido e o que é proibido ao nomear variáveis em JavaScript.

**Pontos para incluir:**

- Nomes de variáveis não podem começar com números.
- Não é permitido usar espaços.
- Símbolos como `$` e `_` são permitidos.
- Use exemplos de nomes válidos e inválidos.

### 2. A Trindade das Declarações

Explique a diferença teórica entre as formas de declaração:

| Declaração | Ideia principal |
| --- | --- |
| `var` | Possui escopo mais amplo, geralmente associado ao escopo da função. |
| `let` | Possui escopo de bloco. |
| `const` | Cria uma referência que não pode ser reatribuída. |

### 3. Tipagem Dinâmica

Mostre como uma mesma variável pode mudar de tipo durante a execução do programa.

**Exemplo esperado:**

```js
let valor = 10;
console.log(typeof valor); // number

valor = "dez";
console.log(typeof valor); // string
```

Explique também como o comando `typeof` ajuda a identificar o tipo de dado armazenado.

---

## Parte 2: O Desafio do Código Quebrado

Nesta etapa, os grupos deverão analisar os cenários abaixo e responder às perguntas com base nos conteúdos estudados.

### Cenário A: Validação

Dado o nome de variável abaixo:

```js
2ano_Letivo
```

Ele é válido em JavaScript? Por quê?

### Cenário B: Lógica de Diálogo

Considere o comando:

```js
window.prompt("Digite um número")
```

Se o usuário digitar `10`, qual será o tipo de dado armazenado na variável?

Além disso, explique o que acontece se tentarmos somar esse valor a outro número sem usar o tratamento de dados com `Number()`.

### Cenário C: Tipos de Dados

Classifique os valores abaixo de acordo com os tipos primitivos do JavaScript.

| Valor | Tipo |
| --- | --- |
| `42` | |
| `"Olá Mundo"` | |
| `true` | |
| `null` | |
| `undefined` | |

### Cenário D: Saída de Dados

Explique a diferença visual e lógica entre:

```js
"Olá " + nome
```

e:

```js
`Olá ${nome}`
```

Na resposta, compare a concatenação comum com o uso de **Template Strings** e interpolação.

---

## Parte 3: Quiz Interativo entre Grupos

Cada grupo deverá criar **duas perguntas de Verdadeiro ou Falso** sobre o conteúdo para desafiar outro grupo.

### Exemplo

> No JavaScript, o valor `NaN` (*Not a Number*) é considerado do tipo `string`.

**Resposta correta:** falso. O valor `NaN` é do tipo `number`.

---

## Entrega Esperada

Ao final da atividade, cada grupo deverá apresentar:

- Um painel com explicações e exemplos.
- As respostas dos quatro cenários.
- Duas perguntas de Verdadeiro ou Falso para outro grupo.
