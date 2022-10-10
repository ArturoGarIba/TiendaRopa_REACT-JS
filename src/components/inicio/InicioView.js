import styles from './InicioView.module.css'
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import img1 from '../../img/img1.jpg'
import info1 from '../../img/info1.gif'
import info2 from '../../img/info2.gif'
import info3 from '../../img/info3.gif'
import ropa1 from '../../img/ropa1.jpg'
import ropa2 from '../../img/ropa2.jpg'
import ropa3 from '../../img/ropa3.jpg'
// import ModalContext from '../context/ModalContext';
//import ModalCart from '../modalCart/ModalCart'

function InicioView() {
    return (
        <React.Fragment>
            <div className={cx(styles['relative'])}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={cx(styles['svg'])}>
                    <path fill="#FFFFFF" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,85.3C640,117,800,203,960,245.3C1120,288,1280,288,1360,288L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path>
                </svg> */}
                <svg width="100%" height="30%" id="svg" viewBox="0 0 1440 700" className={cx(styles['svg'])} xmlns="http://www.w3.org/2000/svg"><defs>
                </defs>
                    <path d="M 0,700 C 0,700 0,350 0,350 C 134,397.32142857142856 268,444.64285714285717 403,426 C 538,407.35714285714283 674,322.75 773,281 C 872,239.24999999999997 934,240.3571428571429 1039,259 C 1144,277.6428571428571 1292,313.82142857142856 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" strokeWidth="0" fill="#FFFFFF" fillOpacity="1">
                        {/* class="transition-all duration-300 ease-in-out delay-150 path-0"> */}
                    </path>
                </svg>
                <div className={styles['div-somos']}>
                    <p className={styles['h2-somos']}>
                        "In HEIN we are committed to offer our clients the best products in clothing wih the highest standards of quality at a reasonable price.
                        We hope you can enjoy the experience of buying in our new web page."
                    </p>

                    <Link to="/store" className={cx(globalStyles['btn'], styles['btn-dark'])}>🛍 GO SHOPPING 🛍</Link>

                    {/* <p className={styles['p-somos']}>
                        Fashion is the armor to survive the reality of everyday life.
                    </p>
                    <p className={styles['p-somos']}>
                        Athleisure + Bottoms + Hoodies + Jackets =  ***
                    </p> */}
                </div>
            </div>
            <div className={styles['container-somos']}>
            </div>

            <div className={globalStyles['container']}>
                <div className={globalStyles['row']}>
                    <div className={cx(globalStyles['col-md-4'], globalStyles['p-0'])}>
                        <img src={info1} className={styles['img-1']}></img>
                    </div>
                    <div className={cx(globalStyles['col-md-4'], globalStyles['p-0'])}>
                        <img src={info2} className={styles['img-1']}></img>
                    </div>
                    <div className={cx(globalStyles['col-md-4'], globalStyles['p-0'])}>
                        <img src={info3} className={styles['img-1']}></img>
                    </div>
                </div>
                <div className={globalStyles['row']}>
                    <div className={cx(globalStyles['col-lg-12'], styles['bg-gray'], globalStyles['p-0'])}>
                        <img src={img1} className={styles['img-1']}></img>
                    </div>
                </div>

                <div className={cx(globalStyles['container'], globalStyles['mt-3'], globalStyles['p-0'], globalStyles['text-center'])}>
                    <p className={styles['p-subtitle']}>
                        HERE YOU'LL FIND THE BEST QUALITY AND DESIGN
                    </p>
                    <div className={cx(globalStyles['row'])}>

                        <div class={cx(globalStyles['col-md-4'])} >
                            <img src={ropa1} className={cx(styles['img-1'])}></img>
                        </div>
                        <div class="col-md-4">
                            <img src={ropa2} className={styles['img-1']}></img>
                        </div>
                        <div class="col-md-4">
                            <img src={ropa3} className={styles['img-1']}></img>
                        </div>

                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}
export default InicioView;