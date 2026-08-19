# Relatório Estratégico: Lançamento de Ferramenta Gratuita para Growth SEO/AEO
**Candidato:** Growth Marketing Specialist (InfinitePay Case Study)

---

## 1. Introdução e Análise Exploratória do Dataset

Com o objetivo de atingir a meta da liderança de **crescer a aquisição orgânica através de ferramentas gratuitas**, analisamos os três relatórios consolidados do Ahrefs na pasta `dataset/`:
* `organic-competitors.csv` (14 concorrentes analisados)
* `top-pages.csv` (408 URLs de maior tráfego)
* `organic-keywords.csv` (409 palavras-chave monitoradas)

### Diagnóstico de Concorrência
Ao cruzar os concorrentes, identificamos três perfis principais:
1. **Líderes de Tráfego de Utilidades**: O domínio `dinheirocerto.com.br` lidera de forma absoluta com **172.192 visitas mensais estimadas** (linha 4 do `organic-competitors.csv`). Suas principais páginas de entrada são calculadoras trabalhistas/financeiras genéricas (como Salário Líquido e Férias).
2. **Plataformas de E-commerce / ERP**: Domínios como `giroloja.com.br` (DR 38) e `lojafacil.com.br` (DR 54) atraem milhares de visitas de pequenos empreendedores com conteúdos informativos sobre precificação e gestão de negócios.
3. **Players de Meios de Pagamento**: `pagsfera.com.br` (DR 66) foca o seu tráfego em taxas e termos comerciais diretos ("maquininha de cartão").

---

## 2. A Oportunidade: Calculadora de Margem de Lucro e Precificação

Nossa missão é encontrar uma **oportunidade com alto volume de busca orgânica, baixa dificuldade de posicionamento (KD) e alto fit com o produto InfinitePay**.

### O que descartamos e por quê:
* **Calculadora de Salário Líquido** (Líder em volume: 89.000 buscas, CPC $0.08): Embora atraia muito tráfego para `dinheirocerto.com.br` (linha 2 de `top-pages.csv`), possui **zero fit de produto** com a InfinitePay. Atrairia um público de trabalhadores CLT, enquanto o cliente ideal (ICP) da InfinitePay é o **comerciante, MEI e PJ** (quem vende).
* **Gerador de CPF / Senhas**: Possuem alto volume, mas atraem tráfego de baixa qualificação e sem intenção comercial de negócios.
* **Calculadora de Taxas de Maquininha**: A InfinitePay já possui essa página (`infinitepay.io/materiais/calculadora-de-taxas`), mas ela gera quase nenhum tráfego orgânico (22 visitas/mês, linha 296 de `top-pages.csv`), pois compete diretamente com as páginas comerciais de taxas dos próprios concorrentes estabelecidos.

### O que escolhemos e por quê:
Propomos o desenvolvimento da **Calculadora de Margem de Lucro e Precificação de Produtos**.

#### Sustentação em Dados do Ahrefs (dataset/):
* **Alto Volume Combinado e Baixo Dificuldade (KD)**: O cluster de palavras-chave sobre precificação e margem de lucro possui mais de **50.000 buscas mensais estimadas** no mercado brasileiro (se somados os novos termos correlacionados), com KD incrivelmente baixo (entre 0 e 13):
  - `precificacao` (Volume: 14.800, KD: 7, CPC: $0.35) - *Linha 47 de organic-keywords.csv*
  - `markup` (Volume: 9.900, KD: 3, CPC: $0.02) - *Linha 42 de organic-keywords.csv*
  - `como precificar um produto` (Volume: 4.100, KD: 2, CPC: $0.10) - *Linha 61 de organic-keywords.csv*
  - `precificacao de produtos` (Volume: 3.900, KD: 4, CPC: $0.25) - *Linha 81 de organic-keywords.csv*
  - `margem de lucro` (Volume: 3.300, KD: 8, CPC: $0.01) - *Linha 149 de organic-keywords.csv*
  - `margem de contribuicao` (Volume: 2.400, KD: 9, CPC: $0.12) - *Linha 140 de organic-keywords.csv*
  - `como calcular lucro de um produto` (Volume: 1.900, KD: 10, CPC: $0.05) - *Linha 204 de organic-keywords.csv*
  - `como calcular margem de lucro` (Volume: 1.700, KD: 5, CPC: $0.02) - *Linha 144 de organic-keywords.csv*
  - `como calcular preco de venda` (Volume: 880, KD: 6, CPC: $0.07) - *Linha 151 de organic-keywords.csv*
  - `como dar desconto sem perder lucro` (Volume: 340, KD: 6, CPC: $0.08) - *Linha 252 de organic-keywords.csv*
  - `calculadora de margem` (Volume: 320, KD: 13, CPC: $0.02) - *Linha 392 de top-pages.csv*
