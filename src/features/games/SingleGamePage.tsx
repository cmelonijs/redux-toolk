import { Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getGameById } from "./GameSlice";

const SingleGamePage = () => {
  const dispatch = useAppDispatch();
  const {singleGame} = useAppSelector(state => state.games);
  const {id} = useParams()

  useEffect(() => {
    if(!id) return;
    dispatch(getGameById(id))
  }, [id]);

  return <Container sx={{marginTop: 20}}>
      <Typography variant="h4" fontWeight="600">{`${singleGame?.address} - ${new Date(singleGame!.date).toLocaleDateString()}`}</Typography>
  </Container>;
};

export default SingleGamePage;