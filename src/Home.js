import React from 'react'
import "./style/home.css"
import Product from "./Product"

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home-img"
          className="home__image"
        />

        <div className="home__row">
          <Product
            title="The lean startup"
            price={ 29.99 }
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={ 5 }
          />
          <Product
            title="The lean startup"
            price={ 29.99 }
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={ 3 }
          />

        </div>
        
        <div className="home__row">
        <Product
          title="The lean startup"
          price={ 29.99 }
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          rating={ 5 }
        />
        <Product
          title="The lean startup"
          price={ 29.99 }
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          rating={ 1 }
        />
        <Product
          title="The lean startup"
          price={ 29.99 }
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          rating={ 5 }
        />
        </div>
        <Product
          title="The lean startup"
          price={ 29.99 }
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          rating={ 2 }
        />
        <div className="home__row">

        </div>
      </div>

    </div>
  )
}

export default Home