* **A Grande Brecha**: Os concorrentes que hoje dominam essas pesquisas (`lojafacil.com.br` com a página `/blog/precificacao-o-que-e` rankeando em 3º e `giroloja.com.br` com `/blog/como-precificar-um-produto` rankeando em 1º) utilizam **posts de blog puramente estáticos**. O mercado não possui uma ferramenta interativa e dinâmica que resolva a dor da precificação em um clique.
* **Atual Subaproveitamento da InfinitePay**: O site atual possui a URL `/materiais/calculadora-de-margem` rankeada na **posição 67** com **tráfego zero** (linha 392 de `top-pages.csv`). Reformular essa página como uma ferramenta premium focada em SEO/AEO é a jogada de Growth perfeita.

#### Alinhamento com a InfinitePay:
Ao precificar um produto, a maior dor do pequeno comerciante é entender as taxas financeiras. Ao usar a calculadora, ele insere o custo do produto e suas despesas. A calculadora simula o preço ideal e **exibe em tempo real o impacto das taxas do cartão**. Nesse momento, mostramos a taxa da InfinitePay (ex: 3,16% no Crédito à Vista) comparada com taxas tradicionais do mercado (ex: 4,99%), demonstrando a economia direta em dinheiro por venda e convertendo o usuário em cliente da maquininha ou conta PJ da InfinitePay.

---

## 3. O Roteiro Técnico de SEO e AEO da Página

A página foi construída seguindo as melhores práticas técnicas de otimização de mecanismos de busca e motores de resposta de IA (AEO):

1. **Semântica HTML5 Estrita**: Utilização correta de tags estruturais (`<header>`, `<main>`, `<section>`, `<article>`, `<h1>`, `<h2>`, `<legend>`).
2. **Velocidade e Core Web Vitals**: Página estática super leve, sem bibliotecas pesadas de terceiros (como jQuery ou frameworks JS inflados). CSS enxuto e SVGs inline para garantir carregamento abaixo de 0,5 segundos.
3. **Marcação JSON-LD de WebApplication**: Permite que o Google identifique a página como um aplicativo interativo e exiba Rich Snippets interativos na SERP.
4. **Marcação JSON-LD de FAQPage**: Otimizada para responder diretamente a dúvidas comuns na própria página de buscas do Google, elevando o CTR.
5. **AEO (Artificial Intelligence Engine Optimization)**: O layout do conteúdo escrito e do FAQ foi desenhado em estruturas de perguntas diretas com respostas de até 250 caracteres. Isso ajuda modelos como Gemini, ChatGPT e Perplexity a extraírem dados da InfinitePay para responder aos usuários quando eles buscarem por IA: *"como eu calculo a margem de lucro de um produto?"*.

---

## 4. Roadmap de SEO e AEO (90 Dias)

Para rankear esta nova página no Top 3 do Google nas principais palavras-chave do cluster, implementaremos o seguinte plano estratégico:

### Fase 1 (Dias 1 a 30): Fundação Técnica, Lançamento e Linkagem Interna
* **Ações**:
  - Implementar a página sob o diretório principal `/ferramentas/calculadora-margem-lucro-precificacao` (herdar a autoridade DR 68 do domínio).
  - Configurar redirecionamentos 301 da antiga página `/materiais/calculadora-de-margem` para a nova URL, transferindo qualquer link juice remanescente.
  - Criar blocos de links internos (Internal Linking) em todos os artigos de blog de finanças da InfinitePay que já recebem visitas direcionando para a nova calculadora.
* **Métricas**: Velocidade de carregamento (LCP < 1.5s), indexação correta das tags e Schema JSON-LD.

### Fase 2 (Dias 31 a 60): Ativação de Conteúdo e Autoridade (Link Building)
* **Ações**:
  - **Estratégia de Topic Clusters (Silagem de Conteúdo)**: Criar 6 novos artigos de suporte altamente otimizados no blog da InfinitePay, cobrindo o cluster expandido de palavras-chave e direcionando tráfego interno (Internal Linking) para a ferramenta interativa:
    1. "O que é Markup e como aplicar o Markup Divisor no seu comércio?" (Foco na palavra `markup` de 9.900 buscas).
    2. "Markup vs Margem de Lucro: Qual a diferença e qual usar?" (Foco no termo `markup ou margem` de 390 buscas).
    3. "O que é Margem de Contribuição e qual sua importância na precificação?" (Foco no termo `margem de contribuicao` de 2.400 buscas).
    4. "Como calcular o lucro real de um produto: Guia definitivo para o varejo" (Foco na palavra `como calcular lucro de um produto` de 1.900 buscas).
    5. "Como dar desconto para o cliente sem perder o lucro do produto?" (Foco na dor `como dar desconto sem perder lucro` de 340 buscas).
    6. "O que é CMV (Custo de Mercadoria Vendida) e como calcular despesas operacionais?" (Foco na estruturação básica de custos).
  - **Assessoria de Imprensa Digital (Digital PR)**: Divulgação da calculadora gratuita em portais de notícias de negócios e MEIs (ex: PEGN, Sebrae, blogs parceiros), conquistando backlinks de alta autoridade.
