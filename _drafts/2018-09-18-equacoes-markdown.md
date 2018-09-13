---
layout: post
title: Usando Equações em Markdown
author: Agostinho Brito
tag:
  - equacoes
  - LaTeX
mathjax: true
---

Publicar texto científico em navegadores durante muito tempo foi um
calo no pé de matemáticos, engenheiros, físicos e demais profissionais
que lidam equações e precisam apresentá-las para divulgar suas ideias.

<!--more-->

Muitas soluções já foram tentadas, mas ora dependiam do desenvolvedor
do navegador para inserir suporte, ora dependia das condições de
apresentação do texto (figuras de alta/baixa qualidade, por exemplo).

A primeira das tentativas de inserir equações em páginas web foi feita
com imagens. Nessa abordagem, cada equação era substituída por uma
imagem, tipo <img style='vertical-align=middle; display: inline'
src="/images/equacoes-markdown/equacao.png">, mas a exibição muitas vezes
ficava comprometida, desalinhada ou com péssima qualidade visual.

Um exemplo de ferramenta que criava equações dessa maneira era
[latex2html](www.latex2html.org). Embora antiga, transformava com
algum sucesso documentos escritos em [LaTeX](www.latex-project.org)
para HTML. As equações surgiam na forma de imagens no fluxo do texto.

Com o tempo, tentativas de padronização foram surgindo, como
[MathML](https://www.w3.org/Math/) proposta pelo W3
Consortium. Trata-se de uma especificação em [XML](www.w3.org/XML) que
descreve como conteúdos matemáticos e científicos devem ser
interpretados por um navegador. O problema é que nem todos suportam a
especificação, tal como o [Google Chrome](www.google.com/chrome).

## MathJax

Recentemente, uma solução definitiva parece ter sido encontrada:
[MathJax](www.mathjax.org). A proposta do projeto é permitir que
equações escritas em LaTeX possam ser desenhadas diretamente no fluxo
do texto usando um motor desenvolvido em javascript para esse fim.

O uso de fontes matemáticas de alta qualidade aliadas à versatilidade
e simplicidade de inserção de equações científicas faz do MathJax uma
escolha que simplesmente funciona. O projeto é
[amplamente suportado](https://www.mathjax.org/#sponsors) por diversos
parceiros, sugerindo que deverá ser algo duradouro.

Inserir o suporte ao mathjax, basta inserir a seguinte linha de código
em um documento html:

```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
```

O script suporta alguns parâmetros adicionais que permitem ajustar as
tags usadas para delinear as equações no código em HTML.

A boa notícia é que Markdown suporta a inserção de equações
diretamente no texto. Basicamente, há duas maneiras de fazer:

* Inline $$ f(x,y) = \sin(x+y)$$; ou
* Na forma de um bloco separado

$$
	f(x,y) = \sin(x+y)
$$

Em ambos os casos, duas coisas precisam ser aprendidas: a primeira,
bem mais simples, é entender como inserir a equação. A segunda, bem
mais trabalhosa, é aprender como criar equações em $$\LaTeX$$.

## Inserindo equações em Markdown

Equações em Markdown podem ser inseridas entre os pares de strings
```$$``` e ```$$```. Se a equação for inline, basta inseri-la seguindo
o fluxo do texto, como em ```$$f(x) = \sin(x+y)$$```. Se a equação for
em bloco, adicione quebras de linha no fluxo do texto antes e depois
da equação que o Jekyll entenderá como proceder para desenhar
corretamente:

```
fluxo do texto...

$$
   f(x,y) = \sin(x+y)
$$

fluxo do texto...
```

Além disso, deve-se incluir a linha

```
mathjax: true
```

no preâmbulo do post para que o Jekyll insira o código em Javascript
para ativar o Mathjax. Esse post, por exemplo, teve o seguinte
preâmbulo contendo a linha supra-citada.

```
---
layout: post
title: Usando Equações em Markdown
author: Agostinho Brito
tag:
  - equacoes
  - LaTeX
mathjax: true
---
```

As equações devem necessariamente ser escritas em LaTeX para que sejam
apresentadas no navegador.
