import React, { createContext, useContext } from 'react'

const Price = createContext(4000);
const Discount = createContext(30);


function MainComp() {
  const myprice = useContext(Price)
  const mydiscount = useContext(Discount)
  return (
    <div id='container'>

        <Price.Provider value={{val: myprice}}>  
          <PriceComp />
        </Price.Provider>

        <Discount.Provider value={{discount: mydiscount}}>
          <DiscountComp />
        </Discount.Provider> 

        <Price.Provider value={{val: myprice}}> 
        <Discount.Provider value={{discount: mydiscount}}>
           <App/>
        </Discount.Provider>
        </Price.Provider>  
      
    </div>
  )
}

function App() {
const myprice = useContext(Price)
const mydiscount = useContext(Discount)
const finalPrice = myprice.val - (myprice.val * mydiscount.discount/100)

  return (
    <div id='app'>
    
    <h2>AppComp</h2>
    <p>Actual Price: {myprice.val}</p>
    <p>Discount Given: {mydiscount.discount}%</p>
    <p>Discounted Price: {finalPrice}</p>
      
    </div>
  )
}

function PriceComp() {
  const myprice = useContext(Price)
  return (
    <div id='pricecomp'>
      <h2>PriceComp</h2>
        <p>Price: {myprice.val}</p>
    </div>
  )
}

function DiscountComp() {
  const mydiscount = useContext(Discount)
  return (
    <div id='discountcomp'>
      <h2>DiscountComp</h2>
      <p>Discount: {mydiscount.discount}%</p>
    </div>
  )
}

export default MainComp