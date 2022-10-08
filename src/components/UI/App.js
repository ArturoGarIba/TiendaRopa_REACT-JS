// import styles from './App.module.css';
import Producto from '../../pages/Productos';
import Cart from '../../components/pedidos/Cart'
import React, { useState } from 'react';
import cx from 'classnames';
import reducer from "../reducers/Reducer";
import initialState from "../reducers/InitialState";
import { useReducer } from "react";
import StateContext from "../context/state";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InicioView from '../inicio/InicioView';
import NotFoundView from '../NotFountView/NotFoundView';
import CheckOut from '../btnCheckOut/CheckOut';


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




      <Router>

        <Cart />
            <Routes>
              <Route path="/" element={<InicioView />} />
              <Route path="store" element={<Producto />} />
              <Route path="checkout" element={<CheckOut />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>

      </Router>



    </StateContext.Provider>
  );
}

export default App;
