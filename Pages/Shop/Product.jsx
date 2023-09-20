import React, { useContext } from 'react'
import ShopContext from './Context/Shop-context';


export const Product = (props) => {
  const { addToCart,cartItems } = useContext(ShopContext)
    const { id,ProductName,Price,ProductImage } = props.data; 
    const cartItemAmount = cartItems[id]
    return (
    <div className='body'>
    <div className='product'>
     <img className='product-img' src={ProductImage} style={{width:'250px',height:'260px'}}/>
     <p>{id}</p>
     <div className="description">
        <p><b>{ProductName}</b></p>
        <p> $ {Price}</p>
     </div>
    <button className='addToCartBttn' onClick={() => addToCart(id)}>
      Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>       


    </div>
    </div>
  )
}

export default Product
