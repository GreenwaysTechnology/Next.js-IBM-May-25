'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import './link.css'

export default function NavBar() {
    const pathname = usePathname()
    return <nav>
        <ul>
            <li><Link className={`${pathname === '/' ? 'active' : ''}`} href={{ pathname: '/' }}>Home</Link></li>
            <li><Link className={`${pathname === '/about' ? 'active' : ''}`} href={{ pathname: '/about' }}>About</Link></li>
            <li><Link className={`${pathname === '/services' ? 'active' : ''}`} href={{ pathname: '/services' }}>Services</Link></li>
            <li><Link className={`${pathname === '/clients' ? 'active' : ''}`} href={{ pathname: '/clients' }}>Clients</Link></li>
            <li><Link className={`${pathname === '/dashboard' ? 'active' : ''}`} href={{ pathname: '/dashboard' }}>Dashboard</Link></li>
            <li><Link className={`${pathname === '/todos' ? 'active' : ''}`} href={{ pathname: '/todos' }}>Todos</Link></li>

        </ul>
    </nav>
}