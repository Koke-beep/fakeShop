import { ReactElement} from 'react'
import '../../styles/cartLink.scss'
import carrito  from '../../assets/svg/carrito.svg'

export default function CartLinkComponent({cartItems}: {[key: string]: number}): ReactElement<Element>{
    return (
        <div className='cart'>
            <img className='cart__image' src={carrito}></img>
            <span className='cart__count'>{cartItems}</span>
        </div>
    )
}