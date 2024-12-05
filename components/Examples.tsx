import Link from 'next/link'
import Katex from '@/components/Katex'

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

export function Examples() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Examples</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Laplace Transform Examples */}
        <div className="space-y-2">
          <h4 className="font-medium">Laplace Transform</h4>
          {examples.laplace.map((example) => (
            <Link
              key={example.latex}
              href={`/laplace/${encodeURIComponent(example.latex)}`}
              className="p-3 border rounded-lg hover:bg-muted cursor-pointer h-16 flex items-center justify-center"
            >
              <Katex math={example.display}/>
            </Link>
          ))}
        </div>

        {/* Inverse Laplace Transform Examples */}
        <div className="space-y-2">
          <h4 className="font-medium">Inverse Laplace Transform</h4>
          {examples.inverse.map((example) => (
            <Link
              key={example.latex}
              href={`/inverse-laplace/${encodeURIComponent(example.latex)}`}
              className="p-3 border rounded-lg hover:bg-muted cursor-pointer h-16 flex items-center justify-center"
            >
              <Katex math={example.display}/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}