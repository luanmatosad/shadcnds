# Mapeamento Figma → Código

Figma Code Connect nativo exige plano Organization/Enterprise (confirmado via API: *"Code connections can only be made in libraries that are in Organization or Enterprise plans"*). Até upgrade, este arquivo é o vínculo manual entre o node do Figma (`UI Kit ImoviFlow - Shandnc`, fileKey `fomyYYvs8CSveLZs2x2oMS`) e o componente deste repo.

URL base: `https://www.figma.com/design/fomyYYvs8CSveLZs2x2oMS/UI-Kit-ImoviFlow---Shandnc?node-id={nodeId com "-" no lugar de ":"}`

| Categoria Figma | Componente Figma | node-id | Arquivo no repo |
|---|---|---|---|
| Actions | Button | 9294:7884 | `src/components/ui/button.tsx` |
| Actions | Button Group | 9381:1611 | `src/components/ui/button-group.tsx` |
| Actions | Toggle | 9336:34537 | `src/components/ui/toggle.tsx` |
| Actions | Toggle Group | 10053:34522 | `src/components/ui/toggle-group.tsx` |
| Actions | Collapsible | 9336:19292 | `src/components/ui/collapsible.tsx` |
| Actions | Toggle Theme | 9381:27034 | `src/components/ui/theme-toggle.tsx` (custom, não é stock shadcn) |
| Actions | Kbd | 9336:34282 | `src/components/ui/kbd.tsx` |
| Layout | Aspect Ratio | 9336:19506 | `src/components/ui/aspect-ratio.tsx` |
| Layout | Separator | 9334:3252 | `src/components/ui/separator.tsx` |
| Layout | Resizable | 9334:3287 | `src/components/ui/resizable.tsx` |
| Layout | Scroll-area | 9334:8046 | `src/components/ui/scroll-area.tsx` |
| Popper | Menu Item | 13487:34366 | parte de `dropdown-menu.tsx` / `context-menu.tsx` |
| Popper | Dropdown Menu | 9335:17703 | `src/components/ui/dropdown-menu.tsx` |
| Popper | Context Menu | 9335:17409 | `src/components/ui/context-menu.tsx` |
| Popper | Menubar | 9335:18337 | `src/components/ui/menubar.tsx` |
| Popper | Popover | 6880:4588 | `src/components/ui/popover.tsx` |
| Popper | Command | 9336:34330 | `src/components/ui/command.tsx` |
| Popper | Dialog | 9336:20959 | `src/components/ui/dialog.tsx` |
| Popper | Alert Dialog | 5984:59777 | `src/components/ui/alert-dialog.tsx` |
| Popper | Drawer | 9336:20904 | `src/components/ui/drawer.tsx` |
| Popper | Sheet | 9336:20487 | `src/components/ui/sheet.tsx` |
| Forms | Field | 9336:28266 | `src/components/ui/field.tsx` |
| Forms | Input | 9336:27511 | `src/components/ui/input.tsx` |
| Forms | Input Group | 9627:36753 | `src/components/ui/input-group.tsx` |
| Forms | Input OTP | 9336:27548 | `src/components/ui/input-otp.tsx` |
| Forms | Textarea | 9336:34250 | `src/components/ui/textarea.tsx` |
| Forms | Slider | 9336:34266 | `src/components/ui/slider.tsx` |
| Forms | File Upload | 9336:27613 | `src/components/ui/file-upload.tsx` (custom, não é stock shadcn) |
| Selection | Select | 9336:28454 | `src/components/ui/select.tsx` |
| Selection | Combobox | 9572:146188 | `src/components/ui/combobox.tsx` |
| Selection | Calendar | 9336:28552 | `src/components/ui/calendar.tsx` |
| Selection | Date Picker | 9336:31911 | `src/components/ui/date-picker.tsx` (custom, compõe Popover+Calendar) |
| Selection | Checkbox | 9336:27662 | `src/components/ui/checkbox.tsx` |
| Selection | Radio Group | 5889:14171 | `src/components/ui/radio-group.tsx` |
| Selection | Switch | 9336:34633 | `src/components/ui/switch.tsx` |
| Navigation | Sidebar | 5889:16120 | `src/components/ui/sidebar.tsx` |
| Navigation | Navigation Menu | 9334:7082 | `src/components/ui/navigation-menu.tsx` |
| Navigation | Tabs | 9334:8500 | `src/components/ui/tabs.tsx` |
| Navigation | TabBar | 13380:27612 | `src/components/ui/tab-bar.tsx` (custom, não é stock shadcn) |
| Navigation | Breadcrumb | 9334:7977 | `src/components/ui/breadcrumb.tsx` |
| Navigation | Pagination | 9334:8008 | `src/components/ui/pagination.tsx` |
| Data Display | Accordion | 9294:7446 | `src/components/ui/accordion.tsx` |
| Data Display | Card | 9336:19362 | `src/components/ui/card.tsx` |
| Data Display | Item | 9625:5216 | `src/components/ui/item.tsx` |
| Data Display | Empty | 9352:44480 | `src/components/ui/empty.tsx` |
| Data Display | Avatar | 9335:19217 | `src/components/ui/avatar.tsx` |
| Data Display | Badge | 9336:19259 | `src/components/ui/badge.tsx` |
| Data Display | Table | 9336:21046 | `src/components/ui/table.tsx` |
| Data Display | Data Table | 6909:17059 | `src/components/ui/data-table.tsx` (custom, compõe Table + @tanstack/react-table) |
| Data Display | Carousel | 9336:19518 | `src/components/ui/carousel.tsx` |
| Chart | Area Charts | 15781:447 | `src/components/ui/chart.tsx` + demo na home |
| Chart | Bar Charts | 15781:448 | `src/components/ui/chart.tsx` + demo na home |
| Chart | Line Charts | 15781:449 | `src/components/ui/chart.tsx` + demo na home |
| Chart | Pie Charts | 5496:11109 | `src/components/ui/chart.tsx` + demo na home |
| Chart | Radar Charts | 15781:450 | `src/components/ui/chart.tsx` + demo na home |
| Chart | Radial Charts | 15781:451 | `src/components/ui/chart.tsx` + demo na home |
| Feedback | Alert | 9352:44432 | `src/components/ui/alert.tsx` |
| Feedback | Spinner | 9358:1403 | `src/components/ui/spinner.tsx` |
| Feedback | Process | 9352:44546 | `src/components/ui/trace.tsx` (Trace/TraceLine = equivalente ao "Process" do Figma) |
| Feedback | Sonner | 9352:44371 | `src/components/ui/sonner.tsx` |
| Feedback | Tooltip | 9352:44301 | `src/components/ui/tooltip.tsx` |
| Feedback | Hover Card | 9352:44572 | `src/components/ui/hover-card.tsx` |
| Feedback | Skeleton | 9352:44289 | `src/components/ui/skeleton.tsx` |
| Message Kit | Attachment | 16655:822 | `src/components/ui/attachment.tsx` |
| Message Kit | Bubble | 16655:11206 | `src/components/ui/bubble.tsx` |
| Message Kit | Message | 16662:1038 | `src/components/ui/message.tsx` |
| Message Kit | Message Scroller | 16717:26619 | `src/components/ui/message-scroller.tsx` |
| Message Kit | Marker | 16717:40382 | `src/components/ui/marker.tsx` |
| Accessibility | Label | 9336:27499 | `src/components/ui/label.tsx` |

## Por que não usamos Code Connect nativo

`add_code_connect_map` retornou erro de plano ao tentar vincular `Button`:

```
Code connections can only be made in libraries that are in Organization or Enterprise plans.
```

Dev Mode (Pro) mostra a entrada de Code Connect na UI, mas a escrita da vinculação é bloqueada fora de Organization/Enterprise. Se o plano for upgradado, basta rodar o fluxo oficial (`npx figma connect publish` + `.figma.ts` templates) usando esta tabela como referência de node-ids — não precisa remapear do zero.

## Fundations não migradas (são documentação, não componentes)

Typography, Theming, Spacing, Responsive, Icon, Image, Utility — ficam resolvidas pelos tokens do Tailwind v4 + `globals.css` gerado pelo `shadcn init` (preset Nova), não geram arquivo de componente próprio.
