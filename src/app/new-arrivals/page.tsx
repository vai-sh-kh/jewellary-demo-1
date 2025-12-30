import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { SlidersHorizontal, ChevronDown, Gem } from "lucide-react";

export default function NewArrivalsPage() {
  return (
    <div className="bg-background-dark font-sans text-white overflow-x-hidden antialiased selection:bg-primary/30 selection:text-white min-h-screen flex flex-col">
      <Header />
      <ScrollAnimation animation="fadeInUp">
        <section className="relative w-full overflow-hidden h-[45vh] md:h-[50vh] lg:h-[55vh] min-h-[400px] md:min-h-[450px] lg:min-h-[500px]">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2QVmxViLOCAMEAczUllpj-BaN3R58dNJQAZ499j2AMV8UVnUxAc9Xsqit7-c40bd3-awAuqYNuUgJK6-gPIRmHxErYiLEyRhfI8uymfJ2bikmy7Xkcz_H77c9yAx9sYajxnyB4fcRGEwdxDQSda8a12C9aVxvQkhxDgKZ3TapqZ-T5R7zh3WztYMrQHCJx04cvQxjzfRhpi8NjZGn_N-pN2nMRqNJbTq52zZgru_EXNdOVyRPuECPIRX2J2U_uXWtuqivjKvACLM')",
            }}
          ></div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
            <span className="mb-4 md:mb-6 flex flex-col items-center gap-3 md:gap-4">
              <span className="h-6 md:h-8 w-[1px] bg-primary/60"></span>
              <span className="font-sans text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                The 2024 Collection
              </span>
            </span>
            <h1 className="mb-4 md:mb-6 font-serif text-[clamp(2.5rem,7vw,5rem)] font-medium text-white leading-none tracking-tight">
              Legacy{" "}
              <i className="font-serif italic text-primary-light">Reborn</i>
            </h1>
            <p className="max-w-lg text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-white/80 leading-relaxed px-2">
              Where ancient craftsmanship meets modern desire
            </p>
          </div>
        </section>
      </ScrollAnimation>
      <div className="sticky top-16 md:top-20 lg:top-24 z-40 w-full bg-background-dark/95 backdrop-blur-md border-b border-white/5 py-3 md:py-4 lg:py-6 transition-all duration-300">
        <div className="mx-auto flex max-w-[1600px] flex-col md:flex-row items-center justify-between px-4 md:px-6 lg:px-12 gap-4 md:gap-6">
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            <button className="text-white border-b border-primary pb-1 text-xs md:text-sm font-serif italic tracking-wide min-h-[44px] flex items-center whitespace-nowrap">
              All Arrivals
            </button>
            <button className="text-white/40 hover:text-white text-xs md:text-sm font-serif tracking-wide transition-colors whitespace-nowrap min-h-[44px] flex items-center">
              Necklaces
            </button>
            <button className="text-white/40 hover:text-white text-xs md:text-sm font-serif tracking-wide transition-colors whitespace-nowrap min-h-[44px] flex items-center">
              Rings
            </button>
            <button className="text-white/40 hover:text-white text-xs md:text-sm font-serif tracking-wide transition-colors whitespace-nowrap min-h-[44px] flex items-center">
              Earrings
            </button>
            <button className="text-white/40 hover:text-white text-xs md:text-sm font-serif tracking-wide transition-colors whitespace-nowrap min-h-[44px] flex items-center">
              Bracelets
            </button>
            <button className="text-white/40 hover:text-white text-xs md:text-sm font-serif tracking-wide transition-colors whitespace-nowrap min-h-[44px] flex items-center">
              Objets d&apos;Art
            </button>
          </div>
          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-between md:justify-end border-t border-white/5 pt-3 md:pt-4 md:border-t-0 md:pt-0">
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/30 hidden lg:block">
              42 Items
            </span>
            <div className="flex gap-3 md:gap-4">
              <button className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white hover:text-primary transition-colors min-h-[44px]">
                <SlidersHorizontal className="w-4 h-4 md:w-[16px] md:h-[16px]" />
                Filter
              </button>
              <button className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white hover:text-primary transition-colors min-h-[44px]">
                Sort
                <ChevronDown className="w-4 h-4 md:w-[16px] md:h-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="mx-auto flex w-full max-w-[1600px] flex-col px-4 md:px-6 py-10 md:py-12 lg:py-16 lg:px-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-12 lg:gap-x-12 lg:gap-y-20 xl:gap-y-28">
          {[
            {
              title: "Celestial Pendant",
              subtitle: "18k Gold & Diamonds",
              price: "$2,400",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U",
              badge: "New",
            },
            {
              title: "Eternity Bangle",
              subtitle: "24k Hammered Gold",
              price: "$5,200",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBEVvepFADE_UumZT2VDVYmV41mRiRoC9tQx0xYyeQjWkkHG_XgmYXQThVfYLm9EZqtxrf4tz1inPsAw4WE4OmWI0IFQzucFU9yRpK31OoGoIPPy1gpD6WXlDefjCXXBlW4ETSIo09PTAr9OB5EFxenVkd3pliZZuxSYelnMipT0Lx6nI9JavkCnCJwUJ8z8-wV1_TnxzbkBx8vYredEWA2sDA23SLsVP5AWSl_7UHSusLwLNcI8hSVr__PztoklsWg30Zrmfq0wkk",
              mt: "md:mt-12",
            },
            {
              title: "Radiance Solitaire",
              subtitle: "Platinum & Diamond",
              price: "$8,900",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJLaIEuPEFJixqYVqm2BIPrrQca-oKskPWBrzXoTA3x1elmQSgguNHCC2Bg2g6EV2Gn69BEghHfjqp-yr5YE0wgippByTcx213g4il3K2mWwE5i-_wl9w8794kvMONRhHqAFUqZyv-h9kDGlB4yOEZZee9YGko1ItavblnHwn9BWhpn-g9wk3AHaxz051XVMoXx4jRJLvZIWhxRHAATu6yDnTcPtFrQxrZU_MP6B3423u8CbotHeWVvcHrzzqHmuWPoPMh0gzFOI",
              badge: "Rare",
              mt: "lg:mt-32",
            },
            {
              title: "Aura Hoops",
              subtitle: "18k Rose Gold",
              price: "$1,850",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCSSE_ewOI2HSQB04rsntQKaEMiiW61Uk_C-GlrRxRwhiIOoi5fOoK_s3VPCWtRJTbO0OPdmfgjTHHFEu-WiTPv4P5tW5mRNbIY7WEB8FlEb1kRnEgoK5FwhtU3ICDtVCw_W7xA2wCDbP_k_Cj4akj4Xtzoqu23zR9lczxcYlaNZegXTBsDMOTHbsIhrK8FGac3COmfzuFQMukv3rBbtG6iIl52nZPvHj9qwdc0FATsDHba4QUYwpchOgbb99DoICZnOGv8robuQcU",
            },
            {
              title: "Heritage Timepiece",
              subtitle: "Swiss Movement",
              price: "$12,500",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDfURgwQCUs2JrISBCmfwL8U3uL-3TcjeH0Zhq_qcjcKzTD1VbPRlJ5-vdML0mK-TJNLdAkO6zHAjCzGp1pIT_HdyNn1n5EBOWSyrupkKPUvzPXKzqUbQK00CiVkHYWwe2lxUGE9Gska4pbOzfKBJvnJWqxw0P2gdYpvHaTeA09PK9eJLlqlKCosLIdgcb61xlpZb6UMxVMA2pFiPbxzTOAB7EkFRl8pKI3LaGriNdGWYBazqlYFDVEQfFsIEi_vF-JwpqigW2Jqdw",
              badge: "New",
              mt: "md:mt-12",
            },
          ].map((item, index) => (
            <ScrollAnimation
              key={index}
              animation="fadeInUp"
              delay={index * 100}
              className={`group flex flex-col gap-5 cursor-pointer ${
                item.mt || ""
              }`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-dark">
                {item.badge && (
                  <div className="absolute left-4 top-4 z-20">
                    <span
                      className={`${
                        item.badge === "Rare"
                          ? "bg-primary text-black"
                          : "bg-white/90 backdrop-blur-sm text-black"
                      } px-3 py-1 text-[9px] font-bold uppercase tracking-widest`}
                    >
                      {item.badge}
                    </span>
                  </div>
                )}
                <img
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-3 md:p-4 translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 py-2 md:py-3 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all min-h-[44px]">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="text-center flex flex-col items-center gap-1">
                <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[10px] md:text-xs text-white/40 font-serif italic tracking-wide">
                  {item.subtitle}
                </p>
                <p className="mt-1 text-xs md:text-sm font-sans font-medium text-primary">
                  {item.price}
                </p>
              </div>
            </ScrollAnimation>
          ))}
          <ScrollAnimation
            animation="fadeInUp"
            delay={500}
            className="relative flex flex-col justify-end overflow-hidden aspect-[4/5] md:aspect-auto lg:aspect-[4/5] bg-surface-dark group cursor-pointer lg:mt-0"
          >
            <img
              alt="Abstract Luxury Texture"
              className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-[3s] group-hover:scale-110 grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2QVmxViLOCAMEAczUllpj-BaN3R58dNJQAZ499j2AMV8UVnUxAc9Xsqit7-c40bd3-awAuqYNuUgJK6-gPIRmHxErYiLEyRhfI8uymfJ2bikmy7Xkcz_H77c9yAx9sYajxnyB4fcRGEwdxDQSda8a12C9aVxvQkhxDgKZ3TapqZ-T5R7zh3WztYMrQHCJx04cvQxjzfRhpi8NjZGn_N-pN2nMRqNJbTq52zZgru_EXNdOVyRPuECPIRX2J2U_uXWtuqivjKvACLM"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/20 to-background-dark"></div>
            <div className="relative z-10 p-10 text-center">
              <span className="mb-4 block text-[9px] font-bold uppercase tracking-[0.3em] text-primary">
                Our Philosophy
              </span>
              <h3 className="mb-6 font-serif text-3xl italic text-white leading-tight">
                Art of <br />
                Detail
              </h3>
              <span className="inline-block border-b border-white/30 pb-1 text-[9px] font-bold uppercase tracking-widest text-white group-hover:border-primary group-hover:text-primary transition-colors">
                Read The Journal
              </span>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animation="fadeInUp"
            delay={600}
            className="group relative overflow-hidden bg-surface-light md:col-span-2 lg:col-span-2 aspect-[16/9] md:aspect-auto lg:h-[650px] flex items-center"
          >
            <div className="absolute inset-0 w-full h-full">
              <img
                alt="Model wearing gold choker"
                className="h-full w-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105 opacity-70 group-hover:opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6BxJ2gcD1U_l6JmkKOFDt4dK32w0pq13eIz8YENvebODlT21KufgA4q6YtFGU3Zz-r6_CJ_7Mmzm1fsx6jTJ2q957aPgMwup8Pd5lgKjIXGxaDkKcjb-Ge1eWYnsopz8e_16a5Zh8XRH6Qynbfn0tQ1_dOXa9FDhPEQuvJaz63jBq0f0YJ9zkNfEtrY6j3k7MbomztnM2CEVXq8-N6JkD4a0if0sRnYPhLgLpgm_6LZmnaPm-RCQqI0uI0mhZAiTts9B98-B1MwY"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/30 to-transparent"></div>
            </div>
            <div className="relative z-10 p-8 md:p-16 max-w-lg">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-8 bg-primary"></span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-text-gold">
                  Collection Highlight
                </span>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[0.9]">
                The Maharani <br />
                <i className="text-primary-light font-light italic">Choker</i>
              </h3>
              <p className="text-text-gold/70 mb-10 leading-relaxed font-serif text-lg md:text-xl font-light">
                Inspired by the opulent jewelry of ancient queens. A statement
                of power and delicate femininity, crafted in 22k gold.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <button className="bg-white text-black px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-primary hover:text-white transition-colors duration-300">
                  Shop This Look
                </button>
                <span className="font-serif text-2xl italic text-white">
                  $950
                </span>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animation="fadeInUp"
            delay={700}
            className="flex flex-col items-center justify-center p-8 border border-white/5 bg-gradient-to-br from-surface-dark to-black md:aspect-[4/5] lg:aspect-auto"
          >
            <div className="mb-8 p-4 rounded-full border border-primary/20 bg-primary/5">
              <Gem className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-3xl italic text-white text-center mb-4">
              Bespoke
              <br />
              Commission
            </h3>
            <p className="text-sm text-center text-white/50 mb-8 max-w-[240px] leading-relaxed font-light">
              Create a unique heirloom. Our master artisans are ready to bring
              your vision to life.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/30 pb-1 hover:text-primary hover:border-primary transition-colors">
              Inquire Now
            </button>
          </ScrollAnimation>
        </div>
        <div className="mt-16 md:mt-24 lg:mt-32 flex flex-col items-center gap-4 md:gap-6">
          <span className="text-[10px] md:text-xs font-serif italic text-white/40">
            Displaying 1-6 of 42 New Arrivals
          </span>
          <div className="h-[1px] w-24 md:w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <button className="group flex items-center gap-2 md:gap-3 bg-transparent border border-white/10 px-8 md:px-12 py-3 md:py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-white hover:border-primary hover:text-primary transition-all duration-300 min-h-[44px]">
            View All Collection
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
