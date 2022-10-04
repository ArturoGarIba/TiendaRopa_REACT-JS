import styles from './PedidosItem.module.css';
import { useState } from "react";
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
// import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.css'

function PedidosItem(props) {

    const [cantidad, setCantidad] = useState(0);

    const cambioCantidad = (event) => {
        setCantidad(event.target.value);
    }

    const agregarCarrito = (event) => {
        event.preventDefault();
        props.changeCantidad(cantidad);
        // setCantidad("");
    }

    return (
        <>
            <form onSubmit={agregarCarrito}>
                <img src={props.url_img} className={cx(styles['card-img-top'])} alt="..."></img>
                <div className={cx(globalStyles.div, styles['card-body'])}> 
                    <h5 className={cx(globalStyles['card-title'])}>{props.nombre_comida}</h5>
                    <p className={cx(globalStyles['card-text'])}>{props.descripcion}</p>
                    <p className={cx(globalStyles['card-text'])}>${props.precio}</p>

                    <div className={cx(globalStyles.div, globalStyles['card-footer'])}>
                        <div className={cx(globalStyles.div, globalStyles['d-flex'])}>
                            Cantidad
                            <input type="number" className={cx(globalStyles.input, globalStyles['mb-3'], globalStyles['col-sm-5'], styles['inp-cant'])} min="1" value={cantidad} onChange={cambioCantidad}></input>
                        </div>
                        <button type="submit" className={cx(globalStyles.btn, globalStyles['btn-success'])}>+ Agregar</button>
                    </div>
                </div>
            </form>

        </>

    );

}


export default PedidosItem;