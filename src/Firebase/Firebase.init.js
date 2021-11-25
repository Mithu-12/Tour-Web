import { initializeApp } from "firebase/app";
import firebaseConfig from './FIrebase.config';

const firebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default firebaseAuthentication;