---
layout: post
title: Trabalhando com estatísticas de acesso
author: Agostinho Brito
tag:
  - Estatísticas
  - Google Analytics
mathjax: false
---

A preparação de estatísticas de uso requer uma ferramenta de rastreio
capaz de verificar cada acesso que é feito em um site. A [Google
Analytics](https://analytics.google.com) é uma das que se presta a esse serviço, de forma gratuita e
eficiente.

Para adicionar a ferramenta a um site, é necessário ter uma conta na
Google e cadastrar uma conta específica para o fim.

Alguns dados precisam ser disponibilizados na conta para o website que
precisa ser rastreado. No caso do ajustetecnico, os seguintes dados
foram cadastrados:

* Nome de uma conta: ajustetecnico
* Nome do website: ajustetecnico
* URL do website: http://ajustetecnico.github.io
* Categoria do website: Computers and Electronics
* Timezone: Brazil

Uma vez cadastrados esses dados, uma página de aceitação de termos de
serviço é apresentada e um UID é retornado para o usuário.

A página que segue é um painel de adminstração do página rastreada, e
um _Tracking ID_ gerado é fornecido. Por exemplo, para o website do
ajustetecnico, o _Tracking ID_ gerado foi **UA-127912728-1**. 

Junto com o _Tracking ID_ a Google disponibiliza um trecho de código
em Javascript para incorporar às páginas. Para o ajustetecnico, o
código gerado foi o seguinte:

```javascript
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-127912728-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-127912728-1');
</script>
```

Uma vez adicionado o trecho de código ao grupo de páginas a ser
rastreado, o Google Analytics disponibiliza um painel para acompanhar
os acessos gerados.

Em se tratando do Jekyll, a inserção do rastreio via Google Analytics
é bem simples (usando o tema
[minima](https://github.com/jekyll/minima)).

O arquivo ```_config.yml``` contém uma linha de configuração justo
para cadastrar as estatísticas. Para o ajustetecnico, foi habilitada a
seguinte linha no ```_config.yml```

```yaml
google_analytics: UA-127912728-1
```

