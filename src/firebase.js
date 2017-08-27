import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDeskczeXH7J2lysRxlar07gfmKC9gHiOY",
  authDomain: "jw4dev-portfolio.firebaseapp.com",
  databaseURL: "https://jw4dev-portfolio.firebaseio.com",
  projectId: "jw4dev-portfolio",
  storageBucket: "jw4dev-portfolio.appspot.com",
  messagingSenderId: "1053356286697"
};
firebase.initializeApp(config);

export default firebase;
