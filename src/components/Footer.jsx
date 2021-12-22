import React, { Component , useState ,useRef,useEffect } from "react";
import image from "../assets/loqow.png";
import "./Footer.scss";
import $ from 'jquery';
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import { connect } from "react-redux";
const Footer = ({deletecard}) => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  
  const handleChange = (e) => {
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
            <p className="tel-tel">Tel: +994 12 430 49 93</p>
            <p className="line-more">Mail: info@hacklab.az</p>
            <p className="line-less">
              Ünvan: Bakı şəhəri, Atatürk pr. 30A<br/>Bakı, Azərbaycan
            </p>
            <span className="right">2021. Bütün hüquqlar qorunur.</span>
          </div>
          <div className="child-two">
            <p className="facebook">
             <Link to="/"><a>Ana səhifə</a></Link>
            </p>
            <p className="linkedin">
              <Link to="/faq"><a>FAQ</a></Link>
            </p>
            <p className="facebook">
               <Link to="/cemiyyet"><a>Cəmiyyət</a></Link>
            </p>
            <p className="instagram">
               <Link to="/fond"><a>Fond</a></Link>
            </p>
            <p className="linkedin">
               <Link to="/meeting"><a>Tədbirlər</a></Link>
            </p>
            <p className="linkedin">
               <Link to="/blog"><a>Bloq</a></Link>
            </p>
          </div>
          <div className="child-three">
            <div className="two-two">
              <a target="_blank" href="https://www.facebook.com/hacklabaz" className="home-hov">Facebook</a>
              <a href="#up" className="up">
                Yuxarı qayıt
              </a>
            </div>
            <p>
              <a target="_blank" href="https://www.instagram.com/hacklabaz/" className="faq-hover">Instagram</a>
            </p>
            <p>
              <a target="_blank" href="https://www.linkedin.com/company/hacklabaz" className="faq-hover">Linkedin</a>
            </p>
            <div className="search-icon">
              <input type="text" onChange={handleChange}  id="search_text" placeholder="Axtar" autocomplete="off" />
              <div class="fa-search1"  onClick={handleClick}>
                <img src="https://i.ibb.co/Yjc7Q3K/Whats-App-Image-2021-10-29-at-14-25-33-removebg-preview.png" />
              </div>
            </div>
            <div className="end">site by: ZOOM Agency</div>
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
