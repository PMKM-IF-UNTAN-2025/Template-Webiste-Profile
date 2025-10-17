import React from 'react'

export default function VideoSection(){
  return (
    <div className="ratio ratio-16x9">
      <iframe 
        className="rounded-4" 
        src="https://www.youtube.com/embed/0R7a7k0Y7XU" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>
    </div>
  )
}
