import { ReactElement, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import DashBoardProducts from './views/dashboard';
import HeaderShop from './components/shared/header';
import { IProduct } from './models/product.model';
import { IApiResponse } from './models/apiResponse.model';
import { appState, context } from './store/store';
import PaymentGateway from './components/paymentGateway';


function App(): ReactElement<Element> {
  
  const [ products, setProducts ] = useState<IApiResponse>({
    result: null,
    error: null
  })

  const apiProducts = "https://fakestoreapi.com/products?limit=4"

  const fetchProduct = async (): Promise<IApiResponse> => {
    try {
      let response = await fetch(apiProducts)
      let json = await response.json()
      return { result: json, error: null }
    }catch(apiError){
      const error = new Error('Api error')
      return { result: null, error} 
    }
  }

  useEffect( ()=> {
    (async () => {
      let res = await fetchProduct()
      if(res.result){
        setProducts(res)
      }
    })();
  }, [])

  return (
    <context.Provider value={appState}>
      <div className="App">
        <HeaderShop></HeaderShop>
        <Routes>
          <Route path="/" element={<DashBoardProducts products={products.result as IProduct[]}></DashBoardProducts>}></Route>
          <Route path='paymentGateway' element={<PaymentGateway></PaymentGateway>}></Route>
        </Routes>
      </div>
    </context.Provider>
  );
}

export default App;
