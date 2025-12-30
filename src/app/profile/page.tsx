import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-white overflow-x-hidden antialiased selection:bg-primary/30 selection:text-white flex flex-col min-h-screen">
      <Header />
      <main className="mx-auto flex w-full max-w-[1600px] flex-col px-4 md:px-6 py-8 md:py-10 lg:py-12 lg:px-12 flex-grow">
        <ScrollAnimation animation="fadeInUp">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white mb-3 md:mb-4">My Account</h1>
            <p className="text-white/60 font-light max-w-2xl text-sm md:text-base">
              Welcome back, Eleanor. Manage your personal collection, orders, and account details.
            </p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-24 md:top-28 lg:top-32 space-y-1">
              <ScrollAnimation animation="fadeInLeft" delay={100}>
                <Link
                  href="#"
                  className="flex items-center justify-between w-full px-3 md:px-4 py-2.5 md:py-3 bg-surface-dark border-l-2 border-primary text-white min-h-[44px]"
                >
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Dashboard</span>
                  <span className="material-symbols-outlined text-base md:text-[18px]">dashboard</span>
                </Link>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInLeft" delay={150}>
                <Link
                  href="#"
                  className="flex items-center justify-between w-full px-3 md:px-4 py-2.5 md:py-3 text-white/60 hover:text-white hover:bg-surface-dark/50 transition-colors border-l-2 border-transparent hover:border-white/20 min-h-[44px]"
                >
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Order History</span>
                  <span className="material-symbols-outlined text-base md:text-[18px]">receipt_long</span>
                </Link>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInLeft" delay={200}>
                <Link
                  href="/gifts"
                  className="flex items-center justify-between w-full px-3 md:px-4 py-2.5 md:py-3 text-white/60 hover:text-white hover:bg-surface-dark/50 transition-colors border-l-2 border-transparent hover:border-white/20 min-h-[44px]"
                >
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Wishlist</span>
                  <span className="material-symbols-outlined text-base md:text-[18px]">favorite</span>
                </Link>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInLeft" delay={250}>
                <Link
                  href="#"
                  className="flex items-center justify-between w-full px-3 md:px-4 py-2.5 md:py-3 text-white/60 hover:text-white hover:bg-surface-dark/50 transition-colors border-l-2 border-transparent hover:border-white/20 min-h-[44px]"
                >
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Addresses</span>
                  <span className="material-symbols-outlined text-base md:text-[18px]">location_on</span>
                </Link>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInLeft" delay={300}>
                <Link
                  href="#"
                  className="flex items-center justify-between w-full px-3 md:px-4 py-2.5 md:py-3 text-white/60 hover:text-white hover:bg-surface-dark/50 transition-colors border-l-2 border-transparent hover:border-white/20 min-h-[44px]"
                >
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Account Details</span>
                  <span className="material-symbols-outlined text-base md:text-[18px]">person</span>
                </Link>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInLeft" delay={350}>
                <Link
                  href="#"
                  className="flex items-center justify-between w-full px-3 md:px-4 py-2.5 md:py-3 text-white/60 hover:text-white hover:bg-surface-dark/50 transition-colors border-l-2 border-transparent hover:border-white/20 mt-6 md:mt-8 min-h-[44px]"
                >
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Log Out</span>
                  <span className="material-symbols-outlined text-base md:text-[18px]">logout</span>
                </Link>
              </ScrollAnimation>
            </div>
          </aside>
          <div className="lg:col-span-9 space-y-12">
            <ScrollAnimation animation="fadeInUp" delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Total Orders", value: "12", icon: "shopping_bag", link: "View History" },
                  { label: "Wishlist Items", value: "5", icon: "favorite", link: "View Saved" },
                  { label: "Membership Tier", value: "Gold Elite", icon: "card_membership", link: "View Benefits" },
                ].map((stat, index) => (
                  <ScrollAnimation
                    key={index}
                    animation="scaleIn"
                    delay={200 + index * 100}
                    className="bg-surface-dark p-6 border border-white/5 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className={`material-symbols-outlined text-[64px] text-primary`}>{stat.icon}</span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">{stat.label}</p>
                    <p className="font-serif text-4xl text-white">{stat.value}</p>
                    <Link
                      href="#"
                      className="inline-block mt-4 text-[10px] font-bold uppercase tracking-widest text-primary border-b border-primary/30 hover:border-primary pb-0.5 transition-colors"
                    >
                      {stat.link}
                    </Link>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <section>
                <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
                  <h2 className="font-serif text-2xl text-white">Recent Orders</h2>
                  <Link
                    href="#"
                    className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                  >
                    View All
                  </Link>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Serenity Choker",
                      order: "#LX-88392",
                      date: "Oct 12, 2023",
                      price: "$950.00",
                      status: "Delivered",
                      statusColor: "green",
                      image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuB6BxJ2gcD1U_l6JmkKOFDt4dK32w0pq13eIz8YENvebODlT21KufgA4q6YtFGU3Zz-r6_CJ_7Mmzm1fsx6jTJ2q957aPgMwup8Pd5lgKjIXGxaDkKcjb-Ge1eWYnsopz8e_16a5Zh8XRH6Qynbfn0tQ1_dOXa9FDhPEQuvJaz63jBq0f0YJ9zkNfEtrY6j3k7MbomztnM2CEVXq8-N6JkD4a0if0sRnYPhLgLpgm_6LZmnaPm-RCQqI0uI0mhZAiTts9B98-B1MwY",
                    },
                    {
                      title: "Aura Hoops",
                      order: "#LX-88104",
                      date: "Sep 28, 2023",
                      price: "$1,850.00",
                      status: "Delivered",
                      statusColor: "white",
                      image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuCSSE_ewOI2HSQB04rsntQKaEMiiW61Uk_C-GlrRxRwhiIOoi5fOoK_s3VPCWtRJTbO0OPdmfgjTHHFEu-WiTPv4P5tW5mRNbIY7WEB8FlEb1kRnEgoK5FwhtU3ICDtVCw_W7xA2wCDbP_k_Cj4akj4Xtzoqu23zR9lczxcYlaNZegXTBsDMOTHbsIhrK8FGac3COmfzuFQMukv3rBbtG6iIl52nZPvHj9qwdc0FATsDHba4QUYwpchOgbb99DoICZnOGv8robuQcU",
                    },
                  ].map((order, index) => (
                    <ScrollAnimation
                      key={index}
                      animation="fadeInUp"
                      delay={500 + index * 100}
                      className="bg-surface-dark border border-white/5 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center opacity-80 hover:opacity-100 transition-opacity"
                    >
                      <div className="h-24 w-24 flex-shrink-0 bg-background-dark overflow-hidden border border-white/10">
                        <img alt={order.title} className="h-full w-full object-cover" src={order.image} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <div>
                            <h3 className="font-serif text-xl text-white">{order.title}</h3>
                            <p className="text-xs text-white/40 mt-1">
                              Order {order.order} • Placed on {order.date}
                            </p>
                          </div>
                          <div className="mt-2 md:mt-0 text-right">
                            <span className="text-sm font-bold text-white">{order.price}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center mt-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${
                              order.statusColor === "green"
                                ? "bg-green-900/20 text-green-400 border border-green-900/30"
                                : "bg-white/5 text-white/60 border border-white/10"
                            } text-[10px] font-bold uppercase tracking-widest`}
                          >
                            {order.statusColor === "green" && <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>}
                            {order.status}
                          </span>
                          {order.statusColor === "green" ? (
                            <>
                              <button className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                                Track Shipment
                              </button>
                              <button className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                                View Invoice
                              </button>
                            </>
                          ) : (
                            <button className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                              Buy Again
                            </button>
                          )}
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </section>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={700}>
              <section>
                <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
                  <h2 className="font-serif text-2xl text-white">Saved Collection</h2>
                  <Link
                    href="/gifts"
                    className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                  >
                    View All Wishlist
                  </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[
                    {
                      title: "Celestial Pendant",
                      price: "$2,400",
                      image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U",
                    },
                    {
                      title: "Radiance Solitaire",
                      price: "$8,900",
                      image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJLaIEuPEFJixqYVqm2BIPrrQca-oKskPWBrzXoTA3x1elmQSgguNHCC2Bg2g6EV2Gn69BEghHfjqp-yr5YE0wgippByTcx213g4il3K2mWwE5i-_wl9w8794kvMONRhHqAFUqZyv-h9kDGlB4yOEZZee9YGko1ItavblnHwn9BWhpn-g9wk3AHaxz051XVMoXx4jRJLvZIWhxRHAATu6yDnTcPtFrQxrZU_MP6B3423u8CbotHeWVvcHrzzqHmuWPoPMh0gzFOI",
                    },
                    {
                      title: "Heritage Timepiece",
                      price: "$12,500",
                      image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuDfURgwQCUs2JrISBCmfwL8U3uL-3TcjeH0Zhq_qcjcKzTD1VbPRlJ5-vdML0mK-TJNLdAkO6zHAjCzGp1pIT_HdyNn1n5EBOWSyrupkKPUvzPXKzqUbQK00CiVkHYWwe2lxUGE9Gska4pbOzfKBJvnJWqxw0P2gdYpvHaTeA09PK9eJLlqlKCosLIdgcb61xlpZb6UMxVMA2pFiPbxzTOAB7EkFRl8pKI3LaGriNdGWYBazqlYFDVEQfFsIEi_vF-JwpqigW2Jqdw",
                    },
                  ].map((item, index) => (
                    <ScrollAnimation
                      key={index}
                      animation="scaleIn"
                      delay={800 + index * 100}
                      className="group relative"
                    >
                      <div className="aspect-[4/5] bg-surface-dark overflow-hidden mb-3 relative">
                        <button className="absolute top-2 right-2 z-10 text-white/50 hover:text-red-500 transition-colors bg-black/20 backdrop-blur-sm p-1.5 rounded-full">
                          <span className="material-symbols-outlined text-[16px] fill-1">close</span>
                        </button>
                        <img
                          alt={item.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                          src={item.image}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button className="bg-white text-black px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-colors">
                            Add to Bag
                          </button>
                        </div>
                      </div>
                      <h4 className="font-serif text-lg text-white">{item.title}</h4>
                      <p className="text-xs font-bold text-primary mt-1">{item.price}</p>
                    </ScrollAnimation>
                  ))}
                  <ScrollAnimation animation="scaleIn" delay={1100}>
                    <Link
                      href="/products"
                      className="group relative flex flex-col h-full border border-dashed border-white/20 hover:border-primary/50 transition-colors bg-surface-dark/30 hover:bg-surface-dark p-4 items-center justify-center text-center aspect-[4/5] md:aspect-auto"
                    >
                      <span className="material-symbols-outlined text-4xl text-white/20 group-hover:text-primary/80 transition-colors mb-2">
                        add
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                        Discover More
                      </span>
                    </Link>
                  </ScrollAnimation>
                </div>
              </section>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={1200}>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                    <h2 className="font-serif text-2xl text-white">Personal Info</h2>
                    <button className="text-white/40 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                  </div>
                  <div className="bg-surface-dark border border-white/5 p-6 space-y-4">
                    {[
                      { label: "Name", value: "Eleanor Rigby" },
                      { label: "Email", value: "eleanor.r@example.com" },
                      { label: "Phone", value: "+1 (555) 123-4567" },
                      { label: "Birthday", value: "November 12" },
                    ].map((info, index) => (
                      <div key={index} className="grid grid-cols-3 gap-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-white/40">{info.label}</span>
                        <span className="col-span-2 text-sm text-white">{info.value}</span>
                      </div>
                    ))}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
                        Primary Address
                      </span>
                      <p className="text-sm text-white/80 leading-relaxed">
                        482 Madison Avenue
                        <br />
                        Penthouse Suite 4B
                        <br />
                        New York, NY 10022
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                    <h2 className="font-serif text-2xl text-white">Preferences</h2>
                  </div>
                  <div className="bg-surface-dark border border-white/5 p-6 h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Email Newsletter",
                          description: "Receive updates on new collections and exclusive events.",
                          checked: true,
                        },
                        {
                          title: "SMS Notifications",
                          description: "Get shipping updates directly to your phone.",
                          checked: false,
                        },
                      ].map((pref, index) => (
                        <div key={index} className="flex items-start justify-between">
                          <div>
                            <h4 className="text-sm font-bold text-white mb-1">{pref.title}</h4>
                            <p className="text-xs text-white/40">{pref.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              defaultChecked={pref.checked}
                              className="sr-only peer"
                              type="checkbox"
                            />
                            <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                          </label>
                        </div>
                      ))}
                      <div className="pt-4 border-t border-white/10">
                        <h4 className="text-sm font-bold text-white mb-3">Interests</h4>
                        <div className="flex flex-wrap gap-2">
                          {["Gold", "Platinum", "Watches", "Diamonds"].map((interest, index) => (
                            <span
                              key={index}
                              className={`px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-wider ${
                                interest === "Gold" || interest === "Diamonds"
                                  ? "text-primary"
                                  : "text-white hover:text-primary cursor-pointer transition-colors"
                              }`}
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={1300}>
              <section className="mt-8 bg-surface-dark/50 border border-white/5 p-6 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-full">
                    <span className="material-symbols-outlined text-white/60">lock</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Account Security</h4>
                    <p className="text-xs text-white/40 mt-1">Last password change: 3 months ago</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-colors">
                    Change Password
                  </button>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-red-400 border border-red-900/30 px-6 py-3 hover:bg-red-900/20 transition-colors">
                    Deactivate
                  </button>
                </div>
              </section>
            </ScrollAnimation>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

