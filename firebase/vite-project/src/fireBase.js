import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDq-v43fh7p--TJ0M9D40ympjsiZvw12e8",
  authDomain: "react-app-d83a1.firebaseapp.com",
  projectId: "react-app-d83a1",
  storageBucket: "react-app-d83a1.appspot.com",
  messagingSenderId: "836370574991",
  appId: "1:836370574991:web:ca37ec080e41f439518afa",
  databaseURL:"https://react-app-d83a1-default-rtdb.firebaseio.com" ,

};
const app = initializeApp(firebaseConfig);
export default app