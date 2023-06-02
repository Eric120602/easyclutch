import { createBrowserRouter, Route, Routes } from 'react-router-dom';

import Timeschedule from '../containers/Timeschedule';
import Trainerdetails from '../containers/Trainerdetails';
import Vehiclemngmnt from '../containers/Vehiclemngmnt';
import Feemngmnt from '../containers/Feemngmnt';
const AppRoutes = () => {
    return <Routes>
      
        <Route path='/Timeschedule' element={<Timeschedule />} />
        <Route path='/Trainerdetails' element={<Trainerdetails />} />
        <Route path='/Vehiclemngmnt' element={<Vehiclemngmnt />} />
        <Route path='/Feemngmnt' element={<Feemngmnt />} />
    </Routes>
};

export default AppRoutes;
