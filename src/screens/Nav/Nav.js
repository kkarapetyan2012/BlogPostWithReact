import React from 'react';
import Service from '../../service/service';
import './Nav.css';

const Nav = ({ tab, setNavTab }) => {

    const logout = () => {
        Service.remove('user');
        Service.remove('token');
        setNavTab('Login');
    }

    return (
        <div className="w-100 bgColor-gray navbarHeight mb-3">
            <ul className="d-flex align-items-center myUl-height" style={{listStyle: 'none'}}>
                
                <div className="betta">Betta version</div>
                <div className="d-flex">
                {
                   
                    (tab !== "Home") && 
                    <li className="nav-item" onClick={setNavTab.bind(null, "Home")}>
                        <a className="nav-link" href="#">Home</a> 
                    </li>
                }
                {
                    !Service.get("user") ? 
                    (<li className="nav-item" onClick={setNavTab.bind(null, "Login")}>
                        <a className="nav-link" href="#">Login</a>
                    </li> )
                    // : null
                    : ((tab !== "Workspace") && 
                    <li className="nav-item" onClick={setNavTab.bind(null, "Workspace")}>
                        <a className="nav-link" href="#">Workspace</a> 
                    </li>)
                    
                }
                {
                    tab !== "Registration" && 
                    <li className="nav-item" onClick={setNavTab.bind(null, "Registration")}>
                        <a className="nav-link" href="#">Registration</a>
                    </li>
                }
                {
                    (Service.get("user") && 
                    <li className="nav-item" onClick={logout}>
                        <a className="nav-link" href="#">Logout</a>
                    </li>)
                }

                </div>
                
            </ul>
        </div>
    )
    
}

export default Nav;