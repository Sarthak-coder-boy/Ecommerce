import React from 'react'
import Products from './Products'

export default function Home() {
  return (
    <div className='hero'>
        <div className="card text-white bg-dark border-0">
  <img src="/assests/cart.jpg" className="card-img" alt="Background" height="550px" />
  <div className="card-img-overlay d-flex flex-column justify-content-around">
    <div className="container">
    <h5 className="card-title display-3 fw-bold mb-0">New Season Arrivals</h5>
    <p className="card-text lead fs-2">Check Out All New Arrivals</p>
    </div>
   
  </div>
</div>
<Products/>
    </div>
  )
}
