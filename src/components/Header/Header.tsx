import Grid from "@mui/material/Unstable_Grid2";
import Settings from "./Settings/Settings";

export default function Header() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
      >
        <Grid>
          <Settings />
        </Grid>
      </Grid>
    </>
  );
}
