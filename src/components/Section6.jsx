import "./Section6.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import $ from "jquery";
import { useTranslation,Trans,Translation } from "react-i18next"; 
import i18n from '../i18n';

function Section6({ text4 = [], displaymode1 }) {
  useEffect(() => {
    $(".navbar").css("position", displaymode1);
  });
   const { t, i18n } = useTranslation();
  return ( 
    <>
      <div id="up" className="Section6">
        <div className="meetingcontent">
          <div className="meetingtitle"> {t('Navbarli3')} </div>

          <div className="meetingdivs">
            {text4.slice(0, 3).map((tex) => {
              return (
                <>
                  <div className="meetingdiv">
                    <div className="alt">
                      <div className="time">
                        18/12/21
                        <div className="timetwo">18:00 </div>
                      </div>
                      <p className="rootTitle">{tex.title}</p>
                      <p className="rootTitleMini">Masterclass</p>
                      <div className="time-button">
                        <button
                          type="submit"
                          name="subscribe"
                          value="Subscribe"
                          class="buttonfx curtainup"
                        >
                         BOOK NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text4: state.RootReducer2.text4,
    displaymode1: state.RootReducer2.displaymode1
  };
};

export default connect(mapStateToProps)(Section6);
