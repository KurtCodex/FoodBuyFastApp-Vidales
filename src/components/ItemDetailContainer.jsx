import React from 'react';
import { ItemDetail } from './ItemDetail';
import { Link } from 'react-router-dom';
import '../styles/itemDetailContainer.css';


export const ItemDetailContainer = ({ price }) => {


    return (
        <>
            <div className='container-itemDetails'>
                <div className='exit-btn'>
                    <Link to="/">
                        <button >
                            X
                        </button>
                    </Link>
                </div>
                <ItemDetail price={price} />

            </div>

        </>
    )
}
