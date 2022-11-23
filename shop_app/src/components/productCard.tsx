import estrella from '../assets/svg/estrella.svg'
import { ProductCardProps } from '../models/product.model'
import '../styles/productCard.scss'
import carrito from '../assets/svg/carrito.svg'
import ojo from '../assets/svg/ojo.svg'


export default function ProductCardDetail({ product } : ProductCardProps) {
    return(
        <div className="card">
            <div className="product">
                <div className='product__actions'>
                    <button>
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