import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Timeschedule from '../containers/Timeschedule';
import Vehiclemngmnt from '../containers/Vehiclemngmnt';
import Home from '../containers/Home';
import Addvehicle from '../pages/addveh'
import TrainerManagement from '../containers/Trainermngmnt';
import Trainerlogin from '../containers/TrainerLogin';
import { ifLoggedOut } from '../hoc/ifLoggedOut';
import { ifLoggedIn } from '../hoc/ifLoggedIn';
import Register from '../component/Register';

const Trainerloginroute = ifLoggedOut(Trainerlogin)
const Homeroute = ifLoggedIn(Home)
const Timescheduleroute = ifLoggedIn(Timeschedule)
const Vehiclemngmntroute = ifLoggedIn(Vehiclemngmnt)
const Addvehicleroute = ifLoggedIn(Addvehicle)
const TrainerManagementroute = ifLoggedIn(TrainerManagement)
const Registerroute = ifLoggedIn(Register)


const AppRoutes = () => {
    return <Routes>

        <Route path='/login' element={<Trainerloginroute />} />
        <Route path='/Home' element={<Homeroute />} />
        <Route path='/Timeschedule' element={<Timescheduleroute />} />
        <Route path='/Vehiclemngmnt' element={<Vehiclemngmntroute />} />
        <Route path='/Vehiclemngmnt/addveh' element={<Addvehicleroute />} />       
        <Route path='/Trainermngmnt' element={<TrainerManagementroute />} />
        <Route path='/register' element={<Registerroute />} />
    </Routes>
};

export default AppRoutes;
