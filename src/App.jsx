import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
//import Main from "./components/Main";
import Footer from "./components/Footer";
import GoToTopButton from "./components/mainComponents/GoToTopButton";

const Main = lazy(() => import("./components/Main"));
function App() {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>

      <GoToTopButton />
      <Footer></Footer>
    </>
  );
}

export default App;
