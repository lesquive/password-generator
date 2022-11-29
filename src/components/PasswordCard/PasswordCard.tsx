import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./PasswordCard.css";
import Options from "./Options/Options";

export default function PasswordCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" className="PrimaryTxt" gutterBottom>
          Password Generator
        </Typography>
        <Options />
      </CardContent>
      <CardActions className="CardActions">
        <Button size="small">Generate</Button>
      </CardActions>
    </Card>
  );
}
