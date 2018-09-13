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

Nas ciências exatas e tecnológicas as equações são repletas de
símbolos e em LaTeX para cada símbolo há um código associado a
este. E eles são muitos. Alguns são antigos e são definidos nos
pacotes de padrões matemáticos que normalmente acompanha as
distribuições. Outros dependem de instalação pelo usuário. A maioria,
entretanto, é amplamente conhecida e suportada nativamente pelo LaTeX
e também pelo MathJax

