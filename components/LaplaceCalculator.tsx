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

interface LaplaceCalculatorProps {
  expr?: string;
  inverse?: boolean;
  both?: boolean;
}

export function LaplaceCalculator({ expr = "", inverse = false, both = false }: LaplaceCalculatorProps) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

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
      const convertedInput = convertLatexForNerdamer(input)
      const result = inverse 
        ? nerdamer.convertFromLaTeX(`ilt(${convertedInput}, s, t)`).expand()
        : nerdamer.convertFromLaTeX(`laplace(${convertedInput}, t, s)`).expand()
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
    const trigFunctions = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot']
    let converted = latex

    trigFunctions.forEach(func => {
      const regex = new RegExp(`\\\\${func}\\^(\\{[^}]+\\}|\\d+)\\(([^)]+)\\)`, 'g')
      converted = converted.replace(regex, (_, exponent, argument) => {
        const cleanExponent = exponent.replace(/[{}]/g, '')
        return `\\${func}(${argument})^${cleanExponent}`
      })
    })

    return converted
  }

  const handleInverseTransform = () => {
    const encodedExpr = encodeURIComponent(input)
    router.push(`/inverse-laplace/${encodedExpr}`)
  }

  if (!mounted) {
    return (
      <div className={cn(
        "h-[50px] border rounded-md bg-background", ""
      )} />
    )
  }

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
    </div>
  )
}