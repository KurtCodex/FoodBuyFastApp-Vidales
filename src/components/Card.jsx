import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';
import { ItemDetailContainer } from './ItemDetailContainer';


import '../styles/Cards.css';


export const Card = ({ title, img, idx, price, reviews }) => { // ------------------     item
    const onAdd = (counter) => {
        console.log(counter)
    };

    const seeDetails = () => {
        <ItemDetailContainer price={price} />
    }

    return (
        <div className='card-body'>
            <img
                className='card-img'
                src={img}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://api.lorem.space/image/drink?w=200&h=200";
                }}
                alt="beer"
            />
            <h3 className='card-title'> {title} </h3>
            <div className='card-buttons-container'>
                <div className='card-button-AddCart-Cant'>
                    <ItemCount onAdd={onAdd} initial={1} stock={6} />
                </div>
                <div className='card-button-SeeMore'>
                    <Link to="/ItemDetailContainer">
                        <button className='card-button-buy' onClick={() => { seeDetails({ price }) }}>

                            Ver detalles!
                        </button>
                    </Link>
                </div>
            </div>
        </div >
    )
}
