import CoverPage from '@/components/CoverPage'
import DisplayItems from '@/components/DisplayItems'
import { popular, apiKey, popularShows } from '@/modules/ApiLinks'
import {useState, useEffect} from 'react'


const itemsProps = {
    numberOfMovies: 10,
    showButtons: true
  }

const Popular = () => {

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
        title='Popular Movies'
        description='Watch your favourite movies of all time'
        headerImage={headerImage}
        catchyPhrase='The movies which are popular this week'
        showHeaderImage={true}
      />
      <DisplayItems 
        {...itemsProps}
        apiEndpoint={`${popular}?api_key=${apiKey}`} 
        itemHeading='Popular Movies'
        moviesOn= {true}
        tvShowOn= {false}
        
      />
       <DisplayItems 
        {...itemsProps}
        apiEndpoint={`${popularShows}?api_key=${apiKey}`} 
        itemHeading='Popular Shows'
        moviesOn= {false}
        tvShowOn= {true}
        
      />
    </div>
  )
}

export default Popular