import { useState } from "react";
import "./image.css";

const photos = [
    { src: "src/assets/jane1.jpg", alt: "Memory 1" },
    { src: "src/assets/prof2.jpg", alt: "Memory 2" },
    { src: "src/assets/jane2.jpg", alt: "Memory 3" },
    { src: "src/assets/love.jpg", alt: "Memory 4" },
    { src: "src/assets/jane3.jpg", alt: "Memory 5" },
    { src: "src/assets/newto_blue_background.jpg", alt: "Memory 6" },
    { src: "src/assets/jane4.jpg", alt: "Memory 7" },
    { src: "src/assets/Screenshot_20250216_194313_Photos.jpg", alt: "Memory 8" },
    { src: "src/assets/jane5.jpg", alt: "Memory 9" },
    { src: "src/assets/Screenshot_20250216_194459_Photos.jpg", alt: "Memory 10" },
    { src: "src/assets/jane6.jpg", alt: "Memory 12" },
    { src: "src/assets/1720616285721.jpg", alt: "Memory 13" },
    { src: "src/assets/jane7.jpg", alt: "Memory 14" },
    { src: "src/assets/1720616140808.jpg", alt: "Memory 15" },
    { src: "src/assets/jane4.jpg", alt: "Memory 16" },
    { src: "src/assets/1720616140808.jpg", alt: "Memory 17" },
];
  
function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="carousel-container">
      <div className="marquee-container">
        <marquee className="animated-marquee"style={{textAlign:"center",fontFamily: "'Playwrite AU NSW', sans-serif"}}>
          💖 To my dearest Jane, this gallery is a tribute to our love, capturing our cherished moments. Each photo is a memory, a story, and a testament to our journey. I love you ❤️✨
        </marquee>
      </div>
      <video autoPlay loop muted playsInline className="background-video">
        <source src="src/assets/backgroundvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="carousel">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
          >
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={prevPhoto}>⟨</button>
      <button className="next-btn" onClick={nextPhoto}>⟩</button>
    </div>
  );
}
export default PhotoGallery;