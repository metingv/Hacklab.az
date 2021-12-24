import "./Meeting.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import { NavLink, withRouter,useLocation } from "react-router-dom";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react"; 
import $ from "jquery";
 
function Meeting({ text4 = [], displaymode1 }) {
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
      <div id="up" className="Meeting">
        <div className="gif">
          <img
            className="img1"
            src="https://i.ibb.co/tPBnk9P/qafqaz.gif"
            alt=""
          />
        </div>
        <div className="meetingcontent">
          <div className="meetingtitle"> Tədbirlər </div>
          <p className="meeting-text">
            Cəmiyyətimiz Sənaye 4.0 sahəsini prioritet götürərək müxtəlif
            növ Mühazirələr, Kurslar, Araşdırmalar, “Workshop”lar, Əyləncəli və
            sosial tədbirlər təşkil edəcəkdir və onlar cəmiyyət tərəfindən idarə
            olunacaqdır. Bizim seminarlar və tədbirlərdə spikerlər öz işlərinin
            peşəkarı olan ekspertlərdir və həmçinin, seminar iştirakçıları da bu
            sahəyə marağı olan və kifayət qədər biliyə malik insanlardan
            seçiləcəkdir.
          </p>
          <div className="meetingdivs">
            {text4.map((tex) => {
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
          <Section5 />
      <Section4 />
      <Footer />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text4: state.RootReducer2.text4,
    displaymode1: state.RootReducer2.displaymode1
  };
};

export default connect(mapStateToProps)(Meeting);
