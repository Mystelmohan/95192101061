import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const Home = () => {
  const[posts,setPosts]=useState([])
  useEffect(()=>{axios.get("http://localhost:3001/Products").then(res=>setPosts(res.data)).catch(err=>console.log(err))
  console.log(posts)},[])

  return (
    <div>
        <h1>Products</h1>
    <div className='container'>
        
        {
            posts.map(x=>
                
                <div className='products'>
                <p>Product Name: {x.productName}</p>
                <p>Price : {x.price}</p>
                <p>Rating : {x.rating}</p>
                <p>Discount : {x.discount}</p>
                <p>availability: {x.availability}</p>
                </div>
                
            )
        }
    </div>
    </div>
  )
}
