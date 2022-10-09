import styles from './Descripcion.module.css'
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import img from '../../img/ropa.jpg'
import { useParams } from 'react-router-dom';
import StateContext from '../context/state';
import MenuContext from '../context/menu';

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
    const { dispatch, state } = useContext(StateContext);
    const BASE_URL = "https://ropa-http-default-rtdb.firebaseio.com/";
    const [producto, setProducto] = useState([]);


    useEffect(() => {

        const fetchUser = async () => {
            //const userId = localStorage.getItem("userId");
            const url = `${BASE_URL}/productos.json?orderBy="$key"&equalTo="${id}"`;
            const response = await fetch(url);

            if (!response.ok) throw new Error("Algo salió mal :(");

            const responseData = await response.json();
            setProducto(Object.values(responseData)[0]);
            // console.log(precio)
        };
        fetchUser()
    }, []);

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

                                    <input id="radio1" type="radio" name="estrellas" value="5" checked={true} />
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
                                <div className={cx(globalStyles['d-flex'], globalStyles['justify-content-between'])}>
                                    <button className={cx(globalStyles['btn'], styles['btn-add'])}>
                                        ANADIR AL CARRITO
                                    </button>
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
