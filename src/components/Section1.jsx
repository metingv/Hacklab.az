import "./Section1.scss";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { connect } from "react-redux"; 
import gif1 from "../assets/dalga.gif";
import { Trans,Translation } from "react-i18next";
import i18n from '../i18n';
import $ from 'jquery'

function Section1() {
 useEffect(() => {
      console.log("search ")    
    })
  return (
    <div className="Section1" id="Section1">
      <Navbar /> 
      <div className="write">
    <Translation i18n={i18n} >
      {
        (t, {i18n}) =>  <span>{t('Section1text')}</span> 
      }
    </Translation> 
          <a
            href="https://f8twv0pnpma.typeform.com/hacklabuzvluk"
            target="_blank"
            type="submit"
            name="subscribe"
            value="Subscribe"
            class="buttonfx curtainup"
          >
            <Translation i18n={i18n} >
            {
              (t, {i18n}) =>  <>{t('Section1button')}</> 
            }
            </Translation> 
          </a>
      </div>
      <div class="gif">
        <div className="image1" style={{backgroundImage: `url(${gif1})` }}> </div>
      </div>
    </div>
  );
}



export default Section1;

