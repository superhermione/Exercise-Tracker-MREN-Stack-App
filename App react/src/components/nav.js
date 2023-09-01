import React from 'react';
import {Link} from 'react-router-dom';
//import {TiFolderAdd, TiHome} from "react-icons/ti";
import {GiRunningNinja} from "react-icons/gi";
import {TiHome} from "react-icons/ti";

function Navigation(){
    return(
        <div className='main-header'>
            <nav className = "App-nav">
                <ul className="nav-list">
                    <li classname="nav-item">
                        <Link to="/" className="link nav-link" style={{ fontSize: '24px' }}><TiHome />Home Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="../add-exercise" className="link nav-link" style={{ fontSize: '24px' }}><GiRunningNinja />Create Exercise </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;

