import { NavLink } from "@/components/NavLink";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", emoji: "🏰" },
  { to: "/temple", label: "Temple", emoji: "🛕" },
  { to: "/story", label: "Our Story", emoji: "💕" },
  { to: "/events", label: "Events", emoji: "🌸" },
  { to: "/baraat", label: "Baraat", emoji: "🐎" },
  { to: "/wedding", label: "Wedding", emoji: "✨" },
  { to: "/rsvp", label: "RSVP", emoji: "💌" },
];

const WeddingNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <span className="font-display text-lg text-royal-gold tracking-wider">A & P</span>

        {/* Desktop */}
        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="px-3 py-1.5 text-sm text-white/70 hover:text-white rounded-md transition-colors"
              activeClassName="!text-royal-gold bg-white/10"
              end
            >
              <span className="mr-1">{item.emoji}</span>
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-4 pb-4 pt-2 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm text-white/70 hover:text-white rounded-md transition-colors"
              activeClassName="!text-royal-gold bg-white/10"
              onClick={() => setOpen(false)}
              end
            >
              <span className="mr-1.5">{item.emoji}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default WeddingNav;
