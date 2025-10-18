import React from 'react'

// VideoSection menampilkan video YouTube yang diembed dalam rasio 16:9
// jika ingin mengganti video, ubah URL pada atribut src di dalam iframe gunakan fitur embed dari YouTube

export default function VideoSection(){
  return (
    <div className="ratio ratio-16x9">
      <iframe 
        className="rounded-4" 
        src="https://www.youtube.com/embed/DKZi7VoVYoQ?si=nDDUYZl_AgmdmJHZ"  
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>
    </div>
  )
}
