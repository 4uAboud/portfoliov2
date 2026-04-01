'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="nav-base transition-shadow"
      style={{ boxShadow: scrolled ? '0 2px 24px rgba(43,37,32,.07)' : 'none' }}
    >
      <Link href="/" className="font-lora text-[1.0625rem] font-medium text-[var(--ink)] no-underline tracking-[.01em]">
        Abdullah <span style={{ color: 'var(--terra)', fontStyle: 'italic' }}>AlJuhani</span>
      </Link>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8 list-none items-center">
        <li>
          <Link href="/#who-i-am" className="text-[.8125rem] font-medium tracking-[.04em] text-[var(--ink3)] no-underline hover:text-[var(--ink)] transition-colors">
            Who I Am
          </Link>
        </li>
        <li>
          <Link href="/#my-work" className="text-[.8125rem] font-medium tracking-[.04em] text-[var(--ink3)] no-underline hover:text-[var(--ink)] transition-colors">
            My Work
          </Link>
        </li>
        <li>
          <Link
            href="/#contact-me"
            className="text-[.8125rem] font-medium tracking-[.02em] no-underline px-5 py-2 rounded-full transition-colors"
            style={{ background: 'var(--terra)', color: 'var(--cream)' }}
          >
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span style={{ display:'block', width:22, height:1.5, background:'var(--ink)', borderRadius:2, transition:'.3s', transform: open ? 'rotate(45deg) translate(4px,5px)' : '' }} />
        <span style={{ display:'block', width:22, height:1.5, background:'var(--ink)', borderRadius:2, transition:'.3s', opacity: open ? 0 : 1 }} />
        <span style={{ display:'block', width:22, height:1.5, background:'var(--ink)', borderRadius:2, transition:'.3s', transform: open ? 'rotate(-45deg) translate(4px,-5px)' : '' }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-16 z-50 flex flex-col gap-6 px-[5%] py-10"
          style={{ background: 'var(--sand)', borderTop: '1px solid var(--border)' }}
        >
          {['/#who-i-am','/#my-work','/#contact-me'].map((href, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium no-underline"
              style={{ color: 'var(--ink)' }}
            >
              {['Who I Am','My Work','Contact Me'][i]}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
