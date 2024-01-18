// storeReducer(initialState, action)
export default function storeReducer(state = [], action) {
    console.log(action)
    switch (action.type) {
        case "ADD_FAVOURITE":
            // {type: "ADD_FAVOURITE", payload: {}}
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case "REMOVE_FAVOURITE":
            return {
                ...state,
                favourites: state.favourites.filter(f => f.company_name !== action.payload.company_name)
            }
    
        default:
            break;
    }
  
    

    return state;
}