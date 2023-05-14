import Login from "./routes/login";
// eslint-disable-next-line
import styles from "./index.css";
import { Dashboard } from "./routes/dashboard";
import { Toaster } from "react-hot-toast";

function App() {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return (
      <>
        <Toaster />
        <Dashboard />
      </>
    );
  } else {
    return (
      <>
        <Toaster />
        <Login />
      </>
    );
  }
}

export default App;
