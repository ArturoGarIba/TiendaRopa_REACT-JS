// import styles from './App.module.css';
import Producto from '../../pages/Productos';
import Cart from '../../components/pedidos/Cart'
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import reducer from "../reducers/Reducer";
import initialState from "../reducers/InitialState";
import { useReducer } from "react";
import StateContext from "../context/state";
import Descripcion from '../descripcion/Descripcion';
import RequireItem from '../RequireItem/RequireItem'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InicioView from '../inicio/InicioView';
import NotFoundView from "../NotFoundView/NotFoundView";
import CheckOut from '../btnCheckOut/CheckOut';
import MenuContext from '../context/menu';
import useHttp from '../hooks/hook';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let [cantidad, setCantidad] = useState(0);
  // const agregarCarrito = (event) => {
  //   setCantidad((prevState) => cantidad += parseInt(event))
  // }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [producto, setProducto] = useState([]);
  const BASE_URL = "https://ropa-http-default-rtdb.firebaseio.com/";
  const { isLoading, error, request } = useHttp();

  const errorMessage = <h2>{error}</h2>;
  useEffect(() => {
    const fetchUser = async () => {
      //const userId = localStorage.getItem("userId");
      const url = `${BASE_URL}/productos.json?orderBy="$key"`;
      const responseData = await request({ url });

      setProducto([...responseData]);

    };

    fetchUser()

  }, [request]);

  return (
  
    <StateContext.Provider value={{ state, dispatch }}>
      <MenuContext.Provider value={producto}>
        <Router>
          <Cart />
          <Routes>
            <Route path="/" element={<InicioView />} />
            <Route path="store" element={<Producto />} />
            <Route path="/descripcion/:id" element={<Descripcion />} />
            <Route path="checkout" element={<RequireItem><CheckOut /></RequireItem>} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Router>
      </MenuContext.Provider>
    </StateContext.Provider >

  );
}
export default App;