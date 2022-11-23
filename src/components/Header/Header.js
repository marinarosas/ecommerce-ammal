import { HeaderContainer } from "./Header.styled";
import cartIcon from '../../assets/cart.svg'
import productIcon from '../../assets/product.svg'
import searchIcon from '../../assets/search.svg'

function Header(props) {
  const {goToCartScreen, goToProductsScreen} = props
    return (
      <HeaderContainer>
        <a>
            BlueShop
        </a>
        <div>
        <input placeholder="Search" />
        <button>
            <img src={searchIcon} alt="Search Icon"/>
        </button>
        </div>
        <button onClick = {goToProductsScreen}>
            <img src={productIcon} alt='Products Icon'/>
        </button>
        <button onClick = {goToCartScreen}>
            <img src={cartIcon} alt='Cart Icon'/>
        </button>
      </HeaderContainer>
    );
  }
  
  export default Header;