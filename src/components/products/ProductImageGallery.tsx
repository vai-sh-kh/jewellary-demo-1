"use client";

import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="w-full lg:w-[60%] flex flex-col bg-surface-dark/30">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-full group overflow-hidden cursor-zoom-in"
          onMouseEnter={() => setSelectedImage(index)}
        >
          <div className="aspect-[4/5] lg:aspect-[1/1.1] xl:aspect-[1/1.2] w-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-in-out group-hover:scale-110 will-change-transform"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </div>
          <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <span className="bg-black/40 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 border border-white/10">
              Zoom
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

