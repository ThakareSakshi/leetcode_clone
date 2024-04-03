import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";


import HomePage from "./Pages/homePage";
import Editorpage from "./Pages/editorpage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CompilerContext from "./Context/CompilerContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/compiler/:problemID",
      element: <Editorpage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
  ]);

  return (
    <div className="App bg-[#1A1A1A]">
      <CompilerContext>
        <RouterProvider router={router}>

        </RouterProvider>
        <ToastContainer />
      </CompilerContext>
    </div>
  );
}

export default App;
