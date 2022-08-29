import React, { useState } from "react";
import { Card } from "../components/Card";
import { food1, food2, food3 } from '../assets';
import '../styles/Cards.css';


const data = [
    {
        id: 1,
        title: 'Guisardo',
        image: food1,
        price: 1350,
        description: "Un Guiso de carne con especias y fideos Riggati, perfecto para un almuerzo delicioso, rinde una porción."
    },
    {
        id: 2,
        title: 'Hanvorguesa con fritas',
        image: food2,
        price: 1650,
        description: "Hamburguesa de la mano de la Casa de la Burguer, acompañada de una porcion de fritas"
    },
    {
        id: 3,
        title: 'Taquillos picantes',
        image: food3,
        price: 1450,
        description: "Una porcion de taquillos consta de 3 tacos medianos equivalentes a una porción, incluye salsa picante"
    },
];


export const Cards = () => { // --------------------------itemList
    const [food, setFood] = useState(null);

    const asyncMock = () => {
        return new Promise(resolve => {
            setTimeout(function () {
                resolve(data);
            }, 2000);
        })
    }

    const getFood = async () => {
        let response = await asyncMock();
        setFood(response);
    }

    getFood();

    return (
        <>
            <div className="container-cards-title">
                <div className="title-container">
                    <h2>Lo mas pedido</h2>
                </div>
                <div className="cards-container">
                    {
                        food != null ?
                            food.map((e, idx) => (<Card key={idx} img={e.image} title={e.title} desc={e.description} />)
                            ) : (
                                <div>
                                    Cargando...
                                </div>)
                    }
                </div>
            </div>
        </>
    )
}
