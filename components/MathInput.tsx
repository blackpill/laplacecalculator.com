'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { MathField } from 'react-mathquill'

interface MathInputProps {
  value: string
  onChange: (latex: string) => void
  className?: string
}

const EditableMathField = dynamic(
  () => import("react-mathquill").then((mod) => mod.EditableMathField),
  { ssr: false }
);

export function MathInput({ value, onChange, className }: MathInputProps) {
  const [mounted, setMounted] = useState(false)
  const mathFieldRef = useRef<MathField | null>(null)

  useEffect(() => {
    import("react-mathquill").then((mq) => {
      mq.addStyles();
    });
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn(
        "h-[50px] border rounded-md bg-background",
        className
      )} />
    )
  }

  return (
    <EditableMathField
      latex={value}
      onChange={(mathField) => {
        onChange(mathField.latex())
      }}
      mathquillDidMount={(mathField: MathField) => {
        mathFieldRef.current = mathField
      }}
      className={cn(
        "w-full border rounded-md bg-background p-2 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        className
      )}
    />
  )
}

