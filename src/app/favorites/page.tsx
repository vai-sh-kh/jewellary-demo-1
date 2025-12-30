import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/constants/data";

export default function FavoritesPage() {
  // In a real app, this would come from user state/context
  const favoriteProducts = products.filter((p) => p.featured || p.id === "1" || p.id === "9" || p.id === "12");

  return (
    <div className="bg-background-light dark:bg-background-dark text-white overflow-x-hidden antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <Header />
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-6 py-12">
        <div className="mb-12 border-b border-white/5 pb-8">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-3 tracking-tight">My Favorites</h1>
          <p className="text-text-muted flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary inline-block"></span>
            {favoriteProducts.length} {favoriteProducts.length === 1 ? "item" : "items"} saved
          </p>
        </div>

        {favoriteProducts.length > 0 ? (
          <ProductGrid products={favoriteProducts} />
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 rounded-full bg-accent-dark/40 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-5xl">favorite_border</span>
            </div>
            <h2 className="text-2xl font-light text-white mb-4">No favorites yet</h2>
            <p className="text-text-muted mb-8 max-w-md">
              Start adding items to your favorites by clicking the heart icon on any product.
            </p>
            <a
              href="/products"
              className="px-8 py-3 bg-primary hover:bg-primary-hover text-background-dark font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Browse Products
            </a>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

