import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import StrukturOrganisasi from '../components/StrukturOrganisasi'
import VideoSection from '../components/VideoSection'
import LinkSection from '../components/LinkSection'
import StaffCarousel from '../components/StaffCarousel'
import VisiMisiPage from './profil/visi-misi/page.jsx'

// import data (JSON files)
import hero from '../data/hero.json'
import strukturOrganisasi from '../data/struktur-organisasi.json'
import staffData from '../data/staff.json'
import FasilitasPublik from '../layout/fasilitas-publik'
import DataWilayah from '../layout/data-wilayah'

export default function Home(){
  return (
    <>
      {/* Hero */}
      <HeroCarousel slides={hero} />

      {/* Link */}
      <LinkSection />

      {/* Visi Misi */}
      <VisiMisiPage />

      {/* Perangkat Desa & Video */}
      <section className="page-section mt-10">
        <div className="container px-4">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-5">
              <div data-aos="fade-up" data-aos-duration="1000">
                <StaffCarousel staffData={staffData} />
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

      {/* Struktur Organisasi */}
      <section id="struktur-organisasi">
        <StrukturOrganisasi images={strukturOrganisasi} />
      </section>

      {/* Fasilitas Publik */}
      <FasilitasPublik />
    
      {/* Data Wilayah */}
      <DataWilayah />
    </>
  )
}
