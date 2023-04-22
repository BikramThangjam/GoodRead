import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const CartItems = () => {
    const {carts, numberCart} = useSelector(state => state);
    return (
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
                                    <img className='img-thumbnail' src="https://placehold.it/100/888888" />

                                </td>
                                <td>
                                    <h3>{ item.title } </h3>
                                    <p>{ item.author }</p>
                                </td>
                                <td>
                                    <h2>{ item.quantity }</h2>
                                </td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CartItems;