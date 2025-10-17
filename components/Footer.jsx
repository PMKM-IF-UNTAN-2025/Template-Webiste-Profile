import React from 'react'
import Link from 'next/link'

export default function Footer({ site }){
  return (
    <footer className="footer">
      <div className="card rounded-0 m-0">
        <div className="card-body px-0 pb-0 pt-1 border-top">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6">
                <img src="/img/logo/logo.svg" alt="Logo" className="d-inline-block mb-4" height="64" />

                <h4 className="text-white mb-2">Desa Capkala</h4>

                <div className="d-flex flex-column gap-1 mb-4">
                  <span>Kecamatan Capkala, Kabupaten Bengkayang,</span>
                  <span>Provinsi Kalimantan Barat, Kode Pos 79211</span>
                </div>

                <div className="d-flex flex-column gap-2 mb-4">
                  <a className="link-footer d-flex gap-3 align-items-center" href="mailto:example@gmail.com">
                    <span className="icon"><i className="bi bi-envelope"></i></span>
                    <span>example@gmail.com</span>
                  </a>
                  <a className="link-footer d-flex gap-3 align-items-center" href="https://wa.me/+6281236626752">
                    <span className="icon"><i className="bi bi-whatsapp"></i></span>
                    <span>+6281236626752</span>
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row mb-4">
                  <div className="col">
                    <h5 className="text-white mb-2">Menu</h5>

                    <div className="d-flex flex-column gap-2">
                      <Link href="/" className="link-footer">Beranda</Link>
                      <div className="dropdown">
                        <a className="link-footer dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Profil
                        </a>
                        <ul className="dropdown-menu">
                          <li><Link className="dropdown-item" href="/profil/tentang">Tentang</Link></li>
                          <li><Link className="dropdown-item" href="/profil/visi-misi">Visi & Misi</Link></li>
                          <li><Link className="dropdown-item" href="/sotk">SOTK</Link></li>
                          <li><Link className="dropdown-item" href="/data-penduduk">Data Penduduk</Link></li>
                          <li><Link className="dropdown-item" href="/data-kewilayahan">Data Kewilayahan</Link></li>
                        </ul>
                      </div>
                      <div className="dropdown">
                        <a className="link-footer dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Informasi
                        </a>
                        <ul className="dropdown-menu">
                          <li><Link className="dropdown-item" href="/berita">Berita</Link></li>
                          <li><Link className="dropdown-item" href="/pengumuman">Pengumuman</Link></li>
                          <li><Link className="dropdown-item" href="/layanan">Layanan</Link></li>
                          <li><Link className="dropdown-item" href="/sarana-prasarana">Sarana & Prasarana</Link></li>
                          <li><Link className="dropdown-item" href="/dokumen">Dokumen Publik</Link></li>
                        </ul>
                      </div>
                      <Link href="/pariwisata" className="link-footer">Pariwisata</Link>
                      <Link href="/umkm" className="link-footer">UMKM</Link>
                      <Link href="/kontak" className="link-footer">Kontak</Link>
                    </div>
                  </div>

                  <div className="col">
                    <h5 className="text-white mb-2">Ikuti kami</h5>

                    <div className="d-flex flex-wrap gap-2">
                      <a href="#" target="_blank" className="btn btn-sm btn-footer icon"><i className="bi bi-instagram"></i></a>
                      <a href="#" target="_blank" className="btn btn-sm btn-footer icon"><i className="bi bi-facebook"></i></a>
                      <a href="#" target="_blank" className="btn btn-sm btn-footer icon"><i className="bi bi-twitter-x"></i></a>
                      <a href="#" target="_blank" className="btn btn-sm btn-footer icon"><i className="bi bi-tiktok"></i></a>
                      <a href="#" target="_blank" className="btn btn-sm btn-footer icon"><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="row justify-content-center align-items-center g-2 border-top pt-3 mt-2">
                  <div className="col-lg-6">
                    <div className="text-lg-start text-center fw-bold">
                      &copy; {new Date().getFullYear()} Desa Capkala
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="text-lg-end text-center fw-bold">
                      Dibuat Oleh <a href="https://www.instagram.com/" target="_blank" className="link-footer">Adwira</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
