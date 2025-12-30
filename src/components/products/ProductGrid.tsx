"use client";

import { Product } from "@/constants/data";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  variant?: "default" | "featured";
}

export default function ProductGrid({ products, variant = "default" }: ProductGridProps) {
  if (variant === "featured") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} variant="featured" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

