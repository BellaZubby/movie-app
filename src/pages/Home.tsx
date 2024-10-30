import CoverPage from '@/components/CoverPage';
import { trending, popular, trendingShows, apiKey, top_rated_shows, upcoming} from '@/modules/ApiLinks';
import DisplayItems from '@/components/DisplayItems';
// import coverPicture from '@/assets/coverImg1.jpg'
import { useEffect, useState } from 'react';
// import { Movie } from '@/components/DisplayItems';


const itemsProps = {
    numberOfMovies: 10,
    showButtons: true
  }

const Home = () => {

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
      console.log(apiKey)
    })

    .catch((err) => {
      console.error(err);
    })
  }, [])
  return (
    <div>
        <CoverPage
        title='Welcome to MovieHouse'
        description='Millions of movies and tv shows in one place'
        headerImage={headerImage}
        catchyPhrase="Don't miss out the entertainment"
        showHeaderImage={true}
        

      />
      <DisplayItems 
        {...itemsProps}
        apiEndpoint={`${trending}?api_key=${apiKey}`} 
        itemHeading='Trending Movies' moviesOn={true} tvShowOn={false}
        
      />
       <DisplayItems 
        {...itemsProps}
        apiEndpoint={`${upcoming}?api_key=${apiKey}`} 
        itemHeading='Upcoming Movies' moviesOn={true} tvShowOn={false}
        
      />
       <DisplayItems 
        {...itemsProps}
        apiEndpoint={`${popular}?api_key=${apiKey}`} 
        itemHeading='Popular Movies' moviesOn={true} tvShowOn={false}
        
      />
       <DisplayItems 
        {...itemsProps}
        apiEndpoint={`${trendingShows}?api_key=${apiKey}`} 
        itemHeading='Trending Shows' moviesOn={false} tvShowOn={true}
        
      />
      <DisplayItems 
        apiEndpoint={`${top_rated_shows}?api_key=${apiKey}`} 
        {...itemsProps} 
        itemHeading='Top Rated Shows'
        moviesOn={false} tvShowOn={true}
        
        />
    </div>
  )
}

export default Home