'use client'
import React, { useState, useEffect } from 'react'

function ImageOrPlaceholder({src, alt}){
  const placeholder = '/placeholder-hero.jpg'
  return (
    <img 
      src={src || placeholder} 
      alt={alt} 
      className="carousel-img object-fit-cover d-block w-100"
    />
  )
}

export default function HeroCarousel({slides}){
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)
    
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="hero">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === currentSlide ? 'active' : ''}
              aria-current={index === currentSlide ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        
        <div className="carousel-inner rounded-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              data-bs-interval="10000"
            >
              <div className="carousel-img-overlay"></div>
              <ImageOrPlaceholder src={slide.imageUrl} alt={slide.title} />
              <div className="carousel-caption text-center d-flex align-items-center justify-content-center">
                <div className="container">
                  <h2 className="mb-3" data-aos="fade-down" data-aos-duration="1000">
                    {slide.title}
                  </h2>
                  <p className="fs-5 mb-3" data-aos="fade-down" data-aos-duration="1000">
                    {slide.desc}
                  </p>
                  {slide.relevan_url && (
                    <div data-aos="fade-up" data-aos-duration="1000">
                      <a href={slide.relevan_url} className="btn btn-lg btn-primary">
                        Lihat Selengkapnya
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
          onClick={prevSlide}
        >
          <span className="carousel-control-prev-icon d-none" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
          onClick={nextSlide}
        >
          <span className="carousel-control-next-icon d-none" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}
