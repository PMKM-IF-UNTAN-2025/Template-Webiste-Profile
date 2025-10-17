'use client'
import React, { useState, useEffect } from 'react'

export default function StaffCarousel(){
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Sample staff data - replace with actual data
  const staffData = [
    {
      id: 1,
      name: 'Kepala Desa',
      position: 'Kepala Desa',
      image: '/img/staff/default.svg'
    },
    {
      id: 2,
      name: 'Sekretaris Desa',
      position: 'Sekretaris Desa',
      image: '/img/staff/default.svg'
    },
    {
      id: 3,
      name: 'Kepala Dusun',
      position: 'Pelaksana Kewilayahan',
      image: '/img/staff/default.svg'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % staffData.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [staffData.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % staffData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + staffData.length) % staffData.length)
  }

  return (
    <div id="carouselStaffs" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {staffData.map((staff, index) => (
          <div 
            key={staff.id} 
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`} 
            data-bs-interval="5000"
          >
            <div className="container px-5">
              <div className="card rounded-4 m-0">
                <div className="ratio ratio-1x1">
                  <img 
                    className="rounded-4 object-fit-cover" 
                    src={staff.image} 
                    alt={staff.name}
                  />
                </div>
                <div className="card-img-overlay bg-transparent rounded-4 d-flex flex-column justify-content-end p-2">
                  <div className="bg-img-overlay-2 p-2 rounded-4">
                    <h5 className="card-title text-center text-clamp-1">{staff.name}</h5>
                    <hr className="my-2" />
                    <p style={{fontSize: '14px'}} className="card-text text-center">{staff.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button 
        className="carousel-control-prev" 
        type="button" 
        data-bs-target="#carouselStaffs" 
        data-bs-slide="prev"
        onClick={prevSlide}
      >
        <span className="carousel-icon-custom text-bg-dark me-auto" aria-hidden="true">
          <i className="bi bi-chevron-left"></i>
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#carouselStaffs" 
        data-bs-slide="next"
        onClick={nextSlide}
      >
        <span className="carousel-icon-custom text-bg-dark ms-auto" aria-hidden="true">
          <i className="bi bi-chevron-right"></i>
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
