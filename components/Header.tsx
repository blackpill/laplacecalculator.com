import Link from 'next/link'
// import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:items-center">
          <Link href="/" className="text-2xl font-bold text-primary-foreground">
            Laplace Calculator
          </Link>
          <nav className="sm:ml-8">
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-primary-foreground hover:text-secondary">Home</Link></li>
              <li><Link href="/faq" className="text-primary-foreground hover:text-secondary">FAQ</Link></li>
            </ul>
          </nav>
          {/* <LanguageSwitcher /> */}
        </div>
      </div>
    </header>
  )
}
