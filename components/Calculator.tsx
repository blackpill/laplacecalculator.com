'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { MathInput } from './MathInput'
import { MathToolbar } from './MathToolbar'
import dynamic from 'next/dynamic'
import nerdamer from 'nerdamer'
import 'nerdamer/all'

export default function Calculator() {
  useEffect(() => {
    import("react-mathquill").then((mq) => {
      mq.addStyles();
    });
  }, [])
  const [input, setInput] = useState('')
  const [result, setResult] = useState<nerdamer.Expression>(nerdamer(''))

  const handleSymbolClick = (latex: string) => {
    setInput(prev => prev + latex)
  }

  const StaticMathField = dynamic(
    () => import("react-mathquill").then((mod) => mod.StaticMathField),
    { ssr: false }
  );

  const handleCalculate = () => {
    try {
      console.log("handleCalculate: input = ", input)
      const result = nerdamer(`laplace(${input}, x, s)`).evaluate()
      // const result = nerdamer.convertFromLaTeX(input).text()
      console.log("handleCalculate: result = ", result.toTeX())
      setResult(result)
    } catch (error) {
      console.error('Error: Invalid expression', error)
    }
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
          <StaticMathField>{result.toTeX()}</StaticMathField>
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
