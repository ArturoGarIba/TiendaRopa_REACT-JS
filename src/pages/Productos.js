import Pedidos from "../components/pedidos/Pedidos";
import { useState, useEffect } from "react";
import MenuContext from "../components/context/menu";


function Productos() {
	const [producto, setProducto] = useState([]);
    const BASE_URL = "https://ropa-http-default-rtdb.firebaseio.com/";
	

    useEffect(() => {
        const fetchUser = async () => {
          //const userId = localStorage.getItem("userId");
          const url = `${BASE_URL}/productos.json?orderBy="$key"`;
          const response = await fetch(url);
    
          if (!response.ok) throw new Error("Algo salió mal :(");
    
            const responseData = await response.json();
            setProducto( [...responseData]);
            
        };
    
        fetchUser()
        
      }, []);

	return (
		<MenuContext.Provider value={producto}>
			<Pedidos />
		</MenuContext.Provider>
	);
}

export default Productos;