import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'
import * as firebase from 'firebase';

class App extends React.Component{

    constructor(){
      super();
      this.state={
          products:[],
          loading:true
      }
      // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  componentDidMount () {
    firebase
        .firestore()
        .collection('Products')
        .get()  // .get returns a promise, so .then
        .then((snapshot) =>
        {
            console.log(snapshot);

            snapshot.docs.map((doc) =>{
                return console.log(doc.data());
            });
            const products = snapshot.docs.map((doc) =>{
                const data = doc.data();
                data['id'] = doc.id;
                return data;
            });
            this.setState({
              products, 
              // we can write above syntax which is equal to 'products:products'
              loading:false
            })
        }).catch(error => console.log(error))
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

  getCartCount = ()=>
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
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handelDeleteProduct}/>
        {loading && <h1 style={{textAlign:'center'}}>~Loading Products...</h1>}
      <div style={{fontSize:40,padding: 10,textAlign:'center'}}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
