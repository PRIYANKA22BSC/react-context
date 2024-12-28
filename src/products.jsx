import './App.css'
function Products(props) {
    return (
      <>
       <div id="products-container">
       {props.items.map((item,index) =>
       <div className="product"  key={index}>
        <img src={item.img} className="product-img"/>
        <h3>{item.name}</h3>
        <p>Price $<b>{item.price}</b></p>
        <button className="add-btn"  onClick={() => props.addToCart(item)}>Add to Cart</button>
       </div>
    )} 
       </div>
      </>
    )
  }
  export default Products