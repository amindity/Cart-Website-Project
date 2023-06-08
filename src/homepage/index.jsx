import { useEffect, useState } from 'react';
import Cart from '../cart';
import './homepageStyle.css'
import axios from 'axios';
import Basket from '../basket';

const Homepage = () => {
  const [productList , setProductList] = useState([])
  const [basketList , setBasketList] = useState([])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((data) => {setProductList(data.data)})
    .catch((err) => console.log(err))
  },[])
  return ( 
    <div dir='rtl' className='bg-lgiht d-flex'>
      
      <div className="w-25 h-100">
        <Basket
        basketList = {basketList}
        setBasketList = {setBasketList}
        />
      </div>

      <div className="w-75 h-100 d-flex flex-wrap gap-2 justify-content-center align-items-center">
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
             basketList = {basketList}
             setBasketList = {setBasketList}
            />
          </div>
        )
      })}
      </div>
    </div>
   );
}
 
export default Homepage;