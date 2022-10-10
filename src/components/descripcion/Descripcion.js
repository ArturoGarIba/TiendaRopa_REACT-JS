import styles from './Descripcion.module.css'
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuContext from '../context/menu';
import actions from "../reducers/Actions";
import StateContext from '../context/state';
import Alert from '../alert/AlertDesc'
import {  toast } from 'react-toastify';

function Descripcion() {
    let fR = 0;
    const addFav = () => {
        var heart = document.getElementById('btn-heart');
        if (fR === 0) {
            fR++;
            heart.style.color = '#ff0000';
        } else {
            heart.style.color = '#ffffff';
            fR = 0;
        }
    }

    const { id } = useParams();
    const BASE_URL = "https://ropa-http-default-rtdb.firebaseio.com/";
    const [producto, setProducto] = useState([]);
    const meals = useContext(MenuContext);
    const { dispatch } = useContext(StateContext);

    useEffect(() => {

        const fetchUser = async () => {
            const url = `${BASE_URL}/productos.json?orderBy="$key"&equalTo="${id}"`;
            const response = await fetch(url);

            if (!response.ok) throw new Error("Algo salió mal :(");

            const responseData = await response.json();
            setProducto(Object.values(responseData)[0]);
            
        };
        fetchUser()
        console.log(producto)
    }, []);


    function agregarPrenda() {
        const meal = meals[id];
        success()
        dispatch({
            type: actions.AGREGAR_PRENDA,
            payload: { meal, quantity: parseInt("1") },
        });
        
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

    return (
            <Fragment>
                <div className={cx(globalStyles['container'], styles['bg-otro'])}>
                    <div className={cx(globalStyles['row'])}>
                        <div className={cx(styles['div-img'], globalStyles['col-md-6'], globalStyles['d-flex'], globalStyles['justify-content-center'])}>
                            <div className={cx(globalStyles['col-md-9'], globalStyles['p-2'], globalStyles['m-2'], styles['bg-cont'])}>

                                <img src={producto.url_img} className={styles['bg-guac']} alt="not found img">
                                </img>

                            </div>
                        </div>
                        <div className={cx(styles['div-info'], globalStyles['col-md-6'], globalStyles['d-flex'], globalStyles['justify-content-start'])}>
                            <div className={cx(globalStyles['col-md-9'], globalStyles['p-4'], styles['bg-black'], globalStyles['m-3'])}>
                                <p>
                                    {producto.descripcion}
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
                                    <span className={styles['p-coments']}>(+100 Comentarios)</span>
                                </p>

                                <p className={cx(styles['p-pre'])}>
                                    $MXN{producto.precio}
                                </p>
                                <p>
                                    <b>Color</b>: Negro Pasion
                                </p>

                                <p>
                                    <b>
                                        Tallas:
                                    </b>
                                </p>

                                <div className={cx(globalStyles["btn-group"], globalStyles['mb-3'], styles['btn-g-tal'])} role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check btn-talla" name="btnradio" id="btnradio1" autoComplete="off" />
                                    <label className="btn btn-talla" for="btnradio1">XS</label>

                                    <input type="radio" className="btn-check btn-talla" name="btnradio" id="btnradio2" autoComplete="off" />
                                    <label className="btn btn-talla" for="btnradio2">S</label>

                                    <input type="radio" className="btn-check btn-talla" name="btnradio" id="btnradio3" autoComplete="off" />
                                    <label className="btn btn-talla" for="btnradio3">M</label>

                                    <input type="radio" className="btn-check btn-talla" name="btnradio" id="btnradio4" autoComplete="off" />
                                    <label className="btn btn-talla" for="btnradio4">L</label>
                                </div>

                                <div className={cx(globalStyles['d-flex'], globalStyles['justify-content-between'])}>
                                    {/* <button className={cx(globalStyles['btn'], styles['btn-add'])} onClick={agregarPrenda}>
                                        ANADIR AL CARRITO
                                    </button> */}
                                    <Alert onClick={() => agregarPrenda()}>

                                    </Alert>
                                    <button id='btn-heart' className={cx(styles['btn-not'])} onClick={addFav}>
                                        <i className="fa fa-light fa-heart fa-2x"></i>
                                    </button>
                                </div>

                                <div className={cx(styles['bg-gray'])}>
                                    <div className={cx(globalStyles['row'], globalStyles['row-cols-2'], globalStyles['mt-5'])}>
                                        <div className={cx(globalStyles['col-md-2'], globalStyles['d-flex'], globalStyles['justify-content-center'], globalStyles['align-items-center'], styles['icon-envio'])}>
                                            <i className="bi bi-box2"></i>
                                        </div>
                                        <div className={cx(globalStyles['col-md-10'])}>
                                            <p>
                                                <b>
                                                    Envío gratuito
                                                </b>
                                            </p>
                                            <p className={styles['envio-p']}>
                                                Envío gratuito estándar para pedidos de más de $MXN99.00
                                                Entrega estimada el día 23/10/2022 - 25/10/2022.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
            </Fragment>

    );
}


export default Descripcion;
