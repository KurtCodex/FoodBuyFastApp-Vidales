import { Card } from "../components/Card";
import { food1, food2, food3 } from '../assets';


import '../styles/Cards.css';

const cards = [
    {
        id: 1,
        title: 'Guiso',
        image: food1,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Inventore, quas?"
    },
    {
        id: 2,
        title: 'Hanvorguesa',
        image: food2,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Inventore, quas?"
    },
    {
        id: 3,
        title: 'Taquillos',
        image: food3,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Inventore, quas?"
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
