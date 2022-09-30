import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import '../styles/contactForm.css'
export const ContactForm = () => {

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
                console.log(snapshot)
            );
    }

    return (
        <>
            <div className='container-form'>

                <h1>Termina tu compra</h1>

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
        </>
    )
}
