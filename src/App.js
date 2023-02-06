import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=86b2b524'

const App = () => {

  const [movies, setMovies] = useState([])

  const [search, setSearch] = useState('')

  const searchMovies = async (title)=>{
    const res = await fetch(`${API_URL}&s=${title}`)

    const data = await res.json()
    setMovies(data.Search)
  }

  useEffect(()=>{
    searchMovies('Superman')
  }, [])

  
  
  return (
    <div className="app">
      
      <h1>Movie API Test</h1>

      <div className='search'>
        <input 
          placeholder='Search for movies' 
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <img 
          src={SearchIcon} 
          alt='search'
          onClick={()=> searchMovies(search)}
        />
      </div>
    
      {
        movies?.length > 0 ? 
        (          
          <div className='container'>
            {movies.map( (movie, pos)=>(
              <MovieCard movie={movie} key={pos}/>
            ))}
              
          </div>
        ) : 
        (
          <div className='empty'>
            <h2>No Movies Available</h2>
          </div>
        )
      }
     

    </div>
  );
}

// import React from 'react';
// import { useState, useEffect } from 'react';
// import BlogCard from './BlogCard';
// import './test.css'

// const App =()=>{

//   const [showBlog, setShowBlog] = useState(true);

//   const mObject = [
//     {
//       id: 1,
//       author: 'Author 1',
//       title: 'Title 1',
//       desc: 'Lorem ipsum dolor datah dimu Lorem ipsum dolor datah dimu Lorem ipsum dolor datah dimu Lorem ipsum dolor datah dimu',
//       date: '22 Jan, 2023'
//     },
//     {
//       id: 2,
//       author: 'Author 2',
//       title: 'Title 2',
//       desc: 'Lorem ipsum dolor datah dimu Lorem ipsum dolor datah dimu Lorem ipsum dolor datah dimu Lorem ipsum dolor datah dimu',
//       date: '01 Jan, 2023'
//     },
//     {
//       id: 3,
//       author: 'Author 3',
//       title: 'Title 2',
//       desc: 'Lorem ipsum dolor datah dimu Lorem ipsum dolor datah dimu Lorem ipsum dolor datah dimu Lorem ipsum dolor datah dimu',
//       date: '08 Jan, 2023'
//     }
//   ]

//   return (
//     <div className="App" style={{textAlign: 'center'}}>
//       {
//         showBlog === true ? ( 
//           <div className="blog">
//       {
//         mObject.map((item, pos)=>(

//           <BlogCard key={pos} post={item}/>
          
//         ))
//       }
//       </div>
//         ): null
//       }
      
//       <button onClick={()=>{showBlog === true ? setShowBlog(false) : setShowBlog(true)}}>
//         Hide
//       </button>
      
//     </div>
//   )
// }



// import React from 'react';
// import { useState, useEffect } from 'react';

// import Navbar from './component/Navbar';
// import ProductData from './ProductData';
// import './product.css'
// import ProductDetail from './component/ProductDetail';

// const App =()=>{

//   return (
//     <div className='App'>
//       <Navbar />
//       <ProductDetail product={ProductData}/>

//     </div>
//   )
// }

export default App;
