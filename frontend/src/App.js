
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MedicinePage } from './pages/medicinePages/medicinePage';
import { MedicineDetailsPage } from './pages/medicinePages/medicineDetailsPage';
import AddDog from './pages/dogsPages/addDog';
import AddHealthDetails from './pages/dogsPages/addHealthDetails'
import ViewAll from './pages/dogsPages/viewDogs'
import Addappointment from "./screen/Addappointment";
import AddUser from "./screen/AddUser";
import Login from "./screen/Login";
import Viewappointment from "./screen/Viewappointment";
import ViewRescuedDogs from "./components/ViewRescuedDogs";
import Adoption from "./components/Adoption";
import {DogsList} from "./pages/dogsPages/dogsList";
import RescuedDogRegistration from "./components/RescuedDogRegistration";
import MultiStepForm from "./components/RegisterRescuedDogs/MultiStepForm";

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
        <Route path="/dogsList" element={<DogsList />} />

        <Route exact path="/addappointment" element={<Addappointment />} />
        <Route exact path="/adduser" element={<AddUser/>} />
        <Route exact path="/viewappointment" element={<Viewappointment/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/viewstrayPuppies" element={<ViewRescuedDogs/>} />
        <Route exact path="/adoption" element={<Adoption/>} />
        <Route exact path="/rescuedDogRegistration" element ={<RescuedDogRegistration/>}/>
        <Route exact path ="/registerResDog" element={<MultiStepForm/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
