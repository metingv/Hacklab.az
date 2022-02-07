import React, { Component , useState ,useRef,useEffect } from "react";
import image from "../assets/loqow.png";
import "./Footer.scss";
import $ from 'jquery';
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import {  useTranslation , Trans, Translation } from "react-i18next";
import i18n from '../i18n';
import { Markup } from "interweave"

const Footer = ({deletecard}) => {
  const history = useHistory();
  const [search, setSearch] = useState("");
    const { t, i18n } = useTranslation();

  const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
  if(search == "" || search == null || search == undefined ){
   alert("netice tapilmadi")
   console.log("searchfooter " + search)
  }
  else{
     history.push("/aftersearch");
     deletecard(search);
  }
    }
  }


  const handleChange = (e) => {
     e.preventDefault()
    setSearch(e.target.value.trim());
  };

  const handleClick = (e) => {
  if(search == "" || search == null || search == undefined ){
   alert("netice tapilmadi")
   console.log("searchfooter " + search)
  }
  else{
     history.push("/aftersearch");
     deletecard(search);
  }
  };


 

    return (
      <div className="footer">
        <div className="main">
          <div className="child-one">
            <img src={image} />
            <p className="tel-tel">{t('Footertext1')}</p>
            <p className="line-more">{t('Footertext2')}</p>
            <p className="line-less">
              <Markup content={t('Footertext3')} /> 
            </p>
            <span className="right"> {t('Footertext4')}</span>
            
          </div>
          <div className="child-two">
            <p className="facebook">
             <Link to="/"><a>{t('Footerli1')}</a></Link>
            </p>
            <p className="linkedin">
              <Link to="/faq"><a>{t('Navbarli4')}</a></Link>
            </p>
            <p className="facebook">
               <Link to="/cemiyyet"><a>{t('Navbarli2')}</a></Link>
            </p>
            <p className="instagram">
               <Link to="/fond"><a>{t('Navbarli1')}</a></Link>
            </p>
            <p className="linkedin">
               <Link to="/meeting"><a>{t('Navbarli3')}</a></Link>
            </p>
            <p className="linkedin">
               <Link to="/blog"><a>{t('Navbarli5')}</a></Link>
            </p>
          </div>
          <div className="child-three">
            <div className="two-two">
              <a target="_blank" href="https://www.facebook.com/hacklabaz" className="home-hov">Facebook</a>
              <a href="#up" className="up">
                {t('Footertext5')}
              </a>
            </div>
            <p>
              <a target="_blank" href="https://www.instagram.com/hacklabaz/" className="faq-hover">Instagram</a>
            </p>
            <p>
              <a target="_blank" href="https://www.linkedin.com/company/hacklabaz" className="faq-hover">Linkedin</a>
            </p>
            <div className="search-icon">
              <input type="text" onChange={handleChange} onKeyDown={handleKeyDown}  id="search_text" placeholder= {t('footerplaceholder')} autocomplete="off" />
              <div class="fa-search1"  onClick={handleClick}>
                <img src="https://i.ibb.co/Yjc7Q3K/Whats-App-Image-2021-10-29-at-14-25-33-removebg-preview.png" />
              </div>
            </div>
            <div className="end1">site by: ZOOM Agency</div>
            <div className="right1">{t('Footertext4')}</div>
          </div>
        </div>
      </div>
    );
  
}




const mapDispatchToProps = (dispatch) => {
  return {
    deletecard: (search) => {
      dispatch({ type: "AFTER_SEARCH", id: search });
    }
  };
};





export default connect(null, mapDispatchToProps)(Footer)
