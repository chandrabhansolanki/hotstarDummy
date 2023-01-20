import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieCard from "./components/movieCard/MovieCard";
import MovieDetails from "./components/movieCard/MovieDetails";
import Header from "./components/Header/Header";


export default function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="/details" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
