import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase/firebase-config"
import { addNewNote } from "../helpers/addNewNote"
import { fileUpload } from "../helpers/fileUpload"
import { notesLoader } from "../helpers/notesLoader"
import { noteUpadte } from "../helpers/noteUpdate"
import { types } from "../types/types"

export const startAddNewNote = () =>{

    return async(dispatch, getState) =>{
        const {uid} = getState().auth
        
        const newNote = {
            title : '',
            content : '',
            date : new Date().getTime()
        }

        const res = await addNewNote( uid, newNote );

        dispatch( activeNote(res) )
        dispatch(addNewEntry(res))
    }
    
}

export const startLoaderNotes = (uid) =>{
    return async( dispatch )=>{
        const res = await notesLoader(uid)
        dispatch( loadNotes( res ) )
    }
}

export const startUpdateNote = (noteUdate) =>{
    return async(dispatch, getState) =>{
        const {uid} = getState().auth
        await noteUpadte( uid, noteUdate, dispatch )
        
    }
}

export const startUploadImage = (file) =>{

    return async(dispatch, getState) =>{
        const {active:activeNote} = getState().notes
        const fileUrl = await fileUpload( file )
        activeNote.url = fileUrl
        dispatch( startUpdateNote(activeNote) )
    }

}

export const startDeleteNote = (id) =>{
    return async(dispatch, getState)=>{
        const {uid} = getState().auth
        const refDoc = doc(db, `${uid}/journal/notes/${id}`)
        await deleteDoc(refDoc)
        dispatch(deleteNote(id))
    }
}

export const updateNote = (id, note) =>({
    type : types.notesUpdateNote,
    payload: {
        id,
        note : {
            id,
            ...note
        }
    }
})

export const cleanNotesLogout = ()=>({
    type : types.notesCleanImageLogout
})

export const deleteNote = (id) =>({
    type : types.notesDeleteNote,
    payload : id
})

export const activeNote = ( noteActive ) =>({
    type : types.notesActiveNote,
    payload : noteActive
})

export const addNewEntry = ( newNote )=>({
    type : types.notesAddNew,
    payload : newNote
})

export const loadNotes = ( notes ) =>({
    type : types.notesLoad,
    payload : notes
})