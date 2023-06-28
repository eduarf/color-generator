import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "./context";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
    <ToastContainer
      theme="dark"
      autoClose={1500}
      style={{ fontSize: "16px" }}
      position="top-center"
    />
  </AppProvider>
);
