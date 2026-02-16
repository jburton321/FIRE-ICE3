import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#" className="flex items-center gap-2">
          <Leaf className="h-7 w-7 text-teal-600" />
          <span className="text-xl font-bold text-gray-800">GreenPath</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-teal-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-teal-600"
          >
            Log in
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-100 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-gray-600 transition-colors hover:text-teal-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#contact"
              className="text-center text-sm font-medium text-gray-700 transition-colors hover:text-teal-600"
            >
              Log in
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-teal-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-700"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
