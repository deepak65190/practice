import React ,{useContext ,useState} from "react";
import ProductCard from "./Cart";
import {cartContext} from "./Context.jsx"
import styles from "./Cart.module.css"
const CardList=()=>{
    const {fruitItems ,setFruitItems ,updateQuantity}=useContext(cartContext) ;
     const [cout ,setCount]=useState(1) ;
const handleIncrement =(index ,q)=>{
updateQuantity(index,q+1)
}
const handleDecrement =(index ,q)=>{
updateQuantity(index,q-1)
}
    
    return(
        <>
        <div className={styles.container}>
        {fruitItems.length>0 && fruitItems.
map((ele ,ind)=> <ProductCard key={Date.now()+ind} value={ele} sub={handleDecrement} add={handleIncrement} />)}
   </div>
        </>
    )
}
export default CardList