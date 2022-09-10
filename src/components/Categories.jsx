import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/categories.css";
import { Item } from "./Item";

export const Categories = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://raw.githubusercontent.com/KazmerMaximiliano/json-api/main/beerByCategory.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBeers(data[id] ?? []);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      <div className="title-container-list">
        <div className="exit-btn">
          <Link to="/">
            <button>Inicio</button>
          </Link>
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
                    reviews={e.rating.reviews}
                  />
                </Link>
              ))
            ) : (
              <div className="isLoading">
                Loading...Many Request
                <br />
                Wait five minutes please.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
