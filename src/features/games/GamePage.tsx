import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import GameCard from "../../components/general/GameCard";

const GamePage = () => {
  const { games } = useAppSelector((state) => state.games);
  return (
    <Container>
      <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
        {games &&
          games.map((game) => {
            return (
              <GameCard key={game._id} game={game} />
            );
          })}
      </Grid>
    </Container>
  );
};

export default GamePage;
