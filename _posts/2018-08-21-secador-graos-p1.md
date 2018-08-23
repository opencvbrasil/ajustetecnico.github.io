---
layout: post
title: Secador de Grãos - Parte 1
author: Matheus Pessoa
---

Nessa primeira série de postagens, iremos abordar um projeto
desenvolvido durante o curso de Sistemas Digitais da UFRN: um secador de grãos.

A estrutura de controle do secador foi embarcada em um processador
[ATmega328P](https://www.microchip.com/wwwproducts/en/ATmega328P),
popularmente disseminado pela plataforma [Arduino](https://arduino.cc)

Como o projeto é um pouco grande, vamos apresentá-lo por partes em
(pelo menos) umas três postagens:

1. Objetivos e diagrama esquemático.
2. Desenvolvimento do código fonte que controla o sistema.
3. Seu funcionamento e apresentação do aplicativo Android que
interagem com o secador.

## Objetivos do Projeto

O sistema do secador de grãos precisava ter os seguintes requisitos:

* Tempo de execução de 3 minutos
* Seguir uma curva de secagem definida
* Uso de sensores de temperatura e luminosidade que alteram a curva
* Velocidade do ventilador controlada pela velocidade de secagem
* Resposta em tempo real da alteração da curva
* LEDs de indicação para início de processo, nível de sensores e [PWM](https://pt.wikipedia.org/wiki/Modula%C3%A7%C3%A3o_por_largura_de_pulso) do ventilador.
* Botão para iniciar o processo
* Painel remoto para visualização de informações

Definidas as especificações de funcionamento, decidimos montar um
esquemático do circuito para facilitar a visualização e montagem. Usei
para isso o editor de circuito da [EasyEDA](https://www.easyeda.com) que é
online e gratuito. O resultado foi está na imagem abaixo.

![placeholder](/images/secador-graos/secador-esquematico.png
 "Esquemático do circuito")

O circuito acima mostra a pinagem do Atmega328p e não os pinos do
Arduino. Mas é fácil achar a referência do Arduino para as ligações.

A ativação do ventilador foi feita usando um transistor. Poderia ter
sido um acoplador óptico (mais seguro), mas foi usado o que estava à
mão naquele momento (hehe).

Os quatro LEDs são colocados cada um em um pino que gera PWM no
Arduino. Dois são usados para indicar o nível dos sensores no momento
da leitura; um é usado para indicar quando o processo de secagem é
iniciado e o último é usado para indicar o PWM que está chegando no
ventilador.

A curva de secagem que deve ser seguida é apresentada na imagem
abaixo. A curva define para cada instante qual deve ser a configuração
dos pulsos enviados ao ventilador.

![placeholder](/images/secador-graos/curva-secagem.svg "Curva de secagem")

A curva mostra o evento de secagem passando em apenas 60 segundos. O
tempo foi reduzido apenas para fins de demonstração (originalmente
eram 3 minutos). Porém, isso não afeta o funcionamento do
sistema. Para voltar aos 3 minutos (ou até mais) basta recalcular os
tempos em que se atingirão os percentuais de PWM indicados.

Nesse sistema, foram necessários vários periféricos para operarem em
conjunto com o microcontrolador (além de entendimento de programação
específica para este). Um conversor A/D, temporizadores e contadores,
interrupções, gerador de PWM e comunicação serial via USART foram as
usadas durante o desenvolvimento.

Ah, embora não tenha sido apresentado nesse diagrama esquemático, foi
usado um módulo bluetooth para Arduino. Esse módulo serviu para fazer
a comunicação com um aplicativo Android (também desenvolvido durante o
projeto) e enviar informações do processo, como a curva de secagem e os
sinais dos sensores. Os dados eram exibidos em um gráfico.

O objetivo desse primeiro post é apenas demonstrar qual o sistema,
suas características e o que foi usado.

Detalhes da implementação serão mostrados no próximo post da série.

Até lá! 