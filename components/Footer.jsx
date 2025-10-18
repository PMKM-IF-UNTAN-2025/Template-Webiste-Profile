import React from 'react'
import Link from 'next/link'

export default function Footer({ site }){
  return (
    <footer className="footer" id="footer">
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
              </div>
              
              {/* jika ingin adjust data kontak, sosial media desa atau email, adjust pada data yang ada dibawah ini */}
              <div className="col-lg-6 d-flex justify-content-lg-center">
                <div className="d-flex flex-column gap-2 mb-4">
                  <a className="link-footer d-flex gap-3 align-items-center" href="mailto:example@gmail.com">
                    <span className="icon"><i className="bi bi-instagram"></i></span>
                    <span>Instagram</span>
                  </a>
                  <a className="link-footer d-flex gap-3 align-items-center" href="https://wa.me/+6281236626752">
                    <span className="icon"><i className="bi bi-facebook"></i></span>
                    <span>Facebook</span>
                  </a>
                  <a className="link-footer d-flex gap-3 align-items-center" href="https://wa.me/+6281236626752">
                    <span className="icon"><i className="bi bi-envelope"></i></span>
                    <span>example@gmail.com</span>
                  </a>
                  <a className="link-footer d-flex gap-3 align-items-center" href="https://wa.me/+6281236626752">
                    <span className="icon"><i className="bi bi-whatsapp"></i></span>
                    <span>+6281236626752</span>
                  </a>
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
