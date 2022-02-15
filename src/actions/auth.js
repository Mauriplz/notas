import { types } from "../types/types";
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { auth, googleProvider } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";
import { cleanNotesLogout } from "./notes";

export const startLoginEmailPassword = ( email, pass ) =>{

    return async (dispatch) =>{
        dispatch(startLoading())
        try{
            const {user} = await signInWithEmailAndPassword( auth, email, pass )
            const {uid, displayName} = user
            dispatch( login( uid, displayName ) )
        }catch(e){
            console.log(e);
        }
        dispatch(finishLoading())
    }

}

export const startLoginGoogleProvider = () =>{

    return async (dispatch) =>{
        dispatch(startLoading())
        try{

            const {user} = await signInWithPopup( auth, googleProvider )
            const {uid, displayName} = user
            dispatch( login( uid, displayName ) )

        } catch(e){
            console.log(e);
        }
        dispatch(finishLoading())
    }

}

export const startRegister = ( name, email, pass ) =>{
    
    return async (dispatch) =>{
        dispatch(startLoading())
        try{

            const {user} = await createUserWithEmailAndPassword( auth, email, pass )
            await updateProfile( user, {displayName: name} )
            const { uid, displayName } = user
            dispatch( login(uid, displayName) )

        }catch(e){
            console.log(e);
        }
        dispatch(finishLoading())
    }

}

export const startLogout = () =>{
    return async (dispatch) =>{
        dispatch(startLoading())
        await signOut(auth)
        dispatch( logout() )
        dispatch(finishLoading())
        dispatch( cleanNotesLogout() )
    }
}

export const login = ( uid, displayName ) => ({
    type : types.authLogin,
    payload : {
        uid,
        displayName
    }
})

export const logout = () => ({
    type : types.authLogout
})