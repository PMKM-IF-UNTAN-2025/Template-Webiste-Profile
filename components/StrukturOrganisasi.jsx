'use client'
import React, { useState, useEffect } from 'react'

function ImageOrPlaceholder({src, alt, title}) {
  const placeholder = '/placeholder-card.jpg'
  
  const handleImageError = (e) => {
    e.target.src = placeholder
    e.target.style.objectFit = 'cover'
    // Ensure the wrapper maintains its height
    const wrapper = e.target.closest('.struktur-org-image-wrapper')
    if (wrapper) {
      wrapper.style.minHeight = '600px'
      wrapper.style.height = '600px'
    }
  }
  
  return (
    <div className="position-relative struktur-org-image-wrapper" style={{minHeight: '600px', height: '600px'}}>
      <img 
        src={src || placeholder} 
        alt={alt} 
        className="img-fluid rounded shadow-sm struktur-org-image"
        onError={handleImageError}
      />
      {title && (
        <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white p-3 rounded-bottom">
          <h6 className="mb-0">{title}</h6>
        </div>
      )}
    </div>
  )
}

export default function StrukturOrganisasi({ images = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    if (images.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000) // Change slide every 5 seconds
    
    return () => clearInterval(interval)
  }, [images.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Default data jika tidak ada props
  const defaultImages = [
    {
      id: 1,
      title: "Struktur Organisasi Desa",
      imageUrl: "",
      description: "Gambar struktur organisasi pemerintahan desa"
    }
  ]

  const slides = images.length > 0 ? images : defaultImages

  return (
    <section className="page-section struktur-org-container">
      <div className="container px-4 mb-10 mt-10">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-xl-10">
            <div className="text-center mb-5" data-aos="fade-up" data-aos-duration="1500">
              <h2 className="section-heading">Struktur Organisasi Desa</h2>
              <p className="text-muted">Pemerintahan dan struktur organisasi desa kami</p>
            </div>
            
            {slides.length === 1 ? (
              // Single image display
              <div data-aos="fade-up" data-aos-duration="1000" className="struktur-org-content">
                <ImageOrPlaceholder 
                  src={slides[0].imageUrl} 
                  alt={slides[0].title}
                  title={slides[0].title}
                />
                {slides[0].description && (
                  <p className="text-center text-muted struktur-org-description">{slides[0].description}</p>
                )}
              </div>
            ) : (
              // Carousel for multiple images
              <div 
                id="strukturCarousel" 
                className="carousel slide carousel-fade struktur-org-content struktur-org-carousel" 
                data-bs-ride="carousel"
                data-aos="fade-up" 
                data-aos-duration="1000"
              >
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#strukturCarousel"
                      data-bs-slide-to={index}
                      className={index === currentSlide ? 'active' : ''}
                      aria-current={index === currentSlide ? 'true' : 'false'}
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
                
                {/* Carousel Inner */}
                <div className="carousel-inner">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                      data-bs-interval="5000"
                    >
                      <ImageOrPlaceholder 
                        src={slide.imageUrl} 
                        alt={slide.title}
                        title={slide.title}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Navigation Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#strukturCarousel"
                  data-bs-slide="prev"
                  onClick={prevSlide}
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#strukturCarousel"
                  data-bs-slide="next"
                  onClick={nextSlide}
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
