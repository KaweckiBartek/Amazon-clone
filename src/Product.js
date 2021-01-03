import React from 'react'
import "./style/product.css"

const Product = ({ title, image, price, rating }) => {
  return (
    <div className="product">

      <div className="produc__info">
        <p>{ title }</p>
        <p className="product__price">
          <small>$</small>
          <strong>{ price }</strong>
        </p>
        <div className="product__rating">
          { Array(rating)
            .fill()
            .map((_, i) => <p className="rating__star" key={i}>⭐</p>)}
          
          
        </div>
      </div>

      <img src={ image } alt="product-img"
        className="product__image"
      />

      <button className="product__button">Add to Basket</button>
    </div>
  )
}

export default Product
