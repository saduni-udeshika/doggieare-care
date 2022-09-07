
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MedicinePage } from './pages/medicinePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/medicine" element={<MedicinePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
