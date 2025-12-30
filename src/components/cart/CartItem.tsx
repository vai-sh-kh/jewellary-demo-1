"use client";

import { CartItem as CartItemType } from "@/constants/data";
import { useState } from "react";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemove?: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdateQuantity?.(item.id, newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateQuantity?.(item.id, newQuantity);
  };

  const handleRemove = () => {
    onRemove?.(item.id);
  };

  return (
    <div className="group flex flex-col md:flex-row items-stretch gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 bg-accent-dark/40 hover:bg-accent-dark/60 border border-white/5 hover:border-primary/20 rounded-xl md:rounded-2xl transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/20">
      <div className="flex-shrink-0 relative overflow-hidden rounded-lg md:rounded-xl w-full md:w-56 aspect-[4/5] md:aspect-square bg-white/5">
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${item.image}')` }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
      </div>
      <div className="flex-1 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start gap-3 md:gap-4">
          <div>
            <h3 className="text-xl md:text-2xl text-white font-medium leading-tight mb-2 tracking-wide group-hover:text-primary transition-colors duration-300">
              {item.name}
            </h3>
            <p className="text-text-muted text-xs md:text-sm mb-1.5 font-medium">{item.material}</p>
            <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase">Ref. {item.reference}</p>
          </div>
          <p className="md:hidden text-white font-medium text-base md:text-lg">${item.price.toLocaleString()}</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mt-6 md:mt-8 lg:mt-0">
          <div className="flex flex-col gap-2 md:gap-3">
            <span className="text-[9px] md:text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold">Quantity</span>
            <div className="flex items-center bg-background-dark border border-white/10 rounded-full p-1 w-fit group-hover:border-primary/40 transition-colors duration-300">
              <button
                onClick={handleDecrease}
                className="size-10 md:size-9 rounded-full flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all active:scale-90 min-h-[44px] min-w-[44px]"
              >
                <span className="material-symbols-outlined text-base">remove</span>
              </button>
              <input
                className="w-12 bg-transparent border-none text-center text-white p-0 text-sm md:text-base font-medium focus:ring-0 cursor-default"
                type="number"
                value={quantity}
                readOnly
              />
              <button
                onClick={handleIncrease}
                className="size-10 md:size-9 rounded-full flex items-center justify-center text-background-dark bg-white hover:bg-primary transition-all shadow-lg hover:shadow-primary/20 active:scale-90 transform min-h-[44px] min-w-[44px]"
              >
                <span className="material-symbols-outlined text-base font-bold">add</span>
              </button>
            </div>
          </div>
          <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end gap-2 md:gap-2">
            <p className="hidden md:block text-xl md:text-2xl text-white font-light mb-1">${item.price.toLocaleString()}</p>
            <button
              onClick={handleRemove}
              className="flex items-center gap-2 text-[10px] md:text-xs font-medium tracking-wide text-red-400/60 hover:text-red-400 transition-colors group/delete px-3 py-2 rounded-lg hover:bg-red-400/10 min-h-[44px]"
            >
              <span className="material-symbols-outlined text-base md:text-[18px] transition-transform duration-300 group-hover/delete:rotate-12 group-hover/delete:scale-110">
                delete
              </span>
              <span>Remove Item</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

