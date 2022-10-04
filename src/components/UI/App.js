// import styles from './App.module.css';
import Pedidos from '../pedidos/Pedidos';
import guac from '../../img/guacamaya.jpg';
import lasa from '../../img/lasagna.jpg';
import pizza from '../../img/pizza.jpg';
import tacos from '../../img/tripa.jpg';
import Cart from '../../components/pedidos/Cart'
import { useState } from 'react';
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';


function App() {
  const expenses = [
    {
      id: Math.random(),
      nombre_comida: "Tacos de tripa",
      descripcion: "Ricos tacos de tipa dorada",
      precio: 250,
      url_img: tacos
    },
    {
      id: Math.random(),
      nombre_comida: "Pizza peperoni",
      descripcion: "Pizaaaaaaaaaaaaaaaa",
      precio: 50,
      url_img: pizza
    },
    {
      id: Math.random(),
      nombre_comida: "Guacamaya",
      descripcion: "Guacamayaaaa",
      precio: 600,
      url_img: guac
    },
    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: lasa
    },
    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: lasa
    },
    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: lasa
    },
    {
      id: Math.random(),
      nombre_comida: "Lasagna",
      descripcion: "Lasagnaaaa",
      precio: 600,
      url_img: lasa
    }
  ];
  let [cantidad, setCantidad] = useState(0);
  const agregarCarrito = (event) => {
      setCantidad((prevState) => cantidad+= parseInt(event))
      // console.log(event);
  }

  return (
    <>
      <Cart cantidad={cantidad}/>
      <div className={cx(globalStyles.div, globalStyles['row'], globalStyles['row-cols-1'], globalStyles['row-cols-md-3'], globalStyles['text-center'])}>
        <Pedidos items={expenses} agregarCarrito={agregarCarrito} />
      </div>
    </>
  );
}

export default App;
