import "./Faq.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import { connect } from "react-redux";
import gif1 from "../assets/dalga.gif";
import React, { useState, useEffect } from "react";
import $ from "jquery";

function Faq({ text2 = [],displaymode1 }) {

 useEffect(() => { 
   $(".cursor").css("border", "1px solid black"); 
   },[])
   
  useEffect(() => {
    $(".footer").bind("mouseenter", function (e) {
        $(".cursor").css("border", "1px solid white");
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
 
    $(".footer").bind("mouseleave", function (e) {
        $(".cursor").css("border", "1px solid black");
        });
     
    });
  $(".navbar").css("position", displaymode1);
   window.scrollTo(0, 0);
    for (let i = 1; i <= 13; i++) {
      $(`.t${[i]}`).click(function () {
        // alert(`.span${[i]}`)
        if ($(this).hasClass("activespan")) {
          $(`.t${[i]}`).removeClass("activespan");
          $(`.i${[i]}`).slideUp(500, "linear");
          $(`.span${[i]}`).html("+");
          $(`.l${[i]}`).css("display", "none");
          $(`.t${[i]}`).css("border-bottom", "1px solid black");
          $(`.t13`).css("border-bottom", "1px solid black");
        } else {
          $(".icerik").slideUp(500, "linear");
          $(".faqdivsin ").removeClass("activespan");
          $(".faqdivsin").css("border-bottom", "1px solid black");
          $(`.t${[i]}`).css("border-bottom", "1px solid black");
          $(`.i${[i]}`).slideDown(500, "linear");
          $(`.t${[i]}`).addClass("activespan");
          $(".icerikl").html("+");
          $(`.span${[i]}`).html("-");
          $(`.l${[i]}`).css("display", "block");
        }
      });
    }
  });
  return (
    <>
      <Navbar />
      <div id="up" className="Faq">
        <div class="gif">
          <img
            className="img1"
            src={gif1}
            alt=""
          />
        </div>
        <div class="faqcontent">
          <div className="ta">FAQ</div>
          <div className="faqdivs">
            {text2.map((tex) => {
              return (
                <>
                  <div className={`faqdivsin  ${tex.t} `}>
                    <div className={`title`}> {tex.title} </div>
                    <div className={`icerikl ${tex.s} `}> + </div>
                  </div>
                  <div className={`icerik ${tex.i} `}>
                    {tex.content}
                    <div className={`line ${tex.l} `}></div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Section5  />
      <Section4  />
      <Footer />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text1: state.RootReducer2.text1,
    text2: state.RootReducer2.text2,
    displaymode1: state.RootReducer2.displaymode1
  };
};

export default connect(mapStateToProps)(Faq);
