'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { MathInput } from './MathInput'
import { MathToolbar } from './MathToolbar'
import dynamic from 'next/dynamic'

export default function Calculator() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleSymbolClick = (latex: string) => {
    setInput(prev => prev + latex)
  }

  const StaticMathField = dynamic(
    () => import("react-mathquill").then((mod) => mod.StaticMathField),
    { ssr: false }
  );

  const handleCalculate = () => {
    // Here you would implement the actual Laplace transform calculation
    setResult(`\\mathcal{L}\\{${input}\\} = \\text{Result of the Laplace transform}`)
  }

  const examples = [
    { latex: "e^t", display: "\\mathcal{L}\\{e^t\\}" },
    { latex: "e^{-2t}\\sin^2(t)", display: "\\mathcal{L}\\{e^{-2t}\\sin^2(t)\\}" },
    { latex: "8\\pi", display: "\\mathcal{L}\\{8\\pi\\}" },
  ]

  return (
    <div className="space-y-6">
      <MathToolbar onSymbolClick={handleSymbolClick} />

      <div className="space-y-4">
        <MathInput
          value={input}
          onChange={setInput}
          className="text-lg"
        />
        <Button onClick={handleCalculate} className="w-full">
          Calculate
        </Button>
      </div>

      {result && (
        <div className="mt-4 p-4 bg-muted rounded-md">
          <StaticMathField>{result}</StaticMathField>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Laplace Transform - Examples</h3>
        <div className="space-y-2">
          {examples.map((example) => (
            <div
              key={example.latex}
              className="p-3 border rounded-lg hover:bg-muted cursor-pointer"
              onClick={() => setInput(example.latex)}
            >
              <StaticMathField>{example.display}</StaticMathField>
            </div>
          ))}
        </div>
        <Button variant="link" className="text-primary">
          Show More
        </Button>
      </div>
    </div>
  )
}
