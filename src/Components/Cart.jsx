import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCartItem, increaseCartItem, removeCartItem } from '../Slice/cartSlice'

export default function Cart() {
    const cartItem = useSelector((state) => state.cartItem)
    // const loading = useSelector((state) => state.cartItem.loading)
    // const error = useSelector((state) => state.cartItem.error)
    const dispatch = useDispatch()
    // console.log(cartItem)

    // useEffect(() => {
    //     dispatch({
    //         type: 'fetchcartItems',
    //         payload: {
    //             onSuccess: updateAllcartItems.type,
    //             onFail: cartItemsError.type,
    //             id : cartItem.id
    //         }
    //     })
    // },[])

    return (
        <div className='cart-container' >
            <h3>Items in Your Cart</h3>
            <div className='cart-details-heading'>
                <div className='cart-details'>
                    <h4>Item</h4>
                    <div className='cart-sub-details'>
                        <h4>Price</h4>
                        <h4>Quantity</h4>
                        <h4>Total</h4>
                    </div>
                </div>
                <hr />
            </div>
            <div className='cart-sub-container'>
                {// loading ? <h1 id='loading-msg'><span id='loading-symbol'></span>Loading...</h1> : error ? <h2 id='error-msg'>{error}</h2> :
                    cartItem.map(item => {
                        return (
                            <div key={item.id}>
                                <div className='cart-details'>
                                    <div className='cart-detailing-sub'>
                                        <div className='cart-item-image'>
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="cart-price-rating-container">
                                            <h3>{item.title}</h3>
                                            <p className="rating">{item.rating.rate} ★ ★ ★ ★</p>
                                        </div>
                                    </div>
                                    <div className='cart-sub-details'>
                                        <p className="price">${item.price}</p>
                                        <div className='cart-btns'>
                                            <button onClick={() => dispatch(decreaseCartItem(item))} className='cart-btn'>-</button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => dispatch(increaseCartItem(item))} className='cart-btn'>+</button>
                                            <button onClick={() => dispatch(removeCartItem(item))} className='cart-btn'>Remove</button>
                                        </div>
                                        <p>${item.quantity * item.price}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
                <h4 className='total-price'>$
                    {
                        cartItem.reduce((accumalator, currentItem) => accumalator + currentItem.quantity * currentItem.price, 0)
                    }
                </h4>
            </div>
        </div>
    )
}
