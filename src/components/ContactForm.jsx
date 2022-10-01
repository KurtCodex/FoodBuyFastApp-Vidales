import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { CContext } from "../context/CartContext";
import { useContext } from 'react';
import '../styles/contactForm.css'



export const ContactForm = ({ item }) => {
    const { itemsCart, clearAll, Total } = useContext(CContext);
    let items = itemsCart.map((e) => (e.item))
    let day = new Date();
    let total = Total();
    const [id, setId] = useState();
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const changeHandler = (event) => {
        const newForm = { ...form, [event.target.name]: event.target.value };
        setForm(newForm);

    }

    let compra = {
        items: items,
        form: form,
        total: total,
        fecha: day,
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const db = getFirestore();
        const OrdenCompraCollection = collection(db, 'OrdenCompra');
        addDoc(OrdenCompraCollection, compra)
            .then((snapshot) =>
                setId(snapshot.id)
            );
        clearAll();
    }


    return (
        <>
            {typeof id !== 'undefined' ? (
                <>
                    {alert(`Datos enviados correctamente. Su id es: ${id}`)}
                    <Navigate to="/"></Navigate>
                </>
            ) : (

                < div className='container-form'>

                    <h1>Termina tu compra</h1>
                    {console.log(day)}
                    {console.log(total)}
                    <form action="form-container" method="post" onSubmit={submitHandler}>

                        <label className='label-form' htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" onChange={changeHandler} value={form.name} />

                        <label className='label-form' htmlFor="phone">Phone:</label>
                        <input type="phone" id="phone" name="phone" onChange={changeHandler} value={form.phone} />

                        <label className='label-form' htmlFor="mail">E-mail:</label>
                        <input type="email" id="mail" name="email" onChange={changeHandler} value={form.email} />
                        <button className='btn-finalize-buy'> Completar </button>
                    </form>
                </div>
            )
            }
        </>
    )
}
