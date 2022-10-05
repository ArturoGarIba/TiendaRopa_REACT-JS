// import styles from './App.module.css';
import Pedidos from '../pedidos/Pedidos';

import uno from '../../img/Athleisure/1.jpg';
import dos from '../../img/Athleisure/2.jpg';
import tres from '../../img/Athleisure/3.jpg';
import cuatro from '../../img/Athleisure/4.jpg';
import cinco from '../../img/Athleisure/5.JPG';

import pantalon1 from '../../img/Bottoms/1.JPG';
import pantalon2 from '../../img/Bottoms/2.webp';
import pantalon3 from '../../img/Bottoms/3.JPG';
import pantalon4 from '../../img/Bottoms/4.JPG';
import pantalon5 from '../../img/Bottoms/5.JPG';

import hoodie1 from '../../img/Hoodies/1.JPG';
import hoodie2 from '../../img/Hoodies/5.JPG';


import Cart from '../../components/pedidos/Cart'
import React, { useState } from 'react';
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';

// import Button from 'react-bootstrap/Button';


function App() {
  const expenses = [
    {
      id: Math.random(),
      nombre_comida: "Conjunto deportivo",
      descripcion: "Conjunto deportivo color verde pastel.",
      precio: 600,
      url_img: uno
    },
    {
      id: Math.random(),
      nombre_comida: "Pizza peperoni",
      descripcion: "Pizaaaaaaaaaaaaaaaa",
      precio: 50,
      url_img: dos
    },
    {
      id: Math.random(),
      nombre_comida: "Guacamaya",
      descripcion: "Guacamayaaaa",
      precio: 600,
      url_img: tres
    },
    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: cuatro
    },
    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: cinco
    },
    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: pantalon1
    },

    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: pantalon2
    },
    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: pantalon3
    },
    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: pantalon4
    },
    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: pantalon5
    },
    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: hoodie1
    },
    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: hoodie2
    }
  ];
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

      <div className={cx(globalStyles.div, globalStyles['row'], globalStyles['row-cols-1'], globalStyles['row-cols-md-3'], globalStyles['text-center'])}>
        <Pedidos items={expenses} agregarCarrito={agregarCarrito} />
      </div>
    </React.Fragment>
  );
}

export default App;
