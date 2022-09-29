import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import '../styles/contactForm.css'
export const ContactForm = () => {


    const [form, setForm] = useState({

        name: '',
        phone: '',
        email: '',

    })

    const changeHandler = (event) => {
        const newForm = { ...form, [event.target.name]: event.target.value };
        setForm(newForm);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const db = getFirestore
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
                    <ul>
                        <li>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="user_name" onChange={changeHandler} value={form.name} />
                        </li>
                        <li>
                            <label htmlFor="phone">Phone:</label>
                            <input type="phone" id="phone" name="user_phone" onChange={changeHandler} value={form.phone} />
                        </li>
                        <li>
                            <label htmlFor="mail">E-mail:</label>
                            <input type="email" id="mail" name="user_email" onChange={changeHandler} value={form.email} />
                        </li>
                    </ul>
                    <button className='btn-continue-buy'> Completar </button>
                </form>



            </div>
        </>
    )
}
