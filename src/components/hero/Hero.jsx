import React from 'react';
import './hero.scss';
import { useNavigate } from 'react-router-dom';
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero">
        <div className="hero-content">
            <h1 className="heading">Exclusive Print and Artwork</h1>
            <p className="subheading">
                Exclusive Art Pieces,for the Exclusive You.
            </p>
            <button className="btn-primary" onClick={() => navigate('/category/tv-shows')}>Explore More</button>
        </div>
    </div>
  )
}

export default Hero;