import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./PasswordLength.css";
import { PasswordContext } from "./../../../../contexts/passwordContext";
import { PasswordContextType } from "./../../../../types/types";

export default function PasswordLength() {
  const { ConfTmpLength, tmpLength } = useContext(
    PasswordContext
  ) as PasswordContextType;

  const handleChange = (event: SelectChangeEvent) => {
    ConfTmpLength(Number(event.target.value));
  };

  return (
    <Box className="PasswordLengthBox">
      <FormControl fullWidth size="small">
        <InputLabel id="leng-select">Length</InputLabel>
        <Select
          labelId="leng-select"
          id="leng-select"
          value={String(tmpLength)}
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
