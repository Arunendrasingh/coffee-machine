import React from 'react'
import '../CSS/Home.css'
// Importing json dara from json file.
import prodDetail from '../products.json'
import Product from './Product'



export default function Home() {
  return (
    <div id='home-main'>
      <div className='row m-1'>
        {prodDetail.Product.map((value) => 
            <Product key={value.ImgSrc} img={value.ImgSrc} title={value.ProductName} price={value.price} />
            )}
      </div>
    </div>
  )
}
