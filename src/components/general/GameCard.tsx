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
      <p>Spettatori: {game.numberOfPeople}</p>
      <p>{game.time ? game.time : "No time assinged yet."}</p>
      <p>{game.date.toString().split("T")[0].split("-").reverse().join("/")}</p>
    </div>
  );
};

export default GameCard;
