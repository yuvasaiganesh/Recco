import Popup from "reactjs-popup"
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import "./index.css"
const ProductItem=(props)=>{
    const {data,toChangeStatus,tochangeCross1,tochangeCross2}=props

    const toModify=()=>{
         toChangeStatus(data.id)
    }

    const toupdatecross1=()=>{
        tochangeCross1(data.id)
    }
    const toupdatecross2=()=>{
        tochangeCross2(data.id)
    }

    let color=data.status==="Approved" ? "green" :"red"
    

    return(
<li className="Productitem">
    <img className="fruit" src="https://res.cloudinary.com/dtni8yshm/image/upload/v1700927891/Avocado_Hass_v8yjfk.jpg" alt="fruit"/>
<p className="itemname"> {data.name} </p>
<p className="item">{data.brand}</p>
<p className="item">{data.price}</p>
<p className="item">{data.quantity}</p>
<p className="item">{data.total}</p>
<p className={color}>{data.status}</p>
<button onClick={toModify} className="tickbutton"><TiTick/></button>
<Popup  trigger={<button className="tickbutton"><RxCross1/></button>}  position="bottom right">
    <div className="newitem">
        <h1 className="popupheading">is {data.name} is urgent ? </h1>
        <div className="confirmbuttonSec">
        <button className="confirmbutton" onClick={toupdatecross1}>Yes</button>
        <button className="confirmbutton" onClick={toupdatecross2}>No</button>
        </div>
        </div>
                </Popup>
<p className="item">Edit</p>
</li>
)
}

export default ProductItem