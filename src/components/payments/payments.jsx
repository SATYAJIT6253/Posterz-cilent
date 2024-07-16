import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import './payment.scss';
import {BsFillCartCheckFill} from 'react-icons/bs'
import {BiErrorCircle} from 'react-icons/bi'
import { resetCart } from '../../redux/cartSlice';
function Payments() {
  const params = useParams();
  const status = params.status;
  const dispatch = useDispatch();
  const infoData = {
    success: {
        message: "Your order has been placed",
        cta: 'Shop More',
        icon: <BsFillCartCheckFill />,
    },
    failed: {
        message: "Payment Failed",
        cta: 'Try Again',
        icon: <BiErrorCircle />,
    },
}
if(status === 'success') {
  dispatch(resetCart())
}
  return (
    
    <div className='payments'>
      <div className="icon">{infoData[status].icon}</div>
        <h2 className="message">{infoData[status].message}</h2>
        <button className="button">{infoData[status].cta}</button>
    </div>
  )
}

export default Payments;