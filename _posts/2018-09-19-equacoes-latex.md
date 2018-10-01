---
layout: post
title: Criando Equações em LaTeX
author: Agostinho Brito
tag:
  - equacoes
  - LaTeX
mathjax: true
---

Escrever equações em LaTeX não é trivial. Normalmente, requer estudo
de documentação pertinente e consulta constante a guias de
símbolos. Isso vale inclusive para usuários que já usam a linguagem há
um bom tempo, justo pelo fato de a quantidade de símbolos e formas de
criar as equações ser muito grande para se aprender.

<!--more-->

A dificuldade inicial na forma de criar a equação. Ela é criada na
forma de um texto a ser interpretado por um processador, que gera uma
imagem bitmap ou vetorial da equação criada. Editores do tipo
[WYSIWYG](https://pt.wikipedia.org/wiki/WYSIWYG), como Word ou
LibreOffice Writer ajudam o usuário iniciante, mas são pouco ágeis, de
sorte que o melhor é aprender a codificar a equação manualmente.

Uma das melhores referências é o [Capítulo
8](http://www.macrotex.net/texbooks/latexcomp-ch8.pdf) do livro The
LaTeX Companion, do Leslie Lamport. Ele encontra-se disponível online
pelo próprio autor.

## A primeira equação

Vamos começar com uma equação bem conhecida, a equação de uma curva de
segundo grau: $$f(x) = ax^2 + bx + c$$.

Em LaTeX, essa equação é escrita da forma

```
f(x) = ax^2 + bx + c
```

O interpretador conheceu o símbolo ```^``` como sinalizador de um
expoente que se seguia. Polinômios em geral são construídos assim.

## Símbolos

Em ciências exatas e tecnológicas as equações são repletas de
símbolos e em LaTeX para cada símbolo há um código associado a
este... e eles são muitos.

Alguns são antigos e são definidos nos pacotes de padrões matemáticos
que normalmente acompanham as distribuições. Já outros dependem de
instalação pelo usuário. A maioria, entretanto, é amplamente conhecida
e suportada nativamente pelo LaTeX e também pelo MathJax.

É fácil achar na Internet sites e livros gratuitos que listam os
símbolos mais comuns usados em LaTeX. O wikibook de LaTeX tem
uma seção
de [matemática](https://en.wikibooks.org/wiki/LaTeX/Mathematics) que
apresenta vários deles. Entretanto, o capítulo 8 do LaTeX Companion
pode ser usado também.

Ex: ```\Delta x = \gamma \epsilon``` produz $$\Delta x = \gamma \epsilon$$.

## Operadores 

Um operador é um tipo de função conhecida que opera sobre
argumentos. Exemplos de operadores são as funções trigonométricas,
logaritmos, exponenciais, integrais ou limites. Para cada uma existe
uma palavra associada.

Ex: ```\tan(x) = \sin(x)/\cos(x)``` produz 

$$\tan(x) =
\sin(x)/\cos(x)$$

Ex: ```y = \int_{x=0}^{x=1} \exp(x) dx``` produz 

$$y = \int_{x=0}^{x=1} \exp(x) dx$$

Ex: ```\lim_{x \to \infty} \exp(-x) = 0``` produz 

$$\lim_{x \to
\infty} \exp(-x) = 0$$

## Expoentes e índices

Os expoentes são determinados pelo que se segue ao caractere ```^``` e
os índices pelo que se segue ao caractere ```_```. Se a expressão do
expoente ou índice tiver mais de um símbolo, deve ser colocada dentro
de chaves ```{``` e  ```}``` 

Ex: ```x^{a+b}``` produz 

$$x^{a+b}$$

Ex: ```x_{a+b}``` produz 

$$x_{a+b}$$

Ex: ```x_{a+b}^{c+d}``` produz 

$$x_{a+b}^{c+d}$$

## Frações

As frações são criadas com o comando ```\frac{}{}```, que demanda dois
argumentos: numerador e denominador.

Ex: ```\tan(x) = \frac{\sin(x)}{\cos{x}}``` produz

$$\tan(x) = \frac{\sin(x)}{\cos{x}}$$

Ex: ```y = x^\frac{1}{1+x}``` produz

$$y = x^\frac{1}{1+x}$$

E que tal essa... ```\frac{1}{1+\frac{1}{1+\frac{1}{1+x}}}```

$$\frac{1}{1+\frac{1}{1+\frac{1}{1+x}}}$$

Mas ficam melhor com o comando ```cfrac```, como em ```y = \cfrac{1}{1 +\cfrac{1}{1 + \cfrac{1}{1+x}}}``` que produz
		  
$$y = \cfrac{1}{1 +\cfrac{1}{1 + \cfrac{1}{1+x}}}$$

## Somas e integrais

Somas e integrais também são definidas por palavras reservadas e podem
ser exibidas de diversas formas 

Ex: ```\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x``` produz

$$
\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x
$$

Ex: ```\int\limits_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x``` produz

$$
\int\limits_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x
$$

Ex: ```\sum_{x=0}^{100} f(x)``` produz $$\sum_{x=0}^{100} f(x)$$ se
estiver na mesma linha.

Ex: ```\sum_{x=0}^{100} f(x)``` produz

$$
\displaystyle \sum_{x=0}^{100} f(x)
$$

se estiver em um parágrafo separado

## Delimitadores

Os delimitadores são símbolos que marcam um pedaço de uma equação que
deve ser calculado antes de outro. Exemplos de símbolos sao as chaves,
colchetes e parêntesis.

Os delimitadores podem inclusive ter dimensionamento automático usando
os comandos ```\left```, ```\middle``` e  ```\right```. Assim,
equações de tamanho grande verticalmente podem ser ajustados.

Ex: ```y = \cfrac{1}{(1 +\cfrac{1}{1 + \cfrac{1}{1+x}})}``` produz

$$y = \cfrac{1}{(1 +\cfrac{1}{1 + \cfrac{1}{1+x}})}$$

Ex: ```y = \cfrac{1}{\left(1 +\cfrac{1}{1 + \cfrac{1}{1+x}}\right)}```
produz 

$$y = \cfrac{1}{\left(1 +\cfrac{1}{1 + \cfrac{1}{1+x}}\right)}$$

## Matrizes

Matrizes em LaTeX são criadas com os comandos ```matrix``` e
```array```. Há outros também, mas esse são os mais comuns e utilizados.

Ex: 

```
	x = \left[\begin{matrix}
  1 & 2 & 3 \\
  4 & 5 & 6 \\
  7 & 8 & 9
 \end{matrix}\right]
```

produz

$$
  x = \left[\begin{matrix}
  1 & 2 & 3 \\
  4 & 5 & 6 \\
  7 & 8 & 9
 \end{matrix}\right]
$$

O comando ```array``` permite que as matrizes possam ser trabalhadas
  na forma do _environment_ tabular usado para criar tabelas em LaTeX.
  
Ex: 

```
y = \begin{array}{c|c|c}
\sin(x) & x^2 & x_3 \\ \hline
  \frac{1}{3} & \int_1^3 f(x) dx & 6 \\ \hline
  7 & 8 & 9 \\
 \end{array}
```

produz

$$y = \begin{array}{c|c|c}
\sin(x) & x^2 & x_3 \\ \hline
  \frac{1}{3} & \int_1^3 f(x) dx & 6 \\ \hline
  7 & 8 & 9 \\
 \end{array}
$$

## Pontos

Os pontos servem para representar a continuidade de valores em um
array ou uma sequência a ser completada. Os comandos são o da família
```dots```, e podem representar continuidades verticais, horizontais
ou diagonais.

Ex:

```
x = [\begin{matrix} x_1 & x_2 & x_3 & \dots & x_n \end{matrix}]
``` 

produz

$$x = [\begin{matrix} x_1 & x_2 & x_3 & \dots & x_n \end{matrix}]
$$ 

Ex:

```
\mathrm{A} = \left[\begin{matrix}
a_{11} & a_{12} & \dots & a_{1N} \\
a_{21} & a_{22} & \dots & a_{2N} \\
\vdots & \vdots & \ddots & \vdots \\
a_{M1} & a_{M2} & \dots & a_{MN} 
\end{matrix} \right]
```

produz

$$\mathrm{A} = \left[\begin{matrix}
a_{11} & a_{12} & \dots & a_{1N} \\
a_{21} & a_{22} & \dots & a_{2N} \\
\vdots & \vdots & \ddots & \vdots \\
a_{M1} & a_{M2} & \dots & a_{MN} 
\end{matrix} \right]
$$

Esses são os usos mais comuns de equações em LaTeX. Recursos mais
avançados da linguagem devem ser consultados em guias de referência e
em sites como [tex.stackexchange.com](https://tex.stackexchange.com/)
ou [stackoverflow.com](https://stackoverflow.com).

Entretanto, para quem está começando, pode tentar sites como 
um [editor online](http://www.codecogs.com/latex/eqneditor.php) para
agilizar a criação de equações.
