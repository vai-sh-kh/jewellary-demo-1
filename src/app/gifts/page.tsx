import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import Link from "next/link";
import { ChevronDown, X, Plus } from "lucide-react";

export default function GiftsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-white overflow-x-hidden antialiased selection:bg-primary/30 selection:text-white min-h-screen flex flex-col">
      <Header />
      <ScrollAnimation animation="fadeInUp">
        <section className="relative w-full overflow-hidden h-[30vh] md:h-[35vh] min-h-[250px] md:min-h-[300px]">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2QVmxViLOCAMEAczUllpj-BaN3R58dNJQAZ499j2AMV8UVnUxAc9Xsqit7-c40bd3-awAuqYNuUgJK6-gPIRmHxErYiLEyRhfI8uymfJ2bikmy7Xkcz_H77c9yAx9sYajxnyB4fcRGEwdxDQSda8a12C9aVxvQkhxDgKZ3TapqZ-T5R7zh3WztYMrQHCJx04cvQxjzfRhpi8NjZGn_N-pN2nMRqNJbTq52zZgru_EXNdOVyRPuECPIRX2J2U_uXWtuqivjKvACLM')",
            }}
          ></div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
            <span className="mb-3 md:mb-4 font-serif text-base md:text-lg lg:text-xl italic text-primary">
              Your Personal Curation
            </span>
            <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-medium text-white leading-none">
              Saved Masterpieces
            </h1>
          </div>
        </section>
      </ScrollAnimation>
      <div className="sticky top-16 md:top-20 lg:top-24 z-40 w-full bg-background-dark/95 backdrop-blur-md border-b border-white/5 py-4 md:py-5 lg:py-6 transition-all duration-300">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 md:px-6 lg:px-12">
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60">
            <span className="text-primary">5</span> Items Saved
          </div>
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            <Link
              href="/products"
              className="hidden sm:block text-[10px] md:text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              Continue Shopping
            </Link>
            <button className="group flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors min-h-[44px]">
              <span>Sort by: Date Added</span>
              <ChevronDown className="w-4 h-4 md:w-[18px] md:h-[18px] text-white/50 group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>
      <main className="mx-auto flex w-full max-w-[1600px] flex-col px-4 md:px-6 py-10 md:py-12 lg:py-16 lg:px-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-10 md:gap-y-12 lg:gap-y-16 xl:gap-y-20">
          {[
            {
              title: "Celestial Pendant",
              price: "$2,400",
              subtitle: "18k Gold & Diamonds",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U",
            },
            {
              title: "Eternity Bangle",
              price: "$5,200",
              subtitle: "24k Solid Gold",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBEVvepFADE_UumZT2VDVYmV41mRiRoC9tQx0xYyeQjWkkHG_XgmYXQThVfYLm9EZqtxrf4tz1inPsAw4WE4OmWI0IFQzucFU9yRpK31OoGoIPPy1gpD6WXlDefjCXXBlW4ETSIo09PTAr9OB5EFxenVkd3pliZZuxSYelnMipT0Lx6nI9JavkCnCJwUJ8z8-wV1_TnxzbkBx8vYredEWA2sDA23SLsVP5AWSl_7UHSusLwLNcI8hSVr__PztoklsWg30Zrmfq0wkk",
            },
            {
              title: "Radiance Solitaire",
              price: "$8,900",
              subtitle: "Platinum & Diamond",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJLaIEuPEFJixqYVqm2BIPrrQca-oKskPWBrzXoTA3x1elmQSgguNHCC2Bg2g6EV2Gn69BEghHfjqp-yr5YE0wgippByTcx213g4il3K2mWwE5i-_wl9w8794kvMONRhHqAFUqZyv-h9kDGlB4yOEZZee9YGko1ItavblnHwn9BWhpn-g9wk3AHaxz051XVMoXx4jRJLvZIWhxRHAATu6yDnTcPtFrQxrZU_MP6B3423u8CbotHeWVvcHrzzqHmuWPoPMh0gzFOI",
              badge: "New",
            },
            {
              title: "Aura Hoops",
              price: "$1,850",
              subtitle: "18k Rose Gold",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCSSE_ewOI2HSQB04rsntQKaEMiiW61Uk_C-GlrRxRwhiIOoi5fOoK_s3VPCWtRJTbO0OPdmfgjTHHFEu-WiTPv4P5tW5mRNbIY7WEB8FlEb1kRnEgoK5FwhtU3ICDtVCw_W7xA2wCDbP_k_Cj4akj4Xtzoqu23zR9lczxcYlaNZegXTBsDMOTHbsIhrK8FGac3COmfzuFQMukv3rBbtG6iIl52nZPvHj9qwdc0FATsDHba4QUYwpchOgbb99DoICZnOGv8robuQcU",
            },
            {
              title: "Heritage Timepiece",
              price: "$12,500",
              subtitle: "Gold & Leather",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDfURgwQCUs2JrISBCmfwL8U3uL-3TcjeH0Zhq_qcjcKzTD1VbPRlJ5-vdML0mK-TJNLdAkO6zHAjCzGp1pIT_HdyNn1n5EBOWSyrupkKPUvzPXKzqUbQK00CiVkHYWwe2lxUGE9Gska4pbOzfKBJvnJWqxw0P2gdYpvHaTeA09PK9eJLlqlKCosLIdgcb61xlpZb6UMxVMA2pFiPbxzTOAB7EkFRl8pKI3LaGriNdGWYBazqlYFDVEQfFsIEi_vF-JwpqigW2Jqdw",
            },
          ].map((item, index) => (
            <ScrollAnimation
              key={index}
              animation="fadeInUp"
              delay={index * 100}
              className="group flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-dark">
                <button
                  className="absolute top-4 right-4 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all border border-white/10"
                  title="Remove from wishlist"
                >
                  <X className="w-4 h-4 md:w-[16px] md:h-[16px]" />
                </button>
                {item.badge && (
                  <div className="absolute left-0 top-4 md:top-6 z-20 pointer-events-none">
                    <span className="bg-primary px-2 md:px-3 py-1 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-black">
                      {item.badge}
                    </span>
                  </div>
                )}
                <img
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">
                  {item.price}
                </p>
                <p className="mt-1 text-xs md:text-sm text-white/40 font-serif italic mb-4 md:mb-6">
                  {item.subtitle}
                </p>
                <button className="w-full sm:w-auto min-w-[200px] border border-white/20 bg-transparent py-2.5 md:py-3 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 min-h-[44px]">
                  Add to Bag
                </button>
              </div>
            </ScrollAnimation>
          ))}
          <ScrollAnimation
            animation="fadeInUp"
            delay={600}
            className="flex flex-col items-center justify-center p-6 md:p-8 border border-white/5 bg-white/5 aspect-[4/5] group hover:border-primary/30 transition-colors cursor-pointer"
          >
            <Plus className="w-8 h-8 md:w-[32px] md:h-[32px] text-white/30 group-hover:text-primary transition-colors mb-3 md:mb-4" />
            <h3 className="font-serif text-xl md:text-2xl italic text-white text-center mb-2">
              Discover More
            </h3>
            <p className="text-xs md:text-sm text-center text-white/40 mb-4 md:mb-6 max-w-xs leading-relaxed">
              Explore our latest collections to find your next heirloom.
            </p>
            <Link
              href="/products"
              className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/30 pb-1 group-hover:text-primary group-hover:border-primary transition-colors min-h-[44px] flex items-center"
            >
              Browse Shop
            </Link>
          </ScrollAnimation>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-24 flex flex-col items-center gap-3 md:gap-4">
          <div className="h-[1px] w-full max-w-xs bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <p className="text-[10px] md:text-xs font-serif italic text-white/40 mt-3 md:mt-4">
            Login to sync your wishlist across devices
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
