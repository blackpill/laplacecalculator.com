import { Metadata } from "next";
import { BASE_URL } from '@/app/config';
import Katex from '@/components/Katex';
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Laplace Transform Calculator FAQ | Common Questions Answered',
    description: 'Find answers to the most common questions about Laplace Transform. Learn what it is, how to calculate it, and its applications in engineering and physics.',
    alternates: {
      canonical: `${BASE_URL}/faq`,
    },
  };
}

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-primary">Frequently Asked Questions</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What is the Laplace Transform?</h2>
          <p className="text-foreground">
            The Laplace Transform is a mathematical technique used to convert a time-domain function f(t) into a frequency-domain function F(s). 
            It is commonly used in engineering and physics to simplify the analysis of linear systems.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why is the Laplace Transform used?</h2>
          <p className="text-foreground">
            The Laplace Transform is used to solve differential equations, analyze electrical circuits, control systems, and mechanical vibrations. 
            It simplifies complex problems by transforming them into algebraic equations that are easier to solve.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why is it called Laplace?</h2>
          <p className="text-foreground">
            The Laplace Transform is named after Pierre-Simon Laplace (1749–1827), a French mathematician, physicist, and astronomer. He made significant contributions to many areas of science, including probability theory, astronomy, and mathematical physics. The transformation that bears his name arose from his work in solving linear differential equations, especially in the context of celestial mechanics.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How do you calculate the Laplace Transform?</h2>
          <p className="text-foreground">
            To calculate the Laplace Transform of a function f(t), use the formula:
          </p>
          <p className="text-foreground my-4 font-mono">
            <Katex math="F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty f(t) e^{-st} dt" />
          </p>
          <p className="text-foreground">
            Here, s is a complex variable. Tools like calculators or software such as MATLAB, SymPy, or our Laplace Transform Calculator can automate the process.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What are common Laplace Transform formulas?</h2>
          <div className="space-y-2 text-foreground font-mono">
            <Katex math="\mathcal{L}\{1\} = \frac{1}{s}" />
            <Katex math="\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}" />
            <Katex math="\mathcal{L}\{e^{at}\} = \frac{1}{s-a}\text{, for } s > a" />
            <Katex math="\mathcal{L}\{sin(at)\} = \frac{a}{s^2 + a^2}" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What is the inverse Laplace Transform?</h2>
          <p className="text-foreground">
            The inverse Laplace Transform is the process of converting a frequency-domain function F(s) back to its time-domain form f(t). It is denoted as:
          </p>
          <p className="text-foreground my-4 font-mono">
            <Katex math="f(t) = \mathcal{L}^{-1}\{F(s)\}" />
          </p>
          <p className="text-foreground">
            This is typically done using tables of Laplace pairs or numerical methods.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How is the Laplace Transform used in differential equations?</h2>
          <p className="text-foreground">
            The Laplace Transform converts a differential equation into an algebraic equation by transforming the derivatives. 
            Once the algebraic equation is solved for F(s), the inverse Laplace Transform is used to find the solution f(t).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What are the applications of Laplace Transform?</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Electrical Engineering: Circuit analysis and transfer functions</li>
            <li>Mechanical Engineering: Analyzing vibrations and control systems</li>
            <li>Signal Processing: Filtering and stability analysis</li>
            <li>Control Systems: System behavior prediction and design</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How does the Laplace Transform differ from the Fourier Transform?</h2>
          <p className="text-foreground">
            The Laplace Transform generalizes the Fourier Transform by using a complex variable s = σ + jω. 
            Unlike the Fourier Transform, the Laplace Transform is particularly useful for analyzing transient (non-repeating) signals and systems.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What is the requisition for laplace transform to converge?</h2>
          <h3>1. Exponential Growth Constraint</h3>
          <p className="text-foreground">
            The function 𝑓(𝑡) should not grow faster than an exponential function.
            Specifically, there must exist constants 𝑀 &gt; 0, 𝛼, and 𝑇 ≥ 0 such that: 
            <Katex math="\left|f(t)\right| \leq Me^{\alpha t} \text{, for all } t>0." />
            This ensures that the term <Katex math="f(t)e^{st}" inline={true} /> decays sufficiently as 𝑡 → ∞.
          </p>

        <h3>2. Region of Convergence (ROC)</h3>
          <p className="text-foreground">
            The Laplace Transform converges for values of 𝑠 where Re(𝑠)=𝜎 &gt; 𝛼, where 𝛼 is the growth rate of 𝑓(𝑡). Outside this region, the transform diverges.
          </p>
        <h3>3. Piecewise Continuity</h3>
          <p className="text-foreground">
            The function 𝑓(𝑡) must be piecewise continuous on [0, ∞). This means it can have a finite number of discontinuities but should remain bounded.
          </p>

        <h3>4. Absolute Integrability</h3>
          <p className="text-foreground">
            The integral <Katex math="\int_0^\infty\left|f(t)e^{-st}\right|dt" inline={true} /> must converge, ensuring 𝐹(𝑠) is finite.
            These conditions collectively define whether the Laplace Transform exists for a given function.  
          </p>
        </section>

        <footer className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </footer>
      </div>
    </div>
  )
}