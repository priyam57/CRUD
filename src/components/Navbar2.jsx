import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar2(props){

    function handleLogOut(){
        props.logout(false)
    }
    return(
        <div className='nav'>
            <h1 className='h1'>Ecommerce</h1>
            <ul>
            <li><Link to='/create'><button className='clx'>Create product</button></Link></li>
            <br/>
           <li><Link to='/list'><button className='clx'>Product List</button></Link></li>
           <br/>
           <li><Link to='/search'><button className='clx'>Product Search</button></Link></li>
           <br/>
           <li><button className='clx' onClick={handleLogOut}>Logout</button></li>

            </ul>
        </div>
    )
}