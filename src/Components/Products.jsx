import React, {useEffect} from 'react'
// import { productsList } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem} from '../Slice/cartSlice'
// import { updateAllproducts, productsError} from '../Slice/productSlice'
import { apiData } from '../Slice/productSlice'

export default function Products() {
    const productsList = useSelector((state) => state.productItem.productList)
    const loading = useSelector((state) => state.productItem.loading)
    const error = useSelector((state) => state.productItem.error)
    const dispatch = useDispatch()

    // useEffect(()=> {
    //     dispatch({
    //         type : 'fetchproductItems', 
    //         payload : {
    //             onSuccess : updateAllproducts.type,
    //             onFail : productsError.type
    //     }})
    // },[dispatch])

    useEffect(()=> {
        dispatch(apiData())
    },[dispatch])

    
    return (
        <div className="products-container">
            {loading ? <div id = 'loading-msg'><span id = 'loading-symbol'></span>Loading...</div> : error ? <div id = 'error-msg'>{error}</div> :
                productsList.map(item => {
                    return (
                        <div key={item.id} className='product-item'>
                            <div className ='product-image'>
                                <img src={item.image} alt = {item.title}/>
                            </div>
                            <h3>{item.title}</h3>
                            <div className="price-rating-container">
                                <p className="rating">
                                    {item.rating.rate} ★ ★ ★ ★ ★
                                </p>
                                <p className="price">${item.price}</p>
                            </div>
                            <div className='product-btns'>
                                <button onClick = {()=> dispatch(addCartItem(item))} className='cart-btn'>Add to Cart</button>
                                <button className='cart-btn'>Buy Now</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
