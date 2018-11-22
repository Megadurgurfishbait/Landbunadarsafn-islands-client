import React from 'react';
import { Arsskyrslur } from '../../img/PDF/';
import '../../style/myStyles/_arsreikningur.scss';

const Arsreikningur = () => (
  <div>
        <h1> Ársskýrslur fyrri ára</h1>
      {Arsskyrslur.map(values => {
                 return (
                       <div className="Arsreikningur--Card">
                              <a href={`${values.link}`}>{values.title}</a>
                       </div>

                 )
      })}
</div>
);

export default Arsreikningur;
