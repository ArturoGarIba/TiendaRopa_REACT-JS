import Pedidos from "../components/pedidos/Pedidos";
import { useState, useEffect } from "react";
import MenuContext from "../components/context/menu";
import useHttp from "../components/hooks/hook";


function Productos() {
	const [producto, setProducto] = useState([]);
    const BASE_URL = "https://ropa-http-default-rtdb.firebaseio.com/";
    const {isLoading, error, request} = useHttp();

    useEffect(() => {
        const fetchUser = async () => {
          //const userId = localStorage.getItem("userId");
          const url = `${BASE_URL}/productos.json?orderBy="$key"`;
          const responseData = await request({url});
  
            setProducto( [...responseData]);
            
        };
    
        fetchUser()
        
      }, [request]);
      const loadingMessage = <h2>Cargando</h2>;
      const errorMessage = <h2>{error}</h2>;


	return (
		<MenuContext.Provider value={producto}>
      {isLoading && loadingMessage}
      {error && errorMessage}
      {!isLoading && !error &&
			<Pedidos />
      }
		</MenuContext.Provider>
	);
}

export default Productos;