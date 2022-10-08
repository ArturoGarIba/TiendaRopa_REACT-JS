// import styles from './Pedidos.module.css'
import Card from '../UI/Card';
import { useEffect, useState } from "react";
import PedidosItem from './PedidosItem'
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import styles from './Pedidos.module.css'
import { useContext, useRef } from "react";
import MenuContext from "../context/menu";

function Pedidos(props) {

    const producto = useContext(MenuContext);
    

    const BASE_URL = "https://ropa-http-default-rtdb.firebaseio.com/";

    

    const showCantidad = (event) => {
        props.agregarCarrito(event)
    }
    
    return (
    
        producto.map((expense, index) => (
           
                <div className={cx(globalStyles.div, globalStyles['col-lg-3'], globalStyles['col-sm-6'], globalStyles['mb-3'], styles['div-cent'])}>
                    <Card >
                        <PedidosItem
                            key={expense.id}
                            url_img={expense.url_img}
                            nombre_comida={expense.nombre_comida}
                            descripcion={expense.descripcion}
                            precio={expense.precio}
                            index={index}
                            changeCantidad={showCantidad}
                            
                        />
                    </Card>
                 </div>
                ),
               
                )

    );
}


export default Pedidos;