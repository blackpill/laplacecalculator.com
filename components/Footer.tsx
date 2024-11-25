import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <p className="text-foreground">&copy; 2023 Laplace Calculator. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/privacy" className="text-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

