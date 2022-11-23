import { ReactElement} from 'react'
import '../../styles/cartLink.scss'
import carrito  from '../../assets/svg/carrito.svg'
import { Link } from "react-router-dom";
export default function CartLinkComponent({cartItems}: {[key: string]: number}): ReactElement<Element>{
    return (
        <div className='cart'>
            <Link to="/paymentGateway">
            <img className='cart__image' src={carrito}></img>
            <span className='cart__count'>{cartItems}</span>
            </Link>
        </div>
    )
}