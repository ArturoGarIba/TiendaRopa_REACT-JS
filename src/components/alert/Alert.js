import cx from "classnames";
import styles from './Alert.module.css'
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';

function Alert(props) {

  

  return (
    <>
      <button onClick={props.onClick} className={cx(styles['btn-add'], globalStyles.btn, globalStyles['mb-3'])}>
        {/* <i className="bi bi-plus-circle"></i> */}
        <i className="bi bi-cart"></i>
        <span className={cx(styles['mar-lef'])}>
          Add to cart
        </span>
      </button>
      <ToastContainer />
    </>
  );

}

export default Alert;