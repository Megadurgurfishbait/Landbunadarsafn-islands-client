import React, { Component } from 'react';
import  Icons from "../../img/sprites.svg";
import './deildir.scss';
import config from '../../config';
import pdf from '../../img/Skra_0060036.pdf';

export default class deildA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfs: [
            {nr: "1", title: "Torfi Bjarnason og Ólafsdalsskólinn", author: "Eyjólfur Ingvi Bjarnason", date:"Maí 2008", link: "583dda38b579efc2ab6e2ea6dd3ba434.pdf" },
            {nr: "2",title: "Þúfnabaninn", author: "Bjarni Guðmundsson", date:"Desember 2009", link: "e66897fe3dd100603e99c6b5bac07a06.pdf" },
            {nr: "3",title: "Jarðnafar, arfgengi, fertala og svarðhlið", author: "Bjarni Guðmundsson", date:"Nóvember 2011", link: "7cd13bb5c0cad268e12964ef297b4686.pdf" },
            {nr: "3",title: "Varahlutir í Ferguson", author: "Þór Jakobsson", date:"Maí 2012", link: "0dc36763cc9d6118632ffb24ed4ee8f8.pdf" },
            {nr: "3",title: "Gömlu staðarhúsin á Hvanneyri", author: "Bjarni Guðmundsson", date:"2008", link: "27b5f05023c7e345382ccf4db12c5645.pdf" },
            {nr: "3",title: "Sögukaflar um svansa og kanónur", author: "Bjarni Guðmundsson", date:"Nóvember 2013", link: "c0f45184ed29c69d80636a4ed3ac168a.pdf" },
            {nr: "3",title: "Heyturn á hverfanda hveli", author: "Bjarni Guðmundsson", date:"Janúar 2016", link: "ecdde485443a2e39e9d22792ffbfe4ae.pdf" },
      ]
    }
  }
  
  render() {
        // Tímabundinn, linkurinn verður: http://178.128.162.183:3090/file/
        const ROOT_URL = `${config.slod}/file/`;
    return (

      <div className="deildir">

            <h1>Vefrit B-Deild</h1>
            <h5>
            Greinar byggðar á rannsóknum höfunda og mega teljast sjálfstæð viðbót við núverandi þekkingu.
            </h5>
            {
                  this.state.pdfs.map(value => {
                        return (
                              <div className="deildir--article" key={value.nr}>

                                    <div className="deildir--article__info">
                                          <span className="deildir--article__info--title">{value.title}</span>
                                          <span className="deildir--article__info--author">{value.author}</span>
                                          <span className="deildir--article__info--date">{value.date}</span>
                                    </div>
                                    <a className="deildir--article__icons" href={pdf}>
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