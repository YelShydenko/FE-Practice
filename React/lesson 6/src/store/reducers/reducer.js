let initState = {
    id: "1",
    username: "John",
    balance: 100,
}


const reducer = (state = initState, action) => {
    // if (action.type === "DEPOSIT") {
    //     return { ...state, balance: state.balance + action.payload }
    // }else if(action.type === "WITHDRAW"){
    //     return { ...state, balance:  action.payload < state.balance ? state.balance - action.payload :  state.balance}
    // }else if(action.type === "GET_ALL"){
    //     return { ...state, balance: 0 }
    // } else {
    //     return state;
    // }

    switch(action.type){
        case "DEPOSIT":
            return { ...state, balance: state.balance + action.payload }
        case "WITHDRAW":
            return { ...state, balance:  action.payload <= state.balance ? state.balance - action.payload :  state.balance}
        case "GET_ALL":
            return { ...state, balance: 0 }
        default:
            return state
    }
}

export default reducer;