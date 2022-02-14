import React from 'react';
import Header from './Header';

function Login(){
    return(
        <div>
            <Header/>;
            <h3 className='heading'>Login or Create account </h3>
            <div className='newCustomer'>
               <h4><center>New Customer</center></h4>
               <h5>Registration is free and easy</h5>
               <ul>
                   <li>Faster Checkout</li>
                   <li>Save multiple Shopping Addresses</li>
                   <li>View and track orders and more</li>
                   <br></br>
                   <br></br>
                <button className='btn btn-primary'>Create Account</button>
               </ul>
            </div>
            <div className='registeredCustomer'>
               <h4><center>Registered Customers</center></h4>
               <p>Email Address</p>
               <input name="email" type='text' autoComplete='off' size='60'></input><br></br>
               <p>Password</p>
               <input type='password' autoComplete='off' size='60'></input><br></br><br></br>
               <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    );
}

export default Login;