import React, { useContext } from 'react';
import  Button  from 'react-bootstrap/Button';
import styles from '../../components/modalCart/ModalCart.module.css'
import StateContext from '../../components/context/state';
import cx from 'classnames';
import { Link } from 'react-router-dom';


function CheckOut(props) {


    const { state, dispatch } = useContext(StateContext);
	const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalCompra = state.cart.reduce((sum, item) => sum + (item.quantity * item.meal.precio), 0);

   

  
    return (

        
            <>
            
           <h1>Detalle de la compra</h1>
                {state.cart.map((cartItem) => (
						<li>
							<section >
								<article>
                                <img src={cartItem.meal.url_img} className={cx(styles['card-img-top'])} alt="..."></img>
									<h2>{cartItem.meal.nombre_comida}</h2>
									<div>
										<h4>$ {cartItem.meal.precio * cartItem.quantity}</h4>
										<figure>
											<h4>x {cartItem.quantity}</h4>
										</figure>
									</div>
								</article>
								
							</section>
						</li>
					))
                    
                    }
                    
                    <br/>
                    <h4>Total compra: ${totalCompra}</h4>
               
                    <Link to="/store">
                    <Button variant="danger" >
                        Continuar Comprando
                    </Button>
                    </Link>

                    <Link to="/">
                    <Button variant="primary" >
                         Pagar
                    </Button>
                    </Link>
                    
             
        </>
        
    );
}

export default CheckOut;
