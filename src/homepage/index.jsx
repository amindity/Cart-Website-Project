import { useEffect, useState } from 'react';
import Cart from '../cart';
import './homepageStyle.css'
import axios from 'axios';

const Homepage = () => {
  const [productList , setProductList] = useState([])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((data) => {setProductList(data.data)})
    .catch((err) => console.log(err))
  },[])
  return ( 
    <div dir='rtl'>
      <div className="w-100 h-100 d-flex flex-wrap gap-2 justify-content-center align-items-center">
      {productList.map(item => {
        return(
          <div key={`productList-${item.id}`} className="home-container">
            <Cart 
            productId = {item.id}
             productImg = {item.image}
             productName= {item.title}
             productCategory = {item.category}
             productRatingRate ={item.rating.rate}
             productRatingCount = {item.rating.count}
             productPrice = {item.price}
             productTag = 'موجود محدود'
            />
          </div>
        )
      })}
      </div>
    </div>
   );
}
 
export default Homepage;