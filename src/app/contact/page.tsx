import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white overflow-x-hidden antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <Header />
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 md:px-6 py-8 md:py-10 lg:py-12">
        {/* Hero Section */}
        <div className="mb-8 md:mb-10 lg:mb-12 border-b border-white/5 pb-6 md:pb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 md:mb-3 tracking-tight">Contact Us</h1>
          <p className="text-text-muted flex items-center gap-2 text-sm md:text-base">
            <span className="size-1.5 rounded-full bg-primary inline-block"></span>
            We're here to help you find the perfect piece
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Contact Form */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-xl md:text-2xl font-light text-white mb-4 md:mb-6">Send us a Message</h2>
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm text-text-muted mb-2 uppercase tracking-wider">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-accent-dark/40 border border-white/5 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors min-h-[44px] text-sm md:text-base"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm text-text-muted mb-2 uppercase tracking-wider">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-accent-dark/40 border border-white/5 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors min-h-[44px] text-sm md:text-base"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs md:text-sm text-text-muted mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    className="w-full bg-accent-dark/40 border border-white/5 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors min-h-[44px] text-sm md:text-base"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm text-text-muted mb-2 uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-accent-dark/40 border border-white/5 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors min-h-[44px] text-sm md:text-base"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm text-text-muted mb-2 uppercase tracking-wider">Subject</label>
                  <select className="w-full bg-accent-dark/40 border border-white/5 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white focus:border-primary/50 focus:outline-none transition-colors min-h-[44px] text-sm md:text-base">
                    <option value="">Select a subject</option>
                    <option value="inquiry">Product Inquiry</option>
                    <option value="custom">Custom Design</option>
                    <option value="service">Service Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs md:text-sm text-text-muted mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={6}
                    className="w-full bg-accent-dark/40 border border-white/5 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors resize-none text-sm md:text-base"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-hover text-background-dark font-bold py-3 md:py-4 rounded-lg md:rounded-xl flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] min-h-[44px] text-sm md:text-base"
                >
                  <span className="material-symbols-outlined text-lg md:text-[20px]">send</span>
                  <span className="tracking-wide">Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-xl md:text-2xl font-light text-white mb-4 md:mb-6">Get in Touch</h2>
              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center min-h-[44px] min-w-[44px]">
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Visit Our Boutiques</h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      123 Luxury Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center min-h-[44px] min-w-[44px]">
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl">call</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2 text-sm md:text-base">Phone</h3>
                    <p className="text-text-muted text-xs md:text-sm">
                      <a href="tel:+15551234567" className="hover:text-primary transition-colors min-h-[44px] flex items-center">
                        +1 (555) 123-4567
                      </a>
                    </p>
                    <p className="text-text-muted text-[10px] md:text-xs mt-1">Mon-Fri: 10AM - 7PM EST</p>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center min-h-[44px] min-w-[44px]">
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl">mail</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2 text-sm md:text-base">Email</h3>
                    <p className="text-text-muted text-xs md:text-sm">
                      <a href="mailto:info@luxejewelry.com" className="hover:text-primary transition-colors min-h-[44px] flex items-center">
                        info@luxejewelry.com
                      </a>
                    </p>
                    <p className="text-text-muted text-[10px] md:text-xs mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center min-h-[44px] min-w-[44px]">
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl">schedule</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2 text-sm md:text-base">Book an Appointment</h3>
                    <p className="text-text-muted text-xs md:text-sm mb-3 md:mb-4">
                      Schedule a private consultation with our jewelry experts
                    </p>
                    <button className="px-5 md:px-6 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary text-xs md:text-sm font-medium rounded-lg transition-colors min-h-[44px]">
                      Schedule Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6 md:pt-8 border-t border-white/5">
              <h3 className="text-white font-medium mb-3 md:mb-4 text-sm md:text-base">Follow Us</h3>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="#"
                  className="w-11 h-11 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all min-h-[44px] min-w-[44px]"
                >
                  <span className="material-symbols-outlined text-base md:text-lg">public</span>
                </a>
                <a
                  href="#"
                  className="w-11 h-11 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all min-h-[44px] min-w-[44px]"
                >
                  <span className="material-symbols-outlined text-base md:text-lg">photo_camera</span>
                </a>
                <a
                  href="#"
                  className="w-11 h-11 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all min-h-[44px] min-w-[44px]"
                >
                  <span className="material-symbols-outlined text-base md:text-lg">share</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

