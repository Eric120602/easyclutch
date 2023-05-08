import { Typography,Box } from "@mui/material";
import BasicTable from "../component/BasicTable";
function Vehiclemngmnt() {
    return (  
        <Box sx={styles.columnsContainer}>
        <BasicTable />
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