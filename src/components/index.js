// router
export { Link, useParams, Navigate } from "react-router-dom";

// context 
export { CContext } from "../context/CartContext";

// components
export { Item } from "./Item";
export { CartItem } from './CartItem';
export { ItemList } from "./ItemList";
export { ItemCount } from "./ItemCount";
export { ItemLocal } from "./ItemLocal";
export { ItemDetail } from "./ItemDetail";
export { CartWidget } from './CartWidget';
export { Location } from "../components/Location";


// fonts
export { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export { faLocationDot } from '@fortawesome/free-solid-svg-icons';
export { faCartShopping } from '@fortawesome/free-solid-svg-icons';
export { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

//firebase
export { getFirestore, getDocs, getDoc, collection, query, where, addDoc, doc } from 'firebase/firestore';
