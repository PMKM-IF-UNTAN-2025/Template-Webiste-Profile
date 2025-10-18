'use client'
import React, { useState, useEffect } from 'react'

export default function StaffCarousel({ staffData }){
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Pastikan staffData tersedia dan memiliki panjang yang valid
  if (!staffData || !Array.isArray(staffData) || staffData.length === 0) {
    return (
      <div className="text-center p-4">
        <p>Tidak ada data staff yang tersedia</p>
      </div>
    )
  }
  
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
                    src={staff.imageUrl || '/img/staff/default.svg'} 
                    alt={staff.name}
                    onError={(e) => {
                      e.target.src = '/img/staff/default.svg'
                    }}
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
