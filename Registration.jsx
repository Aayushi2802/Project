import React from 'react';
import Header from './Header';


function Registration(){
    return(
        <div>
            <Header/>
            <h2><center>Registration Form</center></h2><br></br><br></br><br></br>
            <h3>Personal Information</h3>
            <hr></hr>
            <center>
            <span><b>First Name</b></span><br></br>
            <input type='text' size='50'></input><br></br>
            <span><b>Last Name</b></span><br></br>
            <input type='text' size='50'></input><br></br>
            <span><b>Email Address</b></span><br></br>
            <input type='text' size='70'></input>
            </center>
            <h3>Login Information</h3><hr></hr>
            <center>
            <span><b>Password</b></span><br></br>
            <input type='text' size='50'></input><br></br>
            <span><b>Confirm Password</b></span><br></br>
            <input type='text' size='50'></input><br></br>
            </center>
        </div>
     

    );
}

export default Registration;