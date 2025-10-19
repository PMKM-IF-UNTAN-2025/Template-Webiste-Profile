import React from 'react'
import visi_misi from '../../../data/visi_misi.json'

export default function VisiMisiPage(){
  return (
    <section className="page-section" id="visi-misi" >
      <div className="container px-4 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-center mb-4">Visi & Misi</h2>
            
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="card rounded-4 h-100">
                  <div className="card-body p-4">
                    <h4 className="card-title text-center mb-3">
                      <i className="bi bi-eye text-primary me-2"></i>
                      Visi Desa
                    </h4>
                    <p className="text-center fw-semibold">
                      {visi_misi[0].content}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="card rounded-4 h-100">
                  <div className="card-body p-4">
                    <h4 className="card-title text-center mb-3">
                      <i className="bi bi-bullseye text-success me-2"></i>
                      Misi Desa
                    </h4>
                    <ul className="list-unstyled">
                      {visi_misi[1].content.map((misi, index) => (
                        <li key={index} className="mb-2 d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <span>{misi}</span>
                        </li>
                      ))}
                    </ul>
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
