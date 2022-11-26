import React from 'react'
import { priceFormatter } from '../../utils/priceFormatter'
import { ProductCardContainer, NameRating, PriceButton } from './ProductCard.styled'

const ProductCard = (props) => {
const {product, 
  addToCart,
  isOnProductScreen,
  isOnCartScreen,
  increaseQuantityInCart,
  decreaseQuantityInCart
} = props

  return (
    <ProductCardContainer>
          <img src={product.imageUrl} alt={product.imageAlt}/>
          <NameRating>
            <h2>{product.name}</h2>
            <span>{product.rating}</span>
          </NameRating>
          <PriceButton>
            <span>{priceFormatter.format(product.price)}</span>
            {isOnCartScreen && product.quantity > 1 && 
              <button onClick={() => decreaseQuantityInCart(product)}>-</button>
             }
            {isOnCartScreen && 
              <span>{product.quantity}</span>
            }
            {isOnCartScreen && 
              <button onClick={() => increaseQuantityInCart(product)}>+</button>
             }
            {isOnProductScreen && <button onClick={()=>addToCart(product)} >+ Add to Cart</button>}
          </PriceButton>
    </ProductCardContainer>
  ) 
}

export default ProductCard