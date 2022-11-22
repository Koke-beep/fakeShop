import { ReactElement } from 'react';
import './App.css';
import HeaderShop from './components/shared/header';
function App(): ReactElement<Element> {
  return (
    <div className="App">
      <HeaderShop></HeaderShop>
    </div>
  );
}

export default App;
