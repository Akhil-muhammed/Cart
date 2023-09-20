import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartlog from '../Assets/images/shopping-cart.png';
import '../Components/Navbar.css';
import ShopContext from '../Pages/Shop/Context/Shop-context';

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  const totalQuantity = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);

  return (
    <div className='Navbar'>
      <div className='links'>
        <Link className='shop' to="/">Shop</Link>
        <Link to="/cart">
          <div>
            <p style={{fontSize:12,height:'12px',width:'12px',padding:2,borderRadius:70,backgroundColor:'red',color: 'white',position:'absolute',marginLeft:'8px',marginTop:'-12px'}}>{totalQuantity}</p>
            <img className='cartlog' src={cartlog} alt="Cart" style={{marginTop:'0px'}} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
