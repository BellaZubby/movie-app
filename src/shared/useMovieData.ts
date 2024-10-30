import { apiKey, now_playing, popular, top_rated_movies, trending, upcoming } from '@/modules/ApiLinks';
import {useState, useCallback} from 'react';

type Movie = {
    id:number;
    title:string;
    poster_path:string;
    release_date:string;
    vote_average:number;
    // for tv shows
    name:string;
    first_air_date:string; 
}

const useMovieData = () => {
    const [data, setData] = useState<Movie[] |null>(null);
    const [error, setError] = useState<String|null>(null);

    const fetchMovies = useCallback(async(query:string) => {

        try {
            const endpoints = [
                `${trending}?api_key=${apiKey}&query=${query}`,
                `${upcoming}?api_key=${apiKey}&query=${query}`,
                `${now_playing}?api_key=${apiKey}&query=${query}`,
                `${popular}?api_key=${apiKey}&query=${query}`,
                `${top_rated_movies}?api_key=${apiKey}&query=${query}`,

            ];

            const responses = await Promise.all(endpoints.map(endpoint => fetch(endpoint)));
            const results = await Promise.all(responses.map(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching movies: ${response.statusText}`);
                }
                return response.json();
            }));

            const combinedResults = results.flatMap(result => result.results);
            setData(combinedResults);
        } catch(err:any) {
            setError(err.message);
            console.error('Error fetching movies: ', err);
        }

    }, []);

    return {data, error, fetchMovies};
};

export default useMovieData;