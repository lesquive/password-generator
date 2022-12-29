import { useEffect, useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import OptionsCard from "./components/OptionsCard/OptionsCard";
import PasswordResult from "./components/PasswordResult/PasswordResult";
import PasswordProvider from "./contexts/passwordContext";
import "./App.css";

function App() {
  return (
    <PasswordProvider>
      <div className="App">
        <Container maxWidth="lg">
          <Grid
            className="Grid"
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid xs={8}>
              <OptionsCard />
            </Grid>
            <Grid xs={8}>
              <PasswordResult />
            </Grid>
          </Grid>
        </Container>
      </div>
    </PasswordProvider>
  );
}

export default App;
