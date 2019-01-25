import React from 'react';
import { Link } from "react-router";
import "../style/myStyles/_fetcher.scss";
import config from '../config';


const ROOT_URL = `${config.images}`;
// Stöðluð mynd ef að það fylgir ekki mynd með frétt
// Type OldNews: Sýnir lista með Dagsetningu, nafn á frétt og takkann "Sjá eldri fréttir"
// Type Null: Sýnir fréttir á forsíðu með dagsetningu, mynd, lesa meira hover og nafn á frétt.
const Fetcher = (props) => (
      <div className={props.className}>
      {props.array ? (props.array.map(value => {

            return (
                  <div className={props.className + "--card"} key={value._id}>
                        <Link className={props.className + "--card__link"} to={`/${props.path}/${value._id}`  } bull={value._id}>
                               {props.type !== "oldNews" ? <div className="overlay">
                                                                              <div className="text">Lesa meira</div>
                                                                              </div> 
                                                                              : null }

                              {props.type !== "oldNews"  ?  <img alt="Mynd með frétt" className={props.className + "--card__image"} src={`${ROOT_URL}/${value.headingImg}`} />
                                                                              :  null}
                              <div className={props.className + "--card__textbox"}>
                                    {props.type === "oldNews" ? <h3 className={props.className + "--card__see"}>Sjá Frétt</h3>
                                                                                      : null}
                                    <h1 className={props.className + "--card__title"}>{value.title}</h1>
                                    {props.type !== "oldNews" ? <h4 className={props.className + "--card__textbox__text"} dangerouslySetInnerHTML={{
                                          __html: value.text
                                    }}></h4> 
                                                                                    :null }
                                    <h3 className={props.className + "--card__date"}>{value.createdAt}</h3>
                              </div>
                        </Link>
                  </div>

            )})): 
            <div> Loading..</div>}
      </div>
);

export default Fetcher;