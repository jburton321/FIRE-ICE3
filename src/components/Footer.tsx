import { Leaf } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Guides", "Webinars", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <Leaf className="h-7 w-7 text-teal-400" />
              <span className="text-xl font-bold text-white">GreenPath</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Helping businesses measure, manage, and minimize their
              environmental impact since 2022.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <nav key={heading} aria-label={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} GreenPath. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-xs transition-colors hover:text-white">
              Terms
            </a>
            <a href="#" className="text-xs transition-colors hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
