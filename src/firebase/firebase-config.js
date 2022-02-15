import {initializeApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_glxCDjeXPm8DF0Kqg0EQbOD70Icd7zw",
    authDomain: "journal-app-fe682.firebaseapp.com",
    projectId: "journal-app-fe682",
    storageBucket: "journal-app-fe682.appspot.com",
    messagingSenderId: "31185906837",
    appId: "1:31185906837:web:c8c99a55f1fa78c20a3f9c"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app)

  const db = getFirestore(app)

  const googleProvider = new GoogleAuthProvider()

  export {
      auth,
      db,
      googleProvider
  }