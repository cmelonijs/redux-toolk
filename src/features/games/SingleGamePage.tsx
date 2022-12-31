import { Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getGameById } from "./GameSlice";

const SingleGamePage = () => {
  const dispatch = useAppDispatch();
  const { singleGame } = useAppSelector((state) => state.games);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    dispatch(getGameById(id));
  }, [id]);

  return (
    <Container sx={{ marginTop: 20 }}>
      <Typography variant="h4" fontWeight="600">{`${
        singleGame?.time && singleGame?.time
      } - ${singleGame?.address} - ${
        singleGame?.date && new Date(singleGame!.date).toLocaleDateString()
      }`}</Typography>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h6">{singleGame?.name}</Typography>
        </Grid>
        <Grid item xs={4}>
           <Typography variant="h6">Numero spettatori: {singleGame?.numberOfPeople}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">{singleGame?.time}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleGamePage;