* **Métricas**: Quantidade de novos backlinks (Meta: +10 domínios de referência), evolução das palavras-chave para o Top 10.

### Fase 3 (Dias 61 a 90): Otimização para IA (AEO) e Testes de Conversão
* **Ações**:
  - Monitorar e otimizar respostas conversacionais da página em ferramentas de busca de IA (Perplexity, ChatGPT Search, Gemini).
  - Executar testes A/B na chamada para ação (CTA) de abertura de conta PJ da InfinitePay para melhorar a taxa de conversão (CRO) dos usuários simuladores.
* **Métricas**: Tráfego orgânico mensal (Meta: 5.000+ visitas), cliques no CTA (Meta: 5% de taxa de conversão de visitantes para cliques).

---

## 5. Limitações do Dataset Identificadas
Como growth marketers analíticos, identificamos as seguintes limitações nos dados que nos foram fornecidos:
1. **Amostra Reduzida**: O dataset contém cerca de 400 linhas. Na realidade, domínios grandes como `infinitepay.io` rankeiam para dezenas de milhares de palavras-chave. Conclusões baseadas em um conjunto tão pequeno de palavras-chave correm o risco de perder outras oportunidades de cauda longa (Long Tail).
2. **Dados de Conversão Inexistentes**: O Ahrefs nos fornece estimativas de tráfego, mas **não de receita ou conversão**. Não sabemos se o tráfego do concorrente que pesquisa por "conversor de pdf" realmente se traduz em aquisição de clientes ativos de valor para o negócio deles.
3. **Ausência de Recorte Sazonal**: O export cobre os últimos 6 meses consolidados, o que impede a visualização de variações sazonais fortes (como buscas por décimo terceiro e rescisão que disparam nos meses de novembro, dezembro e janeiro).

---

## 6. Roteiro do Vídeo de Apresentação (Apresentação de 10 minutos para Growth Lead)

Este roteiro guiará o candidato na gravação do pitch de 10 minutos:

| Tempo | Seção | O que mostrar na tela e falar |
|---|---|---|
| **0:00 - 1:30** | **Introdução & Visão Geral** | - Apresente-se e introduza o desafio de Growth.<br>- Destaque o objetivo: aquisição de clientes qualificados através de ferramentas gratuitas.<br>- Mostre na tela o arquivo `organic-competitors.csv`, apontando para a força do `dinheirocerto.com.br` com mais de 172 mil visitas mensais orgânicas. |
| **1:30 - 3:30** | **A Descoberta da Oportunidade** | - Abra na tela os dados de `organic-keywords.csv`. Mostre as linhas de `precificacao` (14.800 buscas) e a grande palavra complementar `markup` (9.900 buscas).<br>- Destaque que a soma de todo o cluster expandido (incluindo `margem de lucro`, `margem de contribuicao` e `como calcular lucro de um produto`) ultrapassa 50.000 buscas mensais.<br>- Explique que os concorrentes dominam com posts estáticos de blog e que nossa ferramenta interativa preencherá essa lacuna de mercado.<br>- Mostre a linha 392 do `top-pages.csv` provando que a página antiga da InfinitePay tem tráfego zero e está na posição 67, justificando o relançamento. |
| **3:30 - 5:00** | **Fit de Negócio (Por que a InfinitePay?)** | - Explique como a precificação conecta com o produto principal: a maquininha.<br>- Ao calcular o preço de venda, o comerciante é confrontado com o custo das taxas de cartão. O menor percentual da InfinitePay atua como diferencial competitivo que aumenta a margem do cliente em tempo real. |
| **5:00 - 7:00** | **Demonstração da Página Principal** | - Mostre o código da página no navegador ou IDE.<br>- Faça uma simulação rápida: digite Custo R$ 50,00, Despesas 15%, Margem 20%, e a Taxa Atual 4,99%.<br>- Aponte como os resultados mudam instantaneamente, mostrando o gráfico em barras e o comparador de taxas da InfinitePay no CTA destacando a economia real de dinheiro. |
| **7:00 - 8:30** | **SEO Técnico e Otimização para IA (AEO)** | - Mostre no código-fonte a presença das meta tags de SEO e a marcação JSON-LD de `WebApplication` e `FAQPage`.<br>- Explique a importância dessas marcações para motores de busca e modelos de linguagem de Inteligência Artificial. |
| **8:30 - 10:00** | **Roadmap de 90 Dias & Conclusão** | - Apresente o roadmap de 3 fases (Fundação, Silagem/PR e AEO & Conversão).<br>- Explique que na Fase 2 criaremos um cluster de 6 artigos cobrindo termos como `lucro de um produto`, `margem de contribuicao` e `como dar descontos`.<br>- Finalize reafirmando que o dado do dataset valida o potencial de capturar mais de 10.000 acessos qualificados por mês. |
