'use client'
import Link from "next/link"
import "../styles/styles.css"
import { usePathname } from "next/navigation"; 

export default function Home() {

  const pathName = usePathname();

  return (
        <nav className="navBar">
            <div className="navBar-top">
                <Link href="/" className={`navLink ${pathName === '/' ? 'active' : ''}`}>Home</Link>
                <Link href="/users" className={`navLink ${pathName === '/users' ? 'active' : ''}`}>Usuarios</Link>
                <Link href="/sensors" className={`navLink ${pathName === '/sensors' ? 'active' : ''}`}>Sensores</Link>
                <Link href="/reports" className={`navLink ${pathName === '/reports' ? 'active' : ''}`}>Relatorios</Link>
            </div>
            <div className="navBar-bottom">
                <hr />
                <Link href="/logout" className="navLink">Logout</Link>
            </div>
        </nav>

  );
}

