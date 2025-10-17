import React from 'react'

export default function TentangPage(){
  return (
    <section className="page-section" id="pageSection">
      <div className="container px-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-center mb-4">Tentang Desa</h2>
            
            <div className="card rounded-4">
              <div className="card-body p-4">
                <div className="row g-4">
                  <div className="col-md-6">
                    <h5>Sejarah Desa</h5>
                    <p>
                      Desa Capkala memiliki sejarah yang panjang dan kaya akan budaya lokal. 
                      Berdiri sejak tahun 1950, desa ini telah mengalami berbagai perkembangan 
                      dari masa ke masa.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h5>Visi Desa</h5>
                    <p>
                      "Mewujudkan Desa Capkala yang maju, mandiri, dan sejahtera melalui 
                      pemberdayaan masyarakat dan pengelolaan sumber daya alam yang berkelanjutan."
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h5>Misi Desa</h5>
                    <ul>
                      <li>Meningkatkan kualitas sumber daya manusia</li>
                      <li>Mengembangkan ekonomi kerakyatan</li>
                      <li>Memperkuat infrastruktur desa</li>
                      <li>Melestarikan budaya dan lingkungan</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Kondisi Geografis</h5>
                    <p>
                      Desa Capkala terletak di Kecamatan Capkala, Kabupaten Bengkayang, 
                      Provinsi Kalimantan Barat. Memiliki luas wilayah sekitar 1.200 hektar 
                      dengan topografi yang bervariasi.
                    </p>
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
