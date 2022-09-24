import React, { useEffect, useState } from "react";
import { Location } from "../components/Location";
import "../styles/Location.css";
import { ItemList } from "./ItemList";
import { getFirestore, getDoc, collection } from 'firebase/firestore';

export const ItemListContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [beers, setBeers] = useState([]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(
    //         "https://raw.githubusercontent.com/KazmerMaximiliano/json-api/main/beerByPopular.json"
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setBeers(data);
    //             setIsLoading(false);
    //         });
    // }, []);

    useEffect(() => {

        const db = getFirestore(); //obtengo la serie de items en firestore y lo guardo en bd
        const beers = collection(db, 'popular')
        getDoc(beers).then((snapshot) => {
            console.log(snapshot);
            setBeers(beers)
        })
    }, [])


    setIsLoading(false);
    return (
        <>
            <Location />
            {!isLoading ? (
                <ItemList beers={beers} />
            ) : (
                <div className="isLoading">
                    Loading...Many Request
                    <br />
                    Wait five minutes please.
                </div>
            )}
        </>
    );
};
