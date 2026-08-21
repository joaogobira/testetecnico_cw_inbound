# Relatório Estratégico: Lançamento de Ferramenta Gratuita para Growth SEO/AEO
**Candidato:** Growth Marketing Specialist (Case Study InfinitePay)  
**Data:** 19 de Agosto de 2026

---

## 1. Resumo Executivo & Contexto do Desafio

* **Missão**: Acelerar a aquisição orgânica de novos clientes para a **InfinitePay** através do desenvolvimento e posicionamento de uma ferramenta gratuita de alta utilidade.
* **Oportunidade Escolhida**: **Calculadora de Margem de Lucro e Precificação de Produtos**.
* **Público-Alvo (ICP)**: Micro e pequenos empreendedores (MEIs, lojistas, prestadores de serviços e comerciantes de varejo/e-commerce) no momento exato em que estão definindo seus preços de venda e calculando seus custos operacionais.
* **Fit com o Ecossistema InfinitePay**: A precificação exige que o comerciante calcule as **taxas de intermediação de pagamento** (maquininhas, Pix e links). A ferramenta simula em tempo real a economia obtida ao utilizar os produtos da InfinitePay (InfiniteTap, InfiniteSmart, Link de Pagamento e Conta PJ), transformando uma busca informativa em uma conversão comercial direta.

---

## 2. Análise do Dataset do Ahrefs e Racional da Escolha

Avaliamos os três relatórios consolidados de mercado brasileiro dos últimos 6 meses fornecidos na pasta `dataset/`:
1. `organic-competitors.csv` (14 domínios concorrentes monitorados)
2. `top-pages.csv` (406 URLs de maior tráfego)
3. `organic-keywords.csv` (409 palavras-chave rastreadas)

### 2.1. O que consideramos e descartamos (e por quê)

Para encontrar a ferramenta ideal, filtramos o dataset cruzando três pilares: **Volume de Busca**, **Dificuldade de Rankeamento (KD)** e **Fit com o Negócio (Qualificação do Lead)**.

| Oportunidade Avaliada | Dados no Dataset | Diagnóstico | Decisão & Por quê |
| :--- | :--- | :--- | :--- |
| **Calculadora de Salário Líquido / Férias / CLT** | • Termo: `calculadora salario liquido`<br>• Volume: **89.000 buscas/mês**<br>• Tráfego Concorrente: 172.192 visitas no `dinheirocerto.com.br` (*Linha 4 de competitors / Linha 2 de top-pages*) | Atrai tráfego em massa, mas é focado em trabalhadores CLT e funcionários com carteira assinada. | **DESCARTADO**: **Zero fit com o ICP**. A InfinitePay vende soluções para quem *recebe pagamentos* (empresas/MEIs), não para quem recebe salário como pessoa física. |
| **Geradores de Senhas / CPF / Utilitários Genéricos** | • Alto volume disperso em ferramentas gratuitas de utilidades no `dinheirocerto.com.br` | Tráfego com baixíssima intenção comercial e sem retenção. | **DESCARTADO**: Tráfego "desperdiçado" que geraria custo de servidor sem nenhuma tração de novos clientes ou contas PJ. |
| **Calculadora de Taxas de Maquininha** | • URL atual: `/materiais/calculadora-de-taxas`<br>• Tráfego Atual: **22 visitas/mês** (*Linha 296 de top-pages.csv*) | Intenção ultra comercial, mas dominada por termos de alta concorrência direta de concorrentes como `pagsfera.com.br` (DR 66). | **DESCARTADO COMO FERRAMENTA PRINCIPAL**: A página atual já existe e está estagnada. O usuário que busca isso já está no fundo de funil, enquanto precisamos capturar o cliente no topo/meio de funil antes de ele escolher a maquininha. |

---

### 2.2. A Oportunidade Escolhida: Calculadora de Margem e Precificação

Identificamos um **cluster de alto volume, baixa dificuldade (KD baixo) e grande brecha competitiva** no mercado de precificação:

