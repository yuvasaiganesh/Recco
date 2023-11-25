import "./index.css"
import { GiShoppingCart } from "react-icons/gi";

const Navbar=()=>(
    <div className="navbar">
<div className="navsec1">
    <h1 className="logoName">Recco</h1>
    <p className="routeName">Store</p>
    <p className="routeName">Orders</p>
    <p className="routeName">Analytics</p>
</div>
<div className="navsec2"> 
    <p className="routeName">Hello, James</p>
    <GiShoppingCart className="cart"/>
</div>
</div>
)

export default Navbar