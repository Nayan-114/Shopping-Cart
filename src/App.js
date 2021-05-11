import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'

class App extends React.Component{

    constructor(){
      super();
      this.state={
          products:[
              {
                  price:999,
                  title:'Watch',
                  qty:6,
                  img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
                  id:1
              },
              {
                  price:1599,
                  title:'MobilePhone',
                  qty:4,
                  img:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=916&q=80',
                  id:2
              },
              {
                  price:17999,
                  title:'Laptop',
                  qty:1,
                  img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                  id:3
              },
              {
                  price:500,
                  title:'Football',
                  qty:3,
                  img:'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                  id:4
              },
              {
                  price:2000,
                  title:'TV',
                  qty:2,
                  img:'https://images.unsplash.com/photo-1571415060716-baff5f717c37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80',
                  id:5
              },
              {
                  price:75,
                  title:'Sanitizer',
                  qty:5,
                  img:'https://images.unsplash.com/photo-1583947214858-88bc0067cf7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                  id:6
              },
              {
                  price:299,
                  title:'Perfumes',
                  qty:2,
                  img:'https://images.unsplash.com/photo-1593487568720-92097fb460fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                  id:7
              },
              {
                  price:150,
                  title:'Mask',
                  qty:10,
                  img:'https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80',
                  id:8
              }
          ]
      }
      // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  handleIncreaseQuantity=(product)=>
  {
      console.log('HEy increase',product);
      const {products}= this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;
      this.setState({
          products:products
      })
  }
  handleDecreaseQuantity=(product)=>
  {
      console.log('HEy increase',product);
      const {products}= this.state;
      const index = products.indexOf(product);
      if(products[index].qty === 0)
      {
          return;
      }
      products[index].qty -= 1;
      this.setState({
          products:products
      })
  }
  handelDeleteProduct = (id)=>
  {
      const {products}= this.state;
      const items = products.filter((item)=>item.id !== id);     //[{}]
      this.setState({
          products:items
      })
  }

  getCartCount= ()=>
  {
    const {products} = this.state;
    let count = 0;
    products.forEach((product)=>    //Difference between map and for each
    {
      count+= product.qty;
    })
    return count;
  }

  getCartTotal=()=>{
    const {products} = this.state;

    let cartTotal =0;

    products.map((product)=>{
      return cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handelDeleteProduct}/>
      <div style={{fontSize:40,padding: 10,textAlign:'center'}}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
