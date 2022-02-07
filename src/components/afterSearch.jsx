import "./afterSearch.scss";
import React, { useState, useEffect } from "react";
import loqo from "../assets/loqob.png";
import times from "../assets/cancel.png";
import { Link, withRouter,useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import $ from "jquery";
import { connect } from "react-redux";
import {  useTranslation,Trans,Translation } from "react-i18next";
import i18n from '../i18n';


function afterSearch ({ s = [] }) {
  
const { pathname } = useLocation();
const { t, i18n } = useTranslation();
  
   useEffect(() => {
    window.scrollTo(0, 0);
     $(".cursor").css("border", "1px solid black"); 
  }, [pathname]);


 useEffect(() => {
    //$(".navbar").css("position", displaymode1);
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
    console.log(s.title)
  
  });
  return (
    
    <div id="up" className="afterSearch">
    <div className="title">{t('afterSearchtitle')}</div>
    {
     s.map((search1) => {
      return(
      <>
      <HashLink to={search1.link} className="item" >  {search1.title} </HashLink>

      </>

      )
     })
    }
    
    </div>
  );
  
}
const mapStateToProps = (state, ownProps) => {
console.log("afters" + state.search)
if (i18n.resolvedLanguage == "aze") {
    return {
       s: state.RootReducer1.s
    }
  } 
 else if (i18n.resolvedLanguage == "en") {
    return {
       s: state.RootReducer3.s   
    }
  } 
else if (i18n.resolvedLanguage == "rus") {
    return {
      s: state.RootReducer4.s  
    }
  } 
};

export default connect(mapStateToProps)(afterSearch);