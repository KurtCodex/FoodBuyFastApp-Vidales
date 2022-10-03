import React from 'react'
import { Route, Routes } from "react-router-dom";
import { ItemListContainer, ItemDetailContainer, Categories, Local, Cart, ContactForm } from './index'

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

