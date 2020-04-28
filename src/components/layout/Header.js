import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {
    const {branding} = props;
    return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="container">
               <a href="/" className="navbar-brand">
                   {branding}
               </a>
               <div>
                   <ul className="navbar-nav mr-auto">
                       <li className="nav-item">
                           <a href="/" className="nav-link">
                               Home
                           </a>
                       </li>
                   </ul>
               </div>
           </div>
       </nav>
    )
}

Header.defaulProps = {
    branding: "Contact Manager"
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

export default Header;