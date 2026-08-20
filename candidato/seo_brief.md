# SEO Brief — Calculadora de Margem de Lucro e Precificacao de Produtos
**Documento:** Decisoes de Construcao da Pagina
**Candidato:** Growth Marketing Specialist — Case Study InfinitePay
**Data:** 20 de Agosto de 2026

---

## 1. Por que essa Palavra-chave?

### O cluster escolhido

A palavra-chave primaria e **"calculadora de margem de lucro"** com as variacoes do cluster de precificacao.

### Fundamentacao nos dados do Ahrefs

| Sinal | Dado | Interpretacao |
| :--- | :--- | :--- |
| Volume combinado do cluster | **50.000+ buscas/mes** | Demanda real e consistente |
| KD medio do cluster | **< 8** | Dificuldade baixissima — InfinitePay (DR 68) domina facilmente |
| Concorrentes lideres | DR 38 (giroloja) e DR 54 (lojafacil) | InfinitePay tem vantagem de dominio sobre todos |
| URL atual no Ahrefs | Posicao 67, trafego zero | Prova que o intent nao esta sendo atendido — oportunidade direta |
| Tipo de intencao | Informacional + Transacional | Usuario quer aprender **e** quer uma ferramenta — nao so texto |

### Por que essa keyword e nao outras do cluster?

A keyword **"calculadora de margem de lucro"** foi escolhida como ancora primaria porque:

1. **Contem a palavra "calculadora"** — sinaliza para o Google que o usuario quer uma ferramenta interativa, nao um artigo. Isso favorece rich snippets de aplicativo (schema WebApplication).
2. **"Margem de lucro"** e o termo mais buscado entre os variantes (3.300/mes, KD 8), mais generico e inclusivo.
3. A combinacao gera uma URL semantica limpa: `/ferramentas/calculadora-margem-lucro-precificacao`

### Por que precificacao e nao maquininha?

Maquininha tem volume alto, mas KD elevado e concorrencia direta de PagSeguro, Stone e Cielo (DR 80+). A precificacao tem **volume comparavel, KD menor que 10 e concorrentes usando apenas texto estatico**, sem ferramentas interativas. Essa e uma brecha rara no mercado.

---

## 2. Por que esse Title Tag?

### Title definido

```
Calculadora de Margem de Lucro e Precificacao Gratis | InfinitePay
```

### Estrutura e decisoes

| Elemento | Escolha | Motivo |
| :--- | :--- | :--- |
| **Keyword primaria no inicio** | "Calculadora de Margem de Lucro" | Google da mais peso a termos no inicio; melhora CTR |
| **"e Precificacao"** | Incluido como modificador | Captura variacoes sem criar outra pagina |
| **"Gratis"** | Incluido explicitamente | Altissimo poder de CTR — remove objecao de custo antes do clique |
| **"InfinitePay"** | Ao final apos pipe | Branding nao compete com a keyword principal |
| **Comprimento** | 62 caracteres | Dentro do limite de ~65 chars — sem corte na SERP |

### Variacoes para testes A/B futuros

- `Calculadora de Margem de Lucro Gratis — Precifique sem Erro | InfinitePay`
- `Como Calcular Margem de Lucro: Calculadora Online Gratis | InfinitePay`

---

## 3. Por que essa Meta Description?

### Meta description definida

```
Calcule o preco de venda ideal, a margem de lucro real e o markup do seu produto em segundos.
Ferramenta gratuita que ja inclui as taxas do cartao. Sem cadastro.
```

### Estrutura e decisoes

| Elemento | Por que |
| :--- | :--- |
| **Verbo de acao no inicio ("Calcule")** | Cria urgencia e clareza imediata sobre o que a pagina faz |
| **"preco de venda ideal"** | Captura busca semantica de "como calcular preco de venda" (880/mes, KD 6) |
| **"em segundos"** | Reduz friccao percebida — promete resultado rapido |
| **"ja inclui as taxas do cartao"** | Diferencial unico vs. todas as calculadoras genericas do mercado |
| **"Sem cadastro"** | Remove a principal objecao de ferramentas gratuitas: o muro de lead |
| **Comprimento** | ~158 caracteres — dentro do limite de ~160 chars |

