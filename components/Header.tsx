import Link from 'next/link'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-foreground">
          Laplace Calculator
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-primary-foreground hover:text-secondary">Home</Link></li>
            <li><Link href="/examples" className="text-primary-foreground hover:text-secondary">Examples</Link></li>
            <li><Link href="/faq" className="text-primary-foreground hover:text-secondary">FAQ</Link></li>
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  )
}

