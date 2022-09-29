import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/local.css";
import { ItemLocal } from "./ItemLocal";

export const Local = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://raw.githubusercontent.com/KazmerMaximiliano/json-api/main/beerByLocal.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
        setIsLoading(false);
      });
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
                img={e.img}
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
