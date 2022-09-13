// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZMu2c4DcZTYo_yCCvvf6419-cNvTjIno',
  authDomain: 'textme-e5b12.firebaseapp.com',
  projectId: 'textme-e5b12',
  storageBucket: 'textme-e5b12.appspot.com',
  messagingSenderId: '279582414350',
  appId: '1:279582414350:web:c6c42289bf12c55023ce5f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
