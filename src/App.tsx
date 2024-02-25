import { Chip } from "@mantine/core";
import "@mantine/core/styles.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbtV9MyYpQRi425QMAhTy8vviUZUwC5dY",
  authDomain: "ngocquach-portfolio.firebaseapp.com",
  projectId: "ngocquach-portfolio",
  storageBucket: "ngocquach-portfolio.appspot.com",
  messagingSenderId: "304486505637",
  appId: "1:304486505637:web:73b27701092d93fdbdc14c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  return <Chip defaultChecked>Awesome chip</Chip>;
}

export default App;
