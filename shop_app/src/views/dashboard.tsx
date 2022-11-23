import { ReactElement } from "react";
import ProductCardDetail from "../components/productCard";
import { IProduct } from "../models/product.model";
import '../styles/dashboardProducts.scss'

export default function DashBoardProducts({products}: {[key: string]: IProduct[]}): ReactElement<Element>{
    return(
        <div className="dashboard">
            <h1 className="dashboard__title">Productos Destacados</h1>
            <div className="dashboard__items">{
                products?.length && products.map(product => 
                    <ProductCardDetail key={product.id} product={product}></ProductCardDetail>
                )}               
            </div>
        </div>
    )
}