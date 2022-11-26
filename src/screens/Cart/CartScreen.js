import React from "react";
import {MainCart, TitleCart} from './CartScreen.styled'
import ProductCard from "../../components/ProductCard/ProductCard"
import { priceFormatter } from "../../utils/priceFormatter";

function CartScreen(props) {

  const {cart, increaseQuantityInCart, decreaseQuantityInCart} = props

  const total = cart.reduce((acc,product)=> (product.price * product.quantity) + acc, 0)

  return (
    <MainCart>
      <TitleCart>
        <h1>Cart | Total = {priceFormatter.format(total)}</h1>
        <hr/>
      </TitleCart>
      <section>
      {cart
      .map((product)=>(
        <ProductCard 
        key={product.id} 
        product={product}
        isOnCartScreen={true}
        increaseQuantityInCart={increaseQuantityInCart}
        decreaseQuantityInCart={decreaseQuantityInCart}
        />
  ))}
      </section>
    </MainCart>
)}

export default CartScreen;
