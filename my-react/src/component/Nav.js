import React from 'react';
import {Link} from 'react-router-dom';
import Updt from './update';


const Nav=()=>{
    return (
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Home Students </Link></li>
                <li><Link to="/submit">Submit</Link></li>
                <li><Link to="/update">Update</Link></li>
                <li><Link to="/delete">Delete</Link></li>
            
            </ul>
        </div>
    )
}

export default Nav;