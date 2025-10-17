import React from 'react'
import Link from 'next/link'

export default function LayananPage(){
  const layanan = [
    {
      id: 1,
      nama: 'Surat Keterangan Domisili',
      deskripsi: 'Layanan pembuatan surat keterangan domisili untuk keperluan administrasi.',
      persyaratan: [
        'Fotokopi KTP',
        'Fotokopi KK',
        'Surat pengantar RT/RW'
      ],
      biaya: 'Gratis',
      estimasi: '1 hari kerja'
    },
    {
      id: 2,
      nama: 'Surat Keterangan Usaha',
      deskripsi: 'Layanan pembuatan surat keterangan usaha untuk keperluan perizinan.',
      persyaratan: [
        'Fotokopi KTP',
        'Fotokopi KK',
        'Surat pengantar RT/RW',
        'Bukti usaha (jika ada)'
      ],
      biaya: 'Gratis',
      estimasi: '1 hari kerja'
    },
    {
      id: 3,
      nama: 'Surat Keterangan Tidak Mampu',
      deskripsi: 'Layanan pembuatan surat keterangan tidak mampu untuk keperluan bantuan sosial.',
      persyaratan: [
        'Fotokopi KTP',
        'Fotokopi KK',
        'Surat pengantar RT/RW',
        'Surat keterangan penghasilan'
      ],
      biaya: 'Gratis',
      estimasi: '2 hari kerja'
    },
    {
      id: 4,
      nama: 'Surat Keterangan Kelahiran',
      deskripsi: 'Layanan pembuatan surat keterangan kelahiran untuk keperluan administrasi kependudukan.',
      persyaratan: [
        'Fotokopi KTP orang tua',
        'Fotokopi KK',
        'Surat keterangan dari bidan/dokter',
        'Surat pengantar RT/RW'
      ],
      biaya: 'Gratis',
      estimasi: '1 hari kerja'
    },
    {
      id: 5,
      nama: 'Surat Keterangan Kematian',
      deskripsi: 'Layanan pembuatan surat keterangan kematian untuk keperluan administrasi kependudukan.',
      persyaratan: [
        'Fotokopi KTP almarhum',
        'Fotokopi KK',
        'Surat keterangan dari dokter/rumah sakit',
        'Surat pengantar RT/RW'
      ],
      biaya: 'Gratis',
      estimasi: '1 hari kerja'
    },
    {
      id: 6,
      nama: 'Surat Keterangan Pindah',
      deskripsi: 'Layanan pembuatan surat keterangan pindah untuk keperluan administrasi kependudukan.',
      persyaratan: [
        'Fotokopi KTP',
        'Fotokopi KK',
        'Surat pengantar RT/RW',
        'Surat keterangan dari daerah tujuan'
      ],
      biaya: 'Gratis',
      estimasi: '2 hari kerja'
    }
  ]

  return (
    <section className="page-section" id="pageSection">
      <div className="container px-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-4">Layanan Desa</h2>
            
            <div className="row g-4">
              {layanan.map((lay) => (
                <div key={lay.id} className="col-lg-6 col-md-6">
                  <div className="card rounded-4 h-100">
                    <div className="card-body p-4">
                      <h5 className="card-title text-primary mb-3">{lay.nama}</h5>
                      <p className="card-text mb-3">{lay.deskripsi}</p>
                      
                      <div className="mb-3">
                        <h6 className="fw-semibold">Persyaratan:</h6>
                        <ul className="list-unstyled">
                          {lay.persyaratan.map((syarat, index) => (
                            <li key={index} className="mb-1">
                              <i className="bi bi-check-circle text-success me-2"></i>
                              {syarat}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="row g-2 mb-3">
                        <div className="col-6">
                          <small className="text-muted">Biaya</small>
                          <p className="mb-0 fw-semibold text-success">{lay.biaya}</p>
                        </div>
                        <div className="col-6">
                          <small className="text-muted">Estimasi</small>
                          <p className="mb-0 fw-semibold">{lay.estimasi}</p>
                        </div>
                      </div>
                      
                      <div className="d-grid">
                        <button className="btn btn-primary">
                          <i className="bi bi-download me-2"></i>
                          Download Formulir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
