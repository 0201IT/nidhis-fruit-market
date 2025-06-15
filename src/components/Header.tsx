
import { ShoppingCart, Heart, Search, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import AuthProfileMenu from "./AuthProfileMenu";
import { useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  {
    name: "Categories",
    href: "#",
    dropdown: [
      { name: "Dry Fruits", href: "/category/dry-fruits" },
      { name: "Spices", href: "#" },
      { name: "Gift Boxes", href: "#" },
      { name: "Combos", href: "#" },
      { name: "Superfoods", href: "#" },
      { name: "Bestsellers", href: "#" },
    ],
  },
  { name: "About Us", href: "#" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#" },
];

const CATEGORY_LINKS = [
  { name: "Diwali Gifting", slug: "diwali-gifting" },
  { name: "Dry Fruits Combo", slug: "dry-fruits-combo" },
  { name: "Festival Gifting", slug: "festival-gifting" },
  { name: "Flavour makhana", slug: "flavour-makhana" },
  { name: "Nidhis Dry Fruits", slug: "nidhis-dry-fruits" },
  { name: "Nidhis Spices", slug: "nidhis-spices" },
  { name: "Nidhis Whole Spices", slug: "nidhis-whole-spices" },
  { name: "Super Food", slug: "super-food" },
];

function CategoriesDropdown() {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-3 py-2 rounded-md font-medium hover:bg-neutral-100 transition-colors",
          open && "bg-neutral-100"
        )}
      >
        Categories
        <ChevronDown className="w-4 h-4 ml-0.5" />
      </button>
      {open && (
        <div className="absolute z-40 left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-neutral-200 animate-fade-in">
          <ul className="py-2">
            {CATEGORY_LINKS.map((item) => (
              <li key={item.slug}>
                <a
                  href={`/category/${item.slug}`}
                  className="block px-4 py-2 text-neutral-700 hover:bg-saffron/10 transition-colors"
                >
                  {item.name}
                </a>
                {item.slug !== CATEGORY_LINKS[CATEGORY_LINKS.length-1].slug && (
                  <div className="border-b border-neutral-200 ml-4 mr-4" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur shadow">
      <nav className="container max-w-[1400px] flex items-center justify-between py-3">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-playfair text-saffron font-bold tracking-tight"
          aria-label="Nidhis Dry Fruits Homepage"
        >
          <span role="img" aria-label="dry fruit">🥭</span>
          Nidhis
        </a>

        {/* Main Nav */}
        <div className="hidden md:flex items-center gap-2 font-medium text-neutral-700">
          <a href="/" className="px-3 py-2 hover:bg-neutral-100 rounded transition-colors">Home</a>
          <CategoriesDropdown />
          <a href="#" className="px-3 py-2 hover:bg-neutral-100 rounded transition-colors">About Us</a>
          <a href="/blog" className="px-3 py-2 hover:bg-neutral-100 rounded transition-colors">Blog</a>
          <a href="#" className="px-3 py-2 hover:bg-neutral-100 rounded transition-colors">Contact</a>
        </div>
        {/* Actions */}
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="hover:bg-neutral-100 p-2 rounded transition-colors text-saffron">
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Wishlist"
            className="hover:bg-neutral-100 p-2 rounded transition-colors text-saffron"
            onClick={() => navigate("/wishlist")}
          >
            <Heart className="w-5 h-5" />
          </button>
          <button
            aria-label="Cart"
            className="hover:bg-neutral-100 p-2 rounded transition-colors text-saffron relative"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart className="w-5 h-5" />
            {/* Cart badge comes from Cart component */}
          </button>
          {/* Account button navigates to /account */}
          <button
            aria-label="Account"
            className="hover:bg-neutral-100 p-2 rounded transition-colors text-saffron"
            onClick={() => navigate("/account")}
            tabIndex={0}
          >
            <User className="w-5 h-5" />
          </button>
          {/* Only display menu—not the account icon—here */}
          <AuthProfileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;

