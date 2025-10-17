import React from 'react'

export default function KontakPage(){
  return (
    <section className="page-section" id="pageSection">
      <div className="container px-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-4">Kontak</h2>
            
            <div className="row g-4">
              {/* Informasi Kontak */}
              <div className="col-lg-6">
                <div className="card rounded-4 h-100">
                  <div className="card-body p-4">
                    <h5 className="card-title mb-4">Informasi Kontak</h5>
                    
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                          <i className="bi bi-geo-alt"></i>
                        </div>
                        <div>
                          <h6 className="mb-1">Alamat</h6>
                          <p className="mb-0 text-muted">
                            Jl. Raya Desa No. 1<br />
                            Desa Capkala, Kecamatan Capkala<br />
                            Kabupaten Bengkayang, Kalimantan Barat 79211
                          </p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                          <i className="bi bi-telephone"></i>
                        </div>
                        <div>
                          <h6 className="mb-1">Telepon</h6>
                          <p className="mb-0">
                            <a href="tel:+6281236626752" className="text-decoration-none">
                              +62 812-3662-6752
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                          <i className="bi bi-envelope"></i>
                        </div>
                        <div>
                          <h6 className="mb-1">Email</h6>
                          <p className="mb-0">
                            <a href="mailto:desacapkala@gmail.com" className="text-decoration-none">
                              desacapkala@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                          <i className="bi bi-clock"></i>
                        </div>
                        <div>
                          <h6 className="mb-1">Jam Pelayanan</h6>
                          <p className="mb-0 text-muted">
                            Senin - Jumat: 08:00 - 16:00<br />
                            Sabtu: 08:00 - 12:00<br />
                            Minggu: Tutup
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form Kontak */}
              <div className="col-lg-6">
                <div className="card rounded-4 h-100">
                  <div className="card-body p-4">
                    <h5 className="card-title mb-4">Kirim Pesan</h5>
                    
                    <form>
                      <div className="mb-3">
                        <label htmlFor="nama" className="form-label">Nama</label>
                        <input type="text" className="form-control" id="nama" required />
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="telepon" className="form-label">Telepon</label>
                        <input type="tel" className="form-control" id="telepon" />
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="subjek" className="form-label">Subjek</label>
                        <select className="form-select" id="subjek" required>
                          <option value="">Pilih Subjek</option>
                          <option value="informasi">Permintaan Informasi</option>
                          <option value="layanan">Layanan Desa</option>
                          <option value="saran">Saran dan Masukan</option>
                          <option value="lainnya">Lainnya</option>
                        </select>
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="pesan" className="form-label">Pesan</label>
                        <textarea className="form-control" id="pesan" rows="4" required></textarea>
                      </div>
                      
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          <i className="bi bi-send me-2"></i>
                          Kirim Pesan
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Media Sosial */}
            <div className="card rounded-4 mt-4">
              <div className="card-body p-4 text-center">
                <h5 className="card-title mb-4">Ikuti Kami di Media Sosial</h5>
                
                <div className="d-flex justify-content-center gap-3">
                  <a href="#" className="btn btn-outline-primary btn-lg">
                    <i className="bi bi-facebook"></i>
                    <span className="ms-2 d-none d-sm-inline">Facebook</span>
                  </a>
                  <a href="#" className="btn btn-outline-danger btn-lg">
                    <i className="bi bi-instagram"></i>
                    <span className="ms-2 d-none d-sm-inline">Instagram</span>
                  </a>
                  <a href="#" className="btn btn-outline-info btn-lg">
                    <i className="bi bi-twitter-x"></i>
                    <span className="ms-2 d-none d-sm-inline">Twitter</span>
                  </a>
                  <a href="#" className="btn btn-outline-success btn-lg">
                    <i className="bi bi-whatsapp"></i>
                    <span className="ms-2 d-none d-sm-inline">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
