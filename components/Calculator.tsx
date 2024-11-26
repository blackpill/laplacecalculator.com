'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { MathInput } from './MathInput'
import { cn } from '@/lib/utils'
import { MathToolbar } from './MathToolbar'
import dynamic from 'next/dynamic'
import nerdamer from 'nerdamer'
import 'nerdamer/all'
import Katex from '@/components/Katex';


export default function Calculator() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    import("react-mathquill").then((mq) => {
      mq.addStyles();
    });
  }, [])
  useEffect(() => {
    setMounted(true)
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

  const convertLatexForNerdamer = (latex: string): string => {
    // Handle trigonometric functions with exponents
    const trigFunctions = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot']
    let converted = latex

    trigFunctions.forEach(func => {
      // Match pattern like \sin^{2}(t) or \sin^2(t)
      const regex = new RegExp(`\\\\${func}\\^(\\{[^}]+\\}|\\d+)\\(([^)]+)\\)`, 'g')
      converted = converted.replace(regex, (_, exponent, argument) => {
        // Remove curly braces if present
        const cleanExponent = exponent.replace(/[{}]/g, '')
        return `\\${func}(${argument})^${cleanExponent}`
      })
    })

    return converted
  }

  const handleCalculate = () => {
    try {
      console.log("handleCalculate: input = ", input)
      const convertedInput = convertLatexForNerdamer(input)
      console.log("handleCalculate: converted input = ", convertedInput)
      const result = nerdamer.convertFromLaTeX(`laplace(${convertedInput}, t, s)`).expand()
      console.log("handleCalculate: result = ", result.toTeX())
      setResult(result)
    } catch (error) {
      console.error('Error: Invalid expression', error)
    }
  }

  const examples = [
    { latex: "e^{t/2}", display: "\\mathcal{L}\\{e^{t/2}\\}" },
    { latex: "e^{-2t}\sin^2(t)", display: "\\mathcal{L}\\{e^{-2t}\\sin^2(t)\\}" },
    { latex: "8\\pi", display: "\\mathcal\{L\}\\{8\\pi\\}" },
  ]
  if (!mounted) {
    return (
      <div className={cn(
        "h-[50px] border rounded-md bg-background", ""
      )} />
    )
  }
  console.log("result.toTeX() = ", result.toTeX())

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
              <Katex math={example.display}/>
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
