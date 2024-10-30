import React, { useState } from "react";
import useMovieData from "@/shared/useMovieData"


interface DataProps {
   
    tvShowOn:boolean;
    moviesOn:boolean;
  }


const MovieSearchBar = ({moviesOn,tvShowOn}: DataProps) => {
    const [query, setQuery] = useState("");
    const {data, error, fetchMovies} = useMovieData();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e?.target.value;
        setQuery(value);
        fetchMovies(value);
    }

    // function to change the date format
    function getFormattedDate(dateString:string | number | Date) {
        const options= {
            year: "numeric",
            month: "short",
            day: "numeric"
        } as Intl.DateTimeFormatOptions;
        const date = new Date(dateString);
        return date.toLocaleDateString("en-Us", options);
    }  
    
    const filteredMovies = data?.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase())
    )

  return (
    <div>
      <input 
      type="search" 
      placeholder="Search 10000 of Movies..." 
      value={query}
      onChange={handleInputChange}
      />
      <button>Search</button>
      {error && <div>{`Error: ${error}`}</div>}
      <div>
        {
         filteredMovies ? (
                <div>
                                {filteredMovies?.map((items) => {
                const percentage = (items.vote_average/10) * 100;
                return (
                    <div key={items.id}>
                    <div className='movie'>
                    <div className="movieImage">
                        <img src={`https://image.tmdb.org/t/p/w200/${items.poster_path}`} alt="img"/>
                        <span>{percentage.toFixed(0)}%</span>
                    </div>
                    <div className="movieInfo">
                        {moviesOn && (
                            <>
                                <h4>{items.title}</h4>
                                <p>{getFormattedDate(items.release_date)}</p>
                            </>
                        )}

                        {tvShowOn && (
                            <>
                            <h4>{items.name}</h4>
                            <p>{getFormattedDate(items.first_air_date)}</p>
                            </>
                        )}
                    </div>
                    </div>
                    </div>
                )
            })}
                </div>
            ): (
                <div>
                    {query && "No Movies found"}
                </div>
            )    
            
        }

     
      </div>
    </div>
  );
};

export default MovieSearchBar;
