import './App.css';
import { Route, Routes } from "react-router-dom";
import Thread from './components/thread';

function App() {
  return (

    <Routes>
    <Route path="/" element={<Thread/>} />
    </Routes>
    

  );
}

export default App;
