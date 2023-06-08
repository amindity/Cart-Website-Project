import './basketStyle.css'
import {BsCurrencyDollar} from 'react-icons/bs'

const Basket = (props) => {
  return ( 
    <div className='w-100 basket-container rounded'>
    <div className='w-100 basket-itemList'>
      {props.basketList.map(item => {
        return (
        <div className="w-100 d-flex justify-content-between p-2">
            <h6 className='text-container'>{item.productName}</h6>
          <div className="d-flex">
            <span>{item.productPrice}$</span>
            <button className='btn btn-sm btn-danger'
            onClick={() => props.setBasketList(props.basketList.filter(product => product.productId !==item.productId))}
            >-</button>
          </div>
        </div>
        )
      })}
    </div>

    <div className="w-100 h-25 d-flex justify-content-center align-items-center flex-column">
      <span>
        {props.basketList.reduce((sum , current) => sum + current.productPrice , 0)}
        <BsCurrencyDollar className='fs-6'/>
      </span>
      <button className='btn btn-sm btn-danger'>خرید</button>
    </div>
    </div>
   );
}
 
export default Basket;