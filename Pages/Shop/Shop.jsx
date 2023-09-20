import React from 'react'
// import  PRODUCTS  from '../../Components/Products'

import '../Shop/Shop.css'
import { PRODUCTS } from '../../Components/Products'
import Product from './Product'




const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>

      </div>
      <div className='Products'>
           {PRODUCTS.map((product) => 
           <Product data={product}/>
           
           )}
      </div>

    </div>
  )
}

export default Shop
