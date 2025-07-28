import Link from "next/link";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">BACK</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/work">Work</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;