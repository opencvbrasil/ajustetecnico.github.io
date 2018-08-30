---
layout: post
title: Detecção de assinaturas em listas de presenças - Parte 1
date: 2018-08-30 08:44:21
author: Bruno Teonácio
summary: Parte 1 do algoritmo de detecção de assinaturas em listas de presenças
categories: jekyll pdi visao_computacional opencv zbar qrcode assinaturas
tags:
 - jekyll
 - pdi
 - visao_computacional
 - opencv
 - zbar
 - qrcode
 - assinaturas
comments: true
---
Olá,

Nesse post iremos iniciar uma discussão acerca de um trabalho
desenvolvido durante nosso curso de graduação na UFRN.

Trata-se de um algoritmo de detecção de assinaturas em listas de
presenças, muito utilizadas pelos professores para registrar para a
presença dos alunos em sala de aula.

<!--more-->

## Motivações

Existem diversas maneiras de obter as presenças dos alunos em uma sala
de aula. O registro pode ser feito pelas assinatura dos alunos em uma
lista de presença, preenchendo um formulário impresso, também
conhecida como "chamada" (que também pode ser feita via web), por
reconhecimento facial, detecção via ponto eletrônico. As
possibilidades são muitas...

Focando no método pelas assinaturas dos alunos, é um método bastante
utilizado em diversas instituições de ensino superior pelo Brasil
(como na UFRN), onde é passado uma lista de assinaturas para os alunos
preencherem.

O problema de processar as listas surge quando é necessário salvar
essas assinaturas em algum outro lugar (como na Web), pois demanda um
tempo considerável para o docente ter que conferir folha a folha,
assinatura a assinatura, para salvá-las no sistema acadêmico. A
existência de um mecanismo que torne facilite esse processo para o
docente foi o motivador para o trabalho. E desenvolvê-lo usando
técnicas de visão artificial foi o grande desafio.

A foto abaixo ilustra um exemplo de lista de presença. Provavelmente,
a maioria dos leitores já se deparou com uma.

![Lista de presença](/images/deteccao-assinaturas/lista-assinaturas.jpg "Lista de Presenca")

Processar uma lista como essa esbarra em uma série de dificuldades
técnicas que algoritmos simples não resolvem o problema com
facilidade. 

Esse post visa apresentar as motivações para um algoritmo de
reconhecimento automático dessas assinaturas utilizando de ferramentas
como [OpenCV](http://www.opencv.org), uma biblioteca multi-linguagem
para algoritmos em Visão Computacional) e QR codes, código de barras
bidimensional bastante popular.

## Um modelo adaptado para a lista de assinaturas

Um link para o modelo de lista de assinaturas sobre o
qual o algoritmo foi construido pode ser
obtido
[neste endereço](https://github.com/teonacio/GIT_lista_de_presenca/blob/master/_pdf/qrnovo.pdf).

E porque adaptar os modelos tradicionais? Para facilitar a tarefa do
próprio algoritmo usando QR codes. Os códigos estão lá para ajudar no
processo de ajuste de possíveis distorções que ocorrem quando a câmera
é posicionada nas laterais da imagem. Num scanner tradicional o efeito
de distorção de perspectiva não ocorre.

	
Códigos de barra e códigos QR são bem populares e além de guardarem
informações (geralmente URLs) também podem ser usados para identificar
as posições dos cantos da folha e realizar a correção de perspectiva.

 <img src="/images/deteccao-assinaturas/qrcode-example.png" alt="drawing" width="200"/>

Apesar de os círculos vermelhos estarem exagerados, o intuito é
explicar que, utilizando a biblioteca ZBar (biblioteca para detecção
de QR codes e barcodes em geral), conseguimos recuperar não apenas o
conteúdo do QR code scaneado, mas também as posições dos pixels
extremos de cada QR code.

Essa informação é muito útil, pois ao scanear o modelo, recuperamos as
posições dos extremos do retângulo com as assinaturas, utilizando
apenas as posições dos extremos dos quatro QR codes do modelo. Ou
seja: Todo o resto do modelo (espaços em branco) não interferem no
algoritmo, e podem ser utilizados para inserir informações acerca da
instuição (logotipo, nome) e da turma (disciplina, turno, professor).

No próximo post, ireimos explicar como, a partir do retângulo
de assinaturas, separamos apenas as assinaturas (excluimos os nomes
dos alunos, que para a detecção não interferem no resultado).

Até lá!
