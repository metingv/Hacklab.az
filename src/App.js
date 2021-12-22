import "./styles.scss";
import { useEffect } from "react";
import { connect } from "react-redux";
import $ from "jquery";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";
import Home from "./components/Home";
import afterSearch from "./components/afterSearch";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import Blog1 from "./pages/Blog1";
import Meeting from "./pages/Meeting";
import Fond from "./pages/Fond";
import Cemiyyet from "./pages/Cemiyyet";

function App({ text1 = [], text2 ,search = []}) {

   useEffect(() => { 
   $(".cursor").css("border", "1px solid black"); 
   },[])


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
   

    $("html").bind("mousemove", function (e) {
      $(".cursor").css({
        left: e.pageX,
        top: e.pageY
      });
      // $(".cursor").css("display", "block");
      $("body").css("overflow-x", "hidden");
    });

    $("html").on("mouseleave", function (e) {
      $(".cursor").css("display", "none");
    });

    $("html").on("mouseenter", function (e) {
      $(".cursor").css("display", "block");
    });

    $("html").on("touchcancel", function (e) {
      $(".cursor").css("display", "none");
    });

    $("html").on("touchmove", function (e) {
      $(".cursor").css("display", "none");
    });

    $("html").on("touchstart", function (e) {
      $(".cursor").css("display", "none");
    });
  });

  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/">
          <Home />     
          </Route>
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/meeting" component={Meeting} />
          <Route exact path="/blog1" component={Blog1} />
          <Route exact path="/fond" component={Fond} />
          <Route exact path="/cemiyyet" component={Cemiyyet} />
          <Route exact path="/aftersearch" component={afterSearch} />
        </Switch>

        <div class="cursor"></div>
        {/* {text1.map((tex) => {
        // return <h2>{tex.text}</h2>;
      })} */}
      </>
    </BrowserRouter>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text1: state.text1,
    text2: state.text2
  };
};

export default connect(mapStateToProps)(App);
