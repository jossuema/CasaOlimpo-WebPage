// Importa Firebase
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../firebase.config";

// Configuración de Firebas

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore y Storage
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
