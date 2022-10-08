import Modal from 'react-bootstrap/Modal';
import ModalContext from '../context/ModalContext';
import React, { useContext, useState } from 'react';
import  Button  from 'react-bootstrap/Button';
import styles from './ModalCart.module.css'


function ModalCart(props) {

    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    return (

        <ModalContext.Provider value={{show}}>
            <React.Fragment>
            <button className={styles['btn-not']} onClick={showModal}>
                <i className="bi bi-bag-check-fill"></i>
                <span className={styles['mar-lr']}>
                Carrito
                </span>
                <span className="badge bg-primary">{props.count}</span>
            </button>
            <Modal
                show={show}
                keyboard={false}
                onHide={hideModal}
            >
                <Modal.Header >
                    <Modal.Title>🛒 Mi Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    (Aqui ira la lista de productos agregados)
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={hideModal}>
                        Continuar Comprando
                    </Button>
                    <Button variant="primary" onClick={hideModal}>
                        Ir a Pagar
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
        </ModalContext.Provider>
    );
}

export default ModalCart;
