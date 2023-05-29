const Reducer = (state, action)=>{
    switch(action.type){
        case "LOGIN_START":
            return{
                usuario: null,
                isFetching: true,
                error:false,
            };
            case "LOGIN_EXITOSO":
            return{
                usuario: action.payload,
                isFetching: false,
                error:false,
            };
            case "LOGIN_FALLIDO":
            return{
                usuario: null,
                isFetching: false,
                error:true,
            };
            case "LOGOUT":
            return{
                usuario: null,
                isFetching: false,
                error:false,
            };
            default:
                return state;
    }
};

export default Reducer;