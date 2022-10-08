// import styles from './App.module.css';
import Producto from '../../pages/Productos';
import Cart from '../../components/pedidos/Cart'
import React, { useState } from 'react';
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import reducer from "../reducers/Reducer";
import initialState from "../reducers/InitialState";
import { useReducer } from "react";
import StateContext from "../context/state";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  let [cantidad, setCantidad] = useState(0);
  // const agregarCarrito = (event) => {
  //   setCantidad((prevState) => cantidad += parseInt(event))
    
  // }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <StateContext.Provider value={{ state, dispatch }}>

      <Cart/>
      <div className={cx(globalStyles['container-fluid'], globalStyles['my-4'], globalStyles['p-3'])}>
        <div className={cx(globalStyles.div, globalStyles['row'], globalStyles['text-center'])}>
          <Producto/>
        </div>
      </div>
    </StateContext.Provider>
  );
}

export default App;
