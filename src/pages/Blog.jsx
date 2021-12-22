import "./Blog.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink, withRouter,useLocation } from "react-router-dom";
import Section4 from "../components/Section4"; 
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import $ from "jquery";

function Blog({ text3 = [], displaymode1 }) {
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
      <div id="up" className="Blog">
        <div className="gif">
          <img
            className="img1"
            src="https://i.ibb.co/tPBnk9P/qafqaz.gif"
            alt=""
          />
        </div>
        <div className="blogcontent">
          <div className="blogtitle"> Bloglar </div>
          <div className="blogdivs">
            {text3.map((tex) => {
              return (
                <>
                  <div className="blogdiv">
                    <NavLink to="/blog1">
                      <img src={tex.image} alt="" />
                      <div className="btitle">{tex.title}</div>
                    </NavLink>
                  </div>
                </>
              );
            })}
          </div>
        </div>
          <a
            href="https://f8twv0pnpma.typeform.com/hacklabuzvluk"
            target="_blank"
            type="submit"
            name="subscribe"
            value="Subscribe"
            class="button1"
          >
            Növbəti
          </a>
      </div>






     <Section4 />
      <Footer />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text3: state.RootReducer2.text3,
    displaymode1: state.RootReducer2.displaymode1
  };
};

export default connect(mapStateToProps)(Blog);
