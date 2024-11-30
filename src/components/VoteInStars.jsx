import { useGlobalContext } from "../contexts/GlobalContext";

export default function VoteInStars({ movieId }) {

    const { movies } = useGlobalContext();
    const movie = movies.find(movie => movie.id === movieId);

    function transformVote() {
        const starsForVote = Math.round(movie.vote_average / 2);
        const stars = [];

        for (let i = 0; i < 5; i++) {

            stars.push(
                i < starsForVote
                    ? <i key={i} className="bi bi-star-fill text-warning"></i>
                    : <i key={i} className="bi bi-star"></i>
            );

        }

        return stars;
    }

    return (
        <>
            <p>{transformVote()}</p>
        </>
    )
}