import { Typography,Box} from "@mui/material";
import MyCalendar from "../component/BasicCalendar/Testt";
// import MyCalendar from "../component/BasicCalendar/Test";

function Timeschedule() {
    return ( 
        <Box sx={styles.details}>
        <Typography>
            <MyCalendar/>
        </Typography>
        </Box>
     );
}

export default Timeschedule;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    details: {
        display:"grid",
        position:"absolute",
        left:280,
        height:"95vh",
         width:"70vw",
  
    }}