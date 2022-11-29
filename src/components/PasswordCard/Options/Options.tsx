import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Unstable_Grid2";

export default function Options() {
  const [alignment, setAlignment] = useState("both");
  const [numbers, setNumbers] = useState(true);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid xs={12}>
        <Typography variant="subtitle1" className="PrimaryTxt">
          Letters:
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="lowercase">lowercase</ToggleButton>
          <ToggleButton value="uppercase">uppercase</ToggleButton>
          <ToggleButton value="both">both</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid>
        <Typography variant="subtitle1" className="PrimaryTxt">
          Numbers:
        </Typography>
        <Switch
          checked={numbers}
          onChange={() => setNumbers(!numbers)}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Grid>
      <Grid>
        <Typography variant="subtitle1" className="PrimaryTxt">
          Special Characters !@#$%^&*():
        </Typography>
        <Switch
          checked={numbers}
          onChange={() => setNumbers(!numbers)}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Grid>
    </Grid>
  );
}
