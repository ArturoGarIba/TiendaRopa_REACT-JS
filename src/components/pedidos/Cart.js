import styles from './Cart.module.css'
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
<<<<<<< HEAD
import React, { useContext, useState } from 'react';
// import ModalContext from '../context/ModalContext';
import ModalCart from '../modalCart/ModalCart'
=======
import logo from '../../img/logo2.png';
>>>>>>> 0d518641e6ec5f53320944e22fcf704be703ab2a

function Cart(props) {

    

    return (
        <React.Fragment>
            <div className={cx(globalStyles.div, globalStyles['d-flex'], styles['container'])}>
                <div className={styles['div-title']}>
                    <img src={logo} height={70} width={180}/>
                </div>

                <div className={styles['div-cart']}>
<<<<<<< HEAD
                    
                    <ModalCart count={props.cantidad}>

                    </ModalCart>
=======
                    <button className={styles['btn-not']}>
                        <i className="bi bi-cart"></i>
                        Carrito
                        <span className="badge bg-primary">{props.cantidad}</span>
                    </button>
>>>>>>> 0d518641e6ec5f53320944e22fcf704be703ab2a
                </div>

            </div>
            <div className={cx(globalStyles['mt-5'], globalStyles['mb-5'])}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={cx(styles['svg'])}>
                    <path fill="#FFFFFF" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,85.3C640,117,800,203,960,245.3C1120,288,1280,288,1360,288L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path>
                </svg> */}
                <svg width="100%" height="70%" id="svg" viewBox="0 0 1440 700" className={cx(styles['svg'])} xmlns="http://www.w3.org/2000/svg"><defs>
                    {/* <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#002bdc"></stop><stop offset="95%" stopColor="#32ded4">
                    </stop>
                    </linearGradient> */}
                </defs>
                    <path d="M 0,700 C 0,700 0,350 0,350 C 134,397.32142857142856 268,444.64285714285717 403,426 C 538,407.35714285714283 674,322.75 773,281 C 872,239.24999999999997 934,240.3571428571429 1039,259 C 1144,277.6428571428571 1292,313.82142857142856 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" strokeWidth="0" fill="#FFFFFF" fillOpacity="1">
                         {/* class="transition-all duration-300 ease-in-out delay-150 path-0"> */}
                    </path>
                </svg>
            </div>
            <div className={styles['container-somos']}>
                <div className={styles['div-somos']}>

                    <h2 className={styles['h2-somos']}>Deliciosa Comida en tu Casa !!</h2>

                    <p className={styles['p-somos']}>
                        Escoge tu platillo preferido de nuestra amplia seleccion de comidas y disfruta de un delicioso almuerzo o cema en casa
                    </p>
                    <p className={styles['p-somos']}>
                        Todos nuestros platillos son preparados al momento con ingredientes de alta calidad y por supuesto con los mejores chefs
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Cart;