#### Evidências no Dataset (`organic-keywords.csv` e `top-pages.csv`):
* `precificacao`: **14.800 buscas/mês** | **KD 7** | CPC $0.35 (*Linha 47 de organic-keywords.csv*)
* `markup`: **9.900 buscas/mês** | **KD 3** | CPC $0.02 (*Linha 42 de organic-keywords.csv*)
* `como precificar um produto`: **4.100 buscas/mês** | **KD 2** | CPC $0.10 (*Linha 61 de organic-keywords.csv*)
* `precificacao de produtos`: **3.900 buscas/mês** | **KD 4** | CPC $0.25 (*Linha 81 de organic-keywords.csv*)
* `margem de lucro`: **3.300 buscas/mês** | **KD 8** | CPC $0.01 (*Linha 149 de organic-keywords.csv*)
* `margem de contribuicao`: **2.400 buscas/mês** | **KD 9** | CPC $0.12 (*Linha 140 de organic-keywords.csv*)
* `como calcular lucro de um produto`: **1.900 buscas/mês** | **KD 10** | CPC $0.05 (*Linha 204 de organic-keywords.csv*)
* `como calcular margem de lucro`: **1.700 buscas/mês** | **KD 5** | CPC $0.02 (*Linha 144 de organic-keywords.csv*)
* `como calcular preco de venda`: **880 buscas/mês** | **KD 6** | CPC $0.07 (*Linha 151 de organic-keywords.csv*)
* `como dar desconto sem perder lucro`: **340 buscas/mês** | **KD 6** | CPC $0.08 (*Linha 252 de organic-keywords.csv*)
* `calculadora de margem`: **320 buscas/mês** | **KD 13** | CPC $0.02 (*Linha 392 de top-pages.csv*)

> **Volume Total Combinado do Cluster:** Mais de **50.000 buscas mensais** no Brasil com média de KD inferior a 8.

#### A Brecha Competitiva (A Grande Oportunidade):
1. **Concorrentes usam apenas texto estático**: Os líderes atuais dessas palavras-chave (`giroloja.com.br` com a URL `/blog/como-precificar-um-produto` e `lojafacil.com.br` com `/blog/precificacao-o-que-e`) rankeiam apenas com artigos longos e estáticos em blogs. Não oferecem uma ferramenta interativa e imediata.
2. **Subaproveitamento Atual da InfinitePay**: O domínio `infinitepay.io` já possui a URL `/materiais/calculadora-de-margem`, mas ela está na **posição 67** com **tráfego orgânico zerado** (*Linha 392 de top-pages.csv*). Isso prova que a intenção do usuário não está sendo atendida pela página antiga.
3. **Poder do Domínio InfinitePay**: A InfinitePay possui **Domain Rating (DR) 68**, superando os concorrentes que rankeiam no topo desse nicho (`giroloja.com.br` tem DR 38 e `lojafacil.com.br` tem DR 54). Com uma página técnica de alta velocidade e experiência interativa, a InfinitePay tem facilidade para assumir o **Top 1 do Google**.

---

## 3. Metodologia: Pipeline de Análise Exploratória dos Dados

Para transformar os três CSVs brutos do Ahrefs em inteligência acionável, seguimos um pipeline estruturado em quatro etapas sequenciais. Cada etapa está documentada e reproduzível via script Python (`gerar_clusters_excel.py`) e na planilha `analise_clusters_seo.xlsx`.

---

### 3.1. Etapa 1 — Agrupamento Semântico (Clustering e Tagging)

**O que fizemos:** Criamos uma coluna `Cluster` nas 409 palavras-chave do `organic-keywords.csv`, classificando cada termo em um grupo temático com base em correspondência de substrings semânticas.

**Como funciona na prática:**

```
Keyword: "como precificar um produto"
  → Contém "precifica" → Cluster: "Precificacao e Markup"

Keyword: "calculadora imc"
  → Contém "calculadora imc" → Cluster: "Ferramentas Genericas - Descartado"

Keyword: "fluxo de caixa"
  → Contém "fluxo de caixa" → Cluster: "Gestao Financeira"
```

A taxonomia final resultou em **23 clusters**, cobrindo desde os grupos alvo (precificação, margem) até os descartados (CLT, ferramentas sem fit) e os auxiliares (MEI, fiscal, antecipação de recebíveis).

> **Decisão metodológica:** Usamos correspondência por substring e não NLP/embeddings porque o dataset é pequeno (409 linhas) e as keywords em português têm padrões lexicais muito previsíveis. A abordagem é mais rápida, transparente e auditável — ideal para um entregável de case.

