"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchIcon from "../public/assets/search.svg";
import MovieCard from "../components/MovieCard";
import BackImage from "../public/assets/back-posters.png";
import Footer from "@/components/Footer";
import "../app/globals.css";

const API_URL = "http://www.omdbapi.com?apikey=295e20d2";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  const renderMovies = () => {
    return (
      <div className="app">
        <div className="background-image absolute inset-0 z-[-1]">
          <Image src={BackImage} alt="Back Image" width={2072} height={800} className="back-image opacity-40 blur-sm" />
        </div>
          <h1>Movie Finder</h1>
          <div className="search w-[80%] xl:w-[40%]">
            <input
              placeholder="Search for movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Image
              src={SearchIcon}
              alt="Search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>

          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}

          <Footer />
        </div>
    );
  };

  return renderMovies();
};

export default App;
