import React from "react";
import { IProduct } from "../models/product.model";

export interface IAppState{
    products: IProduct[] | null,
    shoppingCart: IProduct[] | [],
    error: Error | null
}

export const appState: IAppState = {
    products: null,
    shoppingCart: [],
    error: null
}

export function appStateReducer(state = appState, {type,payload}: any){
    let newState: IAppState = {
        products: [],
        shoppingCart: [],
        error: null
    }

    switch(type){
        case "LOAD_PRODUCTS":
            newState = { ...state, products: payload.products }
            break;       
        case "ADD_PRODUCT": 
            newState = { ...state,  shoppingCart: [...state.shoppingCart, payload.product] }
            break
        default: return {...state}
    }
    return newState
}

export const actionTypes = {
    LOAD_PRODUCTS: "LOAD_PRODUCTS",
    APP_PRODUCT_CART: "APP_PRODUCT_CART"
} 

export const context = React.createContext<IAppState>(appState)
