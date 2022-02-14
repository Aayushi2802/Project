import React from 'react';
import ReactDOM from 'react-dom';

function Header(){
    return(
        <div>
            <h4 className='loginlink'> Login | Register</h4>
            <button className='cartbutton btn btn-warning'>🛒 cart</button>

        <div className='searchbar'>
            <form>
            <input type="text"name="search" className='bar' autoComplete='off'></input> 
            <button className='btn btn-success searchbutton'>Search</button>
            <button className='btn btn-danger cancelbutton'>cancel</button>
            </form>  
        </div>
        </div>
    )
}
export default Header;