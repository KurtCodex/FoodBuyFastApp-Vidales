import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/itemDetailContainer.css";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://raw.githubusercontent.com/KazmerMaximiliano/json-api/main/beerByPopular.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(id)
                console.log(data)
                setBeers(data.filter(e => e.id === id))
                setIsLoading(false);
            });
    }, [id]);

    console.log(beers);
    return (
        <>
            <div className="container-card-Detail">
                <div className="exit-btn">
                    <Link to="/">
                        <button>Volver</button>
                    </Link>
                </div>
                {!isLoading && beers.rating !== null ? (
                    <div className="container-itemDetails">
                        <ItemDetail
                            image={beers.image}
                            price={beers.price}
                            name={beers.name}
                        // reviews={beers.rating.reviews}
                        // average={beers.rating.average}
                        />
                    </div>
                ) : (
                    "Loading details"
                )}
            </div>
        </>
    );
};
