import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCart from "./MovieCart";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchterm, setsearchterm] = useState("");
  const [genre, setgenre] = useState("All Genre");
  const [rating, setrating] = useState("All");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const handleSearchChange = (e) => {
    setsearchterm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setgenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setrating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genre" || movie.genre.toLowerCase() === genre.toLowerCase()
    ); // Fix the "All Genre" match here
  };

  const matchesSearchTerm = (movie, searchterm) => {
    return movie.title.toLowerCase().includes(searchterm.toLowerCase());
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearchTerm(movie, searchterm)
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="search movies..."
        value={searchterm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genre</option> {/* Ensure this matches the condition */}
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCart movie={movie} key={movie.id}></MovieCart>
        ))}
      </div>
    </div>
  );
}
