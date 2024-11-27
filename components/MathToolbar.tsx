import { MathSymbolButton } from "./MathSymbolButton"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button"

interface MathToolbarProps {
  onSymbolClick: (latex: string) => void
}

export function MathToolbar({ onSymbolClick }: MathToolbarProps) {
  const symbols = [
    { latex: "^2", label: "t^2" },
    { latex: "^{}", label: "t^□" },
    { latex: "\\sqrt{}", label: "\\sqrt{□}" },
    { latex: "\\frac{}{}", label: "\\frac{□}{□}" },
    { latex: "\\sin{()}", label: "\\sin{()}" },
    { latex: "\\cos{()}", label: "\\cos{()}" },
    { latex: "\\sinh{()}", label: "\\sinh{()}" },
    { latex: "\\int_{}", label: "∫□" },
    { latex: "\\lim", label: "lim" },
    { latex: "\\sum", label: "∑" },
    { latex: "\\infty", label: "∞" },
    { latex: "\\theta", label: "θ" },
    { latex: "\\circ", label: "∘" },
    { latex: "\\pi", label: "π" },
  ]
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-7 gap-2">
        {symbols.map((s) => (
          <MathSymbolButton
            key={s.latex}
            latex={s.latex}
            label={s.label}
            onClick={onSymbolClick}
          />
        ))}
      </div>
    </div>
  )
}

