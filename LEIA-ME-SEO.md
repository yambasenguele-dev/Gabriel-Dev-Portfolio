# O que foi implementado no código (index.html)

1. **Título e descrição otimizados** — title e meta description reescritos com palavras-chave locais ("Luanda", "Angola").
2. **`meta keywords`, `author`, `robots`, `canonical`** adicionados.
3. **Open Graph + Twitter Cards completos** — agora ao enviar o link no WhatsApp/Facebook aparece um preview bonito, com a nova imagem `img/og-cover.jpg` (gerada e incluída).
4. **Dados estruturados (JSON-LD)** — `ProfessionalService` (endereço, telefone, serviços) e `Person`. Isso ajuda o Google a te entender como negócio local.
5. **Favicon corrigido** para `.webp` (mais leve) com `apple-touch-icon`.
6. **Preload da imagem hero** (`perfil.webp`) para melhorar o LCP (Core Web Vital de velocidade).
7. **Todas as imagens usadas foram convertidas para WebP** e trocadas no HTML — reduções de 30% a 96% no peso de cada arquivo (ex: `bazardapaulina.png` 767KB → `bazardapaulina.webp` 48KB).
8. **`width`/`height` em todas as imagens** — evita layout shift (CLS) ao carregar.
9. **`loading="lazy"`** em todas as imagens fora da primeira dobra (Sobre, Projetos). A imagem do hero foi propositalmente deixada sem lazy (ela precisa carregar imediatamente).
10. **`alt` reescritos** para descrever o projeto de forma real (ex: "Site institucional Kihoto, empresa de limpeza e gestão de resíduos em Luanda" em vez de "Projeto Kihoto") — isso ajuda no SEO de imagens do Google.
11. **`robots.txt`** e **`sitemap.xml`** criados na raiz do projeto.

## ⚠️ Ação obrigatória antes de publicar

O `canonical`, `og:url` e o JSON-LD estão apontando para `https://gabrieldevsolution.pages.dev/`.
**Se e quando você comprar um domínio próprio**, faça um find-and-replace de
`gabrieldevsolution.pages.dev` para o novo domínio em `index.html`, `robots.txt` e `sitemap.xml`.

## O que eu não consigo fazer por você (requer acesso às suas contas)

Isso não é código — é configuração nas plataformas do Google/Cloudflare:

1. **Domínio próprio** — compre um domínio e conecte em Cloudflare Pages → Custom domains. (Maior impacto de todos os itens.)
2. **Google Search Console** (https://search.google.com/search-console):
   - Adicione a propriedade
   - Verifique via DNS (Cloudflare) ou cole a tag `google-site-verification` que o Google fornecer, dentro do `<head>` do `index.html`
   - Vá em Sitemaps → envie `sitemap.xml`
3. **Google Analytics 4** (https://analytics.google.com) — crie a propriedade, copie o ID `G-XXXXXXXXXX` e cole o snippet `gtag.js` antes do `</head>` (modelo no guia completo anexado).
4. **Google Business Profile** (https://business.google.com) — cadastre "Gabriel Dev" como prestador de serviço em Luanda, peça avaliações dos clientes (Kihoto, Cimpedol, Bazar da Paulina).
5. Depois de publicar, valide em:
   - https://search.google.com/test/rich-results (dados estruturados)
   - https://pagespeed.web.dev (performance)

## Observação sobre o repositório

Existem imagens no `img/` que não são usadas em nenhuma parte do `index.html`
(`kihoto1.png`, `ticketway2.png`, `Chance.jpeg`, `cimpedol-equipa.png`, `cimpedol-servi#U00e7os.png`, `cimpedol-banner.jpeg`, `cimpedol.jpeg`).
Não interferem no SEO (não são carregadas), mas você pode removê-las para deixar o repositório mais limpo.
