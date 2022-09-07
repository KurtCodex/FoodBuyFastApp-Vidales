import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';
import { ItemDetail } from "./ItemDetail";
import '../styles/itemDetailContainer.css';


export const ItemDetailContainer = () => {




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
                <ItemDetail />
            </div>

        </>
    )
}
