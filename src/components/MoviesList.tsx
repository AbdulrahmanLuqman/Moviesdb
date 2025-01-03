import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useMovieApi, useMoviesApi, useSearchStore } from "../store";
import { useEffect, useState } from "react";


const MoviesList = () => {
    const inputValue = useSearchStore((state)=> state.inputValue)
    const [expandMovie, setExpandMovie] = useState<boolean>(true)
    const tempMovieData = useMovieApi()
    // const currentMovie = 

    // const moviesData = useMoviesApi((state)=> state.movies)
    // const setMoviesData = useMoviesApi((state)=> state.setMovies)
    // // console.log(moviesData)

    // useEffect(()=> {
    //     const getMovies = async()=> {
    //         try{
    //             const result = await fetch("http://www.omdbapi.com/?apikey=f4bd033e&")
    //             const data = await result.json()
    //             if(data.Response === "True"){
    //                 setMoviesData(data)
    //             }
    //             console.log(data)
    //         }catch(error){
    //          console.error("error:", error)
    //         }
    //     }

    //     getMovies()
    // }, [])

      const filteredMovie = tempMovieData.filter(
        movie => movie.Title.toLowerCase()
        .includes(inputValue.toLowerCase()))

        const getCurrentMovie = (currentId: string) => {
            const currentMovie = filteredMovie.find(movie => movie.imdbID === currentId)
            console.log(currentMovie)
        }
  return (
    <div className="w-[350px] bg-[#2b3035] h-full rounded-md p-3 relative">
        <button onClick={()=> setExpandMovie(!expandMovie)} className="w-4 h-4 absolute right-3 bg-[#212529] rounded-[50%] text-white">
            <MinusIcon className={expandMovie ? "block" : "hidden"} />
            <PlusIcon className={!expandMovie ? "block" : "hidden"} />
        </button>
        <ul className="flex flex-col gap-4">
            { expandMovie &&
                (inputValue &&
                filteredMovie.map(movieData => <li key={movieData.imdbID} onClick={()=> getCurrentMovie(movieData.imdbID)} className="p-2 cursor-pointer rounded-md flex gap-6 items-center hover:bg-[#343a40]">
                    <img src={movieData.Poster} className="w-8" alt={movieData.Title} />
                    <div>
                        <h2 className="font-semibold">{movieData.Title}</h2>
                        <div className="flex items-center gap-1 text-sm">
                            <span>📝</span>
                            <span>{movieData.Year}</span>
                        </div>
                    </div>
                </li>))
            }
        </ul>
    </div>
  )
}

export default MoviesList