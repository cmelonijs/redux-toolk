import { Container, Grid } from "@mui/material";
import { useAppSelector } from "../../store/store";

const GamePage = () => {
  const { games } = useAppSelector((state) => state.games);
  return (
    <Container>
      <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
        {games &&
          games.map((game) => {
            return (
              <Grid
                key={game._id}
                xs={3}
                sx={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "1rem",
                  padding: "1rem",
                  width: "27%",
                }}
              >
                <p>{game.name}</p>
                <p>{game.address}</p>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default GamePage;
