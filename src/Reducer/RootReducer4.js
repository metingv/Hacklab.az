const data = require("../json/filterRU.json");


const RootReducer4 = (state = data, action) => {
  console.log("action.id " +  action.id)
  console.log("state.search " + state.search)
  switch (action.type) {
      case "AFTER_SEARCH":
      let s = state.text0.filter(
        (text0) =>  text0.title.toLowerCase().includes(action.id.toLowerCase())
      );
      // let s3t = state.text2.filter(
      //   (text2) =>  text2.title.toLowerCase().includes(action.id.toLowerCase())
      // );
      // let s3 = state.text2.filter(
      //   (text2) =>  toString(text2.content.Empty).toLowerCase().includes(action.id.toLowerCase())
      // );

      // let alls = s.concat(s3,s3t)

      return {
        ...state,
        s: s


      };
    default:
      return state;
  }
};

export default RootReducer4;