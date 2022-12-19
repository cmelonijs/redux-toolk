import { useAppSelector } from "../../store/store";

const GamePage = () => {
    const {games} = useAppSelector(state => state.games)
    return (
        <div>
            <h1>Game Page</h1>
            <ul>
                {games && games.map((game) => {
                    return (
                        <li key={game._id}>
                            <p>{game.name}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GamePage;