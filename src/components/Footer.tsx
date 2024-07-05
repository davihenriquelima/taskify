"use client";

import { useTheme } from "@/contexts/ThemeContext"
import Link from "next/link"

export const Footer = () => {
  const themeCtx = useTheme();
  
  return (
    <>
      <footer className={`${themeCtx.theme === 'light' ? 'bg-opacity-80 bg-green-300 text-black': 'bg-zinc-900  text-emerald-500'}  p-4 flex items-center gap-4`}>
        
        <nav className="flex flex-[0.33] w-full items-center gap-4">
          <ul className="flex flex-col text-emerald-800">
            <Link href="/about">
              <li className="p-1">Sobre</li>
            </Link>
            <Link href="/terms">
              <li className="p-1">Termos de Uso e Política de Privacidade</li>
            </Link>
            <Link href="/faq">
              <li className="p-1">FAQ</li>
            </Link>
          </ul>
          <ul className="flex flex-col text-emerald-800">
            <Link href="/feedback">
              <li className=" p-1">Feedback</li>
            </Link>
            <Link href="/devinfo">
              <li className="p-1">Informações do desenvolvedor</li>
            </Link>
            <Link href="/credits">
              <li className="p-1">Créditos</li>
            </Link>
          </ul>
        </nav>
        <span className="flex-[0.33] text-center text-sm">&copy; 2024 Taskify</span>
    </footer>
    </>
  )
}