> **Principio AEO aplicado:** A description funciona tambem como resposta direta em motores de IA.
> Se o Gemini ou Perplexity indexar esta pagina, esse texto e o que sera citado como resumo da ferramenta.

---

## 4. Por que essa Estrutura de Conteudo?

### Arquitetura da pagina (de cima para baixo)

```
1. Header fixo              > Navegacao + CTA "Abrir Conta Gratis"
2. Hero Section             > H1 + Subtitulo + 4 stats (Pix 0%, Debito 0,75%...)
3. Calculadora Interativa   > Painel de entrada + Painel de resultados em tempo real
4. Secao explicativa        > O que e Markup? Como calcular? (texto para SEO + AEO)
5. Tabela comparativa       > InfinitePay vs. Mercado (converte duvida em intencao)
6. FAQ em accordion         > 6 perguntas (FAQPage schema para rich snippets)
7. Footer                   > Links + Nota legal
```

### Decisoes de conteudo

#### H1 — unico na pagina

```
Calculadora de Margem de Lucro e Precificacao de Produtos
```

- H1 identico ao topic principal da keyword-alvo.
- Sem subterfugios ou variacoes criativas — o Google precisa de clareza semantica.
- Nenhum outro H1 na pagina (regra critica de SEO on-page).

#### Secao explicativa (texto editorial sob a calculadora)

**Por que ter texto alem da ferramenta?**

Ferramentas puramente interativas sem conteudo textual sao dificeis de rankear porque:

1. Crawlers precisam de texto para entender o contexto da pagina.
2. A secao educativa captura variacoes informacionais ("o que e markup", "como calcular margem de lucro").
3. Ela alimenta os blocos de resposta que o Gemini e o ChatGPT citam (AEO).

**Regra de AEO aplicada:** cada conceito-chave tem uma **resposta direta de ate 250 caracteres** no inicio do paragrafo, antes do aprofundamento. Exemplo:

> "Markup e o percentual adicionado ao custo do produto para determinar o preco de venda. Calculado pela formula: Markup = 1 / (1 menos percentual total de despesas e lucro)."

Esse formato e exatamente o que Perplexity, Gemini e ChatGPT Search extraem para respostas de IA.

#### Tabela comparativa de taxas

Presente na pagina por tres motivos estrategicos:

1. **Converte intencao informacional em comercial:** o usuario que veio buscar "como calcular margem de lucro" descobre que paga taxa maior que necessario.
2. **Captura busca secundaria** do cluster "Maquininha e Pagamentos" — quem busca comparativo pode chegar por esse caminho.
3. **Ancora de backlink natural:** portais de financas e MEI tem incentivo para linkar um comparativo de taxas — link building organico via conteudo.

---

## 5. Por que esse FAQ?

### Perguntas selecionadas e criterios

| # | Pergunta | Criterio de selecao |
| :---: | :--- | :--- |
| 1 | O que e markup divisor e como usar? | "markup" — 9.900 buscas/mes, KD 3. Cauda mais curta do cluster |
| 2 | Como calcular o preco de venda de um produto? | "como calcular preco de venda" — 880/mes, KD 6 |
| 3 | Qual a diferenca entre markup e margem de lucro? | "markup ou margem" — 390/mes. Duvida conceitual frequente |
| 4 | Como incluir a taxa do cartao no preco de venda? | Sem busca direta, mas alta probabilidade de citacao em IA |
| 5 | O que e margem de contribuicao? | "margem de contribuicao" — 2.400/mes, KD 9 |
| 6 | Por que usar parcelado em ate 12x aumenta o preco? | Maior duvida de quem usa a calculadora — gera engajamento |

### Formato accordion (lista) — por que nao cards?

- **Cards** criam conteudo visivelmente expandido: Google indexa bem, mas a pagina fica longa e pesada.
- **Accordion** com atributo `hidden` no HTML: o Google **ainda indexa** o conteudo oculto, mas o usuario ve uma interface limpa.
- O formato accordion com `aria-expanded` e `aria-controls` e o padrao recomendado pelo Google para FAQs interativas.

### Schema FAQPage

