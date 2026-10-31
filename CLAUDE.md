# CLAUDE.md

Guia pra Claude Code neste repo.

## O que é

`shadcnds` = design system em código do Figma **UI Kit ImoviFlow — Shandnc** ([link](https://www.figma.com/design/fomyYYvs8CSveLZs2x2oMS/UI-Kit-ImoviFlow---Shandnc)). Fonte única de verdade de UI pros projetos ImoviFlow (ex: `inquilinoTop`). Next.js 16 + Tailwind v4 + shadcn/ui, preset **Nova** / base **Radix UI**.

Code Connect nativo do Figma está bloqueado (plano não é Organization/Enterprise — confirmado via API). `docs/figma-mapping.md` é o mapeamento manual node-id ↔ componente até upgrade.

## Regra de ouro

Toda tela do Figma que usar um componente deste kit **copia o arquivo fiel** pro projeto consumidor — nunca reescreve do zero lá. Esse repo é o único lugar onde componente de UI nasce ou é customizado.

## Fluxo: Figma tem componente novo / mudou

1. Checar `docs/figma-mapping.md` — já mapeado?
2. É item stock do shadcn/ui (Button, Card, Select, etc)? `npx shadcn@latest add <nome>` (ou `--all -o` pra resincronizar tudo).
3. Não é stock (ex: TabBar, Process, FileUpload, DatePicker, ThemeToggle, DataTable)? Construir à mão em `src/components/ui/<nome>.tsx`, seguindo convenção dos arquivos stock:
   - `"use client"` só quando usa hook/evento.
   - `data-slot="<nome>"` no elemento raiz (e em cada subparte), igual os componentes shadcn geram.
   - `cn` importado de `"cn"` (pacote, não `@/lib/utils` — `src/lib/utils.ts` só reexporta).
   - Props tipadas via `React.ComponentProps<"tag">` ou `React.ComponentProps<typeof OutroComponente>`.
4. Atualizar `docs/figma-mapping.md` (node-id, categoria, arquivo).
5. Adicionar/atualizar demo correspondente em `src/app/page.tsx`, na seção certa (Actions, Layout, Popper, Forms, Selection, Navigation, Data Display, Chart, Feedback) — a home é o showcase vivo, todo componente tem que aparecer lá.
6. `npm run build` tem que passar limpo antes de comitar.

## Nunca fazer

- Editar a estrutura/classes de um componente **stock** (gerado pelo CLI) só pra "ajustar visual" — isso quebra `shadcn add --overwrite` no futuro. Se o Figma difere visualmente do stock, documentar a diferença em `docs/figma-mapping.md` em vez de reescrever o arquivo vendor.
- Inventar prop/variant que não existe no componente Figma correspondente.
- Comitar sem rodar `npm run build`.
- Pushar sem o usuário confirmar (sempre pedir antes de `git push`).

## Comandos

```bash
npm run dev     # dev server http://localhost:3000
npm run build   # build de produção (obrigatório antes de commit)
npm run lint    # ESLint — erros em arquivos stock (carousel.tsx, use-mobile.ts) são conhecidos e não bloqueiam, não tenta "corrigir" código vendor
npx shadcn@latest add <componente>
npx shadcn@latest add --all -o   # reinstala/resincroniza tudo
```

## Lint conhecido (não corrigir)

`carousel.tsx`, `hooks/use-mobile.ts` e `data-table.tsx` disparam regras do React Compiler ESLint plugin (`set-state-in-effect`, `incompatible-library`) — são padrões do próprio embla-carousel / tanstack-table, não bug nosso. Deixar como está.
