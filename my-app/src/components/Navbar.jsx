import React from 'react';
import css from '/home/janewmwaura/ecommerce/mygocerystore/my-app/src/components/Navbar.module.css';
import logo from '/home/janewmwaura/ecommerce/mygocerystore/my-app/src/assets/logo.png'
import { GoGrabber } from 'react-icons/go';
import {CgShoppingBag} from 'react-icons/cg';
const navbar = () => { 
  return (
    <div className={css.container}>
      <div className={css.logo}>
       <img src={logo} alt="" />
       <span>Mygrocery</span>
      </div>
      <div className={css.right}>
        <div className={css.bars} >
        <GoGrabber/>
        </div>
        <ul className={css.menu}
                   
                   >
                       <li>Home</li>
                       <li>Products</li>
                       <li>Reviews</li>
                       <li>Contacts</li>
                       

                   </ul>
                   <input type="text" className={css.search} placeholder='Search' />
                   <CgShoppingBag className={css.cart}/>       
        
      </div>
    </div>
  );
};

export default navbar;