import React from 'react'
import { Route, Routes } from "react-router-dom";
import { ItemListContainer } from '../components/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer';
import { Categories } from '../components/Categories';
import { Cart } from '../components/Cart';
import { Local } from '../components/Local';
import { ContactForm } from '../components/ContactForm';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/Local" element={<Local />}></Route>
            <Route path="/Categories/:id" element={<Categories />}></Route>
            <Route path="/Categories/:id" element={<Categories />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/ContactForm" element={<ContactForm />}></Route>
        </Routes>
    )
}

