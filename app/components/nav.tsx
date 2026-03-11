'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
]

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ')

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="mb-10">
      <nav
        aria-label="Primary"
        className="flex items-center gap-2 rounded-2xl border border-neutral-200/70 bg-white/60 px-2 py-2 backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-950/40"
      >
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname === item.href || pathname.startsWith(item.href + '/')

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={cx(
                'relative rounded-xl px-4 py-2 text-sm font-semibold tracking-tight transition',
                'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-950/5',
                'dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/5',
                isActive &&
                  'text-neutral-950 bg-neutral-950/5 dark:text-white dark:bg-white/5'
              )}
            >
              {item.label}
              {isActive && (
                <span className="pointer-events-none absolute inset-x-3 -bottom-1 h-px bg-gradient-to-r from-transparent via-neutral-900/40 to-transparent dark:via-white/40" />
              )}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

