import { Typography,Box } from "@mui/material";

//import MaterialTable from "@mui/material/Table";

function Trainerdetails() {
    return (
      <Box sx={styles.details}>
        <Typography>Name: Eric Paul <br/>Licence no:985987</Typography>
        </Box>
      );
}

export default Trainerdetails;
/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
  details: {
     
      display:"flex",
      position:"absolute",
      left:280,
      
      
      
      

  }}