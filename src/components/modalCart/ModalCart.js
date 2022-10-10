import Modal from "react-bootstrap/Modal";
import ModalContext from "../context/ModalContext";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import styles from "./ModalCart.module.css";
import actions from "../reducers/Actions";
import StateContext from "../context/state";
import cx from "classnames";
import globalStyles from "../../assets/global-styles/bootstrap.min.module.css";
import { Link } from "react-router-dom";

function ModalCart(props) {
  const { state, dispatch } = useContext(StateContext);
  const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCompra = state.cart.reduce(
    (sum, item) => sum + item.quantity * item.meal.precio,
    0
  );

  const showModal = () => {
    dispatch({
      type: actions.OPEN_MODAL,
    });
  };

  const hideModal = () => {
    dispatch({
      type: actions.CLOSE_MODAL,
    });
  };

  function increment(id) {
    dispatch({
      type: actions.UPDATE_MEAL,
      payload: { id, quantity: 1 },
    });
  }

  function decrement(id) {
    dispatch({
      type: actions.UPDATE_MEAL,
      payload: { id, quantity: -1 },
    });
  }

  function eliminar(id) {
    dispatch({
      type: actions.ELIMINAR_PRENDA,
      payload: { id },
    });
  }

  return (
    <>
      <button className={styles["btn-not"]} onClick={showModal}>
        <i className="bi bi-bag-check-fill"></i>
        <span className={styles["mar-lr"]}>Carrito</span>
        <span className="badge bg-primary">{total}</span>
      </button>
      <Modal
        show={state.isOpen}
        keyboard={false}
        onHide={hideModal}
        scrollable={true}
      >
        <Modal.Header>
          <Modal.Title>🛒 Mi Carrito</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul className={styles["cart-modal"]}>
            {state.cart.map((cartItem) => (
              <li>
                <section className={styles["cart-item"]}>
                  <article>
                    <img
                      src={cartItem.meal.url_img}
                      className={cx(styles["cart-img-top"])}
                      alt="..."
                    ></img>

                    <article>
                      <h2>{cartItem.meal.nombre_comida}</h2>
                      <div>
                        <h3>$ {cartItem.meal.precio}</h3>
                      </div>
                    </article>

                    <article>
                      {cartItem.quantity > 1 ? (
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <Button
                                  outline
                                  square
                                  onClick={() => decrement(cartItem.meal.id)}
                                >
                                  <b>
                                    <font size="3"> - </font>
                                  </b>
                                </Button>
                              </td>
                              <td className={styles["cell-border"]}>
                                <h4>{cartItem.quantity}</h4>
                              </td>
                              <td>
                                <Button
                                  outline
                                  square
                                  onClick={() => increment(cartItem.meal.id)}
                                >
                                  <b>
                                    <font size="3"> + </font>
                                  </b>
                                </Button>
                              </td>

                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      ) : (
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <Button outline square variant="dark">
                                  <b>
                                    <font size="3"> - </font>
                                  </b>
                                </Button>
                              </td>
                              <td className={styles["cell-border"]}>
                                <h4> {cartItem.quantity}</h4>
                              </td>
                              <td>
                                <Button
                                  outline
                                  square
                                  onClick={() => increment(cartItem.meal.id)}
                                >
                                  <b>
                                    <font size="3"> + </font>
                                  </b>
                                </Button>
                              </td>

                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      )}
                      <div class="col d-flex justify-content-end align-items-start">
                        <Button
                          variant="danger"
                          onClick={() => eliminar(cartItem.meal.id)}
                        >
                          🗑️ ELIMINAR
                        </Button>
                      </div>
                    </article>
                  </article>
                </section>
              </li>
            ))}

            <br />
            <h5>
              ✔ Total compra:{" "}
              <b>
                <font size="6">${totalCompra}</font>
              </b>
            </h5>
          </ul>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="dark" onClick={hideModal}>
            Continuar Comprando
          </Button>

          {total > 0 ?

        <Link to="/checkout">

            <Button variant="success" onClick={hideModal}>
              Ir a Pagar
            </Button>
          </Link>

          :
          <Button variant="success" onClick={hideModal}>
              Ir a Pagar
            </Button>


          }
          

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCart;
