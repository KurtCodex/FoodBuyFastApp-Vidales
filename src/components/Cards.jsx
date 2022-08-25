import { Card } from "../components/Card";
import { food1, food2, food3 } from '../assets';


import '../styles/Cards.css';

const cards = [
    {
        id: 1,
        title: 'Guisardo',
        image: food1,
        description: "Un Guiso de carne con especias y fideos Riggati, perfecto para un almuerzo delicioso, rinde una porción."
    },
    {
        id: 2,
        title: 'Hanvorguesa con fritas',
        image: food2,
        description: "Hamburguesa de la mano de la Casa de la Burguer, acompañada de una porcion de fritas"
    },
    {
        id: 3,
        title: 'Taquillos picantes',
        image: food3,
        description: "Una porcion de taquillos consta de 3 tacos medianos equivalentes a una porción, incluye salsa picante"
    },
];


export const Cards = () => {
    return (
        <>
            <div className="container-cards-title">
                <div className="title-container">
                    <h2>Lo mas pedido</h2>
                </div>
                <div className="cards-container">
                    {
                        cards.map((card, idx) => ( // == (card)   key={card.id}
                            <Card key={idx} title={card.title} img={card.image} desc={card.description} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