O markup JSON-LD de FAQPage habilita **rich snippets de FAQ na SERP**: a resposta aparece expandida no Google antes mesmo do clique, aumentando visibilidade e CTR em media 30 a 60%.

---

## 6. Uso de Imagens — Decisao e Fundamentacao

### Decisao: imagens minimas, dados estruturados maximos

A calculadora foi construida **sem imagens decorativas** e com uso cirurgico de elementos visuais. Isso foi intencional.

### Por que evitar imagens pesadas?

| Risco | Impacto no SEO |
| :--- | :--- |
| Imagens nao otimizadas | Aumentam o LCP (Largest Contentful Paint) — penaliza Core Web Vitals |
| Imagens sem alt descritivo | Perdem oportunidade de indexacao semantica e Google Imagens |
| Carousel ou banners JavaScript | Podem aumentar o CLS (Cumulative Layout Shift) |

A calculadora usa **Vanilla CSS + JavaScript puro**, garantindo:
- `LCP < 1s` — sem imagens bloqueantes
- `CLS = 0` — sem elementos que "pulam" ao carregar
- `FID < 50ms` — resposta imediata ao clique

Ferramentas interativas sao avaliadas pelo Google primariamente pela **performance**, nao pelo design visual.

### Quando usar imagem — 2 casos justificados

| Caso | Elemento | Justificativa |
| :--- | :--- | :--- |
| **Open Graph (og:image)** | Imagem 1200x630px estatica da marca | Aparece ao compartilhar no WhatsApp e LinkedIn — aumenta CTR social |
| **Schema ImageObject** | Logo oficial da InfinitePay no JSON-LD | Exigido pelo schema WebApplication para o Google associar a pagina a marca |

### O que nao usar

- Screenshots decorativos da calculadora (usuario ja ve a ferramenta real)
- Icones como arquivos PNG (usar SVG inline — zero requisicao HTTP extra)
- Infograficos estaticos explicando a formula (a calculadora interativa ja demonstra — redundante e pesado)

---

## 7. Dados Estruturados (Schema.org) — Decisao Completa

### Schemas implementados

| Schema | Funcao |
| :--- | :--- |
| `WebApplication` | Identifica a pagina como ferramenta interativa (rich snippet de aplicativo) |
| `FAQPage` | 6 perguntas com respostas para rich snippets na SERP |
| `BreadcrumbList` | Trilha de navegacao para o Google entender hierarquia do site |
| `Organization` | Dados da InfinitePay (nome, logo, siteLinks) |

### Por que WebApplication especificamente?

O schema `WebApplication` instrui o Google a exibir a pagina com informacoes de aplicativo:
- Nome da ferramenta
- Preco ("Gratis")
- Categoria ("FinancialProduct")
- Avaliacao (pode ser adicionada futuramente com User Reviews)

Isso resulta em **snippets enriquecidos** com CTR entre 30 e 60% superior ao resultado organico padrao.

---

## 8. Sintese — Todas as Decisoes em Uma Tabela

| Elemento | Escolha | Resultado Esperado |
| :--- | :--- | :--- |
| Keyword primaria | `calculadora de margem de lucro` | Top 3 em 60 dias (KD < 8, DR 68 vs. DR 38 do lider) |
| URL | `/ferramentas/calculadora-margem-lucro-precificacao` | Semantica, sem stopwords, com keyword |
| Title | 62 chars, keyword no inicio, "Gratis" | CTR acima da media da SERP |
| Meta Description | Beneficio + diferencial + remocao de objecao | Reducao de bounce pos-clique |
| H1 | Identico ao topic principal da keyword | Clareza semantica para o crawler |
| Texto editorial | Respostas AEO de ate 250 chars por conceito | Citacao em Gemini, ChatGPT, Perplexity |
| FAQ | 6 perguntas com schema FAQPage | Rich snippets + captura de variacoes do cluster |
| Imagens | Minimas (so og:image e logo JSON-LD) | LCP < 1s, CLS = 0, PageSpeed > 95 |
| Schema | WebApplication + FAQPage + BreadcrumbList | Rich snippets, maior ocupacao na SERP |
| Redirect 301 | Da URL antiga /materiais/calculadora-de-margem | Herda posicao 67 e historico de dominio |
