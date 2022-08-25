import '../styles/Cards.css';
import { ItemCount } from './ItemCount';

export const Card = ({ title, img, desc }) => {

    const onAdd = (counter) => {
        console.log(counter)
    };

    return (
        <div className='card-body'>
            <img className='card-img' src={img} alt="" />
            <h3 className='card-title'> {title} </h3>
            <p>{desc}</p>
            <div className='card-buttons-container'>
                <button onClick={function () { alert("Procesando compra..") }} className='card-button-buy'> Encargar!</button>
                <ItemCount onAdd={onAdd} initial={1} stock={12} />
            </div>
        </div>
    )
}
