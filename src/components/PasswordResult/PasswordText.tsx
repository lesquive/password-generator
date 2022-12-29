import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface Props {
  text: string;
}

export default function PasswordText({ text }: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid className="Item" item>
      <Typography variant={matches ? "h5" : "subtitle1"} gutterBottom>
        {text}
      </Typography>
    </Grid>
  );
}
