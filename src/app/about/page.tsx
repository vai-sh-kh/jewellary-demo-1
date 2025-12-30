import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { timelineEvents, processSteps } from "@/constants/data";
import { ChevronRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-x-hidden selection:bg-primary selection:text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full object-cover"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpqBwPaiX2RcpfgMfRo04uXHXcgX6U7-1xpA4r0HOEc04sxzLPGsskBI_OAcq5uKEeJ-F-_eEoXEOuvyzvONXcE6xFHKHG5drnzDgpkn7FVn9X0TNxKxrJ5vFLgzXUeOz_p1VKcswhBfD0wPAKiCm2UvrT7rMMimGbUeCPEX7Zs1FzPMa83BM6jM5r05n8tEIouAFvXTw5Ruwf3zo6aDdyI9OrGtYwPhYkP5FCSxcHIB2vn4Ad6KdD1vJLJsviLJ6vgQ-CIYnir2c')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background-dark"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center max-w-5xl pt-12 md:pt-16 lg:pt-20">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
              <div className="h-[1px] w-8 md:w-12 bg-primary/60"></div>
              <span className="text-primary tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase">Maison Fondée 1985</span>
              <div className="h-[1px] w-8 md:w-12 bg-primary/60"></div>
            </div>
            <h1 className="text-white text-[clamp(2.5rem,8vw,6rem)] font-serif font-medium leading-none tracking-tight mb-6 md:mb-8 drop-shadow-2xl opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] px-2">
              The Art of <br />
              <span className="italic text-primary/90">Adornment</span>
            </h1>
            <p className="text-gray-200 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10 lg:mb-12 text-balance opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards] px-2">
              We capture light, wrap it in gold, and craft legacies. <br className="hidden md:block" />
              Jewelry is not just an accessory, but a profound expression of the soul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
              <button className="px-8 md:px-10 py-3 md:py-4 bg-primary text-background-dark font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-[#ffb42e] transition-all duration-300 rounded-sm min-h-[44px]">
                Explore Our Heritage
              </button>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10 bg-background-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-dark/30 skew-x-12 transform translate-x-20"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="lg:col-span-5 space-y-6 md:space-y-8 lg:space-y-10">
              <div className="space-y-3 md:space-y-4">
                <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Our Philosophy</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.15]">
                  Beauty lies in the details often <span className="italic text-primary">unseen</span>.
                </h2>
              </div>
              <div className="space-y-4 md:space-y-6 text-text-secondary font-light text-base md:text-lg leading-relaxed">
                <p>
                  At Lumière, we pursue perfection not because it is expected, but because it is the only way we know
                  how to exist. Every curve, every setting, and every facet is deliberated upon with the patience of an
                  artist and the precision of an engineer.
                </p>
                <p>
                  In a world of mass production, we remain steadfast in our commitment to the slow, deliberate art of
                  hand-fabrication. Each piece is a dialogue between the master craftsman and the raw material.
                </p>
              </div>
              <div className="pt-4">
                <div
                  className="h-16 opacity-80 invert"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYADi-uRzRQsDXDpanFO1SqmcUC4yScAcZNmfo4BHs9wu-lq0fkdBu6gghyyr5Q_BliH_ppEeh8ot0X3jFSjkJjqH9465gMrLUTm2cWS0kW33h-8amVwn0M-3NMn7WBbl5gq-46vSYZz-HOJR7_u4ief6K04Mkt-sE1iSOvjx_S3fTXNuCDxXgYvDx02eTjJplSAkL_6440j3WgKEo45ZIQdOVaSldyyHEWupyR0NKK3g1i-OxEZY-wsU4riDHsPy9woCB9KBQJhQ')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <p className="text-sm text-text-secondary mt-2">Elena Vosque, Founder</p>
              </div>
            </div>
            <div className="lg:col-span-7 relative h-[600px] lg:h-[700px]">
              <div className="absolute right-0 top-0 w-5/6 h-5/6 rounded-sm overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBH434ZxOLyxJYrK3ToAhKEJ0uac1OgrDLiRGYkFRzPKQCFs332gtax6ekpOx6bRFNnk7CqOCu3fBFKUmMvklVSGV0Mof0otBI8WK1KPW1MEHHiJPnD_3cwd7XTSgv3OzK5V91luo3ZJFGBLKiS490DOBFNlIcJReXKlpdCDCNM-RkGAm4VHa0yrA6T9XUNtYnfPkTa-qp6LqNzZo1PFA38TLtsDgGxCfgbi4_9YC5tvuupFex1kXQk37_S6waDNDmaeGRh87ZIpwc')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div className="absolute left-0 bottom-0 w-1/2 h-1/2 rounded-sm overflow-hidden shadow-2xl border-4 border-background-dark z-20">
                <div
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxggxhfztzh4opyBTcMwW1Rlbb2Rw4lzJkUu_fbf2PHJX3MJ111mCB7rS57n5Eef9wKXGrSMEmdXBnu0BxWrR7LJBmXGaks2zF3SWESP09bqZlvVfEOvlOUM_5l4pouwJ81dEFdaLQoONX3xZA17n5Wc6NvWOlIHEbaIgRpicRNOQdy8p4J7zd-uCYz3dlLIe5pAwK22cq-KoPLSVURpnFP1BDu8P__3-t9cjmBjdbLLNdfpWxlQDcY3WyNH2EG3hjJ2yTHagoYu4')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-40 h-40 border border-primary/20 rounded-full z-0"></div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-[#14100c] border-y border-white/5">
          <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-7xl">
            <div className="text-center mb-12 md:mb-16 lg:mb-24">
              <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block">The Journey</span>
              <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-serif italic">A Legacy in Gold</h2>
            </div>
            <div className="relative space-y-32">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent z-0"></div>
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center group ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:text-right md:pr-16 order-2 md:order-${index % 2 === 0 ? "1" : "2"} pl-12 md:pl-0`}
                  >
                    <div className="inline-block mb-4">
                      <span className="text-6xl text-white/10 font-serif font-bold group-hover:text-primary/20 transition-colors duration-500">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-2xl text-white font-serif mb-4">{event.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{event.description}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -ml-[5px] w-[11px] h-[11px] rounded-full bg-primary border-4 border-[#14100c] z-10 top-0 md:top-1/2 md:-mt-[5px]"></div>
                  <div className={`order-1 md:order-${index % 2 === 0 ? "2" : "1"} pl-12 md:pl-16`}>
                    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-sm bg-surface-dark">
                      <div
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        style={{
                          backgroundImage: `url('${event.image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div className="absolute inset-0 border border-white/10"></div>
                      {event.location && (
                        <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 text-white text-xs uppercase tracking-widest backdrop-blur-sm">
                          {event.location}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-32 px-4 md:px-10 bg-surface-dark relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-5/12 relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <div
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_qelcwdBMneKYs6IAsXpZPgdmcvRCuxHMvpeu7DDmoOLi0xcGl3z5UJDIPzckVHzZ1g6DHRd9ccqnrgGt_2e8OAj9eXYuePlAEcF6dHxYpn4SqOQf1mHNBds0mcJpRJEI5jxFmTpnn8C3vpi5yFCbTWlKSblblB02Z1FWH8BgKBXzP9iFqwcswwAac5hOTQiVhnhd3k90eOay3JFDGEjsTqJTCSDAawiTSveJHiqGuayzS6MPNuIjJ5bQTGJnicUhg0g-5X5gDUk')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/40"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/40"></div>
              </div>
              <div className="w-full md:w-7/12 space-y-8">
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">The Visionary</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white">
                  "We don't just design jewelry. We capture moments."
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed font-light">
                  Elena Vosque has spent over three decades redefining the boundaries of haute joaillerie. Her approach
                  combines an architectural understanding of form with a poetic appreciation for light.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                  <div>
                    <span className="block text-3xl text-white font-serif mb-1">35+</span>
                    <span className="text-sm text-text-secondary uppercase tracking-wider">Years of Design</span>
                  </div>
                  <div>
                    <span className="block text-3xl text-white font-serif mb-1">12</span>
                    <span className="text-sm text-text-secondary uppercase tracking-wider">International Awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-background-dark">
          <div className="container mx-auto px-4 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Savoir-Faire</span>
                <h2 className="text-white text-4xl md:text-5xl font-serif">From Earth to Ether</h2>
                <p className="text-text-secondary mt-6 text-lg font-light">
                  Witness the journey of a Lumière creation, from the depths of the earth to the light of the atelier.
                </p>
              </div>
              <a
                href="#"
                className="hidden md:flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-primary hover:text-primary transition-colors mt-8 md:mt-0"
              >
                <span className="text-xs font-bold uppercase tracking-widest">Visit the Atelier</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.number} className={`group cursor-pointer ${index === 1 ? "mt-0 md:mt-16" : ""}`}>
                  <div className="relative h-[500px] overflow-hidden rounded-sm mb-6">
                    <div
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${step.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="text-primary font-mono text-sm mb-2 block">{step.number}.</span>
                      <h3 className="text-white text-2xl font-serif">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed pr-4">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-surface-dark border-t border-[#332919]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-white font-serif mb-8">Begin Your Legacy</h2>
            <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
              Whether you seek a piece from our collection or wish to commission a bespoke creation, we invite you to
              experience the extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-primary text-background-dark font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-[#ffb42e] transition-colors">
                View Collections
              </button>
              <button className="px-10 py-4 bg-transparent border border-[#483a23] text-white font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-[#483a23] transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="about" />
    </div>
  );
}

