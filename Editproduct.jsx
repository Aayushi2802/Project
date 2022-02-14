import React from 'react';
import Header from './Header';


function Editproduct(){
    return(
        <div>
            <Header/>
            <h2><center>Edit Product</center></h2><br></br><br></br><br></br>
            <center>
            <span><b>First Name</b></span><br></br>
            <input type='text' size='50'></input><br></br>
            <span><b>Last Name</b></span><br></br>
            <input type='text' size='50'></input><br></br>
            <span><b>Email Address</b></span><br></br>
            <input type='text' size='50'></input><br></br>
            <span><b>Shop By Category</b></span><br></br>
            <input type='text' size='50'></input><br></br>
            <span><b>Discription</b></span><br></br>
            <input type='text' size='50'></input><br></br><br></br>
            Choose Your File <br></br><br></br>
            <input type="file" id="myfile" name="myfile"></input>
            <button className='btn btn-success'>Save</button>
            <button className='btn btn-danger'>Cancel</button>

            </center>
        </div>
     

    );
}

export default Editproduct;