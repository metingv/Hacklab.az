import "./Navbar.scss";
import loqo from "../assets/loqob.png";
import times from "../assets/cancel.png";
import { NavLink, withRouter } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Wallet } from "./SolanaConnect";
import {  useTranslation,Trans,Translation } from "react-i18next";
import i18n from '../i18n';

function Navbar({ displaymode }) {
 

  useEffect(() => {
    $(function () {
      $(".fa-bars").click(function () {
        $(".navmenu").css({ visibility: "visible", right: "0%" });
      });
    });
    $(".fa-times").click(function () {
      $(".navmenu").css({ visibility: "hidden", right: "-60%" });
    });
     $(".tuc").on("mouseenter", function (e) {
      $("li a.active").css("border-bottom", "0px");
    }); 
       $(".tuc").on("mouseleave", function (e) {
      $("li a.active").css("border-bottom", "3px solid black");
    }); 
        $(".tuc").on("touchmove", function (e) {
      $("li a.active").css("border-bottom", "0px");
    }); 
       $(".tuc").on("touchstart", function (e) {
      $("li a.active").css("border-bottom", "0px");
    }); 
     

  });
 
  window.addEventListener('load', () => {
   //changeLanguage("aze")
});

   useEffect(() => {
   
   if (i18n.resolvedLanguage == "aze") {
    $(".dropdown-item1").css("display", "none");
   } 
   else if (i18n.resolvedLanguage == "en") {
   $(".dropdown-item2").css("display", "none");
  } 
   else if (i18n.resolvedLanguage == "rus") {
    $(".dropdown-item3").css("display", "none");  
  } 
    //$(".dropdown-item1").css("display", "none");
   
  
  }, []);


 useEffect(() => {

  
    $(".dropdown-item1").click(() => {
      $(".dropdown-item1").css("display", "none");
      $(".dropdown-item2").css("display", "block");
      $(".dropdown-item3").css("display", "block");

        changeLanguage("aze")
    });
    $(".dropdown-item2").click(() => {
      $(".dropdown-item2").css("display", "none");
      $(".dropdown-item1").css("display", "block");
      $(".dropdown-item3").css("display", "block");
   
       changeLanguage("en")
    });
    $(".dropdown-item3").click(() => {
      $(".dropdown-item3").css("display", "none");
      $(".dropdown-item1").css("display", "block");
      $(".dropdown-item2").css("display", "block");
  
       changeLanguage("rus")
    });
  });

  const { t, i18n } = useTranslation();

   const changeLanguage = (lng) => {
   console.log("cari dil  " + i18n.resolvedLanguage)
   console.log(i18n.resolvedLanguage == "aze")

    i18n.changeLanguage(lng);
  };
  return (
    <div id="up" className="navbar" style={{ position: displaymode }}>
      <NavLink to="/">
        <img src={loqo} alt="" />
      </NavLink>
      <ul className="navmenu">
        <li>
          <img src={times} className="fa-times" alt="" />
        </li>
         <li>
          <NavLink to="/fond">
            <div className="tuc" >Fond</div>
            <div className="tuc-hov"></div>
          </NavLink>
        </li>
         <li>
          <NavLink to="/cemiyyet">
            <div className="tuc">Cəmiyyət</div>
            <div className="tuc-hov"></div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/meeting">
            <div className="tuc">Tədbirlər</div>
            <div className="tuc-hov"></div>
          </NavLink>
        </li>
         <li>
          <NavLink to="/faq">
            <div className="tuc">FAQ</div>
            <div className="tuc-hov"></div>
          </NavLink>
        </li>
         <li>
          <NavLink to="/blog">
            <div className="tuc">Bloq</div>
            <div className="tuc-hov"></div>
          </NavLink>
        </li>        
        {/*<li className="last-li-one">
          <Wallet />
        </li>*/}
          <li>
            <div class="dropdown">
        <button
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        <Translation i18n={i18n} >
      {
        (t, {i18n}) => <span>{t('navbardrop')}</span>
      }
        </Translation>   
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item dropdown-item1" href="#">
            az
          </a>
          <a class="dropdown-item dropdown-item2" href="#">
            en
          </a>
          <a class="dropdown-item dropdown-item3" href="#">
            ru
          </a>
        </div>
      </div>
        </li>
  

      </ul>
     
      <div class="burger">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    displaymode: state.displaymode
  };
};

export default connect(mapStateToProps)(Navbar);