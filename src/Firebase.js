import firebase from "firebase";
import '@firebase/firestore';
import firebaseConfig from "./firebaseConfig.js";

const firebaseConfigs = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId,
};

// Initialize Firebase
export const Firebase = firebase.initializeApp(firebaseConfigs);

export const getCurrentUser = () => Firebase.auth().currentUser;

export function getServerTimestamp() {
  return firebase.database.ServerValue.TIMESTAMP;
}
