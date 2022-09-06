import React from 'react'
import { Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from '../components/ItemDetailContainer';

//views
const App = () => { };
const Contacts = () => { }


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/Contacts" element={<Contacts />}></Route>
            <Route path="/ItemDetailContainer" element={<ItemDetailContainer />}></Route>
        </Routes>
    )
}

