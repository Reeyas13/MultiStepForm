let initialState = 0;
const pageHandler = (state = "/", action) => {
  switch (action.type) {
    case "pagePlus": {
        initialState = initialState + 1;
      switch (initialState) {
        case 0:
          return "/";
        case 1:
          return "/second";
        case 2:
          return "/third";
        case 3:
          return "/forth";
        default:
          return "/fourth";
      }
    
    }
    case "pageMinus": {
        initialState--;
      switch (initialState) {
        case 0:
          return "/";
        case 1:
          return "/second";
        case 2:
          return "/third";
        case 3:
          return "/forth";
        default:
          return "/";
      }
    }
    
    default:
      return state;
  }
};
export default pageHandler;
