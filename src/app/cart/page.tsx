"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";
import ProductCard from "@/components/products/ProductCard";
import { cartItems, products, orderSummary } from "@/constants/data";
import { useState } from "react";

export default function CartPage() {
  const [items, setItems] = useState(cartItems);
  const completingTheLook = products.slice(13, 17);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const handleRemove = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.083);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <Header cartCount={items.length} />
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 md:px-6 py-8 md:py-10 lg:py-12">
        <div className="mb-8 md:mb-10 lg:mb-12 border-b border-white/5 pb-6 md:pb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 md:mb-3 tracking-tight">Shopping Bag</h1>
          <p className="text-text-muted flex items-center gap-2 text-sm md:text-base">
            <span className="size-1.5 rounded-full bg-primary inline-block"></span>
            {items.length} {items.length === 1 ? "item" : "items"} currently in your bag
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
          <div className="flex-1 flex flex-col gap-8">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemove}
              />
            ))}
            <div className="mt-4 flex items-center gap-4 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 p-5 rounded-xl">
              <div className="bg-primary/20 p-2 rounded-full">
                <span className="material-symbols-outlined text-primary text-2xl">support_agent</span>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                Need assistance?{" "}
                <a
                  href="#"
                  className="text-primary font-medium underline decoration-primary/50 hover:decoration-primary underline-offset-2 transition-all"
                >
                  Contact our Concierge
                </a>{" "}
                for personal sizing advice.
              </p>
            </div>
          </div>
          <OrderSummary subtotal={subtotal} tax={tax} />
        </div>
        <div className="mt-16 md:mt-24 lg:mt-32 mb-8 md:mb-10 lg:mb-12">
          <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-2xl md:text-3xl text-white font-light">Completing the Look</h2>
            <div className="hidden md:flex gap-2">
              <button className="size-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-background-dark transition-all min-h-[44px] min-w-[44px]">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="size-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-background-dark transition-all min-h-[44px] min-w-[44px]">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {completingTheLook.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-square bg-accent-dark rounded-xl mb-5 overflow-hidden relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <button className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md hover:bg-primary text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 min-h-[44px] min-w-[44px] flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg md:text-xl">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="text-white text-base md:text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-text-muted text-xs md:text-sm">${product.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

