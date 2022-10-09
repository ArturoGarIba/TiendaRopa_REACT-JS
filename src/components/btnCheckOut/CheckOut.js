import React, { useContext, Fragment} from 'react';
import  Button  from 'react-bootstrap/Button';
import StateContext from '../../components/context/state';
import actions from "../reducers/Actions";
import { Link } from 'react-router-dom';



function CheckOut(props) {
    const { state, dispatch } = useContext(StateContext);
    //const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalCompra = state.cart.reduce((sum, item) => sum + (item.quantity * item.meal.precio), 0);
    function eliminarTodo() {
        dispatch({
            type: actions.ELIMINAR_TODO,
        });
    }
    let fR = 0;
    const addFav = () => {
        var heart = document.getElementById('btn-heart');
        if (fR === 0) {
            fR++;
            heart.style.color = '#FF0000';
        } else {
            heart.style.color = '#FFFFFF';
            fR = 0;
        }
    }
    return (
            <>
                {state.cart.map((cartItem) => (
                        <li>
                            <section >
                                <article>
                                <div className={cx(globalStyles['container'], styles['bg-otro'])}>
                                    <div className={cx(globalStyles['row'])}>
                                        <div className={cx(styles['div-img'], globalStyles['col-md-6'], globalStyles['d-flex'], globalStyles['justify-content-center'])}>
                                            <div className={cx(globalStyles['col-md-9'], globalStyles['p-2'], globalStyles['m-2'], styles['bg-cont'])}>
                                            <img src={cartItem.meal.url_img} className={styles['ck-guac']} alt="..."></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx(styles['div-info'], globalStyles['col-md-6'], globalStyles['d-flex'], globalStyles['justify-content-start'])}>
                                    <div className={cx(globalStyles['col-md-9'], globalStyles['p-4'], styles['bg-black'], globalStyles['m-3'])}>
                                        <tr>
                                            <td>
                                        <h2>{cartItem.meal.nombre_comida }</h2>
                                        <div>
                                        <p className={cx(styles['p-pre'])}>
                                            <h4>$ {cartItem.meal.precio * cartItem.quantity} MXN</h4>
                                        </p>
                                            <figure>
                                                <h4>x {cartItem.quantity}</h4>
                                            </figure>
                                            <button id='btn-heart' className={cx(styles['btn-not'])} >
                                                <i class="fa fa-light fa-heart " > Save for later</i>
                                            </button>
                                        </div>
                                        </td>
                                        </tr>
                                    </div>
                                </div>
                                </article>
                            </section>
                        </li>
                    ))
                    }
                    <br/>
                    <h3>Subtotal: ${totalCompra}</h3>
                    <Link to="/store">
                        <Button variant="danger" >
                            Continue shooping
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button variant="primary" onClick={() => eliminarTodo(state.cart)}>
                            Place order
                        </Button>
                    </Link>
        </>
    );
}
export default CheckOut;
