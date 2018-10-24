import React, { Component } from 'react';
import  Icons from "../../img/sprites.svg";
import './deildir.scss';
import config from '../../config';
export default class deildA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfs: [
            {nr: "1", title: "Engjar - Saga áveitna og notkun engja", author: "Magnús Óskarsson", date:"Mars 2008", link: "689c8fe8a3d9b75ede3225ee59a734f3.pdf" },
            {nr: "2",title: "Gríður, Jón Dýri og Íhaldsmajorinn", author: "Bjarni Guðmundsson", date:"Mars 2008", link: "2655bfc3a456b62d5090696f0a55ccc5.pdf" },
            {nr: "3",title: "Íslenskir Jarðræktarhættir á 18. og 19. öld", author: "Bjarni Guðmundsson", date:"September 2008", link: "06ef36257b64c5d6b8e90905f597643f.pdf" },
            {nr: "3",title: "Nýting flæðiengja í Borgarfirði", author: "Ragnhildir Helga Jónsdóttir o.fl.", date:"Febrúar 2012", link: "2655bfc3a456b62d5090696f0a55ccc5.pdf" },
            {nr: "3",title: "Ræktunarminjar í Ólafsdal", author: "Ragnhildur Helga Jónsdóttir og Bjarni Guðmundsson", date:"2016", link: "f0f48682462de3d52a44de4f405d8e7a.pdf" }
      ]
    }
  }
  
  render() {
      const ROOT_URL = `${config.slod}/file`;
    return (

      <div className="deildir">

            <h1>Vefrit A-Deild</h1>
            <h5>
            Greinar byggðar á rannsóknum höfunda og mega teljast sjálfstæð viðbót við núverandi þekkingu.
            </h5>
            {
                  this.state.pdfs.map(value => {
                        return (
                              <div className="deildir--article">
                                    <div className="deildir--article__number">Grein {value.nr}</div>
                                    <div className="deildir--article__info">
                                          <span className="deildir--article__info--title">{value.title}</span>
                                          <span className="deildir--article__info--author">{value.author}</span>
                                          <span className="deildir--article__info--date">{value.date}</span>
                                    </div>
                                    <a className="deildir--article__icons" href={`${ROOT_URL}`+ `${value.link}`}>
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
  }
}
