'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return 'active'
    if (path !== "/" && pathname.startsWith(path)) return 'active'
    return ''
  }

  return (
    <header className="fixed-top">
      <div className="container p-4">
        <div className="card rounded-4 border-0 m-0 shadow-sm">
          <div className="card-body p-0">
            <nav className="navbar navbar-expand-lg p-2">
              <div className="container px-2">
                <div className="navbar-brand text-uppercase">
                  <div className="d-flex justify-content-start align-items-center gap-2">
                    <svg width="40" height="40">
                      <image xlinkHref="/img/logo/logo.svg" width="40" height="40" />
                    </svg>
                    <Link className={`d-flex flex-column text-start nav-link ${isActive('active')}`} href="/">
                      <span className="navbar-brand-title fw-bold">
                        Desa Capkala
                      </span>
                      <span className="navbar-brand-subtitle fw-semibold">
                        Kecamatan Capkala
                      </span>
                    </Link>
                  </div>
                </div>
                <button 
                  className="navbar-toggler border-0" 
                  type="button" 
                  aria-controls="navbarNav" 
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation"
                  onClick={toggleMenu}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Menu */}
                <div className={`collapse navbar-collapse py-2 ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                  <ul className="navbar-nav ms-auto text-center">
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive('active')}`} href="/">Beranda</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive('active')}`} href="#visi-misi">Visi-Misi</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive('active')}`} href="#struktur-organisasi">Struktur Organisasi</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive('active')}`} href="#data-wilayah">Data Wilayah</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive('active')}`} href="#footer">Kontak</Link>
                    </li>
                    
                  </ul>
                  <div className="vr ms-2 me-3 d-none d-lg-inline"></div>
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <ThemeToggle/>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}