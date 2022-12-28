import { Typography, Container, TextField } from "@mui/material"

const CreateGamePage = () => {
    return (
        <Container>
            <Typography variant="h4">create game</Typography>
            <TextField label="name" />
            <TextField label="address" />
            <TextField label="numberOfPeople" />
            <TextField label="date" />
            <TextField label="time" />
            <TextField label="fieldNumber" />
        </Container>
    )
}

export default CreateGamePage;