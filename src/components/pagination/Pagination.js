import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from '../UI/Card';
import { useEffect, useState } from "react";
import PedidosItem from './PedidosItem'
import cx from 'classnames';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import styles from './Pedidos.module.css'

const [producto, setProducto] = useState([]);
    let data = null;

     
    let index = 0;

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

function Items({ currentItems }) {
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
                            changeCantidad={showCantidad}
                            index={index}
                        />
                    </Card>
                 </div>
                ),
               
                )

    );
}

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

// Add a <div id="container"> to your HTML to see the componend rendered.
ReactDOM.render(
  <PaginatedItems itemsPerPage={6} />,
  document.getElementById('container')
);

