import "./index.css"
import { CiSearch } from "react-icons/ci";
import { MdLocalPrintshop } from "react-icons/md";

const Search=()=>(

    <div className="search">

<div className="searchsec1">
      <input className="searchinput" type="search" />
      <p><CiSearch/></p>
      
    
</div>

<div className="searchsec2"> 
    <button className="backButton">Add item</button>
    <p><MdLocalPrintshop/></p>
    
</div>

     </div>
)

export default Search