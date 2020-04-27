import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {
    const {branding} = props;
    return (
       <nav className="nav navbar navbar-expand-sm navbar-dark bg-dander mb-3 py-0">
           <div className="container">
               <a href="/" className="navbar-brand">
                   {branding}
               </a>
               <div>
                   <ul className="navbar-nav mr-auto">
                       <li className="nav-item">
                           <a href="/" clasName="nav-link">
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