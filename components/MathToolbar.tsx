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
    { latex: "x^2", label: "x²" },
    { latex: "x^{□}", label: "x□" },
    { latex: "\\log_{□}", label: "log□" },
    { latex: "\\frac{□}{□}", label: "□/□" },
    { latex: "\\leq", label: "≤" },
    { latex: "\\geq", label: "≥" },
    { latex: "\\int", label: "∫" },
    { latex: "\\int_{□}", label: "∫□" },
    { latex: "\\lim", label: "lim" },
    { latex: "\\sum", label: "∑" },
    { latex: "\\infty", label: "∞" },
    { latex: "\\theta", label: "θ" },
    { latex: "\\circ", label: "∘" },
    { latex: "\\pi", label: "π" },
  ]

  const categories = [
    "implicit derivative",
    "tangent",
    "volume",
    "laplace",
    "fourier"
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
      <div className="flex gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className="text-sm"
            onClick={() => onSymbolClick(category)}
          >
            {category}
          </Button>
        ))}
        <Select>
          <SelectTrigger className="w-24">
            <SelectValue placeholder="See All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="more">More symbols</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

