import firebase from 'firebase/app'
import 'fireabse/auth'


const app = firebase.initializeApp({

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_DATABASE_URL,
    storageBucket: process.env.REACT_APP_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_STORAGE_BUCKET,
    appId: process.env.REACT_APP_MESSAGING_SENDER_ID

})


export const auth = app.auth()
export default app