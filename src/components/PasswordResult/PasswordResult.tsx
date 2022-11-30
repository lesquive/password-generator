import Box from "@mui/material/Box";
import "./PasswordResult.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ClearIcon from "@mui/icons-material/Clear";

export default function PasswordResult() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box className="Box">
      <Grid
        container
        spacing={matches ? "5" : "0"}
        justifyContent="space-around"
      >
        <Grid className="Item" item>
          <Typography variant={matches ? "h5" : "subtitle1"} gutterBottom>
            dfgdfg3DFSDdsw44#@!
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={0}>
            <Grid item>
              <IconButton
                color="primary"
                aria-label="Hide Password"
                component="label"
              >
                <ContentCopyIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                color="primary"
                aria-label="Hide Password"
                component="label"
              >
                <VisibilityOffIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                color="primary"
                aria-label="Hide Password"
                component="label"
              >
                <ClearIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
