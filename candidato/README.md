# Teste técnico

> ## ⚠️ Leia antes de começar
>
> **A única fonte de dados de SEO permitida neste teste é o dataset enviado junto
> com este documento.**
>
> Mesmo que você tenha acesso a Ahrefs, SEMrush ou qualquer outra ferramenta,
> **não use.** O cenário e os concorrentes são **fictícios**, e os números da
> InfinitePay foram alterados. Consultar fontes externas não vai te ajudar — vai
> te levar para conclusões que não se sustentam neste cenário.
>
> Toda afirmação da sua análise precisa poder ser rastreada até uma linha de um
> dos arquivos em `dataset/`.
>
> **A única exceção é a própria InfinitePay:** pesquise a empresa e os produtos à
> vontade. A ferramenta que você escolher precisa ter fit com o negócio, e essa
> justificativa não está no dataset.

## O contexto

Você entrou no time de Growth da InfinitePay há duas semanas.

Na reunião de planejamento do trimestre, a liderança colocou uma meta na mesa:
**crescer aquisição orgânica através de ferramentas gratuitas.**

O que ninguém sabe é *qual* ferramenta construir.

Essa é a sua missão: **encontrar, nos dados, uma oportunidade de ferramenta que a
InfinitePay ainda não está explorando** — e defender a escolha.

## O que já fizeram por você

Uma pessoa do time adiantou a parte braçal. Ela puxou três relatórios do Ahrefs
via API v3 — mercado Brasil, recorte dos **últimos 6 meses** — rodando um export
por domínio e consolidando tudo em três arquivos, na pasta `dataset/`:

| Arquivo | Relatório do Ahrefs | Linhas |
|---|---|---|
| `organic-competitors.csv` | Organic competitors, rodado em `infinitepay.io` | 14 |
| `top-pages.csv` | Top pages, um export por domínio | 406 |
| `organic-keywords.csv` | Organic keywords, um export por domínio | 409 |

Três avisos sobre esses arquivos:

1. A coluna `domain` **não vem do Ahrefs**. Foi adicionada na consolidação, porque
   cada export original era de um domínio só.
2. `top-pages.csv` e `organic-keywords.csv` incluem a **`infinitepay.io`** junto
   com os concorrentes — ela é só mais um valor na coluna `domain`.
3. **Não houve limpeza nenhuma.** É o export cru. O que estiver sujo, está sujo.

Para este teste, considere que a `infinitepay.io` tem **Domain Rating 68**, cerca
de **1.900 keywords** orgânicas, **380 páginas** rankeando e **12 mil** visitas
orgânicas por mês.

## Dicionário de dados

### `organic-competitors.csv`

| Coluna | O que é |
|---|---|
| `competitor_domain` | Domínio do concorrente |
| `keywords_common` | Keywords em que o concorrente e a InfinitePay rankeiam |
| `keywords_competitor` | Keywords do concorrente em que a InfinitePay não rankeia |
| `keywords_target` | Keywords da InfinitePay em que o concorrente não rankeia |
| `share` | % de keywords em comum sobre o total |
| `traffic` | Tráfego orgânico mensal estimado |
| `domain_rating` | DR — força do perfil de backlinks do domínio, escala 0-100 |
| `pages` | Total de páginas do domínio rankeando |

### `top-pages.csv`

| Coluna | O que é |
|---|---|
| `domain` | Adicionado na consolidação |
| `url` | URL da página |
| `sum_traffic` | Tráfego orgânico mensal estimado da página, somando todas as keywords dela |
| `value` | Valor estimado desse tráfego, **em centavos de dólar** |
| `keywords` | Número de keywords para as quais a página rankeia no top 100 |
| `top_keyword` | A keyword que mais traz tráfego para a página |
| `top_keyword_volume` | Volume de busca mensal dessa keyword |
| `top_keyword_best_position` | Posição da página para essa keyword |
| `top_keyword_best_position_kind` | Tipo de posição: orgânica, paga ou feature de SERP |
| `top_keyword_best_position_title` | Título exibido na SERP |
| `page_type` | Classificação do tipo de página, inferida por IA pelo Ahrefs |
| `ur` | URL Rating — força do perfil de backlinks **da página**, escala 0-100 |
| `referring_domains` | Domínios únicos apontando para a página |
| `status` | Comparação entre o início e o fim do período: `left` = página que passou a rankear · `right` = que deixou de rankear · `both` = rankeava nas duas pontas |
| `traffic_diff` | Variação de tráfego ao longo do período |
| `keywords_diff` | Variação no número de keywords ao longo do período |

### `organic-keywords.csv`

