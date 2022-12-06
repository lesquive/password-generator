import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./PasswordLength.css";

export default function PasswordLength() {
  const [length, setlength] = React.useState("8");

  const handleChange = (event: SelectChangeEvent) => {
    setlength(event.target.value as string);
  };

  return (
    <Box className="PasswordLengthBox">
      <FormControl fullWidth size="small">
        <InputLabel id="leng-select">Length</InputLabel>
        <Select
          labelId="leng-select"
          id="leng-select"
          value={length}
          label="Length"
          onChange={handleChange}
        >
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={16}>16</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
