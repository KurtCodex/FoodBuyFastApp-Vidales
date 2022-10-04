import React, { useContext } from 'react'
import { Link, CContext, CartItem } from './index';
import "../styles/Cart.css"

export const Cart = () => {
    const { itemsCart, removeItem, clearAll, Total } = useContext(CContext);
    const total = Total();

    return (
        <>
            {
                itemsCart.length !== 0 ? (
                    <div className='container-cart'>
                        <div className='container-cart-items'>
                            {
                                itemsCart.map((e) => (
                                    <CartItem
                                        key={e.item.name}
                                        item={e.item}
                                        quantity={e.quantity}
                                        removeItem={removeItem}
                                        clearAll={clearAll} />
                                ))
                            }
                        </div>
                        <div className='container-buttons-finally'>
                            <div className='container-continue-buy'>
                                <Link to="/ContactForm">
                                    <button
                                        className='btn-continue-buy'>
                                        Finalizar compra
                                    </button>
                                </Link>
                            </div>
                            <div className='container-clean-Cart'>
                                <button
                                    onClick={() => clearAll()}
                                    className='btn-clean-cart'>
                                    Vaciar carrito
                                </button>
                            </div>
                        </div>
                        <div className='container-price-tot'>
                            <h1>Total de la compra es: $ {total}</h1>
                        </div>

                    </div>
                ) : (
                    <div className='container-void'>
                        <h1>Aun no has agregado nada! Agrega alguna cerveza </h1>
                        <div className="exit-btn">
                            <Link to="/">
                                <button>Volver</button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </>
    )
}
