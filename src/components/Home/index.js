import {Component} from "react"
import Navbar from "../Navbar"
import Orderdetails from "../Orderdetails"
import Supplier from "../Supplier"
import Search from "../Search"
import Products from "../Products"

class Home extends Component{
    render(){
        return(
            <div className="home">
                <Navbar/>
                <Orderdetails/>
                <Supplier/>
                <Search/>
                <Products/>
            </div>
        )
    }
}
export default Home