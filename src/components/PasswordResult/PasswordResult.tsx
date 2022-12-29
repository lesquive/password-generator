import { useEffect, useState, useContext } from "react";
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
import { PasswordContextType, IPassword } from "./../../types/types";
import { PasswordContext } from "./../../contexts/passwordContext";

export default function PasswordResult() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [list, getList] = useState<boolean>(false);
  var { passwords, removePassword } = useContext(
    PasswordContext
  ) as PasswordContextType;

  function deletePassword(index: number) {
    removePassword(index);
    getList(true);
  }

  useEffect(() => {
    getList(false);
  }, [list]);

  return (
    <>
      {" "}
      {passwords ? (
        passwords?.map((password: IPassword, index: number) => (
          <Box className="Box" key={index}>
            <Grid
              container
              spacing={matches ? "5" : "0"}
              justifyContent="space-around"
            >
              <Grid className="Item" item>
                <Typography variant={matches ? "h5" : "subtitle1"} gutterBottom>
                  {password.password}
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
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="primary"
                      aria-label="Hide Password"
                      component="label"
                    >
                      <VisibilityOffIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="primary"
                      aria-label="Hide Password"
                      component="label"
                      onClick={() => deletePassword(index)}
                    >
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
