import "./Cemiyyet.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import { NavLink, withRouter ,useLocation} from "react-router-dom";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Trans,Translation } from "react-i18next";
import i18n from '../i18n';
import $ from "jquery";

function Cemiyyet({ text5 = [], displaymode1 }) {

const { pathname } = useLocation();
  
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
      <div id="up" className="Cemiyyet">
        <div className="gif">
          <img
            className="img1"
            src="https://i.ibb.co/tPBnk9P/qafqaz.gif"
            alt=""
          />
        </div>
           <h1 id="Cemiyyet" >Cəmiyyət</h1>
        <div className="sectionone">
          <div className="text">
            <div>

             <Translation i18n={i18n} >
            {
              (t, {i18n}) => <span>{t('Cemiyyettext')}</span>
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
    displaymode1: state.RootReducer2.displaymode1
  };
};

export default connect(mapStateToProps)(Cemiyyet);
