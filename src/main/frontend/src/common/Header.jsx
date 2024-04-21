import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Header = () => {
    const [hello, setHello] = useState('');

        useEffect(() => {
            axios.get('http://localhost:8080/api/v1')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
        }, []);

    return (
          <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* Navbar Brand*/}
            <a className="navbar-brand ps-3" href="dbconn_list">Analyze Query</a>
            {/* Sidebar Toggle*/}
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars" /></button>
            {/* Navbar Search*/}
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search" /></button>
                </div>
            </form>
            {/* Navbar*/}
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#!">Settings</a></li>
                    <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#!">Logout</a></li>
                </ul>
                </li>
            </ul>
                백엔드에서 가져온 데이터입니다 : {hello}
            </nav>
          </>
      );
};

export default Header