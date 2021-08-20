import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBmyBZh3OaVU_9qrq5sZKJiag9Wz8oY0GA",
    authDomain: "snapchat-clone-7ef8d.firebaseapp.com",
    projectId: "snapchat-clone-7ef8d",
    storageBucket: "snapchat-clone-7ef8d.appspot.com",
    messagingSenderId: "62432008506",
    appId: "1:62432008506:web:289ff0f2b46156ff9b1803"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };