import { useState, useEffect } from 'react';

export function MyDrive() {
 
  const [ movies, setMovies ] = useState([]);
  
  useEffect(()=>{
  fetch("https://node-sriram.herokuapp.com/users")
  .then((data) =>data.json())
  .then((mvs=>setMovies(mvs)));
}, []);

    return (
      <div className="container">
        {
          movies.map((movie)=> {
            return(
              <div className="moviecontainer">
                <img className="image" src={movie.pic} />
                <h2>Firstname : {movie.firstname}</h2>
                <h2>Lastname: {movie.lastname}</h2>
                <hr />
                </div>
            )
          })
        }
      </div>
    )
          }