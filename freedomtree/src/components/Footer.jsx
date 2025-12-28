import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t">

      {/* Newsletter Bar */}
      <div className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="tracking-widest text-sm">
            NOTIFY ME FOR LATEST UPDATES
          </p>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-b border-white px-2 py-1 outline-none text-sm"
            />
            <button className="border border-white px-4 py-1 text-sm">
              Subscribe
            </button>
          </div>

          <div className="flex gap-4 text-lg">
            <FaFacebookF />
            <FaPinterestP />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-sm">

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold tracking-widest mb-4">
            USEFUL LINKS
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Our Story</li>
            <li>Our Stores</li>
            <li>Inspiration</li>
            <li>Free Design Services</li>
            <li>For Professionals</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Shipping & Delivery</li>
            <li>Terms & Conditions</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Furniture */}
        <div>
          <h3 className="font-semibold tracking-widest mb-4">
            FURNITURE
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Seating</li>
            <li>Tables</li>
            <li>Storage</li>
            <li>Beds</li>
            <li>Ready to Ship</li>
            <li>Furniture Sale</li>
          </ul>
        </div>

        {/* Furnishing */}
        <div>
          <h3 className="font-semibold tracking-widest mb-4">
            FURNISHING
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Upholstery Fabrics</li>
            <li>Curtains & Sheers</li>
            <li>Cushions</li>
            <li>Bedding & Bed Linen</li>
            <li>Rugs & Throws</li>
            <li>Furnishing Sale</li>
          </ul>
        </div>

        {/* Dining */}
        <div>
          <h3 className="font-semibold tracking-widest mb-4">
            DINING
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Collections</li>
            <li>Plates & Platters</li>
            <li>Bowls & Dishes</li>
            <li>Trays & Stands</li>
            <li>Drinkware</li>
            <li>Flatware</li>
            <li>Accessories</li>
            <li>Table Linen</li>
            <li>Dining Sale</li>
          </ul>
        </div>

        {/* Decor & Lighting */}
        <div>
          <h3 className="font-semibold tracking-widest mb-4">
            DECOR & LIGHTING
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Table Accents</li>
            <li>Planters</li>
            <li>Vases</li>
            <li>Mirrors & Wall Art</li>
            <li>Fragrances & Candles</li>
            <li>Found Objects</li>
            <li>Wallpaper</li>
            <li>Lighting</li>
            <li>Decor Sale</li>
          </ul>
        </div>

        {/* Gifting */}
        <div>
          <h3 className="font-semibold tracking-widest mb-4">
            GIFTING
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Special Curated Gifts</li>
            <li>Wedding Gifts</li>
            <li>Gift Card</li>
            <li>Wrapping Paper</li>
            <li>Corporate Gifting</li>
            <li>Gifting Guide</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Content */}
    {/* Footer Bottom Content */}
<div className="border-t bg-white">
  <div className="max-w-[1400px] ml-24 pr-24 py-20">


    {/* Shipping & Returns */}
    <div className="w-full">

      <h3 className="text-[14px] tracking-[0.25em] text-[#545454] font-semibold mb-6">
        SHIPPING & RETURNS POLICY
      </h3>

      <p className="text-sm text-gray-700 leading-7 mb-6">
        We offer free shipping on most products, including furniture, for orders
        above Rs. 1999, across India. Our goal is to deliver your products within
        10–15 working days, although larger furniture items may take up to 6–8
        weeks for delivery. Freedom Tree’s return or exchange policy applies only
        in cases of damaged, defective, or incorrectly delivered products. In
        such cases, we will either exchange the product or provide you with store
        credit for the full amount paid. We maintain rigorous hygiene standards
        and regular sanitization procedures to ensure your safety.
      </p>

      <p className="text-sm underline cursor-pointer mb-2">
        Read more shipping and returns.
      </p>
      <p className="text-sm underline cursor-pointer">
        Review our privacy policy and terms and conditions.
      </p>
    </div>

    {/* Spacer */}
    <div className="h-20"></div>

    {/* Bringing You the Best */}
    <div className="w-full">
      <h3 className="text-[14px] tracking-[0.25em] text-[#545454] font-semibold mb-6">
        BRINGING YOU THE BEST OF HOME DECOR
      </h3>

      <p className="text-sm text-gray-700 leading-7">
        Good design, every day – exclusively curated by our design team for your
        happy home. Our collection includes everything from designer furniture
        and home furnishings to hand-painted dinnerware, as well as printed,
        woven, and solid fabrics – all available online with the click of a
        button or at our stores! We also offer a wide range of indoor lighting
        for your home and office, along with an impressive selection of cushion
        covers, curtains, bedcovers, rugs, blankets, and pillows for your space.
        Shop FT's signature and new-age designs online or in-store to experience
        a beautiful home décor story!
      </p>
    </div>

    {/* Spacer */}
    <div className="h-24"></div>

    {/* Payment */}
    <div className="flex justify-center mb-8">
      <li class="icon--payment list-none">
              <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg>
            </li>
    </div>

    {/* Copyright */}
    <div className="text-center text-xs text-gray-500">
      © 2025 Freedom Tree | All rights reserved
    </div>

  </div>
</div>


    </footer>
  );
};

export default Footer;
