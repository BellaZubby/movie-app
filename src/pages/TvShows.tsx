import CoverPage from '@/components/CoverPage'
import DisplayItems from '@/components/DisplayItems'
import { trendingShows, airing_today, top_rated_shows, apiKey, popularShows, popular } from '@/modules/ApiLinks'
import {useState, useEffect} from 'react'


const itemsProps = {
    numberOfMovies: 10,
    moviesOn: false,
    tvShowOn: true,
    showButtons: true
  }

const TvShows = () => {
  const [headerImage, setHeaderImage] = useState("")

  // Fetch the header image for homepage from the server
  useEffect(() => {
    fetch(`${popular}?api_key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];

      if(randomMovie && randomMovie.backdrop_path) {
        const imageUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`
        setHeaderImage(imageUrl)
      }
    })

    .catch((err) => {
      console.error(err);
    })
  }, [])
  return (
    <div>
        <CoverPage
        title='Your favourite shows'
        description='thousands of tv shows at one place'
        headerImage={headerImage}
        catchyPhrase='start binge watching'
        showHeaderImage={true}
      />
      <DisplayItems 
        {...itemsProps}
        apiEndpoint={`${trendingShows}?api_key=${apiKey}`} 
        itemHeading='Trending Shows'
        />
      <DisplayItems 
        {...itemsProps}
        apiEndpoint={`${airing_today}?api_key=${apiKey}`} 
        itemHeading='Now Streaming'
        
        
      />
      <DisplayItems 
        {...itemsProps}
        apiEndpoint={`${top_rated_shows}?api_key=${apiKey}`} 
        itemHeading='Top Rated Shows'
       
        
      />
       <DisplayItems 
        {...itemsProps}
        apiEndpoint={`${popularShows}?api_key=${apiKey}`} 
        itemHeading='Popular Shows'
        />
    </div>
  )
}

export default TvShows