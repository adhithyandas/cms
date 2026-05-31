'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/blog', label: 'Blog' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  useGSAP(
    () => {
      // Scroll animation for the header background and height
      gsap.to(headerRef.current, {
        scrollTrigger: {
          start: 'top top',
          end: '+=100',
          scrub: 1, // Smooth scrubbing
        },
        backgroundColor: 'rgba(10, 10, 10, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        height: '70px',
        ease: 'none',
      });

      // Subtly animate the logo and nav spacing on scroll
      gsap.to(containerRef.current, {
        scrollTrigger: {
          start: 'top top',
          end: '+=100',
          scrub: 1,
        },
        paddingTop: '0px',
        paddingBottom: '0px',
        ease: 'none',
      });
    },
    { scope: headerRef },
  );

  return (
    <header ref={headerRef} className="fixed top-0 z-50 w-full flex items-center h-20">
      <div ref={containerRef} className="container mx-auto px-4 lg:px-8 h-full flex items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 shrink-0">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path d="M20 2L4 11V29L20 38L36 29V11L20 2Z" fill="url(#paint0_linear)" />
              <path d="M20 2L36 11V29L20 38V2Z" fill="url(#paint1_linear)" />
              <path
                d="M12 15L20 20L28 15"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M20 20V30" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="4"
                  y1="2"
                  x2="36"
                  y2="38"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ef4444" />
                  <stop offset="1" stopColor="#991b1b" />
                </linearGradient>

                <linearGradient
                  id="paint1_linear"
                  x1="20"
                  y1="2"
                  x2="36"
                  y2="38"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#dc2626" />
                  <stop offset="1" stopColor="#7f1d1d" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xl leading-none tracking-tight text-white">
              Eduvance
            </span>
            <span className="text-sm leading-tight text-gray-400 mt-0.5">Academy</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10 text-[15px] font-medium ml-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative transition-colors duration-300 ${
                  isActive ? 'text-red-500' : 'text-gray-300 hover:text-gray-400'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 transform origin-left transition-transform duration-300 ease-out ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center ml-auto lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-40 bg-[#0a0a0a] border-t border-white/5 lg:hidden">
          <nav className="flex flex-col p-4 space-y-4 text-base">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={
                    isActive
                      ? 'text-red-500 py-2 border-b border-red-500 font-medium'
                      : 'text-gray-300 hover:text-gray-400 transition-colors py-2 border-b border-white/5'
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
