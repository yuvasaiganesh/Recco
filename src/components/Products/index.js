import {Component} from "react"

import "./index.css"
import ProductItem from "../ProductItem"
const productlist=[{
    id:1,
    name:"Chicken BreastFillets, Boneless MediaElement AudioSourceNode",
    brand:"Homes Black",
    price:"$60.67/6*1LB",
    quantity:"0",
    total:"0",
    status:""  
},

{
    id:2,
    name:"Chicken BreastFillets, Boneless MediaElement AudioSourceNode",
    brand:"Homes Black",
    price:"$60.67/6*1LB",
    quantity:"15*6*1LB",
    total:"$9000.88",
    status:""
    
},
{
    id:3,
    name:"Chicken BreastFillets, Boneless MediaElement AudioSourceNode",
    brand:"Homes Black",
    price:"$60.67/6*1LB",
    quantity:"0*6*1LB",
    total:"0",
    status:""
    
},
{
    id:4,
    name:"Chicken BreastFillets, Boneless MediaElement AudioSourceNode",
    brand:"Homes Black",
    price:"$60.67/6*1LB",
    quantity:"13*6*1LB",
    total:"$12000.00",
    status:""
    
}]

class Products extends Component{
    state={modifieddata:productlist}

    changetickdata=(item)=>{
        const {modifieddata}=this.state
       const filterdata= modifieddata.map(each=>{
            if (each.id===item){
             each.status="Approved"
             return each
            }
            return each

        })
        this.setState({modifieddata:filterdata})

    }

    changecrossdata1=(item)=>{
        const {modifieddata}=this.state
        const filterdata=modifieddata.map(each=>{
            if (each.id===item){
             each.status="MissingUrgent"
             return each
            }
            return each

        })
        this.setState({modifieddata:filterdata})

    }

    changecrossdata2=(item)=>{
        const {modifieddata}=this.state
        const filterdata=modifieddata.map(each=>{
            if (each.id===item){
             each.status="Missing"
             return each
            }
            return each

        })
        this.setState({modifieddata:filterdata})

    }

render(){
    const{modifieddata}=this.state

    return(
    <div>
        
    <div className="Products">
        <h1 className="Productheading">Product name</h1>
        <h1 className="Productheading">Brand</h1>
        <h1 className="Productheading">Price</h1>
        <h1 className="Productheading">Quantity</h1>
        <h1 className="Productheading">Total</h1>
        <h1 className="Productheading">Status</h1>
        <p className="Productheading">...</p>
        <p className="Productheading">Edit</p>
    </div>
    <ul>
  
    {
        modifieddata.map(each=>{
            return <ProductItem key={each.id} toChangeStatus={this.changetickdata} data={each}  tochangeCross1={this.changecrossdata1}  tochangeCross2={this.changecrossdata2}/>
        })
    }
    </ul>
    </div>)
}
}
export default Products