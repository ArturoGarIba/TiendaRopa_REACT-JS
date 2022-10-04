import cx from "classnames";
import styles from './Alert.module.css'
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';

function Alert({ cantidad }) {

  const verify = () => {
    if(cantidad > 0){
      success()
    }else{
      error()
    }
  }
  const success = () => {
    setTimeout(() => {
      toast.success('Producto agregado correctamente', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000
      });
    }, 0);
  };

  const error = () => {
    setTimeout(() => {
      toast.error(`Debes ingresar al menos un producto para agregar al carrito`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: styles['msj-error']
      });
    }, 0);
  }

  return (
    <>
      <button type="submit" onClick={verify} className={cx(styles['btn-add'], globalStyles.btn, globalStyles['mb-3'])}>
        <i className="bi bi-plus-circle"></i>
        Agregar
      </button>
      <ToastContainer />
    </>
  );

}

export default Alert;