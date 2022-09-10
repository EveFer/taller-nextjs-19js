import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>Acerda de</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>Contacto</a>
                </Link>
            </li>
        </ul>
    </nav>
  )
}
