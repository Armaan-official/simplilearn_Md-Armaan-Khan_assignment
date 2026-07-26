import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [
        {
          id: "1",
          productName: "Mobile",
          price: 25000,
          quantity: 0,
          brand: "B2",
          color: "Blue",
          discount: "10%"
        },
        {
          id: "2",
          productName: "Laptop",
          price: 60000,
          quantity: 0,
          brand: "L3",
          color: "Black",
          discount: "20%"
        },
        {
          id: "3",
          productName: "TV",
          price: 30000,
          quantity: 0,
          brand: "T4",
          color: "Grey",
          discount: "15%"
        },
        {
          id: "4",
          productName: "Mouse",
          price: 500,
          quantity: 0,
          brand: "M5",
          color: "Green",
          discount: "5%",
        }
      ]
    }
  }

  manageCart = (id, value) => {
    this.setState(prevState => ({
      products: prevState.products.map((product) =>
      product.id === id ? {...product, quantity: Math.max(0, product.quantity + value)}
      : product) 
    }))
  }


  render() {

  const { products } = this.state;

    return(
      <div>
        <h2>PRODUCT LIST</h2>
        {products.map((product, index) => (
          <div key={product.id} id="product-list">
            <div id="details">
              <h3>Name: {product.productName}</h3>
              <p>Price: {product.price}</p>
              <p>Brand: {product.brand}</p>
              <p>Color: {product.color}</p>
              <p>Discount: {product.discount}</p>
            </div>


            <div id="cart">
              <button id="add" onClick={() => this.manageCart(product.id, 1)}>Add</button>
              <p id="quantity">{product.quantity}</p>
              <button id="remove" onClick={() => this.manageCart(product.id, -1)}>Remove</button>
            </div>

          </div>   
        ))}
        
      </div>
    )
  }
}

export default App;