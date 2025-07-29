"use client";

import '../app/navStyles.css';
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

let NAV_LINKS = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
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
                >
                    Back
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