**Resultado na planilha:** Aba `Keywords por Cluster` — cada keyword com sua tag visível, ordenada por volume dentro do cluster.

---

### 3.2. Etapa 2 — Mapeamento da SERP: Concorrentes e Tipos de Página

**O que fizemos:** Para cada cluster, cruzamos a coluna `domain` do `organic-keywords.csv` com o `top-pages.csv` para identificar quais domínios aparecem, com quantas keywords e que tipo de página eles usam para rankear.

**Classificação de tipo de página por URL:**

| Padrão na URL | Tipo de Página | Implicação Competitiva |
| :--- | :--- | :--- |
| `/blog/`, `/artigo/`, `/conteudo/` | Conteúdo editorial estático | Vulnerável a uma ferramenta interativa |
| `/calculadora`, `/ferramenta/`, `/app/` | Ferramenta interativa | Concorrente direto — analisar UX e Schema |
| `/categoria/`, `/produto/` | Página de produto/e-commerce | Intenção transacional — diferente do nosso alvo |
| `/` ou página raiz | Home institucional | Domínio rankeando pela autoridade — barreira alta |

**Achado crítico no cluster de Precificação:**

Todos os domínios líderes (`giroloja.com.br`, `lojafacil.com.br`, `vendamais.com.br`) rankeiam com URLs do tipo `/blog/` — **conteúdo editorial sem ferramenta interativa**. Nenhum concorrente relevante oferece uma calculadora funcional. Isso confirma a brecha.

```
Cluster: Precificacao e Markup
  giroloja.com.br     → /blog/como-precificar-um-produto      (texto estático)
  lojafacil.com.br    → /blog/precificacao-o-que-e            (texto estático)
  vendamais.com.br    → /blog/precificacao-de-produtos        (texto estático)
  infinitepay.io      → /materiais/calculadora-de-margem      (posição 67, zero tráfego)
```

**Resultado na planilha:** Aba `Dominios por Cluster` — domínios por cluster com volume captado, melhor posição e URL principal.

---

### 3.3. Etapa 3 — Cálculo de Densidade e Dificuldade Real

**O que fizemos:** Para cada cluster, calculamos o **KD médio, mínimo e máximo** a partir das keywords classificadas, e cruzamos com o perfil de autoridade dos domínios dominantes (DR do `organic-competitors.csv`).

**Por que o KD médio sozinho não basta:**

O KD do Ahrefs é calculado baseado no perfil de backlinks das páginas no Top 10. Um KD baixo em um cluster dominado por portais com DR 80+ é diferente de um KD baixo com concorrentes de DR 35. Por isso avaliamos os dois juntos:

| Cluster | KD Médio | DR Líder | Diagnóstico Real |
| :--- | :---: | :---: | :--- |
| Precificacao e Markup | **5,2** | DR 54 (lojafacil) | Oportunidade real — InfinitePay DR 68 supera o líder |
| Maquininha e Pagamentos | **28,4** | DR 80 (PagSeguro) | Dificuldade real maior que o KD sugere |
| Pix | **19,1** | DR 85 (Banco Central) | KD subestimado — concorrentes institucionais |
| Calc. CLT e RH | **24,8** | DR 72 (dinheirocerto) | Descartado — KD alto + sem fit |

> **Conclusão:** O cluster de Precificação é o único onde o KD baixo é **genuíno** — os concorrentes têm autoridade menor que a InfinitePay e usam apenas conteúdo estático.

**Resultado na planilha:** Aba `Resumo por Cluster` — colunas KD Médio / Mín / Máx coloridas (verde < 10, âmbar 10–20, vermelho > 20).

---

### 3.4. Etapa 4 — Matriz de Priorização: Volume × Esforço

**O que fizemos:** Calculamos um **Score de Oportunidade** para cada cluster usando a fórmula:

```
Score = Volume Total do Cluster ÷ (KD Médio + 1)
```

Quanto maior o score, maior o retorno de tráfego por unidade de esforço de rankeamento.

**Top 5 clusters por Score (excluindo branded e descartados):**

