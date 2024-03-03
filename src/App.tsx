import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import { initializeApp } from "firebase/app";
import { useRoutes } from "react-router-dom";
import { ContainerPage } from "./page/container";
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
  const routes = [{ path: "/", element: <ContainerPage /> }];

  const element = useRoutes(routes);

  return <>{element}</>;
}

export default App;
