import image1 from "../assets/Frame 11.png";
import image2 from "../assets/Frame 12.png";
import image3 from "../assets/Frame 13.png";
import image4 from "../assets/Frame 14.png";
import image4a from "../assets/Frame 14a.png";
import image5 from "../assets/s.jpg";


const initialState = { 
  search: [], 
  search1: [], 
  displaymode: "absolute",
  displaymode1: "initial", 
  text1: [
    {
      image: image1,
      title: "title1",
      content: "content1",
      a:"a1",
      b:"b1",
      c:"c1",
      d:"d1"
     
    },
    {
      image: image2,
      title: "title2",
      content: "content2",
      a:"a2",
      b:"b2",
      c:"c2",
      d:"d2"
    
    },
    {
      image: image3,
      title: "title3",
      content: "content3",
      a:"a3",
      b:"b3",
      c:"c3",
      d:"d3"
    },
    {
      image: image4a,
      title: "title4",
      content: "content4",
      a:"a4",
      b:"b4",
      c:"c4",
      d:"d4"
    }
  ],
  text2: [
    {
      link: "/faq",
      l: "l1",
      t: "t1",
      s: "span1",
      i: "i1",
      title: "faqtitle1",
      content:"faqcontent1", 
    },    
{
      link: "/faq", 
      l: "l2",
      t: "t2",
      s: "span2",
      i: "i2",
      title: "faqtitle2",
      content:"faqcontent2"
    },
 {
      link: "/faq",
      l: "l3",
      t: "t3",
      s: "span3",
      i: "i3",
      title: "faqtitle3",
      content:"faqcontent3"
    },
    {
      link: "/faq",
      l: "l4",
      t: "t4",
      s: "span4",
      i: "i4",
      title: "faqtitle4",
      content: "faqcontent4"
    },
    {
      link: "/faq",
      l: "l5",
      t: "t5",
      s: "span5",
      i: "i5",
      title: "faqtitle5",
      content: "faqcontent5"
    },

    {
      link: "/faq",
      l: "l6",
      t: "t6",
      s: "span6",
      i: "i6",
      title:"faqtitle6",
      content: "faqcontent6"
    },
    {
      link: "/faq",      
      l: "l7",
      t: "t7",
      s: "span7",
      i: "i7",

      title: "faqtitle7",
      content: "faqcontent7"
    },
    {
      link: "/faq",
      l: "l8",
      t: "t8",
      s: "span8",
      i: "i8",
      title: "faqtitle8",
      content: "faqcontent8"
    },
    {
      link: "/faq",
      l: "l9",
      t: "t9",
      s: "span9",
      i: "i9",
      title: "faqtitle9",
      content: "faqcontent9"
    },
    {
      link: "/faq",
      l: "l10",
      t: "t10",
      s: "span10",
      i: "i10",
      title: "faqtitle10",
      content: "faqcontent10"
    },
    {
      link: "/faq",
      l: "l11",
      t: "t11",
      s: "span11",
      i: "i11",
      title: "faqtitle11",
      content: "faqcontent11"
    },
    {
      link: "/faq",
      l: "l12",
      t: "t12",
      s: "span12",
      i: "i12",
      title: "faqtitle12",
      content: "faqcontent12"
    },
    {
      link: "/faq",
      l: "l13",
      t: "t13",
      s: "span13",
      i: "i13",
      title: "faqtitle13",
      content: "faqcontent13",
    }
  ],
   text3: [
    {
      link: "/blog",
      image: image5,
      title: (
       
          "Netlify Prime Video app introduces a new clip-sharing feature 1"
       
      )
    },
    {
      link: "/blog",
      image: image5,
      title: (
        
          "Netlify Prime Video app introduces a new clip-sharing feature 2"
       
      )
    },
    {
      link: "/blog",
      image: image5,
      title: (
        
         "Google Prime Video app introduces a new clip-sharing feature 3"
        
      )
    },
    {
      link: "/blog",
      image: image5,
      title: (
      
          "Yandex Prime Video app introduces a new clip-sharing feature 4"
      
      )
    },
    {
      link: "/blog",
      image: image5,
      title: (
          
          "Netlify Prime Video app introduces a new clip-sharing feature 5"
       
      )
    },
    {
      link: "/blog",
      image: image5,
      title: (
          "Netlify Prime Video app introduces a new clip-sharing feature 6"
      )
    }
  ],
  text4: [
    {
      link: "/meeting",
      title: "NFT Bazarında nələri bilmək lazımdır?"
    },
    {
      link: "/meeting",
      title: "Crypto-Valyuta nədir?"
    },
    {
      link: "/meeting",
      title: "NFT Bazarında nələri bilmək lazımdır?"
    },
    {
      link: "/meeting",
      title: "Crypto-Valyuta nədir?"
    },
    {
      link: "/meeting",
      title: "NFT Bazarında nələri bilmək lazımdır?"
    },
    {
        link: "/meeting",
      title: "Crypto-Valyuta nədir?"
    }
    
  ],
  text5: [
    {
      link:"/",
      hash:"#Section5",
      image: image5,
      title: (
        "Amazon Prime Video app introduces a new clip-sharing feature"
      )
    },
    {
      link:"/",
      hash:"#Section5",
      image: image5,
      title: (
       "Amazon Prime Video app introduces a new clip-sharing feature"
      )
    },
    {
      link:"/",
      hash:"#Section5",
      image: image5,
      title: (
       "Amazon Prime Video app introduces a new clip-sharing feature"
      )
    },
    {
      link:"/",
      hash:"#Section5",
      image: image5,
      title: (
       "Amazon Prime Video app introduces a new clip-sharing feature"
      )
    }
  ]
};

const RootReducer2 = (state = initialState, action) => {
  console.log("action.id " +  action.id)
  console.log("state.search " + state.search)
  switch (action.type) {
    default:
      return state;
  }
};

export default RootReducer2;
