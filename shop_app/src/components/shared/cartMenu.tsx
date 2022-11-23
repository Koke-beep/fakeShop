import { ReactElement, useState } from 'react'
import '../../styles/cartMenu.scss'

export function CartMenu ({ totalPrice }: {[key: string]: string}):ReactElement<Element> {  
    return (
        <div className='menu'>
            <span className="menu__count">{ totalPrice }$</span>
            <p className="menu__text">Mi Carrito</p>
        </div>
    )
}