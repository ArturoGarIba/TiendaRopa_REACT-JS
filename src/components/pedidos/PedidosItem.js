import styles from './PedidosItem.module.css';
import { useState, useContext, useRef } from "react";
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import Alert from '../alert/Alert';
import StateContext from "../context/StateContext"
// import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.css'

function PedidosItem(props) {

    const [cantidad, setCantidad] = useState(0);
    const inputs = useRef([]);
    const prendas = useContext(StateContext);

    const cambioCantidad = (event) => {
        setCantidad(event.target.value);
    }

    const agregarCarrito = (event) => {
        event.preventDefault();
        props.changeCantidad(cantidad);
        // setCantidad("");
    }

    function agregarPrenda(index){
        const prenda = prendas[index];
        const input = inputs.current[index];

        if (input.value) {
			dispatch({
				type: actions.ADD_MEAL,
				payload: { meal, quantity: parseInt(input.value) },
			});

			input.value = "";
		}
    }

    return (
        <>
            <form onSubmit={agregarCarrito}>
                <img src={props.url_img} className={cx(styles['card-img-top'])} alt="..."></img>
                <div className={cx(globalStyles.div, styles['card-body'])}>
                    <h5 className={cx(globalStyles['card-title'])}>{props.nombre_comida}</h5>
                    <p className={cx(globalStyles['card-text'], styles['card-desc'])}>{props.descripcion}</p>
                    <p className={cx(globalStyles['card-text'], globalStyles['fw-bold'])}>MXN ${props.precio}</p>
                    <div className={cx(globalStyles.div, globalStyles['card-footer'], globalStyles['text-center'])}>
                        <div className={cx(globalStyles.div, globalStyles['ml-auto'])}>
                            Cantidad
                            <input type="number" className={cx(globalStyles.input, globalStyles['mb-3'], globalStyles['col-sm-5'], styles['inp-cant'])} min="1" value={cantidad} onChange={cambioCantidad}>

                            </input>
                        </div>
                        <Alert cantidad={cantidad}>       
                        </Alert>
                    </div>
                </div>
            </form>

        </>

    );

}


export default PedidosItem;
