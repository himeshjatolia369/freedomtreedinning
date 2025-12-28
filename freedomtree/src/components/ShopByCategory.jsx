import { useRef, useState, useEffect } from "react";

const categories = [
  "Dinner Sets",
  "Plates and Platters",
  "Bowls",
  "Coffee Mugs",
  "Table linen",
  "Drinkware",
  "Serveware",
  "Dining Accessories",
];

export default function ShopByCategory() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 1
    );
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 300);
  };

  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4">Shop By Category</h2>

      <div className="relative">
        {/* LEFT ARROW */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       w-9 h-9 rounded-full border bg-white
                       flex items-center justify-center
                       hover:bg-black hover:text-white transition"
          >
            ‹
          </button>
        )}

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-hidden px-12"
        >
          {categories.map((item) => (
            <button
              key={item}
              className="
                px-8 py-3 min-h-[48px]
                border border-black
                text-[16px] font-medium tracking-wide
                whitespace-nowrap
                bg-white text-black
                hover:bg-black hover:text-white
                transition
              "
            >
              {item}
            </button>
          ))}
        </div>

        {/* RIGHT ARROW */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       w-9 h-9 rounded-full border bg-white
                       flex items-center justify-center
                       hover:bg-black hover:text-white transition"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}
