import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Item } from "./Item";
import '../styles/categories.css'

export const Categories = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [beer, setBeers] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        fetch("https://api.sampleapis.com/beers/ale")
            .then(response => response.json())
            .then(beers => {
                setBeers(beers.slice(60, 100))
                setIsLoading(false);
            });
    }, [])

    useEffect(() => {
        console.log(beer);
    }, [beer])

    return (
        <>
            <div className="title-container-list">
                <h1> Conoce todas nuestras cervezas! </h1>
            </div>
            <div className="container-categories">

                <div className="container-cards-title">

                    <div className="cards-container-list">
                        {
                            !isLoading ?
                                beer.map((e, idx) => (
                                    <Link to={`/ItemDetailContainer/${e.id}`}>
                                        <Item
                                            key={idx}
                                            img={e.image}
                                            title={e.name}
                                            idx={e.id}
                                            price={e.price}
                                            reviews={e.rating.reviews}

                                        />
                                    </Link>
                                )
                                ) : (
                                    <div className="isLoading">
                                        Loading...Many Request<br />
                                        Wait five minutes please.
                                    </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
