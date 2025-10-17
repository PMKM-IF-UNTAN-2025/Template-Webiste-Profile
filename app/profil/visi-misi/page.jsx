import React from 'react'

export default function VisiMisiPage(){
  return (
    <section className="page-section" id="pageSection">
      <div className="container px-4">
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
                      "Mewujudkan Desa Capkala yang maju, mandiri, dan sejahtera melalui 
                      pemberdayaan masyarakat dan pengelolaan sumber daya alam yang berkelanjutan."
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
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Mengembangkan ekonomi kerakyatan yang berkelanjutan
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Memperkuat infrastruktur desa untuk mendukung pembangunan
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Melestarikan budaya dan lingkungan hidup
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2"></i>
                        Meningkatkan pelayanan publik yang transparan dan akuntabel
                      </li>
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
