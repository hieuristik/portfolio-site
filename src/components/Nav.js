"use client";

import "../app/navStyles.css";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

let NAV_LINKS = [
  { label: "ABOUT", href: "/about" },
  { label: "WORK", href: "/work" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {pathname !== "/" && (
        <button
          onClick={() => router.push("/")}
          className="back-btn z-[9999]"
          type="button"
          aria-label="Go back to home"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="back-icon"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}

      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-300 ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <ul className="navbar-list flex gap-6 items-center bg-white px-6 py-2 rounded-full shadow-md">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "nav-link nav-link-active"
                      : "nav-link"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
