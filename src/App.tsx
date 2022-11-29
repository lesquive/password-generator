import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import PasswordCard from "./components/PasswordCard/PasswordCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Grid
          className="Grid"
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs={8}>
            <PasswordCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
