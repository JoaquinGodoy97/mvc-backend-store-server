import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'dotenv/config'

const firebaseConfig = {
apiKey: process.env.DB_APIKEY,
authDomain: process.env.DB_AUTHDOMAIN,
projectId: process.env.DB_PROJECT_ID,
storageBucket: process.env.DB_STORAGE_BUCKET,
messagingSenderId: process.env.DB_MESSAGINGSENDERID,
appId: process.env.DB_APPID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;