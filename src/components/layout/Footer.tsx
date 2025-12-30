"use client";

import Link from "next/link";
import { footerSections } from "@/constants/data";

interface FooterProps {
  variant?: "default" | "minimal" | "about";
}

export default function Footer({ variant = "default" }: FooterProps) {
  if (variant === "minimal") {
    return (
      <footer className="bg-background-dark border-t border-border-dark py-8 md:py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 lg:gap-10">
            <div>
              <Link href="/" className="flex items-center gap-2 md:gap-3 text-white group mb-4 md:mb-0">
                <div className="size-4 md:size-5 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24 4L29 17L42 17L31 25L35 38L24 30L13 38L17 25L6 17L19 17L24 4Z"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <circle className="opacity-50" cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <span className="text-base md:text-lg font-serif font-medium tracking-widest uppercase">Luxe Jewels</span>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 text-[10px] md:text-xs font-bold tracking-[0.15em] text-white uppercase">
              <Link href="#" className="hover:text-primary transition-colors min-h-[44px] flex items-center">
                Contact
              </Link>
              <Link href="#" className="hover:text-primary transition-colors min-h-[44px] flex items-center">
                Shipping
              </Link>
              <Link href="#" className="hover:text-primary transition-colors min-h-[44px] flex items-center">
                Returns
              </Link>
              <Link href="#" className="hover:text-primary transition-colors min-h-[44px] flex items-center">
                Privacy
              </Link>
            </div>
          </div>
          <div className="mt-6 md:mt-8 lg:mt-10 pt-6 md:pt-8 lg:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2 text-[9px] md:text-[10px] text-text-body uppercase tracking-wider">
            <p>© 2023 Luxe Jewels. All rights reserved.</p>
            <p>Designed in Paris</p>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "about") {
    return (
      <footer className="bg-[#14100c] border-t border-[#26201a] pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8 lg:pb-10 px-4 md:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl md:text-2xl font-bold font-serif mb-4 md:mb-6 tracking-wide">LUMIÈRE</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 md:mb-8 opacity-80">
              Timeless elegance handcrafted for the modern connoisseur. Established in Paris, celebrated worldwide.
            </p>
            <div className="flex gap-3 md:gap-4 opacity-80">
              <a href="#" className="text-white hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                <span className="material-symbols-outlined text-base md:text-lg">public</span>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                <span className="material-symbols-outlined text-base md:text-lg">share</span>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                <span className="material-symbols-outlined text-base md:text-lg">favorite</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 lg:mb-8">Boutiques</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors text-xs md:text-sm font-light min-h-[44px] flex items-center">
                  Paris, Place Vendôme
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors text-xs md:text-sm font-light min-h-[44px] flex items-center">
                  London, Mayfair
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors text-xs md:text-sm font-light min-h-[44px] flex items-center">
                  New York, 5th Avenue
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors text-xs md:text-sm font-light min-h-[44px] flex items-center">
                  Tokyo, Ginza
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 lg:mb-8">Services</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors text-xs md:text-sm font-light min-h-[44px] flex items-center">
                  Bespoke Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors text-xs md:text-sm font-light min-h-[44px] flex items-center">
                  Restoration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors text-xs md:text-sm font-light min-h-[44px] flex items-center">
                  Valuation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors text-xs md:text-sm font-light min-h-[44px] flex items-center">
                  Engraving
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 lg:mb-8">Newsletter</h4>
            <p className="text-text-secondary text-xs mb-4 md:mb-6 opacity-80">Be the first to receive invitations to private viewings.</p>
            <form className="flex flex-col gap-3">
              <input
                className="bg-[#1f1a14] border border-[#332919] rounded-sm p-3 text-white text-sm focus:outline-none focus:border-primary placeholder:text-white/20 transition-colors min-h-[44px]"
                placeholder="Email address"
                type="email"
              />
              <button
                type="submit"
                className="bg-[#26201a] hover:bg-primary hover:text-background-dark text-text-secondary text-xs font-bold uppercase py-3 px-4 rounded-sm transition-all duration-300 tracking-widest border border-[#332919] min-h-[44px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-[#26201a] pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-wider">© 2024 Lumière Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8">
            <Link href="#" className="text-white/30 hover:text-white text-[9px] md:text-[10px] uppercase tracking-wider transition-colors min-h-[44px] flex items-center">
              Privacy
            </Link>
            <Link href="#" className="text-white/30 hover:text-white text-[9px] md:text-[10px] uppercase tracking-wider transition-colors min-h-[44px] flex items-center">
              Terms
            </Link>
            <Link href="#" className="text-white/30 hover:text-white text-[9px] md:text-[10px] uppercase tracking-wider transition-colors min-h-[44px] flex items-center">
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8 lg:pb-10">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20 border-b border-white/5 pb-8 md:pb-12 lg:pb-16">
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6 pr-0 lg:pr-12">
            <h3 className="text-white font-serif italic text-2xl md:text-3xl">Join Our World</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Be the first to know about new collections, exclusive events, and private sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2">
              <input
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors min-h-[44px]"
                placeholder="Email Address"
                type="email"
              />
              <button className="whitespace-nowrap bg-white text-black font-bold uppercase tracking-widest text-xs px-6 md:px-8 py-3 hover:bg-primary hover:text-white transition-colors min-h-[44px]">
                Subscribe
              </button>
            </div>
          </div>
          {footerSections.slice(0, 3).map((section) => (
            <div key={section.title} className="lg:col-span-2 sm:col-span-4">
              <h5 className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 text-primary">{section.title}</h5>
              <ul className="flex flex-col gap-3 md:gap-4">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 hover:text-white text-xs md:text-sm transition-colors min-h-[44px] flex items-center">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <h2 className="text-white text-lg md:text-xl font-serif italic font-bold leading-tight tracking-widest uppercase opacity-50">
              LUXE
            </h2>
            <p className="text-white/40 text-[10px] md:text-xs">© 2023 Luxe Jewelry.</p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8">
            <Link href="#" className="text-white/40 hover:text-white text-[10px] md:text-xs uppercase tracking-wider min-h-[44px] flex items-center">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/40 hover:text-white text-[10px] md:text-xs uppercase tracking-wider min-h-[44px] flex items-center">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/40 hover:text-white text-[10px] md:text-xs uppercase tracking-wider min-h-[44px] flex items-center">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

