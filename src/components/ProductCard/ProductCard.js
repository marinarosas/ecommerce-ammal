import React from 'react'
import { ProductCardContainer, NameRating, PriceButton } from './ProductCard.styled'

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})

//para usar real substituir:
// --> o primeiro parametro por'pt-BR'
// --> o segundo parametro - prop -> currency: 'BRL'

const ProductCard = (props) => {
const {product} = props

  return (
    <ProductCardContainer>
          <img src={product.imageUrl} alt={product.imageAlt}/>
          <NameRating>
            <h2>{product.name}</h2>
            <span>{product.rating}</span>
          </NameRating>
          <PriceButton>
            <span>{priceFormatter.format(product.price)}</span>
            <button>+ Add to Cart</button>
          </PriceButton>
    </ProductCardContainer>
  )
}

export default ProductCard