import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import OptionsCard from "./components/OptionsCard/OptionsCard";
import PasswordResult from "./components/PasswordResult/PasswordResult";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
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
            <PasswordResult />
            <PasswordResult />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
