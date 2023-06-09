import { Game } from "../../interfaces/Games";
import "./GameCard.css";

interface GameCardProps {
    game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
    return (
        <div className="game-card">
            <h2>{game.name}</h2>
            <p>{game.address}</p>
            <p>Spettatori:  {game.numberOfPeople}</p>
            <p>{game.time ? game.time : "No time assinged yet."}</p>
            <p>{game.date.toString().split("T")[0].split('-').reverse().join("/")}</p>
            {/* <Grid
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
                <Link to={`/game/${game._id}`}>
                  <p>{game.name ? game.name : "Nessun Nome"}</p>
                </Link>
                <p>{game.address}</p>
              </Grid> */}
        </div>
    )
}

export default GameCard;