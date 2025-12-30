"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/constants/data";
import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function ProductsPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const totalProducts = products.length;
  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < totalProducts;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, totalProducts));
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-white overflow-x-hidden antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background-dark/90 z-10"></div>
          <div
            className="h-[300px] md:h-[350px] lg:h-[400px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2QVmxViLOCAMEAczUllpj-BaN3R58dNJQAZ499j2AMV8UVnUxAc9Xsqit7-c40bd3-awAuqYNuUgJK6-gPIRmHxErYiLEyRhfI8uymfJ2bikmy7Xkcz_H77c9yAx9sYajxnyB4fcRGEwdxDQSda8a12C9aVxvQkhxDgKZ3TapqZ-T5R7zh3WztYMrQHCJx04cvQxjzfRhpi8NjZGn_N-pN2nMRqNJbTq52zZgru_EXNdOVyRPuECPIRX2J2U_uXWtuqivjKvACLM')",
            }}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-3 md:mb-4 text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-tighter text-white">
              The Gold Collection
            </h1>
            <p className="max-w-xl text-base md:text-lg lg:text-xl font-light text-text-gold/90 px-2">
              Timeless elegance tailored for you. Discover pieces that embody luxury and sophistication.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <div className="sticky top-16 md:top-20 z-40 w-full border-b border-[#483a23] bg-[#221b10]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[#221b10]/80">
          <div className="mx-auto flex min-h-[60px] md:h-16 max-w-[1440px] items-center justify-between px-4 md:px-6 lg:px-12 py-3 md:py-0">
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <div className="group relative h-full flex items-center">
                <button className="flex items-center gap-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-text-gold hover:text-white transition-colors min-h-[44px]">
                  Category <ChevronDown className="w-4 h-4 md:w-[16px] md:h-[16px] inline" />
                </button>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-56 rounded border border-[#483a23] bg-[#1a150d] p-4 shadow-2xl">
                    <label className="flex items-center gap-3 p-2 hover:bg-white/5 rounded cursor-pointer group/item">
                      <input
                        className="h-4 w-4 rounded border-text-gold bg-transparent text-primary focus:ring-primary"
                        type="checkbox"
                      />
                      <span className="text-sm text-text-gold group-hover/item:text-white transition-colors">
                        Necklaces (12)
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-2 hover:bg-white/5 rounded cursor-pointer group/item">
                      <input
                        className="h-4 w-4 rounded border-text-gold bg-transparent text-primary focus:ring-primary"
                        type="checkbox"
                      />
                      <span className="text-sm text-text-gold group-hover/item:text-white transition-colors">Rings (8)</span>
                    </label>
                    <label className="flex items-center gap-3 p-2 hover:bg-white/5 rounded cursor-pointer group/item">
                      <input
                        className="h-4 w-4 rounded border-text-gold bg-transparent text-primary focus:ring-primary"
                        type="checkbox"
                      />
                      <span className="text-sm text-text-gold group-hover/item:text-white transition-colors">
                        Earrings (15)
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="group relative h-full flex items-center">
                <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-text-gold hover:text-white transition-colors">
                  Material <ChevronDown className="w-4 h-4 inline" />
                </button>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-56 rounded border border-[#483a23] bg-[#1a150d] p-4 shadow-2xl">
                    <label className="flex items-center gap-3 p-2 hover:bg-white/5 rounded cursor-pointer group/item">
                      <input
                        className="h-4 w-4 border-text-gold bg-transparent text-primary focus:ring-primary"
                        name="mat"
                        type="radio"
                      />
                      <span className="text-sm text-text-gold group-hover/item:text-white transition-colors">
                        Yellow Gold
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-2 hover:bg-white/5 rounded cursor-pointer group/item">
                      <input
                        className="h-4 w-4 border-text-gold bg-transparent text-primary focus:ring-primary"
                        name="mat"
                        type="radio"
                      />
                      <span className="text-sm text-text-gold group-hover/item:text-white transition-colors">Rose Gold</span>
                    </label>
                    <label className="flex items-center gap-3 p-2 hover:bg-white/5 rounded cursor-pointer group/item">
                      <input
                        className="h-4 w-4 border-text-gold bg-transparent text-primary focus:ring-primary"
                        name="mat"
                        type="radio"
                      />
                      <span className="text-sm text-text-gold group-hover/item:text-white transition-colors">Platinum</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="group relative h-full flex items-center">
                <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-text-gold hover:text-white transition-colors">
                  Price <ChevronDown className="w-4 h-4 inline" />
                </button>
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-64 rounded border border-[#483a23] bg-[#1a150d] p-6 shadow-2xl">
                    <div className="mb-4 flex justify-between text-xs text-text-gold">
                      <span>$500</span>
                      <span>$50,000+</span>
                    </div>
                    <div className="relative h-1 w-full rounded-full bg-accent-brown">
                      <div className="absolute left-0 top-0 h-full w-1/3 rounded-full bg-primary"></div>
                      <div className="absolute left-1/3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow cursor-pointer border border-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex md:hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-white min-h-[44px]">
              <SlidersHorizontal className="w-5 h-5 inline" /> Filters
            </button>
            <div className="flex items-center gap-6">
              <span className="hidden text-xs font-medium text-text-gold/70 lg:block">
                Showing {visibleCount} of {totalProducts} Products
              </span>
              <div className="flex items-center gap-3 border-l border-[#483a23] pl-6 h-8">
                <span className="text-xs text-text-gold">Sort by:</span>
                <select className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer uppercase tracking-wider">
                  <option className="bg-[#221b10]">Featured</option>
                  <option className="bg-[#221b10]">Newest</option>
                  <option className="bg-[#221b10]">Price: Low - High</option>
                  <option className="bg-[#221b10]">Price: High - Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <main className="mx-auto flex w-full max-w-[1440px] flex-col px-4 md:px-6 py-8 md:py-10 lg:py-12 lg:px-12">
          <ProductGrid products={visibleProducts} />
          
          {/* Editor's Pick Section */}
          <div className="group relative overflow-hidden rounded bg-[#1a150d] sm:col-span-2 lg:col-span-3 flex flex-col md:flex-row h-[400px] md:h-[450px] lg:h-[500px] mt-12 md:mt-16 lg:mt-20">
            <div className="relative h-2/3 md:h-full w-full md:w-3/5 overflow-hidden">
              <div
                className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6BxJ2gcD1U_l6JmkKOFDt4dK32w0pq13eIz8YENvebODlT21KufgA4q6YtFGU3Zz-r6_CJ_7Mmzm1fsx6jTJ2q957aPgMwup8Pd5lgKjIXGxaDkKcjb-Ge1eWYnsopz8e_16a5Zh8XRH6Qynbfn0tQ1_dOXa9FDhPEQuvJaz63jBq0f0YJ9zkNfEtrY6j3k7MbomztnM2CEVXq8-N6JkD4a0if0sRnYPhLgLpgm_6LZmnaPm-RCQqI0uI0mhZAiTts9B98-B1MwY')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="flex flex-1 flex-col justify-center bg-[#15110a] p-6 md:p-8 lg:p-12 xl:p-16 border-l border-[#2c2417]">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <span className="h-[1px] w-6 md:w-8 bg-primary"></span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-text-gold">Editor's Pick</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-2 md:mb-3">Serenity Choker</h3>
              <p className="text-text-gold/80 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base">
                Embrace delicate luxury with our signature 14k gold choker. Designed for the modern muse, perfectly
                balancing simplicity and statement.
              </p>
              <div className="flex items-center justify-between mt-auto gap-4">
                <span className="text-xl md:text-2xl font-bold text-primary">$950</span>
                <button className="bg-white/5 border border-white/20 px-6 md:px-8 py-2 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-white hover:text-black transition-all min-h-[44px]">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="mt-12 md:mt-16 lg:mt-20 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="group flex items-center gap-2 md:gap-3 rounded-full border border-text-gold/30 bg-transparent px-6 md:px-10 py-3 md:py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white hover:border-primary hover:bg-primary hover:text-white transition-all min-h-[44px]"
              >
                Load More Products
                <ChevronDown className="w-4 h-4 md:w-[18px] md:h-[18px] group-hover:animate-bounce" />
              </button>
            </div>
          )}
        </main>
      </main>
      <Footer />
    </div>
  );
}
