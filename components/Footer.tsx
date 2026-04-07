import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
              <span className="text-white font-bold text-lg tracking-tight">Enma Labs</span>
            </div>
            <p className="text-slate-400 text-sm">Your AI Chief of Staff for CA Firms</p>
            <p className="text-slate-500 text-xs mt-4">© 2025 Enma Labs. All rights reserved.</p>
            <p className="text-slate-500 text-xs">Your clients&apos; data is never used for AI training.</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm mb-2">Product</h4>
            {['Features', 'Security', 'How It Works', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm mb-2">Legal</h4>
            {['Privacy Policy', 'Terms of Service', 'DPA Summary'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm mb-2">Contact</h4>
            <a href="mailto:contact@enmalabs.com" className="text-slate-400 hover:text-white text-sm transition-colors">
              contact@enmalabs.com
            </a>
            <Link href="/book-demo" className="text-slate-400 hover:text-white text-sm transition-colors">
              Book a Demo
            </Link>
            <Link href="/login" className="text-slate-400 hover:text-white text-sm transition-colors">
              Login
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© 2025 Enma Labs.</p>
          <p className="text-slate-600 text-xs">Made for CA Firms. Powered by AI.</p>
        </div>
      </div>
    </footer>
  );
}
