// Create a context
import React from "react";
const FoodContext = React.createContext();

// Create a context provider
export function FoodProvider({ children }) {
  const [foodItems, setFoodItems] = React.useState([
    { name: 'Noodes', price: 30, rating: 1, quantity: 1 },
    { name: 'Biriyani', price: 90, rating: 'P', quantity: 1 },
    { name: 'Chips', price: 10, rating: -3, quantity: 1 },
  ]);

  const updateQuantity = (index, newQuantity) => {
    setFoodItems(
      foodItems.map((food, i) =>
        i === index ? { ...food, quantity: newQuantity } : food
      )
    );
  };

  const totalPrice = foodItems.reduce((total, food) => total + food.price * food.quantity, 0);

  return (
    <FoodContext.Provider value={{ foodItems, updateQuantity, totalPrice }}>
      {children}
    </FoodContext.Provider>
  );
}

// Use the context in a component
export function FoodList() {
  const { foodItems, updateQuantity, totalPrice } = React.useContext(FoodContext);

  return (
    <div>
      <ul>
        {foodItems.map((food, index) => (
          <li key={index}>
            {food.name} - ${food.price} - Rating: {food.rating} - Quantity:{' '}
            <button onClick={() => updateQuantity(index, food.quantity - 1)}>
              -
            </button>{' '}
            {food.quantity} <button onClick={() => updateQuantity(index, food.quantity + 1)}>
              +
            </button>
          </li>
        ))}
      </ul>
      <div>Total Price: ${totalPrice}</div>
    </div>
  );
}

