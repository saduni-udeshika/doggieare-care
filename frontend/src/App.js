
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MedicinePage } from './pages/medicinePages/medicinePage';
import { MedicineDetailsPage } from './pages/medicinePages/medicineDetailsPage';
import Addappointment from "./screen/Addappointment";
import AddUser from "./screen/AddUser";
import Login from "./screen/Login";
import Viewappointment from "./screen/Viewappointment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/medicine" element={<MedicinePage />} />
        <Route path="/medicines" element={<MedicineDetailsPage />} />
        <Route exact path="/addappointment" element={<Addappointment />} />
        <Route exact path="/adduser" element={<AddUser/>} />
        <Route exact path="/viewappointment" element={<Viewappointment/>} />
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
