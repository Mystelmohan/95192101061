import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const Home = () => {
  const[post,setpost]=useState([])
  useEffect(()=>{axios.get("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000")
  .then(res=>setpost(res.data))
  .catch(err=>console.log(err))
  console.log(post)},[])

  return (
    <div>
        {
            post.map(x=>{
                <div>
                <p>{x.productName}</p>
                <p>{x.price}</p>
                <p>{x.rating}</p>
                <p>{x.discount}</p>
                <p>{x.availability}</p>
                </div>
            })
        }
    </div>
  )
}
