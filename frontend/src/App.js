
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MedicinePage } from './pages/medicinePages/medicinePage';
import { MedicineDetailsPage } from './pages/medicinePages/medicineDetailsPage';
import AddDog from './pages/dogsPages/addDog';
import AddHealthDetails from './pages/dogsPages/addHealthDetails'
import ViewAll from './pages/dogsPages/viewDogs'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/medicine" element={<MedicinePage />} />
        <Route path="/medicines" element={<MedicineDetailsPage />} />
        <Route path="/addDog" element={<AddDog />} />
        <Route path="/addHealthDetails/:id" element={<AddHealthDetails />} />
        <Route path="/viewDogs" element={<ViewAll />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
