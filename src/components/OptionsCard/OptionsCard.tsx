import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./OptionsCard.css";
import Options from "./Options/Options";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

export default function OptionsCard() {
  return (
    <Card className="Card">
      <CardContent>
        <Typography variant="h4" className="PrimaryTxt" gutterBottom>
          Password Generator
        </Typography>
        <Options />
      </CardContent>
      <CardActions className="CardActions">
        <Button size="small" variant="outlined" endIcon={<VpnKeyIcon />}>
          Generate
        </Button>
      </CardActions>
    </Card>
  );
}
