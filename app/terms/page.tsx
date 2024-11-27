export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="text-foreground">
            By accessing and using Laplace Calculator (laplacecalculator.com), you agree to be bound by these Terms of Service. 
            If you disagree with any part of these terms, you may not access the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="text-foreground mb-4">
            Laplace Calculator is a web-based tool that provides mathematical calculations, specifically focused on Laplace transforms. 
            The service is provided "as is" and is intended for educational and reference purposes.
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>All calculations are performed client-side in your browser</li>
            <li>Results are provided for reference purposes only</li>
            <li>We do not guarantee the accuracy of calculations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <p className="text-foreground mb-4">Users of Laplace Calculator agree to:</p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Use the service for lawful purposes only</li>
            <li>Not attempt to disrupt or overwhelm the service</li>
            <li>Verify results independently for critical applications</li>
            <li>Not use the service for any commercial purpose without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="text-foreground">
            The content, features, and functionality of Laplace Calculator, including but not limited to text, graphics, 
            logos, and software, are owned by or licensed to us and are protected by copyright, trademark, and other 
            intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
          <p className="text-foreground">
            Laplace Calculator is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, 
            regarding the accuracy, reliability, or availability of the service. Users should independently verify all results 
            for critical applications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="text-foreground">
            In no event shall Laplace Calculator, its operators, or affiliates be liable for any indirect, incidental, 
            special, consequential, or punitive damages arising out of or relating to your use of the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
          <p className="text-foreground">
            We reserve the right to modify these terms at any time. We will notify users of any changes by updating the 
            date at the bottom of this page. Continued use of the service after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p className="text-foreground">
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:contact@laplacecalculator.com" className="text-primary hover:underline">
              contact@laplacecalculator.com
            </a>
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