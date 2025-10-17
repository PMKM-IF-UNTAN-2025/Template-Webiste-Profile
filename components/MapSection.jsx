import React from 'react'
import site from '../data/site.json'

export default function MapSection(){
  const geografis = {
    lokasi: 'Desa Capkala, Kecamatan Capkala, Kabupaten Bengkayang',
    timur: 'Desa Indah',
    barat: 'Desa Bahagia', 
    selatan: 'Desa Makmur',
    utara: 'Desa Sejahtera',
    luas: '1.200 Ha'
  }

  return (
    <section className="page-section">
      <div className="card rounded-0 m-0">
        <div className="card-body p-0">
          <div className="container p-4">
            <div className="row justify-content-center g-4">
              <div className="col-lg-7">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="ratio ratio-16x9">
                    <iframe 
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(geografis.lokasi)}&hl=id&m=h&output=embed`} 
                      className="rounded-4" 
                      style={{border:0}} 
                      allowFullScreen="" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th colSpan="4">Batas Wilayah</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="align-middle">
                          <td>Timur</td>
                          <td>:</td>
                          <td>{geografis.timur}</td>
                        </tr>
                        <tr className="align-middle">
                          <td>Barat</td>
                          <td>:</td>
                          <td>{geografis.barat}</td>
                        </tr>
                        <tr className="align-middle">
                          <td>Selatan</td>
                          <td>:</td>
                          <td>{geografis.selatan}</td>
                        </tr>
                        <tr className="align-middle">
                          <td>Utara</td>
                          <td>:</td>
                          <td>{geografis.utara}</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="align-middle">
                          <th>Luas</th>
                          <th>:</th>
                          <th>{geografis.luas}</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
