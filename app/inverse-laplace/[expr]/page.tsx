import Calculator from '@/components/Calculator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Metadata } from "next";
import { BASE_URL } from '@/app/config';
import Katex from '@/components/Katex';

export const runtime = 'edge';
type Params = Promise<{ expr: string }>;
export async function generateMetadata({ params }: { params: Params; }): Promise<Metadata> {
  const { expr } = await params;
  return {
    title: 'Inverse Laplace Transform Calculator | Step-by-Step Solutions',
    description: 'Easily calculate inverse Laplace transforms with our advanced online calculator. Solve functions step-by-step and explore examples to simplify your Laplace transform calculations!',
    alternates: {
      canonical: `${BASE_URL}/inverse-laplace/${expr}`,
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
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Inverse Laplace Transform Calculator</h1>
      
      <h2 className="text-2xl font-semibold mb-4 text-primary">Online Inverse Laplace Transform Calculator</h2>
      <Card className="mb-8 bg-card">
        <CardHeader>
          <CardTitle className="text-primary">Calculate Inverse Laplace Transform</CardTitle>
          <CardDescription className="text-muted-foreground">Enter a function F(s) to find its inverse Laplace transform f(t)</CardDescription>
        </CardHeader>
        <CardContent>
          <Calculator expr={decodedExpr} inverse={true}/>
        </CardContent>
      </Card>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">What is Inverse Laplace Transform?</h2>
        <p className="text-lg text-foreground">
          The Inverse Laplace Transform is a mathematical operation that converts a function from the frequency domain (s-domain) back to the time domain. 
          It is denoted as <Katex math="f(t)=\mathcal{L}^{-1}\{F(s)\}" inline={true} />, where F(s) is the Laplace transform of the original function f(t). 
          This transformation is crucial in engineering and physics for solving differential equations and analyzing system responses.
          The Inverse Laplace Transform is particularly useful in control systems, signal processing, and electrical engineering 
          where we need to determine how a system behaves over time based on its frequency-domain representation.
        </p>
      </section>
    </div>
  )
}
