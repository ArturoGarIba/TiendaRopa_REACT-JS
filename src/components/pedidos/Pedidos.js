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

    
    useEffect(() => {
        const fetchUser = async () => {
          const url = `${BASE_URL}/productos.json?orderBy="$key"`;
          const response = await fetch(url);
          if (!response.ok) throw new Error("Algo salió mal :(");
            const responseData = await response.json();
             data = [...responseData]
            setProducto( [...data]);
            console.log(data)

          
        };
        fetchUser()
        
      }, []);

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
                            index={index}
                        />
                    </Card>
                 </div>
                ),
               
                )

    );
}


export default Pedidos;