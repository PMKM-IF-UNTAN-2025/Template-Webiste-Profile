import React from 'react'
import Link from 'next/link'

function ImageOrPlaceholder({src, alt}){
  const placeholder = '/placeholder-card.jpg'
  return (
    <img 
      src={src || placeholder} 
      alt={alt} 
      className="object-fit-cover rounded-top-4 w-100 h-100"
    />
  )
}

export default function CardList({title, items, ctaText}){
  if (!items || items.length === 0) {
    return (
      <div className="text-center">
        <div className="card rounded-4">
          <div className="card-body p-5">
            <i className="bi bi-inbox display-1 text-muted"></i>
            <h4 className="mt-3">Tidak ada data</h4>
            <p className="text-muted">Belum ada data yang tersedia.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="row justify-content-center">
      {items.map((item) => (
        <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="card rounded-4">
            <div className="card-content">
              {/* Tag untuk berita */}
              {item.kategori_berita && (
                <div className="position-absolute top-0 left-0 z-3 tag-custom">
                  <span className="text-bg-secondary tag-item-custom py-1 px-3">
                    {item.kategori_berita}
                  </span>
                </div>
              )}
              
              <div className="ratio ratio-4x3">
                <ImageOrPlaceholder 
                  src={item.gambar || item.imageUrl} 
                  alt={item.judul || item.title || item.nama} 
                />
              </div>
              
              <div className="card-body">
                <h4 className="card-title text-clamp-2">
                  {item.judul || item.title || item.nama}
                </h4>

                {/* Info penulis/pemilik */}
                {(item.penulis || item.pemilik || item.owner) && (
                  <div className="d-flex gap-2 align-items-center card-subtitle mb-3">
                    <span className="icon">
                      <i className="bi bi-person-circle"></i>
                    </span>
                    <span className="mt-1">
                      {item.penulis || item.pemilik || item.owner}
                    </span>
                  </div>
                )}

                {/* Deskripsi */}
                <p className="card-text text-clamp-3">
                  {item.deskripsi || item.excerpt || ''}
                </p>

                <hr />

                <div className="row justify-content-between align-items-center g-3">
                  <div className="col-lg-8">
                    {/* Waktu atau harga */}
                    <div className="d-flex gap-2 align-items-center text-muted my-auto">
                      <small className="icon">
                        <i className={item.interval ? "bi bi-clock" : "bi bi-tag"}></i>
                      </small>
                      <small className="mt-1">
                        {item.interval || item.published || (item.harga ? `Rp ${item.harga.toLocaleString('id-ID')}` : item.price)}
                      </small>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    {/* Tombol aksi */}
                    {item.slug ? (
                      <Link 
                        href={`/${title.toLowerCase().includes('pariwisata') ? 'pariwisata' : title.toLowerCase().includes('umkm') ? 'umkm' : 'berita'}/${item.slug}`} 
                        className="btn btn-primary w-100 stretched-link"
                      >
                        {ctaText || 'Lihat'}
                      </Link>
                    ) : (
                      <button className="btn btn-primary w-100">
                        {ctaText || 'Lihat'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Tombol sosial media untuk UMKM */}
                {item.instagram && (
                  <div className="row align-items-center g-3 mt-2">
                    <div className="col-12">
                      <div className="d-flex gap-2 align-items-center">
                        {item.instagram && (
                          <a href={item.instagram} target="_blank" className="btn bg-instagram icon btn-sm">
                            <i className="bi bi-instagram"></i>
                          </a>
                        )}
                        {item.nomor_hp && (
                          <a 
                            href={`https://wa.me/+62${item.nomor_hp}`} 
                            target="_blank" 
                            className="btn bg-whatsapp icon btn-sm"
                          >
                            <i className="bi bi-whatsapp"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
