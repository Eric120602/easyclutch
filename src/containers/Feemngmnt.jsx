import { Typography,Box } from "@mui/material";
import Feedetails from "../component/FeedetTable";
function Feemngmnt() {
    return (  
        <Box sx={styles.columnsContainer}>
        <Feedetails/>
        </Box>
    );
}

export default Feemngmnt;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    columnsContainer: {
       
        display:"flex",
        position:"absolute",
        left:280,
    }}
