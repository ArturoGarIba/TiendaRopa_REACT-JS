import styles from './Pedidos.module.css'
import Card from '../UI/Card';
import PedidosItem from './PedidosItem'
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';

function Pedidos(props) {

    const showCantidad = (event) => {
        props.agregarCarrito(event)
    }
    return (
    
            props.items.map((expense) => (
                <div className={cx(globalStyles.div, globalStyles['col-lg-3'], globalStyles['col-sm-6'], styles['expenses'])}>
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
                ))

    );
}


export default Pedidos;