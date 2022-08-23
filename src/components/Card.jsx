import '../styles/Cards.css';


export const Card = ({ title, img, desc }) => {
    return (
        <div className='card-body'>
            <img className='card-img' src={img} alt="" />
            <h3 className='card-title'> {title} </h3>
            <p>{desc}</p>
            <div className='card-buttons-container'>
                <button className='card-button-buy'> Encargar!</button>
                <button className='card-button-addcart'> Al Carrito!</button>
            </div>
        </div>
    )
}
