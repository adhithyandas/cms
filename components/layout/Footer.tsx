import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const socialLinks = [
    { href: 'https://facebook.com', icon: '/fb.svg', label: 'Facebook' },
    { href: 'https://linkedin.com', icon: '/linkedin.svg', label: 'LinkedIn' },
    { href: 'https://instagram.com', icon: '/instagram.svg', label: 'Instagram' },
    { href: 'https://wa.me/1234567890', icon: '/whatsapp.svg', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center shrink-0 mb-6">
              <div className="w-12 h-12 flex items-center justify-center mr-3">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-2xl leading-none tracking-tight text-white">
                  Zeruqua
                </span>

                <span className="text-md leading-tight text-gray-400 mt-0.5">Labs</span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">
              Empowering learners with quality education and practical training to achieve great
              careers.
            </p>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-all bg-white/5 hover:bg-white/10"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/courses" className="hover:text-red-400 transition-colors">
                  Courses
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-red-400 transition-colors">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-red-400 transition-colors">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  Career Guide
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  Student Reviews
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>

            <p className="text-sm mb-6 text-gray-400 leading-relaxed">
              Subscribe to get updates
              <br />
              on new courses and offers.
            </p>

            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-[#111] border-white/10 text-white placeholder:text-gray-500 h-12 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-white/10 outline-none"
              />

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-base font-medium border-0 cursor-pointer">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 text-center flex flex-col justify-center items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Zeruqua Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
