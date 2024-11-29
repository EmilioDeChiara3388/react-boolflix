import { useGlobalContext } from "../contexts/GlobalContext";
import Flag from "react-world-flags";
import FlagForLanguage from "./FlagForLanguage";
import VoteInStars from "./VoteInStars";

export default function ListOfResults() {

    const { movies } = useGlobalContext()

    return (
        <>
            <div className="container">
                <div className="row">
                    <h2 className="mb-4">Risultati Ricerca</h2>
                    {movies.length > 0 ? (
                        movies.filter(movie => movie.media_type !== "person").map((movie) => (
                            <div className="col-4 mb-4" key={movie.id}>

                                <div className="card p-3 text-light" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie.poster_path}` }} >
                                    <div className="details">
                                        <p className="m-2"> {movie.title || movie.name} </p>
                                        <p className="m-2"> {movie.original_title || movie.original_name} </p>
                                        <div className="p-2">
                                            <Flag
                                                code={FlagForLanguage(movie.original_language)}
                                                style={{ width: "30px", height: "20px" }}
                                            />
                                        </div>
                                        <div className="p-2">
                                            <VoteInStars movieId={movie.id} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    ) : (
                        <p>Nessun risultato</p>
                    )}
                </div>
            </div>
        </>

    )
}