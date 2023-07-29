import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Thread from "./components/thread";
import AppNavbar from "./components/NavBar";

function App() {
  return (
    <div>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Thread />} />
      </Routes>
    </div>
  );
}

export default App;
