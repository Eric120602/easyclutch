import {Box, Typography,useTheme} from '@mui/material';
import {Menu,MenuItem,Sidebar,useProSidebar} from "react-pro-sidebar";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import { Link, useNavigate } from "react-router-dom";
function SideNav() {
    const {collapsed} = useProSidebar();
    const theme=useTheme();
    return <Sidebar
    style={{ height: "100%", top: 'auto' }}
    breakPoint="md"
    backgroundColor={theme.palette.neutral.medium}
    >
        
        <Menu>
            <MenuItem active component={<Link to="/Home"/>}icon={<HomeIcon/>}>
                <Typography variant="body 2">Home</Typography>
            </MenuItem>
            <MenuItem active component={<Link to="/Vehiclemngmnt"/>} icon={<DirectionsCarIcon/>}>
                <Typography variant="body 2">Vehicle Management</Typography>
            </MenuItem>
            <MenuItem active component={<Link to="/Timeschedule"/>} icon={<AccessTimeFilledIcon/>}>
                <Typography variant="body 2">Time Schedule</Typography>
            </MenuItem>
            <MenuItem active component={<Link to="/Feemngmnt"/>} icon={<PaidIcon/>}>
                <Typography variant="body 2">Fee Management</Typography>
            </MenuItem>
        
        </Menu>
    </Sidebar>

}

export default SideNav;

/** @type {import("@mui/material").SxProps}*/
const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 9
    },
    yourChannel: {
        mt: 9
        
    }

}