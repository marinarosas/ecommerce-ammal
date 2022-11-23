import CartScreen from "./screens/Cart/CartScreen";
import ProductsScreen from "./screens/Products/ProductsScreen";
import {useState} from 'react'
import Header from "./components/Header/Header";

function App() {
  const [activeScreen, setActveScreen] = useState("ProductsScreen")

  const goToProductsScreen = () => setActveScreen ("ProductsScreen")
  const goToCartScreen = () => setActveScreen ("CartScreen")
  
  const renderScreen = () =>{
    switch (activeScreen) {
      case "ProductsScreen":
        return <ProductsScreen/>
      case "CartScreen":
        return <CartScreen/>
      default:
        return <div>Tela não existe</div>
    }
  }
  return (
  <>
  <Header 
    goToProductsScreen={goToProductsScreen}
    goToCartScreen={goToCartScreen}
  />
  {renderScreen()}
  </>
  )
}

export default App;
