import { LaplaceCalculator } from './LaplaceCalculator'
import { Examples } from './Examples'

interface CalculatorProps {
  expr?: string;
  inverse?: boolean;
  both?: boolean;
}

export default function Calculator(props: CalculatorProps) {
  return (
    <div className="space-y-6">
      <LaplaceCalculator {...props} />
      <Examples />
    </div>
  )
}