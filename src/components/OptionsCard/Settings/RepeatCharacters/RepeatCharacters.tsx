import Switch from "@mui/material/Switch";
import { useContext } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./RepeatCharacters.css";
import { PasswordContext } from "./../../../../contexts/passwordContext";
import { PasswordContextType } from "./../../../../types/types";

export default function RepeatCharacters() {
  const { confTmpRepeatChars, tmpRepeatChars } = useContext(
    PasswordContext
  ) as PasswordContextType;

  return (
    <FormGroup className="RepeatChars">
      <FormControlLabel
        control={
          <Switch
            checked={tmpRepeatChars}
            onChange={() => confTmpRepeatChars(!tmpRepeatChars)}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Repeat Characters"
      />
    </FormGroup>
  );
}
