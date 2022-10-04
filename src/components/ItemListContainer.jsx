import React, { useEffect, useState } from "react";
import { Location, ItemList, getFirestore, getDocs, collection } from "./index";

import "../styles/Location.css";

export const ItemListContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const beers = collection(db, 'popular');
        getDocs(beers).then((snapshot) => {
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
