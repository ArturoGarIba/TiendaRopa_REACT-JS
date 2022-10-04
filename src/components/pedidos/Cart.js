import styles from './Cart.module.css'
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';

function Cart(props) {
    return (
        <>
            <div className={cx(globalStyles.div, globalStyles['d-flex'], styles['container'])}>
                <div className={styles['div-title']}>
                    REACT PEDIDOS
                </div>
                <div className={styles['div-cart']}>
                    <i className="bi bi-cart"></i>
                    Carrito
                    <span className="badge bg-danger">{props.cantidad}</span>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={cx(styles['svg'])}>
                    <path fill="#FFFFFF" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,85.3C640,117,800,203,960,245.3C1120,288,1280,288,1360,288L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path>
                </svg>
            </div>
            <div className={styles['container-somos']}>
                <div className={styles['div-somos']}>
                    <p>
                        <h2>Deliciosa Comida en tu Casa !!</h2>
                    </p>
                    <p>
                        Escoge tu platillo preferido de nuestra amplia seleccion de comidas y disfruta de un delicioso almuerzo o cema en casa
                    </p>
                    <p>
                        Todos nuestros platillos son preparados al momento con ingredientes de alta calidad y por supuesto con los mejores chefs
                    </p>
                </div>
            </div>

            

        </>
    );
}


export default Cart;