const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="font-heading font-bold text-xl text-white">
              OpsCore<span className="text-brand-500">Labs</span>
            </span>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Enterprise-grade IT consulting for companies that refuse to compromise on quality or
              security.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Social Icons */}
              <a
                href="https://x.com/theopscorelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/109899127"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-brand-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/109899127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-brand-400 transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-400 transition">
                  Cloud Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-400 transition">
                  Blockchain
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-400 transition">
                  Cybersecurity
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-slate-500 cursor-not-allowed select-none">
                Privacy Policy{' '}
                <span className="coming-soon-badge text-slate-800 bg-slate-700 border-slate-600 text-xs">
                  In Progress
                </span>
              </li>
              <li className="flex items-center text-slate-500 cursor-not-allowed select-none">
                Terms of Service{' '}
                <span className="coming-soon-badge text-slate-800 bg-slate-700 border-slate-600 text-xs">
                  In Progress
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2025 OpsCore Labs LLC. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Enterprise</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

