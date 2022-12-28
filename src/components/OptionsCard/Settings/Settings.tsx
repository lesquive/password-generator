import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SettingsIcon from "@mui/icons-material/Settings";
import PasswordLength from "./PasswordLength/PasswordLength";
import Grid from "@mui/material/Unstable_Grid2";
import RepeatCharacters from "./RepeatCharacters/RepeatCharacters";
import "./Settings.css";
import { PasswordContext } from "./../../../contexts/passwordContext";
import { PasswordContextType } from "./../../../types/types";

export default function Settings() {
  const [open, setOpen] = useState(false);
  const { saveSettings, cancelSettings } = useContext(
    PasswordContext
  ) as PasswordContextType;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    cancelSettings();
    setOpen(false);
  };

  const handleSave = () => {
    saveSettings();
    setOpen(false);
  };

  return (
    <div className="SettingsBttn">
      <Button
        aria-label="Hide Password"
        size="small"
        variant="outlined"
        endIcon={<SettingsIcon fontSize="small" />}
        onClick={handleClickOpen}
      >
        Settings
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Customize Your Password Settings"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Change the length of the password or disable repeat characters
          </DialogContentText>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid>
              <PasswordLength />
            </Grid>
            <Grid>
              <RepeatCharacters />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSave} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
