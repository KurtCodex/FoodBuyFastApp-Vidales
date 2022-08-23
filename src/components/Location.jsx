import '../styles/Location.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


export const Location = () => {
    return (
        <>
            <div className='panel-ubication'>
                <div className='panel-ubication-title'>
                    <h2>A donde quieres que te lo llevemos?</h2>
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