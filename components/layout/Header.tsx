'use client';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/blog', label: 'Blog' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Desktop scroll animations
  useGSAP(
    () => {
      const isScrolled = window.scrollY > 0;

      if (isScrolled) {
        gsap.set(headerRef.current, {
          backgroundColor: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          height: '70px',
        });
        gsap.set(containerRef.current, {
          paddingTop: '0px',
          paddingBottom: '0px',
        });
      } else {
        gsap.set(headerRef.current, {
          backgroundColor: 'rgba(10, 10, 10, 0)',
          backdropFilter: 'blur(0px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0)',
          height: '80px',
        });
      }

      gsap.to(headerRef.current, {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: '+=100',
          scrub: 1,
        },
        backgroundColor: 'rgba(10, 10, 10, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        height: '70px',
        ease: 'none',
      });

      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: 'body',
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

  // Mobile menu toggle animation
  useGSAP(
    () => {
      if (isMobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          x: '0%',
          opacity: 1,
          duration: 0.5,
          ease: 'power4.out',
        });
        gsap.fromTo(
          '.mobile-nav-item',
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.08, delay: 0.1, ease: 'power2.out' },
        );
        gsap.fromTo(
          iconRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.2, ease: 'power1.inOut' },
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          x: '100%',
          opacity: 0,
          duration: 0.4,
          ease: 'power3.inOut',
        });
        gsap.fromTo(
          iconRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.2, ease: 'power1.inOut' },
        );
      }
    },
    { dependencies: [isMobileMenuOpen] },
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 flex h-20 w-full items-center ${
          isMobileMenuOpen ? 'z-70' : 'z-50'
        } ${
          pathname === '/' || pathname === '/home'
            ? 'bg-transparent border-none'
            : 'border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur-xl'
        }`}
      >
        <div
          ref={containerRef}
          className="container mx-auto px-4 lg:px-8 h-full flex items-center relative z-50"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 relative z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex items-center justify-center w-10 h-10 shrink-0">
              <Image
                src="/logo.png"
                alt="Zeruqua"
                width={40}
                height={40}
                priority
                className="w-full h-full object-contain me-2"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-xl leading-none tracking-tight text-white">
                Zeruqua
              </span>

              <span className="text-sm leading-tight text-gray-400 mt-0.5">Labs</span>
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
                    isActive ? 'text-red-500' : 'text-white hover:text-white/80'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-red-500 transform origin-left transition-transform duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center ml-auto lg:hidden relative z-70">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-red-500 transition-all duration-300 relative w-10 h-10 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div
                ref={iconRef}
                className="group-hover:rotate-90 transition-transform duration-300"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Right Side Entrance */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 z-60 bg-[#0a0a0a] lg:hidden opacity-0 translate-x-full ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-24 overflow-y-auto">
          <nav className="flex flex-col p-6 space-y-1 text-base text-right" dir="rtl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.label} className="mobile-nav-item">
                  <Link
                    href={link.href}
                    className={`group block py-5 px-3 border-b transition-all duration-300 hover:-translate-x-1 ${
                      isActive
                        ? 'text-red-500 font-semibold border-red-500/50'
                        : 'text-gray-300 hover:text-white border-white/10 hover:border-red-500/30'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-[17px] font-medium tracking-tight">{link.label}</span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
