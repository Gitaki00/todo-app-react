import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Navbar />
       
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="https://i.pinimg.com/736x/85/86/3d/85863da42ef81e805d1715427cd8676c.jpg" class="d-block w-100" alt="..." height={500}></img>
      <div class="carousel-caption d-none d-md-block">
        <h5><b>What's on your list today?</b></h5>
        <p><b>Plan your day with purpose.
Achieve more with less stress.</b></p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.pinimg.com/736x/5a/66/bd/5a66bddf13639305327dcfdea9a62ff8.jpg" class="d-block w-100" alt="..." height={500}></img>
      <div class="carousel-caption d-none d-md-block">
        <h5><b>Done planning your day?</b></h5>
        <p><b>Stay focused, stay sharp.
Let your list lead the way.</b></p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.pinimg.com/1200x/9c/85/f7/9c85f7c3e760c8909c44e70f3b08e017.jpg" class="d-block w-100" alt="..." height={500}></img>
      <div class="carousel-caption d-none d-md-block">
        <h5><b>How productive are you feeling?</b></h5>
        <p><b>Smarter planning, better results.
Your productivity, redefined.</b></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home