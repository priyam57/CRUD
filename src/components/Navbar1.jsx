import React from 'react';
import {Link} from 'react-router-dom';


export default function Navbar(){
    return(
        <div className='home'>
            <h1 className='h1'>Ecommerce</h1>
       
     
        <nav className='nav'> 
       
        <ul>
           <li><Link to='/create'><button className='clx'>Create product</button></Link></li>
           <li><Link to='/list'><button className='clx'>Product List</button></Link></li>
           <li><Link to='/search'><button className='clx'>Product Search</button></Link></li>  
           <li><Link to='/register'><button className='clx'>Register</button></Link></li>
           <li><Link to='/login'><button className='clx'>Login</button></Link></li>   
       </ul>
     </nav>
        </div>
    )
}