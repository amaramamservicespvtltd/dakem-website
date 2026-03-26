import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import TechBackground from "./TechBackground";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Why DAKEM", path: "/why-dakem" },
  { label: "Testimonials", path: "/testimonials" },
  
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border relative overflow-hidden" style={{ background: "rgba(255,255,255,0.88)" }}>
      <TechBackground />
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8 relative z-10">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="DAKEM Logo" className="h-16 sm:h-20 lg:h-24 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === item.path
                  ? "text-accent bg-accent/10"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/dakem-brochure.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent text-accent font-semibold text-sm transition-all hover:bg-accent/10 shadow-sm"
          >
            <Download className="h-4 w-4" />
            Download Brochure
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-all hover:opacity-90 shadow-sm"
          >
            <Phone className="h-4 w-4" />
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-b border-border"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-accent bg-accent/10"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/dakem-brochure.pdf"
                download
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-accent text-accent font-semibold text-sm"
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm"
              >
                <Phone className="h-4 w-4" />
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
