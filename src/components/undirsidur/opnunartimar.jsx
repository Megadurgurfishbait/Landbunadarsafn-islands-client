import React from 'react';
import '../../style/myStyles/_default.scss';
import  Icons from "../../img/sprites.svg";
import Portal from '../Portal';

const Opnunartimi = () =>
  <div className="default">
      
      <Portal>
                  <div className="post--component__title">
                        <h1>
                              Opnunartími
                        </h1>
                  </div>
      </Portal>
    <div className="default--paragraph">
            <div className="default--paragraph--block">
                  <svg>
                        <use xlinkHref={`${Icons}#icon-clock`}></use>
                  </svg>
                  <span>Í vetur var safnið opið fimmtudaga, föstudaga og laugardaga á sama tíma og Ullarselið, sem er í anddyri safnsins. Landbúnaðarsafn Íslands er opið reglulega mánuðina júní, júlí og ágúst, daglega kl. 11-17. Á öðrum tímum er safnið opið eftir þörfum.</span>
            </div>
            <div className="default--paragraph--block">
                  <svg>
                        <use xlinkHref={`${Icons}#icon-phone`}></use>
                  </svg>
                  <span>
                        Vinsamlegast hafið samband í síma 844 7740; einnig má hafa samband við skiptiborð Landbúnaðarháskólans, í síma 433 5000. Hópum er veitt leiðsögn um safnið, sé þess óskað. 
                  </span>
            </div>
            <div className="default--paragraph--block">
                  <svg>
                        <use xlinkHref={`${Icons}#icon-credit-card`}></use>
                  </svg>
                  <span>
                        Almennur aðgangseyrir að safninu er: 1.400 kr. fyrir fullorðna (og í hópum sem sérstök leiðsögn er veitt); 1100 kr. fyrir öryrkja og eldri borgara ókeypis er fyrir 14 ára og yngri í fylgd fullorðinna.
                  </span>
            </div>
            <div className="default--paragraph--block">
                  <svg>
                        <use xlinkHref={`${Icons}#icon-info`}></use>
                  </svg>
                  <span>
                  Einnig er boðið upp á stutta kynningu á Hvanneyrarstað og starfinu þar m.a. með heimsókn í Hvanneyrarkirkju, eina fallegustu kirkju landsins og örstuttri gönguferð um Gamla skólastaðinn (þegar veður leyfir). Æskilegt er að panta slíka kynningu með fyrirvara (s. 844 77 40). Minnt er á Skemmuna kaffihús í næsta nágrenni safnsins, sem er opið daglega í sumar frá kl. 13.30.
                  </span>
            </div>
      </div>
  </div>


export default Opnunartimi;
