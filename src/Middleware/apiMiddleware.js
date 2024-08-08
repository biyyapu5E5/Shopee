import { productsList } from "../api"

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
    // console.log('state',state)
    // console.log('next', next)
    // console.log('action',action)

        if(action.type === 'fetchproductItems') {
            // fetch('https://fakestoreapi.com/products')
            // .then(res => res.json())
            // .then(data => dispatch({type : action.payload.onSuccess, payload: data}))
            // .catch(err => dispatch({type : action.payload.onFail, payload: err}))
            dispatch({type : action.payload.onSuccess, payload: productsList})
        }
        // else if(action.type === 'fetchcartItems'){
        //     fetch(`${basic_Url}/${action.payload.id}`)
        //         .then(res => res.json())
        //         .then(data => dispatch({type : action.payload.onSuccess, payload: data}))
        //         .catch(err => dispatch({type : action.payload.onFail, payload: err}))
        // }
    next(action)
}
