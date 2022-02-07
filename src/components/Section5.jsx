import "./Section5.scss";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import $ from "jquery";
import { useTranslation,Trans,Translation } from "react-i18next"; 
import i18n from '../i18n';

function Section5({ text5 = [] }) {
   const { t, i18n } = useTranslation();
  
  return (
    <div className="Section5" id="Section5">
      <div className="sectiontwo">
        <h1>{t('Blogtitle')}</h1>
        <div className="blogcontent">
          <div className="blogdivs">
            {text5.slice(0,3).map((tex) => {
              return (
                <>
                  <div className="blogdiv">
                    <img src={tex.image} alt="" />
                    <div className="btitle">{tex.title}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text5: state.RootReducer2.text5,
    displaymode1: state.RootReducer2.displaymode1
  };
};
export default connect(mapStateToProps)(Section5);
