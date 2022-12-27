import { useState, useContext } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { PasswordContext } from "./../../../contexts/passwordContext";
import { PasswordContextType, LetterCase } from "./../../../types/types";

export default function Options() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const { enableNumbers, enableSymbols, setCase, passAtributes } = useContext(
    PasswordContext
  ) as PasswordContextType;

  const [alignment, setAlignment] = useState("both");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: LetterCase
  ) => {
    setAlignment(newAlignment);
    setCase(newAlignment);
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
          orientation={matches ? "horizontal" : "vertical"}
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
          checked={passAtributes.numbers}
          onChange={() => enableNumbers(!passAtributes.numbers)}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Grid>
      <Grid>
        <Typography variant="subtitle1" className="PrimaryTxt">
          Special Characters {matches ? "!@#$%^&*():" : ""}
        </Typography>
        <Switch
          checked={passAtributes.symbols}
          onChange={() => enableSymbols(!passAtributes.symbols)}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Grid>
    </Grid>
  );
}
