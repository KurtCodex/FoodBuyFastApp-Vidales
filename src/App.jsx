import React from "react";
import { Navbar } from './components/Navbar';
import { CartContext } from "./context/CartContext";
import { AppRouter } from "./router/AppRouter";

import './styles/App.css';
import './styles/index.css';

function App() {

  return (
    <>
      <CartContext>
        <Navbar />
        <AppRouter />
      </CartContext>
    </>
  )
}

export default App;
