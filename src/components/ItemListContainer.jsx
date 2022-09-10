import React, { useState, useEffect } from "react";
import { ItemList } from './ItemList'
import { Location } from '../components/Location';
import '../styles/Location.css'

export const ItemListContainer = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [beer, setBeers] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        fetch("./apibeer.json")
            .then(response => response.json())
            .then(beers => {
                setBeers(beers)
                setIsLoading(false);
            });
    }, [])

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
