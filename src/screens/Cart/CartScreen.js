import React from "react";
import {MainCart, TitleCart} from './CartScreen.styled'
import ProductCard from "../../components/ProductCard/ProductCard"

function CartScreen(props) {

  const {cart} = props

  return (
    <MainCart>
      <TitleCart>
        <h1>Cart</h1>
        <hr/>
      </TitleCart>
      <section>
      {cart
      .map((product)=>(
        <ProductCard 
        key={product.id} 
        product={product}
        isOnCartScreen={true}/>
  ))}
      </section>
    </MainCart>
)}

export default CartScreen;