| Pos. | Cluster | Volume | KD Médio | Score | Decisão |
| :---: | :--- | :---: | :---: | :---: | :--- |
| 1 | **Precificacao e Markup** | 50.700 | 5,2 | **9.750** | Ferramenta principal — hub page |
| 2 | **Margem de Lucro** | 9.800 | 7,1 | **1.280** | Hub da calculadora + artigos satélites |
| 3 | **Margem de Contribuicao** | 2.400 | 9,0 | **240** | Artigo satélite prioritário |
| 4 | **Desconto e Negociacao** | 340 | 6,0 | **49** | Artigo satélite de apoio |
| 5 | **Custos e CMV** | 890 | 11,0 | **74** | Artigo satélite de base |

> **Leitura da matriz:** O cluster de Precificação tem score **7,6× maior** que o segundo colocado. Isso é o sinal mais claro possível de onde concentrar o esforço: uma única ferramenta interativa captura mais tráfego qualificado do que os outros cinco clusters juntos.

**Resultado na planilha:** Aba `Ranking de Oportunidades` — clusters rankeados por score, com coloração verde nos maiores valores.

---

## 4. Fit de Negócio: Integração com Produtos e Taxas Reais da InfinitePay

A precificação de um produto é composta por:
$$\text{Preço de Venda} = \text{Custo de Aquisição} + \text{Despesas Operacionais} + \text{Margem de Lucro} + \mathbf{Taxas\ de\ Meios\ de\ Pagamento}$$

Ao digitar suas despesas, o empreendedor percebe que as **taxas de maquininha e cartão impactam diretamente o seu lucro líquido**. Apresentamos a tabela de soluções reais da InfinitePay diretamente vinculada à ferramenta:

### 3.1. Matriz de Produtos, Taxas e Ganchos de Conversão

| Produto InfinitePay | Modalidade / Custo | Taxas Reais de Operação | Prazo | Aplicação Prática na Ferramenta / CTA |
| :--- | :--- | :--- | :--- | :--- |
| **InfiniteTap** *(Venda no Celular)* | • **R$ 0,00 de adesão**<br>• **R$ 0,00 de mensalidade** | • Débito: **0,75% a 1,38%**<br>• Crédito 1x: **2,89% a 3,16%**<br>• Parcelado 12x: **9,80% a 12,40%** | Na hora / 1 dia útil | **Gancho para MEIs e iniciantes:** "Venda no celular sem gastar nada com maquininha e mantenha sua margem de lucro alta." |
| **InfiniteSmart** *(Maquininha Física)* | • **Compra Única**<br>• **Sem aluguel mensal** | • Débito: **0,75% a 1,38%**<br>• Crédito 1x: **2,89% a 3,16%**<br>• Parcelado 12x: **9,80% a 12,40%** | Na hora / 1 dia útil | **Gancho para lojas e balcões:** "Elimine aluguéis de R$ 80 a R$ 150/mês e economize até 40% nas taxas de cartão por venda." |
| **Link de Pagamento** | • **Sem taxa de adesão**<br>• **Sem mensalidade** | • Pix: **0,00% (Grátis)**<br>• Crédito 1x: **~3,20%**<br>• Parcelado 12x: **~12,90%** | Na hora | **Gancho para vendas no WhatsApp e redes:** "Venda à distância com link seguro e repasse as taxas sem assustar o cliente." |
| **Conta Digital PJ** | • **100% Gratuita**<br>• **Sem tarifa de manutenção** | • Pix ilimitado: **R$ 0,00**<br>• TED/Transferências: **R$ 0,00** | Instantâneo | **Gancho de Gestão:** "Zere os custos bancários da sua empresa e receba suas vendas no mesmo dia." |
| **Rendimento de Saldo** | • **Sem custo** | Rende **100%+ do CDI** diariamente no saldo da conta PJ | Diário | **Gancho Financeiro:** "Faça o caixa das suas vendas render automaticamente mais que a poupança enquanto planeja seu estoque." |
| **Cartão InfiniteCard** | • **Sem anuidade** | **+1,5% de Cashback** em todas as compras | Imediato | **Gancho de Lucro Extra:** "Pague seus fornecedores no InfiniteCard e receba 1,5% do valor de volta na conta." |

---

## 5. O que o Dataset NÃO Permite Concluir (Limitações Críticas dos Dados)

Seguindo a boa prática de Growth analítico, destacamos as limitações técnicas e metodológicas do dataset do Ahrefs:

