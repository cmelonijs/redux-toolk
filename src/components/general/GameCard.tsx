import { Game } from "../../interfaces/Games";

interface GameCardProps {
    game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
    return (
        <div>
            <h2>{game.name}</h2>
            <p>{game.address}</p>
            <p>{game.numberOfPeople}</p>
            <p>{game.time ? game.time : "No time assinged yet."}</p>
        </div>
    )
}

export default GameCard;