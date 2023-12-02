import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBxIDOqsBNF4tXEPyhCs8RM9P-oK55Tw8M",
  authDomain: "automotive-client-am10.firebaseapp.com",
  projectId: "automotive-client-am10",
  storageBucket: "automotive-client-am10.appspot.com",
  messagingSenderId: "183481456582",
  appId: "1:183481456582:web:f5dbcd6b24b67093ec44c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
