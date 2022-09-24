import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/itemDetailContainer.css";
import { ItemDetail } from "./ItemDetail";
import { getFirestore, getDoc, doc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [beer, setBeer] = useState([]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch("https://raw.githubusercontent.com/KazmerMaximiliano/json-api/main/beerByPopular.json")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setBeers(data.find(e => e.id === parseInt(id)))
    //             setIsLoading(false);
    //         }); 
    // }, [id]);

    useEffect(() => {
        if (id) {
            setIsLoading(true)
            const db = getFirestore();
            const beer = doc(db, 'popular', id);
            console.log(id);
            getDoc(beer).then((snapshot) => {
                console.log(snapshot.data());
                setBeer(snapshot.data());
                setIsLoading(false);
            })
        }
    }, [id])




    return (
        <>
            <div className="container-card-Detail">
                <div className="exit-btn">
                    <Link to="/">
                        <button>Volver</button>
                    </Link>
                </div>
                {!isLoading && beer.rating !== null ? (
                    <div className="container-itemDetails">
                        <ItemDetail
                            item={beer}
                            image={beer.image}
                            price={beer.price}
                            name={beer.name}
                            reviews={beer.reviews}
                            average={beer.average}
                        />
                    </div>
                ) : (
                    <div style={{ color: "#FFF" }}>
                        {"Loading details"}
                    </div>

                )}
            </div>
        </>
    );
};
