import React from 'react'
import { Cards } from './Cards'
import { Location } from '../components/Location';
import '../styles/Location.css'

export const ItemListContainer = () => {
    return (
        <>
            <Location />
            <Cards />
        </>
    )
}
