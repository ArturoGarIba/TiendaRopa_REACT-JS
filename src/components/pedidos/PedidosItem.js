import styles from './PedidosItem.module.css';
import { useState, useContext, useRef } from "react";
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import Alert from '../alert/Alert';
import StateContext from "../context/state"
import MenuContext from "../context/menu";
import actions from "../reducers/Actions";
import { useNavigate } from 'react-router-dom';

import {  toast } from 'react-toastify';

// import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.css'

function PedidosItem(props) {


  const inputs = useRef([]);
  const meals = useContext(MenuContext);
  const { dispatch } = useContext(StateContext);
  //const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(0);
  const navigate = useNavigate();
  const cambioCantidad = (event) => {


    setCantidad(event.target.value);
  }

  const agregarCarrito = (event) => {

  }
  const verify = () => {
    if (cantidad > 0) {

      success()
    } else {

      error()
    }
  }
  const success = () => {
    setTimeout(() => {
      toast.success('Producto agregado correctamente', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
        className: styles['msj-success']
      });
    }, 0);
  };

  const error = () => {
    setTimeout(() => {
      toast.error(`Debes ingresar al menos un producto para agregar al carrito`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
        className: cx(styles['msj-error'])
      });
    }, 0);
  }

  function agregarPrenda(index) {
    const meal = meals[index];
    const input = inputs.current[index];
    console.log(meal)
    verify()
    if (input.value > 0) {
      dispatch({
        type: actions.AGREGAR_PRENDA,
        payload: { meal, quantity: parseInt(input.value) },
      }
      );
      input.value = "0";
      setCantidad(input.value);
    } else {
      input.value = "0";
    }
  }

  function goToProduct(id) {
    // console.log(id)
    navigate(`/descripcion/${id}`)
  }

  return (
    <>
      <span className={styles['rel']}>
        <img src={props.url_img} className={cx(styles['card-img-top'])} alt="..."></img>
        {/* <Link to={"/descripcion"}> */}
        <button className={styles['btn-desc']} onClick={() => goToProduct(props.index)}>DESCRIPCION</button>
        {/* </Link> */}
        <div className={cx(globalStyles.div, styles['card-body'])}>
          <h5 className={cx(globalStyles['card-title'], globalStyles['text-center'])}>{props.nombre_comida}</h5>
          <p className={cx(globalStyles['card-text'], globalStyles['text-center'])}>{props.descripcion}</p>
          <p className={cx(globalStyles['card-text'], globalStyles['fw-bold'])}>MXN ${props.precio}</p>
          <div className={cx(globalStyles.div, globalStyles['card-footer'], globalStyles['text-center'])}>
            <div className={cx(globalStyles.div, globalStyles['ml-auto'])}>
              Cantidad

              <input
                ref={(el) => (inputs.current[props.index] = el)}
                type="number" className={cx(globalStyles.input, globalStyles['mb-3'], globalStyles['col-sm-5'], styles['inp-cant'])} min={1} value={cantidad} onChange={cambioCantidad}>

              </input>
            </div>
            <Alert onClick={() => agregarPrenda(props.index)}>

            </Alert>
          </div>
        </div>
      </span>
    </>

  );

}


export default PedidosItem;
