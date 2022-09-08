import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import '../styles/itemDetailContainer.css';


export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [beer, setBeers] = useState([]);


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.sampleapis.com/beers/ale/${id}`)
            .then(response => response.json())
            .then(beers => {
                setBeers(beers)
                setIsLoading(false);
            });
    }, [id])

    useEffect(() => {
        console.log(beer);
    }, [beer])
    return (
        <>
            <div className='container-card-Detail'>
                <div className='exit-btn'>
                    <Link to="/">
                        <button >
                            Volver
                        </button>
                    </Link>
                </div>
                {

                    !isLoading && beer.rating !== null ? (
                        <div className='container-itemDetails'>
                            <ItemDetail image={beer.image} price={beer.price} name={beer.name} reviews={beer.rating.reviews} average={beer.rating.average} />
                        </div>) : "Loading details"
                }


            </div>
        </>
    )
}
