import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAMTMXKcji3O1tMeI9v7sSkqMRrexZdHRM",
  authDomain: "appwebloginfirebase.firebaseapp.com",
  projectId: "appwebloginfirebase",
  storageBucket: "appwebloginfirebase.firebasestorage.app",
  messagingSenderId: "783721790387",
  appId: "1:783721790387:web:d7ef1c496b9471b50d29c6",
  measurementId: "G-H0DYNW6SPB"
};

const app = initializeApp(firebaseConfig);

export { app };

const analytics = getAnalytics(app);
