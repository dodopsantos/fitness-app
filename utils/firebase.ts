import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
// auth.languageCode = 'it';
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

//  auth;

//IOS -> 57917853621-4139t0t58n54kv83ebio90pl2k76fp85.apps.googleusercontent.com
//IOS -> 821068759991-cbi75k8aet6rlupdtaraooihj5atcs21.apps.googleusercontent.com

//Android -> 57917853621-36bftnis8ej6bpop8uu5bgcp5vft1jej.apps.googleusercontent.com
//Android -> 821068759991-d559fgvh8omreu2ae7pjeol8bf0iretv.apps.googleusercontent.com
