import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase-config"

export const notesLoader = async( uid ) =>{

    const notes = []
    const docRef = collection(db, `${uid}/journal/notes`)
    const res = await getDocs(docRef)
    res.forEach(d=>{
        notes.push({
            id: d.id,
            ...d.data()
        })
    })
    // console.log(notes);
    return notes
}