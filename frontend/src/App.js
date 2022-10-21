
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MedicinePage } from './pages/medicinePages/medicinePage';
import { MedicineDetailsPage } from './pages/medicinePages/medicineDetailsPage';
import AddDog from './pages/dogsPages/addDog';
import AddHealthDetails from './pages/dogsPages/addHealth'
import ViewAll from './pages/dogsPages/viewDogs'
import Addappointment from "./screen/Addappointment";
import AddUser from "./screen/AddUser";
import Login from "./screen/Login";
import Viewappointment from "./screen/Viewappointment";
import { UpdateMedicinePage } from './pages/medicinePages/updateMedicinePage';
import ViewRescuedDogs from "./components/ViewRescuedDogs";
import Adoption from "./components/Adoption";
import {DogsList} from "./pages/dogsPages/dogsList";
import RescuedDogRegistration from "./components/RescuedDogRegistration";
import MultiStepForm from "./components/RegisterRescuedDogs/MultiStepForm";
import { SalesPage } from './pages/medicinePages/salesPage';
import { SalesReport } from './reports/salesReport';
import SideBar from './screen/SideBar';
import Home from './screen/Home';
import EditAppointment from './screen/EditAppointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/medicine" element={<MedicinePage />} />
        <Route path="/medicines" element={<MedicineDetailsPage />} />
        <Route path="/updatemedicine/:id" element={<UpdateMedicinePage />} />
        <Route path="/addDog" element={<AddDog />} />
        <Route path="/addHealth/:id" element={<AddHealthDetails />} />
        <Route path="/viewDogs" element={<ViewAll />} />
        <Route path="/dogsList" element={<DogsList />} />
        <Route exact path="/addappointment" element={<Addappointment />} />
        <Route exact path="/adduser" element={<AddUser/>} />
        <Route exact path="/viewappointment" element={<Viewappointment/>} />
        <Route exact path="/editappointment/:id" element={<EditAppointment/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path ="/sidebar" element={<SideBar/>} />
        <Route exact path ="/" element={<Home/>} />
        <Route exact path="/viewstrayPuppies" element={<ViewRescuedDogs/>} />
        <Route exact path="/adoption" element={<Adoption/>} />
        <Route exact path="/rescuedDogRegistration" element ={<RescuedDogRegistration/>}/>
        <Route exact path ="/registerResDog" element={<MultiStepForm/>} />
        <Route exact path="/sales" element={<SalesPage />} />
        <Route exact path="/salesreport" element={<SalesReport />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
