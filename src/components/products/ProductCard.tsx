"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/constants/data";
import { Heart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "featured";
}

export default function ProductCard({ product, variant = "default" }: ProductCardProps) {
  if (variant === "featured") {
    return (
      <div className="group cursor-pointer">
        <div className="relative w-full bg-background-card aspect-[4/5] overflow-hidden mb-6">
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black p-2 md:p-3 rounded-full hover:bg-primary hover:text-white transition-colors shadow-lg min-h-[44px] min-w-[44px] flex items-center justify-center">
              <Heart className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
          <div
            className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url('${product.image}')` }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white text-black py-3 md:py-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest min-h-[44px] flex items-center justify-center">Quick Add</span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-white font-serif text-xl md:text-2xl italic mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-white/50 text-[10px] md:text-xs tracking-widest uppercase mb-2">{product.material}</p>
          <p className="text-white font-medium text-sm md:text-base">${product.price.toLocaleString()}</p>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/products/${product.id}`} className="group flex flex-col gap-4">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-[#1a150d]">
        {product.new && (
          <div className="absolute left-4 top-4 z-20">
            <span className="bg-primary/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
              New
            </span>
          </div>
        )}
        <div
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
          style={{ backgroundImage: `url('${product.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-transparent">
          <button className="w-full bg-white py-3 md:py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-black hover:bg-primary hover:text-white transition-colors shadow-xl min-h-[44px]">
            Quick View
          </button>
        </div>
        <button className="absolute right-4 top-4 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-primary transition-colors opacity-0 group-hover:opacity-100 duration-300">
          <Heart className="w-5 h-5 md:w-[20px] md:h-[20px]" />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-baseline">
          <h3 className="text-base md:text-lg font-medium text-white group-hover:text-primary transition-colors">{product.name}</h3>
          <span className="text-base md:text-lg font-bold text-primary">${product.price.toLocaleString()}</span>
        </div>
        <p className="text-xs md:text-sm font-light text-text-gold">{product.material}</p>
      </div>
    </Link>
  );
}

