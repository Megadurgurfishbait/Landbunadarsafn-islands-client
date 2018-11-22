import React from 'react';
import  Icons from "../../img/sprites.svg";
import './deildir.scss';

import PDFS from '../../img/PDF/Vefrit-B-Deild';

const deildB = () => (
      <div className="deildir">

            <h1>Vefrit B-Deild</h1>
            <h5>
            Greinar byggðar á rannsóknum höfunda og mega teljast sjálfstæð viðbót við núverandi þekkingu.
            </h5>
            {
                  PDFS.map(value => {
                        return (
                              <div className="deildir--article" key={value.nr}>

                                    <div className="deildir--article__info">
                                          <span className="deildir--article__info--title">{value.title}</span>
                                          <span className="deildir--article__info--author">{value.author}</span>
                                          <span className="deildir--article__info--date">{value.date}</span>
                                    </div>
                                    <a className="deildir--article__icons" href={`${value.link}`}>
                                          <svg>
                                                <use xlinkHref={`${Icons}#icon-text-document`}></use>
                                          </svg>
                                    </a>
                              </div>
                        )
                  })
            }
      </div>
)

export default deildB;