import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import "../CartItems/cartStyle.css"
import { increaseQuantity, decreaseQuantity } from '../../../redux/actions/cart-actions';

const CartItems = () => {
    const {carts, numberCart} = useSelector(state => state);
    const dispatch = useDispatch()

    const increment = (item) => {
        dispatch(increaseQuantity(item));
    }
    const decrement = (item) => {
        dispatch(decreaseQuantity(item));
    }

    return (
        <>
            {numberCart ? (
            <div>
            <h2 className="text-center">Your Cart ({numberCart} items)</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan={2}>Items</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map((item, index) => (
                            <tr key={ index }>
                                <td>
                                    <img className='img-thumbnail img_thumbnail' src={item.image} />

                                </td>
                                <td>
                                    <h3>{ item.title } </h3>
                                    <p>{ item.author }</p>
                                </td>
                                <td className='d-flex '>
                                    <button className='qty-btn' onClick={()=>decrement(item)}>-</button>
                                    <h2 className='px-3'>{ item.quantity }</h2>
                                    <button className='qty-btn' onClick={()=>increment(item)}>+</button>
                                </td>
                                
                            </tr>
                            
                        ))
                        
                    }
                   
                </tbody>
            </table>
        </div>
        ): (
            <h4 className="text-center">Your cart is empty!</h4>
        )}
        </>
    )
}

export default CartItems;