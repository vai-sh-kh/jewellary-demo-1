import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductImageGallery from "@/components/products/ProductImageGallery";
import { products, reviews, productSpecs } from "@/constants/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const productImages = product.images || [product.image];
  const productReviews = reviews;

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-sans overflow-x-hidden min-h-screen flex flex-col selection:bg-primary/30 selection:text-white">
      <Header variant="minimal" />
      <main className="flex-grow w-full mx-auto">
        <div className="flex flex-col lg:flex-row">
          <ProductImageGallery images={productImages} productName={product.name} />
          <div className="w-full lg:w-[40%] relative bg-background-dark border-l border-border-dark z-20">
            <div className="sticky top-[60px] md:top-[70px] lg:top-[85px] h-[calc(100vh-60px)] md:h-[calc(100vh-70px)] lg:h-[calc(100vh-85px)] overflow-y-auto px-4 py-6 md:px-6 md:py-8 lg:px-10 lg:py-10 xl:px-16 scrollbar-hide">
              <nav className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs tracking-widest text-text-gold/80 mb-6 md:mb-8 uppercase font-bold">
                <Link href="/products" className="hover:text-white transition-colors min-h-[44px] flex items-center">
                  Rings
                </Link>
                <span className="text-white/20">/</span>
                <Link href="/products" className="hover:text-white transition-colors min-h-[44px] flex items-center">
                  Engagement
                </Link>
                <span className="text-white/20">/</span>
                <span className="text-white min-h-[44px] flex items-center">Eclat Collection</span>
              </nav>
              <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8 lg:mb-10">
                <div className="flex flex-col gap-2">
                  <h1 className="text-[clamp(2rem,5vw,3.5rem)] text-white font-serif italic font-light tracking-wide leading-tight">
                    {product.name}
                  </h1>
                  <span className="text-lg md:text-xl lg:text-2xl text-white/90 font-serif font-light tracking-widest uppercase">
                    Diamond Ring
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 md:mt-4 border-b border-border-dark pb-4 md:pb-6">
                  <span className="text-xl md:text-2xl font-serif text-primary italic">
                    ${product.price.toLocaleString()}.00
                  </span>
                  {product.rating && (
                    <div className="flex items-center gap-2">
                      <div className="flex text-primary text-sm">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-[16px] fill-current">
                            {i < Math.floor(product.rating!) ? "star" : i < product.rating! ? "star_half" : "star"}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="#reviews"
                        className="text-xs font-bold uppercase tracking-widest text-text-body hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
                      >
                        {product.reviewsCount} Reviews
                      </Link>
                    </div>
                  )}
                </div>
                <p className="text-text-body leading-relaxed text-sm lg:text-base font-light font-serif mt-2">
                  {product.description}
                </p>
              </div>
              <div className="flex flex-col gap-6 md:gap-8 mb-6 md:mb-8 lg:mb-10">
                <div className="space-y-3 md:space-y-4">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white font-bold block mb-2 md:mb-3">Select Metal</span>
                  <div className="flex gap-3 md:gap-4">
                    <label className="cursor-pointer group relative">
                      <input defaultChecked className="peer sr-only" name="metal" type="radio" />
                      <div className="size-11 md:size-12 rounded-full bg-gradient-to-br from-[#E6C200] to-[#bfa300] ring-1 ring-offset-4 ring-offset-background-dark ring-transparent peer-checked:ring-primary transition-all opacity-80 peer-checked:opacity-100 hover:opacity-100 min-h-[44px] min-w-[44px]"></div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-white opacity-0 peer-checked:opacity-100 transition-opacity whitespace-nowrap">
                        Yellow Gold
                      </span>
                    </label>
                    <label className="cursor-pointer group relative">
                      <input className="peer sr-only" name="metal" type="radio" />
                      <div className="size-12 rounded-full bg-gradient-to-br from-[#E0E0E0] to-[#999999] ring-1 ring-offset-4 ring-offset-background-dark ring-transparent peer-checked:ring-primary transition-all opacity-80 peer-checked:opacity-100 hover:opacity-100"></div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-white opacity-0 peer-checked:opacity-100 transition-opacity whitespace-nowrap">
                        White Gold
                      </span>
                    </label>
                    <label className="cursor-pointer group relative">
                      <input className="peer sr-only" name="metal" type="radio" />
                      <div className="size-12 rounded-full bg-gradient-to-br from-[#F4C2C2] to-[#c48a8a] ring-1 ring-offset-4 ring-offset-background-dark ring-transparent peer-checked:ring-primary transition-all opacity-80 peer-checked:opacity-100 hover:opacity-100"></div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-white opacity-0 peer-checked:opacity-100 transition-opacity whitespace-nowrap">
                        Rose Gold
                      </span>
                    </label>
                  </div>
                </div>
                <div className="space-y-4 pt-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xs uppercase tracking-[0.2em] text-white font-bold">Ring Size</span>
                    <button className="text-[10px] uppercase tracking-widest text-text-gold hover:text-white border-b border-text-gold/50 hover:border-white pb-0.5 transition-all">
                      Size Guide
                    </button>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {[5, 6, 7, 8, 9].map((size) => (
                      <label key={size} className="cursor-pointer">
                        <input
                          defaultChecked={size === 7}
                          className="peer sr-only"
                          name="size"
                          type="radio"
                        />
                        <div className="h-12 w-full border border-border-dark flex items-center justify-center text-sm font-medium text-text-body peer-checked:bg-white peer-checked:text-background-dark peer-checked:border-white hover:border-primary hover:text-white transition-all duration-300">
                          {size}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 border-b border-border-dark pb-6 md:pb-8 lg:pb-10 mb-6 md:mb-8">
                <button className="w-full bg-primary hover:bg-primary-hover text-background-dark min-h-[44px] md:h-14 font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs transition-all duration-300 flex items-center justify-between px-6 md:px-8 group">
                  <span>Add to Cart</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 material-symbols-outlined text-xs md:text-sm">
                    arrow_forward
                  </span>
                </button>
                <button className="w-full bg-transparent hover:bg-surface-dark border border-border-dark text-white min-h-[44px] md:h-12 font-bold uppercase tracking-[0.15em] text-[9px] md:text-[10px] transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-xs md:text-sm">calendar_month</span>
                  Book a Consultation
                </button>
                <div className="flex items-center justify-center gap-6 mt-2">
                  <div className="flex items-center gap-2 text-text-body text-[10px] uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm text-primary">verified</span> Authentic
                  </div>
                  <div className="flex items-center gap-2 text-text-body text-[10px] uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm text-primary">local_shipping</span> Free Shipping
                  </div>
                  <div className="flex items-center gap-2 text-text-body text-[10px] uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm text-primary">package_2</span> Gift Box
                  </div>
                </div>
              </div>
              <div className="divide-y divide-border-dark">
                <details className="group cursor-pointer" open>
                  <summary className="flex items-center justify-between text-white py-5 hover:text-primary transition-colors">
                    <span className="font-serif italic text-lg tracking-wide">Product Specifications</span>
                    <span className="material-symbols-outlined font-light transition-transform duration-300 group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="pb-6 text-sm text-text-body font-light">
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                      <div className="col-span-1">
                        <span className="block text-[10px] uppercase tracking-widest text-text-gold mb-1">
                          Center Stone
                        </span>
                        <span className="text-white">{productSpecs.centerStone}</span>
                      </div>
                      <div className="col-span-1">
                        <span className="block text-[10px] uppercase tracking-widest text-text-gold mb-1">Origin</span>
                        <span className="text-white">{productSpecs.origin}</span>
                      </div>
                      <div className="col-span-1">
                        <span className="block text-[10px] uppercase tracking-widest text-text-gold mb-1">Clarity</span>
                        <span className="text-white">{productSpecs.clarity}</span>
                      </div>
                      <div className="col-span-1">
                        <span className="block text-[10px] uppercase tracking-widest text-text-gold mb-1">
                          Color Grade
                        </span>
                        <span className="text-white">{productSpecs.colorGrade}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="block text-[10px] uppercase tracking-widest text-text-gold mb-1">Band</span>
                        <span className="text-white">{productSpecs.band}</span>
                      </div>
                    </div>
                  </div>
                </details>
                <details className="group cursor-pointer">
                  <summary className="flex items-center justify-between text-white py-5 hover:text-primary transition-colors">
                    <span className="font-serif italic text-lg tracking-wide">Shipping & Returns</span>
                    <span className="material-symbols-outlined font-light transition-transform duration-300 group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="pb-6 text-sm text-text-body font-light leading-relaxed">
                    <p className="mb-2">
                      We provide complimentary insured overnight shipping on all domestic orders over $500. A signature
                      is required upon delivery.
                    </p>
                    <p>We accept returns for unworn items in original packaging within 30 days of delivery.</p>
                  </div>
                </details>
              </div>
              <div className="h-20"></div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-surface-dark border-t border-border-dark py-12 md:py-16 lg:py-24" id="reviews">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl text-white font-serif italic mb-10 md:mb-12 lg:mb-16 text-center">Client Experiences</h2>
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-24">
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-baseline gap-2 md:gap-3 mb-2">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-serif text-white">4.9</span>
                  <span className="text-text-gold font-serif text-xl md:text-2xl italic">Excellent</span>
                </div>
                <div className="flex text-primary mb-3 md:mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-current text-lg md:text-xl">
                      star
                    </span>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-text-body mb-6 md:mb-8">
                  Based on {product.reviewsCount || 124} verified reviews from our global clientele.
                </p>
                <button className="w-full md:w-auto px-6 md:px-8 border border-white/20 hover:border-white text-white py-3 font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs transition-colors min-h-[44px]">
                  Write a Review
                </button>
              </div>
              <div className="md:col-span-8 flex flex-col gap-6 md:gap-8 lg:gap-10">
                {productReviews.map((review) => (
                  <div
                    key={review.id}
                    className="group border-b border-border-dark pb-6 md:pb-8 lg:pb-10 last:border-0 hover:border-white/20 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="text-white font-serif text-base md:text-lg tracking-wide">{review.author}</span>
                        {review.verified && (
                          <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 uppercase tracking-widest font-bold">
                            Verified
                          </span>
                        )}
                      </div>
                      <span className="text-text-body text-xs uppercase tracking-widest">{review.date}</span>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">{review.title}</h4>
                    <div className="flex text-primary text-xs mb-4 gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[14px] fill-current">
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-text-body leading-relaxed font-light">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer variant="minimal" />
    </div>
  );
}

