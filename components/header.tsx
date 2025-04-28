"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-sm" : "bg-background/80"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 transition-transform hover:scale-105"
        >
          <span className="text-2xl font-bold gradient-text">Log Vikas</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Edition
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/readers-corner"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Articles
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/careers"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Careers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Edition
            </Link>

            <Link
              href="/about"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/readers-corner"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Articles
            </Link>
            <Link
              href="/careers"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
