import React, { Component ,useEffect } from "react";
import { useLocation } from "react-router-dom";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Footer from "./Footer";



const Home = () => {
const { pathname } = useLocation();
 useEffect(() => {
    window.scrollTo(0, 0);
     $(".cursor").css("border", "1px solid black"); 
  }, [pathname]);
  useEffect(() => {
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
        <Section1 />
        <Section2 />
        <Section6 />
        <Section5 />
        <Section4 />
        <Footer />
       </>
    );
  
}










export default Home
