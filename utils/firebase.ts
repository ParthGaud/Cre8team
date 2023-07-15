import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSEMDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENTID,
};

console.log([
  process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  process.env.FIREBASE_PROJECTID,
  process.env.FIREBASE_STORAGEBUCKET,
  process.env.FIREBASE_MESSAGINGSEMDERID,
  process.env.FIREBASE_APPID,
  process.env.FIREBASE_MEASURMENTID,
]);

// const firebaseConfig = {
//   apiKey: "AIzaSyD2zK2xnZ06meKzyrahrJlH8pzZpsw5URg",
//   authDomain: "colabhub-d9c1c.firebaseapp.com",
//   projectId: "colabhub-d9c1c",
//   storageBucket: "colabhub-d9c1c.appspot.com",
//   messagingSenderId: "903983337049",
//   appId: "1:903983337049:web:94fe04b8ac584a9bd5eb48",
//   measurementId: "G-29F47W3HCX"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
