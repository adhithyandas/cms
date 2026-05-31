import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Social Icons as local components since they are missing in lucide-react v1+
const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 shrink-0 mb-6">
              <div className="w-10 h-10 flex items-center justify-center text-red-600">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path d="M20 2L4 11V29L20 38L36 29V11L20 2Z" fill="url(#paint0_linear_footer)" />
                  <path d="M20 2L36 11V29L20 38V2Z" fill="url(#paint1_linear_footer)" />
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
                      id="paint0_linear_footer"
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
                      id="paint1_linear_footer"
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
                <span className="font-bold text-xl leading-none tracking-tight text-white">
                  DevSphere
                </span>
                <span className="text-sm font-medium leading-tight text-gray-300 mt-0.5">
                  Academy
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">
              Empowering learners with quality education and practical training to achieve great
              careers.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
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
                className="bg-[#111] border-white/10 text-white placeholder:text-gray-500 h-12 focus-visible:ring-red-500"
              />
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-base font-medium border-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 text-center flex flex-col justify-center items-center">
          <p className="text-sm text-gray-500">
            &copy; 2024 DevSphere Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
