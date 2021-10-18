import { useState, useEffect } from "react";
import "./mydrive.css";

export function MyDrive() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://googledrive-b262wd.herokuapp.com/userfiles")
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  }, []);

  return (
    <div className="container App">
      <h2 className="viewfile" >View you Files</h2>
      <div className="row">
      {movies.map((movie) => {
        return (
          // <div className="row">
              <div class="col-3 centralise card">
              <img src={movie.filepath} width="150" height="150" />
              <h4>Filename : {movie.filename}</h4>
              <h4>Filetype: {movie.filetype}</h4></div>
          // </div>
        );
      })}</div>
    </div>
  );
}
