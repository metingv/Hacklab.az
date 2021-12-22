import "./Blog1.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink, withRouter,useLocation } from "react-router-dom";
import { connect } from "react-redux"; 
import React, { useState, useEffect } from "react";
import $ from "jquery";

function Blog1({ text5 = [], displaymode1 }) {
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
      <div id="up" className="Blog1">
        <div className="gif">
          <img
            className="img1"
            src="https://i.ibb.co/tPBnk9P/qafqaz.gif"
            alt=""
          />
        
        </div>
     
        <div className="sectionone">
          <p className="text">
            <img src="https://cdn.wallpapersafari.com/95/60/iQbLIK.jpg" />
            <p className="main-title">
              Amazon Prime Video app introduces a new clip-sharing feature
            </p>
            <p className="ab">Amazon is rolling out a new Prime Video feature that lets users
            share video clips from TV shows and movies on the platform. The
            clips can be shared on social media or via direct message. The
            feature is currently only available on iOS and for users in the U.S.
            For the initial rollout, users can only share clips from a limited
            number of shows, including season one of “The Boys,” “The Wilds,”
            “Invincible” and “Fairfax.” When you’re watching one of these four
            titles, you can click on the new “Share a clip” button to create a
            30-second clip. Once you click the button, the streaming service
            will pause the show to open up a screen where you can clip and edit
            the video. The app will then create a clip of what you just watched,
            allowing you to move the clip forward or backward to exactly where
            you want it. You’ll also be able to preview the clip before sharing
            it with others. When you’re ready to share the clip, you can select
            the “Share” icon and either upload it or share it via Instagram,
            Facebook, Twitter, iMessage, Messenger and WhatsApp.</p>
          </p>
        </div>

        <div className="sectiontwo">
          <h1>Oxşar bloqlar</h1>
          <div className="blogcontent">
            <div className="blogdivs">
              {text5.map((tex) => {
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

export default connect(mapStateToProps)(Blog1);
