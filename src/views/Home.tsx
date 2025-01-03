import Header from "../components/Header"
import MoviesClicked from "../components/MoviesClicked"
import MoviesList from "../components/MoviesList"

const Home = () => {

  return (
    <div>
      <Header />
      <div className="flex gap-10 pt-5 justify-center h-[85vh]">
        <MoviesList />
        <MoviesClicked />
      </div>
    </div>
  )
}

export default Home