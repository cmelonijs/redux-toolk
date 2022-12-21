import { useCallback, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./features/games/GamePage";
import { getGames } from "./features/games/GameSlice";
import { useAppDispatch } from "./store/store";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
