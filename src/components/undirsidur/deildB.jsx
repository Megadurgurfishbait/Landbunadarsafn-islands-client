import React, { Component } from 'react';
import  Icons from "../../img/sprites.svg";
import './deildir.scss';

export default class deildA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfs: [
            {nr: "1", title: "Torfi Bjarnason og Ólafsdalsskólinn", author: "Eyjólfur Ingvi Bjarnason", date:"Maí 2008", link: "becbf85b50a8e245ace6e0acf1a9da1f.pdf" },
            {nr: "2",title: "Þúfnabaninn", author: "Bjarni Guðmundsson", date:"Desember 2009", link: "ee2d72c70df3530f5d66b839d1f46e08.pdf" },
            {nr: "3",title: "Jarðnafar, arfgengi, fertala og svarðhlið", author: "Bjarni Guðmundsson", date:"Nóvember 2011", link: "ca4c6d63e2ff062b2809665d5a0f6505.pdf" },
            {nr: "3",title: "Varahlutir í Ferguson", author: "Þór Jakobsson", date:"Maí 2012", link: "d9d0a4876688dc4ab6fde9eeee6376f3.pdf" },
            {nr: "3",title: "Gömlu staðarhúsin á Hvanneyri", author: "Bjarni Guðmundsson", date:"2008", link: "c6a2b66fc002b76136960b08b59226c0.pdf" },
            {nr: "3",title: "Sögukaflar um svansa og kanónur", author: "Bjarni Guðmundsson", date:"Nóvember 2013", link: "5d627699bcf293e8a988faa710e13f98.pdf" },
            {nr: "3",title: "Heyturn á hverfanda hveli", author: "Bjarni Guðmundsson", date:"Janúar 2016", link: "1b1fa0e710e496ad52942a7ea35e4b98.pdf" },
      ]
    }
  }
  
  render() {
      const link = "https://fierce-plateau-26257.herokuapp.com/file/";
    return (

      <div className="deildir">

            <h1>Vefrit B-Deild</h1>
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