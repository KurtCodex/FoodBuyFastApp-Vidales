import React, { useState, useEffect } from "react";
import { ItemList } from './ItemList'
import { Location } from '../components/Location';
import '../styles/Location.css'

export const ItemListContainer = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [beer, setBeers] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        fetch("https://api.sampleapis.com/beers/ale")
            .then(response => response.json())
            .then(beers => {
                setBeers(beers.slice(70, 100))
                setIsLoading(false);
            });
    }, [])

    useEffect(() => {
        console.log(beer);
    }, [beer])

    return (
        <>
            <Location />
            {
                !isLoading ?
                    <ItemList beer={beer} />
                    : (
                        <div className="isLoading">
                            Loading...Many Request<br />
                            Wait five minutes please.
                        </div>)
            }
        </>
    )
}
