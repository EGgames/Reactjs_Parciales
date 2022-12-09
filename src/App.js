import React from 'react'
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import { ProductosList } from './components/page/productos';
import "boxicons";

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <ProductosList />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
