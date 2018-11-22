import React from 'react';
import '../../style/myStyles/_SideDrawer.scss';

import {Link} from 'react-router';


const SideDrawer = props => {

      let drawerClasses = 'side-drawer';
      if(props.show){
            drawerClasses = 'side-drawer open';
      }


return (
      <nav className={drawerClasses}>
      <button onClick={props.drawerClickHandler} className="side-drawer__button">
            <span>&times;</span>
      </button>
            <ul>
                  <li className="side-drawer--li" key={1}>
                          <Link onClick={props.drawerClickHandler} className="side-drawer--li__a color-white " to="/" > Forsíða </Link>
                        </li>
                        <li className="side-drawer--li" key={2}>
                          <Link onClick={props.drawerClickHandler} className="side-drawer--li__a color-white" to="/frodleikur" > Fróðleikur </Link>
                        </li>
                        <li className="side-drawer--li" key={4}>
                          <Link onClick={props.drawerClickHandler} className="side-drawer--li__a color-white" to="/opnunartimar" > Opnunartími </Link>
                        </li>
                        <li className="side-drawer--li" key={5}>
                          <Link onClick={props.drawerClickHandler} className="side-drawer--li__a color-white" to="/english" > English </Link>
                  </li>
            </ul>
      </nav>
)};

export default SideDrawer;