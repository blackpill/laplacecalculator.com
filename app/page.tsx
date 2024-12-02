import Calculator from '@/components/Calculator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Katex from '@/components/Katex';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Laplace Transform Calculator</h1>
      
      <h2 className="text-2xl font-semibold mb-4 text-primary">Online Laplace Transform Calculator</h2>
      <Card className="mb-8 bg-card">
        <CardHeader>
          <CardTitle className="text-primary">Calculate Laplace Transform</CardTitle>
          <CardDescription className="text-muted-foreground">Enter a function to calculate its Laplace transform</CardDescription>
        </CardHeader>
        <CardContent>
          <Calculator both={true}/>
        </CardContent>
      </Card>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">What is Laplace Transform Calculator?</h2>
        <p className="text-lg text-foreground">
          The Laplace Transform is an integral transform used to solve differential equations. 
          It transforms a function of time, f(t), to a function of complex frequency, F(s).
          The Laplace Transform is a fundamental tool for bridging the time-domain and the frequency-domain in mathematics, physics, and engineering.
          A Laplace Transform Calculator is a tool, typically software or an online platform, that automates the process of computing the Laplace Transform or Inverse Laplace Transform of mathematical functions. These calculators are designed to handle a wide range of inputs, including standard mathematical expressions and differential equations, and provide the corresponding results in the 
          s-domain or time-domain.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">The mathematical definition of Laplace Transform</h2>
        <p className="text-lg text-foreground">
        The Laplace Transform of a function  
        <Katex math="f(t)" inline={true} />, defined for <Katex math="t \ge 0" inline={true} />, is given by:
        <Katex math="F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty f(t) e^{-st} dt" />
        where: 
        </p>
        <ul className="list-disc list-inside text-lg text-foreground">
          <li>𝑡 is the time variable (real and non-negative),</li>
          <li>𝑠 is a complex number 𝑠 = 𝜎 + 𝑗𝜔 (with real part 𝜎 and imaginary part 𝜔),</li>
          <li><Katex math="e^{-st}" inline={true} /> is the exponential kernel that weights 𝑓(𝑡) based on 𝑠.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Why use our Laplace Transform Calculator?</h2>
        <ul className="list-disc list-inside text-lg text-foreground">
          <li>Fast and accurate calculations</li>
          <li>Easy to use interface</li>
          <li>Supports a wide range of functions</li>
          <li>Free to use</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">What is Inverse Laplace Transform?</h2>
        <p className="text-lg text-foreground">
        The Inverse Laplace Transform is a mathematical operation that converts a function in the 
        s-domain (frequency domain) back into its original form in the 
        t-domain (time domain). It reverses the process of the Laplace Transform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Resources and Tools to learn Laplace Transform?</h2>
        <ul className="list-disc list-inside text-lg text-foreground">
          <h3>Books</h3>
            <li><a href="https://amzn.to/495gMG0" target="_blank" className="text-primary underline">Advanced Engineering Mathematics</a> by Erwin Kreyszig.</li>
            <li><a href="https://amzn.to/412KBoG" target="_blank" className="text-primary underline">The Laplace Transform: Theory and Applications</a> by Joel L. Schiff.</li>
          <h3>Online Courses</h3>
            <li><a href="https://www.khanacademy.org/math/ap-calculus-ab/ap-calculus-ab" target="_blank" className="text-primary underline">Khan Academy</a> (Free, basic understanding).</li>
            <li><a href="https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-analysis-fall-2010/" target="_blank" className="text-primary underline">MIT OpenCourseWare</a> (Advanced).</li>
          <h3>Software Tools</h3>
            <li><a href="https://www.mathworks.com/help/symbolic/index.html" target="_blank" className="text-primary underline">MATLAB: Symbolic toolbox for Laplace Transforms.</a></li>
            <li><a href="https://pypi.org/project/sympy/" target="_blank" className="text-primary underline">Python: SymPy library for symbolic computation.</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Laplace Transform Table</h2>
        <div className="overflow-x-auto mx-4 md:mx-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border py-2 px-3 text-center">Time Domain <Katex math="f(t)" inline={true} /></th>
                <th className="border py-2 px-3 text-center">Laplace Domain <Katex math="F(s)=\mathcal{L}\{f(t)\}" inline={true} /></th>
                <th className="border py-2 px-3 text-center">Region of Convergence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border py-2 px-3"><Katex math="1" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{1}{s}" /></td>
                <td className="border py-2 px-3"><Katex math="Re(s) > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="t" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{1}{s^2}" /></td>
                <td className="border py-2 px-3"><Katex math="Re(s) > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="t^n" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{n!}{s^{n+1}}" /></td>
                <td className="border py-2 px-3"><Katex math="Re(s) > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="e^{at}" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{1}{s-a}" /></td>
                <td className="border py-2 px-3"><Katex math="Re(s) > Re(a)" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="\sin(at)" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{a}{s^2 + a^2}" /></td>
                <td className="border py-2 px-3"><Katex math="Re(s) > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="\cos(at)" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{s}{s^2 + a^2}" /></td>
                <td className="border py-2 px-3"><Katex math="Re(s) > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="t\sin(at)" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{2as}{(s^2 + a^2)^2}" /></td>
                <td className="border py-2 px-3"><Katex math="Re(s) > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="t\cos(at)" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{s^2 - a^2}{(s^2 + a^2)^2}" /></td>
                <td className="border py-2 px-3"><Katex math="Re(s) > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="e^{at}\sin(bt)" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{b}{(s-a)^2 + b^2}" /></td>
                <td className="border py-2 px-3"><Katex math="Re(s) > Re(a)" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="e^{at}\cos(bt)" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{s-a}{(s-a)^2 + b^2}" /></td>
                <td className="border py-2 px-3"><Katex math="Re(s) > Re(a)" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Note: This table shows some of the most commonly used Laplace transform pairs. 
          The Region of Convergence (ROC) indicates where the transform is valid in the complex s-plane.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Inverse Laplace Transform Table</h2>
        <div className="overflow-x-auto mx-4 md:mx-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border py-2 px-3 text-center">Laplace Domain <Katex math="F(s)" inline={true} /></th>
                <th className="border py-2 px-3 text-center">Time Domain <Katex math="f(t)=\mathcal{L}^{-1}\{F(s)\}" inline={true} /></th>
                <th className="border py-2 px-3 text-center">Conditions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border py-2 px-3"><Katex math="\frac{1}{s}" /></td>
                <td className="border py-2 px-3"><Katex math="1" /></td>
                <td className="border py-2 px-3"><Katex math="t > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="\frac{1}{s^2}" /></td>
                <td className="border py-2 px-3"><Katex math="t" /></td>
                <td className="border py-2 px-3"><Katex math="t > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="\frac{1}{s^{n+1}}" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{t^n}{n!}" /></td>
                <td className="border py-2 px-3"><Katex math="t > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="\frac{1}{s-a}" /></td>
                <td className="border py-2 px-3"><Katex math="e^{at}" /></td>
                <td className="border py-2 px-3"><Katex math="t > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="\frac{a}{s^2 + a^2}" /></td>
                <td className="border py-2 px-3"><Katex math="\sin(at)" /></td>
                <td className="border py-2 px-3"><Katex math="t > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="\frac{s}{s^2 + a^2}" /></td>
                <td className="border py-2 px-3"><Katex math="\cos(at)" /></td>
                <td className="border py-2 px-3"><Katex math="t > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="\frac{1}{(s-a)^2}" /></td>
                <td className="border py-2 px-3"><Katex math="te^{at}" /></td>
                <td className="border py-2 px-3"><Katex math="t > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="\frac{1}{s^2 + a^2}" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{1}{a}\sin(at)" /></td>
                <td className="border py-2 px-3"><Katex math="t > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="\frac{s^2}{(s^2 + a^2)^2}" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{1}{2}t\sin(at)" /></td>
                <td className="border py-2 px-3"><Katex math="t > 0" /></td>
              </tr>
              <tr>
                <td className="border py-2 px-3"><Katex math="\frac{s}{(s^2 + a^2)^2}" /></td>
                <td className="border py-2 px-3"><Katex math="\frac{t}{2a}\cos(at)" /></td>
                <td className="border py-2 px-3"><Katex math="t > 0" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Note: This table shows common inverse Laplace transform pairs. 
          The condition t &gt; 0 is required for all inverse transforms as they are only defined for positive time.
        </p>
      </section>

    </div>
  )
}
