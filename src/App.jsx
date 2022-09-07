import React from "react";
import { Navbar } from './components/Navbar';
import { AppRouter } from "./router/AppRouter";

import './styles/App.css';
import './styles/index.css';

function App() {

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}

export default App;
