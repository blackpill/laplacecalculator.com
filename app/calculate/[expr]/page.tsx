import Calculator from '@/components/Calculator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Katex from '@/components/Katex';
import { Metadata } from "next";
import { BASE_URL } from '@/app/config';
type Params = Promise<{ expr: string }>;
export async function generateMetadata({ params }: { params: Params; }): Promise<Metadata> {
  const { expr } = await params;
  return {
    title: 'Laplace Transform Calculator - Free',
    description: 'Fast and accurate Laplace transform & inverse Laplace transform calculations for engineering and mathematics',
    alternates: {
      canonical: `${BASE_URL}/calculate/${expr}`,
    },
  };
}

interface PageProps {
  params: {
    expr: string;
  };
}

export default async function Calculate({ params }: PageProps) {
  const { expr } = await params;
  const decodedExpr = decodeURIComponent(expr);

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
          <Calculator expr={decodedExpr} />
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
    </div>
  )
}
