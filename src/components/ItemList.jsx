import { Item, Link } from "./index";

import "../styles/Cards.css";

export const ItemList = ({ beers }) => {
    return (
        <>
            <div className="container-cards-title">
                <div className="title-container">
                    <h2>Lo mas pedido</h2>
                </div>
                <div className="cards-container">
                    {beers.map((e, idx) => (
                        <Link key={idx} to={`/ItemDetailContainer/${e.id}`}>
                            <Item key={idx} img={e.image} title={e.name} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};
