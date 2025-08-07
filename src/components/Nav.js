"use client";

import '../app/navStyles.css';
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

let NAV_LINKS = [
    { label: "ABOUT", href: "/about" },
    { label: "WORK", href: "/work" },
];

export default function Nav() {
    const pathname = usePathname();
    const router = useRouter();

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
                        <path d="m15 18-6-6 6-6"/>
                    </svg>
                </button>
            )}
            <nav className="navbar z-[9999]">
                <ul className="navbar-list">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={isActive ? "nav-link nav-link-active" : "nav-link"}
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