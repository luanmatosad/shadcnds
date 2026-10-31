"use client"

import * as React from "react"
import Link from "next/link"
import { toast } from "sonner"
import {
  CalendarIcon,
  CheckIcon,
  ChevronsUpDownIcon,
  CircleCheckIcon,
  CreditCardIcon,
  HomeIcon,
  InboxIcon,
  InfoIcon,
  SearchIcon,
  SettingsIcon,
  TrendingUpIcon,
  UserIcon,
} from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  type ColumnDef,
} from "@tanstack/react-table"
import {
  ChartAreaDemo,
  ChartLineDemo,
  ChartPieDemo,
  ChartRadarDemo,
  ChartRadialDemo,
} from "@/components/charts/extra-chart-demos"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { FileUpload } from "@/components/ui/file-upload"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { DatePicker } from "@/components/ui/date-picker"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabBar, TabBarItem } from "@/components/ui/tab-bar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataTable } from "@/components/ui/data-table"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Spinner } from "@/components/ui/spinner"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Skeleton } from "@/components/ui/skeleton"

const buttonVariantList = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const
const buttonSizeList = ["sm", "default", "lg", "icon"] as const

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-8 py-10">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  )
}

function Demo({
  name,
  children,
  className,
}: {
  name: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium text-muted-foreground">{name}</h3>
      <div
        className={cn(
          "flex flex-wrap items-center gap-3 rounded-lg border bg-card p-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

const comboboxFrameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? comboboxFrameworks.find((f) => f.value === value)?.label
            : "Selecione um framework..."}
          <ChevronsUpDownIcon className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>Nenhum framework encontrado.</CommandEmpty>
            <CommandGroup>
              {comboboxFrameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

const chartData = [
  { month: "Jan", desktop: 186 },
  { month: "Fev", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Abr", desktop: 73 },
  { month: "Mai", desktop: 209 },
  { month: "Jun", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

function ChartBarDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>Jan - Jun 2026</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Subindo 5.2% este mês <TrendingUpIcon className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}

type Invoice = {
  id: string
  status: "pago" | "pendente" | "atrasado"
  amount: string
  tenant: string
}

const invoiceData: Invoice[] = [
  { id: "INV-001", status: "pago", amount: "R$ 1.200", tenant: "Ana Souza" },
  { id: "INV-002", status: "pendente", amount: "R$ 950", tenant: "Bruno Lima" },
  { id: "INV-003", status: "atrasado", amount: "R$ 1.500", tenant: "Carla Dias" },
  { id: "INV-004", status: "pago", amount: "R$ 800", tenant: "Diego Alves" },
  { id: "INV-005", status: "pendente", amount: "R$ 1.100", tenant: "Elisa Rocha" },
]

const invoiceColumns: ColumnDef<Invoice>[] = [
  { accessorKey: "id", header: "Fatura" },
  { accessorKey: "tenant", header: "Inquilino" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.status === "pago"
            ? "default"
            : row.original.status === "pendente"
              ? "secondary"
              : "destructive"
        }
      >
        {row.original.status}
      </Badge>
    ),
  },
  { accessorKey: "amount", header: "Valor" },
]

export default function Home() {
  const [sliderValue, setSliderValue] = React.useState([40])
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-2 px-6 py-10">
      <header className="flex flex-col gap-2 border-b pb-8">
        <p className="text-sm text-muted-foreground">UI Kit ImoviFlow</p>
        <h1 className="text-3xl font-bold tracking-tight">
          Showcase de componentes shadcn/ui
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Réplica em código dos componentes do Design System do Figma, pronta
          para ser reutilizada em outros projetos (ex: inquilinoTop).
        </p>
      </header>

      <Section title="Actions">
        <Demo name="Button — variants × sizes">
          <div className="flex flex-col gap-3">
            {buttonSizeList.map((size) => (
              <div key={size} className="flex flex-wrap items-center gap-2">
                {buttonVariantList.map((variant) =>
                  size === "icon" ? (
                    <Button key={variant} variant={variant} size={size}>
                      <SettingsIcon />
                    </Button>
                  ) : (
                    <Button key={variant} variant={variant} size={size}>
                      {variant}
                    </Button>
                  )
                )}
              </div>
            ))}
          </div>
        </Demo>

        <Demo name="Button Group">
          <ButtonGroup>
            <Button variant="outline">Esquerda</Button>
            <Button variant="outline">Meio</Button>
            <Button variant="outline">Direita</Button>
          </ButtonGroup>
        </Demo>

        <Demo name="Toggle & Toggle Group">
          <Toggle aria-label="Toggle">
            <CircleCheckIcon />
          </Toggle>
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left">Esquerda</ToggleGroupItem>
            <ToggleGroupItem value="center">Centro</ToggleGroupItem>
            <ToggleGroupItem value="right">Direita</ToggleGroupItem>
          </ToggleGroup>
        </Demo>

        <Demo name="Collapsible">
          <Collapsible className="w-full max-w-sm">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Detalhes do contrato
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 text-sm text-muted-foreground">
              Contrato de locação residencial, vigência de 12 meses.
            </CollapsibleContent>
          </Collapsible>
        </Demo>

        <Demo name="Theme Toggle (custom)">
          <ThemeToggle />
        </Demo>

        <Demo name="Kbd">
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </Demo>
      </Section>

      <Section title="Layout">
        <Demo name="Aspect Ratio">
          <AspectRatio
            ratio={16 / 9}
            className="w-full max-w-sm overflow-hidden rounded-md bg-muted"
          >
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              16:9
            </div>
          </AspectRatio>
        </Demo>

        <Demo name="Separator">
          <div className="w-full max-w-sm">
            <p className="text-sm">Acima</p>
            <Separator className="my-3" />
            <p className="text-sm">Abaixo</p>
          </div>
        </Demo>

        <Demo name="Resizable">
          <ResizablePanelGroup
            orientation="horizontal"
            className="max-w-md rounded-lg border md:min-w-[450px]"
          >
            <ResizablePanel defaultSize="50%">
              <div className="flex h-[140px] items-center justify-center p-6">
                <span className="text-sm font-semibold">Um</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="50%">
              <div className="flex h-[140px] items-center justify-center p-6">
                <span className="text-sm font-semibold">Dois</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Demo>

        <Demo name="Scroll Area">
          <ScrollArea className="h-32 w-full max-w-sm rounded-md border p-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <p key={i} className="text-sm">
                Item {i + 1}
              </p>
            ))}
          </ScrollArea>
        </Demo>
      </Section>

      <Section title="Popper">
        <Demo name="Dropdown Menu">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Abrir menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Demo>

        <Demo name="Context Menu">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
              Clique com o botão direito aqui
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Editar</ContextMenuItem>
              <ContextMenuItem>Duplicar</ContextMenuItem>
              <ContextMenuItem>Remover</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Demo>

        <Demo name="Menubar">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Arquivo</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Novo</MenubarItem>
                <MenubarItem>Abrir</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Editar</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Desfazer</MenubarItem>
                <MenubarItem>Refazer</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Demo>

        <Demo name="Popover">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Abrir popover</Button>
            </PopoverTrigger>
            <PopoverContent className="text-sm">
              Conteúdo flutuante de exemplo.
            </PopoverContent>
          </Popover>
        </Demo>

        <Demo name="Command">
          <Command className="max-w-md rounded-lg border shadow-md">
            <CommandInput placeholder="Digite um comando ou busque..." />
            <CommandList>
              <CommandEmpty>Nenhum resultado.</CommandEmpty>
              <CommandGroup heading="Sugestões">
                <CommandItem>
                  <CalendarIcon />
                  <span>Calendário</span>
                </CommandItem>
                <CommandItem>
                  <SearchIcon />
                  <span>Buscar</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Configurações">
                <CommandItem>
                  <UserIcon />
                  <span>Perfil</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon />
                  <span>Cobrança</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </Demo>

        <Demo name="Combobox">
          <ComboboxDemo />
        </Demo>

        <Demo name="Dialog">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Abrir dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editar imóvel</DialogTitle>
                <DialogDescription>
                  Atualize as informações do imóvel.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Demo>

        <Demo name="Alert Dialog">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Excluir contrato</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Essa ação não pode ser desfeita.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Excluir</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Demo>

        <Demo name="Drawer">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Abrir drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Filtros</DrawerTitle>
                <DrawerDescription>Ajuste os filtros da busca.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Fechar</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Demo>

        <Demo name="Sheet">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Abrir sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Novo inquilino</SheetTitle>
                <SheetDescription>Preencha os dados do inquilino.</SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Cancelar</Button>
                </SheetClose>
                <Button>Salvar</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </Demo>
      </Section>

      <Section title="Forms">
        <Demo name="Field">
          <FieldGroup className="w-full max-w-sm">
            <Field>
              <FieldLabel htmlFor="field-email">E-mail</FieldLabel>
              <FieldContent>
                <Input id="field-email" type="email" placeholder="voce@exemplo.com" />
                <FieldDescription>Usamos para contato sobre o contrato.</FieldDescription>
              </FieldContent>
            </Field>
          </FieldGroup>
        </Demo>

        <Demo name="Input">
          <Input placeholder="Nome do imóvel" className="max-w-sm" />
        </Demo>

        <Demo name="Input Group">
          <InputGroup className="max-w-sm">
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput placeholder="Buscar imóveis..." />
          </InputGroup>
        </Demo>

        <Demo name="Input OTP">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Demo>

        <Demo name="Textarea">
          <Textarea placeholder="Observações sobre a vistoria" className="max-w-sm" />
        </Demo>

        <Demo name="Slider">
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            max={100}
            step={1}
            className="max-w-sm"
          />
        </Demo>

        <Demo name="File Upload (custom)">
          <FileUpload className="w-full max-w-sm" />
        </Demo>
      </Section>

      <Section title="Selection">
        <Demo name="Select">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Tipo de imóvel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residencial</SelectItem>
              <SelectItem value="single">Casa única</SelectItem>
            </SelectContent>
          </Select>
        </Demo>

        <Demo name="Calendar">
          <Calendar mode="single" selected={date} onSelect={setDate} className="w-fit" />
        </Demo>

        <Demo name="Date Picker (custom)">
          <DatePicker value={date} onChange={setDate} />
        </Demo>

        <Demo name="Checkbox">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm">
              Aceito os termos
            </label>
          </div>
        </Demo>

        <Demo name="Radio Group">
          <RadioGroup defaultValue="monthly" className="flex gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="monthly" id="monthly" />
              <label htmlFor="monthly" className="text-sm">Mensal</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="yearly" id="yearly" />
              <label htmlFor="yearly" className="text-sm">Anual</label>
            </div>
          </RadioGroup>
        </Demo>

        <Demo name="Switch">
          <div className="flex items-center gap-2">
            <Switch id="notifications" />
            <label htmlFor="notifications" className="text-sm">Notificações</label>
          </div>
        </Demo>
      </Section>

      <Section title="Navigation">
        <Demo name="Sidebar" className="p-0">
          <div className="relative h-[320px] w-full overflow-hidden rounded-lg border">
            <SidebarProvider
              style={{ "--sidebar-width": "14rem" } as React.CSSProperties}
            >
              <Sidebar collapsible="none" className="h-[320px]">
                <SidebarHeader>
                  <span className="px-2 text-sm font-semibold">ImoviFlow</span>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton isActive>
                            <HomeIcon />
                            <span>Início</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <InboxIcon />
                            <span>Mensagens</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <SettingsIcon />
                            <span>Configurações</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
            </SidebarProvider>
          </div>
        </Demo>

        <Demo name="Tabs">
          <Tabs defaultValue="account" className="w-full max-w-sm">
            <TabsList>
              <TabsTrigger value="account">Conta</TabsTrigger>
              <TabsTrigger value="password">Senha</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="pt-4 text-sm">
              Gerencie as informações da sua conta.
            </TabsContent>
            <TabsContent value="password" className="pt-4 text-sm">
              Altere sua senha aqui.
            </TabsContent>
          </Tabs>
        </Demo>

        <Demo name="Tab Bar (custom)" className="p-0">
          <TabBar className="max-w-sm rounded-lg">
            <TabBarItem icon={<HomeIcon />} label="Início" active />
            <TabBarItem icon={<SearchIcon />} label="Buscar" />
            <TabBarItem icon={<InboxIcon />} label="Mensagens" />
            <TabBarItem icon={<UserIcon />} label="Perfil" />
          </TabBar>
        </Demo>

        <Demo name="Breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Imóveis</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Unidade 01</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contrato</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Demo>

        <Demo name="Pagination">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Demo>
      </Section>

      <Section title="Data Display">
        <Demo name="Accordion">
          <Accordion type="single" collapsible className="w-full max-w-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger>O que é o ImoviFlow?</AccordionTrigger>
              <AccordionContent>
                Plataforma de gestão de imóveis para locação.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Demo>

        <Demo name="Card">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Apartamento 302</CardTitle>
              <CardDescription>Residencial — 2 quartos</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Contrato ativo até 12/2026.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Ver detalhes</Button>
            </CardFooter>
          </Card>
        </Demo>

        <Demo name="Item">
          <Item variant="outline" className="w-full max-w-sm">
            <ItemMedia>
              <Avatar>
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Ana Souza</ItemTitle>
              <ItemDescription>Inquilina — Unidade 01</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="icon-sm" variant="ghost">
                <SettingsIcon />
              </Button>
            </ItemActions>
          </Item>
        </Demo>

        <Demo name="Empty">
          <Empty className="w-full max-w-sm">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <InboxIcon />
              </EmptyMedia>
              <EmptyTitle>Nenhum imóvel cadastrado</EmptyTitle>
              <EmptyDescription>
                Cadastre seu primeiro imóvel para começar.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm">Cadastrar imóvel</Button>
            </EmptyContent>
          </Empty>
        </Demo>

        <Demo name="Avatar">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
        </Demo>

        <Demo name="Badge">
          <Badge>Padrão</Badge>
          <Badge variant="secondary">Secundário</Badge>
          <Badge variant="destructive">Atrasado</Badge>
          <Badge variant="outline">Outline</Badge>
        </Demo>

        <Demo name="Table">
          <Table>
            <TableCaption>Pagamentos recentes.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Fatura</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoiceData.slice(0, 3).map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Demo>

        <Demo name="Data Table (custom)" className="block">
          <DataTable columns={invoiceColumns} data={invoiceData} />
        </Demo>

        <Demo name="Carousel">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Demo>
      </Section>

      <Section title="Chart">
        <Demo name="Bar Chart">
          <ChartBarDemo />
        </Demo>
        <Demo name="Area Chart">
          <ChartAreaDemo />
        </Demo>
        <Demo name="Line Chart">
          <ChartLineDemo />
        </Demo>
        <Demo name="Pie Chart">
          <ChartPieDemo />
        </Demo>
        <Demo name="Radar Chart">
          <ChartRadarDemo />
        </Demo>
        <Demo name="Radial Chart">
          <ChartRadialDemo />
        </Demo>
      </Section>

      <Section title="Feedback">
        <Demo name="Alert">
          <Alert className="max-w-sm">
            <InfoIcon />
            <AlertTitle>Atenção</AlertTitle>
            <AlertDescription>O contrato vence em 7 dias.</AlertDescription>
          </Alert>
        </Demo>

        <Demo name="Spinner">
          <Spinner className="size-6" />
        </Demo>

        <Demo name="Process (Trace)">
          <Trace className="max-w-sm">
            <TraceCollapsible>
              <TraceCollapsibleTrigger>
                <TraceLine status="running">
                  <TraceIcon>
                    <Spinner />
                  </TraceIcon>
                  <TraceTitle>Processando pagamento</TraceTitle>
                </TraceLine>
              </TraceCollapsibleTrigger>
              <TraceCollapsibleContent>
                Validando dados bancários do inquilino...
              </TraceCollapsibleContent>
            </TraceCollapsible>
            <TraceLine status="pending">
              <TraceIcon>
                <CircleCheckIcon />
              </TraceIcon>
              <TraceTitle>Enviar recibo</TraceTitle>
            </TraceLine>
          </Trace>
        </Demo>

        <Demo name="Sonner">
          <Button
            variant="outline"
            onClick={() =>
              toast.success("Pagamento registrado com sucesso.")
            }
          >
            Disparar toast
          </Button>
        </Demo>

        <Demo name="Tooltip">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Passe o mouse</Button>
            </TooltipTrigger>
            <TooltipContent>Dica contextual</TooltipContent>
          </Tooltip>
        </Demo>

        <Demo name="Hover Card">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link href="#" className="text-sm underline">
                @luanmatosad
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm">
              Mantém o design system ImoviFlow.
            </HoverCardContent>
          </HoverCard>
        </Demo>

        <Demo name="Skeleton">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
        </Demo>
      </Section>
    </div>
  )
}
