import { create } from "zustand";

type State =  {
    inputValue: string;
}

type Action = {
    setInputValue: (inputValue: string) => void
}

export const useSearchStore = create<State & Action>((set)=> ({
    inputValue: "",
    setInputValue: (inputValue)=> set({inputValue})
}))

interface Movies {
    imdbID:string;
    Title:string;
    Year:string;
    Poster:string;
    runtime:number;
    imdbRating:number;
    userRating:number;
}

export const useMovieApi = create<Movies[]>(()=> ([
    {
        imdbID: "tt1375666",
        Title: "Inception",
        Year: "2010",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        runtime: 148,
        imdbRating: 8.8,
        userRating: 10,
    },
    {
        imdbID: "tt0133093",
        Title: "The Matrix",
        Year: "1999",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        runtime: 148,
        imdbRating: 8.8,
        userRating: 10,
    },
    {
        imdbID: "tt6751668",
        Title: "Parasite",
        Year: "2019",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
        runtime: 136,
        imdbRating: 8.6,
        userRating: 10,
    },
]))

interface currentMovie {
    imdbID:string;
    Title:string;
    Year:string;
    Poster:string;
    runtime:number;
    imdbRating:number;
    userRating:number;
}
export const useCurrentMovie = create<currentMovie>(()=> {
    return {
        imdbID: "",
        Title: "",
        Year: "",
        Poster: "",
        runtime: 0,
        imdbRating: 0,
        userRating: 0,
    }
})


// interface MoviesApi {
//     movies: object[],
//     setMovies: (movies: object[])=> void
// }

// export const useMoviesApi = create<MoviesApi>((set)=> ({
//     movies: [],
//     setMovies: (movies)=> set({movies})
// }))