import React from 'react'
import { ItemList } from './ItemList'
import { Location } from '../components/Location';
import '../styles/Location.css'

export const ItemListContainer = () => {
    return (
        <>
            <Location />
            <ItemList />
        </>
    )
}
