import { MinusIcon } from "@heroicons/react/20/solid";
import StarRating from "./StarRating";
import { useState } from "react";
import { useMovieApi } from "../store";
const MoviesClicked = () => {
    const [showAboutMovie, setShowAboutMovie] = useState<boolean>(true)
    const movie = useMovieApi()[0]

    console.log(movie)
    return (
      <div className="w-[350px] bg-[#2b3035] h-full rounded-md overflow-hidden">
          <div className="relative bg-[#343a40] w-full p-3">
            <button className="w-4 h-4 absolute right-3 bg-[#212529] rounded-[50%] text-white">
                <MinusIcon />
            </button>
            {
              !showAboutMovie ? (
                <div className="py-3 space-y-1">
                <h3 className="font-semibold">Movies you watched</h3>
                <div className="flex gap-4">
                  <div className="flex gap-1 w-fit text-sm">
                    <span>⭐</span>
                    <span>{0} movies</span>
                  </div>
                  <div className="flex gap-1 w-fit text-sm">
                    <span>⭐</span>
                    <span>{0.0}</span>
                  </div>
                  <div className="flex gap-1 w-fit text-sm">
                    <span>⭐</span>
                    <span>{0.0}</span>
                  </div>
                  <div className="flex gap-1 w-fit text-sm">
                    <span>⭐</span>
                    <span>{0} min</span>
                  </div>
                </div>
              </div>
              ) : (
                <div>
                  <div>
                    <img src={movie.Poster} alt="" />
                    <div>
                      <h1>{movie.title}</h1>
                      
                    </div>
                  </div>
                </div>
              )
            }

          </div>

          <StarRating />
      </div>
    )
  }
  
  export default MoviesClicked