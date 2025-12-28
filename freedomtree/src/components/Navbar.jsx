import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* TOP SALE BAR */}
      <div className="bg-black text-white text-center text-sm py-2">
        Seasons Settings Sale –{" "}
        <span className="underline cursor-pointer">
          Ceramic Dinnerware From 20% OFF
        </span>
      </div>

      {/* MAIN HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* SEARCH */}
          <div className="flex items-center border px-3 py-2 w-72">
            <input
              type="text"
              placeholder="Search our store"
              className="outline-none w-full text-sm"
            />
            <Search size={18} />
          </div>

          {/* LOGO */}
          <div className="text-3xl font-extrabold tracking-wide">
            FREEDOM <span className="font-black">TREE</span>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1 cursor-pointer">
              INDIA - INR <ChevronDown size={16} />
            </div>
            <User className="cursor-pointer" />
            <ShoppingBag className="cursor-pointer" />
          </div>

        </div>

        {/* INFO LINKS */}
        <div className="text-sm text-center py-3 border-t">
          <span className="mx-3 cursor-pointer">15 YEAR JOURNEY</span> |
          <span className="mx-3 cursor-pointer">OUR WORLD</span> |
          <span className="mx-3 cursor-pointer">OUR STORES</span> |
          <span className="mx-3 cursor-pointer">FREE DESIGN SERVICES</span> |
          <span className="mx-3 cursor-pointer">PROFESSIONALS</span> |
          <span className="mx-3 cursor-pointer">CONTACT US</span>
        </div>
      </div>

      {/* CATEGORY NAVBAR */}
      <div className="bg-[#4b5563]">
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
    </>
  );
};

export default Navbar;
