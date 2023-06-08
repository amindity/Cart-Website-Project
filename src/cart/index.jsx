import './cartStyle.css'
import {AiTwotoneShop , AiFillStar} from 'react-icons/ai'
import {BsCurrencyDollar} from 'react-icons/bs'

const Cart = (props) => {
  return ( 
    <div className='w-100 cart--container p-4 rounded'>
     <div className="w-100 cart--img position-relative">
      <img className='w-100 h-100' src={props.productImg} alt="img" />
      <div className="cart-tag position-absolute top-0 px-3 py-1">{props.productTag}</div>
     </div>

     <h5 className='py-1 m-0 text-muted text-container'>{props.productName}</h5>

     <div className="p-0 text-muted">
      <AiTwotoneShop/>
      <span>{props.productCategory}</span>
     </div>

     <div className="d-flex align-items-center gap-1 py-1">
      <AiFillStar className='text-warning fs-5'/>
      <h5 className='fs-5'>{props.productRatingRate}</h5>
      <span className='text-muted'>
        (
          <span>{props.productRatingCount}</span>نظر
        )
      </span>
     </div>

     <div className="d-flex justify-content-between py-1">
      <div>
        <button className='cart-button rounded'
        onClick={()=> props.setBasketList([...props.basketList , 
          {productName : props.productName, 
           productPrice : props.productPrice, 
           productId : props.productId
          }])}
        >+</button>
      </div>
      <div className="d-flex align-items-center">
        <h4 className='fs-4'>{props.productPrice}</h4>
        <BsCurrencyDollar className='fs-4'/>
      </div>
     </div>
    </div>
   );
}
 
export default Cart;