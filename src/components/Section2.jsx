import "./Section2.scss";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import gif2 from "../assets/dalga.gif";
import { Trans,Translation } from "react-i18next";
import i18n from '../i18n';


function Section2({ text1 = [] }) {
 useEffect(() => {
        for (let i = 1; i <= 4; i++) {
          $(`.Section2 .a${[i]}`).mouseenter(function () {
          $(`.Section2 .b${[i]}`).css("opacity", "0" );
          $(`.Section2 .c${[i]}`).css("opacity", "0" );
          $(`.Section2 .d${[i]}`).css("opacity", "1");
          $(`.Section2 .b${[i]}`).css("transition", "all 0.3s ease-in-out");
          $(`.Section2 .c${[i]}`).css("transition", "all 0.3s ease-in-out");
          $(`.Section2 .d${[i]}`).css("transition", "all 0.3s ease-in-out");
         
         });
        }
        

      for (let i = 1; i <= 4; i++) {
        $(`.Section2 .a${[i]}`).mouseleave(function () {
          $(`.Section2 .b${[i]}`).css("opacity", "1" );
          $(`.Section2 .c${[i]}`).css("opacity", "1" );
          $(`.Section2 .d${[i]}`).css("opacity", "0");
          $(`.Section2 .b${[i]}`).css("transition", "all 0.3s ease-in-out");
          $(`.Section2 .c${[i]}`).css("transition", "all 0.3s ease-in-out");
          $(`.Section2 .d${[i]}`).css("transition", "all 0.3s ease-in-out");
         
       });
      }
    
  });
 
  
 

  const [s, setS] = useState();
  return (
    <div className="Section2">
     

        <div className="divs1">
          {text1.map((tex) => {
            return (
              <div className={`div1  ${tex.a} `} >
                <img src={tex.image} className={` sekil ${tex.b} `} alt="" />
                <div className={`title  ${tex.c} `}>
                 <Translation i18n={i18n} >
                 {
                    (t, {i18n}) => <span>{t(tex.title)}</span>
                 }
                 </Translation>
                </div>
                <div className={`content  ${tex.d} `}>
                 <Translation i18n={i18n} >
                 {
                    (t, {i18n}) => <span>{t(tex.content)}</span>
                 }
                 </Translation>
                </div>
              </div>
            );
          })}
        </div>
   
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text1: state.RootReducer2.text1
  };
};

export default connect(mapStateToProps)(Section2);
