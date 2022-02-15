import { types } from "../types/types";

export const setMessage = ( msg ) =>({
    type : types.uiSetMessage,
    payload : msg
})

export const cleanMessage = () =>({
    type : types.uiCleanMessage
})

export const startLoading = () => ({
    type : types.uiStartLoading
})

export const finishLoading= () => ({
    type : types.uiFinishLoading
})