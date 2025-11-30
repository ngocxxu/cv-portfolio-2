import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { initializeApp } from "firebase/app";
import { useRoutes } from "react-router-dom";
import { ContainerPage } from "./page/container";
import { Suspense, lazy } from "react";
import { ErrorTemplate } from "./page/error";
import { Flex, Loader } from "@mantine/core";
import ProjectDetail from "./page/projectDetail";
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

const LayoutLazy = lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(
    () => import("./page/layout")
  );
});

function App() {
  const routes = [
    {
      element: (
        <Suspense
          fallback={
            <Flex
              h="100vh"
              gap="md"
              justify="center"
              align="center"
              direction="row"
              wrap="wrap"
            >
              <Loader size="xl" type="bars" />
            </Flex>
          }
        >
          <LayoutLazy />
        </Suspense>
      ),
      children: [
        { path: "/", element: <ContainerPage /> },
        { path: "/read-detail/:projectId", element: <ProjectDetail /> },
      ],
    },
    { path: "*", element: <ErrorTemplate /> },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
}

export default App;
