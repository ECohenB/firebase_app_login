// Importa las funciones necesarias desde los SDKs de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAMTMXKcji3O1tMeI9v7sSkqMRrexZdHRM",
  authDomain: "appwebloginfirebase.firebaseapp.com",
  projectId: "appwebloginfirebase",
  storageBucket: "appwebloginfirebase.firebasestorage.app",
  messagingSenderId: "783721790387",
  appId: "1:783721790387:web:d7ef1c496b9471b50d29c6",
  measurementId: "G-H0DYNW6SPB"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de Firebase
export { app };

// Si necesitas Analytics, exporta también
const analytics = getAnalytics(app);
