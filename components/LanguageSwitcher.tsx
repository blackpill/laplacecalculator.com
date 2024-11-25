'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const [language, setLanguage] = useState('English')

  const languages = ['English', '中文', 'Español', 'Français', 'Deutsch']

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
    // Here you would implement the actual language change logic
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="sm" className="btn-default">
          <Globe className="mr-2 h-4 w-4" />
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((lang) => (
          <DropdownMenuItem key={lang} onClick={() => handleLanguageChange(lang)}>
            {lang}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
