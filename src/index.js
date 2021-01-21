import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyDxUyuoEGZb3HaWcd-naMKARRz7-MOdX8o",
  authDomain: "netflix-onja-daniel.firebaseapp.com",
  projectId: "netflix-onja-daniel",
  storageBucket: "netflix-onja-daniel.appspot.com",
  messagingSenderId: "457412370353",
  appId: "1:457412370353:web:8b3be230e1300535056790",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
