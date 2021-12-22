import "./Section1.scss";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { connect } from "react-redux"; 
import gif1 from "../assets/dalga.gif";
import { Trans,Translation } from "react-i18next";
import i18n from '../i18n';

function Section1({  section1text }) {
 useEffect(() => {
      console.log("search ")
    
    })
  return (
    <div className="Section1" id="Section1">
      <Navbar /> 
      <div className="write">
    <Translation i18n={i18n} >
      {
        (t, {i18n}) => <span>{t('Section1text')}</span>
      }
    </Translation>   
          <a
            href="https://f8twv0pnpma.typeform.com/hacklabuzvluk"
            target="_blank"
            type="submit"
            name="subscribe"
            value="Subscribe"
            class="button1"
          >
            ÜZV OLMAQ
          </a>
        <div className="alttext">Hacklab cəmiyyət və fond olaraq iki yerə ayrılır. </div>
      </div>
      <div class="gif">
        <img src={gif1} alt="" />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    section1text: state.section1text
  };
};

export default connect(mapStateToProps)(Section1);

