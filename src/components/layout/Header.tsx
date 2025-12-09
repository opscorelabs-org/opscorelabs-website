import { useMobileMenu, useNavbarScroll } from '@/hooks';

const Header = () => {
  const { isOpen, toggle, close } = useMobileMenu();
  const hasShadow = useNavbarScroll();

  const handleLinkClick = () => {
    close();
  };

  return (
    <nav
      className={`fixed w-full z-50 glass-nav transition-all duration-300 ${
        hasShadow ? 'shadow-md' : ''
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
            onClick={handleLinkClick}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg overflow-hidden bg-white">
              <img
                src="https://opscorelabs.com/logo.png"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  if (target.parentElement) {
                    target.parentElement.innerHTML =
                      '<div class="w-full h-full bg-brand-600 flex items-center justify-center text-white font-bold">O</div>';
                  }
                }}
                alt="OpsCore Labs Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-slate-900">
              OpsCore<span className="text-brand-600">Labs</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-sm font-medium text-slate-700 hover:text-brand-600 transition"
            >
              Solutions
            </a>
            <a
              href="#tech"
              className="text-sm font-medium text-slate-700 hover:text-brand-600 transition"
            >
              Technology
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-slate-700 hover:text-brand-600 transition"
            >
              Process
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-700 hover:text-brand-600 transition"
            >
              Company
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-brand-600 text-white text-sm font-semibold shadow-md hover:bg-brand-700 hover:shadow-lg transition transform active:scale-95"
            >
              Get a Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggle}
              className="text-slate-700 hover:text-brand-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          <a
            href="#services"
            className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
            onClick={handleLinkClick}
          >
            Solutions
          </a>
          <a
            href="#tech"
            className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
            onClick={handleLinkClick}
          >
            Technology
          </a>
          <a
            href="#process"
            className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
            onClick={handleLinkClick}
          >
            Process
          </a>
          <a
            href="#about"
            className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
            onClick={handleLinkClick}
          >
            Company
          </a>
          <a
            href="#contact"
            className="block mt-4 px-3 py-3 text-center rounded-md font-bold bg-brand-600 text-white"
            onClick={handleLinkClick}
          >
            Get a Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

