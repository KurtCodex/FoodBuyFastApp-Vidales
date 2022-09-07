import { Link } from 'react-router-dom';
import { ItemDetail } from "./ItemDetail";
import '../styles/itemDetailContainer.css';


export const ItemDetailContainer = () => {

    return (
        <>
            <div className='container-card-Detail'>
                <div className='exit-btn'>
                    <Link to="/">
                        <button >
                            Volver
                        </button>
                    </Link>
                </div>
                <div className='container-itemDetails'>
                    <ItemDetail />
                </div>
            </div>
        </>
    )
}
