import React, { Component } from 'react';
import  Icons from "../../img/sprites.svg";
import './deildir.scss';

export default class deildA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfs: [
            {nr: "1", title: "Engjar - Saga áveitna og notkun engja", author: "Magnús Óskarsson", date:"Mars 2008", link: "3d50ba19ca4d4f1936da9dc89f8073d6.pdf" },
            {nr: "2",title: "Gríður, Jón Dýri og Íhaldsmajorinn", author: "Bjarni Guðmundsson", date:"Mars 2008", link: "a7c6666ea56efd2851812ae3b42a1f34.pdf" },
            {nr: "3",title: "Íslenskir Jarðræktarhættir á 18. og 19. öld", author: "Bjarni Guðmundsson", date:"September 2008", link: "a6c44771a220d2722a0355a19f35d6eb.pdf" },
            {nr: "3",title: "Nýting flæðiengja í Borgarfirði", author: "Ragnhildir Helga Jónsdóttir o.fl.", date:"Febrúar 2012", link: "a6c44771a220d2722a0355a19f35d6eb.pdf" },
            {nr: "3",title: "Ræktunarminjar í Ólafsdal", author: "Ragnhildur Helga Jónsdóttir og Bjarni Guðmundsson", date:"2016", link: "a6c44771a220d2722a0355a19f35d6eb.pdf" }
      ]
    }
  }
  
  render() {
      const link = "https://fierce-plateau-26257.herokuapp.com/file/"
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
                                    <a className="deildir--article__icons" href={`${link}`+ `${value.link}`}>
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
