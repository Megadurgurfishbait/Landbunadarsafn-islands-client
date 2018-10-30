import React from 'react';
import '../../style/myStyles/_DrawerToggleButton.scss';

// Onclick frá ToggleButton -> header -> app.js via props.
const drawerToggleButton = props => (
      <button className="toggle-button"  onClick={props.click}>
                  <div className="toggle-button__line" />
                  <div className="toggle-button__line" />
                  <div className="toggle-button__line" />
      </button>
);

export default drawerToggleButton;