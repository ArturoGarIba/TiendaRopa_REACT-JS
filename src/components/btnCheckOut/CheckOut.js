import React, { useContext, Fragment } from "react";
import Button from "react-bootstrap/Button";
import StateContext from "../../components/context/state";
import actions from "../reducers/Actions";
import { Link } from "react-router-dom";
import styles from "./CheckOut.module.css";
import cx from "classnames";
import globalStyles from "../../assets/global-styles/bootstrap.min.module.css";

//Summary Order
function CheckOut(props) {
  const { state, dispatch } = useContext(StateContext);
  //const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCompra = state.cart.reduce(
    (sum, item) => sum + item.quantity * item.meal.precio,
    0
  );

  function eliminarTodo() {
    dispatch({
      type: actions.ELIMINAR_TODO,
    });
  }

  let fR = 0;

  const addFav = () => {
    var heart = document.getElementById("btn-heart");

    if (fR === 0) {
      fR++;
      heart.style.color = "#FF0000";
    } else {
      heart.style.color = "#FFFFFF";
      fR = 0;
    }
  };

  return (
    <>
      <div className={cx(globalStyles["container"], styles["co-bg-otro"])}>
        <div className={cx(globalStyles["col-md-9"])}>
          <ul className={styles["co-modal"]}>
            <h1>🛍 Summary Order</h1>
            {state.cart.map((cartItem) => (
              <li>
                <section className={styles["co-item"]}>
                  <article>
                    <img
                      src={cartItem.meal.url_img}
                      className={cx(styles["co-img-top"])}
                      alt="..."
                    ></img>

                    <article>
                      <h2>{cartItem.meal.nombre_comida}</h2>
                      <div>
                        <p className={cx(styles["p-pre"])}>
                          <h3>
                            $ {cartItem.meal.precio * cartItem.quantity} MXN
                          </h3>
                        </p>
                        <figure>
                          <h6>x {cartItem.quantity}</h6>
                        </figure>
                        <button
                          id="btn-heart"
                          className={cx(styles["btn-not"])}
                        >
                          <i class="fa fa-light fa-heart "> Save for later</i>
                        </button>
                      </div>
                    </article>

                    <article>
                      <div class="col d-flex justify-content-end align-items-start"></div>
                    </article>
                  </article>
                </section>
              </li>
            ))}

            <br />
            <div className={styles["totalpurchase"]}>
              ✔ Total purchase:{" "}
              <b>
                <font size="6.5">${totalCompra}</font> 
              </b> MXN
            </div>
          </ul>

          <br />
          <div className={styles["botones"]}>
            <table className={cx(styles["botoncitos"])}>
              <tbody>
                <tr>
                  <td>
                    <Link to="/store">
                      <Button variant="dark">Continue Shopping</Button>
                    </Link>
                  </td>
                  <td>
                    <Link to="/">
                      <Button
                        variant="success"
                        onClick={() => eliminarTodo(state.cart)}
                      >
                        Place Order
                      </Button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default CheckOut;
