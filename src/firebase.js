import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyAWbCuqnR0FjojUswXk_SYe2RVlGgftea8",
  authDomain: "player-2c98b.firebaseapp.com",
  projectId: "player-2c98b",
  storageBucket: "player-2c98b.appspot.com",
  messagingSenderId: "879811486233",
  appId: "1:879811486233:web:17cfcdea4f03f0f0988088"
};
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  export default fire;