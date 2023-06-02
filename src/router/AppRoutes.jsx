import { createBrowserRouter, Route, Routes } from 'react-router-dom';

import Timeschedule from '../containers/Timeschedule';
import Trainerdetails from '../containers/Trainerdetails';
import Vehiclemngmnt from '../containers/Vehiclemngmnt';

const AppRoutes = () => {
    return <Routes>
      
        <Route path='/Timeschedule' element={<Timeschedule />} />
        <Route path='/Trainerdetails' element={<Trainerdetails />} />
        <Route path='/Vehiclemngmnt' element={<Vehiclemngmnt />} />
    </Routes>
};

export default AppRoutes;
