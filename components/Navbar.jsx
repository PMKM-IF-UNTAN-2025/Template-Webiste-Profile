'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return 'active'
    if (path !== '/' && pathname.startsWith(path)) return 'active'
    return ''
  }

  return (
    <header className="fixed-top">
      <div className="container p-4">
        <div className="card rounded-4 border-0 m-0" id="navbar">
          <div className="card-body p-0">
            <nav className="navbar navbar-expand-lg p-2">
              <div className="container px-2">
                <Link className="navbar-brand text-uppercase" href="/">
                  <div className="d-flex justify-content-start align-items-center gap-2">
                    <svg width="40" height="40">
                      <image xlinkHref="/img/logo/logo.svg" width="40" height="40" />
                    </svg>
                    <div className="d-flex flex-column text-start">
                      <span className="navbar-brand-title fw-bold">Desa Capkala</span>
                      <span className="navbar-brand-subtitle fw-semibold">Kecamatan Capkala</span>
                    </div>
                  </div>
                </Link>
                <button 
                  className="navbar-toggler border-0" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarNav" 
                  aria-controls="navbarNav" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse py-2 ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                  <ul className="navbar-nav ms-auto text-center">
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive('/')}`} href="/">Beranda</Link>
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
                    <li className="nav-item dropdown">
                      <a className={`nav-link dropdown-toggle ${isActive('/berita') || isActive('/pengumuman') || isActive('/layanan') || isActive('/sarana-prasarana') || isActive('/dokumen')}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Informasi
                      </a>
                      <ul className="dropdown-menu px-2">
                        <li><Link className={`dropdown-item ${isActive('/berita')}`} href="/berita">Berita</Link></li>
                        <li><Link className={`dropdown-item ${isActive('/pengumuman')}`} href="/pengumuman">Pengumuman</Link></li>
                        <li><Link className={`dropdown-item ${isActive('/layanan')}`} href="/layanan">Layanan</Link></li>
                        <li><Link className={`dropdown-item ${isActive('/sarana-prasarana')}`} href="/sarana-prasarana">Sarana & Prasarana</Link></li>
                        <li><Link className={`dropdown-item ${isActive('/dokumen')}`} href="/dokumen">Dokumen Publik</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive('/pariwisata')}`} href="/pariwisata">Pariwisata</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive('/umkm')}`} href="/umkm">UMKM</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${isActive('/kontak')}`} href="/kontak">Kontak</Link>
                    </li>
                  </ul>

                  <div className="vr ms-2 me-3 d-none d-lg-inline"></div>

                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <div className="theme-toggle d-flex justify-content-center align-items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--system-uicons" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 21 21">
                          <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2" opacity=".3"></path>
                            <g transform="translate(-210 -1)">
                              <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
                              <circle cx="220.5" cy="11.5" r="4"></circle>
                              <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
                            </g>
                          </g>
                        </svg>
                        <div className="form-check form-switch fs-6 mt-1 ms-1">
                          <input className="form-check-input me-0" type="checkbox" id="toggle-dark" style={{cursor: 'pointer'}} />
                          <label className="form-check-label"></label>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--mdi" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                          <path fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"></path>
                        </svg>
                      </div>
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
