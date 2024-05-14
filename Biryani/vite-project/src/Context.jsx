import React , { createContext } from "react";
const cartContext=createContext(null) ;
const CartProvider=({children})=>{
    const [fruitItems, setFruitItems] = React.useState([
        { name: 'Banana', price: 50 ,id:11001, quantity: 1 ,iamge:"https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400" },
        { name: 'Apple', price: 60,  id:11002 , quantity: 1  ,iamge:"https://m.economictimes.com/thumb/msid-70362418,width-1200,height-900,resizemode-4,imgsize-971552/apples_getty-images.jpg"},
        { name: 'Mango', price:40, id:11003 , quantity: 1 ,iamge:"https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/01/mangoes_what_to_know_1296x728_header-1024x575.jpg?w=1155&h=1528" },
      ]);

      const updateQuantity = (i, newQuantity) => {
        // console.log(i ,newQuantity)
        setFruitItems(
          fruitItems.map((food, i) =>
            console.log(food.id)
            // food[i].id === index ? { ...food, quantity: newQuantity } : food
          )
        );
      };
    return(
        <cartContext.Provider value={{fruitItems,setFruitItems ,updateQuantity}}>
{children}
        </cartContext.Provider>
    )
}
export {cartContext ,CartProvider}