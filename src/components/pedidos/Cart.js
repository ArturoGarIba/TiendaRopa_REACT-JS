import styles from "./Cart.module.css";
import cx from "classnames";
import globalStyles from "../../assets/global-styles/bootstrap.min.module.css";
import React, { useContext, useState } from "react";
// import ModalContext from '../context/ModalContext';
import ModalCart from "../modalCart/ModalCart";
import logo from "../../img/logo2.png";
import { Link } from "react-router-dom";

function Cart(props) {

  return (
    <React.Fragment>
      <div className={cx(globalStyles['d-flex'], styles['container'])}>
        <div className={cx(globalStyles['container-fluid'], styles['container'])}>

          <div className={styles['div-title']}>
            <Link to="/">
              <img src={logo} height={70} width={180} />
            </Link>

            <div>
              <Link to="/" className={cx(globalStyles["btn"], globalStyles['btn-outline-secondary'], styles['btn-go2'])}>HOME</Link>
              <Link to="/store" className={cx(globalStyles["btn"], globalStyles['btn-outline-secondary'], styles['btn-go'])}>GO SHOPPING</Link>
            </div>
          </div>

          <div className={styles["div-cart"]}>
            <ModalCart />
          </div>
        </div>
      </div>

    </React.Fragment>
  );

}

export default Cart;