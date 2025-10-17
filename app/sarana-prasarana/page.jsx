import React from 'react'
import Link from 'next/link'

export default function SaranaPrasaranaPage(){
  const saranaPrasarana = [
    {
      id: 1,
      nama: 'Balai Desa',
      kategori: 'Pemerintahan',
      lokasi: 'Jl. Raya Desa No. 1',
      deskripsi: 'Gedung balai desa yang digunakan untuk kegiatan pemerintahan dan pertemuan warga.',
      gambar: '/img/sarana-prasarana/balai-desa.jpg',
      status: 'Baik',
      slug: 'balai-desa'
    },
    {
      id: 2,
      nama: 'SD Negeri Capkala',
      kategori: 'Pendidikan',
      lokasi: 'Jl. Pendidikan No. 5',
      deskripsi: 'Sekolah dasar negeri yang melayani pendidikan dasar untuk anak-anak desa.',
      gambar: '/img/sarana-prasarana/sd.jpg',
      status: 'Baik',
      slug: 'sd-negeri-capkala'
    },
    {
      id: 3,
      nama: 'Puskesmas Capkala',
      kategori: 'Kesehatan',
      lokasi: 'Jl. Kesehatan No. 3',
      deskripsi: 'Pusat kesehatan masyarakat yang melayani kesehatan warga desa.',
      gambar: '/img/sarana-prasarana/puskesmas.jpg',
      status: 'Baik',
      slug: 'puskesmas-capkala'
    },
    {
      id: 4,
      nama: 'Masjid Al-Ikhlas',
      kategori: 'Keagamaan',
      lokasi: 'Jl. Masjid No. 2',
      deskripsi: 'Masjid utama desa yang digunakan untuk kegiatan keagamaan dan ibadah.',
      gambar: '/img/sarana-prasarana/masjid.jpg',
      status: 'Baik',
      slug: 'masjid-al-ikhlas'
    },
    {
      id: 5,
      nama: 'Pasar Desa',
      kategori: 'Ekonomi',
      lokasi: 'Jl. Pasar No. 10',
      deskripsi: 'Pasar tradisional yang menjadi pusat perekonomian warga desa.',
      gambar: '/img/sarana-prasarana/pasar.jpg',
      status: 'Perlu Perbaikan',
      slug: 'pasar-desa'
    },
    {
      id: 6,
      nama: 'Lapangan Olahraga',
      kategori: 'Olahraga',
      lokasi: 'Jl. Olahraga No. 8',
      deskripsi: 'Lapangan olahraga yang digunakan untuk kegiatan olahraga dan upacara.',
      gambar: '/img/sarana-prasarana/lapangan.jpg',
      status: 'Baik',
      slug: 'lapangan-olahraga'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Baik':
        return 'success'
      case 'Perlu Perbaikan':
        return 'warning'
      case 'Rusak':
        return 'danger'
      default:
        return 'secondary'
    }
  }

  return (
    <section className="page-section" id="pageSection">
      <div className="container px-4">
        <div className="row justify-content-center align-items-center g-4 mb-4">
          <div className="col-lg-6">
            <h2 className="my-auto text-lg-start text-center">Sarana dan Prasarana</h2>
          </div>
          <div className="col-lg-6">
            <form action="/sarana-prasarana" method="get">
              <div className="input-group rounded-pill">
                <label htmlFor="keyword" className="input-group-text border-0 rounded-start-pill">
                  <i className="bi bi-search ms-1" style={{marginBottom: '0.75rem'}}></i>
                </label>
                <input 
                  type="search" 
                  className="form-control border-0" 
                  id="keyword" 
                  placeholder="Masukan Kata Kunci" 
                  name="keyword" 
                  autoFocus 
                />
                <button type="submit" className="btn btn-primary icon rounded-end-pill px-4">
                  Cari
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row justify-content-center">
          {saranaPrasarana.map((sarana) => (
            <div key={sarana.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card rounded-4">
                <div className="card-content">
                  <div className="position-absolute top-0 right-0 z-3 m-2">
                    <span className={`badge bg-${getStatusColor(sarana.status)}`}>
                      {sarana.status}
                    </span>
                  </div>
                  <div className="ratio ratio-4x3">
                    <img 
                      className="object-fit-cover rounded-top-4" 
                      src={sarana.gambar} 
                      alt={sarana.nama}
                      loading="lazy" 
                    />
                  </div>
                  <div className="card-body">
                    <div className="mb-2">
                      <span className="badge bg-info">{sarana.kategori}</span>
                    </div>
                    <h4 className="card-title text-clamp-2">{sarana.nama}</h4>
                    
                    <div className="d-flex gap-2 align-items-center card-subtitle mb-3">
                      <span className="icon"><i className="bi bi-geo-alt"></i></span>
                      <span className="mt-1 text-clamp-1">{sarana.lokasi}</span>
                    </div>

                    <p className="card-text text-clamp-3">
                      {sarana.deskripsi}
                    </p>

                    <hr />

                    <div className="d-grid">
                      <Link href={`/sarana-prasarana/${sarana.slug}`} className="btn btn-primary">
                        Lihat Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
