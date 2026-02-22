import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (

    <div>

      {/* Top Orange Navbar */}
      <div style={{
        backgroundColor: "#ff6b00",
        padding: "10px 0"
      }}>

        <div className="container d-flex justify-content-between">

          <h5 style={{color:"white"}}>
            <Link to="/" style={{
              textDecoration:"none",
              color:"white"
            }}>
              MEAL FINDER
            </Link>
          </h5>

          <div style={{color:"white"}}>☰</div>

        </div>

      </div>

      {/* Banner Section */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0",
          textAlign: "center",
          color: "white"
        }}
      >

        <h3>What are your favorite cuisines?</h3>

        <p>PERSONALIZE YOUR EXPERIENCE</p>

        <div className="d-flex justify-content-center mt-3">

          <input
            type="text"
            placeholder="Search recipes here..."
            className="form-control w-50"
          />

          <button className="btn btn-warning ms-2">
            🔍
          </button>

        </div>

      </div>

    </div>

  )

}

export default Header