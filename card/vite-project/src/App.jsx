import React from 'react'
import { FoodList , FoodProvider} from './Card/newCard'
import { Card , } from './Card/Card'
function App() {
  

  return (
    <>
      <FoodProvider>
        <FoodList/>
      </FoodProvider>
      
     
    </>
  )
}

export default App
