import Calculator from '../components/Calculator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Laplace Transform Calculator</h1>
      
      <Card className="mb-8 bg-card">
        <CardHeader>
          <CardTitle className="text-primary">Calculate Laplace Transform</CardTitle>
          <CardDescription className="text-muted-foreground">Enter a function to calculate its Laplace transform</CardDescription>
        </CardHeader>
        <CardContent>
          <Calculator />
        </CardContent>
      </Card>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">What is a Laplace Transform?</h2>
        <p className="text-lg text-foreground">
          The Laplace transform is an integral transform used to solve differential equations. 
          It transforms a function of time, f(t), to a function of complex frequency, F(s).
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-primary">Why Use Our Calculator?</h2>
        <ul className="list-disc list-inside text-lg text-foreground">
          <li>Fast and accurate calculations</li>
          <li>Easy to use interface</li>
          <li>Supports a wide range of functions</li>
          <li>Free to use</li>
        </ul>
      </section>
    </div>
  )
}

