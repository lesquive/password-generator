import Switch from "@mui/material/Switch";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./RepeatCharacters.css";

export default function RepeatCharacters() {
  const [repeat, setRepeat] = useState(true);

  return (
    <FormGroup className="RepeatChars">
      <FormControlLabel
        control={
          <Switch
            checked={repeat}
            onChange={() => setRepeat(!repeat)}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Repeat Characters"
      />
    </FormGroup>
  );
}
