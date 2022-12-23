import * as React from "react";
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

export default function Settings() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
        onClose={handleClose}
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
