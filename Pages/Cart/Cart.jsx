import React, { useContext } from 'react';
import ShopContext from '../Shop/Context/Shop-context';
import { PRODUCTS } from '../../Components/Products';

const Cart = () => {
  const { cartItems,addToCart,removeFromCart,getTotalCartAmount } = useContext(ShopContext);
  // const { id,ProductName,Price,ProductImage } = props.data; 
  console.log(cartItems);
  const totalAmount=getTotalCartAmount()

  return (
    <div>
      {PRODUCTS.map((item)=>{
        if(cartItems[item.id] !== 0)
        return(
          <div className='body'>
          <div className='product'>
           <img className='product-img' src={item.ProductImage} style={{width:'250px',height:'260px'}}/>
           <div className="description">
              <p><b>{item.ProductName}</b></p>
              <p> $ {item.Price}</p>
              <div className='btn'>
              <button className='sbtn' onClick={()=>addToCart(item.id)}>+</button>
              <p>{cartItems[item.id]}</p>
              <button className='sbtn' onClick={()=>removeFromCart(item.id)}>-</button> 
              </div>
              <p>Total: $ {item.Price * cartItems[item.id]}</p>
              
           </div>
          </div>
          </div>

        )
      })}
      <p>
         Total  ${totalAmount}
      </p>
    </div>
  );
}


export default Cart;
