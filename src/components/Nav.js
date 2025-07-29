"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

let NAV_LINKS = [
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Work",
        href: "/work"
    }
]

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav>
            <ul>
                {pathname !== "/" && (
                    <li>
                        <Link href="/">BACK</Link>
                    </li>
                )}
                {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}