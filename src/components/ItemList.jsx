import { Item } from "./Item";
import { Link } from 'react-router-dom';

import '../styles/Cards.css';


export const ItemList = ({ beer }) => {
    return (
        <>
            <div className="container-cards-title">
                <div className="title-container">
                    <h2>Lo mas pedido</h2>
                </div>
                <div className="cards-container">
                    {
                        beer.map((e, idx) => (
                            <Link to={`/ItemDetailContainer/${e.id}`}>
                                <Item
                                    key={idx}
                                    img={e.image}
                                    title={e.name}
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
