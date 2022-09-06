import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import background from '../assets/imgBackground/background.jpg';
import '../styles/Location.css';



export const Location = () => {
    return (
        <>
            {/* <img src={background} alt="" /> */}
            <div className='panel-ubication'>
                <div className='panel-ubication-title'>
                    <h2>Encuentra nuestro proveedor mas cercano!</h2>
                </div>
                <div className='panel-ubication-input-location'>
                    <div className='icon-input-location'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <input className='input-location' type="text" placeholder='Mi ubicacion' />
                    </div>
                </div>
            </div>
        </>
    )
}