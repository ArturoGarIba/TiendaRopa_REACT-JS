// import styles from './App.module.css';
import Pedidos from '../pedidos/Pedidos';
import Cart from '../../components/pedidos/Cart'
import React, { useState } from 'react';
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';

// import Button from 'react-bootstrap/Button';


function App() {
  
  let [cantidad, setCantidad] = useState(0);
  const agregarCarrito = (event) => {
    setCantidad((prevState) => cantidad += parseInt(event))
    // console.log(event);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>

      <Cart cantidad={cantidad} />
      <div className={cx(globalStyles['container-fluid'], globalStyles['my-4'], globalStyles['p-3'])}>
        <div className={cx(globalStyles.div, globalStyles['row'], globalStyles['text-center'])}>
          <Pedidos  agregarCarrito={agregarCarrito} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
