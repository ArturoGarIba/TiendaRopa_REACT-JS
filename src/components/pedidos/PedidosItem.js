import styles from './PedidosItem.module.css';
import { useState, useContext, useRef } from "react";
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import Alert from '../alert/Alert';
import StateContext from "../context/state"
import MenuContext from "../context/menu";
import actions from "../reducers/Actions";
// import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.css'

function PedidosItem(props) {

   
    const inputs = useRef([]);
	const meals = useContext(MenuContext);
	const { dispatch } = useContext(StateContext);
	//const navigate = useNavigate();
    const [cantidad, setCantidad] = useState(0);

    const cambioCantidad = (event) => {
       setCantidad(event.target.value);
    }

    const agregarCarrito = (event) => {
<<<<<<< HEAD
        event.preventDefault();
        props.changeCantidad(cantidad);
        agregarPrenda();
    }

    function agregarPrenda(){
        // const prenda = prendas[index];
        const input = inputs.current[props.index];
        console.log(props.index)
        // if (input.value) {
		// 	dispatch({
		// 		type: actions.ADD_MEAL,
		// 		payload: { meal, quantity: parseInt(input.value) },
		// 	});
		// }
        input.value = "0"
        setCantidad(0)
    }
=======
     //   event.preventDefault();
      //  props.changeCantidad(cantidad);
        // setCantidad("");
    }

    function agregarPrenda(index){
        
        const meal = meals[index];
		const input = inputs.current[index];

        console.log(meal)
		if (input.value) {
			dispatch({
				type: actions.AGREGAR_PRENDA,
				payload: { meal, quantity: parseInt(input.value) },
			});
            
			input.value = "";
		}
	 }
     function goToMeal(id) {
		//navigate(`/meal/${id}`);
	}
>>>>>>> 604fe5a61aa68a83bfa79f436f3dbbb9c243c5bb

    return (
        <>
            
                <img src={props.url_img} className={cx(styles['card-img-top'])} alt="..."></img>
                <div className={cx(globalStyles.div, styles['card-body'])}>
                    <h5 className={cx(globalStyles['card-title'])}>{props.nombre_comida}</h5>
                    <p className={cx(globalStyles['card-text'], styles['card-desc'])}>{props.descripcion}</p>
                    <p className={cx(globalStyles['card-text'], globalStyles['fw-bold'])}>MXN ${props.precio}</p>
                    <div className={cx(globalStyles.div, globalStyles['card-footer'], globalStyles['text-center'])}>
                        <div className={cx(globalStyles.div, globalStyles['ml-auto'])}>
                            Cantidad
<<<<<<< HEAD
                            <input ref={(el) => (inputs.current[props.index] = el)}
                            type="number" className={cx(globalStyles.input, globalStyles['mb-3'], globalStyles['col-sm-5'], styles['inp-cant'])} min="1"
                            value={cantidad}  onChange={cambioCantidad}>
=======
                            <input 
                            ref={(el) => (inputs.current[props.index] = el)}
                            type="number" className={cx(globalStyles.input, globalStyles['mb-3'], globalStyles['col-sm-5'], styles['inp-cant'])} min="1" value={cantidad} onChange={cambioCantidad}>
>>>>>>> 604fe5a61aa68a83bfa79f436f3dbbb9c243c5bb

                            </input>
                        </div>
                        <Alert onClick={()=> agregarPrenda(props.index)} cantidad={cantidad}>       
                        </Alert>
                    </div>
                </div>
            

        </>

    );

}


export default PedidosItem;
