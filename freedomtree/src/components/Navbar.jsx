import { useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP SALE BAR */}
      <div className="bg-black text-white text-center text-xs sm:text-sm py-2">
        Seasons Settings Sale –{" "}
        <span className="underline cursor-pointer">
          Ceramic Dinnerware From 20% OFF
        </span>
      </div>

      {/* MAIN HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* LEFT: SEARCH (Desktop only) */}
          <div className="hidden lg:flex items-center border px-3 py-2 w-72">
            <input
              type="text"
              placeholder="Search our store"
              className="outline-none w-full text-sm"
            />
            <Search size={18} />
          </div>

          {/* CENTER: LOGO */}
          <div className="text-2xl lg:text-3xl font-extrabold tracking-wide">
            FREEDOM <span className="font-black">TREE</span>
          </div>

          {/* RIGHT: ICONS */}
          <div className="flex items-center gap-4 text-sm">
            <div className="hidden lg:flex items-center gap-1 cursor-pointer">
              INDIA - INR <ChevronDown size={16} />
            </div>
            <User className="cursor-pointer" />
            <ShoppingBag className="cursor-pointer" />

            {/* HAMBURGER (Mobile only) */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* INFO LINKS (Desktop only) */}
        <div className="hidden lg:block text-sm text-center py-3 border-t">
          <span className="mx-3 cursor-pointer">15 YEAR JOURNEY</span> |
          <span className="mx-3 cursor-pointer">OUR WORLD</span> |
          <span className="mx-3 cursor-pointer">OUR STORES</span> |
          <span className="mx-3 cursor-pointer">FREE DESIGN SERVICES</span> |
          <span className="mx-3 cursor-pointer">PROFESSIONALS</span> |
          <span className="mx-3 cursor-pointer">CONTACT US</span>
        </div>
      </div>

      {/* CATEGORY NAVBAR (Desktop only) */}
      <div className="hidden lg:block bg-[#4b5563]">
        <div className="max-w-7xl mx-auto px-6 flex items-center text-white">

          {/* NEST BADGE */}
          <div className="bg-[#d9a19c] px-6 py-4 font-semibold relative">
            NEST
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs px-1 rounded">
              New!
            </span>
          </div>

          {/* LINKS */}
          <div className="flex gap-8 px-6 font-semibold">
            <span className="cursor-pointer">Furniture</span>
            <span className="cursor-pointer">Furnishing</span>
            <span className="cursor-pointer">Dining</span>
            <span className="cursor-pointer">Decor & Lights</span>
            <span className="cursor-pointer">Clothing</span>
            <span className="cursor-pointer">Gifting</span>
            <span className="cursor-pointer">Sale</span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b shadow-md">
          <div className="flex flex-col gap-4 p-4 font-semibold">
            <span>Furniture</span>
            <span>Furnishing</span>
            <span>Dining</span>
            <span>Decor & Lights</span>
            <span>Clothing</span>
            <span>Gifting</span>
            <span>Sale</span>

            {/* Mobile Search */}
            <div className="flex items-center border px-3 py-2 mt-4">
              <input
                type="text"
                placeholder="Search our store"
                className="outline-none w-full text-sm"
              />
              <Search size={18} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
