import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import ScrollAnimation from "@/components/ScrollAnimation";
import { products, categoryImages } from "@/constants/data";
import Link from "next/link";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured);
  const categories = [
    { name: "Rings", image: categoryImages.rings },
    { name: "Necklaces", image: categoryImages.necklaces },
    { name: "Earrings", image: categoryImages.earrings },
    { name: "Bracelets", image: categoryImages.bracelets },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-sans overflow-x-hidden selection:bg-primary selection:text-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s]"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD41zwmUBR2sKx03yq26PfjzmH6O-ArbAOdqaJLWr2c_efEgWSWPodOFgTU0BSmKoI3Is4Jxzm0MmEY1Dah87-jWlsrvURAzL9XgMWSt5RY_Nqu2ZE__DaCD0-bqnOzNTmR_IH1X0tSYUOllsNqSOy_Y4BgpWn_hg9XSLJMiAdb1xTuvtlB9wkSOZbj49WdKVhIh9yD_KCgpD9wFjd86w6MCLXFceR7RfMWWTpXp268JLKZN2Hdht7nMwUaJsVKWP3ID7JAwA1AtBw')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
          </div>
          <div className="relative h-full w-full flex flex-col justify-end pb-12 md:pb-16 lg:pb-20 items-center text-center px-4">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <span className="text-primary tracking-[0.2em] text-xs md:text-sm font-bold uppercase mb-3 md:mb-4 block">
                The Fall Collection
              </span>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={100}>
              <h1 className="text-white font-serif italic text-[clamp(2.5rem,8vw,6rem)] font-medium leading-none tracking-tight mb-4 md:mb-6 max-w-4xl drop-shadow-2xl px-2">
                Elegance Etched in Gold
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <p className="text-white/90 text-base md:text-lg lg:text-xl font-light tracking-wide max-w-2xl mb-6 md:mb-8 lg:mb-10 leading-relaxed px-2">
                Discover a symphony of light and luxury, crafted for moments that last forever.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 w-full sm:w-auto px-4">
                <button className="group relative px-6 md:px-8 py-3 bg-white text-black text-xs md:text-sm uppercase tracking-widest font-bold overflow-hidden transition-all hover:bg-primary hover:text-white min-h-[44px]">
                  <span className="relative z-10">Explore Now</span>
                </button>
                <button className="group relative px-6 md:px-8 py-3 border border-white text-white text-xs md:text-sm uppercase tracking-widest font-bold overflow-hidden transition-all hover:bg-white hover:text-black min-h-[44px]">
                  <span className="relative z-10">View Film</span>
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Category Section */}
        <div className="relative w-full py-12 md:py-16 lg:py-20 bg-background-dark">
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <div className="flex justify-between items-end mb-8 md:mb-10 lg:mb-12">
                <div>
                  <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase block mb-2">Discover</span>
                  <h2 className="text-white font-serif text-3xl md:text-4xl lg:text-5xl italic">Shop by Category</h2>
                </div>
                <div className="hidden md:flex gap-3 md:gap-4">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all min-h-[44px] min-w-[44px]">
                    <span className="material-symbols-outlined text-lg md:text-xl">arrow_back</span>
                  </button>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all min-h-[44px] min-w-[44px]">
                    <span className="material-symbols-outlined text-lg md:text-xl">arrow_forward</span>
                  </button>
                </div>
              </div>
            </ScrollAnimation>
            <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar snap-x-mandatory pb-4 md:pb-6 lg:pb-8">
              {categories.map((category, index) => (
                <ScrollAnimation key={category.name} animation="fadeInUp" delay={index * 100}>
                  <Link
                    href="/products"
                    className="group min-w-[280px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[450px] md:h-[500px] lg:h-[550px] relative flex-shrink-0 snap-center overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${category.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <h3 className="text-white font-serif italic text-2xl md:text-3xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-xs md:text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-2">
                        Shop Collection <span className="material-symbols-outlined text-xs md:text-sm">arrow_forward</span>
                      </p>
                    </div>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>

        {/* Signature Collection Section */}
        <div className="relative w-full bg-[#111] overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <ScrollAnimation animation="fadeInLeft" delay={0} className="lg:w-1/2 relative min-h-[400px] md:min-h-[500px] lg:min-h-auto overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIJgl0fpnMmF3sXG6FhrQlAH-UUIkGF8L_aQVDbV6yh1pPlJZb5QnDUbGLF_ewKFbM5Fb210kwe43wDjZMrYgQycUHxv5A5NSnBnBTWSnsFuavsIjuwd7irnx5ba3kaD2bdB2XR6ctGqvxkPmz66-TJ0Qa-7wUddogWrvXiqZ2zXDL2O0Md4UnnCNnqKIZGmpmL5OsOxqP1URNd_Od-LD2kA7e8DWYvea9GReTJDXQlJv_iC8zj-c2cM1goMQCULpSlCP_S_SRDX4')",
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300 min-h-[44px] min-w-[44px]">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">play_arrow</span>
                </button>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInRight" delay={200} className="lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12 xl:p-24 bg-[#111]">
              <div className="max-w-lg">
                <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 md:mb-6 block">
                  Signature Collection
                </span>
                <h2 className="text-white font-serif italic text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-8 leading-[1.1]">
                  The Aurora <br />
                  Collection
                </h2>
                <div className="w-12 h-[1px] bg-primary/50 mb-6 md:mb-8"></div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-light">
                  Inspired by the ethereal dance of the northern lights, this collection features rare sapphires and
                  conflict-free diamonds. Each piece is a unique narrative of light, shadow, and brilliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <button className="text-white border-b border-primary pb-1 hover:text-primary transition-colors text-xs md:text-sm uppercase tracking-widest min-h-[44px] flex items-center">
                    View Lookbook
                  </button>
                  <button className="text-white border-b border-transparent pb-1 hover:border-white transition-colors text-xs md:text-sm uppercase tracking-widest min-h-[44px] flex items-center">
                    Shop The Pieces
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="relative w-full py-12 md:py-16 lg:py-24 bg-background-dark">
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 lg:mb-16">
                <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block">
                  Curated For You
                </span>
                <h2 className="text-white font-serif text-3xl md:text-4xl italic mb-3 md:mb-4">Timeless Treasures</h2>
                <p className="text-white/60 font-light text-sm md:text-base">Pieces that transcend trends, loved by our most discerning collectors.</p>
              </div>
            </ScrollAnimation>
            <ProductGrid products={featuredProducts} variant="featured" />
            <div className="flex justify-center mt-10 md:mt-12 lg:mt-16">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:text-primary hover:border-primary transition-all uppercase text-[10px] md:text-xs tracking-[0.2em] min-h-[44px]"
              >
                View All Bestsellers
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full bg-[#0a0a0a] border-t border-white/5 py-12 md:py-16 lg:py-24">
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-24">
              {[
                { icon: "diamond", title: "Ethical Sourcing", description: "We travel the globe to source gemstones with integrity, ensuring every sparkle is conflict-free and environmentally conscious." },
                { icon: "verified_user", title: "Lifetime Promise", description: "Our commitment to quality is unwavering. We offer a lifetime warranty on craftsmanship for every piece in our collection." },
                { icon: "local_shipping", title: "Discreet Delivery", description: "Enjoy complimentary insured shipping worldwide. Your luxury experience begins the moment you unbox." },
              ].map((feature, index) => (
                <ScrollAnimation
                  key={index}
                  animation="fadeInUp"
                  delay={index * 100}
                  className="flex flex-col gap-4 md:gap-6 text-center md:text-left group hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors mb-2 mx-auto md:mx-0 min-h-[44px] min-w-[44px]">
                    <span className={`material-symbols-outlined text-2xl md:text-3xl`}>{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl md:text-2xl italic mb-2 md:mb-3">{feature.title}</h4>
                    <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
