import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatMathExpression(expression: string): string {
  // Here you would implement the formatting of mathematical expressions
  return expression
}

