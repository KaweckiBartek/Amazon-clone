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
            id={ 1111 }
            title="JBL Boombox 2"
            price={ 509.99 }
            image="https://image.ceneostatic.pl/data/products/93239770/i-jbl-boombox-2-20496.jpg"
            rating={ 5 }
          />
          <Product
            id={ 2222 }
            title="Iphone 12 PRO"
            price={ 1529.99 }
            image="https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/10/pr_2020_10_14_12_25_0_352_00.jpg"
            rating={ 3 }
          />

        </div>

        <div className="home__row">
          <Product
            id={ 3333 }
            title="Apple MacBook Pro 2020 13,3/i5/8GB/256GB/MacOS"
            price={ 2029.99 }
            image="https://image.ceneostatic.pl/data/products/93414694/i-apple-macbook-pro-2020-13-3-i5-8gb-256gb-macos-mxk32zea.jpg"
            rating={ 5 }
          />
          <Product
            id={ 4444 }
            title="KUBERG CROSS Young Rider"
            price={ 3999.99 }
            image="https://e-hulajnoga.pl/environment/cache/images/0_0_productGfx_4ede3d232ac65b86843f92eaba8b5b1e.jpg"
            rating={ 4 }
          />
          <Product
            id={ 5555 }
            title="The lean startup"
            price={ 29.99 }
            image="https://swiatpojazdow.pl/390-large_default/hulajnoga-elektryczna-segway-kickscooter-es1.jpg"
            rating={ 5 }
          />
        </div>
        <Product
          id={ 6666  }
          title="Segway Kickscooter ES1"
          price={ 499.99 }
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          rating={ 5 }
        />
        <div className="home__row">

        </div>
      </div>

    </div>
  )
}

export default Home
