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

  const handleSectionNavigation = (sectionId) => {
    setIsMenuOpen(false)
    
    if (pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  const handleFooterNavigation = () => {
    setIsMenuOpen(false)
    
    if (pathname === '/') {
      setTimeout(() => {
        const footer = document.getElementById('footer')
        if (footer) {
          const offset = 100
          const footerPosition = footer.getBoundingClientRect().top
          const offsetPosition = footerPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else {
      router.push('/#footer')
    }
  }
  
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
                    <li className="nav-item dropdown">
                      <a className={`nav-link dropdown-toggle ${isActive('/profil') || isActive('/sotk') || isActive('/data-penduduk') || isActive('/data-kewilayahan')}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Profil
                      </a>
                      <ul className="dropdown-menu px-2">
                        <li><Link className={`dropdown-item ${isActive('/profil/tentang')}`} href="/profil/tentang">Tentang</Link></li>
                        <li><Link className={`dropdown-item ${isActive('/profil/visi-misi')}`} href="/profil/visi-misi">Visi & Misi</Link></li>
                        <li><Link className={`dropdown-item ${isActive('/sotk')}`} href="/sotk">SOTK</Link></li>
                        <li><Link className={`dropdown-item ${isActive('/data-penduduk')}`} href="/data-penduduk">Data Penduduk</Link></li>
                        <li><Link className={`dropdown-item ${isActive('/data-wilayah')}`} href="/data-wilayah">Data Kewilayahan</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item mx-1">
                      <button 
                        className="nav-link border-0 bg-transparent p-2" 
                        onClick={() => handleSectionNavigation('struktur-organisasi')}
                      >
                        Struktur Organisasi
                      </button>
                    </li>
                    <li className="nav-item mx-1">
                      <button 
                        className="nav-link border-0 bg-transparent p-2" 
                        onClick={() => handleSectionNavigation('data-wilayah')}
                      >
                        Data Wilayah
                      </button>
                    </li>
                    <li className="nav-item mx-1">
                      <button 
                        className="nav-link border-0 bg-transparent p-2" 
                        onClick={handleFooterNavigation}
                      >
                        Kontak
                      </button>
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