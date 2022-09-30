import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { CContext } from "../context/CartContext";
import { useContext } from 'react';

import '../styles/contactForm.css'
import { Link } from 'react-router-dom';



export const ContactForm = () => {
    const { clearAll } = useContext(CContext);

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

    const submitHandler = (event) => {
        event.preventDefault();

        const db = getFirestore();
        const contactFormCollection = collection(db, 'contactForm');
        addDoc(contactFormCollection, form)
            .then((snapshot) =>
                setId(snapshot.id)
            );
        alert("Comprado!");
    }

    const goInit = () => {
        clearAll();
        <Link to='/'> </Link>
    }

    return (
        <>
            {typeof id !== 'undefined' ? (
                <p className='feedback-send-data'>Datos enviados exitosamente! <br /> El id es:  {id} </p>
            ) : (

                < div className='container-form'>

                    <h1>Termina tu compra</h1>

                    <form action="form-container" method="post" onSubmit={submitHandler}>

                        <label className='label-form' htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" onChange={changeHandler} value={form.name} />

                        <label className='label-form' htmlFor="phone">Phone:</label>
                        <input type="phone" id="phone" name="phone" onChange={changeHandler} value={form.phone} />

                        <label className='label-form' htmlFor="mail">E-mail:</label>
                        <input type="email" id="mail" name="email" onChange={changeHandler} value={form.email} />
                        <button onClick={() => goInit()} className='btn-finalize-buy'> Completar </button>


                    </form>



                </div>
            )}
        </>
    )
}
