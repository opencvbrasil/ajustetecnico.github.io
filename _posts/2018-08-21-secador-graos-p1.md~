---
layout: post
title: Secador de Grãos - Parte 1
---

Nessa primeira série de postagens, irei abordar um projeto desenvolvido durante o curso
de Sistemas Digitais da UFRN. Foi solicitado um secador de grãos usando linguagem C e o
controlador Atmega328p, que vem no Arduino. 
Como o projeto é um pouco grande, decidi dividí-lo da seguinte maneira:
1. Objetivos e esquemático
2. Código fonte e explicações
3. Funcionamento e app Android

### Objetivos do Projeto

O sistema especificado precisava ter os seguintes requisitos:

* Tempo de execução de 3 minutos
* Seguir uma curva de secagem definida
* Uso de sensores de temperatura e luminosidade que alteram a curva
* Velocidade do ventilador controlada pela de secagem
* Resposta em tempo real da alteração da curva
* LEDs de indicação para início de processo, nível de sensores e PWM do ventilador
* Botão para iniciar o processo
* Painel remoto para visualização de informações


Definidas as especificações de funcionamento, decidi montar um esquemático do circuito para facilitar a visualização e montagem. Usei para isso o editor de circuito da [EasyEDA](www.easyeda.com) que é online e gratuito. O resultado foi está na imagem abaixo.


![placeholder](/images/secador-graos/secador-esquematico.png "Esquemático do circuito")

O circuito acima mostra a pinagem do Atmega328p e não os pinos do Arduino. Mas é fácil achar a referência do Arduino para as ligações.
Decidi usar um transistor para fazer a ativação do ventilador. Poderia ter sido um optoacoplador, mas usei o que estava mais próximo naquele momento (hehe).
Os quatro LEDs são colocados cada um em um pino que gera PWM no Arduino. Dois são usados para indicar o nível dos sensores no momento da leitura; um é usado para indicar quando o processo de secagem é iniciado e o último é usado para indicar o PWM que está chegando no ventilador.

A curva de secagem que deve ser seguida é apresentada na imagem abaixo.

![placeholder](/images/secador-graos/curva-secagem.png "Curva de secagem")

Percebam que nela aparece apenas 60 segundos. Fiz essa redução de tempo (o orinal eram 3 minutos - 180 segundos) para não perder tanto tempo na demonstração do projeto. Porém, isso não afeta o funcionamento do sistema. Para voltar a 3 minutos, basta recalcular os tempos em que se atingirão os percentuais de PWM indicados.

Nesse sistema, foi exigido o uso dos vários hardwares periféricos do microcontrolador e outras características de software. Conversor A/D, temporizadores e contadores, interrupção, PWM e comunicação serial via USART foram as usadas durante o desenvolvimento. 

Por fim, não foi colocado nesse diagrama esquemático, porém, usei um outro circuito, um módulo bluetooth para Arduino. Esse módulo serviu para fazer a comunicação com um aplicativo Android (também desenvolvido por mim) e enviar informações do processo como a curva de secagem e os sinais dos sensores. Os dados eram exibidos em um gráfico.

O objetivo desse primeiro post é apenas demonstrar qual o sistema, suas características e o que foi usado. A implementação ficará para a próxima postagem. 

Até lá! 