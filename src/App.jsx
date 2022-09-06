import React from "react";
import { Navbar } from './components/Navbar';
import { AppRouter } from "./router/AppRouter";
import { Location } from './components/Location';
import { ItemListContainer } from './components/ItemListContainer';

import './styles/App.css';
import './styles/index.css';

function App() {

  return (
    <>
      <Navbar />
      <AppRouter />
      <Location />
      <ItemListContainer />
    </>
  )
}

export default App;
