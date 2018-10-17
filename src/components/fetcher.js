import React from 'react';
import { Link } from "react-router";
import "../style/myStyles/_fetcher.scss";


const ROOT_URL = "https://fierce-plateau-26257.herokuapp.com/image"

// Type OldNews: Sýnir lista með Dagsetningu, nafn á frétt og takkann "Sjá eldri fréttir"
// Type Null: Sýnir fréttir á forsíðu með dagsetningu, mynd, lesa meira hover og nafn á frétt.
const Fetcher = (props) => 
      <div className={props.className}>
      {props.array ? (props.array.map(value => {
            return (
                  <li className={props.className + "--card"} key={value._id}>
                        <Link tabIndex="1" className={props.className + "--card" + "__link"}to={`/${props.path}/${value._id}`  }bull={value._id}>
                               {props.type != "oldNews" ? <div className="overlay">
                                                                              <div className="text">Lesa meira</div>
                                                                              </div> 
                                                                              : null }
                              {props.type !="oldNews" ? <img alt="Mynd með frétt" className={props.className + "--card" + "__image"} src={`${ROOT_URL}/${value.headingImg}`} /> 
                                                                              :null}
                              <div className={props.className + "--card" + "__textbox"}>
                                    {props.type === "oldNews" ? <h3 className={props.className + "--card" + "__see"}>Sjá Frétt</h3>
                                                                                      : null}
                                    <h1 className={props.className + "--card" + "__title"}>{value.title}</h1>
                                    {props.type != "oldNews" ? <h4 className={props.className + "--card" + "__textbox__text"}>{value.text}</h4> 
                                                                                    :null }
                                    <h3 className={props.className + "--card" + "__date"}>{value.createdAt}</h3>
                              </div>
                        </Link>
                  </li>

            )})): 
            <div> Loading..</div>}
      </div>


export default Fetcher;