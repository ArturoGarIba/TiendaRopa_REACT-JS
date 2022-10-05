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

    const hiddeModal = () => {
        setShow(false)
    }
    return (

        <ModalContext.Provider value={{show}}>
            <React.Fragment>
            <button className={styles['btn-not']} onClick={showModal}>
                <i className="bi bi-cart"></i>
                Carrito
                <span className="badge bg-danger">{props.count}</span>
            </button>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hiddeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hiddeModal}>Understood</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
        </ModalContext.Provider>
    );
}

export default ModalCart;