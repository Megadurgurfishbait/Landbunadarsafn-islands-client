import React from 'react';
import '../../style/myStyles/_default.scss';
import  Icons from "../../img/sprites.svg";
import Portal from '../Portal';

const English = () =>
  <div className="default">
          <Portal>
                  <div className="post--component__title">
                        <h1>
                              About the museum
                        </h1>
                  </div>
      </Portal>
    <div className="default--paragraph">
            <div className="default--paragraph--block">
                  <svg>
                        <use xlinkHref={`${Icons}#icon-clock`}></use>
                  </svg>
                  <span>
                        This winter the museum was open at the same time as the Ullarsel which
                        is located in the lobby of the museum. The Agricultural Museum of Iceland is open daily from June throughout August from 11:00 - 17:00.
                        From September throughout May: Open by prior arrangement.
                  </span>
            </div>
            <div className="default--paragraph--block">
                  <svg>
                        <use xlinkHref={`${Icons}#icon-phone`}></use>
                  </svg>
                  <span>
                        Please contact us via phone at 00 354 844 7740.
                  </span>
            </div>
            <div className="default--paragraph--block">
                  <svg>
                        <use xlinkHref={`${Icons}#icon-credit-card`}></use>
                  </svg>
                  <span>
                        1200 ISK is the general admisison for adults
                        1000 ISK for disabled people and senior citizens.
                        Admission is free for kids under 15 years old.
                  </span>
            </div>
            <div className="default--paragraph--block">
                  <svg>
                        <use xlinkHref={`${Icons}#icon-info`}></use>
                  </svg>
                  <span>
                        The Agricultural Museum of Iceland presents the agricultural heritage and seeks to explain the history of Icelandic agriculture with emphases on the 19th and the 20th centuries.
                         The museum has an extensive collection of farm artifacts. For example, the first plows and other horse-driven equipment and the first tractors imported to Iceland, as well as the more modern artifacts of current times. The museum has Iceland´s largest collection of farm machinery which goes back to 1880. 
                        You can also see the ancient Icelandic cow (the original Viking cow!) in a modern environment and explore the cultural landscape at one of the first modern farms in Iceland at the Hvanneyri Agricultural School (founded in 1889).
                  </span>
            </div>
      </div>
  </div>


export default English;
