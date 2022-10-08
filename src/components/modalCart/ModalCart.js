import Modal from 'react-bootstrap/Modal';
import ModalContext from '../context/ModalContext';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './ModalCart.module.css'
import actions from "../reducers/Actions";
import StateContext from '../context/state';
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import { Link } from 'react-router-dom';


function ModalCart(props) {


    const { state, dispatch } = useContext(StateContext);
    const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalCompra = state.cart.reduce((sum, item) => sum + (item.quantity * item.meal.precio), 0);

    const showModal = () => {
        dispatch({
            type: actions.OPEN_MODAL,
        });
    }

    const hideModal = () => {
        dispatch({
            type: actions.CLOSE_MODAL,
        });
    }

    function increment(id) {
        dispatch({
            type: actions.UPDATE_MEAL,
            payload: { id, quantity: 1 },
        });
    }

    function decrement(id) {
        dispatch({
            type: actions.UPDATE_MEAL,
            payload: { id, quantity: -1 },
        });
    }

    function eliminar(id) {

        dispatch({

            type: actions.ELIMINAR_PRENDA,

            payload: { id },

        });

    }

    return (


        <>
            <button className={styles['btn-not']} onClick={showModal}>
                <i className="bi bi-bag-check-fill"></i>
                <span className={styles['mar-lr']}>
                    Carrito
                </span>
                <span className="badge bg-primary">{total}</span>
            </button>
            <Modal
                show={state.isOpen}
                keyboard={false}
                onHide={hideModal}
            >
                <Modal.Header >
                    <Modal.Title>🛒 Mi Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {state.cart.map((cartItem) => (
                        <li>
                            <section >
                                <article>
                                    <img src={cartItem.meal.url_img} className={cx(styles['card-img-top'])} alt="..."></img>
                                    <h2>{cartItem.meal.nombre_comida}</h2>
                                    <div>
                                        <h4>$ {cartItem.meal.precio * cartItem.quantity}</h4>
                                        <figure>
                                            <h4>x {cartItem.quantity}</h4>
                                        </figure>
                                    </div>
                                </article>
                                <article>
                                    {cartItem.quantity > 1 ? <Button onClick={() => decrement(cartItem.meal.id)}>-</Button> : <a></a>}

                                    <Button

                                        onClick={() => increment(cartItem.meal.id)}
                                    >
                                        +
                                    </Button>
                                    <Button

                                        onClick={() => eliminar(cartItem.meal.id)}

                                    >

                                        DELETE

                                    </Button>
                                </article>
                            </section>
                        </li>
                    ))

                    }

                    <br />
                    <h4>Total compra: ${totalCompra}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={hideModal}>
                        Continuar Comprando
                    </Button>
                    <Link to="/checkout">
                        <Button variant="primary" onClick={hideModal}>
                            Ir a Pagar
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default ModalCart;
