# shadcnds

Design system do ImoviFlow em código: componentes [shadcn/ui](https://ui.shadcn.com) espelhando o Figma **UI Kit ImoviFlow — Shandnc** ([link](https://www.figma.com/design/fomyYYvs8CSveLZs2x2oMS/UI-Kit-ImoviFlow---Shandnc)), pra reuso direto em outros projetos (ex: `inquilinoTop`).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind v4
- shadcn/ui — preset **Nova**, base **Radix UI**

## Estrutura

- `src/components/ui/` — todos os componentes (stock shadcn + customizados do DS)
- `src/app/page.tsx` — showcase/directory vivo, espelha a página "Directory" do Figma
- `docs/figma-mapping.md` — mapeamento node-id do Figma ↔ arquivo do componente (substitui Code Connect nativo, bloqueado no plano atual do Figma — ver detalhes no arquivo)

## Comandos

```bash
npm run dev     # dev server em http://localhost:3000
npm run build   # build de produção
npm run lint    # ESLint
```

## Adicionar/atualizar componentes stock

```bash
npx shadcn@latest add <componente>
npx shadcn@latest add --all -o   # reinstala tudo
```

## Reutilizar em outro projeto (ex: inquilinoTop)

Copie o arquivo de `src/components/ui/<componente>.tsx` (e suas deps, ex: `cn` de `src/lib/utils.ts`) ou configure este repo como [registry privado do shadcn](https://ui.shadcn.com/docs/registry) e rode `npx shadcn add @shadcnds/<componente>` direto no projeto consumidor.
