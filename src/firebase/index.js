import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { LocalStorage } from "quasar";

const firebaseConfig = {
  apiKey: "AIzaSyATig1K5vE8vkcOYFJwm7xbI6AlRyltl2M",
  authDomain: "wolfiexfm.firebaseapp.com",
  projectId: "wolfiexfm",
  storageBucket: "wolfiexfm.appspot.com",
  messagingSenderId: "770227124125",
  appId: "1:770227124125:web:afb7e046cd8ee9c56ba174",
  measurementId: "G-FH5HCY7X5C",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    LocalStorage.set("user", user);
  } else {
    LocalStorage.remove("user");
  }
});