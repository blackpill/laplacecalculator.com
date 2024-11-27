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
import { useRouter } from 'next/navigation'

interface CalculatorProps {
  expr?: string;
  inverse?: boolean;
}

export default function Calculator({ expr = "", inverse = false }: CalculatorProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    import("react-mathquill").then((mq) => {
      mq.addStyles();
    });
  }, [])
  useEffect(() => {
    setMounted(true)
  }, [])

  const [input, setInput] = useState(expr)
  const [result, setResult] = useState<nerdamer.Expression>(nerdamer(''))

  useEffect(() => {
    if (expr) {
      setInput(expr)
      handleCalculate()
    }
  }, [expr])

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
      const result = inverse 
        ? nerdamer.convertFromLaTeX(`ilt(${convertedInput}, s, t)`).expand()
        : nerdamer.convertFromLaTeX(`laplace(${convertedInput}, t, s)`).expand()
      console.log("handleCalculate: result = ", result.toTeX())
      setResult(result)
    } catch (error) {
      console.error('Error: Invalid expression', error)
    }
  }

  const router = useRouter()

  const handleExampleClick = (latex: string) => {
    const encodedExpr = encodeURIComponent(latex)
    router.push(`${inverse ? '/inverse-laplace' : '/laplace'}/${encodedExpr}`)
  }

  const handleInverseTransform = () => {
    const encodedExpr = encodeURIComponent(input)
    router.push(`/inverse-laplace/${encodedExpr}`)
  }

  const examples = [
    { 
      latex: inverse ? "\\frac{1}{s^2 + 1}" : "e^{t/2}", 
      display: inverse ? "\\mathcal{L}^{-1}\\{\\frac{1}{s^2 + 1}\\}" : "\\mathcal{L}\\{e^{t/2}\\}" 
    },
    { 
      latex: inverse ? "\\frac{s}{s^2 + 4}" : "e^{-2t}\\sin^2(t)", 
      display: inverse ? "\\mathcal{L}^{-1}\\{\\frac{s}{s^2 + 4}\\}" : "\\mathcal{L}\\{e^{-2t}\\sin^2(t)\\}" 
    },
    { 
      latex: inverse ? "\\frac{1}{s(s+1)}" : "8\\pi", 
      display: inverse ? "\\mathcal{L}^{-1}\\{\\frac{1}{s(s+1)}\\}" : "\\mathcal{L}\\{8\\pi\\}" 
    },
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
        <div className="flex gap-2">
          <Button onClick={handleCalculate} className="flex-1">
            {inverse ? 'Inverse Transform' : 'Laplace Transform'}
          </Button>
          {!inverse && (
            <Button onClick={handleInverseTransform} variant="outline" className="flex-1">
              Inverse Transform
            </Button>
          )}
        </div>
      </div>

      {result && (
        <div className="mt-4 p-4 bg-muted rounded-md">
          <StaticMathField>{result.toTeX()}</StaticMathField>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{inverse ? 'Inverse Laplace Transform' : 'Laplace Transform'} - Examples</h3>
        <div className="space-y-2">
          {examples.map((example) => (
            <div
              key={example.latex}
              className="p-3 border rounded-lg hover:bg-muted cursor-pointer"
              onClick={() => handleExampleClick(example.latex)}
            >
              <Katex math={example.display}/>
            </div>
          ))}
        </div>
        {/* <Button variant="link" className="text-primary">
          Show More
        </Button> */}
      </div>
    </div>
  )
}
