import "./Fond.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import { NavLink, withRouter,useLocation } from "react-router-dom";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react"; 
import { useTranslation,Trans,Translation } from "react-i18next";
import i18n from '../i18n';
import $ from "jquery";

function Fond({ text5 = [], displaymode1}) {
const { pathname } = useLocation();
 const { t, i18n } = useTranslation();
  
   useEffect(() => {
    window.scrollTo(0, 0);
     $(".cursor").css("border", "1px solid black"); 
  }, [pathname]);
  useEffect(() => {
    $(".navbar").css("position", displaymode1);
      $(".Section4 .div1").bind("mouseleave", function (e) {
        $(".cursor").css("border", "1px solid black"); 
    });
    $(".Section4 .div1").bind("mouseenter", function (e) { 
        $(".cursor").css("border", "1px solid white");
    });
    
     $(".footer").bind("mouseenter", function (e) {
        $(".cursor").css("border", "1px solid white");
    });
 
    $(".footer").bind("mouseleave", function (e) {
        $(".cursor").css("border", "1px solid black");  
        });
  });
  return (
    <>
      <Navbar />
      <div id="up" className="Fond" >
        <div className="gif">
          <img
            className="img1"
            src="https://i.ibb.co/tPBnk9P/qafqaz.gif"
            alt=""
          /> 
        </div>
          <h1 id = "Fond">{t('Navbarli1')}</h1>
        <div className="sectionone">
          <div className="text">
            <div className="first-div">
        <Translation i18n={i18n} >
      {
        (t, {i18n}) => <span>{t('Fondtext')}</span>
      }
           </Translation>          
            </div>
            <div className="second-div">
               <Translation i18n={i18n} >
      {
        (t, {i18n}) => <span>{t('Fondtext1')}</span>
      }
           </Translation>     
            </div>
          </div>
          <img src="https://cdn.wallpapersafari.com/95/60/iQbLIK.jpg" />
        </div>
     
      

       
      </div>
      <Section5 />
      <Section4 />
      <Footer />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text5: state.RootReducer2.text5,
    displaymode1: state.RootReducer2.displaymode1,
    text01: state.RootReducer2.text01
  };
};

export default connect(mapStateToProps)(Fond);
