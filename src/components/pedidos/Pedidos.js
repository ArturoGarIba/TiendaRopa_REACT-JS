// import styles from './Pedidos.module.css'
import Card from '../UI/Card';
import { useEffect, useState } from "react";
import PedidosItem from './PedidosItem'
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import styles from './Pedidos.module.css'
function Pedidos(props) {

    const [producto, setProducto] = useState([]);
    let data = null;

     
    let index = 0;

    const BASE_URL = "https://ropa-http-default-rtdb.firebaseio.com/";

    useEffect(() => {
        const fetchUser = async () => {
          //const userId = localStorage.getItem("userId");
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
    
        producto.map((expense) => (
           
                <div className={cx(globalStyles.div, globalStyles['col-lg-3'], globalStyles['col-sm-6'], globalStyles['mb-3'], styles['div-cent'])}>
                    <Card >
                        <PedidosItem
                            key={expense.id}
                            url_img={expense.url_img}
                            nombre_comida={expense.nombre_comida}
                            descripcion={expense.descripcion}
                            precio={expense.precio}
                            changeCantidad={showCantidad}
                            
                        />
                    </Card>
                 </div>
                ),
               
                )

    );
}


export default Pedidos;