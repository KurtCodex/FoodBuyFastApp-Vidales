import { food1 } from '../assets'
import '../styles/Cards.css';



const Card = () => {
    return (
        <div className='card-body'>
            <img className='card-img' src={food1} alt="" />
            <h3 className='card-title'>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere totam aspernatur voluptas, at odit!</p>
        </div>
    )
}

export default Card;