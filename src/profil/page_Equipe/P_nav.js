import React, { Component } from 'react';
import hel from './helmi.jpg'
// import {S_menu} from './P_Sidebar'
import { Link } from 'react-router-dom';
// import { activ2 } from './AdmPage/Admin';



// var menu= ;

function P_nav({title,Admin}) {
  // class P_nav extends Component{
   

      // render(){
        // const title = props.title ;
    return (
        <header id="bar2">
        <h2 >
          <label for="nav-togl">
            <span className="las la-bars"  /*onClick={S_menu()}*/></span>
          </label>
        <b id="title">{title}</b>
        </h2>

        {/* <div className="search-wrapper">
          <span className="las la-search"></span>
          <input type="search" placeholder="Search here .." />
        </div> */}
        {/* <div class="collapse navbar-collapse" id="navbarNav"> */}
          {/* <ul class="navbar-nav ml-auto">
            <li class="nav-item"> */}
            {/* </li>
            </ul> */}
        
        <div className="user-wrapper">
        <Link to="/"  className="nav-link" style={{cursor:"pointer"}} onClick={()=>{localStorage.clear(); window.location.reload();}}>Log out</Link>

           <Link to="/admin/profile"><img src={hel} width="50px" height="50px" alt="" /></Link>
          <div>
            <h4>{Admin.username}</h4>
            <small>{Admin.type}</small>
          </div>
        </div>
      </header>
    )
}
  
export default P_nav
