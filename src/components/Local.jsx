import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ItemLocal } from "./ItemLocal";
import '../styles/local.css';

export const Local = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [beer, setBeers] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        fetch("./localbeer.json")
            .then(response => response.json())
            .then(beers => {
                setBeers(beers)
                setIsLoading(false)
                console.log(beers)
            });
    }, [])



    return (
        <>
            <div className="title-container-list">
                <div className='exit-btn'>
                    <Link to="/">
                        <button >
                            Inicio
                        </button>
                    </Link>
                </div>
                <div className="title-list">
                    <h1> Pasá por uno de nuestros locales y probalas! </h1>
                </div>
            </div>

            <div className='container-local-drink'>
                <div className="cards-container-lists">
                    {
                        !isLoading ?
                            beer.map((e, idx) => (
                                <ItemLocal
                                    key={idx}
                                    img={e.img}
                                    name={e.name}
                                    price={e.price}
                                    ibu={e.ibu}
                                />
                            )
                            ) : (
                                <div className="isLoading">
                                    Loading...Many Request<br />
                                    Wait 5s please.
                                </div>)
                    }
                </div>

                <div className='container-contacts'>
                    <h4>Para reservas, hablanos por Whatsapp!   +54 123123214</h4>
                </div>
            </div>



        </>
    )
}
