import React, { useEffect, useState } from "react";
import { Location } from "../components/Location";
import "../styles/Location.css";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // YA ESTA
        fetch(
            "https://raw.githubusercontent.com/KazmerMaximiliano/json-api/main/beerByPopular.json"
        )
            .then((response) => response.json())
            .then((data) => {
                setBeers(data);
                setIsLoading(false);
            });
    }, []);

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
