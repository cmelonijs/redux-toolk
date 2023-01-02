import { useState, MouseEvent } from "react";
import { useAppDispatch } from "../../store/store";
import { updateGame } from "./GameSlice";
import { Typography, Container, TextField, Grid, Button } from "@mui/material";

const EditGamePage = () => {
    const dispatch = useAppDispatch()
  // const [game, setGame] = useState<Game>({ // TO DO: ADD TYPE GAME TO USESTATE
  const [game, setGame] = useState({
    name: "",
    address: "",
    numberOfPeople: 0,
    date: "",
    time: "",
    fieldNumber: 0,
  });

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let data = {
      name: game.name,
      address: game.address,
      numberOfPeople: game.numberOfPeople,
      date: game.date,
      time: game.time,
      fieldNumber: game.fieldNumber,
    }
    // dispatch(updateGame(data: any)) 
    setGame({
      name: "",
      address: "",
      numberOfPeople: 0,
      date: "",
      time: "",
      fieldNumber: 0,
    })
  }

  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid sx={{ width: "50%", margin: "0 auto", textAlign: "center" }}>
        <Typography
          sx={{ marginBottom: 5, textAlign: "left" }}
          fontWeight={600}
          variant="h4"
        >
          edit game
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
              type="date"
              onChange={(e) => setGame({ ...game, date: e.target.value })}
              value={game.date}
              fullWidth
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
            <Button onClick={handleSubmit} variant="contained" disableElevation>
              edit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};


export default EditGamePage;