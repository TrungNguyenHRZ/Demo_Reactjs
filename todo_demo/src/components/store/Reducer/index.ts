const initialState = {
    button: false,
};

export const buttonClick = (state = initialState, action: any) => {
    switch (action.type) {
        case "EDIT":
            return { ...state, button: true };
        case "DELETE":
            return { ...state, button: true };
        case "DONE":
            return { ...state, button: true };
        default:
            return false;
    }
};