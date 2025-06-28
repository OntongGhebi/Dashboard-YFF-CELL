const sidebarReducer = (state, action) => {
    if(action.type === "TOGGLE_SIDEBAR"){
        return {
            ...state, sidebarOpen: !state.sidebarOpen
        }
    }

    throw new Error(`No Matching "${action.type}" action type`);
    
}

export default sidebarReducer;