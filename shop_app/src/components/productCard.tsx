import estrella from '../assets/svg/estrella.svg'
import { IProduct, ProductCardProps } from '../models/product.model'
import '../styles/productCard.scss'
import carrito from '../assets/svg/carrito.svg'
import ojo from '../assets/svg/ojo.svg'
import { appState, appStateReducer, IAppState } from '../store/store'
import { Reducer, useReducer } from 'react'


export default function ProductCardDetail({ product } : ProductCardProps) {
    const [ currentState, appDispatch ] = useReducer<Reducer<IAppState, any>>(appStateReducer, appState)

    function addProductCart(product: IProduct){
        appDispatch({type: 'ADD_PRODUCT', payload: product})
    }
    
    return(
        <div className="card">
            <div className="product">
                <div className='product__actions'>
                    <button onClick={()=> {addProductCart(product)}}>
                        <img src={carrito}></img>
                    </button>
                    <button>
                        <img src={ojo}></img>
                    </button>
                </div>
                <img className="product__img" src={ product.image }></img>
                <div className='product__stars'>
                    <img className="star" src={ estrella }></img>
                    <img className="star" src={ estrella }></img>
                    <img className="star" src={ estrella }></img>
                    <img className="star" src={ estrella }></img>
                    <img className="star" src={ estrella }></img>
                </div>
            </div>
            <div className="info">
                <span className="info__name">{ product.title }</span>
                <span className="info__price">{ product.price } $</span>
            </div>
        </div>
    )
}