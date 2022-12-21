import { Container, Grid } from "@mui/material";
import { useAppSelector } from "../../store/store";

const GamePage = () => {
    const {games} = useAppSelector(state => state.games)
    return (
        <Container>
            <Grid>
                {games && games.map((game) => {
                    return (
                        <Grid key={game._id} xs={3} sx={{backgroundImage: 'linear-gradient(90deg, green, blue)'}}>
                            <p>{game.name}</p>
                            <p>{game.address}</p>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default GamePage;