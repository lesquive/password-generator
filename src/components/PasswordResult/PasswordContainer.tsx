import { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import "./PasswordResult.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ClearIcon from "@mui/icons-material/Clear";
import { PasswordContextType, IPassword } from "./../../types/types";
import { PasswordContext } from "./../../contexts/passwordContext";
import PasswordText from "./PasswordText";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  index: number;
  password: IPassword;
  updateList: () => void;
}

export default function PasswordContainer({
  password,
  index,
  updateList,
}: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  var { removePassword } = useContext(PasswordContext) as PasswordContextType;
  const [hide, setHide] = useState<boolean>(true);

  function deletePassword(index: number) {
    removePassword(index);
    updateList();
  }

  function hidePassword() {
    setHide(!hide);
  }

  function hidePasswordsChars(text: string) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      result += "*";
    }
    return result;
  }

  return (
    <Box className="Box" key={index}>
      <Grid
        container
        spacing={matches ? "5" : "0"}
        justifyContent="space-around"
      >
        <PasswordText
          text={
            hide ? hidePasswordsChars(password.password) : password.password
          }
        />
        <Grid item>
          <Grid container spacing={0}>
            <Grid item>
              <Tooltip title="Copy">
                <IconButton
                  color="primary"
                  aria-label="Hide Password"
                  component="label"
                  onClick={() => {
                    navigator.clipboard.writeText(password.password);
                  }}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Hide">
                <IconButton
                  color="primary"
                  aria-label="Hide Password"
                  component="label"
                  onClick={hidePassword}
                >
                  {hide ? (
                    <VisibilityOffIcon fontSize="small" />
                  ) : (
                    <VisibilityIcon fontSize="small" />
                  )}
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Delete">
                <IconButton
                  color="primary"
                  aria-label="Delete Password"
                  component="label"
                  onClick={() => deletePassword(index)}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
