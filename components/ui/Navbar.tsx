"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleScroll = () => {
      nav.style.boxShadow =
        window.scrollY > 50 ? "0 2px 20px rgba(0,0,0,0.08)" : "none";
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav ref={navRef}>
      <Link href="/" className="nav-logo">
        <div className="brand-stack">
          <span className="brand-nuvisa">NUVISA</span>
          <span className="brand-food">food</span>
        </div>
      </Link>
      <div className={`nav-links${isOpen ? " active" : ""}`}>
        <Link href="/#servicios" onClick={closeMenu}>Servicios</Link>
        <Link href="/#nosotros" onClick={closeMenu}>Nosotros</Link>
        <Link href="/#menu" onClick={closeMenu}>Menú</Link>
        <Link href="/#contacto" className="nav-cta" onClick={closeMenu}>
          Cotizar
        </Link>
      </div>
      <button
        className="hamburger"
        aria-label="Menú"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
