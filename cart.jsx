import React from 'react';
import Header from './Header';

function Cart(){
    return(
        <div>
            <Header/>
            <h1 style={{color:"Brown"}}><center>Your Items</center></h1>
            <div class="card" style={{width: "18rem"}}><br></br>
            <div class="card-body">
               <h5 class="card-title">Book Name</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <button class="btn btn-primary">Remove</button>
            </div>
            </div>
            <center><button className='btn btn-success'>Place Order</button></center>
            
        </div>
    );
}
export default Cart;