import React from 'react'
import { Route, Routes } from "react-router-dom";
import { ItemListContainer } from '../components/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer';
//views
const Contacts = () => { }


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/Contacts" element={<Contacts />}></Route>
        </Routes>
    )
}