1. **Amostra Reduzida e Fragmentada**: O relatório contém ~400 linhas consolidadas. Domínios consolidados possuem dezenas de milhares de palavras rankeando. Isso significa que termos de cauda longa (Long Tail) altamente específicos não estão mapeados no export, limitando a descoberta de outras potenciais ferramentas secundárias a partir apenas deste recorte.
2. **Falta de Sazonalidade Temporal**: O recorte cobre 6 meses agregados, ocultando oscilações de busca típicas de datas sazonais (como Black Friday, Natal, início de ano e viradas fiscais). Isso nos impede de identificar picos pontuais onde lojistas buscam saber qual o desconto saudável a conceder em datas comemorativas.
3. **Estimativa de Tráfego Imprecisa para Recursos Interativos**: O tráfego do Ahrefs é inferido a partir de taxas de clique padrão (CTR) da SERP orgânica de artigos e links azuis. Calculadoras e ferramentas interativas costumam ter CTR e engajamento muito superiores quando ocupam Featured Snippets e rich elements.
4. **Ponto Cego de IA e AEO (Zero Dados de LLMs)**: O dataset reflete exclusivamente o Google tradicional e não monitora se as URLs dos concorrentes são recomendadas em respostas de IA generativa (ChatGPT Search, Perplexity, Gemini), exigindo uma metodologia própria de auditoria de prompts.

---

## 6. Arquitetura da Solução e Estratégia Técnica da Página

A ferramenta foi desenhada e construída não apenas como um script de cálculo, mas como um **ativo completo de aquisição e conversão orgânica**.

### 6.1. Arquitetura de Informação (Hub & Spoke / Topic Cluster)
* **Página Pilar (Hub)**: `/ferramentas/calculadora-margem-lucro-precificacao` (A ferramenta interativa que centraliza a autoridade).
* **Páginas Satélites de Suporte (Blog Clusters)**:
  1. *O que é Markup e como aplicar o Markup Divisor no comércio* (`markup` - 9.900 buscas)
  2. *Markup vs Margem de Lucro: Qual a diferença e qual usar?* (`markup ou margem` - 390 buscas)
  3. *Margem de Contribuição: Como calcular e precificar corretamente* (`margem de contribuicao` - 2.400 buscas)
  4. *Como calcular o lucro real de um produto passo a passo* (`como calcular lucro de um produto` - 1.900 buscas)
  5. *Como dar desconto sem perder o lucro do seu produto* (`como dar desconto sem perder lucro` - 340 buscas)
  6. *CMV, Custos Fixos e Ponto de Equilíbrio: Como calcular* (Guia base de custos e break-even)
### 6.2. Otimizações de SEO On-Page, AEO e GEO (Diretrizes de Busca por IA em 2026)

Em 2026, o tráfego orgânico não depende apenas dos "links azuis" tradicionais, mas de **conquistar citações diretas, menções de marca e resumos sintetizados em motores de busca generativos (Gemini, ChatGPT Search, Perplexity e Google AI Overviews)**. A página foi desenhada atendendo rigorosamente às 8 práticas fundamentais de AEO/GEO:

1. **Formatação Answer-First (Direto ao Ponto):** Cada seção explicativa e pergunta do FAQ inicia com uma resposta direta e autoexplicativa de 1 a 2 frases (até 250 caracteres), facilitando a extração imediata por parsers de RAG e motores de IA.
2. **Estrutura Escaneável & Tabelas Comparativas:** Uso de tabelas nativas de comparação (Taxas de Mercado vs. InfinitePay), listas ordenadas e blocos de FAQ estruturados que espelham exatamente os prompts dos usuários.
3. **Densidade Factual & Precisão de Dados:** Inclusão de números exatos (ex: *Débito 0,75%*, *Pix 0%*, fórmulas matemáticas reais e prazos D+0/D+1), aumentando o score de confiabilidade na recuperação por RAG.
4. **Foco no Prompt Intent (Intenção de Compra/Ação):** Foco em termos de alta intenção comercial e operacional (*"como calcular margem com taxa de cartão"*), em vez de volume genérico sem conversão.
5. **Clareza de Entidade (Entity Authority):** Marcação Schema.org detalhada conectando a entidade **InfinitePay** (`Organization`) aos seus produtos satélites (`WebApplication`, `InfiniteTap`, `InfiniteSmart`, `Conta PJ`).
6. **Menções em Terceiros & Digital PR:** Conquista de citações e backlinks em portais de autoridade de terceiros (Sebrae, portais MEI, blogs contábeis), que têm peso desproporcional nas recomendações de LLMs.
7. **Fundação Técnica Impecável:** HTML5 semântico puro, sem dependências de scripts pesados, garantindo rastreamento instantâneo pelo Googlebot e crawlers de IA (GPTBot, PerplexityBot).
8. **Métricas de Citação em IA:** Monitoramento da taxa de citação da marca dentro dos motores generativos além do CTR tradicional.

