import { doc, updateDoc } from "firebase/firestore"
import { updateNote } from "../actions/notes";
import { db } from "../firebase/firebase-config"

export const noteUpadte = async( uid, noteUpdate, dispatch ) =>{
    
    if(!noteUpdate.url){
        delete noteUpdate.url
    }
    const noteUpdated = {...noteUpdate}
    delete noteUpdated.id
    const docRef = doc(db, `${uid}/journal/notes/${noteUpdate.id}`)
    await updateDoc(docRef, noteUpdated)
    dispatch( updateNote( noteUpdate.id, noteUpdated ) )
}