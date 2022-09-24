import React, { useEffect, useState } from "react";
import { Location } from "../components/Location";
import "../styles/Location.css";
import { ItemList } from "./ItemList";
import { getFirestore, getDocs, collection } from 'firebase/firestore';

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

        const db = getFirestore();
        const beers = collection(db, 'popular')
        console.log(beers);
        getDocs(beers).then((snapshot) => {
            console.log(snapshot);
            setBeers(snapshot.docs.map((producto) => ({ id: producto.id, ...producto.data() })));
            setIsLoading(false);
        })
    }, [])



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
