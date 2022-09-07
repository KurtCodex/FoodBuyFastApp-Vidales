import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { Link } from 'react-router-dom';
import '../styles/Cards.css';
export const Cards = () => { // --------------------------itemList

    const [isLoading, setIsLoading] = useState(false);
    const [beer, setBeers] = useState([]);


    useEffect(() => {
        setIsLoading(true)
        fetch("https://api.sampleapis.com/beers/ale")
            .then(response => response.json())
            .then(beers => {
                setBeers(beers.slice(10, 13))
                setIsLoading(false);
            });
    }, [])

    useEffect(() => {
        console.log(beer);
    }, [beer])

    return (
        <>
            <div className="container-cards-title">
                <div className="title-container">
                    <h2>Lo mas pedido</h2>
                </div>
                <div className="cards-container">
                    {
                        !isLoading ?
                            beer.map((e, idx) => (
                                <Link to={`/ItemDetailContainer/${e.id}`}>
                                    <Card
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
        </>
    )
}
