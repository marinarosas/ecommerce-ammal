import CartScreen from "./screens/Cart/CartScreen";
import ProductsScreen from "./screens/Products/ProductsScreen";
import {useState} from 'react'
import Header from "./components/Header/Header";

function App() {
  const [activeScreen, setActveScreen] = useState("ProductsScreen")
  const [cart, setCart] = useState([])

  const goToProductsScreen = () => setActveScreen ("ProductsScreen")
  const goToCartScreen = () => setActveScreen ("CartScreen")

  const addToCart = (newProduct) => {
      const newCart = [...cart, newProduct]
      setCart(newCart)
  }
  
  const renderScreen = () =>{
    switch (activeScreen) {
      case "ProductsScreen":
        return <ProductsScreen addToCart={addToCart}/>
      case "CartScreen":
        return <CartScreen cart={cart}/>
      default:
        return <div>Tela não existe</div>
    }
  }
  return (
  <>
  <Header 
    goToProductsScreen={goToProductsScreen}
    goToCartScreen={goToCartScreen}
    itemsInCart={cart.length}
  />
  {renderScreen()}
  </>
  )
}

export default App;
