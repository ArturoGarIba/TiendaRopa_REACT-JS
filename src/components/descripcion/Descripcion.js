import styles from './Descripcion.module.css'
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import React, { Fragment, useContext, useState } from 'react';
import img from '../../img/ropa.jpg'
function Descripcion() {
    return (
        <Fragment>
            <div className={cx(globalStyles['container'], styles['bg-otro'])}>
                <div className={cx(globalStyles['row'])}>
                    <div className={cx(styles['div-img'], globalStyles['col-md-6'], globalStyles['d-flex'], globalStyles['justify-content-center'])}>
                        <div className={cx(globalStyles['col-md-9'], globalStyles['p-2'], globalStyles['m-2'], styles['bg-cont'])}>

                            <img src={img} className={styles['bg-guac']} alt="not found img">
                            </img>

                        </div>
                    </div>
                    <div className={cx(styles['div-info'], globalStyles['col-md-6'], globalStyles['d-flex'], globalStyles['justify-content-start'])}>
                        <div className={cx(globalStyles['col-md-9'], globalStyles['p-4'], styles['bg-black'], globalStyles['m-3'])}>
                            <p>
                                Hombres Camiseta con slogan con con estampado de dibujos animados
                            </p>
                            <p className={styles['clasificacion']}>
                                <input id="radio1" type="radio" name="estrellas" value="5" />
                                <label for="radio1">★</label>
                                <input id="radio2" type="radio" name="estrellas" value="4" />
                                <label for="radio2">★</label>
                                <input id="radio3" type="radio" name="estrellas" value="3" />
                                <label for="radio3">★</label>
                                <input id="radio4" type="radio" name="estrellas" value="2" />
                                <label for="radio4">★</label>
                                <input id="radio5" type="radio" name="estrellas" value="1" />
                                <label for="radio5">★</label>
                            </p>
                            <p className={cx(styles['p-pre'])}>
                                $MXN100.00 
                            </p>
                            <p>
                                Color: Negro Pasion
                            </p>
                            <div>
                            <button className={cx(globalStyles['btn'], styles['btn-add'])}>
                                ANADIR AL CARRITO
                            </button>
                            {/* <button >
                                favoritos <i class="bi bi-heart"></i>
                            </button> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default Descripcion;
