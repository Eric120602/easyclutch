import { Typography, Box } from "@mui/material";
import StdexsTable from "../component/StdexsTable";

function Home() {
    return (

        <Box sx={styles.columnsContainer}>
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