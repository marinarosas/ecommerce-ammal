import products from '../../assets/products.json'
import ProductCard from '../../components/ProductCard/ProductCard';
import { Main, TitleSection } from './ProductsScreen.styled';

function ProductsScreen(props) {

  const {addToCart} = props

  return (
    <Main>
      <TitleSection>
        <h1>Products</h1>
        <hr/>
      </TitleSection>
      <section>
      {products
      // .filter((product)=> product.name.toLowerCase().includes("W".toLowerCase()))
      //todo o map tem que retornar uma key
      .map((product)=>(
        <ProductCard 
        key={product.id} 
        product={product} 
        addToCart={addToCart}
        isOnProductScreen = {true}/>
  ))}
      </section>
    </Main>
  );
}

export default ProductsScreen;
