import React, { useEffect, useState } from "react";
import { Location } from "../components/Location";
import "../styles/Location.css";
import { ItemList } from "./ItemList";
import { getFirestore, doc, getdoc, getDoc } from 'firebase/firestore';

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



    const [product, setProduct] = useState([])

    useEffect(() => {

        const db = getFirestore();
        const itemRef = doc(db, 'popular');
        getDoc(itemRef).then((snapshot) => {

            const newProduct = {
                id: snapshot.id,
                ...snapshot.data(),
            };

            setProduct(newProduct)

            console.log(snapshot.id);
            console.log(snapshot.data());
        })

    }, [])


    setIsLoading(false);
    return (
        <>
            <Location />
            {!isLoading ? (
                <ItemList beers={product} />
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
