const initialState = {
  user: {}
};


export default function reducer(state=initialState, action)
{
  switch(action.type)
  {
 
    case "INPUTUSERFORM":
	
      return Object.assign({}, state, {
        user: action.payload
      });

    default:
      return state;
  }
}