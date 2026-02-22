import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {

    const { data } = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    )

    setCategories(data.categories)

  }

  return (

    <div style={{backgroundColor:"#f5f5f5", padding:"40px 0"}}>

      <div className="container">

        <h5 style={{
          letterSpacing:"2px",
          marginBottom:"20px"
        }}>
          CATEGORIES
        </h5>

        <div className="row">

          {
            categories.map((cat) => (

              <div
                className="col-lg-3 col-md-4 col-sm-6"
                key={cat.idCategory}
              >

                <div
                  className="card p-2 mb-4"
                  style={{
                    borderRadius:"10px",
                    boxShadow:"0 2px 5px rgba(0,0,0,0.1)"
                  }}
                >

                  <img
                    src={cat.strCategoryThumb}
                    className="img-fluid"
                  />

                  <h6
                    className="text-center mt-2"
                    style={{fontWeight:"500"}}
                  >
                    {cat.strCategory}
                  </h6>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  )

}

export default Home