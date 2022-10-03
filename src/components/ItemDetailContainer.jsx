import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { ItemDetail } from "./ItemDetail";

import "../styles/itemDetailContainer.css";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [beer, setBeer] = useState([]);

    useEffect(() => {
        if (id) {
            setIsLoading(true);
            const db = getFirestore();
            const beer = doc(db, 'popular', id);
            getDoc(beer).then((snapshot) => {
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
                    <>
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
                        {console.log(beer)}
                    </>
                ) : (
                    <div style={{ color: "#FFF" }}>
                        {"Loading details"}
                    </div>

                )}
            </div>
        </>
    );
};
