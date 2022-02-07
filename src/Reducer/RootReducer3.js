const data = require("../json/filterEN.json");


const RootReducer3 = (state = data, action) => {
  console.log("action.id " +  action.id)
  console.log("state.search " + state.search)
  switch (action.type) {
      case "AFTER_SEARCH":
      let s = state.text0.filter(
        (text0) =>  text0.title.toLowerCase().includes(action.id.toLowerCase())
      );
      let s3t = state.text2.filter(
        (text2) =>  text2.title.toLowerCase().includes(action.id.toLowerCase())
      );
     

      let alls = s.concat(s3t)

      return {
        ...state,
        s: alls


      };
    default:
      return state;
  }
};

export default RootReducer3;