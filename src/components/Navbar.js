import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images2/donatelogo.png'
import './navbar.css';

function Navbar() {
     const [click,setClick]= useState(false);
    


     const handleClick = () => setClick(!click);
     const closeMobileMenu =()=> setClick(false);

    

    return (
        
          <nav className  ="navbar">
              <div className="navbar-container">

                  {/*navbar logo */}
               
               <Link to ="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img src={logo} alt=''  width='15%' height='10%'/>GIFT A SMILE
               </Link>
               <div>
               <Link to ="/" className="navbar-logo-2" >
                   #BlackLivesMatter 
               </Link>
               </div>


               {/* three lines on navbar */}
               <div className='menu-icon' onClick={handleClick}> 
                   <i className={click ? 'fas-fa-align-justify': 'fas fa-bars'}/>
               </div>
               <ul className={click ? 'nav-menu active':'nav-menu'}>
                   <li className='nav-item'>
                       <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                           Home
                       </Link>
                   </li>
                   
                       <li className='nav-item'>
                       <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                           Contact
                       </Link>
                       </li>
                       <li className='nav-item'>
                       <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                           About
                       </Link>
                       </li>
                       
                       
                       <li className='nav-item' >
                       <Link to="/checkout" className='nav-links' onClick={closeMobileMenu}>
                           Donate
                       </Link>
                       </li>
                
                   
                   
               </ul>
               
              </div>
              </nav> 
        
    );
}


export default Navbar;
