import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white overflow-x-hidden antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <Header />
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-6 py-12">
        <div className="mb-12 border-b border-white/5 pb-8">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-3 tracking-tight">My Account</h1>
          <p className="text-text-muted flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary inline-block"></span>
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Account Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-accent-dark/40 rounded-2xl p-6 border border-white/5 sticky top-32">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">account_circle</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">John Doe</h3>
                  <p className="text-text-muted text-sm">john.doe@example.com</p>
                </div>
              </div>
              <nav className="space-y-2">
                <Link
                  href="/account"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">person</span>
                  <span>Profile</span>
                </Link>
                <Link
                  href="/account/orders"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">receipt_long</span>
                  <span>Orders</span>
                </Link>
                <Link
                  href="/favorites"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">favorite</span>
                  <span>Favorites</span>
                </Link>
                <Link
                  href="/account/addresses"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">home</span>
                  <span>Addresses</span>
                </Link>
                <Link
                  href="/account/settings"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">settings</span>
                  <span>Settings</span>
                </Link>
              </nav>
            </div>
          </div>

          {/* Account Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Information */}
            <div className="bg-accent-dark/40 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-light text-white mb-6">Profile Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-text-muted mb-2 uppercase tracking-wider">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full bg-background-dark border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-text-muted mb-2 uppercase tracking-wider">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full bg-background-dark border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full bg-background-dark border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-2 uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full bg-background-dark border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-2 uppercase tracking-wider">Date of Birth</label>
                  <input
                    type="date"
                    className="w-full bg-background-dark border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary hover:bg-primary-hover text-background-dark font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Save Changes
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-accent-dark/40 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-light text-white mb-6">Recent Orders</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background-dark/50 rounded-lg border border-white/5">
                  <div>
                    <p className="text-white font-medium">Order #12345</p>
                    <p className="text-text-muted text-sm">Placed on January 15, 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">$2,400.00</p>
                    <p className="text-primary text-sm">Delivered</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-background-dark/50 rounded-lg border border-white/5">
                  <div>
                    <p className="text-white font-medium">Order #12344</p>
                    <p className="text-text-muted text-sm">Placed on January 10, 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">$1,850.00</p>
                    <p className="text-primary text-sm">Shipped</p>
                  </div>
                </div>
              </div>
              <Link
                href="/account/orders"
                className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors"
              >
                <span>View All Orders</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

