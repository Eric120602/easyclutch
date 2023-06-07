import { Typography, Box } from "@mui/material";
import StdallTable from "../component/StdallTable";
import StdexsTable from "../component/StdexsTable";

function Home() {
    return (

        <Box sx={styles.columnsContainer}>
            {/* <StdallTable/> */}
            <StdexsTable />
        </Box>

    );
}

export default Home;


/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    columnsContainer: {
        display: "flex",
        position: "absolute",
        left: 280,
    }
}