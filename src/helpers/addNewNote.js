import { addDoc, collection, getDoc} from "firebase/firestore"
import { db } from "../firebase/firebase-config"

export const addNewNote = async( uid, newNote ) =>{
    const collectionRef = collection( db, `${uid}/journal/notes` )
    const docRef = await addDoc( collectionRef, newNote )
    const id = docRef.id
    const data = await getDoc(docRef)
    const res = data.data()
    return {
        id,
        ...res
    }
}