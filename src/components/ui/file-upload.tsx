"use client"

import * as React from "react"
import { UploadIcon, XIcon, FileIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function FileUpload({
  className,
  accept,
  multiple = true,
  onFilesChange,
  ...props
}: Omit<React.ComponentProps<"div">, "onChange"> & {
  accept?: string
  multiple?: boolean
  onFilesChange?: (files: File[]) => void
}) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [files, setFiles] = React.useState<File[]>([])
  const [isDragging, setIsDragging] = React.useState(false)

  const addFiles = React.useCallback(
    (incoming: FileList | null) => {
      if (!incoming) return
      const next = multiple ? [...files, ...Array.from(incoming)] : [incoming[0]]
      setFiles(next)
      onFilesChange?.(next)
    },
    [files, multiple, onFilesChange]
  )

  const removeFile = (index: number) => {
    const next = files.filter((_, i) => i !== index)
    setFiles(next)
    onFilesChange?.(next)
  }

  return (
    <div data-slot="file-upload" className={cn("flex flex-col gap-3", className)} {...props}>
      <div
        data-slot="file-upload-dropzone"
        data-dragging={isDragging}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setIsDragging(false)
          addFiles(e.dataTransfer.files)
        }}
        onClick={() => inputRef.current?.click()}
        className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed border-input p-8 text-center transition-colors hover:bg-accent/50 data-[dragging=true]:border-primary data-[dragging=true]:bg-accent/50"
      >
        <UploadIcon className="size-6 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Arraste arquivos aqui ou clique para selecionar
        </p>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>

      {files.length > 0 && (
        <ul data-slot="file-upload-list" className="flex flex-col gap-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center gap-2 rounded-md border border-input p-2 text-sm"
            >
              <FileIcon className="size-4 shrink-0 text-muted-foreground" />
              <span className="min-w-0 flex-1 truncate">{file.name}</span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-6"
                onClick={() => removeFile(index)}
              >
                <XIcon className="size-3.5" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { FileUpload }