---

## 7. Roadmap de SEO e AEO/GEO para os Primeiros 90 Dias

Para transformar a ferramenta em um canal recorrente de aquisição e a maior referência em IA sobre precificação, executaremos o plano em **3 fases de 30 dias** com responsáveis, entregas e métricas claras.

---

### 🗓️ Cronograma Geral — Set a Nov/2026

| Semana | Período | 🟢 Fase 1 — Fundação & Entidade | 🟡 Fase 2 — Conteúdo, PR & GEO | 🔵 Fase 3 — AEO, CRO & Citações |
| :---: | :---: | :--- | :--- | :--- |
| **S1** | 01/09 – 07/09 | ██ Deploy + Schema WebApp | | |
| **S2** | 08/09 – 14/09 | ██ Redirect 301 + Canonical | | |
| **S3** | 15/09 – 21/09 | ██ Internal Linking no Blog | | |
| **S4** | 22/09 – 30/09 | ██ Validação GSC & Bing Webmaster | | |
| **S5** | 01/10 – 07/10 | | ██ Artigos 1–3 (Answer-First) | |
| **S6** | 08/10 – 14/10 | | ██ Artigos 4–6 (Factual Density) | |
| **S7** | 15/10 – 21/10 | | ██ Digital PR MEI & Portais Finanças | |
| **S8** | 22/10 – 31/10 | | ██ CTR Snippets & FAQ Rich Results | |
| **S9** | 01/11 – 07/11 | | | ██ Auditoria AEO (Gemini, Perplexity, GPT) |
| **S10** | 08/11 – 14/11 | | | ██ Testes A/B CTA & Otimização RAG |
| **S11** | 15/11 – 21/11 | | | ██ Monitor de Citações de Entidade |
| **S12** | 22/11 – 30/11 | | | ██ Review de Metas & Expansão de Features |

---

### 🟢 Fase 1 (Dias 1 – 30): Fundação Técnica, Crawlability & Entidade

> **Objetivo:** Indexação técnica perfeita nos índices tradicionais (Google/Bing) que alimentam os LLMs em tempo real e consolidação de entidade.

| # | Ação | Prática AEO/GEO | Prazo | Owner | Impacto |
| :---: | :--- | :--- | :---: | :---: | :---: |
| 1.1 | Deploy em `/ferramentas/calculadora-margem-lucro-precificacao` | Fundação Técnica (HTML5 + Core Web Vitals) | Dia 1 | Dev/SEO | 🔴 Crítico |
| 1.2 | Redirect 301 de `/materiais/calculadora-de-margem` → nova URL | Herança de autoridade e histórico de posição | Dia 5 | Dev | 🔴 Crítico |
| 1.3 | Validar Schema `WebApplication`, `Organization` e `FAQPage` | Clareza de Entidade (Entity Signals) | Dia 7 | SEO | 🟠 Alto |
| 1.4 | Internal linking estratégico em 15+ artigos do blog InfinitePay | Arquitetura Topic Cluster & Co-ocorrência | Dia 15 | Content | 🟠 Alto |
| 1.5 | Monitoramento de indexação via GSC e Bing Webmaster Tools | Rastreabilidade para Bots de IA (GPTBot, Perplexity) | Dia 30 | SEO | 🟡 Médio |

**✅ Critérios de Saída da Fase 1:**
- PageSpeed Score > 95 (Mobile e Desktop)
- Página indexada e sem erros de rastreio no Google e Bing
- Validação 100% limpa no teste de Rich Results da Schema.org
- Redirect 301 auditado sem loops

---

