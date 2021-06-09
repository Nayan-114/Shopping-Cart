import React from 'react';
import CartItem from './CartItem'

const Cart = (props)=>{
        const {products} = props;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return ( <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                        />)
                })}
                
            </div>
        );
}

export default Cart;

// {
//     price:999,
//     title:'Watch',
//     qty:6,
//     img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
//     id:1
// },
// {
//     price:1599,
//     title:'MobilePhone',
//     qty:4,
//     img:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=916&q=80',
//     id:2
// },
// {
//     price:17999,
//     title:'Laptop',
//     qty:1,
//     img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
//     id:3
// },
// {
//     price:500,
//     title:'Football',
//     qty:3,
//     img:'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
//     id:4
// },
// {
//     price:2000,
//     title:'TV',
//     qty:2,
//     img:'https://images.unsplash.com/photo-1571415060716-baff5f717c37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80',
//     id:5
// },
// {
//     price:75,
//     title:'Sanitizer',
//     qty:5,
//     img:'https://images.unsplash.com/photo-1583947214858-88bc0067cf7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     id:6
// },
// {
//     price:299,
//     title:'Perfumes',
//     qty:2,
//     img:'https://images.unsplash.com/photo-1593487568720-92097fb460fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     id:7
// },
// {
//     price:150,
//     title:'Mask',
//     qty:10,
//     img:'https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80',
//     id:8
// }