import { initializeApp } from "firebase/app";
import firebaseconfig from './Firebase.config'

const initializeAuthentication = () => {
    initializeApp(firebaseconfig)
}
export default initializeAuthentication;