import { Typography, Container, TextField, Grid, Button } from "@mui/material";
import { useState } from "react";
// import { Game } from "../../interfaces/Games";

const CreateGamePage = () => {
  // const [game, setGame] = useState<Game>({ // TO DO: ADD TYPE GAME TO USESTATE
  const [game, setGame] = useState({
    name: "",
    address: "",
    numberOfPeople: 0,
    date: "",
    time: "",
    fieldNumber: 0,
  });

  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid sx={{ width: "50%", margin: "0 auto", textAlign: "center" }}>
        <Typography
          sx={{ marginBottom: 5, textAlign: "left" }}
          fontWeight={600}
          variant="h4"
        >
          Create game
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setGame({ ...game, name: e.target.value })}
              value={game.name}
              fullWidth
              label="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setGame({ ...game, address: e.target.value })}
              value={game.address}
              fullWidth
              label="address"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              onChange={(e) =>
                setGame({ ...game, numberOfPeople: +e.target.value })
              }
              value={game.numberOfPeople}
              fullWidth
              label="numberOfPeople"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="datetime"
              onChange={(e) => setGame({ ...game, date: e.target.value })}
              value={game.date}
              fullWidth
              label="date"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setGame({ ...game, time: e.target.value })}
              value={game.time}
              fullWidth
              label="time"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              onChange={(e) =>
                setGame({ ...game, fieldNumber: +e.target.value })
              }
              value={game.fieldNumber}
              fullWidth
              label="fieldNumber"
            />
          </Grid>
          <Grid sx={{ margin: "2rem auto" }}>
            <Button variant="contained" disableElevation>
              Create
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateGamePage;
