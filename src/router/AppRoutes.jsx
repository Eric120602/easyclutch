import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Timeschedule from '../containers/Timeschedule';
import Vehiclemngmnt from '../containers/Vehiclemngmnt';
import Feemngmnt from '../containers/Feemngmnt';
import Home from '../containers/Home';
const AppRoutes = () => {
    return <Routes>
      
        <Route path='/Timeschedule' element={<Timeschedule />} />
        <Route path='/Vehiclemngmnt' element={<Vehiclemngmnt />} />
        <Route path='/Feemngmnt' element={<Feemngmnt />} />
        <Route path='/Home' element={<Home />} />
    </Routes>
};

export default AppRoutes;
