export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-[0.2em]">TT</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Redefining luxury fashion in Uganda. Premium clothing, footwear, and timepieces for the discerning individual.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Collections</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-uvc-violet transition-colors">Men's Apparel</a></li>
            <li><a href="#" className="hover:text-uvc-violet transition-colors">Women's Apparel</a></li>
            <li><a href="#" className="hover:text-uvc-violet transition-colors">Footwear</a></li>
            <li><a href="#" className="hover:text-uvc-violet transition-colors">Watches</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Company</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-uvc-violet transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-uvc-violet transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Newsletter</h4>
          <p className="text-gray-500 text-sm mb-4">Subscribe for exclusive drops in Kampala and beyond.</p>
          <div className="flex">
            <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-l px-4 py-2 text-sm text-white focus:outline-none focus:border-uvc-violet w-full" />
            <button className="bg-uvc-violet hover:bg-violet-700 text-white px-4 py-2 rounded-r text-sm font-medium transition-colors">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} TT Collections Uganda. All rights reserved.
      </div>
    </footer>
  )
}