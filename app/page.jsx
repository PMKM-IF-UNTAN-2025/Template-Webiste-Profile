import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import VideoSection from '../components/VideoSection'
import CardList from '../components/CardList'
import MapSection from '../components/MapSection'
import LinkSection from '../components/LinkSection'
import StaffCarousel from '../components/StaffCarousel'

// import data (JSON files)
import site from '../data/site.json'
import hero from '../data/hero.json'
import berita from '../data/berita.json'
import wisata from '../data/wisata.json'
import umkm from '../data/umkm.json'
import FasilitasPublik from '../layout/fasilitas-publik'

export default function Home(){
  return (
    <>
      {/* Hero */}
      <HeroCarousel slides={hero} />
      
      {/* Fasilitas Publik */}
      <FasilitasPublik />
      
      
      {/* Perangkat Desa & Video */}
      <section className="page-section">
        <div className="container px-4">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-5">
              <div data-aos="fade-up" data-aos-duration="1000">
                <StaffCarousel />
              </div>
            </div>
            <div className="col-lg-7">
              <div data-aos="fade-up" data-aos-duration="1000">
                <VideoSection />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pariwisata */}
      <section className="page-section">
        <div className="card rounded-0 m-0">
          <div className="card-body p-0">
            <div className="container p-4">
              <h2 className="text-center mb-4">Destinasi Pariwisata</h2>
              <CardList title="" items={wisata} ctaText={'Lihat'} />
              <div className="d-flex justify-content-center align-items-center">
                <a href="/pariwisata" className="btn btn-primary">Lihat Semua</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Lokasi */}
      <MapSection />
    </>
  )
}
