import { LogoutStaff, auth } from "../../firebase/firebaseAuth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleAddProduct = () => {
        navigate("/add-product");
    };
    const handleOrders = () => {
        navigate("/admin-orders");
    };
    const handleStocks = () => {
        navigate("/admin-stock");
    };

    return(
        <>
        <h1>Este es un dashboard para el staff</h1>
        <button onClick={handleAddProduct}>Agregar Producto</button>
        <button onClick={handleOrders}>Administrar Pedidos</button>
        <button onClick={handleStocks}>Administrar Stock</button>
        <button onClick={() => LogoutStaff(auth)}>Cerrar Sesión</button>
        </>
    );
};

export default Dashboard;