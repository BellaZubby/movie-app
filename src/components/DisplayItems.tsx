import React, { useState, useEffect } from 'react'
import { MovieShowsWrapper } from '@/styles/Styles.modules'
import axios from 'axios';
// import { trending } from '@/modules/ApiLinks';
import { CircularProgress } from '@mui/material';

// type declarations for api data.
export interface Movie {
    id:number;
    title:string;
    poster_path:string;
    release_date:string;
    vote_average:number;
    // for tv shows
    name:string;
    first_air_date:string;
  }

  interface DataProps {
    apiEndpoint: string;
    numberOfMovies: number;
    showButtons:boolean;
    tvShowOn:boolean;
    moviesOn:boolean;
    itemHeading:string;
  }

const DisplayItems:React.FC<DataProps> = ({apiEndpoint, numberOfMovies, showButtons, moviesOn, tvShowOn, itemHeading}) => {
    const [showItems, setShowItems] =useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading]= useState(false);

    
  
    // pagination from the API

    useEffect(() => {
        const fetchMovies = async() => {
            try{
                const response = await axios.get(`${apiEndpoint}`, {
                    params: {
                        page:currentPage,
                    },
                });
                const {results, total_pages} = response.data;
                setShowItems(results.slice(0, numberOfMovies));
                setTotalPages(total_pages);
                setTimeout(()=>{
                    setLoading(true);
                }, 1000);
            }catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchMovies();
    }, [currentPage, apiEndpoint, numberOfMovies]);

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
    
    // previous page button
    const nextItemsPage = () => {
        if(currentPage < totalPages) {
            setCurrentPage((nextPage) => nextPage + 1)
        }
    }

    // next page button

    const prevItemsPage = () => {
        if(currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1)
        }
    }
  return (
    <MovieShowsWrapper>
       {
        !loading ? (
            <div className='loadingOverlay'>
                <CircularProgress size={60} color="warning"/>
                <p>Loading</p>
            </div>
        ):(
            <>
            <div className="movieHeading">
                <h1>{itemHeading}</h1>
            </div>
                <div className="movieCard">
                    {showItems.map((items) => {
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
                    {showButtons && (
                        <div className="buttons">
                            {currentPage > 1 && (
                                <button className='btnPrev' onClick={prevItemsPage}>
                                    Back
                                </button>
                            )}
                            <p>
                                Page <b>{currentPage}</b>
                            </p>
                                {currentPage < totalPages && (
                                <button className='btnNext' onClick={nextItemsPage}>
                                    Next
                                </button>
                            )}
                            
                        </div>
                    )}
                </div>
            </>
        )
       }
    </MovieShowsWrapper>
  )
}

export default DisplayItems