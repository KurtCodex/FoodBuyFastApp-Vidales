import '../styles/Cards.css';
import { ItemCount } from './ItemCount';

export const Card = ({ title, img, desc }) => {
    return (
        <div className='card-body'>
            <img className='card-img' src={img} alt="" />
            <h3 className='card-title'> {title} </h3>
            <p>{desc}</p>
            <div className='card-buttons-container'>
                <button onClick={function () { alert("Procesando compra..") }} className='card-button-buy'> Encargar!</button>
                <ItemCount />
                <button onClick={function () { alert("Agregado!") }} className='card-button-addcart'> Al carrito!</button>
            </div>
        </div>
    )
}
