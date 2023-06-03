import { Typography,Box } from "@mui/material";
import VehicleTable from "../component/VehicleTable";
function Vehiclemngmnt() {
    return (  
        <Box sx={styles.columnsContainer}>
        <VehicleTable />
        </Box>
    );
}

export default Vehiclemngmnt;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    columnsContainer: {
       
        display:"flex",
        position:"absolute",
        left:280,
        
        
        

    }}