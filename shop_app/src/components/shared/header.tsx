import '../../styles/header.scss';
import CartLinkComponent from './cart.link';
import { CartMenu } from './cartMenu';

export default function HeaderShop(){
    return (
        <div className='header'>
            <img className='header__logo' src={require('../../assets/images/patterson-agency-logo.png')}></img>
            <div className='header__links'>
                <CartLinkComponent cartItems={0}></CartLinkComponent>
                <CartMenu totalPrice= {'0.00'}></CartMenu>
            </div>
        </div>
    )
}