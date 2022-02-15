import { types } from "../types/types"

export const authReducer = ( state={}, action ) =>{
    switch( action.type ){

        case types.authLogin:
            return {
                uid : action.payload.uid,
                displayName : action.payload.displayName
            }
        
        case types.authLogout:
            return {}

        default:
            return state
    }
}