import React from 'react'
import Link from 'next/link'

export default function LinkSection(){
  const links = [
    { href: '/berita', icon: 'bi-newspaper', title: 'Berita' },
    { href: '/pengumuman', icon: 'bi-megaphone', title: 'Pengumuman' },
    { href: '/layanan', icon: 'bi-award', title: 'Layanan' },
    { href: '/sarana-prasarana', icon: 'bi-bank', title: 'Fasilitas Publik' },
    { href: '/dokumen', icon: 'bi-file-earmark', title: 'Dokumen Publik' },
    { href: '/data-penduduk', icon: 'bi-people', title: 'Data Penduduk' },
    { href: '/data-wilayah', icon: 'bi-globe-asia-australia', title: 'Data Wilayah' }
  ]

  return (
    <section className="page-section">
      <div className="card rounded-0 m-0 flex flex-row">
        <div className="card-body p-0">
          <div className="link-wrapper">
            <div className="link-wrapper-main">
              {links.map((link, index) => (
                <div key={index} className="link-wrapper-item">
                  <Link href={link.href} className="link-main">
                    <div className="link-main-item">
                      <div className="d-flex flex-column gap-2">
                        <span className="fs-2 icon">
                          <i className={`bi ${link.icon}`}></i>
                        </span>
                        <h5>{link.title}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