| Coluna | O que é |
|---|---|
| `domain` | Adicionado na consolidação |
| `keyword` | Termo de busca |
| `volume` | Buscas mensais estimadas |
| `keyword_difficulty` | KD — dificuldade estimada de entrar no top 10, escala 0-100 |
| `cpc` | Custo por clique médio em mídia paga, **em centavos de dólar** |
| `sum_traffic` | Tráfego que esse domínio recebe dessa keyword |
| `best_position` | Melhor posição do domínio para a keyword |
| `best_position_kind` | Tipo da posição |
| `best_position_url` | URL que rankeia — é a chave de ligação com `top-pages.csv` |
| `is_branded` `is_commercial` `is_informational` `is_navigational` `is_transactional` `is_local` | Classificação de intenção do Ahrefs |
| `serp_features` | Features presentes na SERP |
| `words` | Número de palavras na keyword |
| `status` | Igual ao de `top-pages.csv` |

## O que você precisa entregar

### 1. A análise e a estratégia

Como você saiu de 800 e poucas linhas até uma recomendação. Queremos ver o caminho,
não só o destino: o que você considerou, o que descartou e **por quê**.

No mesmo material, **o roadmap de SEO e AEO**: as frentes para rampar essa página
nos primeiros 90 dias, em que ordem, e o que mediria para saber se funcionou. Não
precisa ser documento extenso — um roadmap com as frentes e o racional resolve.

Formato livre — documento, planilha, notebook, o que for. Se usou código, mande.

### 2. A página, num repositório público no GitHub

A ferramenta sozinha não capta ninguém: ela precisa do **conjunto de páginas que
traz busca orgânica até ela**. Essas páginas são o ativo de aquisição — são elas
que vão brigar na SERP.

Você **não precisa construir todas**. Desenhe a estrutura que faz sentido e
**desenvolva apenas a página principal**, que é a que você vai entregar.

**A ferramenta não precisa funcionar.** Na página, ela pode ser interface estática,
mock ou cálculo simplificado — só precisa comunicar com clareza o que resolve.
Não gaste tempo aqui.

**O que pesa é o quanto a página está preparada para performar na SERP.** Construa
com essa cabeça e esteja pronto para justificar as decisões que tomou — inclusive
o que você decidiu **não** fazer e por quê.

**Entregue o link de um repositório público no GitHub** com o código da página.
Stack livre. **Publicar é opcional** — se preferir, o repositório basta. Se
publicar, mande a URL também.

### 3. O vídeo

**Até 10 minutos**, gravado por você, apresentando como se estivesse na frente do
líder de Growth. Cobrindo:

- **Qual ferramenta você decidiu propor e com base em quais dados do Ahrefs chegou
  nela** — mostrando os números na tela, apontando as linhas e colunas do dataset
  que sustentam a decisão
- **Por que ela faz sentido para a InfinitePay**
- Por que você **descartou** as outras oportunidades que apareceram no caminho
- A página e o raciocínio por trás dela: por que essa estrutura, esse título, essa
  URL, e como a estrutura técnica sustenta a disputa na SERP
- **Os principais pontos do seu roadmap de SEO e AEO** — sem detalhar tudo, o
  detalhe está no material escrito

## Regras

**Dados de SEO, só o dataset** — como dito no início. Vale também para não sair
procurando os sites dos concorrentes: eles não existem. Sobre a InfinitePay,
pesquise à vontade.

**Recomendamos usar IA** em qualquer etapa do teste. Modelos abertos dão conta
de tudo que é pedido aqui. É importante que ela seja usada como uma assistente,
e que você saiba explicar as escolhas feitas nas próximas etapas do processo.

**Tempo: até 6 horas.** Não é cronometrado, mas foi calibrado para caber nisso.
Se estiver estourando, simplifique a interface da ferramenta — nunca a análise, a
estratégia ou a qualidade técnica da página.

**Prazo de entrega:** combinado por e-mail.

## Como avaliamos

Em ordem de peso:

1. **Qualidade da análise** — como você lidou com dado sujo, o que aceitou e o que
   descartou, e se a conclusão realmente decorre da evidência
2. **A estratégia de ramp em SEO e AEO** — plano específico para esta oportunidade
   e para o diagnóstico que você fez, com métricas e horizonte. Lista genérica de
   boas práticas conta pouco
3. **A página** — se as decisões fazem sentido para a busca que ela quer atender
4. **A comunicação** — se um líder de Growth entenderia e conseguiria decidir

Uma coisa que valorizamos e quase ninguém faz: **dizer o que o dado não permite
concluir.** Este dataset tem limitações reais. Apontá-las conta a favor.

## Dúvidas

Se algo no dataset parecer ambíguo, decida, siga em frente e registre a decisão
no vídeo ou na análise. Saber trabalhar com informação incompleta faz parte do
que estamos avaliando.

Boa sorte.