### 🟡 Fase 2 (Dias 31 – 60): Topic Cluster, Distribuição Multicanal & Digital PR

> **Objetivo:** Construir autoridade temática com artigos Answer-First, gerar sinais sociais multicanal e conquistar citações de alta autoridade para IA.

| # | Ação | Prática AEO/GEO | Volume-Alvo / Canal | Prazo | Owner |
| :---: | :--- | :--- | :--- | :---: | :---: |
| 2.1 | *O que é Markup e o Markup Divisor* | Formatação Answer-First + Fórmulas | `markup` — 9.900/mês | Dia 35 | Content |
| 2.2 | *Markup vs Margem de Lucro: Qual usar?* | Tabela comparativa e definição direta | `markup ou margem` — 390/mês | Dia 38 | Content |
| 2.3 | *Margem de Contribuição: Como calcular* | Densidade Factual + Exemplo Prático | `margem de contribuicao` — 2.400/mês | Dia 42 | Content |
| 2.4 | *Como calcular o lucro real de um produto* | Prompt Intent focado no Comerciante | `como calcular lucro` — 1.900/mês | Dia 46 | Content |
| 2.5 | *Como dar desconto sem perder o lucro* | Estrutura escaneável (passo a passo) | `desconto sem perder lucro` — 340/mês | Dia 50 | Content |
| 2.6 | *CMV, Custos Fixos e Ponto de Equilíbrio* | Dados estruturados de cálculo financeiro | Base do cluster (~4.590/mês) | Dia 55 | Content |
| 2.7 | **Campanha de Digital PR Estruturada** | Menções em Terceiros & Sinais Externos de Entidade | Parcerias: Sebrae, portais MEI, portais contábeis | Dia 60 | PR/Growth |
| 2.8 | **Distribuição Multicanal & Sinais Sociais** | Amplificação de Marca e Co-ocorrência em LLMs | Pílulas em YouTube Shorts, TikTok, Instagram e LinkedIn | Dia 60 | Social/Content |
| 2.9 | **Flywheel de Conteúdos Satélites → Hub** | Tráfego Cruzado e Fortalecimento da Ferramenta | Links contextuais em 100% dos formatos multicanal | Dia 60 | Growth |

**✅ Critérios de Saída e Metas de Performance da Fase 2 (Mês 2 / Dia 60):**

| Métrica de Validação (Mês 2) | Meta Intermediária | O que indica para o Growth |
| :--- | :---: | :--- |
| **Tráfego Orgânico Mensal** | **≥ 3.500 visitas/mês** | Validação da indexação dos satélites e ganho de posições Top 10 |
| **Taxa de Ativação na Ferramenta** | **≥ 60% dos visitantes** | Usuário realmente insere custos e simula o preço (utilidade comprovada) |
| **CTR nos CTAs / Comparador de Taxas** | **≥ 8% de cliques** | Descoberta da economia de taxas gerando interesse comercial |
| **Taxa de Conversão (Visitante → Conta PJ)** | **≥ 2,5% (~85 contas/mês)** | Primeiras conversões comerciais diretas originadas da ferramenta |
| **Artigos Satélites & Backlinks** | **6 satélites + ≥10 backlinks** | Topic cluster 100% ativo com autoridade transferida para o Hub |

---

### 🔵 Fase 3 (Dias 61 – 90): Auditoria AEO/GEO, Citações em LLMs e CRO

> **Objetivo:** Maximizar a taxa de recomendação em buscas generativas por IA, calibrar CRO e expandir funcionalidades.

| # | Ação | Prática AEO/GEO | Ferramenta / Método | Prazo | Owner |
| :---: | :--- | :--- | :--- | :---: | :---: |
| 3.1 | Auditoria de Citações em IA (Gemini, Perplexity, ChatGPT Search) | Benchmark de Citação e Respostas Generativas | Bateria de 20 Prompts Reais de Compra | Dia 65 | SEO/Growth |
| 3.2 | Refinamento de blocos de resposta direta (≤ 250 chars) com base nos prompts | Otimização para RAG e Sintetizadores de IA | Editor de Conteúdo / CMS | Dia 68 | Content |
| 3.3 | Testes A/B nos CTAs: *"Abrir Conta Grátis"* vs *"Simular com InfiniteTap"* | CRO & Ativação de Tráfego Orgânico | Ferramenta de Teste A/B | Dia 70 | CRO |
| 3.4 | Monitoramento semanal de rankings tradicionais e menções de IA | Métricas de Citação e Rankings SERP | GSC + Planilha de Monitoramento IA | Contínuo | SEO |
| 3.5 | Revisão de metas e expansão (ex: Simulador de Frete + Parcelamento) | Expansão de Product-Led Growth | Analytics / Dados de Uso | Dia 90 | Growth Lead |

