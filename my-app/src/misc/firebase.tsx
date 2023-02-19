import firebase from 'firebase/app'



const config={
    apiKey: "AIzaSyAQrk42BQMkx92wt3a3r3aAhJCf1Vifm3k",

    authDomain: "chat-app-7c3ca.firebaseapp.com",
  
    databaseURL: "https://chat-app-7c3ca-default-rtdb.firebaseio.com",
  
    projectId: "chat-app-7c3ca",
  
    storageBucket: "chat-app-7c3ca.appspot.com",
  
    messagingSenderId: "933504033509",
  
    appId: "1:933504033509:web:0745eef64ce6bb5a756a0c",
  
    measurementId: "G-FW0EES3P0C"
  
}

const app=firebase.initializeApp(config);

