'use client'
import React, { useState, useEffect } from 'react'

export default function ScrollTop(){
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="position-fixed bottom-0 end-0 mb-4 me-4 z-1">
      <button 
        className={`btn btn-primary icon ${isVisible ? 'd-block' : 'd-none'}`} 
        id="scrollToTopBtn"
        onClick={scrollToTop}
      >
        <i className="bi bi-chevron-up"></i>
      </button>
    </div>
  )
}
