import React from 'react'
import Link from 'next/link'

export default function FasilitasPublik(){
  const fasilitasPublik = [
    {
      id: 1,
      nama: 'Balai Desa',
      kategori: 'Pemerintahan',
      lokasi: 'Jl. Raya Desa No. 1',
      deskripsi: 'Gedung balai desa yang digunakan untuk kegiatan pemerintahan dan pertemuan warga.',
      gambar: 'https://cdn.digitaldesa.com/uploads/profil/32.01.30.2006/common/684bbbbf567012373c488653546d4d34.jpeg',
      status: 'Baik',
      location: `https://www.google.com/maps/place/0%C2%B038'45.3%22N+108%C2%B059'21.0%22E/@0.6459257,108.9865852,17z/data=!3m1!4b1!4m4!3m3!8m2!3d0.6459203!4d108.9891655?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D`
    },
    {
      id: 2,
      nama: 'SD Negeri Capkala',
      kategori: 'Pendidikan',
      lokasi: 'Jl. Pendidikan No. 5',
      deskripsi: 'Sekolah dasar negeri yang melayani pendidikan dasar untuk anak-anak desa.',
      gambar: 'https://cdn.digitaldesa.com/uploads/profil/32.01.30.2006/common/684bbbbf567012373c488653546d4d34.jpeg',
      status: 'Baik',
      location: 'sd-negeri-capkala'
    },
    {
      id: 3,
      nama: 'Puskesmas Capkala',
      kategori: 'Kesehatan',
      lokasi: 'Jl. Kesehatan No. 3',
      deskripsi: 'Pusat kesehatan masyarakat yang melayani kesehatan warga desa.',
      gambar: 'https://cdn.digitaldesa.com/uploads/profil/32.01.30.2006/common/684bbbbf567012373c488653546d4d34.jpeg',
      status: 'Baik',
      location: 'puskesmas-capkala'
    },
    {
      id: 4,
      nama: 'Masjid Al-Ikhlas',
      kategori: 'Keagamaan',
      lokasi: 'Jl. Masjid No. 2',
      deskripsi: 'Masjid utama desa yang digunakan untuk kegiatan keagamaan dan ibadah.',
      gambar: 'https://cdn.digitaldesa.com/uploads/profil/32.01.30.2006/common/684bbbbf567012373c488653546d4d34.jpeg',
      status: 'Baik',
      location: 'masjid-al-ikhlas'
    },
    {
      id: 5,
      nama: 'Pasar Desa',
      kategori: 'Ekonomi',
      lokasi: 'Jl. Pasar No. 10',
      deskripsi: 'Pasar tradisional yang menjadi pusat perekonomian warga desa.',
      gambar: 'https://cdn.digitaldesa.com/uploads/profil/32.01.30.2006/common/684bbbbf567012373c488653546d4d34.jpeg',
      status: 'Perlu Perbaikan',
      location: 'pasar-desa'
    },
    {
      id: 6,
      nama: 'Lapangan Olahraga',
      kategori: 'Olahraga',
      lokasi: 'Jl. Olahraga No. 8',
      deskripsi: 'Lapangan olahraga yang digunakan untuk kegiatan olahraga dan upacara.',
      gambar: 'https://cdn.digitaldesa.com/uploads/profil/32.01.30.2006/common/684bbbbf567012373c488653546d4d34.jpeg',
      status: 'Baik',
      location: 'lapangan-olahraga'
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
    <section className="page-section" id="fasilitasPublik">
      <div className="container px-4">
        <div className="row justify-content-center align-items-center g-4 mb-4">
            <h2 className="my-auto text-lg-start pt-10 text-center">Fasilitas Publik</h2>
        </div>

        <div className="row justify-content-center">
          {fasilitasPublik.map((fasilitas) => (
            <div key={fasilitas.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card rounded-4">
                <div className="card-content">
                  <div className="position-absolute top-0 right-0 z-3 m-2">
                    <span className={`badge bg-${getStatusColor(fasilitas.status)}`}>
                      {fasilitas.status}
                    </span>
                  </div>
                  <div className="ratio ratio-4x3">
                    <img 
                      className="object-fit-cover rounded-top-4" 
                      src={fasilitas.gambar} 
                      alt={fasilitas.nama}
                      loading="lazy" 
                    />
                  </div>
                  <div className="card-body">
                    <div className="mb-2">
                      <span className="badge bg-info">{fasilitas.kategori}</span>
                    </div>
                    <h4 className="card-title text-clamp-2">{fasilitas.nama}</h4>
                    
                    <div className="d-flex gap-2 align-items-center card-subtitle mb-3">
                      <span className="icon"><i className="bi bi-geo-alt"></i></span>
                      <span className="mt-1 text-clamp-1">{fasilitas.lokasi}</span>
                    </div>

                    <p className="card-text text-clamp-3">
                      {fasilitas.deskripsi}
                    </p>

                    <hr />

                    <div className="d-grid">
                      <Link target='_blank' href={`${fasilitas.location}`} className="btn btn-primary">
                        Lihat Di Maps
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
