import { Reducer, useEffect, useReducer } from 'react';
import { appState, appStateReducer, IAppState } from '../../store/store';
import '../../styles/header.scss';
import CartLinkComponent from './cart.link';
import { CartMenu } from './cartMenu';

export default function HeaderShop(){
    const [ currentState, appDispatch ] = useReducer<Reducer<IAppState, any>>(appStateReducer, appState)

    return (
        <div className='header'>
            <img className='header__logo' src={require('../../assets/images/patterson-agency-logo.png')}></img>
            <div className='header__links'>
                <CartLinkComponent cartItems={currentState.shoppingCart.length}></CartLinkComponent>
                <CartMenu totalPrice= {'0.00'}></CartMenu>
            </div>
        </div>
    )
}