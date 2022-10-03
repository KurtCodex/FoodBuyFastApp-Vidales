import React, { useEffect, useState } from "react";
import { ItemLocal } from "./ItemLocal";
import { getFirestore, getDocs, collection } from 'firebase/firestore';

import "../styles/local.css";

export const Local = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const beers = collection(db, 'Local');
    getDocs(beers).then((snapshot) => {
      setBeers(snapshot.docs.map((producto) => ({ id: producto.id, ...producto.data() })));
      setIsLoading(false);
    })
  }, []);

  return (
    <>
      <div className="title-container-list">
        <div className="title-list">
          <h1> Pasá por uno de nuestros locales y probalas! </h1>
        </div>
      </div>

      <div className="container-local-drink">
        <div className="cards-container-lists">
          {!isLoading ? (
            beers.map((e, idx) => (
              <ItemLocal
                key={idx}
                img={e.image}
                name={e.name}
                price={e.price}
                ibu={e.ibu}
              />
            ))
          ) : (
            <div className="isLoading">
              Loading...Many Request
              <br />
              Wait 5s please.
            </div>
          )}
        </div>

        <div className="container-contacts">
          <h4>Para reservas, hablanos por Whatsapp! +54 123123214</h4>
        </div>
      </div>
    </>
  );
};
