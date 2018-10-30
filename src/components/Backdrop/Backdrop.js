import React from 'react';
import '../../style/myStyles/_Backdrop.scss';
const backdrop = props => (
      <div className="backdrop" onClick={props.click}/>
);


export default backdrop;