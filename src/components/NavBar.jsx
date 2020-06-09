import React from 'react';
const NavBar = (props) => {
  return ( 

    <nav className="navbar navbar-light bg-light">
    <a className="navbar-item" href="hello">Navbar</a>

    <span className="badge badge-pill badge-danger">
    { props.countersLength }
      
    </span>
    
    
    
    
  

    
    
    


  </nav>




   )
}
 
export default NavBar;
