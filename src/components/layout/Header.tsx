"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  Gem,
  UserCircle,
  Menu,
} from "lucide-react";

interface HeaderProps {
  variant?: "default" | "minimal";
  cartCount?: number;
}

export default function Header({
  variant = "default",
  cartCount = 2,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Products", href: "/products" },
    { label: "Gifts", href: "/gifts" },
    { label: "About", href: "/about" },
  ];

  if (variant === "minimal") {
    return (
      <header className="sticky top-0 z-50 bg-background-dark/90 backdrop-blur-md border-b border-border-dark/50 transition-all duration-300">
        <div className="px-4 md:px-6 lg:px-12 py-3 md:py-4 lg:py-5 flex items-center justify-between w-full">
          <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white hover:text-primary transition-colors uppercase min-h-[44px] flex items-center"
            >
              Home
            </Link>
            <Link
              href="/new-arrivals"
              className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white hover:text-primary transition-colors uppercase min-h-[44px] flex items-center"
            >
              New Arrivals
            </Link>
            <Link
              href="/products"
              className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white hover:text-primary transition-colors uppercase min-h-[44px] flex items-center"
            >
              Products
            </Link>
            <Link
              href="/gifts"
              className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white hover:text-primary transition-colors uppercase min-h-[44px] flex items-center"
            >
              Gifts
            </Link>
            <Link
              href="/about"
              className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white hover:text-primary transition-colors uppercase min-h-[44px] flex items-center"
            >
              About
            </Link>
          </nav>
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 text-white group absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <div className="size-5 md:size-6 text-primary group-hover:rotate-180 transition-transform duration-1000 ease-in-out">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4L29 17L42 17L31 25L35 38L24 30L13 38L17 25L6 17L19 17L24 4Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <circle
                  className="opacity-50"
                  cx="24"
                  cy="24"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <span className="text-lg md:text-xl lg:text-2xl font-serif font-medium tracking-widest uppercase">
              Luxe Jewels
            </span>
          </Link>
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
            <button className="text-white hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <Link
              href="/favorites"
              className="text-white hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Heart className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <Link
              href="/cart"
              className="text-white hover:text-primary transition-colors relative min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-background-dark">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              href="/profile"
              className="hidden md:block text-white hover:text-primary transition-colors ml-2 min-h-[44px] items-center"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                Profile
              </span>
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full border-b border-accent-brown bg-background-dark/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-3 text-white cursor-pointer group"
            >
              <Gem className="text-primary w-6 h-6 md:w-8 md:h-8 transition-transform duration-500 group-hover:rotate-45" />
              <h2 className="text-white text-lg md:text-xl font-bold tracking-wide">
                LUXE
              </h2>
            </Link>
            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-primary transition-colors text-xs md:text-sm font-medium tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
            <div className="hidden lg:flex items-center bg-[#483a23]/30 hover:bg-[#483a23]/50 rounded-full px-3 md:px-4 py-2 w-48 lg:w-64 border border-transparent focus-within:border-primary/50 transition-all duration-300">
              <Search className="text-text-muted w-4 h-4 md:w-5 md:h-5" />
              <input
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-xs md:text-sm text-white placeholder:text-text-muted w-full ml-2"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Link
                href="/favorites"
                className="flex items-center justify-center min-h-[44px] min-w-[44px] md:size-10 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <Heart className="w-5 h-5 md:w-[22px] md:h-[22px]" />
              </Link>
              <Link
                href="/cart"
                className="flex items-center justify-center min-h-[44px] min-w-[44px] md:size-10 rounded-full hover:bg-white/10 text-white transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5 md:w-[22px] md:h-[22px]" />
                {cartCount > 0 && (
                  <span className="absolute top-2 right-2 size-2 bg-primary rounded-full ring-2 ring-background-dark"></span>
                )}
              </Link>
              <Link
                href="/profile"
                className="flex items-center justify-center min-h-[44px] min-w-[44px] md:size-10 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <UserCircle className="w-5 h-5 md:w-[22px] md:h-[22px]" />
              </Link>
            </div>
            <button
              className="md:hidden flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full hover:bg-white/10 text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#483a23] bg-background-dark">
          <nav className="flex flex-col px-4 md:px-6 py-4 gap-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-primary transition-colors text-sm font-medium min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
