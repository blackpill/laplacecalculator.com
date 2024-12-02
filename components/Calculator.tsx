'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { MathInput } from './MathInput'
import { cn } from '@/lib/utils'
import { MathToolbar } from './MathToolbar'
import nerdamer from 'nerdamer'
import 'nerdamer/all'
import Katex from '@/components/Katex';
import { useRouter } from 'next/navigation'

interface CalculatorProps {
  expr?: string;
  inverse?: boolean;
  both?: boolean;
}

export default function Calculator({ expr = "", inverse = false, both = false }: CalculatorProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const [input, setInput] = useState(expr)
  const [result, setResult] = useState<nerdamer.Expression>(nerdamer(''))
  const handleSymbolClick = (latex: string) => {
    setInput(prev => prev + latex)
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
  useEffect(() => {
    if (expr) {
      setInput(expr)
      handleCalculate()
    }
  }, [expr])



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



  const router = useRouter()

  const handleExampleClick = (latex: string, inverse = false) => {
    const encodedExpr = encodeURIComponent(latex)
    router.push(`${inverse ? '/inverse-laplace' : '/laplace'}/${encodedExpr}`)
  }

  const handleInverseTransform = () => {
    const encodedExpr = encodeURIComponent(input)
    router.push(`/inverse-laplace/${encodedExpr}`)
  }

  const examples = {
    laplace: [
      { 
        latex: "e^{t/2}", 
        display: "\\mathcal{L}\\{e^{t/2}\\}" 
      },
      { 
        latex: "e^{-2t}\\sin^2(t)", 
        display: "\\mathcal{L}\\{e^{-2t}\\sin^2(t)\\}" 
      },
      { 
        latex: "8\\pi", 
        display: "\\mathcal{L}\\{8\\pi\\}" 
      },
      { 
        latex: "\\sin(at)", 
        display: "\\mathcal{L}\\{\\sin(at)\\}" 
      },
      { 
        latex: "t^2", 
        display: "\\mathcal{L}\\{t^2\\}" 
      }
    ],
    inverse: [
      { 
        latex: "\\frac{1}{s^2 + 1}", 
        display: "\\mathcal{L}^{-1}\\{\\frac{1}{s^2 + 1}\\}" 
      },
      { 
        latex: "\\frac{s}{s^2 + 4}", 
        display: "\\mathcal{L}^{-1}\\{\\frac{s}{s^2 + 4}\\}" 
      },
      { 
        latex: "\\frac{1}{s(s+1)}", 
        display: "\\mathcal{L}^{-1}\\{\\frac{1}{s(s+1)}\\}" 
      },
      { 
        latex: "\\frac{1}{s^2}", 
        display: "\\mathcal{L}^{-1}\\{\\frac{1}{s^2}\\}" 
      },
      { 
        latex: "\\frac{s}{s^2 + a^2}", 
        display: "\\mathcal{L}^{-1}\\{\\frac{s}{s^2 + a^2}\\}" 
      }
    ]
  }
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
          {(!inverse || both) && (
            <Button onClick={handleCalculate} className="flex-1">
              Laplace Transform
            </Button>
          )}
          {(inverse || both) && (
            <Button onClick={handleInverseTransform} className="flex-1">
              Inverse Laplace Transform
            </Button>
          )}
        </div>
      </div>

      {result && (
        <div className="mt-4 p-4 bg-muted rounded-md">
          <Katex math={result.toTeX()}/>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Laplace Transform Examples */}
          <div className="space-y-2">
            <h4 className="font-medium">Laplace Transform</h4>
            {examples.laplace.map((example) => (
              <div
                key={example.latex}
                className="p-3 border rounded-lg hover:bg-muted cursor-pointer h-16 flex items-center justify-center"
                onClick={() => handleExampleClick(example.latex)}
              >
                <Katex math={example.display}/>
              </div>
            ))}
          </div>

          {/* Inverse Laplace Transform Examples */}
          <div className="space-y-2">
            <h4 className="font-medium">Inverse Laplace Transform</h4>
            {examples.inverse.map((example) => (
              <div
                key={example.latex}
                className="p-3 border rounded-lg hover:bg-muted cursor-pointer h-16 flex items-center justify-center"
                onClick={() => handleExampleClick(example.latex, true)}
              >
                <Katex math={example.display}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