**✅ Critérios de Saída e Metas Consolidadas da Fase 3 (Mês 3 / Dia 90):**

| Métrica Consolidada (Mês 3) | Meta Final | Prática / Alinhamento | Ferramenta de Medição |
| :--- | :---: | :--- | :--- |
| **Visitas orgânicas mensais** | **≥ 10.000** | SEO Tradicional (Rampa completa do Cluster) | Google Search Console |
| **Posição nas keywords principais** | **Top 3** | Dominância SERP no Cluster de Precificação | Ahrefs / GSC |
| **Taxa de Citação em Motores de IA** | **≥ 5 citações semanais** | AEO / GEO (Gemini, Perplexity, GPT) | Auditoria de Prompts Padronizados |
| **Taxa de conversão (visitante → conta PJ)** | **≥ 4,0% (~400 contas/mês)** | CRO maduro & Fit de Produto | Google Analytics / Mixpanel |
| **Menções e Backlinks de Autoridade (DR > 40)** | **≥ 10 domínios** | Sinais Externos de Entidade & Digital PR | Ahrefs |

---

### 7.4. Framework de Rastreamento e Atribuição de Tráfego de IA (AEO/GEO)

Para mensurar com precisão se a ferramenta está sendo recomendada e trazendo tráfego através de motores de Inteligência Artificial, estabelecemos 3 pilares de mensuração:

1. **Rastreamento de Tráfego de Referência no Google Analytics 4 (GA4):**
   * Criação do canal personalizado **"AI Referral"** filtrando acessos diretos oriundos dos domínios de chatbots:
     * `chatgpt.com` e `android-app://com.openai.chatgpt` (OpenAI / ChatGPT Search)
     * `perplexity.ai` (Perplexity)
     * `gemini.google.com` (Google Gemini)
     * `claude.ai` (Anthropic Claude)
     * `copilot.microsoft.com` (Microsoft Copilot)
2. **Monitoramento de Google AI Overviews no Google Search Console (GSC):**
   * Acompanhamento de impressões, cliques e CTR nas URLs do Topic Cluster exibidas nos blocos gerados por IA no topo da SERP do Google.
3. **Auditoria Periódica de Prompts (Share of Voice em IA):**
   * Execução semanal de uma bateria de **20 prompts de compra/decisão** (ex: *"qual a melhor calculadora de margem para loja?"*, *"como calcular preço de venda com taxa de cartão?"*).
   * A meta de **≥ 5 citações semanais** representa uma taxa de recomendação de pelo menos 25% a 30% nas auditorias de controle, indicando que a InfinitePay virou a resposta canônica dos modelos para o nicho de precificação.

---

## 8. Conclusão e Próximos Passos

A **Calculadora de Margem de Lucro e Precificação de Produtos** atende rigorosamente a todos os critérios estratégicos estabelecidos pela liderança de Growth da InfinitePay:

1. **Fundamentação Sólida e Rastreável:** Cada premissa parte de evidências concretas extraídas dos relatórios do Ahrefs (mais de 50.000 buscas/mês com KD médio < 8).
2. **Alta Relevância e Qualificação de ICP:** Foco exclusivo no comerciante e microempreendedor que precisa calcular despesas e taxas de intermediação financeira.
3. **Diferenciação Competitiva Real:** Superação do formato de texto estático dos concorrentes através de um ativo interativo, rápido e preparado para a era da busca por IA (AEO/GEO).
4. **Roadmap Executivo Claro:** Plano faseado em 90 dias com metas intermediárias de tráfego, funil de conversão e mecanismos modernos de atribuição via GA4 e Search Console.

A oportunidade está pronta para ser executada, posicionando a InfinitePay como a referência máxima no ecossistema de precificação e adquirindo milhares de novos clientes orgânicos de forma previsível e escalável.
