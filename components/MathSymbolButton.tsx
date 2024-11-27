import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Katex from '@/components/Katex';


interface MathSymbolButtonProps {
  latex: string
  label: string
  onClick: (latex: string) => void
  className?: string
}

export function MathSymbolButton({ latex, label, onClick, className }: MathSymbolButtonProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "h-10 px-3 font-serif hover:bg-muted",
        className
      )}
      onClick={() => onClick(latex)}
    >
      <Katex math={label}/>
    </Button>
  )
}

