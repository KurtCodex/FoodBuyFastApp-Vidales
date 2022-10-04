import React, { useEffect, useState } from "react";
import { Link, useParams, Item, getFirestore, getDocs, collection, query, where } from "./index";

import "../styles/categories.css";

export const Categories = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const beers = collection(db, 'popular');

    const q = query(beers, where('category', '==', id))
    getDocs(q).then((snapshot) => {
      setBeers(snapshot.docs.map((producto) => ({
        id: producto.id,
        ...producto.data()
      })));
      setIsLoading(false);
    })
  }, [id])


  return (
    <>
      <div className="title-container-list">
        <div className="exit-btn">
        </div>
        <div className="title-list">
          <h1> Conoce todas nuestras cervezas! </h1>
        </div>
      </div>

      <div className="container-categories">
        <div className="container-cards-title">
          <div className="cards-container-list">
            {!isLoading ? (
              beers.map((e, idx) => (
                <Link key={idx} to={`/ItemDetailContainer/${e.id}`}>
                  <Item
                    key={idx}
                    img={e.image}
                    title={e.name}
                    idx={e.id}
                    price={e.price}
                    reviews={e.reviews}
                  />
                </Link>
              ))
            ) : (
              <div className="isLoading">
                Loading...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
