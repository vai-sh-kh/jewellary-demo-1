"use client";

import { useState } from "react";
import { orderSummary } from "@/constants/data";

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  shipping?: number;
}

export default function OrderSummary({ subtotal, tax, shipping = 0 }: OrderSummaryProps) {
  const [promoCode, setPromoCode] = useState("");
  const total = subtotal + tax + shipping;

  return (
    <div className="w-full lg:w-[420px] flex-shrink-0">
      <div className="bg-accent-dark/80 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 sticky top-24 md:top-32 border border-white/5 shadow-2xl">
        <h2 className="text-xl md:text-2xl font-light text-white mb-6 md:mb-8">Order Summary</h2>
        <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
          <div className="flex justify-between text-xs md:text-sm">
            <span className="text-white/60">Subtotal</span>
            <span className="text-white font-medium tracking-wide">${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-xs md:text-sm">
            <span className="text-white/60">Shipping</span>
            <span className="text-primary font-medium">
              {shipping === 0 ? "Complimentary" : `$${shipping.toLocaleString()}`}
            </span>
          </div>
          <div className="flex justify-between text-xs md:text-sm">
            <span className="text-white/60">Estimated Tax</span>
            <span className="text-white font-medium tracking-wide">${tax.toLocaleString()}</span>
          </div>
        </div>
        <div className="mb-6 md:mb-8 pt-4 md:pt-6 border-t border-white/5">
          <details className="group/promo">
            <summary className="flex items-center justify-between cursor-pointer list-none text-xs md:text-sm text-text-muted hover:text-white transition-colors select-none min-h-[44px]">
              <span className="font-medium tracking-wide">Do you have a promo code?</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open/promo:rotate-180 text-white/50 text-lg md:text-xl">
                expand_more
              </span>
            </summary>
            <div className="mt-3 md:mt-4 flex gap-2">
              <input
                className="flex-1 bg-background-dark/50 border border-white/10 rounded-lg px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all min-h-[44px]"
                placeholder="Enter code"
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="px-4 md:px-5 py-2 md:py-2.5 bg-white/5 hover:bg-white/15 text-white text-xs md:text-sm font-medium rounded-lg transition-colors border border-white/5 min-h-[44px]">
                Apply
              </button>
            </div>
          </details>
        </div>
        <div className="flex justify-between items-end mb-6 md:mb-8 pt-4 md:pt-6 border-t border-white/10">
          <span className="text-base md:text-lg text-white font-light">Total</span>
          <div className="text-right">
            <span className="text-[10px] md:text-xs text-text-muted block mb-1 tracking-wider">USD</span>
            <span className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight">${total.toLocaleString()}</span>
          </div>
        </div>
        <button className="group w-full bg-gradient-to-r from-primary to-primary-hover text-background-dark font-bold py-3 md:py-4 rounded-lg md:rounded-xl flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] mb-4 md:mb-6 min-h-[44px] text-sm md:text-base">
          <span className="material-symbols-outlined text-lg md:text-[20px] transition-transform group-hover:scale-110">lock</span>
          <span className="tracking-wide">Proceed to Checkout</span>
        </button>
        <div className="flex justify-center gap-6 mt-8 border-t border-white/5 pt-6">
          <span className="material-symbols-outlined text-white/20 text-3xl hover:text-white/40 transition-colors cursor-help" title="Visa">
            credit_card
          </span>
          <span className="material-symbols-outlined text-white/20 text-3xl hover:text-white/40 transition-colors cursor-help" title="Mastercard">
            payments
          </span>
          <span className="material-symbols-outlined text-white/20 text-3xl hover:text-white/40 transition-colors cursor-help" title="Paypal">
            account_balance_wallet
          </span>
        </div>
      </div>
    </div>
  );
}

